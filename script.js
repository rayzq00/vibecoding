const content = document.querySelector('#content');
const controls = [...document.querySelectorAll('[data-view]')];

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
  articles: `<section class="state-panel"><h2>Articles</h2><p>Thoughts on design, Figma plugins, and the craft of building better creative tools.</p><div class="state-list"><a href="#">Designing tools that bring joy <span>Read article ↗</span></a><a href="#">How design engineers work <span>Read article ↗</span></a><a href="#">The small details in creative software <span>Read article ↗</span></a></div></section>`,
  projects: `<section class="state-panel"><h2>Projects</h2><p>A collection of playful Figma plugins and experiments made for the creative process.</p><div class="state-list"><a href="#">Figma plugins <span>Explore ↗</span></a><a href="#">Design engineering experiments <span>Explore ↗</span></a><a href="#">Creative tools <span>Explore ↗</span></a></div></section>`
};

function show(view) {
  content.innerHTML = views[view];
  controls.forEach(control => control.classList.toggle('active', control.dataset.view === view));
}

controls.forEach(control => control.addEventListener('click', () => show(control.dataset.view)));
show('about');
