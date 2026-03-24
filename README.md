# Blito — Street Art Portfolio

Personal portfolio website for a graffiti / street art artist. Built with Next.js 16, React 19, and TypeScript. Bilingual (Spanish / English).

**This is NOT an e-commerce platform.** It is a portfolio to showcase the artist's work.

## Prerequisites

- **Node.js** 20+
- **pnpm** 10+ (`corepack enable && corepack prepare pnpm@latest --activate`)

## Setup

```bash
git clone <repo-url>
cd web
pnpm install
```

## Development

```bash
pnpm dev          # Start dev server at http://localhost:3000/es
```

The site redirects `/` to `/es` (default locale). Switch to English at `/en`.

## Commands

| Command           | Description             |
| ----------------- | ----------------------- |
| `pnpm dev`        | Start dev server        |
| `pnpm build`      | Production build        |
| `pnpm start`      | Start production server |
| `pnpm type-check` | TypeScript validation   |
| `pnpm lint`       | ESLint check            |
| `pnpm format`     | Prettier formatting     |

## Architecture

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode, `noUncheckedIndexedAccess`)
- **Styling**: Tailwind CSS v4 with PostCSS, shadcn/ui (custom)
- **i18n**: next-intl (Spanish default, English)
- **Validation**: Zod (shared client/server)
- **State**: Zustand (UI state: filters, modals, map)
- **Animations**: GSAP (ScrollTrigger, Timeline) + Framer Motion + Lenis
- **Maps**: MapCN (React-Leaflet + Mapbox dark tiles)
- **Gallery**: react-masonry-css (puzzle layout)
- **Package Manager**: pnpm 10

**This is NOT an e-commerce platform.** It is a portfolio to showcase the artist's work. E-commerce is handled at [www.ilegales.co](http://www.ilegales.co).

### Rendering Strategies

| Page                                         | Strategy | Notes                                     |
| -------------------------------------------- | -------- | ----------------------------------------- |
| Home (`/[locale]`)                           | SSG      | `force-static`                            |
| Projects (`/[locale]/projects`)              | SSR      | `force-dynamic`, filters via searchParams |
| Project Detail (`/[locale]/projects/[slug]`) | ISR      | `revalidate = 3600`, top 20 pre-rendered  |
| Map (`/[locale]/map`)                        | SSR      | `force-dynamic`, interactive map          |
| About (`/[locale]/about`)                    | SSG      | `force-static`                            |
| Contact (`/[locale]/contact`)                | SSG      | `force-static`                            |
| API Routes (`/api/*`)                        | Dynamic  | Route handlers                            |
| Sitemap / Robots                             | Dynamic  | Generated at request time                 |

### Directory Structure

```
src/
├── app/
│   ├── [locale]/           # All pages under locale segment
│   │   ├── page.tsx        # Home (SSG)
│   │   ├── projects/       # Projects (SSR) + [slug] (ISR)
│   │   ├── map/            # Interactive map (SSR)
│   │   ├── about/          # About (SSG)
│   │   ├── contact/        # Contact (SSG)
│   │   ├── not-found.tsx   # Custom 404
│   │   └── error.tsx       # Error boundary
│   ├── api/                # BFF route handlers
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # robots.txt
├── components/             # Feature-organized components
│   ├── gallery/            # ArtworkCard, Grid, ImageViewer, etc.
│   ├── home/               # HeroSection, FeaturedWorks, etc.
│   ├── about/              # ArtistBio, Trajectory, SocialLinks
│   ├── contact/            # ContactForm
│   ├── map/                # MapCN components
│   ├── layout/             # Header, Footer, LanguageSwitcher
│   ├── splash/             # SplashScreen
│   └── ui/                 # Button, Card, Input, Modal (shadcn/ui)
├── lib/
│   ├── data/               # Static JSON (artworks, artist)
│   ├── services/           # BFF service layer
│   ├── types/              # TypeScript types
│   ├── validations/        # Zod schemas
│   └── utils/              # Utilities (cn, delay)
├── hooks/                  # Custom React hooks
└── i18n/                   # Internationalization config + messages
```

### Data Layer (BFF Pattern)

All data flows through service functions in `src/lib/services/`. Pages and components never import JSON data directly. This ensures a stable contract for future Go backend migration — only the service implementation changes, not the API shape or UI.

### i18n

- Messages in `src/i18n/messages/{es,en}.json`
- Always use `Link`, `useRouter`, `usePathname` from `@/i18n/routing` (not from `next/link`)
- `localePrefix: 'always'` — all URLs have a locale segment

## Future Roadmap

1. **Go Backend** — Replace mocked data with a real API
2. **Inline Admin** — Edit controls on portfolio pages (no /admin route)
3. **Enhanced Features** — Likes, blog, Instagram API, video gallery
4. **English Translation** — Full EN translation (currently Spanish only in MVP)

**Note**: E-commerce is explicitly out of scope for this portfolio. Physical products (prints, etc.) are handled via [www.ilegales.co](http://www.ilegales.co).

## SDD Artifacts

This project follows Spec-Driven Development. Specifications, plans, and tasks are in `specs/`.
