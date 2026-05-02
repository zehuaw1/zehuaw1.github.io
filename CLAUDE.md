# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal academic website for Zehua Wang, deployed to GitHub Pages at `https://zehuaw1.github.io`. Built on the Academic Folio template (Astro 5 + React 18 + Tailwind v4 + Framer Motion). Output is fully static.

## Commands

Package manager is **pnpm** (CI uses `pnpm install --frozen-lockfile`; the lockfile is `pnpm-lock.yaml`). Use pnpm locally to keep the lockfile clean.

```bash
pnpm install
pnpm dev        # dev server at http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # preview the built site
```

There is no test suite, linter, or formatter configured. TypeScript is checked via `astro/tsconfigs/strict` during `astro build` (not a separate `tsc` step).

## Deployment

`.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main` (Node 22, pnpm 10). No staging environment — pushing to `main` is publishing.

`astro.config.mjs` hardcodes `site: 'https://zehuaw1.github.io'`; absolute URLs in the sitemap and SEO tags depend on it.

## Architecture

**Content is code, not markdown.** All site content (bio, news, projects, publications, education, experience, awards, skills, courses) lives as typed TypeScript objects in `src/data/`. There is no Astro content collection — to update the site you edit these `.ts` files. Each file exports both the TypeScript interface and the data, so types flow into the pages that consume them.

- `src/data/site.config.ts` is the central config (name, bio, hero text, socials, news feed, research interests). The `bio` field contains inline HTML and is rendered with `set:html`. There's a `highlightWords` array used to wrap matching phrases in the hero with accent styling.
- `src/data/projects.ts` drives both `/projects` (filterable grid) and `/projects/[slug]` (auto-generated detail pages via `getStaticPaths()`). Adding a project entry creates a new route.

**Astro + React island pattern.** Pages and most layout/presentational components are `.astro` (zero JS at runtime). Interactive bits are React `.tsx` components hydrated via `client:visible` / `client:load` directives — see `HeroAnimation.tsx`, `ProjectFilter.tsx`, `BibTexButton.tsx`, `ScrollFadeIn.tsx`, `StickyAvatar.tsx`. Don't reach for React unless something genuinely needs client-side state or animation; prefer `.astro` for new components.

**Styling.** Three layers, in order of preference:
1. `src/styles/global.css` — CSS custom properties (the design system: colors, fonts, spacing) plus shared utility classes (`.section`, `.container`, `.tag`, etc.). Light/dark mode is driven by `prefers-color-scheme` against these variables.
2. Scoped `<style>` blocks inside `.astro` components for component-specific CSS.
3. Tailwind v4, wired up via `@tailwindcss/vite` in `astro.config.mjs` (no `tailwind.config.js`). Used sparingly.

**Path alias.** `@/*` resolves to `src/*` (see `tsconfig.json`).

**Public assets.** `public/files/cv_zehua_wang.pdf` is the downloadable CV (linked from navbar and `/cv`). `public/images/profile.jpeg` is the profile photo. Anything in `public/` is served verbatim from the site root.

## Conventions worth knowing

- Pages live in `src/pages/`; the route is the file path. `[slug].astro` files require a `getStaticPaths()` export because output is `static`.
- The `BaseLayout.astro` wrapper provides `<SEOHead>`, navbar, and footer — all pages should use it. Pass `personSchema={true}` on the homepage/about for JSON-LD.
- `ScrollFadeIn` is the standard wrapper for fade-in-on-scroll sections. It's a React island, so use `client:visible`.
- News items in `site.config.ts` are listed newest-first and surface on the homepage.
