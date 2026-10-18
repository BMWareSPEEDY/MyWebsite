/**
 * Custom Cursor Component
 * Creates a custom cursor with hover states (respects prefers-reduced-motion)
 */

export function initCustomCursor() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

  if (prefersReducedMotion || isCoarsePointer) {
    // Don't initialize custom cursor on touch devices or if reduced motion
    return;
  }

  const dot = document.querySelector('.custom-cursor-dot');
  const outline = document.querySelector('.custom-cursor-outline');

  if (!dot || !outline) return;

  // Only now is it safe to hide the native cursor (see main.css).
  document.documentElement.classList.add('has-custom-cursor');

  let mouseX = -100;
  let mouseY = -100;
  let outlineX = -100;
  let outlineY = -100;
  let isMouseMoving = false;
  let animationFrameId = null;

  // Set initial position off-screen
  dot.style.opacity = '0';
  outline.style.opacity = '0';

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.left = outlineX + 'px';
    outline.style.top = outlineY + 'px';

    // Continue animation only if mouse is moving or outline is catching up
    const distance = Math.hypot(mouseX - outlineX, mouseY - outlineY);
    if (isMouseMoving || distance > 0.5) {
      animationFrameId = requestAnimationFrame(animateOutline);
    } else {
      // Reset animation frame ID so new movement can start fresh
      animationFrameId = null;
    }
  }

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';

    if (!isMouseMoving) {
      isMouseMoving = true;
      dot.style.opacity = '1';
      outline.style.opacity = '1';

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animateOutline);
      }
    }
  });

  // Hide cursor when mouse leaves window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    outline.style.opacity = '0';
    isMouseMoving = false;
  });

  // Hover states for interactive elements
  let refreshTimeout = null;
  let lastInteractiveCount = 0;

  const refreshInteractiveListeners = () => {
    const interactives = document.querySelectorAll(
      'a, button, .post-card, .achievement-card, .blog-post, .nav-link, .btn, .social-links a, .close-btn, [onclick]'
    );

    // Skip if no new elements added (avoid unnecessary re-binding)
    if (interactives.length === lastInteractiveCount) return;
    lastInteractiveCount = interactives.length;

    interactives.forEach(el => {
      // Remove existing listeners to avoid duplicates
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);

      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
  };

  function handleMouseEnter() {
    dot.classList.add('hover');
    outline.classList.add('hover');
  }

  function handleMouseLeave() {
    dot.classList.remove('hover');
    outline.classList.remove('hover');
  }

  // Initial setup
  refreshInteractiveListeners();

  // Debounced re-setup when DOM changes (e.g., after carousel navigation)
  // Only observe specific containers that change, not entire document.body
  const observer = new MutationObserver(() => {
    clearTimeout(refreshTimeout);
    refreshTimeout = setTimeout(refreshInteractiveListeners, 50);
  });

  // Observe only relevant containers instead of entire body
  const containers = [
    '.showcase-carousel',
    '.blog-posts',
    '.achievements-grid',
    '.projects-grid'
  ].map(sel => document.querySelector(sel)).filter(Boolean);

  containers.forEach(container => {
    observer.observe(container, { childList: true, subtree: true });
  });

  // Also observe the popups container for dynamic content
  const popupsContainer = document.querySelector('.popups-container') || document.body;
  observer.observe(popupsContainer, { childList: true, subtree: true });

  // Listen for reduced motion changes
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches) {
      dot.style.display = 'none';
      outline.style.display = 'none';
    }
  });
}