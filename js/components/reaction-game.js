/**
 * Lights Out — reaction test
 * A five-light race start. Lights come on one by one, go out at a random
 * moment and the player launches. Best time is kept in localStorage.
 */

const BEST_KEY = 'lo-best-ms';

const VERDICTS = [
  { max: 180, text: 'Alien reaction — that is a front-row launch.' },
  { max: 220, text: 'Race-winning start.' },
  { max: 260, text: 'Solid launch, no wheelspin.' },
  { max: 320, text: 'A little wheelspin off the line.' },
  { max: Infinity, text: 'Formation-lap pace. Send it again.' }
];

function verdictFor(ms) {
  return VERDICTS.find(v => ms < v.max).text;
}

function readBest() {
  const raw = Number(localStorage.getItem(BEST_KEY));
  return Number.isFinite(raw) && raw > 0 ? raw : null;
}

function format(ms) {
  return `${Math.round(ms)} ms`;
}

export function initReactionGame() {
  const lights = document.getElementById('lo-lights');
  const button = document.getElementById('lo-btn');
  if (!lights || !button) return;

  const bulbs = Array.from(lights.querySelectorAll('.lo-bulb'));
  const lastEl = document.getElementById('lo-last');
  const bestEl = document.getElementById('lo-best');
  const verdictEl = document.getElementById('lo-verdict');

  if (!bulbs.length) return;

  let state = 'idle'; // idle | arming | lights | go
  let startAt = 0;
  let timers = [];

  const clearTimers = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  const later = (fn, ms) => {
    timers.push(setTimeout(fn, ms));
  };

  const paint = (onCount, mode) => {
    bulbs.forEach((bulb, i) => {
      bulb.classList.toggle('on', i < onCount);
      bulb.classList.toggle('go', mode === 'go');
    });
  };

  const say = (text) => {
    if (verdictEl) verdictEl.textContent = text;
  };

  const setButton = (text, armed = false) => {
    button.textContent = text;
    button.classList.toggle('is-armed', armed);
  };

  const paintBest = () => {
    if (!bestEl) return;
    const best = readBest();
    bestEl.textContent = best === null ? '--' : format(best);
  };

  const reset = (text) => {
    clearTimers();
    state = 'idle';
    paint(0);
    setButton('Start');
    if (text) say(text);
  };

  const launch = () => {
    state = 'go';
    startAt = performance.now();
    paint(bulbs.length, 'go');
    setButton('GO!');
    say('Lights out — go go go!');
    later(() => paint(0), 450);
  };

  const startRun = () => {
    state = 'arming';
    paint(0);
    setButton('Wait for it…', true);
    say('Lights on — hold until they go out.');

    const firstLight = 900 + Math.random() * 1700;
    bulbs.forEach((_, i) => {
      later(() => {
        if (state !== 'arming' && state !== 'lights') return;
        state = 'lights';
        paint(i + 1);
      }, firstLight + i * 480);
    });

    later(() => {
      if (state !== 'arming' && state !== 'lights') return;
      launch();
    }, firstLight + bulbs.length * 480 + 500 + Math.random() * 1400);
  };

  const score = () => {
    const ms = performance.now() - startAt;
    state = 'idle';
    paint(0);
    if (lastEl) lastEl.textContent = format(ms);

    const best = readBest();
    if (best === null || ms < best) {
      localStorage.setItem(BEST_KEY, String(ms));
      paintBest();
      say(`New personal best — ${format(ms)}. ${verdictFor(ms)}`);
    } else {
      say(`${format(ms)}. ${verdictFor(ms)}`);
    }
    setButton('Go again');
  };

  button.addEventListener('click', () => {
    switch (state) {
      case 'idle':
        startRun();
        break;
      case 'arming':
      case 'lights':
        reset('Jump start — that is a penalty. Reset and go again.');
        break;
      case 'go':
        score();
        break;
    }
  });

  paintBest();
  reset('Press start to begin.');
}
