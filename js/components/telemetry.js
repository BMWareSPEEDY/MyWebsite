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

  const loadBuffer = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status} fetching ${url}`);
      const arrayBuffer = await response.arrayBuffer();
      return await audioCtx.decodeAudioData(arrayBuffer);
    } catch (err) {
      console.warn(`Failed to load engine audio sample: ${url}`, err);
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
        engineFilter.frequency.setValueAtTime(1400, audioCtx.currentTime);
        engineFilter.Q.setValueAtTime(1.2, audioCtx.currentTime);
        engineFilter.connect(masterGain);
      } catch (e) {
        console.warn('Web Audio not supported:', e);
        return;
      }
    }

    if (!idleBuffer && !isLoadingAudio) {
      isLoadingAudio = true;
      if (soundToggleBtn) {
        soundToggleBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Loading M5...</span>';
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

  const startEnginePlayback = () => {
    if (!audioCtx || !idleBuffer) return;
    try {
      // Clean up previous sources if any
      [idleSource, midSource, highSource].forEach((src) => {
        if (src) {
          try { src.stop(); src.disconnect(); } catch (_) {}
        }
      });

      const now = audioCtx.currentTime;

      // 1. Idle Layer (3.6s loop)
      idleGain = audioCtx.createGain();
      idleGain.gain.setValueAtTime(0.42, now);
      idleGain.connect(engineFilter);

      idleSource = audioCtx.createBufferSource();
      idleSource.buffer = idleBuffer;
      idleSource.loop = true;
      idleSource.playbackRate.setValueAtTime(1.0, now);
      idleSource.connect(idleGain);
      idleSource.start(0, 0);

      // 2. Mid Layer (3.5s loop, phase-offset 0.8s)
      if (midBuffer) {
        midGain = audioCtx.createGain();
        midGain.gain.setValueAtTime(0, now);
        midGain.connect(engineFilter);

        midSource = audioCtx.createBufferSource();
        midSource.buffer = midBuffer;
        midSource.loop = true;
        midSource.playbackRate.setValueAtTime(1.0, now);
        midSource.connect(midGain);
        midSource.start(0, 0.8);
      }

      // 3. High Redline Layer (3.8s loop, phase-offset 1.6s)
      if (highBuffer) {
        highGain = audioCtx.createGain();
        highGain.gain.setValueAtTime(0, now);
        highGain.connect(masterGain);

        highSource = audioCtx.createBufferSource();
        highSource.buffer = highBuffer;
        highSource.loop = true;
        highSource.playbackRate.setValueAtTime(1.0, now);
        highSource.connect(highGain);
        highSource.start(0, 1.6);
      }

      // Update crossfade weights immediately for current RPM
      updateEngineAudio(currentRpm);

      masterGain.gain.setTargetAtTime(0.50, now, 0.1);
    } catch (err) {
      console.warn('Error starting engine playback:', err);
    }
  };

  const stopEnginePlayback = () => {
    if (!audioCtx || !masterGain) return;
    masterGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.08);
    window.setTimeout(() => {
      if (!audioEnabled) {
        [idleSource, midSource, highSource].forEach((src) => {
          if (src) {
            try { src.stop(); src.disconnect(); } catch (_) {}
          }
        });
        idleSource = null;
        midSource = null;
        highSource = null;
      }
    }, 120);
  };

  const triggerPopCrackle = () => {
    if (!audioCtx || !audioEnabled || popBuffers.length === 0) return;
    try {
      const now = audioCtx.currentTime;
      const buffer = popBuffers[popIndex % popBuffers.length];
      popIndex++;

      // Pristine unclipped recorded BMW M exhaust pop with natural acoustic filtering
      const popSource = audioCtx.createBufferSource();
      popSource.buffer = buffer;
      popSource.playbackRate.value = 0.96 + Math.random() * 0.08;

      const popFilter = audioCtx.createBiquadFilter();
      popFilter.type = 'lowpass';
      popFilter.frequency.setValueAtTime(3400, now);

      const popGain = audioCtx.createGain();
      popGain.gain.setValueAtTime(0.42 + Math.random() * 0.08, now);

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

    // Organic micro-drift: ensures parked/sustained RPMs never sound like a static repeating tape loop
    const microDrift = Math.sin(now * 0.8) * 0.007 + Math.cos(now * 1.3) * 0.004;

    // ------------------------------------------------------------------
    // Equal-Power 3-Layer Crossfading:
    //  - Idle Layer (3.8k - 7.5k)
    //  - Mid Layer  (5.5k - 11.5k)
    //  - High Layer (10.0k - 15.0k)
    // At all times: wIdle² + wMid² + wHigh² = 1.0 (constant acoustic power!)
    // ------------------------------------------------------------------
    let wIdle = 0;
    let wMid = 0;
    let wHigh = 0;

    if (rpm <= 5.0) {
      wIdle = 1.0;
      wMid = 0.0;
      wHigh = 0.0;
    } else if (rpm <= 8.5) {
      // Equal-power crossfade between Idle and Mid
      const t = (rpm - 5.0) / 3.5;
      const angle = t * (Math.PI / 2);
      wIdle = Math.cos(angle);
      wMid = Math.sin(angle);
      wHigh = 0.0;
    } else if (rpm <= 10.5) {
      // Pure Mid-range
      wIdle = 0.0;
      wMid = 1.0;
      wHigh = 0.0;
    } else if (rpm <= 13.5) {
      // Equal-power crossfade between Mid and High
      const t = (rpm - 10.5) / 3.0;
      const angle = t * (Math.PI / 2);
      wIdle = 0.0;
      wMid = Math.cos(angle);
      wHigh = Math.sin(angle);
    } else {
      // Extreme High redline & limiter bounce (13.5k - 15.0k)
      wIdle = 0.0;
      wMid = 0.0;
      wHigh = 1.0;
    }

    // Smooth gain transition across layers (no abrupt steps or volume drops)
    const baseVol = 0.40;
    idleGain.gain.setTargetAtTime(wIdle * baseVol, now, 0.05);
    if (midGain) midGain.gain.setTargetAtTime(wMid * (baseVol * 1.08), now, 0.05);
    if (highGain) highGain.gain.setTargetAtTime(wHigh * (baseVol * 1.15), now, 0.05);

    // Dynamic pitch tracking: each layer gently responds around its native recorded RPM
    // Idle layer native center ~ 4.2k
    idleSource.playbackRate.setTargetAtTime(0.92 + ((rpm - 4.2) / 24.0) + microDrift, now, 0.04);

    // Mid layer native center ~ 8.0k
    if (midSource) {
      midSource.playbackRate.setTargetAtTime(0.95 + ((rpm - 8.0) / 28.0) + microDrift, now, 0.04);
    }

    // High layer native center ~ 13.5k
    if (highSource) {
      highSource.playbackRate.setTargetAtTime(0.96 + ((rpm - 13.5) / 32.0) + microDrift, now, 0.04);
    }

    // Master acoustic tone filter: opens up smoothly with throttle
    const fraction = clamp(rpm / MAX_RPM, 0, 1);
    const cutoff = 1200 + Math.pow(fraction, 1.25) * 4200;
    engineFilter.frequency.setTargetAtTime(cutoff, now, 0.05);
  };

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
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
   * 4. Clean, smooth engine decel (throttle release) from 15.0k down to 4.2k idle (no pops)
   * 5. Low idle breathing (4.0 - 4.4k)
   * 6. Mid-range cruising pull (7.2 - 8.2k)
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
      { target: 15.0, hold: 550, speed: 11 }, // aggressive climb to extreme redline!

      // 3. Ignition-cut Hard Rev Limiter Bounce right at the extreme end (15.0k):
      // Each time the needle bounces off the 15.0k limiter, the ignition cut fires an authentic gunshot pop/bang!
      { target: 14.5, hold: 150, speed: 15, pop: true }, // Limiter bounce 1 & Pop!
      { target: 15.0, hold: 200, speed: 16 },            // Needle surges back to 15.0k
      { target: 14.4, hold: 150, speed: 15, pop: true }, // Limiter bounce 2 & Pop!
      { target: 15.0, hold: 200, speed: 16 },            // Needle surges back to 15.0k
      { target: 14.6, hold: 150, speed: 15, pop: true }, // Limiter bounce 3 & Pop!
      { target: 15.0, hold: 220, speed: 16 },            // Needle surges back to 15.0k
      { target: 14.5, hold: 180, speed: 14, pop: true }, // Final limiter bang & throttle lift!

      // 4. Smooth throttle lift & clean engine overrun deceleration (NO pops on drop down):
      // The needle glides smoothly from 15.0 down through 10.2 -> 7.2 -> 5.2 -> 4.1
      { target: 10.2, hold: 320, speed: 6 },
      { target: 7.2, hold: 340, speed: 5 },
      { target: 5.2, hold: 360, speed: 4.5 },
      { target: 4.1, hold: 1200, speed: 4 }, // settles into sweet warm idle

      // 5. Low idle breathing
      { target: 4.4, hold: 800, speed: 3.5 },
      { target: 3.9, hold: 1000, speed: 3.5 },

      // 6. Mid-range cruising pull
      { target: 7.4, hold: 800, speed: 6 },
      { target: 8.2, hold: 700, speed: 5 },
      { target: 7.6, hold: 600, speed: 4.5 },

      // 7. Rapid twin downshift blips (blip... blip!)
      { target: 10.6, hold: 240, speed: 11 }, // first blip
      { target: 6.8, hold: 220, speed: 8 },
      { target: 11.2, hold: 260, speed: 11 }, // second blip
      { target: 4.2, hold: 1500, speed: 4.5 }, // smooth glide down to idle
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

