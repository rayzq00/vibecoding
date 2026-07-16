# aDrive Behaviors

- Interaction model: primarily scroll-driven long-form reading.
- The document body itself is fixed at viewport height; `.overflow-y-auto` owns the 11,034px vertical scroll.
- At `1536px` and above, a fixed 320px-wide table of contents sits on the left. The source uses x=64px; this clone uses x=96px to clear its wider existing award badge while preserving the same left-side structure.
- The table of contents links to article heading anchors and updates the active entry as the article scrolls.
- The native scrollbar is hidden. A custom 56x200px scrollbar sits at the right edge on desktop, fades in while scrolling or hovering, and supports track clicks and thumb dragging.
- Site chrome stays outside the article scroller and remains visible.
- At viewport widths up to 1042px, the portrait follows the article's computed left edge: centered against the 880px article between 1042px and 880px, then fixed to the 24px content inset below 880px.
- When the article scroller reaches 36px, the portrait transitions to 40x40px; returning above the threshold restores its 80px desktop or 72px mobile size.
- Article links underline and change emphasis on hover.
- Images are static; no video, carousel, tabs, or modal were observed.
- Desktop article width is 880px including 24px side padding, leaving 832px for media.
- Mobile keeps 24px side padding, uses 30px title text, 14px body text, and hides nonessential desktop chrome.
