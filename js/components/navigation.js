/**
 * Navigation Component
 * Handles section switching, mobile menu, and active states
 */

export function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  // Section switching
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active class from all links and sections
      navLinks.forEach(nl => nl.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));

      // Add active class to clicked link
      link.classList.add('active');

      // Show corresponding section
      const targetSection = link.getAttribute('data-section');
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
        targetElement.classList.add('active');
      }

      // Close mobile menu if open
      if (navLinksContainer) {
        navLinksContainer.classList.remove('active');
      }

      // Update mobile menu icon
      if (mobileMenuToggle) {
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Mobile menu toggle
  if (mobileMenuToggle && navLinksContainer) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.className = navLinksContainer.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });
  }

  // Keyboard navigation for mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuToggle.click();
      }
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (header) {
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
    }

    lastScrollTop = scrollTop;
  }, { passive: true });
}