const content = document.querySelector('#content');
const controls = [...document.querySelectorAll('[data-view]')];

const about = `
  <img class="hero-photo" src="./assets/about-photo.jpg" alt="Lichin Lin in a forest">
  <div class="about-grid">
    <div class="about-primary">
      <section><p class="section-title">EXPERIENCE</p><div class="experience-list">
        <article class="experience-item"><h2>Design Engineer, Copilot</h2><p>Jan. 2025-present @GitHub</p></article>
        <article class="experience-item"><h2>Product Engineer, Web</h2><p>Nov. 2023-Dec. 2024 @Intercom</p></article>
        <article class="experience-item"><h2>Design Engineer</h2><p>Jul. 2020-Jun. 2023 @PicCollage</p></article>
        <article class="experience-item"><h2>Web Developer</h2><p>Jul. 2018-Jun. 2020 @Mobagel</p></article>
      </div></section>
      <section><p class="section-title">Speaking</p><div class="talk-list">
        <a class="talk-card" href="https://youtu.be/VrX0G2m0Mfg"><h2>Config 2024</h2><p>Happy Hacks: Crafting Figma Plugins</p><small>Meetup</small></a>
        <a class="talk-card" href="https://youtu.be/zi8m-0-2yu0"><h2>Config 2022</h2><p>It's better when we design together</p><small>Meetup</small></a>
        <a class="talk-card" href="https://open.spotify.com/episode/6HNrKL0pjNeEZSDql0VKUQ"><h2>Design Engineer career sharing</h2><p>Eps.53 - Design x Engineering</p><small>Podcast</small></a>
      </div></section>
    </div>
    <aside class="about-aside">
      <section><p class="section-title">Links</p><div class="link-list"><a href="https://www.figma.com/@lichin">Figma ↗</a><a href="https://github.com/lichin-lin">Github ↗</a><a href="https://www.threads.net/@designtips.today">Threads ↗</a><a href="https://www.linkedin.com/in/lichinlin/">Linkedin ↗</a><a href="https://www.instagram.com/designtips.today/">Instagram ↗</a><a href="https://lichin.substack.com/">Newsletter ↗</a></div></section>
      <section><p class="section-title">Hobbies</p><div class="hobby-list"><h2>👟 Running</h2><h2>🏐 Volleyball</h2><h2>☕ Coffee hopping</h2><h2>🏔️ Mountain climbing</h2></div></section>
      <section><p class="section-title">Apps</p><div class="app-list"><div class="app"><i>R</i>Raycast</div><div class="app"><i>VS</i>Visual Studio Code</div><div class="app"><i>A</i>Arc</div><div class="app"><i>K</i>Keystroke Pro</div><div class="app"><i>M</i>Mirror Magnet</div><div class="app"><i>S</i>Setapp</div></div></section>
      <footer class="footer">✌🏼 2025 • Made with love and <a href="https://www.framer.com/sites/">Framer Magic</a></footer>
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
