/**
 * Achievements Component
 * Renders achievements by category from data
 */

import { achievementsData } from '../data/content.js';
import { sanitizeHTML } from '../utils/sanitize.js';

export function initAchievements() {
  renderAchievements();
}

function renderAchievements() {
  const categories = [
    { id: 'robotics', name: 'Robotics & Engineering', icon: 'fas fa-robot' },
    { id: 'software', name: 'Software & Hackathons', icon: 'fas fa-code' },
    { id: 'science', name: 'Science & Innovation', icon: 'fas fa-lightbulb' },
    { id: 'academic', name: 'Academic Excellence', icon: 'fas fa-graduation-cap' },
    { id: 'sports', name: 'Sports', icon: 'fas fa-medal' }
  ];

  categories.forEach(category => {
    const container = document.getElementById(`achievements-${category.id}`);
    if (!container) return;

    const achievements = achievementsData[category.id] || [];
    container.innerHTML = achievements.map(achievement => {
      // Use data attributes instead of inline onclick to avoid XSS and duplicate handlers
      const dataAttrs = [
        `data-achievement-id="${achievement.id}"`,
        `data-category="${category.id}"`
      ];

      if (achievement.blogId) {
        dataAttrs.push(`data-blog-id="${achievement.blogId}"`);
      }
      if (achievement.pdfUrl) {
        dataAttrs.push(`data-pdf-url="${sanitizeHTML(achievement.pdfUrl)}"`);
      }

      return `
        <article class="achievement-card"
                 tabindex="0"
                 role="button"
                 aria-label="Read achievement: ${sanitizeHTML(achievement.title)}"
                 ${dataAttrs.join(' ')}>
          <h3>${sanitizeHTML(achievement.title)}</h3>
          <p class="achievement-date">${sanitizeHTML(achievement.date)}</p>
          <p>${sanitizeHTML(achievement.description)}</p>
        </article>
      `;
    }).join('');

    // Add keyboard and click support
    container.querySelectorAll('.achievement-card').forEach(card => {
      card.addEventListener('click', handleAchievementClick);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleAchievementClick.call(card, e);
        }
      });
    });
  });
}

function handleAchievementClick(e) {
  const card = e.currentTarget;
  const blogId = card.getAttribute('data-blog-id');
  const pdfUrl = card.getAttribute('data-pdf-url');

  if (blogId && blogPostsData[blogId]) {
    openPopup('blog-popup', blogId);
  } else if (pdfUrl) {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  }
}