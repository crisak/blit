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
- **i18n:** `next-intl` with middleware-based locale routing (`localePrefix: 'always'`). Config at `src/i18n/`, messages in `src/i18n/messages/{es,en}.json`
- **Static rendering:** uses `generateStaticParams` + `setRequestLocale` for SSG with i18n
- **Imports:** use `@/*` path alias (maps to `./src/*`)
- **Navigation:** use `Link`, `useRouter`, `usePathname` from `@/i18n/routing` (not from `next/link` or `next/navigation`) to preserve locale

## Key Directories

- `src/components/` — organized by feature (`gallery/`, `home/`, `shop/`, `splash/`) + shared (`layout/`, `ui/`)
- `src/lib/types/` — TypeScript type definitions
- `src/lib/services/` — data fetching / business logic
- `src/lib/data/` — static JSON data
- `src/lib/utils/` — utilities (`cn` for class merging via clsx + tailwind-merge)
- `src/hooks/` — custom React hooks

## Code Style

- **TypeScript strict mode** with `noUncheckedIndexedAccess` enabled
- **Never use `any`** — use proper types, `unknown`, generics, or type narrowing
- **ESLint:** extends `next/core-web-vitals`, `next/typescript`, `prettier`. `no-explicit-any` is set to error
- **Prettier:** no semicolons, single quotes, trailing commas (es5), 100 char width, 2-space indent
- Unused variables must be prefixed with `_`

## Styling

- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- Use `cn()` from `@/lib/utils/cn` to merge class names
- Fonts: Inter (body) and Montserrat (headings), loaded via `next/font/google` as CSS variables
