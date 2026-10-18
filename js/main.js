/**
 * Ayansh Paliwal Portfolio - Main JavaScript
 * Modular architecture with separated concerns
 */

// ============================================================================
// Data Module - Single source of truth for all content
// ============================================================================
import { projectsData, blogPostsData, achievementsData } from './data/content.js';

// Make data available globally for inline handlers
window.blogPostsData = blogPostsData;
window.achievementsData = achievementsData;

// ============================================================================
// Component Modules
// ============================================================================
import { initNavigation } from './components/navigation.js';
import { initThemeToggle } from './components/theme-toggle.js';
import { initHeroAnimations } from './components/hero.js';
import { initSkillsAnimation } from './components/skills.js';
import { initProjectShowcase } from './components/project-showcase.js';
import { initBlogSection } from './components/blog.js';
import { initPopups } from './components/popup.js';
import { initScrollReveal } from './components/scroll-reveal.js';
import { initCustomCursor } from './components/custom-cursor.js';
import { init3DTilt } from './components/tilt-effect.js';
import { initCarousel } from './components/carousel.js';
import { initAchievements } from './components/achievements.js';
import { initProjects } from './components/projects.js';
import { initReactionGame } from './components/reaction-game.js';

// ============================================================================
// Console easter egg — for anyone who opens devtools
// ============================================================================
function greetPitWall() {
  const badge = 'background:linear-gradient(90deg,#4599fe,#031e49,#ee0405);color:#fff;padding:3px 12px;border-radius:4px;font-weight:700;letter-spacing:0.08em;';
  const red = 'color:#ee0405;font-weight:700;';
  const blue = 'color:#4599fe;font-weight:700;';
  const dim = 'color:#b8cad1;';
  const flag = [
    '  \u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588',
    '  \u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580',
    '  \u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588',
    '  \u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580',
    '  \u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588\u2580\u2588'
  ].join('\n');

  console.log('%cAYANSH PALIWAL  ·  CAR #02', badge);
  console.log(`\n${flag}\n`);
  console.log('%cLights out and away we go.', red);
  console.log('%cPsst — there is a "Lights Out" reaction test on the home page.', blue);
  console.log('%cBest times live in this tab\'s localStorage. No cheating.', dim);
  console.log('%cStudent, developer, creator — and a huge racing fan.', dim);
}

// ============================================================================
// Initialization
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  initNavigation();
  initThemeToggle();
  initHeroAnimations();
  initSkillsAnimation();

  // Content-driven components (require data)
  initProjectShowcase(projectsData);
  initBlogSection(blogPostsData);
  initAchievements();
  initProjects(projectsData);

  // Interactive components
  initPopups();
  initScrollReveal();
  initCustomCursor();
  init3DTilt();
  initCarousel();

  // Motorsport layer
  initReactionGame();

  greetPitWall();
});