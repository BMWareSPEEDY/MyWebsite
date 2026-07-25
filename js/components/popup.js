/**
 * Popup Component
 * Handles blog post popups with focus trapping and accessibility
 */

import { sanitizeHTML } from '../utils/sanitize.js';

export function initPopups() {
  // Popup close buttons
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const popup = btn.closest('.popup');
      if (popup) closePopup(popup.id);
    });
  });

  // Close on backdrop click
  document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) closePopup(popup.id);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activePopup = document.querySelector('.popup.active');
      if (activePopup) closePopup(activePopup.id);
    }
  });
}

function openPopup(popupId, blogId) {
  const popup = document.getElementById(popupId);
  const data = window.blogPostsData?.[blogId];

  if (!popup || !data) return;

  // Populate popup content with sanitized HTML
  const titleEl = document.getElementById('popup-title');
  const metaEl = document.getElementById('popup-meta');
  const bodyEl = document.getElementById('popup-body');

  if (titleEl) titleEl.textContent = data.title;
  if (metaEl) metaEl.textContent = data.meta;
  if (bodyEl) bodyEl.innerHTML = sanitizeHTML(data.body);

  // Show popup
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus trapping
  const popupContent = popup.querySelector('.popup-content');
  if (popupContent) {
    // Remove existing trap if any
    if (popupContent._focusTrap) popupContent._focusTrap();
    popupContent._focusTrap = trapFocus(popupContent);
  }

  // Mark the trigger element for focus restoration
  const trigger = document.querySelector(`[data-popup-trigger="${popupId}"]`);
  if (trigger) {
    trigger.setAttribute('data-popup-trigger', popupId);
  }
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (!popup) return;

  popup.classList.remove('active');
  document.body.style.overflow = 'auto';

  // Restore focus to trigger element
  const trigger = document.querySelector(`[data-popup-trigger="${popupId}"]`);
  if (trigger) {
    trigger.focus();
    trigger.removeAttribute('data-popup-trigger');
  }

  // Clean up focus trap
  const popupContent = popup.querySelector('.popup-content');
  if (popupContent && popupContent._focusTrap) {
    popupContent._focusTrap();
    popupContent._focusTrap = null;
  }
}

// Focus trap utility
function getFocusableElements(container) {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
}

function trapFocus(container) {
  const focusableElements = getFocusableElements(container);
  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  function handleTab(e) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  container.addEventListener('keydown', handleTab);
  firstElement.focus();

  return () => container.removeEventListener('keydown', handleTab);
}

// Make available globally for inline onclick handlers (legacy support)
window.closePopup = closePopup;
window.openPopup = openPopup;