# Tasks: Blito Portfolio MVP — SDD Refactor

**Input**: Design documents from `/specs/001-update-project-docs/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/api-artworks.md, contracts/api-contact.md, quickstart.md

**Tests**: Not requested in feature specification. No test tasks included.

**Organization**: Tasks grouped by 7 user stories (from spec.md) to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: New dependencies and shared type/data foundations needed before user stories

- [x] T001 Add Zod dependency to the project via `pnpm add zod`
- [x] T002 [P] Create Artist Profile type definition in `src/lib/types/artist.ts`
- [x] T003 [P] Create Contact Submission type and Zod validation schema in `src/lib/types/contact.ts`
- [x] T004 [P] Create contact validation schema (shared client/server) in `src/lib/validations/contact.ts`
- [x] T005 [P] Create artist profile mock data in `src/lib/data/artist.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Services and i18n keys that multiple user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Create artist service with `getArtistProfile()` in `src/lib/services/artistService.ts`
- [x] T007 Create contact service with `submitContact()` in `src/lib/services/contactService.ts`
- [x] T008 Add i18n keys for artwork detail, about, contact, 404, error, share, and metadata namespaces in `src/i18n/messages/es.json`
- [x] T009 Add i18n keys for artwork detail, about, contact, 404, error, share, and metadata namespaces in `src/i18n/messages/en.json`

**Checkpoint**: Foundation ready — types, services, data, and i18n keys available for all user stories

---

## Phase 3: User Story 1 — Artwork Detail Page (Priority: P1) 🎯 MVP

**Goal**: Visitors can view individual artworks with full details, image zoom, related works, and share functionality

**Independent Test**: Click any artwork in gallery grid → view full details including zoom → see related works → share via social media → navigate back — all without errors

### Implementation for User Story 1

- [x] T010 [P] [US1] Create ImageViewer component (fullscreen overlay with CSS zoom, `<dialog>` element, ESC-to-close, touch support) in `src/components/gallery/ImageViewer.tsx`
- [x] T011 [P] [US1] Create ImageThumbnails component (thumbnail navigation for multi-image artworks) in `src/components/gallery/ImageThumbnails.tsx`
- [x] T012 [P] [US1] Create RelatedArtworks component (3-4 artworks from same category) in `src/components/gallery/RelatedArtworks.tsx`
- [x] T013 [P] [US1] Create ShareButtons component (Web Share API with fallback to Twitter, Facebook, WhatsApp, copy link) in `src/components/gallery/ShareButtons.tsx`
- [x] T014 [US1] Create artwork detail page with ISR (`revalidate = 3600`), `generateStaticParams` for top 20 artworks, full artwork info, image gallery, zoom, related works, share buttons, and VisualArtwork JSON-LD structured data in `src/app/[locale]/gallery/[slug]/page.tsx`
- [x] T015 [US1] Add artwork-specific Open Graph metadata and alternate language links to artwork detail page in `src/app/[locale]/gallery/[slug]/page.tsx`

**Checkpoint**: Artwork detail pages are fully functional with ISR, zoom, related works, and share buttons

---

## Phase 4: User Story 2 — Shop Module Removal (Priority: P2)

**Goal**: Remove all shop/commerce code, i18n keys, navigation links, types, and documentation references

**Independent Test**: Search codebase for "shop", "cart", "addToCart", "soldOut", "limitedEdition", "price", "product", "checkout", "tienda" → zero results in application code, message files, and documentation

### Implementation for User Story 2

- [x] T016 [P] [US2] Remove shop-related components and directories from `src/components/shop/` (if exists)
- [x] T017 [P] [US2] Remove `shop` namespace and all shop-related keys from `src/i18n/messages/es.json`
- [x] T018 [P] [US2] Remove `shop` namespace and all shop-related keys from `src/i18n/messages/en.json`
- [x] T019 [US2] Remove shop navigation links from Header component in `src/components/layout/Header.tsx`
- [x] T020 [US2] Remove shop navigation links from Footer component in `src/components/layout/Footer.tsx`
- [x] T021 [US2] Remove shop-related type definitions from `src/lib/types/` (if any exist)
- [x] T022 [US2] Remove shop-related routes from `src/app/[locale]/` (if any exist)
- [x] T023 [US2] Update navigation items in i18n messages to only include: Home, Gallery, About, Contact in both `src/i18n/messages/es.json` and `src/i18n/messages/en.json`
- [x] T024 [US2] Run `pnpm type-check` and `pnpm lint` to verify zero errors after shop removal

