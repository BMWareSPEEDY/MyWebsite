/**
 * Theme Toggle Component
 * Handles dark/light mode switching with localStorage persistence
 */

export function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  const themeIcon = themeToggle?.querySelector('i');

  if (!themeToggle || !themeIcon) return;

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme, themeIcon);
  });

  // Keyboard support
  themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      themeToggle.click();
    }
  });
}

function updateThemeIcon(theme, icon) {
  if (theme === 'dark') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}