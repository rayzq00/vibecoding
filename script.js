const content = document.querySelector('#content');
const controls = [...document.querySelectorAll('[data-view]')];
const coverSources = {
  projects: [
    './assets/1Cover.png',
    './assets/2Cover.png',
    './assets/3Cover.png',
    './assets/4Cover.png'
  ],
  articles: [
    './assets/文章.png',
    './assets/景观.png',
    './assets/水光.png'
  ]
};

const about = `
  <img class="hero-photo" src="./assets/about-photo.jpg" alt="Lichin Lin in a forest">
  <div class="about-grid">
    <div class="about-primary">
      <section><p class="section-title">教育经历 EDUCATION</p><div class="experience-list">
        <article class="experience-item"><h2>天津大学 985丨建筑学院丨风景园林丨硕士
</h2><p>2022年 09月  -  2025年 06月</p>
<article class="experience-item"><h2>江南大学 211丨设计学院丨环境设计丨本科

</h2><p>2018年 09月  -  2022年 06月</p>
    </div>
  <div class="about-grid">
    <div class="about-primary">
      <section><p class="section-title">工作经历 WORK EXPERIENCE</p><div class="experience-list">
        <article class="experience-item"><h2>快手 · 北京达佳互联信息技术有限公司丨企业应用部丨交互设计
</h2><p>2025年 06月  -  2026年 05月</p>
    </div>

      <div class="about-grid">
    <div class="about-primary">
      <section><p class="section-title">实习经历 INTERNSHIP EXPERIENCE</p><div class="experience-list">
        <article class="experience-item"><h2>百度 · 百度网讯科技有限公司丨百度智能云丨用户体验设计
</h2><p>2024年 08月  -  2024年 12月</p>


        <article class="experience-item"><h2>帆软软件科技有限公司丨简道云丨UI视觉设计
</h2><p>2024年 12月  -  2025年 03月</p></article>
    </div>
      
      <footer class="footer">💙  2026 • Made with Codex 🩵 <a href="https://www.framer.com/sites/"></a></footer>
    </aside>
  </div>`;

const views = {
  about,
  articles: `<section class="state-panel"><h2>探索</h2>
  <p>收录了我在屏幕设计之外的长期创作与思考，包括文章、景观设计及绘画。这些经历让我持续保持对空间、秩序、美感与用户体验的观察，也塑造了我跨学科的设计思维。</p>
  <div class="state-list"><a href="./projects/project.html?id=articles">文章<span class="arrow-icon" aria-label="查看详情"></span>
  </a><a href="./projects/project.html?id=landscape-design">景观设计 <span class="arrow-icon" aria-label="查看详情"></span>
  </a><a href="./projects/project.html?id=painting">绘画 <span class="arrow-icon" aria-label="查看详情"></span>
  </a></div></section>`,
  projects: `<section class="state-panel"><h2>项目</h2>
  <p>本作品集收录了我于2024年至今参与的 AI 与企业级 SaaS 项目，通过用户研究、信息架构与交互设计，让复杂业务变得更清晰、更高效。</p>
  <div class="state-list"><a href="./projects/project.html?id=finmi-agent">财务智能体 Finmi Agent <span class="arrow-icon" aria-label="查看详情"></span>
  </a><a href="./projects/project.html?id=kuaishou-hr">快手HR 组织架构调整系统 <span class="arrow-icon" aria-label="查看详情"></span>
  </a><a href="./projects/project.html?id=baidu-rocket-mq">百度智能云 Rocket MQ <span class="arrow-icon" aria-label="查看详情"></span> 
  </a><a href="./projects/project.html?id=jiandaoyun-ai">简道云 AI小简助手 <span class="arrow-icon" aria-label="查看详情"></span>
  </a></div></section>`
};

function show(view) {
  content.innerHTML = views[view];
  if (view === 'projects' || view === 'articles') {
    content.querySelectorAll('.state-list a').forEach((item, index) => {
      const cover = document.createElement('img');
      cover.className = 'state-cover';
      cover.src = coverSources[view][index];
      cover.alt = `${item.textContent.trim()} cover`;
      item.append(cover);
    });
  }
  controls.forEach(control => control.classList.toggle('active', control.dataset.view === view));
}

controls.forEach(control => control.addEventListener('click', () => show(control.dataset.view)));
show('projects');
