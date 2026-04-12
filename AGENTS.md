# Damon's Portfolio — Agent Guidelines

## Project Overview

Personal portfolio website built with an Apple-inspired design system (see [DESIGN.md](./DESIGN.md)).

**Sections:** About, Projects, Skills, Experience, Contact.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js (App Router, static export) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | CSS-only (no animation libraries) |
| Package Manager | npm |
| Deployment | GitHub Pages (static export via `output: 'export'`) |

---

## Architecture

```
app/                    → Next.js App Router pages and layouts
app/styles/             → Modular CSS (tokens, base, components, layout, pages)
src/components/         → React components (organized by feature)
  ui/                   → Primitive components (Button, Tag, etc.)
  sections/             → Page sections (Hero, About, Projects, etc.)
src/data/               → Static data (projects, experience, skills, contact)
src/hooks/              → Custom React hooks
src/lib/                → Utility functions and helpers
public/                 → Static assets (images, fonts, icons)
docs/                   → Documentation
```

- Keep components small and single-responsibility.
- Organize components by feature, not by type.
- Co-locate component styles with the component file when using Tailwind.
- Data lives in `src/data/` as typed TypeScript files — do not hardcode content in components.
- Extract reusable stateful logic into `src/hooks/` rather than duplicating it across components.
- CSS tokens and design variables belong in `app/styles/` — do not inline them in components.

---

## Design System

All visual decisions are governed by [DESIGN.md](./DESIGN.md). Key rules:

- **Colors**: Use only the palette defined in DESIGN.md. Extend Tailwind's theme with these exact values — do not use arbitrary Tailwind color values (e.g. avoid `bg-[#123456]` ad hoc).
- **Typography**: SF Pro Display for headings (≥20px), SF Pro Text for body (≤19px). Fallback: `Helvetica Neue, Helvetica, Arial, sans-serif`. Mirror the exact size/weight/line-height/letter-spacing values from the DESIGN.md type scale.
- **Section rhythm**: Alternate sections between black (`#000000`) and light gray (`#f5f5f7`) backgrounds as described in DESIGN.md.
- **Accent color**: `#0071e3` (Apple Blue) is the ONLY chromatic color — use it exclusively for interactive elements (buttons, links, focus rings).
- **Animations**: CSS transitions/animations only. No JavaScript-driven animation libraries. Prefer `transition`, `@keyframes`, and `animation` in CSS or Tailwind utilities.
- **No gradients, textures, or decorative backgrounds** unless explicitly specified.

---

## Build & Dev Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build (static export to /out)
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```

> **GitHub Pages note**: `next.config.ts` must set `output: 'export'` and `basePath: '/damon-portfolio'` for correct deployment. Do not remove these settings.

---

## Coding Conventions

- **TypeScript**: Enable `strict: true`. Define explicit types for all props and data shapes. Avoid `any`.
- **Components**: Use named exports. PascalCase filenames matching the component name (e.g. `ProjectCard.tsx`).
- **Tailwind**: Extend the theme in `tailwind.config.ts` for design tokens instead of using arbitrary values. Group utility classes: layout → spacing → typography → color → effects.
- **Images**: Use `next/image` for all images. Always provide `alt` text. Prefer WebP format.
- **Accessibility**: Maintain WCAG AA contrast ratios (especially on dark sections). Use semantic HTML elements. Interactive elements must be keyboard-accessible.
- **No inline styles** unless dynamically computed (e.g. `style={{ transform }}` for JS-driven values).
- **No `console.log`** left in committed code.

---

## Sections Reference

| Section | Component | Data Source |
|---------|-----------|-------------|
| About | `src/components/sections/About.tsx` | `src/data/about.ts` |
| Projects | `src/components/sections/Projects.tsx` | `src/data/projects.ts` |
| Skills | `src/components/sections/Skills.tsx` | `src/data/skills.ts` |
| Experience | `src/components/sections/Experience.tsx` | `src/data/experience.ts` |
| Contact | `src/components/sections/Contact.tsx` | `src/data/contact.ts` |

---

## Git Workflow

- Create a topic branch for every task; never commit directly to `main`.
- Make small, focused conventional commits: `feat:`, `fix:`, `chore:`, `docs:`.
- Land changes on `main` via GitHub PRs — do not merge locally into `main`.
- Treat `main` as protected: force-pushes and history rewrites require explicit user approval.

---

## Testing

Tests live in `__tests__/` directories adjacent to the code they test.

```bash
npm test                  # Run all tests
npm test -- --watch       # Watch mode
npm test -- ComponentName # Run specific test
```

---

## Maintaining This Document

When creating a PR, audit this file and make small, targeted improvements based on your learnings — new patterns discovered, outdated references, or missing guidance that would have helped.
