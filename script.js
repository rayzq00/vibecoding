const apps = [
  {
    title: "Raycast",
    description: "Fast launcher, workflows, and small productivity magic.",
    image: "https://framerusercontent.com/images/9t4y5OfTDo2FubBv0Ei1tNHAA.png"
  },
  {
    title: "Visual Studio Code",
    description: "Where design systems, components, and details become real.",
    image: "https://framerusercontent.com/images/zfA6Vj6kZwCQ0eKr6R8m8Ui8L4.png"
  },
  {
    title: "Arc",
    description: "A browser with stronger organization and a calmer feel.",
    image: "https://framerusercontent.com/images/jaC0PZ9fv5NE86a9PWx7v8zXk.png"
  },
  {
    title: "Keystroke Pro",
    description: "Useful for recording polished demos and showing interaction.",
    image: "https://framerusercontent.com/images/1A5tJrZ5PVm32uxE6tWt5NLkhY.webp"
  },
  {
    title: "Mirror Magnet",
    description: "A handy companion for device mirroring in presentations.",
    image: "https://framerusercontent.com/images/o8OFX7MZrO3MNeLiMYmGrNSI6o.png"
  },
  {
    title: "Setapp",
    description: "A familiar bundle for creative and workflow tooling.",
    image: "https://framerusercontent.com/images/08nVdVju98g65Oi9egxR6sc8Iqo.svg"
  }
];

const appGrid = document.querySelector("#app-grid");

if (appGrid) {
  appGrid.innerHTML = apps
    .map(
      (app) => `
        <article class="app-card">
          <img src="${app.image}" alt="${app.title}">
          <div class="app-card-copy">
            <h3>${app.title}</h3>
            <p>${app.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}
