/**
 * Hero Animations Component
 * Handles hero section entrance animations and typing effect
 */

export function initHeroAnimations() {
  const heroTitle = document.querySelector('.hero-content h1');
  if (!heroTitle) return;

  const heroText = "Ayansh Paliwal.";
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    heroTitle.textContent = heroText;
    return;
  }

  let charIndex = 0;
  let typeTimer = null;

  function typeWriter() {
    if (charIndex < heroText.length) {
      heroTitle.textContent = heroText.substring(0, charIndex + 1);
      charIndex++;
      typeTimer = setTimeout(typeWriter, 85);
    }
  }

  // Start immediately upon execution
  heroTitle.textContent = '';
  charIndex = 0;
  typeWriter();

  // Re-run if user clicks back to Home
  document.querySelectorAll('a[data-section]').forEach((link) => {
    if (link.getAttribute('data-section') === 'home') {
      link.addEventListener('click', () => {
        clearTimeout(typeTimer);
        charIndex = 0;
        heroTitle.textContent = '';
        setTimeout(typeWriter, 80);
      });
    }
  });
}