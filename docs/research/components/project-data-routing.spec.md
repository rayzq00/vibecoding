# Project Data Routing Specification

## Overview
- Shared page shell: `projects/project.html`
- Shared behavior: `projects/project-detail.js`
- Shared styles: `projects/project-detail.css`
- Interaction model: query-string driven detail rendering

## Route Map
- `finmi-agent` -> `projects/project-data.js`
- `kuaishou-hr` -> `projects/data/kuaishou-hr.js`
- `baidu-rocket-mq` -> `projects/data/baidu-rocket-mq.js`
- `jiandaoyun-ai` -> `projects/data/jiandaoyun-ai.js`
- `articles` -> `projects/data/articles.js`
- `landscape-design` -> `projects/data/landscape-design.js`
- `painting` -> `projects/data/painting.js`

## Data Contract
- Every file registers one independent object on `window.PROJECTS[id]`.
- Each object owns `title`, `date`, `summary`, `sections`, and `footerLinks`.
- Section content supports paragraph, list, and image blocks through the existing shared renderer.
- Pure-image pages may omit `sections` and provide a top-level `images` array; images render directly below the hero without headings, captions, table-of-contents items, or footer links.
- Placeholder files copy the current Finmi structure and assets so they can be edited independently.

## Link Contract
- Homepage links live in `script.js` inside `views.projects` and `views.articles`.
- Every link targets `./projects/project.html?id=<route-id>`.
