/**
 * Carousel Component
 * Handles project showcase carousel navigation and indicators
 */

export function initCarousel() {
  const carousel = document.querySelector('.showcase-carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  if (!carousel || !prevBtn || !nextBtn || !indicatorsContainer) return;

  let carouselCards = carousel.querySelectorAll('.post-card');
  let cardCount = carouselCards.length;
  let dots = [];
  let resizeTimeout;

  const getCardWidth = () => {
    carouselCards = carousel.querySelectorAll('.post-card');
    cardCount = carouselCards.length;
    const style = window.getComputedStyle(carousel);
    const gap = parseInt(style.gap) || 0;
    return carouselCards[0]?.offsetWidth + gap || 0;
  };

  const buildIndicators = () => {
    const cardWidth = getCardWidth();
    const visibleCards = Math.round(carousel.offsetWidth / cardWidth) || 1;
    const indicatorCount = Math.max(1, cardCount - visibleCards + 1);

    indicatorsContainer.innerHTML = '';
    dots = [];

    for (let i = 0; i < indicatorCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('indicator-dot');
      if (i === 0) dot.classList.add('active');

      dot.addEventListener('click', () => {
        const cardWidth = getCardWidth();
        carousel.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
      });

      // Keyboard support for indicators
      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const cardWidth = getCardWidth();
          carousel.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
        }
      });

      dot.setAttribute('role', 'button');
      dot.setAttribute('tabindex', '0');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);

      indicatorsContainer.appendChild(dot);
      dots.push(dot);
    }
  };

  const updateIndicators = () => {
    if (dots.length === 0) return;
    const cardWidth = getCardWidth();
    const activeIndex = Math.round(carousel.scrollLeft / cardWidth);

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  };

  // Build initially
  buildIndicators();
  updateIndicators();

  // Debounced rebuild on resize
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      buildIndicators();
      updateIndicators();
    }, 150);
  });

  carousel.addEventListener('scroll', updateIndicators, { passive: true });

  // Navigation buttons
  const navigate = (direction) => {
    const cardWidth = getCardWidth();
    carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));

  // Keyboard navigation
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      navigate(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      navigate(1);
    }
  });

  // Make carousel focusable
  carousel.setAttribute('tabindex', '0');
  carousel.setAttribute('role', 'region');
  carousel.setAttribute('aria-label', 'Project showcase carousel');
}