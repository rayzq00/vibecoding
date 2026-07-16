# Project Shell Specification

## Overview
- Target: `projects/project.html`, `projects/project-detail.css`
- Screenshot: `docs/design-references/haoqi.design-adrive/desktop-1440.png`
- Interaction model: fixed chrome plus independent vertical article scroll

## Computed Styles
- Viewport/body: 1440x900, `overflow: hidden`, background `rgb(251,250,244)`.
- Article scroller: width/height 100%, `overflow-y:auto`; its native scrollbar is hidden.
- Table of contents: fixed left, full viewport height, width 320px, left padding 96px to clear the clone's wider award badge, vertically centered; visible from the `2xl` / 1536px breakpoint. All three heading levels are included with 0/8/16px indentation.
- Custom scrollbar: fixed right, vertically centered, 56x200px outer box with a 32x200px SVG. Track spans y=6 to y=194 with 6px round strokes; thumb length is proportional with a 20px minimum.
- Home link: uses the portfolio's `assets/portrait.jpeg` portrait at 80x80px (72x72px mobile), fixed at x=96px so its left edge aligns with the table-of-contents links; clicking returns to `index.html`.
- Narrow alignment: at 1042px and below, portrait x-position is `max(24px, (100vw - 880px) / 2 + 24px)`, matching the article title continuously through the centered-to-fluid transition.
- Close link alignment: `a.site-work` keeps its right edge on the article text's right edge at every viewport using the same `max(24px, (100vw - 880px) / 2 + 24px)` inset.
- Close link typography: the `×` remains 36px at every viewport, including widths at and below 720px.
- Left award badge: removed by user customization; no `W. / Nominee` overlay remains.
- Scroll state: at article `scrollTop >= 36px`, the portrait transitions to 40x40px over 320ms; above the page threshold it restores its responsive base size.
- Article: width 100%, max-width 880px, margin auto, desktop padding `96px 24px`.
- Main colors: label `rgb(0,0,0)`, secondary `rgba(54,54,48,.6)`, line `rgba(54,54,48,.1)`.
- Background: `rgb(251,250,244)`.
- Accent/selection: `#c0fe04`.

## Responsive
- Desktop: chrome visible, 880px article; right scrollbar visible while active.
- Wide desktop (1536px+): left table of contents is visible.
- Mobile: compact header, chrome decorations hidden, article padding `72px 24px`.
