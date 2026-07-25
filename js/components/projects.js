/**
 * Projects Component
 * Renders completed and in-progress projects from data
 */

export function initProjects(projectsData) {
  renderCompletedProjects(projectsData);
  renderInProgressProjects(projectsData);
}

function renderCompletedProjects(projectsData) {
  const container = document.getElementById('projects-completed');
  if (!container) return;

  container.innerHTML = projectsData.completed.map(project => `
    <article class="blog-post">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${project.tags.map(tag => `<span class="interest-tag">${tag}</span>`).join('')}
      </div>
      ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-outline"
          style="padding: 0.5rem 1rem; font-size: 0.9rem; margin-top: 1rem; display: inline-block;"><i
              class="fab fa-github"></i> Repository</a>` : ''}
    </article>
  `).join('');
}

function renderInProgressProjects(projectsData) {
  const container = document.getElementById('projects-inprogress');
  if (!container) return;

  container.innerHTML = projectsData.inProgress.map(project => `
    <article class="blog-post" style="border-left: 4px solid ${project.borderColor};">
      <h3 style="color: ${project.borderColor};">${project.title}</h3>
      <p>${project.description}</p>
      <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${project.tags.map(tag => `<span class="interest-tag">${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');
}