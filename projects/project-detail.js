const params = new URLSearchParams(window.location.search);
const projectId = params.get('id') || 'finmi-agent';
const project = window.PROJECTS[projectId];
const article = document.querySelector('#project-article');
const toc = document.querySelector('#project-toc');
const articleScroller = document.querySelector('#article-scroller');
const siteBrand = document.querySelector('.site-brand');
const projectScrollbar = document.querySelector('#project-scrollbar');
const projectScrollbarThumb = document.querySelector('#project-scrollbar-thumb');

const scrollbarTrackStart = 6;
const scrollbarTrackLength = 188;
const scrollbarMinThumbLength = 20;
let scrollbarHideTimer;
let scrollbarDragging = false;
let dragStartY = 0;
let dragStartScrollTop = 0;

function slugify(value, index) {
  return `section-${index}-${value.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')}`;
}

function renderBlock(block) {
  if (block.type === 'paragraph') {
    const paragraph = document.createElement('p');
    paragraph.textContent = block.text;
    return paragraph;
  }

  if (block.type === 'list') {
    const list = document.createElement('ul');
    block.items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.append(listItem);
    });
    return list;
  }

  const figure = document.createElement('figure');
  figure.className = 'project-media';
  const image = document.createElement('img');
  image.src = block.src;
  image.alt = block.alt || '';
  image.loading = 'lazy';
  figure.append(image);
  if (block.caption) {
    const caption = document.createElement('figcaption');
    caption.textContent = block.caption;
    figure.append(caption);
  }
  return figure;
}

function renderProject(data) {
  document.title = data.title;

  const header = document.createElement('header');
  header.className = 'project-hero';
  header.innerHTML = `<h1>${data.title}</h1><p class="project-date">${data.date}</p><div class="hero-line"></div><p class="project-summary">${data.summary}</p>`;
  article.append(header);

  data.sections.forEach((section, index) => {
    const id = slugify(section.title, index);
    const sectionElement = document.createElement('section');
    sectionElement.className = `project-section level-${section.level}`;
    sectionElement.id = id;

    if (section.divider) {
      sectionElement.append(document.createElement('hr'));
    }

    const heading = document.createElement(section.level === 1 ? 'h2' : section.level === 2 ? 'h3' : 'h4');
    heading.innerHTML = `<a href="#${id}" aria-label="链接到 ${section.title}">#</a>${section.title}`;
    sectionElement.append(heading);
    section.content.forEach((block) => sectionElement.append(renderBlock(block)));
    article.append(sectionElement);

    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = section.title;
    link.style.paddingLeft = `${(section.level - 1) * 8}px`;
    toc.append(link);
  });

  const footer = document.createElement('footer');
  footer.className = 'project-footer';
  const links = data.footerLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join('');
  footer.innerHTML = `<div class="footer-links">${links}</div><p>Designed by XIAOZIQI · 2026</p>`;
  article.append(footer);
}

function getScrollbarMetrics() {
  const totalHeight = Math.max(1, articleScroller.scrollHeight);
  const viewportHeight = Math.max(1, articleScroller.clientHeight);
  const scrollableHeight = Math.max(1, totalHeight - viewportHeight);
  const thumbLength = Math.max(
    scrollbarMinThumbLength,
    scrollbarTrackLength * Math.min(1, viewportHeight / totalHeight),
  );

  return { scrollableHeight, thumbLength };
}

function updateScrollbar() {
  siteBrand.classList.toggle('is-compact', articleScroller.scrollTop >= 36);

  const { scrollableHeight, thumbLength } = getScrollbarMetrics();
  const progress = Math.min(1, Math.max(0, articleScroller.scrollTop / scrollableHeight));
  const thumbStart = scrollbarTrackStart + progress * (scrollbarTrackLength - thumbLength);
  projectScrollbarThumb.setAttribute(
    'd',
    `M 16 ${thumbStart} V ${thumbStart + thumbLength}`,
  );

  const sections = [...document.querySelectorAll('.project-section')];
  const activeSection = sections.reduce((current, section) => {
    if (section.offsetTop <= articleScroller.scrollTop + 100) return section;
    return current;
  }, sections[0]);

  toc.querySelectorAll('a').forEach((link) => {
    const isActive = activeSection && link.getAttribute('href') === `#${activeSection.id}`;
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function showScrollbar(duration = 2000) {
  projectScrollbar.classList.add('is-visible');
  window.clearTimeout(scrollbarHideTimer);
  if (!scrollbarDragging) {
    scrollbarHideTimer = window.setTimeout(() => {
      projectScrollbar.classList.remove('is-visible');
    }, duration);
  }
}

function scrollFromTrackPosition(clientY) {
  const rect = projectScrollbar.querySelector('svg').getBoundingClientRect();
  const trackY = Math.min(194, Math.max(6, (clientY - rect.top) * (200 / rect.height)));
  const progress = (trackY - scrollbarTrackStart) / scrollbarTrackLength;
  const { scrollableHeight } = getScrollbarMetrics();
  articleScroller.scrollTo({ top: progress * scrollableHeight, behavior: 'smooth' });
}

articleScroller.addEventListener('scroll', () => {
  updateScrollbar();
  showScrollbar();
}, { passive: true });

projectScrollbar.addEventListener('mouseenter', () => {
  showScrollbar(3000);
});

projectScrollbar.addEventListener('mouseleave', () => {
  if (!scrollbarDragging) showScrollbar();
});

projectScrollbar.querySelector('svg').addEventListener('click', (event) => {
  scrollFromTrackPosition(event.clientY);
});

projectScrollbarThumb.addEventListener('click', (event) => {
  event.stopPropagation();
});

projectScrollbarThumb.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  scrollbarDragging = true;
  dragStartY = event.clientY;
  dragStartScrollTop = articleScroller.scrollTop;
  projectScrollbarThumb.setPointerCapture(event.pointerId);
  showScrollbar();
});

projectScrollbarThumb.addEventListener('pointermove', (event) => {
  if (!scrollbarDragging) return;
  const { scrollableHeight, thumbLength } = getScrollbarMetrics();
  const draggableTrack = Math.max(1, scrollbarTrackLength - thumbLength);
  articleScroller.scrollTop = dragStartScrollTop + ((event.clientY - dragStartY) / draggableTrack) * scrollableHeight;
});

projectScrollbarThumb.addEventListener('pointerup', (event) => {
  scrollbarDragging = false;
  projectScrollbarThumb.releasePointerCapture(event.pointerId);
  showScrollbar();
});

window.addEventListener('resize', updateScrollbar);

if (project) {
  renderProject(project);
  requestAnimationFrame(() => {
    updateScrollbar();
    showScrollbar(3000);
  });
} else {
  article.innerHTML = '<section class="not-found"><h1>Project not found</h1><a href="../index.html">Back home</a></section>';
}
