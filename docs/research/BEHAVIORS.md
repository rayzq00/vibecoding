# Observed Behaviors

- Category rail is click-driven, not scroll-driven.
- About is the initial local state. Its pill has `rgba(255, 81, 46, 0.1)` background and `rgb(255, 81, 46)` label color.
- Articles and Projects use neutral pills; Notes is an external new-tab link.
- Navigation text uses `cursor: pointer`; the source exposes `transition: all`.
- No video or page-level smooth-scroll class was observed.
- The target uses Framer responsive variants. This static implementation preserves the observed desktop geometry and collapses the about columns at narrow widths.