**Checkpoint**: Zero shop/commerce references remain in code, i18n, and navigation

---

## Phase 5: User Story 3 — Secondary Pages (Priority: P3)

**Goal**: About page (SSG), Contact page with validated form (SSG), custom 404, and error boundary

**Independent Test**: Navigate to About and Contact from any page → submit contact form → access non-existent URL and see themed 404

### Implementation for User Story 3

- [x] T025 [P] [US3] Create ArtistBio component (name, bio, profile image) in `src/components/about/ArtistBio.tsx`
- [x] T026 [P] [US3] Create ArtistTrajectory component (career timeline/history) in `src/components/about/ArtistTrajectory.tsx`
- [x] T027 [P] [US3] Create SocialLinks component (social media links with icons) in `src/components/about/SocialLinks.tsx`
- [x] T028 [US3] Create About page (SSG with `generateStaticParams`, `setRequestLocale`) using ArtistBio, ArtistTrajectory, SocialLinks, and artist service data in `src/app/[locale]/about/page.tsx`
- [x] T029 [P] [US3] Create ContactForm component (name, email, subject, message fields with Zod client-side validation, success/error states) in `src/components/contact/ContactForm.tsx`
- [x] T030 [US3] Create Contact page (SSG) with ContactForm and social media links in `src/app/[locale]/contact/page.tsx`
- [x] T031 [P] [US3] Create custom 404 page with graffiti theme, locale support, and navigation to home/gallery in `src/app/[locale]/not-found.tsx`
- [x] T032 [P] [US3] Create error boundary with graffiti theme, retry option, and navigation to home in `src/app/[locale]/error.tsx`

**Checkpoint**: About, Contact, 404, and error pages are fully functional and statically generated

---

## Phase 6: User Story 4 — BFF API Layer (Priority: P4)

**Goal**: Internal API route handlers for artworks (list + filters, by slug) and contact form submission with stable contract for future Go backend

**Independent Test**: Each API endpoint returns correctly shaped data per contracts. Swapping mock data for a fetch requires changing only the service implementation.

### Implementation for User Story 4

- [x] T033 [P] [US4] Create artworks list route handler (GET with filter query params, response per `contracts/api-artworks.md`) in `src/app/api/artworks/route.ts`
- [x] T034 [P] [US4] Create artwork by slug route handler (GET, 200/404/500 responses per `contracts/api-artworks.md`) in `src/app/api/artworks/[slug]/route.ts`
- [x] T035 [US4] Create contact submission route handler (POST, Zod server-side validation, 200/400/500 responses per `contracts/api-contact.md`) in `src/app/api/contact/route.ts`

**Checkpoint**: All API endpoints return correctly shaped data and handle errors consistently

---

## Phase 7: User Story 5 — Image Optimization (Priority: P5)

**Goal**: Optimized images with blur placeholders, modern formats, LCP priority loading, and lazy loading for below-fold images

**Independent Test**: Lighthouse Performance > 90, LCP < 2.5s, CLS < 0.1 on home and gallery pages

### Implementation for User Story 5

- [x] T036 [US5] Add blur placeholder data (`blurDataURL`) to artwork images in `src/lib/data/artworks.json` and ensure Next.js `<Image>` uses `placeholder="blur"` across gallery components
- [x] T037 [US5] Audit and set `priority` prop on LCP images (hero section, first artwork in detail) and `loading="lazy"` on below-fold images in `src/components/home/HeroSection.tsx`, `src/components/gallery/ArtworkCard.tsx`, and `src/app/[locale]/gallery/[slug]/page.tsx`
- [x] T038 [US5] Configure Next.js image optimization for AVIF/WebP formats and appropriate quality/sizes in `next.config.ts`

**Checkpoint**: All images use blur placeholders, priority loading for LCP, lazy loading below-fold, and modern formats

---

## Phase 8: User Story 6 — SEO, Metadata, and Discoverability (Priority: P6)

**Goal**: Complete metadata, JSON-LD structured data, dynamic sitemap, and robots.txt on all pages

**Independent Test**: Google Rich Results Test validates structured data. Lighthouse SEO > 95. Sitemap includes all localized URLs.

### Implementation for User Story 6

