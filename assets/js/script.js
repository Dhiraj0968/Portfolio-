document.addEventListener('DOMContentLoaded', () => {
  const renderContacts = () => {
    const list = document.getElementById('contact-list');
    if (!list) return;

    list.innerHTML = portfolioData.contactItems
      .map(
        (item) => `
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="${item.icon}"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">${item.type}</p>
              <a href="${item.href}" class="contact-link">${item.value}</a>
            </div>
          </li>
        `
      )
      .join('');
  };

  const renderSocialLinks = () => {
    const list = document.getElementById('social-list');
    if (!list) return;

    list.innerHTML = portfolioData.socialLinks
      .map(
        (link) => `
          <li class="social-item">
            <a href="${link.url}" class="social-link" target="${link.target || '_self'}" rel="noreferrer">
              <ion-icon name="${link.icon}"></ion-icon>
            </a>
          </li>
        `
      )
      .join('');
  };

  const renderAbout = () => {
    const wrapper = document.getElementById('about-text');
    if (!wrapper) return;

    wrapper.innerHTML = portfolioData.about.paragraphs
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join('');
  };

  const renderServices = () => {
    const list = document.getElementById('services-list');
    if (!list) return;

    list.innerHTML = portfolioData.services
      .map(
        (service) => `
          <li class="service-item">
            <div class="service-icon-box">
              <ion-icon name="${service.icon}" style="font-size: 32px; color: #818cf8;"></ion-icon>
            </div>
            <div class="service-content-box">
              <h4 class="h4 service-item-title">${service.title}</h4>
              <p class="service-item-text">${service.text}</p>
            </div>
          </li>
        `
      )
      .join('');
  };

  const renderEducation = () => {
    const list = document.getElementById('education-list');
    if (!list) return;

    list.innerHTML = portfolioData.education
      .map(
        (item) => `
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">${item.title}</h4>
            <span>${item.meta}</span>
            <p class="timeline-text">${item.text}</p>
          </li>
        `
      )
      .join('');
  };

  const renderSkills = () => {
    const list = document.getElementById('skills-list');
    if (!list) return;

    list.innerHTML = portfolioData.skills
      .map(
        (skill) => `
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">${skill.name}</h5>
              <data value="${skill.value}">${skill.value}%</data>
            </div>
            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: ${skill.value}%;"></div>
            </div>
          </li>
        `
      )
      .join('');
  };

  const renderProjects = () => {
    const list = document.getElementById('project-list');
    if (!list) return;

    list.innerHTML = portfolioData.projects
      .map(
        (project) => `
          <li class="project-item active">
            <a href="${project.url}" class="project-card">
              <div class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img
                  src="${project.image}"
                  alt="${project.alt}"
                  loading="lazy"
                  onerror="this.src='https://via.placeholder.com/400x250/1e293b/60a5fa?text=${encodeURIComponent(project.title)}'"
                >
              </div>
              <h3 class="project-title">${project.title}</h3>
              <p class="project-category">${project.category}</p>
            </a>
          </li>
        `
      )
      .join('');
  };

  renderContacts();
  renderSocialLinks();
  renderAbout();
  renderServices();
  renderEducation();
  renderSkills();
  renderProjects();

  const navButtons = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.textContent.trim().toLowerCase();

      navButtons.forEach((nav) => nav.classList.remove('active'));
      pages.forEach((page) => page.classList.remove('active'));

      button.classList.add('active');

      const activePage = [...pages].find((page) => page.dataset.page === target);
      if (activePage) activePage.classList.add('active');
    });
  });

  const sidebarToggle = document.querySelector('[data-sidebar-btn]');
  const sidebar = document.querySelector('[data-sidebar]');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      const text = sidebarToggle.querySelector('span');
      if (text) {
        text.textContent = sidebar.classList.contains('active') ? 'Hide Contacts' : 'Show Contacts';
      }
    });
  }
});
