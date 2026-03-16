# Academic Folio

A polished, modern academic portfolio template built with [Astro](https://astro.build), React, Tailwind CSS v4, and Framer Motion. Designed for researchers, PhD students, and academics who want a fast, beautiful personal website.

## Features

- **Static site** — blazing fast, zero JS by default (React islands hydrate only when needed)
- **Dark mode** — automatic via `prefers-color-scheme` with frosted glass navbar
- **Scroll animations** — subtle fade-in effects powered by Framer Motion
- **SEO ready** — OpenGraph, Twitter Card, JSON-LD Person schema, sitemap
- **Responsive** — mobile-first design with clean typography (Inter)
- **GitHub Pages** — ships with a deploy workflow out of the box

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero animation, about preview, featured projects, news |
| `/about` | Full bio, profile photo, research interests |
| `/projects` | Filterable project grid with tag-based filtering |
| `/projects/[slug]` | Individual project detail pages (auto-generated from data) |
| `/publications` | Publication list grouped by year with BibTeX buttons |
| `/cv` | Full CV with timeline, awards, skills, coursework, PDF download |
| `/blog` | Blog listing (placeholder — ready for content collection) |

## Quick Start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # Static output in dist/
npm run preview   # Preview the build locally
```

## Customization

All content lives in `src/data/` as TypeScript files. Edit these to make the site yours:

| File | What to change |
|---|---|
| `src/data/site.config.ts` | Name, bio, tagline, email, social links, profile image, research interests, news |
| `src/data/projects.ts` | Research projects (title, description, tags, links, featured flag) |
| `src/data/publications.ts` | Papers with authors, venue, abstract, links, BibTeX |
| `src/data/education.ts` | Degrees, institutions, advisors, GPA |
| `src/data/experience.ts` | Work/research/teaching positions |
| `src/data/awards.ts` | Awards, fellowships, honors |
| `src/data/skills.ts` | Technical skills by category with proficiency levels |
| `src/data/courses.ts` | Selected coursework by category |

### Profile Image

Place your profile photo at `public/profile.jpg`. Referenced in `site.config.ts` as `/profile.jpg`.

### CV PDF

Place your CV PDF at `public/cv.pdf`. The download button in the navbar and CV page links to `/cv.pdf`.

### Site URL

Update `site` in `astro.config.mjs` and `url` in `src/data/site.config.ts` to match your GitHub Pages URL (e.g., `https://yourusername.github.io`).

### Colors

The color scheme is defined as CSS custom properties in `src/styles/global.css`. The default is a blue brand palette with full light/dark mode support.

### Adding Blog Posts

The blog page is a placeholder. To add posts, create an Astro [content collection](https://docs.astro.build/en/guides/content-collections/) in `src/content/blog/` and update `src/pages/blog/index.astro` to render them.

## Deployment

### GitHub Pages (included)

The repository includes `.github/workflows/deploy.yml`. To deploy:

1. Push to `main`
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. The site deploys automatically on every push to `main`

### Other Hosts

Run `npm run build` and deploy the `dist/` directory to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

## Tech Stack

- [Astro 5](https://astro.build) — static site generator
- [React 18](https://react.dev) — interactive islands (hero, filters, BibTeX)
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — scroll and layout animations
- [TypeScript](https://www.typescriptlang.org) — type-safe data and components

## License

MIT