- [x] T039 [P] [US6] Add/verify localized metadata (title, description, Open Graph, Twitter Card, canonical URL, alternate language links) on home page in `src/app/[locale]/page.tsx`
- [x] T040 [P] [US6] Add localized metadata (title, description, Open Graph, Twitter Card, canonical, alternates) to About page in `src/app/[locale]/about/page.tsx`
- [x] T041 [P] [US6] Add localized metadata to Contact page in `src/app/[locale]/contact/page.tsx`
- [x] T042 [P] [US6] Add localized metadata to Gallery page in `src/app/[locale]/gallery/page.tsx`
- [x] T043 [US6] Add JSON-LD structured data (WebSite + Person schema) to home page in `src/app/[locale]/page.tsx`
- [x] T044 [US6] Verify VisualArtwork JSON-LD structured data on artwork detail page (already added in T014) in `src/app/[locale]/gallery/[slug]/page.tsx`
- [x] T045 [P] [US6] Create dynamic sitemap with all pages in both locales, proper priorities, change frequencies, and alternate language links in `src/app/sitemap.ts`
- [x] T046 [P] [US6] Create robots.txt that allows all crawlers, disallows `/api/` and `/_next/`, and links to sitemap in `src/app/robots.ts`

**Checkpoint**: All pages have complete metadata, structured data validates, sitemap and robots.txt are functional

---

## Phase 9: User Story 7 — Documentation and SDD Artifacts (Priority: P7)

**Goal**: Accurate project documentation reflecting portfolio-only scope and SDD methodology

**Independent Test**: A new contributor can clone, read README, set up, and start working within 5 minutes

### Implementation for User Story 7

- [x] T047 [P] [US7] Create root README.md with: project description (portfolio, not commerce), prerequisites, setup instructions, directory structure, available commands, i18n info, rendering strategies, and future roadmap
- [x] T048 [P] [US7] Update CLAUDE.md to reflect: portfolio-only scope, per-page rendering strategies (SSG/SSR/ISR), BFF data mocking approach, SEO patterns, component inventory — remove shop references from Key Directories in `CLAUDE.md`
- [x] T049 [US7] Archive old documentation by moving `docs/TODO.md`, `docs/project-plan.md`, and `docs/rules-ia.md` to `docs/archive/` with a README explaining they are superseded by SpecKit artifacts

**Checkpoint**: Documentation is complete, accurate, and shop-free

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, responsiveness, and cross-story integration checks

- [ ] T050 Verify responsive layout on mobile (375px), tablet (768px), and desktop (1280px+) across all pages — no horizontal scroll or overlapping elements
- [x] T051 Run `pnpm type-check` and `pnpm lint` to verify zero errors across entire codebase
- [x] T052 Run `pnpm build` and verify rendering strategies match quickstart.md expected output table (SSG for Home/About/Contact, SSR for Gallery, ISR for artwork detail, Dynamic for APIs/sitemap)
- [ ] T053 Run Lighthouse audits on home, gallery, and artwork detail pages: target Performance > 90, Accessibility > 90, Best Practices > 90, SEO > 95
- [ ] T054 Navigate all pages in both ES and EN locales, verify i18n completeness — no missing translation keys
- [ ] T055 Verify gallery filters work (category, technique, city, orientation, search) and combined filters return correct results
- [ ] T056 Run quickstart.md full validation checklist (10 items)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup (T001-T005) — BLOCKS all user stories
- **US1 - Artwork Detail (Phase 3)**: Depends on Phase 2 — no dependencies on other stories
- **US2 - Shop Removal (Phase 4)**: Depends on Phase 2 — no dependencies on other stories
- **US3 - Secondary Pages (Phase 5)**: Depends on Phase 2 (services, i18n) — no dependencies on other stories
- **US4 - BFF API (Phase 6)**: Depends on Phase 2 (services, types) — no dependencies on other stories
- **US5 - Image Optimization (Phase 7)**: Depends on US1 (artwork detail page exists) for full validation
- **US6 - SEO/Metadata (Phase 8)**: Depends on US1 (artwork detail), US3 (About, Contact pages exist)
- **US7 - Documentation (Phase 9)**: Can start after Phase 2, but best done last to reflect final state
- **Polish (Phase 10)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: Independent after Phase 2 ✅
- **US2 (P2)**: Independent after Phase 2 ✅
- **US3 (P3)**: Independent after Phase 2 ✅
- **US4 (P4)**: Independent after Phase 2 ✅
- **US5 (P5)**: Partially depends on US1 (artwork detail images) — can start after Phase 2 but full validation needs US1
- **US6 (P6)**: Partially depends on US1 + US3 (pages must exist for metadata) — can start metadata on existing pages immediately
- **US7 (P7)**: Best done after US2 (shop removal) to avoid documenting stale state

