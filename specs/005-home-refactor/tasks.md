# Tasks: Home Page Refactor

**Input**: Design documents from `/specs/005-home-refactor/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Not explicitly requested - following feature spec for visual/UX validation

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (i18n Foundation)

**Purpose**: Update i18n messages and artist data - prerequisite for all sections

- [x] T001 [P] Update es.json with new translation keys for all home sections in src/i18n/messages/es.json
- [x] T002 [P] Update en.json with new translation keys for all home sections in src/i18n/messages/en.json
- [x] T003 [P] Update artist.json with correct Blito bio, collectives (@ilegales.col, @saborlatinocrewoficial, @saborlatinocallejero), and social links in src/lib/data/artist.json

**Checkpoint**: i18n ready - all sections can now reference translation keys

---

## Phase 2: Foundational (Cursor & WhatsApp - Shared Infrastructure)

**Purpose**: Shared UI components needed across multiple sections

- [x] T004 [P] Create CustomCursor component in src/components/home/CustomCursor.tsx with Framer Motion, changes on hover for images/buttons/links
- [x] T005 [P] Create WhatsAppButton component in src/components/home/WhatsAppButton.tsx with floating persistent button, number +57 312 357 4867, contextual pre-loaded message

**Checkpoint**: Shared components ready - Hero, FeaturedProjects, and page can now use these

---

## Phase 3: User Story 1 - Hero Section Enhancement (Priority: P1) 🎯 MVP

**Goal**: Complete hero with video background, GSAP Timeline animation, parallax effect, kinetic typography, and CTAs

**Independent Test**: Load home page and verify hero animation completes in under 2 seconds, parallax visible on scroll

### Implementation

- [x] T006 [US1] Enhance HeroSection in src/components/home/HeroSection.tsx: add video background with onError fallback to static image
- [x] T007 [US1] Add GSAP Timeline entrance animation for "BLITO" text (kinetic typography, oversized display)
- [x] T008 [US1] Add tagline "Arte callejero · Colombia" in HeroSection
- [x] T009 [US1] Add two CTA buttons: "Ver portafolio" → /projects and "Cotizar trabajo" → /contact
- [x] T010 [US1] Implement deep parallax effect on scroll using GSAP ScrollTrigger
- [x] T011 [US1] Add prefers-reduced-motion support using Framer Motion useReducedMotion
- [x] T012 [US1] Integrate CustomCursor on interactive hero elements

**Checkpoint**: Hero section complete with all animations and CTAs functional

---

## Phase 4: User Story 2 - Featured Projects Upgrade (Priority: P1) 🎯 MVP

**Goal**: Upgrade FeaturedWorks with asymmetric overlapping layout, hover effects, and cursor customization

**Independent Test**: Navigate to Featured Projects section and verify 4-6 projects display with hover effects

### Implementation

- [x] T013 [P] [US2] Modify FeaturedProjects layout in src/components/home/FeaturedWorks.tsx to use CSS Grid with asymmetric positioning and overlapping elements
- [x] T014 [P] [US2] Add ArtworkCard hover effects: smooth scale + title/category overlay reveal
- [x] T015 [US2] Integrate CustomCursor on artwork card hover areas
- [x] T016 [US2] Add "Ver todos los proyectos" CTA button linking to /projects
- [x] T017 [US2] Simplify GSAP animations on mobile using ScrollTrigger.matchMedia

**Checkpoint**: Featured Projects section displays with asymmetric layout and hover effects

---

## Phase 5: User Story 3 - Statistics Section (Priority: P2)

**Goal**: Create animated counters section showing artist metrics

**Independent Test**: Scroll to "Blito en Numeros" section and verify counters animate on viewport entry

### Implementation

- [x] T018 [US3] Create StatisticsSection component in src/components/home/StatisticsSection.tsx
- [x] T019 [US3] Implement animated counters: +10 anos, +50 murales, X ciudades, X m² pintados
- [x] T020 [US3] Add ScrollTrigger reveal animation when section enters viewport
- [x] T021 [US3] Use large typography and cinematic reveal effect

**Checkpoint**: Statistics section displays and animates on scroll

---

## Phase 6: User Story 4 - About Preview Enhancement (Priority: P2)

**Goal**: Enhance AboutPreview with floating mini-gallery and dark artistic background

**Independent Test**: Scroll to "Sobre Blito" section and verify photo, bio, floating gallery, and CTA

### Implementation

- [x] T022 [P] [US4] Update AboutPreview component in src/components/home/AboutPreview.tsx with dark artistic background
- [x] T023 [P] [US4] Add floating mini-gallery inspired by retna.com aesthetic
- [x] T024 [US4] Update CTA to "Conoce mi historia" linking to /about
- [x] T025 [US4] Ensure proper bio content about Blito from artist.json

**Checkpoint**: About Preview section complete with mini-gallery and dark background

---

## Phase 7: User Story 5 - Map Preview (Priority: P2)

**Goal**: Create map teaser section with pins and department statistics

**Independent Test**: Scroll to "Huella en Colombia" section and verify map preview with pins and stats

### Implementation

- [x] T026 [US5] Create MapPreview component in src/components/home/MapPreview.tsx
- [x] T027 [US5] Add map preview with 3-4 highlighted pins using static map image or Mapbox
- [x] T028 [US5] Display department impact statistics overlay
- [x] T029 [US5] Add CTA "Ver todas las obras en el mapa" linking to /map

**Checkpoint**: Map Preview section displays with pins and statistics

---

## Phase 8: User Story 6 - Collaborations & Collectives (Priority: P3)

**Goal**: Add collaborations logo bar and collectives section

**Independent Test**: Scroll to "Colaboraciones" and "Colectivos" sections and verify logos display

### Implementation

- [x] T030 [P] [US6] Create CollaborationsSection component in src/components/home/CollaborationsSection.tsx with grayscale logo bar
- [x] T031 [P] [US6] Create CollectivesSection component in src/components/home/CollectivesSection.tsx with collective logos
- [x] T032 [US6] Add logos for @ilegales.col, @saborlatinocrewoficial, @saborlatinocallejero with functional links
- [x] T033 [US6] Add "Han confiado en mi trabajo" text in CollaborationsSection

**Checkpoint**: Collaborations and Collectives sections display logos with links

---

## Phase 9: User Story 7 - Footer Enhancement (Priority: P1)

**Goal**: Update Footer with collectives section and ilegales.co link

**Independent Test**: Scroll to footer and verify social links, colectivos section, and ilegales.co link

### Implementation

- [x] T034 [US7] Enhance Footer component in src/components/layout/Footer.tsx
- [x] T035 [US7] Add collectives section with @ilegales.col, @saborlatinocrewoficial, @saborlatinocallejero logos and links
- [x] T036 [US7] Add link to https://www.ilegales.co in Footer

**Checkpoint**: Footer displays with collectives section and all required links

---

## Phase 10: User Story 8 - SEO Optimization (Priority: P1)

**Goal**: Verify and enhance SEO metadata, JSON-LD, and semantic HTML

**Independent Test**: Verify page metadata, Open Graph tags, JSON-LD, and semantic structure

### Implementation

- [x] T037 [US8] Review and update generateMetadata in src/app/[locale]/page.tsx for complete SEO metadata
- [x] T038 [US8] Add JSON-LD schema for Person and VisualArtwork in page.tsx
- [x] T039 [US8] Verify semantic HTML structure (header, main, section, footer) in page.tsx

**Checkpoint**: SEO metadata and structure verified

---

## Phase 11: User Story 9 - Animation System Integration (Priority: P2)

**Goal**: Ensure Lenis smooth scroll integrates with GSAP ScrollTrigger across all sections

**Independent Test**: Scroll through entire page and verify smooth cinematic motion

### Implementation

- [x] T040 [P] [US9] Verify LenisProvider in src/components/providers/LenisProvider.tsx is properly configured
- [x] T041 [P] [US9] Verify PageTransitionProvider in src/components/providers/PageTransitionProvider.tsx handles transitions
- [x] T042 [US9] Test Lenis + GSAP ScrollTrigger integration across all sections
- [x] T043 [US9] Verify Framer Motion micro-interactions work on all interactive elements

**Checkpoint**: Smooth scroll and animations verified across all sections

---

## Phase 12: Page Assembly & Polish

**Purpose**: Assemble all sections in page.tsx and final validation

- [x] T044 [P] Update src/app/[locale]/page.tsx to include all new sections (StatisticsSection, MapPreview, CollaborationsSection, CollectivesSection, WhatsAppButton)
- [x] T045 [P] Update src/components/home/index.ts to export all new components
- [x] T046 Add AppWrapper or layout wrapper containing CustomCursor and WhatsAppButton as persistent elements
- [ ] T047 Final responsive testing across mobile (320px+), tablet, and desktop
- [ ] T048 Run pnpm lint and pnpm type-check to validate code
- [ ] T049 Run pnpm format to ensure code formatting consistency

**Checkpoint**: All sections assembled, linting passes, responsive verified

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies - can start immediately
- **Phase 2 (Foundational)**: No dependencies on Phase 1 (i18n can be done in parallel)
- **Phase 3-9 (User Stories)**: Depend on Phase 1 (i18n) and Phase 2 (cursor, WhatsApp)
- **Phase 10-12 (SEO, Animations, Polish)**: Depend on user story completion

### User Story Dependencies

- **US1 (Hero)**: Depends on Phase 1, Phase 2 - No dependencies on other stories
- **US2 (Featured Projects)**: Depends on Phase 1, Phase 2 - Can run parallel with US1
- **US3 (Statistics)**: Depends on Phase 1 - Can run parallel with US1, US2
- **US4 (About Preview)**: Depends on Phase 1 - Can run parallel with US1, US2, US3
- **US5 (Map Preview)**: Depends on Phase 1 - Can run parallel with above
- **US6 (Collaborations)**: Depends on Phase 1 - Can run parallel with above
- **US7 (Footer)**: Depends on Phase 1 - Can run parallel with above
- **US8 (SEO)**: Depends on Phase 1, Phase 3 - Runs after Hero/FeaturedProjects
- **US9 (Animations)**: Depends on Phase 1, Phase 2, Phase 3-9 - Runs last

### Parallel Opportunities

- Phase 1 tasks (T001, T002, T003) can run in parallel
- Phase 2 tasks (T004, T005) can run in parallel
- US1 tasks (T006-T012) should run sequentially (same component)
- US2 tasks (T013-T017) can have T013, T014 run in parallel (different aspects)
- US3-US7 tasks within each story can have some parallelization
- T037-T039 (SEO) can run in parallel
- T040-T041 (Animation system) can run in parallel
- T044-T045 (Page assembly) can run in parallel

---

## Implementation Strategy

### MVP First (US1 + US2 as Core MVP)

1. Complete Phase 1: i18n Setup
2. Complete Phase 2: Cursor + WhatsApp Foundation
3. Complete Phase 3: US1 Hero Section
4. Complete Phase 4: US2 Featured Projects
5. **STOP and VALIDATE**: Test hero + featured projects together
6. Deploy MVP with core visual impact

### Incremental Delivery

1. MVP complete (Hero + Featured Projects)
2. Add US3 Statistics → Test → Deploy
3. Add US4 About Preview → Test → Deploy
4. Add US5 Map Preview → Test → Deploy
5. Add US6 Collaborations/Collectives → Test → Deploy
6. Add US7 Footer Enhancement → Test → Deploy
7. Add US8 SEO + US9 Animations → Test → Deploy
8. Final Polish (Phase 12)

---

## Summary

| Metric                        | Value                |
| ----------------------------- | -------------------- |
| Total Tasks                   | 49                   |
| Phase 1 (Setup)               | 3 tasks              |
| Phase 2 (Foundational)        | 2 tasks              |
| User Story 1 (Hero)           | 7 tasks              |
| User Story 2 (Featured)       | 5 tasks              |
| User Story 3 (Statistics)     | 4 tasks              |
| User Story 4 (About)          | 4 tasks              |
| User Story 5 (Map)            | 4 tasks              |
| User Story 6 (Collaborations) | 4 tasks              |
| User Story 7 (Footer)         | 3 tasks              |
| User Story 8 (SEO)            | 3 tasks              |
| User Story 9 (Animations)     | 4 tasks              |
| Phase 12 (Polish)             | 6 tasks              |
| Parallelizable Tasks          | ~20 tasks marked [P] |

### Independent Test Criteria Per Story

| User Story           | Independent Test                                                    |
| -------------------- | ------------------------------------------------------------------- |
| US1 (Hero)           | Load page, hero animation completes <2s, parallax visible on scroll |
| US2 (Featured)       | Navigate to section, verify 4-6 projects with hover effects         |
| US3 (Statistics)     | Scroll to section, counters animate on viewport entry               |
| US4 (About)          | Scroll to section, verify photo/bio/mini-gallery/CTA                |
| US5 (Map)            | Scroll to section, verify map preview with pins                     |
| US6 (Collaborations) | Scroll to section, verify logos display with links                  |
| US7 (Footer)         | Scroll to footer, verify all social links and colectivos            |
| US8 (SEO)            | View page source, verify metadata/JSON-LD/semantic HTML             |
| US9 (Animations)     | Scroll entire page, verify smooth cinematic motion                  |

### Suggested MVP Scope

**User Story 1 (Hero)** + **User Story 2 (Featured Projects)** = Core MVP

These two stories deliver the primary visual impact and can be tested independently as a complete experience.
