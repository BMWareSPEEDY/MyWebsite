/**
 * Telemetry — hero tachometer
 *
 * Two phases:
 *  1. A sweep from idle up to peak when the home page is shown.
 *  2. An irregular "idle hunt" — the engine never sits still. The needle keeps
 *     blipping, lifting and settling the way a real car hunts on the limiter,
 *     and the value arc tracks it so the colour always meets the needle.
 */

const IDLE_ANGLE = -90;
const MAX_RPM = 15;
const PEAK_RPM = 15.0; // Extreme end of the tachometer dial

// Desired RPM operating ranges:
// Idle sits comfortably in the 3.8 - 4.5 range (~4.0)
const IDLE_MIN_RPM = 3.8;
const IDLE_BASE_RPM = 4.2;
const IDLE_MAX_RPM = 4.8;

// Arc length of the semicircle, r = 74.
const ARC_LENGTH = Math.PI * 74;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const angleForFraction = (fraction) => IDLE_ANGLE + fraction * 180;

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initTelemetry() {
  const needle = document.querySelector('.tacho-needle');
  if (!needle) return;

  const fill = document.querySelector('.tacho-fill');
  const readout = document.getElementById('tacho-value');

  // Disable CSS transitions completely so JavaScript has frame-by-frame 60/120fps control
  // with zero desync, zero abrupt interruptions, and smooth deceleration curves.
  needle.style.transition = 'none';
  if (fill) fill.style.transition = 'none';

  let currentRpm = 0;
  let targetRpm = 0;
  let animRaf = 0;
  let huntTimeout = 0;
  let running = false;

  /* ------------------------------------------------------------------
   * High-Fidelity BMW M5 V8 Engine Audio Engine
   * 3-Layer Continuous Equal-Power Crossfade Audio Model:
   *  - assets/m5_layer_idle.mp3: Deep low-end V8 rumble & combustion base (3.6s)
   *  - assets/m5_layer_mid.mp3: Mid-RPM throttle pull & cruising tone (3.5s)
   *  - assets/m5_layer_high.mp3: High-RPM screaming twin-turbo stationary roar (3.8s)
   *  - assets/m5_pop1.mp3, m5_pop2.mp3, m5_pop3.mp3: Unclipped limiter pops
   * Continuous equal-power crossfade ensures 100% seamless blending across all RPMs.
   * Long loops with phase decorrelation eliminate repetitive looping when parked at an RPM.
   * ------------------------------------------------------------------ */
  const soundToggleBtn = document.getElementById('tacho-sound-toggle');
  let audioCtx = null;
  let masterGain = null;
  let engineFilter = null;

  let idleSource = null;
  let idleGain = null;
  let midSource = null;
  let midGain = null;
  let highSource = null;
  let highGain = null;

  let idleBuffer = null;
  let midBuffer = null;
  let highBuffer = null;
  const popBuffers = [];
  let popIndex = 0;
  let audioEnabled = false;
  let isLoadingAudio = false;

  // Cached raw ArrayBuffers preloaded before user click
  const audioCache = new Map();

  const prefetchAudioFiles = async () => {
    const urls = [
      'assets/m5_layer_idle.mp3',
      'assets/m5_layer_mid.mp3',
      'assets/m5_layer_high.mp3',
      'assets/m5_pop1.mp3',
      'assets/m5_pop2.mp3',
      'assets/m5_pop3.mp3'
    ];
    await Promise.all(urls.map(async (url) => {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const buf = await res.arrayBuffer();
          audioCache.set(url, buf);
        }
      } catch (_) {}
    }));
  };

  // Prefetch audio assets immediately in background
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => prefetchAudioFiles());
  } else {
    setTimeout(prefetchAudioFiles, 300);
  }

  const loadBuffer = async (url) => {
    try {
      let arrayBuffer = audioCache.get(url);
      if (!arrayBuffer) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status} fetching ${url}`);
        arrayBuffer = await response.arrayBuffer();
      }
      // clone buffer because decodeAudioData detaches the arrayBuffer
      const bufferCopy = arrayBuffer.slice(0);
      return await audioCtx.decodeAudioData(bufferCopy);
    } catch (err) {
      console.warn(`Failed to decode engine audio sample: ${url}`, err);
      return null;
    }
  };

  const initAudio = async () => {
    if (!audioCtx) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();

        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
        masterGain.connect(audioCtx.destination);

        // Acoustic tone filter: warm, resonant exhaust chamber acoustics
        engineFilter = audioCtx.createBiquadFilter();
        engineFilter.type = 'lowpass';
        engineFilter.frequency.setValueAtTime(2200, audioCtx.currentTime);
        engineFilter.Q.setValueAtTime(1.1, audioCtx.currentTime);
        engineFilter.connect(masterGain);
      } catch (e) {
        console.warn('Web Audio not supported:', e);
        return;
      }
    }

    if (!idleBuffer && !isLoadingAudio) {
      isLoadingAudio = true;
      if (soundToggleBtn && !soundToggleBtn.classList.contains('is-active')) {
        soundToggleBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Starting M5...</span>';
      }
      try {
        const [idle, mid, high, p1, p2, p3] = await Promise.all([
          loadBuffer('assets/m5_layer_idle.mp3'),
          loadBuffer('assets/m5_layer_mid.mp3'),
          loadBuffer('assets/m5_layer_high.mp3'),
          loadBuffer('assets/m5_pop1.mp3'),
          loadBuffer('assets/m5_pop2.mp3'),
          loadBuffer('assets/m5_pop3.mp3')
        ]);
        idleBuffer = idle;
        midBuffer = mid;
        highBuffer = high;
        if (p1) popBuffers.push(p1);
        if (p2) popBuffers.push(p2);
        if (p3) popBuffers.push(p3);
      } finally {
        isLoadingAudio = false;
      }
    }
  };

  let activeSources = [];

  const cleanupSources = () => {
    activeSources.forEach((src) => {
      try {
        src.stop(0);
        src.disconnect();
      } catch (_) {}
    });
    activeSources = [];
    idleSource = null;
    midSource = null;
    highSource = null;
  };

  const startEnginePlayback = () => {
    if (!audioCtx || !idleBuffer) return;
    try {
      cleanupSources();
      const now = audioCtx.currentTime;

      // 1. Idle Layer
      idleGain = audioCtx.createGain();
      idleGain.gain.setValueAtTime(0.42, now);
      idleGain.connect(engineFilter);

      idleSource = audioCtx.createBufferSource();
      idleSource.buffer = idleBuffer;
      idleSource.loop = true;
      idleSource.playbackRate.setValueAtTime(1.0, now);
      idleSource.connect(idleGain);
      idleSource.start(0, 0);
      activeSources.push(idleSource);

      // 2. Mid Layer
      if (midBuffer) {
        midGain = audioCtx.createGain();
        midGain.gain.setValueAtTime(0, now);
        midGain.connect(engineFilter);

        midSource = audioCtx.createBufferSource();
        midSource.buffer = midBuffer;
        midSource.loop = true;
        midSource.playbackRate.setValueAtTime(1.0, now);
        midSource.connect(midGain);
        midSource.start(0, 0.4);
        activeSources.push(midSource);
      }

      // 3. High Redline Layer
      if (highBuffer) {
        highGain = audioCtx.createGain();
        highGain.gain.setValueAtTime(0, now);
        highGain.connect(engineFilter);

        highSource = audioCtx.createBufferSource();
        highSource.buffer = highBuffer;
        highSource.loop = true;
        highSource.playbackRate.setValueAtTime(1.0, now);
        highSource.connect(highGain);
        highSource.start(0, 0.8);
        activeSources.push(highSource);
      }

      updateEngineAudio(currentRpm);
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(0, now);
      masterGain.gain.linearRampToValueAtTime(0.50, now + 0.08);
    } catch (err) {
      console.warn('Error starting engine playback:', err);
    }
  };

  const stopEnginePlayback = () => {
    if (!audioCtx || !masterGain) return;
    const now = audioCtx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(0, now + 0.05);
    window.setTimeout(() => {
      cleanupSources();
    }, 60);
  };

  const triggerPopCrackle = () => {
    if (!audioCtx || !audioEnabled || popBuffers.length === 0) return;
    try {
      const now = audioCtx.currentTime;
      const buffer = popBuffers[popIndex % popBuffers.length];
      popIndex++;

      // Duck continuous engine volume slightly for 70ms so gunshot pop punches through cleanly
      if (masterGain) {
        masterGain.gain.cancelScheduledValues(now);
        masterGain.gain.setValueAtTime(masterGain.gain.value, now);
        masterGain.gain.linearRampToValueAtTime(0.28, now + 0.012);
        masterGain.gain.linearRampToValueAtTime(0.50, now + 0.085);
      }

      const popSource = audioCtx.createBufferSource();
      popSource.buffer = buffer;
      popSource.playbackRate.value = 0.97 + Math.random() * 0.06;

      const popFilter = audioCtx.createBiquadFilter();
      popFilter.type = 'highpass';
      popFilter.frequency.setValueAtTime(70, now);

      const popGain = audioCtx.createGain();
      popGain.gain.setValueAtTime(0.58 + Math.random() * 0.08, now);

      popSource.connect(popFilter);
      popFilter.connect(popGain);
      popGain.connect(masterGain);

      popSource.start(now);
    } catch (err) {
      // ignore
    }
  };

  const updateEngineAudio = (rpm) => {
    if (!audioCtx || !audioEnabled || !idleSource) return;
    const now = audioCtx.currentTime;

    // Organic micro-drift: ensures parked/sustained RPMs never sound static
    const microDrift = Math.sin(now * 0.8) * 0.005 + Math.cos(now * 1.3) * 0.003;

    // Detect throttle lift / deceleration:
    // When target is below current by > 0.6k RPM, throttle is closed and engine is winding down
    const isDecel = (targetRpm < currentRpm - 0.6);

    let wIdle = 0;
    let wMid = 0;
    let wHigh = 0;

    if (isDecel) {
      // Deceleration overrun: High winds down directly into Idle without Mid rev flare
      if (rpm >= 11.0) {
        wIdle = 0.0;
        wMid = 0.0;
        wHigh = 1.0;
      } else if (rpm >= 5.5) {
        const t = (rpm - 5.5) / 5.5;
        wHigh = t;
        wIdle = 1.0 - t;
        wMid = 0.0;
      } else {
        wIdle = 1.0;
        wMid = 0.0;
        wHigh = 0.0;
      }
    } else {
      // Acceleration / Steady: Tight handover zones so only ONE engine layer dominates
      if (rpm <= 5.2) {
        wIdle = 1.0;
        wMid = 0.0;
        wHigh = 0.0;
      } else if (rpm <= 7.2) {
        const t = (rpm - 5.2) / 2.0;
        const angle = t * (Math.PI / 2);
        wIdle = Math.cos(angle);
        wMid = Math.sin(angle);
        wHigh = 0.0;
      } else if (rpm <= 11.8) {
        wIdle = 0.0;
        wMid = 1.0;
        wHigh = 0.0;
      } else if (rpm <= 13.2) {
        const t = (rpm - 11.8) / 1.4;
        const angle = t * (Math.PI / 2);
        wIdle = 0.0;
        wMid = Math.cos(angle);
        wHigh = Math.sin(angle);
      } else {
        wIdle = 0.0;
        wMid = 0.0;
        wHigh = 1.0;
      }
    }

    // Closed-throttle attenuation during deceleration
    const loadFactor = isDecel ? 0.78 : 1.0;
    const baseVol = 0.44 * loadFactor;

    idleGain.gain.setTargetAtTime(wIdle * baseVol, now, 0.005);
    if (midGain) midGain.gain.setTargetAtTime(wMid * (baseVol * 1.04), now, 0.005);
    if (highGain) highGain.gain.setTargetAtTime(wHigh * (baseVol * 1.12), now, 0.005);

    // Dynamic pitch tracking: clamped strictly within natural acoustic boundaries
    const rateIdle = clamp(0.94 + ((rpm - 4.2) / 16.0) + microDrift, 0.90, 1.25);
    idleSource.playbackRate.setTargetAtTime(rateIdle, now, 0.005);

    if (midSource) {
      const rateMid = clamp(0.96 + ((rpm - 9.0) / 18.0) + microDrift, 0.88, 1.22);
      midSource.playbackRate.setTargetAtTime(rateMid, now, 0.005);
    }

    if (highSource) {
      const rateHigh = clamp(0.96 + ((rpm - 13.5) / 20.0) + microDrift, 0.85, 1.15);
      highSource.playbackRate.setTargetAtTime(rateHigh, now, 0.005);
    }

    // Acoustic tone filter: opens up into unrestricted screaming twin-turbo roar at high RPM
    const fraction = clamp(rpm / MAX_RPM, 0, 1);
    const filterMax = isDecel ? 5000 : 8500;
    const cutoff = 1800 + Math.pow(fraction, 1.2) * (filterMax - 1800);
    engineFilter.frequency.setTargetAtTime(cutoff, now, 0.008);
  };

  let isTogglingSound = false;

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (isTogglingSound) return;
      isTogglingSound = true;
      try {
        await initAudio();
        if (!audioCtx) return;

        if (audioCtx.state === 'suspended') {
          await audioCtx.resume();
        }

        audioEnabled = !audioEnabled;
        if (audioEnabled) {
          soundToggleBtn.classList.add('is-active');
          soundToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i> <span>M5 V8 ON</span>';
          startEnginePlayback();
        } else {
          soundToggleBtn.classList.remove('is-active');
          soundToggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i> <span>M5 Audio</span>';
          stopEnginePlayback();
        }
      } finally {
        setTimeout(() => { isTogglingSound = false; }, 200);
      }
    });
  }

  const render = (rpm) => {
    const fraction = clamp(rpm / MAX_RPM, 0, 1);
    const angle = angleForFraction(fraction);
    needle.style.transform = `rotate(${angle}deg)`;
    if (fill) {
      fill.style.strokeDashoffset = String(ARC_LENGTH * (1 - fraction));
    }
    if (readout) {
      readout.textContent = Math.max(0, rpm).toFixed(1);
    }
    updateEngineAudio(rpm);
  };

  // Continuous smooth physics loop
  let lastTime = performance.now();
  let customFollowSpeed = null;

  const loop = (now) => {
    if (!running) return;
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    // Follow speed adjusts dynamically for aggressive snaps or smooth glides
    const baseFollow = targetRpm > currentRpm ? 7.5 : 5.0;
    const speed = customFollowSpeed || baseFollow;
    const diff = targetRpm - currentRpm;
    currentRpm += diff * (1 - Math.exp(-speed * dt));

    render(currentRpm);
    animRaf = requestAnimationFrame(loop);
  };

  /**
   * Choreographed Revving Sequence:
   * 1. Low idle warm-up (3.8 - 4.4k)
   * 2. Full throttle power pull to the extreme end of the dial (15.0k RPM)
   * 3. Ignition-cut Hard Rev Limiter Bounce right at the extreme end:
   *    Needle hits 15.0, ECU cuts ignition -> needle dips to 14.5k -> raw fuel detonates
   *    in exhaust tract -> LOUD POP/BANG -> needle kicks back to 15.0k limiter!
   * 4. Clean, smooth engine overrun decel (throttle release) from 15.0k down to 4.1k idle
   * 5. Low idle breathing (3.9 - 4.4k)
   * 6. Mid-range cruising pull (7.4 - 8.2k)
   * 7. Rapid twin downshift blips & smooth return to sweet idle
   */
  const runSequence = () => {
    if (!running || prefersReducedMotion()) return;

    // Steps queue: [{ target, hold, speed?, pop? }]
    const sequenceSteps = [
      // 1. Gentle low idle rumble
      { target: 4.1, hold: 1000, speed: 4 },
      { target: 4.4, hold: 700, speed: 4 },
      { target: 3.9, hold: 800, speed: 4 },

      // 2. Wide-open throttle pull to the extreme end of the dial (15.0k RPM)
      { target: 15.0, hold: 550, speed: 11 },

      // 3. Ignition-cut Hard Rev Limiter Bounce (15.0k):
      { target: 14.5, hold: 160, speed: 16, pop: true }, // Limiter bounce 1 & Pop!
      { target: 15.0, hold: 200, speed: 16 },
      { target: 14.4, hold: 160, speed: 16, pop: true }, // Limiter bounce 2 & Pop!
      { target: 15.0, hold: 200, speed: 16 },
      { target: 14.6, hold: 160, speed: 16, pop: true }, // Limiter bounce 3 & Pop!
      { target: 15.0, hold: 220, speed: 16 },
      { target: 14.5, hold: 180, speed: 14, pop: true }, // Final limiter bang & throttle lift!

      // 4. Smooth throttle lift & clean engine overrun deceleration:
      // Single continuous natural descent all the way from redline to warm idle
      { target: 4.1, hold: 1900, speed: 4.2 },

      // 5. Low idle breathing
      { target: 4.4, hold: 800, speed: 3.5 },
      { target: 3.9, hold: 1000, speed: 3.5 },

      // 6. Mid-range cruising pull
      { target: 7.4, hold: 800, speed: 6 },
      { target: 8.2, hold: 700, speed: 5 },
      { target: 7.6, hold: 600, speed: 4.5 },

      // 7. Rapid twin downshift blips (blip... blip!)
      { target: 10.6, hold: 240, speed: 11 },
      { target: 6.8, hold: 220, speed: 8 },
      { target: 11.2, hold: 260, speed: 11 },
      { target: 4.2, hold: 1500, speed: 4.5 },
      { target: 4.0, hold: 1200, speed: 3.5 }
    ];

    let stepIndex = 0;

    const nextStep = () => {
      if (!running) return;
      const step = sequenceSteps[stepIndex];
      targetRpm = step.target;
      customFollowSpeed = step.speed || null;

      if (step.pop) {
        triggerPopCrackle();
      }

      stepIndex = (stepIndex + 1) % sequenceSteps.length;
      huntTimeout = window.setTimeout(nextStep, step.hold);
    };

    nextStep();
  };

  const startTelemetry = () => {
    if (huntTimeout) clearTimeout(huntTimeout);
    cancelAnimationFrame(animRaf);

    if (prefersReducedMotion()) {
      render(IDLE_BASE_RPM);
      return;
    }

    running = true;
    currentRpm = 0;
    targetRpm = PEAK_RPM; // Initial key-turn ignition sweep
    customFollowSpeed = 6.0;
    render(0);

    if (audioEnabled && audioCtx) {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      startEnginePlayback();
    }

    lastTime = performance.now();
    animRaf = requestAnimationFrame(loop);

    // Initial ignition sweep lands, rests, then enters the revving pattern
    huntTimeout = window.setTimeout(() => {
      if (!running) return;
      targetRpm = IDLE_BASE_RPM; // smooth drop to ~4.2k
      customFollowSpeed = 4.0;
      huntTimeout = window.setTimeout(runSequence, 1200);
    }, 1100);
  };

  const stopTelemetry = () => {
    running = false;
    if (huntTimeout) clearTimeout(huntTimeout);
    cancelAnimationFrame(animRaf);
    if (audioCtx && audioEnabled) {
      stopEnginePlayback();
    }
  };

  // Run on load
  window.setTimeout(startTelemetry, 250);

  // Re-run on navigation
  document.querySelectorAll('a[data-section]').forEach((link) => {
    const section = link.getAttribute('data-section');
    link.addEventListener('click', () => {
      if (section === 'home') window.setTimeout(startTelemetry, 100);
      else stopTelemetry();
    });
  });

  // Handle tab visibility
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopTelemetry();
    else startTelemetry();
  });
}

