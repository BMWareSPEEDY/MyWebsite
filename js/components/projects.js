/**
 * Projects Component
 * Renders completed and in-progress projects from data with status badges
 */

function renderTags(tags = []) {
  return tags.map(tag => `<span class="interest-tag">${tag}</span>`).join('');
}

function renderRepo(project) {
  if (!project.github) return '';
  return `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="repo-link"><i
          class="fab fa-github"></i> Source</a>`;
}

function renderStatus(project) {
  const statusClass = project.statusClass || 'shipped';
  const status = project.status || 'Complete';
  return `<span class="status-badge ${statusClass}">${status}</span>`;
}

function renderCard(project, inProgress, index) {
  const num = String(index + 1).padStart(2, '0');
  const borderColor = inProgress ? (project.borderColor || 'var(--secondary-color)') : null;
  const titleColor = inProgress ? `style="color: ${project.borderColor || 'var(--secondary-color)'};"` : '';
  const borderStyle = inProgress ? ` style="border-left: 4px solid ${borderColor};"` : '';
  const cardClass = inProgress ? 'blog-post project-card in-progress' : 'blog-post project-card';
  const repo = renderRepo(project);
  const footer = repo ? `<div class="project-card-footer">${repo}</div>` : '';

  return `
    <article class="${cardClass}"${borderStyle}>
      <div class="project-card-header">
        <span class="project-index">${inProgress ? 'IN' : '#' + num}</span>
        ${renderStatus(project)}
      </div>
      <h3 ${titleColor}>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">${renderTags(project.tags)}</div>
      ${footer}
    </article>
  `;
}

export function initProjects(projectsData) {
  const completed = document.getElementById('projects-completed');
  const inProgress = document.getElementById('projects-inprogress');

  if (completed) {
    completed.innerHTML = projectsData.completed.map((p, i) => renderCard(p, false, i)).join('');
  }
  if (inProgress) {
    inProgress.innerHTML = projectsData.inProgress.map((p, i) => renderCard(p, true, i)).join('');
  }
}