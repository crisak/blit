# Implementation Plan: Blito Portfolio MVP — SDD Refactor

**Branch**: `001-update-project-docs` | **Date**: 2026-03-20 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-update-project-docs/spec.md`

## Summary

Convert the Blito graffiti artist portfolio from a partially-built prototype (4/14 phases
done, with leftover shop code) into a clean, SDD-driven MVP. The work covers: artwork detail
page with ISR, shop code removal, secondary pages (About, Contact, 404/error), BFF API layer,
image optimization, full SEO/metadata, and documentation overhaul. All dynamic data uses a
mocked BFF pattern with a stable contract for future Go backend migration.

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode, `noUncheckedIndexedAccess`)
**Primary Dependencies**: Next.js 16.1.4, React 19.2.3, next-intl 4.7.0, Tailwind CSS 4.1.18, clsx, tailwind-merge, react-magic-motion
**Storage**: Static JSON files (`src/lib/data/`) behind service functions (BFF pattern); no database for MVP
**Testing**: Manual testing + Lighthouse audits; no automated test framework in current setup
**Target Platform**: Web (modern browsers); deployed to Vercel or similar
**Project Type**: Web application (Next.js App Router, SSG + SSR + ISR)
**Performance Goals**: Lighthouse >90 (Performance, Accessibility, Best Practices), >95 (SEO); LCP <2.5s, CLS <0.1, INP <200ms
**Constraints**: pnpm only (no npm/yarn), no `any` types, bilingual ES/EN required on all pages, no shop/commerce code
**Scale/Scope**: Single artist portfolio; ~35 artworks, 5-7 pages, 2 locales

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. App Router First | ✅ PASS | All pages under `src/app/[locale]/`. SSG for Home/About/Contact, SSR for Gallery, ISR for Artwork Detail. |
| II. Bilingual by Default | ✅ PASS | All strings from i18n message files. Navigation uses `@/i18n/routing`. |
| III. TypeScript Strict Mode | ✅ PASS | Strict mode with `noUncheckedIndexedAccess`. No `any`. |
| IV. Component-First, Feature-Organized | ✅ PASS | Components in `src/components/{gallery,home,about,contact,splash,layout,ui}`. Services in `src/lib/services/`. No business logic in pages. |
| V. Simplicity & YAGNI | ✅ PASS | No unnecessary abstractions. `@/*` alias. Dependencies evaluated. |
| VI. BFF Data Contract | ✅ PASS | Data through `src/lib/services/` only. No direct JSON imports in pages/components. Contract stable for Go backend migration. |

**Gate result: ALL PASS** — no violations requiring justification.

## Project Structure

### Documentation (this feature)

```text
specs/001-update-project-docs/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (API contracts)
│   ├── api-artworks.md
│   └── api-contact.md
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx                  # Root layout with i18n, fonts, metadata
│   │   ├── page.tsx                    # Home (SSG, force-static)
│   │   ├── not-found.tsx               # 404 page [NEW]
│   │   ├── error.tsx                   # Error boundary [NEW]
│   │   ├── gallery/
│   │   │   ├── page.tsx                # Gallery list (SSR, force-dynamic)
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Artwork detail (ISR, revalidate) [NEW]
│   │   ├── about/
│   │   │   └── page.tsx                # About (SSG) [NEW]
│   │   └── contact/
│   │       └── page.tsx                # Contact (SSG) [NEW]
│   ├── api/
│   │   ├── artworks/
│   │   │   ├── route.ts                # GET /api/artworks (list + filters) [NEW]
│   │   │   └── [slug]/
│   │   │       └── route.ts            # GET /api/artworks/:slug [NEW]
│   │   └── contact/
│   │       └── route.ts                # POST /api/contact [NEW]
│   ├── sitemap.ts                      # Dynamic sitemap [NEW]
│   ├── robots.ts                       # robots.txt [NEW]
│   ├── globals.css
│   └── page.tsx                        # Root redirect to /es
│
├── components/
│   ├── gallery/
│   │   ├── ArtworkCard.tsx             # Existing
│   │   ├── ArtworkGrid.tsx             # Existing
│   │   ├── ArtworkGridSkeleton.tsx     # Existing
│   │   ├── Filters.tsx                 # Existing
│   │   ├── ImageViewer.tsx             # Fullscreen zoom viewer [NEW]
│   │   ├── ImageThumbnails.tsx         # Thumbnail navigation [NEW]
│   │   ├── RelatedArtworks.tsx         # Related works section [NEW]
│   │   └── ShareButtons.tsx            # Social share buttons [NEW]
│   ├── home/
│   │   ├── AboutPreview.tsx            # Existing
│   │   ├── FeaturedWorks.tsx           # Existing
│   │   ├── HeroSection.tsx             # Existing
│   │   ├── HomeClientWrapper.tsx       # Existing
│   │   └── index.ts                    # Existing
│   ├── about/
│   │   ├── ArtistBio.tsx               # Biography section [NEW]
│   │   ├── ArtistTrajectory.tsx        # Trajectory timeline [NEW]
│   │   └── SocialLinks.tsx             # Social media links [NEW]
│   ├── contact/
│   │   └── ContactForm.tsx             # Contact form with validation [NEW]
│   ├── splash/
│   │   ├── SplashScreen.tsx            # Existing
│   │   └── index.ts                    # Existing
│   ├── layout/
│   │   ├── Header.tsx                  # Existing (nav updated: no shop)
│   │   ├── Footer.tsx                  # Existing (links updated: no shop)
│   │   ├── LanguageSwitcher.tsx        # Existing
│   │   ├── AppWrapper.tsx              # Existing
│   │   └── index.ts                    # Existing
│   └── ui/
│       ├── Button.tsx                  # Existing
│       ├── Card.tsx                    # Existing
│       ├── Input.tsx                   # Existing
│       ├── Modal.tsx                   # Existing
│       └── index.ts                    # Existing
│
├── lib/
│   ├── data/
│   │   ├── artworks.json               # Existing (35 artworks)
│   │   └── artist.json                 # Artist profile data [NEW]
│   ├── services/
│   │   ├── artworkService.ts           # Existing (7 functions)
│   │   └── contactService.ts           # Contact form handler [NEW]
│   ├── types/
│   │   ├── artwork.ts                  # Existing (Artwork, ArtworkFilters)
│   │   ├── artist.ts                   # Artist profile type [NEW]
│   │   └── contact.ts                  # Contact submission type [NEW]
│   ├── validations/
│   │   └── contact.ts                  # Contact form validation schema [NEW]
│   └── utils/
│       ├── cn.ts                       # Existing
│       └── delay.ts                    # Existing
│
├── hooks/
│   └── useFilters.ts                   # Existing
│
└── i18n/
    ├── messages/
    │   ├── es.json                     # Existing (shop keys removed, new keys added)
    │   └── en.json                     # Existing (shop keys removed, new keys added)
    ├── request.ts                      # Existing
    └── routing.ts                      # Existing
```

**Structure Decision**: Next.js App Router with `[locale]` dynamic segment. Single project
with feature-organized components. No separate backend directory — API route handlers live
under `src/app/api/`. This aligns with Constitution Principle I (App Router First) and
Principle IV (Feature-Organized UI).

## Complexity Tracking

> No constitution violations. Table intentionally empty.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| — | — | — |
