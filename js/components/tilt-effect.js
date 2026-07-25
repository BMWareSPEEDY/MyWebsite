/**
 * 3D Tilt Effect Component
 * Adds 3D parallax tilt to cards on mouse move
 * Uses event delegation for performance - only tilts hovered card
 */

let currentTiltCard = null;
let animationFrameId = null;

export function init3DTilt() {
  const cards = document.querySelectorAll('.post-card, .achievement-card, .blog-post');

  cards.forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.15s ease-out, box-shadow 0.15s ease-out';
    card.style.willChange = 'transform, box-shadow';
  });

  // Use event delegation on document for better performance
  document.addEventListener('mousemove', handleTiltMouseMove, { passive: true });
  document.addEventListener('mouseleave', handleTiltMouseLeave);
}

function handleTiltMouseMove(e) {
  // Find the card under the mouse (only one)
  const card = findCardUnderMouse(e);

  // If we're on a different card than before, reset the old one
  if (currentTiltCard && currentTiltCard !== card) {
    resetCard(currentTiltCard);
    currentTiltCard = null;
  }

  // If we're on a card, tilt it
  if (card) {
    currentTiltCard = card;
    tiltCard(card, e);
  }
}

function findCardUnderMouse(e) {
  const cards = document.querySelectorAll('.post-card, .achievement-card, .blog-post');
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom) {
      return card;
    }
  }
  return null;
}

function tiltCard(card, e) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const maxRotation = 8;
  const rotateX = ((centerY - y) / centerY) * maxRotation;
  const rotateY = ((x - centerX) / centerX) * maxRotation;

  // Use transform3d for hardware acceleration
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
}

function handleTiltMouseLeave(e) {
  // Check if we're actually leaving all cards
  const cards = document.querySelectorAll('.post-card, .achievement-card, .blog-post');
  let leavingAll = true;

  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom) {
      leavingAll = false;
      break;
    }
  }

  if (leavingAll && currentTiltCard) {
    resetCard(currentTiltCard);
    currentTiltCard = null;
  }
}

function resetCard(card) {
  card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
}