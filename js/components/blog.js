/**
 * Blog Section Component
 * Renders blog posts from data and handles popup opening
 */

import { blogPostsData } from '../data/content.js';
import { sanitizeHTML } from '../utils/sanitize.js';

export function initBlogSection(blogPostsData) {
  const blogPostsContainer = document.querySelector('#blog .blog-posts');
  if (!blogPostsContainer) return;

  renderBlogPosts(blogPostsContainer, blogPostsData);
  initBlogPostInteractions();
}

function renderBlogPosts(container, posts) {
  const postsArray = Object.values(posts);

  container.innerHTML = postsArray.map(post => `
    <article class="blog-post"
             tabindex="0"
             role="button"
             aria-label="Read blog post: ${post.title}"
             data-blog-id="${post.id}">
      <h3>${sanitizeHTML(post.title)}</h3>
      <div class="blog-meta">${sanitizeHTML(post.meta)}</div>
      <p>${sanitizeHTML(post.body).split('</p>')[0]?.substring(0, 150)}...</p>
    </article>
  `).join('');
}

function initBlogPostInteractions() {
  document.querySelectorAll('.blog-post[data-blog-id]').forEach(post => {
    post.addEventListener('click', () => {
      const blogId = post.getAttribute('data-blog-id');
      openPopup('blog-popup', blogId);
    });

    // Keyboard support
    post.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        post.click();
      }
    });
  });
}

// Global function for opening blog popups from home showcase
window.openBlogFromHome = function(postId) {
  // Switch to blog section
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));

  const blogSection = document.getElementById('blog');
  const blogNavLink = document.querySelector('.nav-link[data-section="blog"]');

  if (blogSection) blogSection.classList.add('active');
  if (blogNavLink) blogNavLink.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Open the specific popup after a short delay
  setTimeout(() => {
    openPopup('blog-popup', postId);

    // Highlight the specific post
    const blog = document.getElementById('blog');
    if (blog) {
      const posts = blog.querySelectorAll('.blog-post');
      posts.forEach(post => {
        const postTitle = post.querySelector('h3')?.textContent;
        const blogPost = blogPostsData[postId];
        if (postTitle && blogPost && postTitle.includes(blogPost.title)) {
          post.scrollIntoView({ behavior: 'smooth', block: 'center' });
          post.style.outline = '3px solid var(--primary-color)';
          setTimeout(() => post.style.outline = '', 2000);
        }
      });
    }
  }, 500);
};