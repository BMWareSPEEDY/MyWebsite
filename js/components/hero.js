/**
 * Hero Animations Component
 * Handles hero section entrance animations and typing effect
 */

export function initHeroAnimations() {
  // Check for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const heroTitle = document.querySelector('.hero-content h1');
  const heroText = "Ayansh Paliwal.";
  let charIndex = 0;

  function typeWriter() {
    if (!heroTitle) return;
    if (charIndex < heroText.length) {
      heroTitle.textContent = heroText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWriter, 100);
    }
  }

  // Start typing effect when page loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (heroTitle) {
        heroTitle.textContent = '';
        charIndex = 0;
        typeWriter();
      }
    }, 500);
  });
}