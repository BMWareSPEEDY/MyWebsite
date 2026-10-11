/**
 * Project Showcase Component
 * Renders the showcase carousel. Clicking (or pressing Enter/Space on) any
 * card jumps to the Projects page and highlights that specific project.
 */

import { sanitizeHTML } from '../utils/sanitize.js';

export function initProjectShowcase(projectsData) {
  const carousel = document.querySelector('.showcase-carousel');
  if (!carousel) return;

  // Projects marked for showcase
  const showcaseProjects = projectsData.completed.filter(p => p.showcase);

  carousel.innerHTML = showcaseProjects.map((project, index) => {
    const num = String(index + 1).padStart(2, '0');
    return `
      <div class="post-card showcase-card" data-project-id="${sanitizeHTML(project.id)}"
           tabindex="0" role="button" aria-label="View ${sanitizeHTML(project.title)} in projects">
        <div class="showcase-card-head">
          <span class="showcase-index">${num}</span>
          <span class="showcase-tag">Case Study</span>
        </div>
        <h3>${sanitizeHTML(project.title)}</h3>
        <p>${sanitizeHTML(project.showcaseDescription)}</p>
        <span class="showcase-view">View in Projects <i class="fas fa-arrow-right"></i></span>
      </div>
    `;
  }).join('');

  // Delegate: works for every card regardless of how it was dragged/clipped.
  carousel.addEventListener('click', (e) => {
    const card = e.target && typeof e.target.closest === 'function' ? e.target.closest('[data-project-id]') : null;
    if (card) openProject(card.getAttribute('data-project-id'));
  });

  carousel.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest?.('[data-project-id]');
    if (card) {
      e.preventDefault();
      openProject(card.getAttribute('data-project-id'));
    }
  });
}

let latestNav = { id: null, t: 0 };

/**
 * Navigate to the Projects section and highlight the matching card.
 * Reuses the nav link's click handler so both instant (live) and
 * cross-fading (fluid) section switching are supported.
 */
function openProject(projectId) {
  const now = Date.now();
  if (latestNav.id === projectId && now - latestNav.t < 450) return;
  latestNav = { id: projectId, t: now };

  const card = document.getElementById('project-' + projectId);
  const projectsSection = document.getElementById('projects');
  if (!card || !projectsSection) return;

  const projectsLink = document.querySelector('.nav-link[data-section="projects"]');
  if (projectsLink) {
    projectsLink.click();
  } else {
    document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    projectsSection.classList.add('active');
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Wait for the section to become active (cross-fade is async), then reveal.
  const settle = () => {
    if (projectsSection.classList.contains('active')) {
      card.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
      card.classList.add('is-highlighted');
      window.setTimeout(() => card.classList.remove('is-highlighted'), 2600);
    } else {
      window.setTimeout(settle, 60);
    }
  };
  window.setTimeout(settle, reducedMotion ? 0 : 60);
}