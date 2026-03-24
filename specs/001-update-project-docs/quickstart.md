# Quickstart: Blito Portfolio MVP

## Prerequisites

- Node.js 20+
- pnpm 10+ (`corepack enable && corepack prepare pnpm@latest --activate`)

## Setup

```bash
git clone <repo-url>
cd web
git checkout 001-update-project-docs
pnpm install
```

## Development

```bash
pnpm dev          # Start dev server at http://localhost:3000/es
```

The site redirects `/` to `/es` (default locale). Switch to English at `/en`.

## Verify Build

```bash
pnpm type-check   # TypeScript validation
pnpm lint          # ESLint check
pnpm build         # Production build
```

### Expected build output

| Page                      | Rendering | Symbol                 |
| ------------------------- | --------- | ---------------------- |
| /[locale] (Home)          | SSG       | ● (Static)             |
| /[locale]/projects        | SSR       | ƒ (Dynamic)            |
| /[locale]/projects/[slug] | ISR       | ● (Static, revalidate) |
| /[locale]/map             | SSR       | ƒ (Dynamic)            |
| /[locale]/about           | SSG       | ● (Static)             |
| /[locale]/contact         | SSG       | ● (Static)             |
| /api/projects             | Dynamic   | ƒ (Dynamic)            |
| /api/projects/[slug]      | Dynamic   | ƒ (Dynamic)            |
| /api/map/points           | Dynamic   | ƒ (Dynamic)            |
| /api/contact              | Dynamic   | ƒ (Dynamic)            |
| /sitemap.xml              | Dynamic   | ƒ (Dynamic)            |

## Key URLs

| URL                  | Description                      |
| -------------------- | -------------------------------- |
| /es                  | Home page (Spanish)              |
| /en                  | Home page (English)              |
| /es/projects         | Projects gallery with filters    |
| /es/projects/[slug]  | Project detail                   |
| /es/map              | Interactive artist footprint map |
| /es/about            | About the artist                 |
| /es/contact          | Contact form                     |
| /api/projects        | Projects API                     |
| /api/projects/[slug] | Single project API               |
| /api/map/points      | Map points API                   |
| /api/contact         | Contact submission (POST)        |
| /sitemap.xml         | Dynamic sitemap                  |
| /robots.txt          | Robots directives                |

## Validation Checklist

After implementation, verify:

1. `pnpm type-check` — zero errors
2. `pnpm lint` — zero errors
3. `pnpm build` — successful, rendering strategies match table above
4. Navigate all pages in both ES and EN
5. Projects gallery filters work (category, city, tags, search)
6. Project detail shows full info, image gallery, palette, related works, map link
7. Map displays all project points with clustering
8. Contact form validates and submits
9. 404 page shows on invalid URLs
10. No "shop", "tienda", "cart", "product", "ecommerce" references in codebase
11. Lighthouse audit: Performance >85, SEO >95
