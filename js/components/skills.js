/**
 * Skills Animation Component
 * Handles stagger animation for skill tags on scroll
 */

export function initSkillsAnimation() {
  const skillsGrid = document.querySelector('.skills-grid');
  if (!skillsGrid) return;

  // Check for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    skillsGrid.classList.add('animate');
    return;
  }

  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  skillsObserver.observe(skillsGrid);
}