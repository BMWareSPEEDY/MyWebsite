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

  console.log('Portfolio initialized successfully');
});