# Research: Blito Portfolio MVP — SDD Refactor

**Date**: 2026-03-20
**Feature**: 001-update-project-docs

## Research Areas

### 1. ISR Strategy for Artwork Detail Pages

**Decision**: Use `revalidate = 3600` (1 hour) with `generateStaticParams` for top 20 artworks.

**Rationale**: Artwork data changes infrequently (mocked data in MVP, artist-curated in future).
A 1-hour revalidation window balances freshness with build efficiency. Pre-rendering the top 20
ensures the most-visited pages serve instantly.

**Alternatives considered**:
- SSG for all artworks: Rejected — with 35+ artworks and 2 locales, build time grows linearly.
  ISR allows on-demand generation for less popular pieces.
- SSR (force-dynamic): Rejected — unnecessary server load for data that changes rarely. ISR
  provides the same freshness with better caching.
- On-demand revalidation (`revalidatePath`): Deferred to future scope when the Go backend can
  trigger revalidation on data changes.

### 2. Image Viewer Implementation

**Decision**: CSS-based fullscreen overlay with `transform: scale()` for zoom. No external
library.

**Rationale**: The zoom requirement is a single-image fullscreen view with pinch/scroll zoom.
This is achievable with CSS transforms and touch event listeners without adding a dependency.
Aligns with Principle V (Simplicity & YAGNI).

**Alternatives considered**:
- react-medium-image-zoom: Adds ~15KB to bundle. Feature set exceeds our needs (inline zoom).
- react-magic-motion for transitions: Can be used for the open/close animation of the overlay,
  but the zoom itself should be CSS transforms for performance.
- Native `<dialog>` element: Good for the modal container; use it for the fullscreen overlay
  with proper focus trap and ESC-to-close.

### 3. Contact Form Validation

**Decision**: Use Zod for schema validation (shared between client and server). No form
library — native form handling with React 19 `useActionState` or controlled inputs.

**Rationale**: Zod is already the standard validation choice in the Next.js ecosystem. It
enables a single schema shared between client-side validation and the API route handler.
No need for React Hook Form — the contact form has only 4 fields.

**Alternatives considered**:
- React Hook Form + Zod: Overkill for 4 fields. Adds ~25KB.
- Server-only validation: Rejected — poor UX without inline client-side feedback.
- Native HTML5 validation only: Insufficient — no custom error messages, no server-side
  validation.

**Note**: Zod is a new dependency. Bundle impact: ~13KB minified. Justified by shared
client/server validation and future reuse for inline admin forms.

### 4. Structured Data (JSON-LD) Schemas

**Decision**: Use schema.org types:
- Home page: `WebSite` + `Person` (artist)
- Artwork detail: `VisualArtwork` (with `creator`, `artMedium`, `dateCreated`, `image`)

**Rationale**: `VisualArtwork` is the most specific schema.org type for art pieces. Google
Rich Results supports it for artwork-related searches. The `Person` schema for the artist
enables Knowledge Graph recognition.

**Alternatives considered**:
- `CreativeWork` instead of `VisualArtwork`: Too generic. `VisualArtwork` provides more
  specific fields (artMedium, artworkSurface).
- No structured data: Rejected — SEO is an explicit MVP requirement.

### 5. Share Buttons Implementation

**Decision**: Web Share API with fallback to individual platform links.

**Rationale**: Web Share API provides native sharing on mobile (covers ~85% of mobile
browsers). On desktop (where Web Share is less supported), show explicit buttons for
Twitter/X, Facebook, WhatsApp, and a "Copy Link" button.

**Alternatives considered**:
- react-share library: Adds ~20KB. We only need 4 platforms + copy link.
- Only copy link: Misses mobile native sharing opportunity.

### 6. Sitemap Generation

**Decision**: Use Next.js `sitemap.ts` convention to generate a dynamic sitemap at build time.

**Rationale**: Next.js natively supports `src/app/sitemap.ts` that generates `/sitemap.xml`.
It can import artwork data from the service layer to include all artwork URLs with their
alternate language variants.

**Alternatives considered**:
- next-sitemap package: Unnecessary — Next.js 14+ has built-in sitemap support.
- Static sitemap file: Rejected — artwork URLs are dynamic.

### 7. Old Documentation Handling

**Decision**: Archive `docs/TODO.md`, `docs/project-plan.md`, and `docs/rules-ia.md` by
moving them to `docs/archive/` with a README explaining they are superseded by SpecKit
artifacts.

**Rationale**: Deleting outright loses historical context of decisions made during phases 1-4.
Archiving preserves the record while clearly marking them as superseded.

**Alternatives considered**:
- Delete entirely: Loses historical context.
- Keep and update: Creates maintenance burden of two documentation systems.
- Git history only: Harder to discover for future reference.
