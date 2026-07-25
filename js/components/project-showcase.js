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
  carousel.innerHTML = showcaseProjects.map(project => {
    const blogId = projectToBlogId[project.id];
    const hasPopup = blogId && blogPostsData[blogId];
    const popupTrigger = hasPopup
      ? `data-popup-trigger="blog-popup" onclick="openPopup('blog-popup', '${blogId}')"`
      : '';
    const cardTabindex = hasPopup ? 'tabindex="0" role="button"' : '';
    const ariaLabel = hasPopup ? `aria-label="View project details: ${sanitizeHTML(project.title)}"` : '';

    return `
      <div class="post-card" ${cardTabindex} ${ariaLabel} ${popupTrigger}>
        <h3 style="font-size: 1.1rem; margin-top: 0.5rem; color: var(--primary-color);">${sanitizeHTML(project.title)}</h3>
        <p style="font-size: 0.9rem;">${sanitizeHTML(project.showcaseDescription)}</p>
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