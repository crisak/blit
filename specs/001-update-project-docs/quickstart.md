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

| Page | Rendering | Symbol |
|------|-----------|--------|
| /[locale] (Home) | SSG | ● (Static) |
| /[locale]/gallery | SSR | ƒ (Dynamic) |
| /[locale]/gallery/[slug] | ISR | ● (Static, revalidate) |
| /[locale]/about | SSG | ● (Static) |
| /[locale]/contact | SSG | ● (Static) |
| /api/artworks | Dynamic | ƒ (Dynamic) |
| /api/contact | Dynamic | ƒ (Dynamic) |
| /sitemap.xml | Dynamic | ƒ (Dynamic) |

## Key URLs

| URL | Description |
|-----|-------------|
| /es | Home page (Spanish) |
| /en | Home page (English) |
| /es/gallery | Gallery with filters |
| /es/gallery/[slug] | Artwork detail |
| /es/about | About the artist |
| /es/contact | Contact form |
| /api/artworks | Artworks API |
| /api/artworks/[slug] | Single artwork API |
| /api/contact | Contact submission (POST) |
| /sitemap.xml | Dynamic sitemap |
| /robots.txt | Robots directives |

## Validation Checklist

After implementation, verify:

1. `pnpm type-check` — zero errors
2. `pnpm lint` — zero errors
3. `pnpm build` — successful, rendering strategies match table above
4. Navigate all pages in both ES and EN
5. Gallery filters work (category, technique, city, orientation, search)
6. Artwork detail shows full info, image zoom, related works, share buttons
7. Contact form validates and submits
8. 404 page shows on invalid URLs
9. No "shop", "tienda", "cart", "product" references in codebase
10. Lighthouse audit: Performance >90, SEO >95
