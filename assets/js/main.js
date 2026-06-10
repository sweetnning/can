(() => {
  const RECENT_WORK = [
    { key: 'recent.item1', icon: 'fas fa-truck-fast' },
    { key: 'recent.item2', icon: 'fas fa-lightbulb' },
    { key: 'recent.item3', icon: 'fas fa-hashtag' },
  ];

  const PROJECTS = [
    {
      img: 'assets/images/project-kunpeng.png',
      titleKey: 'projects.item3.title',
      descKey: 'projects.item3.desc',
      tags: [],
      link: 'pages/projects/project3.html',
    },
    {
      img: 'assets/images/project-redtourism.png',
      titleKey: 'projects.item1.title',
      descKey: 'projects.item1.desc',
      tags: [],
      link: 'pages/projects/project1.html',
    },
    {
      img: '',
      titleKey: 'projects.item2.title',
      descKey: 'projects.item2.desc',
      tags: [],
      link: 'pages/projects/project2.html',
    },
  ];

  const TIMELINE_EVENTS = [
    'timeline.event8',
    'timeline.event7',
    'timeline.event6',
    'timeline.event5',
    'timeline.event4',
    'timeline.event3',
    'timeline.event2',
    'timeline.event1',
  ];

  const TECH_STACK = [
    {
      category: 'skills.tourism',
      items: [
        { name: '旅游规划', icon: 'fas fa-map-marked-alt' },
        { name: '目的地管理', icon: 'fas fa-map-pin' },
        { name: '酒店管理', icon: 'fas fa-hotel' },
        { name: '景区运营', icon: 'fas fa-landmark' },
      ],
    },
    {
      category: 'skills.brand',
      items: [
        { name: '品牌定位', icon: 'fas fa-bullseye' },
        { name: '营销策划', icon: 'fas fa-chart-line' },
        { name: '市场调研', icon: 'fas fa-search' },
        { name: '内容创作', icon: 'fas fa-pen-fancy' },
      ],
    },
    {
      category: 'skills.project',
      items: [
        { name: '项目协调', icon: 'fas fa-tasks' },
        { name: '进度管理', icon: 'fas fa-calendar-check' },
        { name: '跨部门沟通', icon: 'fas fa-comments' },
        { name: '数据分析', icon: 'fas fa-table' },
      ],
    },
    {
      category: 'skills.languages',
      items: [
        { name: '英语 IELTS 7.0', icon: 'fas fa-language' },
        { name: '普通话 母语', icon: 'fas fa-comment' },
      ],
    },
  ];

  const CONTACT_LINKS = [
    { icon: 'fas fa-envelope', key: 'contact.email', link: 'mailto:haleylcn@163.com', cls: '' },
    { icon: 'fab fa-weixin', key: 'contact.wechat', link: '#', cls: 'contact-wechat' },
  ];

  function qs(selector, root = document) { return root.querySelector(selector); }
  function qsa(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }
  function clear(el) { if (!el) return; el.innerHTML = ''; }

  function t(key) { return window.i18n?.get ? window.i18n.get(key) : key; }

  function renderSpanTags(tags, className) {
    if (!Array.isArray(tags) || !tags.length) return '';
    return tags.map((tag) => `<span class="${className}">${tag}</span>`).join('');
  }

  function renderProjectTags(tags) {
    if (!Array.isArray(tags) || !tags.length) return '';
    return `<div class="project-tags">${renderSpanTags(tags, 'project-tag')}</div>`;
  }

  function initThemeToggle() {
    const toggleBtn = qs('.theme-toggle');
    const htmlEl = document.documentElement;
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  function initLangToggle() {
    const toggleBtn = qs('.lang-toggle');
    if (!toggleBtn) return;
    toggleBtn.addEventListener('click', () => {
      const current = window.i18n.currentLang();
      window.i18n.changeLang(current === 'en' ? 'zh' : 'en');
    });
  }

  function initProjects() {
    const grid = qs('.projects-grid');
    if (!grid) return;
    clear(grid);

    PROJECTS.forEach((project) => {
      const tags = t(`${project.titleKey}.tags`) || project.tags;
      const tagsHtml = renderProjectTags(tags);

      const imgSrc = project.img || 'assets/images/placeholder-cover.svg';
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${imgSrc}" alt="${t('projects.imgAlt')}" class="project-thumbnail">
        </div>
        <div class="project-info">
          <h3>${t(project.titleKey)}</h3>
          <p>${t(project.descKey)}</p>
          ${tagsHtml}
          <a href="${project.link}" class="project-link">${t('projects.viewDetail')}</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function initRecentWork() {
    const grid = qs('.recent-grid');
    if (!grid) return;
    clear(grid);

    RECENT_WORK.forEach((item) => {
      const tags = t(`${item.key}.tags`) || [];
      const tagsHtml = renderSpanTags(tags, 'recent-tag');

      const card = document.createElement('div');
      card.className = 'recent-card';
      card.innerHTML = `
        <div class="recent-header">
          <div class="recent-title">${t(`${item.key}.title`)}</div>
          <i class="${item.icon} recent-icon"></i>
        </div>
        <p class="recent-desc">${t(`${item.key}.desc`)}</p>
        <div class="recent-tags">${tagsHtml}</div>
      `;
      grid.appendChild(card);
    });
  }

  function initTimeline() {
    const container = qs('.timeline-container');
    if (!container) return;
    clear(container);

    TIMELINE_EVENTS.forEach((key) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <span class="timeline-date">${t(`${key}.date`)}</span>
        <div class="timeline-content">
          <h3>${t(`${key}.title`)}</h3>
          <p>${t(`${key}.desc`)}</p>
        </div>
      `;
      container.appendChild(item);
    });
  }

  function initTechStack() {
    const container = qs('.skills-wrapper');
    if (!container) return;
    clear(container);

    TECH_STACK.forEach((group) => {
      const itemsHtml = group.items
        .map((s) => `<div class="skill-badge"><i class="${s.icon}"></i> ${s.name}</div>`)
        .join('');

      const col = document.createElement('div');
      col.className = 'skill-category';
      col.innerHTML = `<h3>${t(group.category)}</h3><div class="skill-list">${itemsHtml}</div>`;
      container.appendChild(col);
    });
  }

  function initContactLinks() {
    const container = qs('.intro-contact-links');
    if (!container) return;
    clear(container);

    CONTACT_LINKS.forEach((contact) => {
      const label = t(contact.key);
      const link = document.createElement('a');
      link.className = `intro-contact-link ${contact.cls}`;
      link.href = contact.link;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.title = label;
      link.setAttribute('aria-label', label);
      link.innerHTML = `<i class="${contact.icon}"></i>`;

      if (contact.cls === 'contact-wechat') {
        link.removeAttribute('target');
        link.href = '#';
        const tooltip = document.createElement('span');
        tooltip.className = 'wechat-tooltip';
        tooltip.textContent = '微信ID：Sco-nn-18';
        link.appendChild(tooltip);
        link.addEventListener('click', (e) => {
          e.preventDefault();
        });
      }

      container.appendChild(link);
    });
  }

  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        let target;
        try { target = qs(href); } catch { return; }
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      });
    });
  }

  function initRevealMotion() {
    const targets = [
      ...qsa('.project-detail-card'),
      ...qsa('.recent-grid .recent-card'),
      ...qsa('.projects-grid .card'),
      ...qsa('.timeline-container .timeline-item'),
      ...qsa('.skills-wrapper .skill-category'),
    ];

    if (!targets.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    targets.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(index % 6) * 60}ms`);
    });

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initLangToggle();
    initSmoothScroll();
  });

  window.addEventListener('i18nLoaded', () => {
    initRecentWork();
    initProjects();
    initTimeline();
    initTechStack();
    initContactLinks();
    initRevealMotion();
  });
})();
