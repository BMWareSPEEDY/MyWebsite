/**
 * Project Showcase Component
 * Renders the project showcase carousel from projects data
 */

import { sanitizeHTML } from '../utils/sanitize.js';

export function initProjectShowcase(projectsData) {
  const carousel = document.querySelector('.showcase-carousel');
  if (!carousel) return;

  // Filter projects marked for showcase
  const showcaseProjects = projectsData.completed.filter(p => p.showcase);

  // Map project IDs to corresponding blog post IDs (if a blog post exists)
  const projectToBlogId = {
    'ergolearn-ai': 'hackmars2026',
    'tisb-swap': 'tisbhacks2026',
    // Other showcase projects don't have corresponding blog posts
  };

  // Render showcase cards
  carousel.innerHTML = showcaseProjects.map((project, index) => {
    const blogId = projectToBlogId[project.id];
    const hasPopup = blogId && blogPostsData[blogId];
    const popupTrigger = hasPopup
      ? `data-popup-trigger="blog-popup" onclick="openPopup('blog-popup', '${blogId}')"`
      : '';
    const cardTabindex = hasPopup ? 'tabindex="0" role="button"' : '';
    const ariaLabel = hasPopup ? `aria-label="View project details: ${sanitizeHTML(project.title)}"` : '';
    const num = String(index + 1).padStart(2, '0');
    const viewHint = hasPopup
      ? '<span class="showcase-view">Read the case study <i class="fas fa-arrow-right"></i></span>'
      : '';

    return `
      <div class="post-card" ${cardTabindex} ${ariaLabel} ${popupTrigger}>
        <div class="showcase-card-head">
          <span class="showcase-index">${num}</span>
          <span class="showcase-tag">Case Study</span>
        </div>
        <h3>${sanitizeHTML(project.title)}</h3>
        <p>${sanitizeHTML(project.showcaseDescription)}</p>
        ${viewHint}
      </div>
    `;
  }).join('');

  // Add keyboard support for cards with popups
  carousel.querySelectorAll('.post-card[onclick]').forEach((card, index) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}