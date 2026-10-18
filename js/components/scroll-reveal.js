/**
 * Scroll Reveal Component
 * Handles IntersectionObserver-based scroll animations for sections and cards
 */

export function initScrollReveal() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // Immediately show all elements if reduced motion is preferred
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('reveal-active');
    });
    document.querySelectorAll('.skills-grid').forEach(el => {
      el.classList.add('animate');
    });
    return;
  }

  // Options for the observer
  const revealObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  // Observe all reveal elements
  const revealElements = document.querySelectorAll(
    '.timeline-item, .post-card, .hobby-card, .info-card, .achievement-card, .blog-post, .category-section'
  );

  revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });

  // Skills grid stagger observer is now handled by skills.js
  // This avoids duplicate observers on the same element
}