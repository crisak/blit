# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Graffiti artist portfolio web app built with Next.js 16, React 19, and TypeScript. Uses `next-intl` for i18n (Spanish/English, default: Spanish).

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Lint:** `pnpm lint` / `pnpm lint:fix`
- **Format:** `pnpm format`
- **Type check:** `pnpm type-check`

Package manager is **pnpm** (v10). Do not use npm or yarn.

## Architecture

- **App Router** with `[locale]` dynamic segment — all pages live under `src/app/[locale]/`
- **Rendering**: SSG (Home, About, Contact), SSR (Gallery/Projects), ISR (Project Detail, revalidate=3600)
- **i18n:** `next-intl` with middleware-based locale routing (`localePrefix: 'always'`). Config at `src/i18n/`, messages in `src/i18n/messages/{es,en}.json`
- **Data**: BFF pattern — all data through `src/lib/services/`. No direct JSON imports in pages/components. Contract stable for future Go backend migration.
- **Imports:** use `@/*` path alias (maps to `./src/*`)
- **Navigation:** use `Link`, `useRouter`, `usePathname` from `@/i18n/routing` (not from `next/link` or `next/navigation`) to preserve locale
- **Validation**: Zod schemas in `src/lib/validations/` shared between client and server
- **State Management**: Zustand for UI state (filters, modals, map interactions)
- **Maps**: MapCN (React-Leaflet + Mapbox dark tiles) for interactive artist footprint map

## Key Directories

- `src/components/` — organized by feature (`gallery/`, `home/`, `about/`, `contact/`, `splash/`, `map/`) + shared (`layout/`, `ui/`)
- `src/lib/types/` — TypeScript type definitions (artwork, artist, contact)
- `src/lib/services/` — BFF service layer (artworkService, artistService, contactService)
- `src/lib/data/` — static JSON data (artworks.json, artist.json)
- `src/lib/validations/` — Zod validation schemas
- `src/lib/utils/` — utilities (`cn` for class merging via clsx + tailwind-merge)
- `src/hooks/` — custom React hooks
- `src/app/api/` — BFF route handlers (projects, contact, map)

## Code Style

- **TypeScript strict mode** with `noUncheckedIndexedAccess` enabled
- **Never use `any`** — use proper types, `unknown`, generics, or type narrowing
- **ESLint:** extends `next/core-web-vitals`, `next/typescript`, `prettier`. `no-explicit-any` is set to error
- **Prettier:** no semicolons, single quotes, trailing commas (es5), 100 char width, 2-space indent
- Unused variables must be prefixed with `_`

## Styling

- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- **shadcn/ui (custom)** as base design system
- Use `cn()` from `@/lib/utils/cn` to merge class names
- Fonts: Inter (body) and Montserrat (headings), loaded via `next/font/google` as CSS variables

## Active Technologies

- TypeScript 5.x (strict mode, `noUncheckedIndexedAccess`) + Next.js 16.1.4, React 19.2.3, next-intl 4.7.0, Tailwind CSS 4.1.18, clsx, tailwind-merge
- GSAP (ScrollTrigger, Timeline) for scroll-driven animations and parallax
- Framer Motion for page transitions and micro-interactions
- Lenis for smooth scroll (integrated with GSAP ScrollTrigger)
- Zustand for UI state management (filters, modals, map interactions)
- MapCN (React-Leaflet + Mapbox dark tiles) for interactive artist footprint map
- react-masonry-css for puzzle/masonry gallery layout
- shadcn/ui (custom) as base design system
- Static JSON files (`src/lib/data/`) behind service functions (BFF pattern); no database for MVP (001-update-project-docs)

## Recent Changes

- 001-update-project-docs: Added TypeScript 5.x (strict mode, `noUncheckedIndexedAccess`) + Next.js 16.1.4, React 19.2.3, next-intl 4.7.0, Tailwind CSS 4.1.18, clsx, tailwind-merge
- 003-sync-doc-prd: Synchronized documentation with PRD v2.0 — added GSAP, Framer Motion, Lenis, Zustand, MapCN, react-masonry-css, shadcn/ui; updated routes from /gallery to /projects; archived shop/e-commerce docs per PRD scope
