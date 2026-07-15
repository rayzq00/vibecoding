# About Page Specification

## Overview

- Target files: `index.html`, `styles.css`, `script.js`
- Screenshot: `docs/design-references/designtips.today/desktop-1440.png`
- Interaction model: click-driven category rail

## Computed Styles

- Root content: `display:flex`, `flex-direction:column`, `align-items:center`, `gap:60px`, `padding:80px 40px`, white background.
- Category rail: `width:544.104px`, `height:64px`, `display:flex`, `gap:10px`, `padding:8px`, `border-radius:16px`, `background:rgba(255,255,255,0.05)`.
- Category pill: `height:48px`, `padding:12px 20px`, `gap:10px`, `border-radius:14px`.
- Category label: Space Grotesk, `700 16px/24px`, inactive `rgba(48,48,64,0.5)`.
- Active About label: `rgb(255,81,46)`; active background: `rgba(255,81,46,0.1)`.
- Feature image: `width:800px`, `max-width:800px`, intrinsic rendered height about `534px`, `border-radius:4px`.
- Information layout: `width:800px`, `display:flex`, `gap:60px`, `padding-top:40px`; columns are `493.333px` and `246.667px`.

## Assets

- Portrait: `assets/portrait.jpeg`
- About feature photo: `assets/about-photo.jpg`
- Favicon: `assets/favicon.png`

## Text Content

`I'm Lichin Lin 👋, a Design Engineer at GitHub. I write articles about design and create Figma plugins that bring joy to the creative process.`

## Responsive Behavior

- Desktop: centered 800px content column below the navigation rail.
- Mobile: 24px side padding, full-width feature image, information columns stack, rail scrolls horizontally.
