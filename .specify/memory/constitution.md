<!--
## Sync Impact Report

**Version change**: 1.0.0 → 1.1.0 (MINOR — added project identity, new principle VI,
corrected Principle IV and Build target)

**Modified principles**:
- IV. Component-First, Feature-Organized UI: removed `shop/` from feature directories,
  added `about/`, `contact/`
- V. Simplicity & YAGNI: unchanged

**Added sections**:
- Project Identity (new top-level section describing what Blito is)
- VI. BFF Data Contract (new principle for mocked data layer)

**Removed sections**: N/A

**Corrections**:
- Technology Stack: "Static export optimized for SEO (SSG)" changed to
  "Mixed rendering (SSG + SSR + ISR)" — gallery uses force-dynamic (SSR)

**Templates requiring updates**:
- ⚠ `.specify/templates/plan-template.md` — Constitution Check should reference
  Principles I–VI (was I–V). Advisory only.
- ⚠ `.specify/templates/spec-template.md` — no blockers
- ⚠ `.specify/templates/tasks-template.md` — no blockers

**Deferred TODOs**: None
-->

# Blito Web Constitution

## Project Identity

Blito is a **personal portfolio website for a street artist (graffiti artist)** to showcase
all the work from their career — murals, street art, canvas pieces, digital works,
commissions, and exhibitions. The site's purpose is to present the artist's trajectory,
attract potential clients and collaborators, and provide a point of contact.

**This is NOT an e-commerce platform.** There is no shop, cart, checkout, or product catalog.
Any commerce-related code, references, or documentation found in the codebase MUST be removed.

**MVP scope**: Public portfolio with mocked data served through a BFF pattern. All dynamic
data (artworks, artist info) uses static JSON files behind service functions whose contract
matches a future real backend.

**Future scope** (out of MVP — documented for architectural alignment):
- **Go backend** to replace the mocked data layer via the existing BFF route handlers.
- **Inline admin** — edit buttons visible only to authenticated admin users directly on the
  portfolio pages. No separate `/admin` route.

## Core Principles

### I. Next.js App Router First

All pages and layouts MUST live under `src/app/[locale]/` using the Next.js App Router. Route
segments MUST use the `[locale]` dynamic segment so every URL is locale-prefixed. Each page
MUST declare its rendering strategy explicitly:

- **SSG** (`force-static`): Home, About, Contact
- **SSR** (`force-dynamic`): Gallery list (filter-dependent)
- **ISR** (`revalidate = N`): Artwork detail (cached, periodically refreshed)

Pages using SSG MUST use `generateStaticParams` + `setRequestLocale` for i18n static generation.

**Rationale**: The portfolio targets fast load times and SEO. Each page's rendering strategy
is chosen based on its data characteristics; mixing strategies is intentional and correct.

### II. Bilingual by Default (i18n Non-Negotiable)

Every user-visible string MUST be sourced from `src/i18n/messages/{es,en}.json` via `next-intl`.
Spanish (`es`) is the default locale. No hardcoded UI strings are permitted outside message files.
Navigation MUST use `Link`, `useRouter`, and `usePathname` from `@/i18n/routing` — never from
`next/link` or `next/navigation` — to preserve locale state.

**Rationale**: The artist's primary audience is Spanish-speaking; English support is required for
international reach. Bypassing `next-intl` routing breaks locale persistence across navigations.

### III. TypeScript Strict Mode (NON-NEGOTIABLE)

All code MUST comply with TypeScript strict mode including `noUncheckedIndexedAccess`. The use
of `any` is forbidden — use proper types, `unknown`, generics, or type narrowing instead. Unused
variables MUST be prefixed with `_`. ESLint `no-explicit-any` is set to error and MUST not be
suppressed.

**Rationale**: A portfolio app is a long-lived artifact; type safety prevents regressions as
content and features evolve. Strict mode catches entire classes of runtime errors at compile time.

### IV. Component-First, Feature-Organized UI

