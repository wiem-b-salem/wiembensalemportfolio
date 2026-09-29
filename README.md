# Wiem Ben Salem — Portfolio

A polished developer portfolio themed as a **README.md × IDE workspace** — part documentation site, part code editor. Built with Angular 21, Tailwind CSS 4, and deployed as a fully static site to GitHub Pages.

## Live site

https://wiem-b-salem.github.io/wiembensalemportfolio/

## What this is

The site presents Wiem's portfolio the way a software project presents itself:

- **README.md** — the homepage renders like a documentation file (about, tech stack, projects, experience, learning, contact).
- **File explorer** — the sidebar mirrors an editor's file tree (`README.md`, `projects/`, `experience/`, `skills.json`, `explore.md`, `contact.md`, `resume.pdf`). Everything is a normal, clickable link.
- **Project docs** — each project has its own documentation-style page: overview, problem, solution, architecture, role, features, technologies, challenges, and lessons learned.
- **portfolio.explore** — an interactive, curated Q&A panel. Click a question, get a factual answer with related-project links. **No AI, no APIs, no backend** — it's a static FAQ.

## Tech stack

- Angular 21 (standalone components, hash-based routing)
- Tailwind CSS 4 (CSS-first config, no config file)
- TypeScript 5.9
- Vitest (unit tests)
- No backend, no runtime dependencies, no API keys, no database

## Project structure

```
src/
├── index.html                  # Entry HTML (fonts, meta, title)
├── main.ts                     # Bootstrap
├── styles.css                  # Global theme + shared README primitives
└── app/
    ├── app.ts                  # Root: <router-outlet>
    ├── app.routes.ts           # Routes (hash strategy)
    ├── data/                   # ⚠️ ALL portfolio content lives here
    │   ├── profile.json        #   name, bio, tagline, contact links
    │   ├── projects.json       #   public + detailed project info
    │   ├── skills.json         #   skill categories
    │   ├── experience.json     #   internships + per-role detail
    │   ├── learning.json       #   currently-learning items
    │   ├── questions.json      #   ✅ curated Q&A entries
    │   ├── models.ts           #   TypeScript types
    │   └── index.ts            #   data access helpers
    ├── pages/                  # Route components (home, projects, …)
    └── ui/                     # Layout shell, file icons, Q&A panel
```

## Managing content

Everything content-related is data, not JSX/templates. You never need to touch a component to update the portfolio.

### Update name / bio / links

Edit `src/app/data/profile.json`:

```json
{
  "name": "Wiem Ben Salem",
  "title": "Software Engineering Student",
  "tagline": "Building structured and scalable software systems.",
  "about": "…",
  "email": "bensalemwi2m@example.com",
  "linkedin": "https://www.linkedin.com/in/wiem-ben-salem-302322295/",
  "github": "https://github.com/wiem-b-salem",
  "cvUrl": "cv/wiem-ben-salem-cv.pdf"
}
```

### Add a new project

1. Add an entry to `src/app/data/projects.json`.
2. The `slug` is used in the URL and in the sidebar file tree (e.g. `slug: "my-project"` → `projects/my-project.md`).
3. Everything in `details` renders only if present — opt in with `role`, `overview`, `problem`, `solution`, `architecture`, `challenges`, `whatILearned`. Leave a key out to skip the section.
4. It automatically appears on the homepage, the projects page, and the explorer.

Example:

```json
{
  "slug": "my-project",
  "title": "My Project",
  "shortDescription": "…",
  "techStack": ["Angular", "PostgreSQL"],
  "features": ["Feature one", "Feature two"],
  "githubLink": "https://github.com/wiem-b-salem/my-project",
  "details": {
    "role": "…",
    "overview": "…",
    "problem": "…",
    "solution": "…",
    "architecture": "…",
    "challenges": "…",
    "whatILearned": "…"
  }
}
```

### Add a new Q&A question

Edit `src/app/data/questions.json`. Each entry has `id`, `question`, `category`, `answer`, and optional `relatedSlug` (links to a project page):

```json
{
  "id": "medflow-role",
  "question": "What was Wiem's role in MedFlow?",
  "category": "projects",
  "answer": "Wiem was responsible for the prescription and localization areas of the MedFlow MVP…",
  "relatedSlug": "medflow"
}
```

Categories: `general`, `projects`, `experience`, `skills`. The panel groups questions by category automatically. Set `relatedSlug` to a project `slug` to surface an "Open project →" link.

### Update experience

Edit `src/app/data/experience.json`. Each entry supports `role`, `company`, `duration`, `description`, plus `details.responsibilities`, `details.technologies`, and `details.contributions`.

### Update skills / currently-learning

Edit `src/app/data/skills.json` and `src/app/data/learning.json`.

> **Do not invent information.** If a section has no real data to show, it is omitted from the page rather than fabricated.

## Development

```bash
npm install
npm start          # http://localhost:4200
npm test           # vitest unit tests
```

## Production build

```bash
npm run build
```

Output goes to `dist/portfolio/browser` — a fully static site (HTML, CSS, JS, the CV PDF). It works with zero server requirements.

## Deploying to GitHub Pages

The site uses **hash-based routing**, so direct links (e.g. `/#/projects/medflow`) always resolve to `index.html` — no server rewrites needed.

1. Deploy the current repository:

```bash
npm run deploy
```

This builds with `--base-href=/wiembensalemportfolio/` (your repo path) and pushes the `dist/portfolio/browser` folder to the `gh-pages` branch via `angular-cli-ghpages`.

2. **Custom domain** — change the deploy base href to `/`:

```json
"deploy": "ng build --base-href=/ && npm run deploy:only"
```

and set your custom domain in the repo's GitHub Pages settings.

## Design constraints

- Not a Windows XP clone, no pixel art.
- Navigation never depends on terminal commands.
- No AI chatbot → a static curated FAQ instead (no API keys, no network).
- Accessible: semantic HTML, keyboard-reachable controls, visible focus, screen-reader labels, `prefers-reduced-motion` support.
- Lightweight: ~80 kB transferred, no heavy UI libraries.