### Within Each User Story

- Components before pages (components are dependencies of pages)
- Services before route handlers (services provide data)
- Core implementation before metadata/polish

### Parallel Opportunities

- **Phase 1**: T002, T003, T004, T005 can all run in parallel after T001 (Zod install)
- **Phase 2**: T006 and T007 in parallel; T008 and T009 in parallel
- **Phase 3 (US1)**: T010, T011, T012, T013 all in parallel → then T014, T015 sequentially
- **Phase 4 (US2)**: T016, T017, T018 in parallel → then T019-T024 sequentially
- **Phase 5 (US3)**: T025, T026, T027 in parallel; T029, T031, T032 in parallel → then T028, T030 sequentially
- **Phase 6 (US4)**: T033, T034 in parallel → then T035
- **Phase 8 (US6)**: T039, T040, T041, T042, T045, T046 all in parallel
- **Phase 9 (US7)**: T047, T048 in parallel → then T049
- **US1, US2, US3, US4** can all proceed in parallel after Phase 2

---

## Parallel Example: User Story 1

```bash
# Launch all components in parallel:
Task: "Create ImageViewer in src/components/gallery/ImageViewer.tsx"
Task: "Create ImageThumbnails in src/components/gallery/ImageThumbnails.tsx"
Task: "Create RelatedArtworks in src/components/gallery/RelatedArtworks.tsx"
Task: "Create ShareButtons in src/components/gallery/ShareButtons.tsx"

# Then sequentially (depends on components):
Task: "Create artwork detail page in src/app/[locale]/gallery/[slug]/page.tsx"
Task: "Add Open Graph metadata to artwork detail page"
```

## Parallel Example: User Story 3

```bash
# Launch About components + Contact + Error pages in parallel:
Task: "Create ArtistBio in src/components/about/ArtistBio.tsx"
Task: "Create ArtistTrajectory in src/components/about/ArtistTrajectory.tsx"
Task: "Create SocialLinks in src/components/about/SocialLinks.tsx"
Task: "Create ContactForm in src/components/contact/ContactForm.tsx"
Task: "Create 404 page in src/app/[locale]/not-found.tsx"
Task: "Create error boundary in src/app/[locale]/error.tsx"

# Then sequentially (depends on components):
Task: "Create About page in src/app/[locale]/about/page.tsx"
Task: "Create Contact page in src/app/[locale]/contact/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T005)
2. Complete Phase 2: Foundational (T006-T009)
3. Complete Phase 3: User Story 1 — Artwork Detail (T010-T015)
4. **STOP and VALIDATE**: Artwork detail pages work with zoom, related works, sharing
5. Deploy/demo if ready

### Recommended Execution Order (Solo Developer)

1. **Phase 1 + 2**: Setup + Foundational (T001-T009)
2. **Phase 4 (US2)**: Shop Removal first — cleans codebase before adding new features (T016-T024)
3. **Phase 3 (US1)**: Artwork Detail — highest value missing feature (T010-T015)
4. **Phase 5 (US3)**: Secondary Pages — completes the page set (T025-T032)
5. **Phase 6 (US4)**: BFF API — formalizes data contracts (T033-T035)
6. **Phase 7 (US5)**: Image Optimization — performance polish (T036-T038)
7. **Phase 8 (US6)**: SEO/Metadata — all pages exist now (T039-T046)
8. **Phase 9 (US7)**: Documentation — reflects final state (T047-T049)
9. **Phase 10**: Polish & Validation (T050-T056)

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Shop Removal → Clean codebase ✅
3. Artwork Detail → Core portfolio feature ✅ (MVP!)
4. Secondary Pages → Complete page set ✅
5. BFF API → Data contracts formalized ✅
6. Image Optimization → Performance ✅
7. SEO/Metadata → Discoverability ✅
8. Documentation → Developer onboarding ✅
9. Polish → Launch-ready ✅

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Solo developer recommended order: US2 → US1 → US3 → US4 → US5 → US6 → US7 (clean first, build second)
- No automated tests requested; validation is manual + Lighthouse audits