UI code MUST be organized under `src/components/` by feature (`gallery/`, `home/`, `about/`,
`contact/`, `splash/`) plus shared directories (`layout/`, `ui/`). Business logic MUST live in
`src/lib/services/`. Static data MUST live in `src/lib/data/`. Custom hooks belong in
`src/hooks/`. No business logic is permitted directly inside page files.

**Rationale**: Separation of concerns keeps pages thin and testable. Feature-organized components
allow independent development and make it easy to locate code for a given section of the site.

### V. Simplicity & YAGNI

Every added abstraction, dependency, or pattern MUST be justified by a current requirement.
Shared utilities (e.g., `cn()`) MUST be used for class merging rather than inline concatenation.
The `@/*` path alias MUST be used for all internal imports — no relative `../../` traversals
beyond one level. New npm dependencies MUST be evaluated for bundle-size impact before adoption.

**Rationale**: Portfolio apps grow slowly; premature abstraction creates maintenance debt with no
user-facing benefit. Keeping the dependency tree lean directly improves Lighthouse scores.

### VI. BFF Data Contract

All dynamic data (artworks, artist info) MUST be served through service functions in
`src/lib/services/` that define a stable contract (input parameters, return types). The current
implementation uses static JSON files from `src/lib/data/` as the data source. When the Go
backend is built, ONLY the data source inside each service function changes — the function
signatures, return types, and route handlers MUST remain identical.

No component or page file MUST import directly from `src/lib/data/`. Data access MUST always
go through a service function.

**Rationale**: The BFF pattern decouples the UI from the data source. This ensures a clean
migration path to the future Go backend without requiring UI or API contract changes.

## Technology Stack & Constraints

- **Runtime**: Next.js 16 with React 19 and TypeScript (strict)
- **Package manager**: pnpm v10 — npm and yarn are forbidden
- **Rendering**: Mixed strategies — SSG, SSR, and ISR per page (see Principle I)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`; class merging via `cn()` from
  `@/lib/utils/cn`
- **Fonts**: Inter (body) and Montserrat (headings) loaded via `next/font/google` as CSS
  variables; no self-hosted font files
- **i18n**: `next-intl` with `localePrefix: 'always'`; locales: `es` (default), `en`
- **Data layer**: Mocked via static JSON + service functions (BFF pattern); future Go backend
- **Linting/Formatting**: ESLint (`next/core-web-vitals`, `next/typescript`, `prettier`) +
  Prettier (no semis, single quotes, trailing commas es5, 100-char width, 2-space indent)
- **SEO target**: Lighthouse Performance >90, Accessibility >90, SEO >95 on all pages

## Development Workflow

- **Commands** (always use pnpm):
  - `pnpm dev` — local dev server
  - `pnpm build` — production build
  - `pnpm lint` / `pnpm lint:fix` — lint
  - `pnpm format` — Prettier format
  - `pnpm type-check` — TypeScript check
- Every feature branch MUST pass `pnpm lint` and `pnpm type-check` before merge.
- New UI sections MUST have corresponding message keys in both `es.json` and `en.json`.
- Spec and plan artifacts for a feature live in `specs/[###-feature-name]/`.
- Data access MUST go through service functions, never direct JSON imports in pages/components.

## Governance

This constitution supersedes all other practices defined in ad-hoc comments or informal
conventions. Any amendment MUST:

1. Update this file with the change.
2. Increment `CONSTITUTION_VERSION` following semantic versioning (MAJOR for
   incompatible principle removals/redefinitions, MINOR for new principles or sections,
   PATCH for clarifications and wording).
3. Propagate changes to affected templates (plan, spec, tasks) and note them in the
   Sync Impact Report comment at the top of this file.
4. Record `LAST_AMENDED_DATE` as the ISO date of the amendment.

All PRs MUST be reviewed for compliance with Principles I–VI. Complexity violations MUST be
documented in the plan's Complexity Tracking table with explicit justification.

**Version**: 1.1.0 | **Ratified**: 2026-03-20 | **Last Amended**: 2026-03-20
