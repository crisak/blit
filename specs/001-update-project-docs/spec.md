# Feature Specification: Blito Portfolio MVP — SDD Refactor

**Feature Branch**: `001-update-project-docs`
**Created**: 2026-03-20
**Status**: Draft
**Input**: User description: "Convertir borrador TODO.md a SDD. Portfolio personal con data mockeada (BFF), sin shop, SEO y usabilidad. Futuro: backend Go, admin inline."

## Context

This project has 4 of 14 phases completed (setup, layout/nav, home SSG, gallery SSR).
The original TODO.md roadmap included an e-commerce module (shop, cart, checkout) which
is now explicitly out of scope. This spec converts the remaining work into a proper SDD
specification, removing all shop references and aligning the roadmap with the real product:
a personal graffiti artist portfolio.

**Completed work (not in scope of this spec):**
- Phase 1: Project setup (Next.js 16, React 19, TypeScript strict, Tailwind v4, next-intl)
- Phase 2: Layout and navigation (Header, Footer, LanguageSwitcher, SplashScreen, UI components)
- Phase 3: Home page SSG (HeroSection, FeaturedWorks, AboutPreview, 8 mock artworks)
- Phase 4: Gallery SSR (ArtworkGrid, Filters, 35 mock artworks, useFilters hook, Suspense)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visitor Views Artwork Details (Priority: P1)

A visitor browsing the gallery finds an artwork that catches their eye and clicks on it.
They land on a detailed artwork page showing the full-size image with zoom capability,
complete information (title, description, technique, dimensions, location, year), a gallery
of additional images, and related artworks from the same category. The page loads instantly
for popular works (pre-rendered) and within 2 seconds for others. The page has complete
SEO metadata including artwork-specific Open Graph images and structured data.

**Why this priority**: The gallery list page already exists (Phase 4), but visitors cannot
view individual artworks in detail. This is the highest-value missing feature — without it
the portfolio cannot showcase individual pieces properly.

**Independent Test**: A visitor can click any artwork in the gallery grid, view its full
details including zoom, see related works, share the page via social media, and navigate
back — all without errors.

**Acceptance Scenarios**:

1. **Given** a visitor clicks an artwork in the gallery grid, **When** the detail page loads,
   **Then** they see: full-size hero image, title, description, technique, category, dimensions,
   year, location, and dominant colors.
2. **Given** the artwork has multiple images, **When** the visitor views the detail page,
   **Then** they see thumbnail navigation and can switch between images.
3. **Given** a visitor clicks the main artwork image, **When** the image viewer opens, **Then**
   they can zoom in/out and pan across the image in a fullscreen overlay.
4. **Given** the detail page displays, **When** a visitor scrolls down, **Then** they see 3-4
   related artworks from the same category with links back to the gallery.
5. **Given** the detail page, **When** a visitor clicks a share button, **Then** they can share
   the page via Twitter, Facebook, WhatsApp, or copy the URL to clipboard.
6. **Given** the most popular artworks, **When** the site is built, **Then** the top 20 artworks
   are pre-rendered and serve instantly; others are rendered on first request and cached.
7. **Given** a visitor accesses an artwork detail URL, **When** a search engine indexes it,
   **Then** it finds VisualArtwork structured data, artwork-specific Open Graph image, and
   alternate language links.

---

### User Story 2 - Shop Module Removal and Codebase Cleanup (Priority: P2)

The project currently contains shop-related code (components, i18n keys, navigation links,
type definitions, planned phases in TODO.md) that does not belong in a personal portfolio.
All shop/commerce references must be removed from code, documentation (TODO.md, project-plan.md,
rules-ia.md), i18n files, and navigation. The `docs/` folder content must be updated or
replaced to reflect the portfolio-only scope under SDD methodology.

**Why this priority**: Dead code and mismatched documentation create confusion. The shop
module contradicts the project identity and must be removed before any further development
or documentation can be accurate.

**Independent Test**: Searching the entire codebase (including docs/, i18n messages, and
CLAUDE.md) for "shop", "cart", "addToCart", "soldOut", "limitedEdition", "price",
"product", "checkout", "tienda" returns zero results in application code, message files,
and project documentation.

**Acceptance Scenarios**:

1. **Given** the codebase contains shop components and references, **When** cleanup is complete,
   **Then** no shop-related components, routes, navigation links, i18n keys, types, services,
   or data files remain.
2. **Given** the navigation includes "Tienda" / "Shop", **When** cleanup is done, **Then** the
   navigation shows only: Inicio, Galería, Sobre Mí, Contacto (and English equivalents).
3. **Given** `es.json` and `en.json` contain a `shop` namespace, **When** cleanup is done,
   **Then** the `shop` namespace is removed from both files.
4. **Given** `docs/TODO.md` contains phases 6-7 (Shop), **When** cleanup is done, **Then**
   those phases are removed and remaining phases are renumbered. The TODO.md is converted to
   an SDD-aligned roadmap or replaced by SpecKit artifacts.
5. **Given** `docs/project-plan.md` references shop/products throughout, **When** cleanup is
   done, **Then** all product/shop references are removed and the plan reflects portfolio-only
   scope.
6. **Given** the project passes cleanup, **When** `type-check` and `lint` are run, **Then**
   both complete with zero errors.

---

### User Story 3 - Secondary Pages: About, Contact, and Error Handling (Priority: P3)

The portfolio needs additional pages to present the artist's story, provide a way for
potential clients to get in touch, and handle error states gracefully. The About page shows
the artist's biography, trajectory, and philosophy. The Contact page provides a form for
inquiries. Custom 404 and error pages maintain the graffiti theme and guide visitors back
to useful content.

**Why this priority**: A portfolio without an About page and contact method is incomplete.
Error pages prevent visitors from hitting dead ends. These are required for a professional
MVP.

**Independent Test**: A visitor can navigate to About and Contact from any page, submit the
contact form, and encounter a themed 404 page when accessing a non-existent URL.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the About page, **When** it loads, **Then** they see:
   artist name, bio, profile image, artistic trajectory, philosophy, and social media links
   — all localized in the active language.
2. **Given** a visitor navigates to the Contact page, **When** they fill out the form (name,
   email, subject, message) and submit, **Then** they see a success confirmation. The form
   validates required fields and email format before submission.
3. **Given** a visitor accesses a non-existent URL, **When** the 404 page loads, **Then** it
   displays a themed error message in the active locale with navigation back to home and
   gallery.
4. **Given** a runtime error occurs on any page, **When** the error boundary catches it,
   **Then** the visitor sees a themed error page with a retry option and navigation to home.
5. **Given** the About and Contact pages, **When** a build is run, **Then** both pages are
   statically generated (SSG) for both locales.

---

### User Story 4 - BFF API Layer for Portfolio Data (Priority: P4)

The portfolio needs an internal API layer (BFF — Backend for Frontend) that serves artwork
and artist data through route handlers. This API layer uses mocked data now but its contract
MUST match what a future Go backend will provide, so switching to real endpoints requires
changing only the data source — not the API shape or UI components. The API also handles
contact form submissions.

**Why this priority**: The BFF layer decouples the UI from the data source and establishes
the contract that the future Go backend must fulfill. Building it now ensures a clean
migration path.

**Independent Test**: Each API endpoint returns correctly shaped data for valid requests and
appropriate error responses for invalid ones. Swapping the mock data import for a fetch to
an external URL would require changing only the service implementation, not the route handler
or any component.

**Acceptance Scenarios**:

1. **Given** a request to the artworks endpoint with filter parameters, **When** the server
   processes it, **Then** it returns a filtered list of artworks matching the query.
2. **Given** a request for a single artwork by slug, **When** the artwork exists, **Then** the
   endpoint returns the full artwork data. **When** it does not exist, **Then** it returns a
   404 response.
3. **Given** a contact form submission, **When** the data is valid, **Then** the endpoint
   returns a success response. **When** required fields are missing or the email is invalid,
   **Then** it returns a 400 response with field-level error details.
4. **Given** any API endpoint, **When** an unexpected error occurs, **Then** it returns a
   consistent error response format with appropriate status code.

---

### User Story 5 - Image Optimization and Performance (Priority: P5)

The portfolio's primary content is high-quality artwork images. Every image must load fast
with blur placeholders, use modern formats, and contribute to excellent Core Web Vitals.
The largest image on each page (LCP candidate) must load with priority while below-fold
images use lazy loading.

**Why this priority**: Images are the core content of a visual portfolio. Slow images
destroy the user experience and SEO ranking. This must be addressed before launch.

**Independent Test**: Running Lighthouse on the home and gallery pages shows Performance
score above 90, LCP under 2.5 seconds, and CLS under 0.1 on a simulated 3G connection.

**Acceptance Scenarios**:

1. **Given** any page with images, **When** images load, **Then** each one shows a blur
   placeholder before the full image appears.
2. **Given** the home page hero image, **When** the page loads, **Then** the hero image loads
   with priority (no lazy loading) and is the LCP element under 2.5 seconds.
3. **Given** the gallery grid, **When** the page loads, **Then** images below the fold load
   lazily as the visitor scrolls.
4. **Given** any image, **When** served to the browser, **Then** it uses AVIF or WebP format
   with appropriate quality settings.
5. **Given** the home page and gallery page, **When** audited, **Then** Core Web Vitals are:
   LCP < 2.5s, CLS < 0.1, INP < 200ms.

---

### User Story 6 - SEO, Metadata, and Discoverability (Priority: P6)

The portfolio must rank well in search engines for graffiti and street art keywords in
Spanish and English. Every page needs complete metadata, structured data, a dynamic sitemap,
and proper robots directives. Artwork detail pages need artwork-specific structured data
(VisualArtwork schema).

**Why this priority**: SEO is an explicit MVP requirement. The artist needs organic
discoverability to attract clients and fans.

**Independent Test**: Google Rich Results Test validates structured data on all page types.
Lighthouse SEO score is above 95 on every page. The sitemap includes all localized URLs.

**Acceptance Scenarios**:

1. **Given** any page, **When** its metadata is inspected, **Then** it has: localized title,
   description, Open Graph tags, Twitter Card tags, canonical URL, and alternate language links.
2. **Given** the home page, **When** crawled, **Then** JSON-LD structured data describes the
   website and artist (Person schema).
3. **Given** an artwork detail page, **When** crawled, **Then** JSON-LD structured data
   describes the artwork using VisualArtwork schema with image, artist, technique, and date.
4. **Given** the site, **When** `/sitemap.xml` is accessed, **Then** it contains all pages
   in both locales with proper priorities, change frequencies, and alternate language links.
5. **Given** the site, **When** `/robots.txt` is accessed, **Then** it allows all crawlers,
   disallows `/api/` and `/_next/`, and links to the sitemap.

---

### User Story 7 - Documentation and SDD Artifacts (Priority: P7)

All project documentation must accurately reflect the portfolio-only scope, the SDD
methodology, and the current state of the codebase. This includes: a root README.md for
developers, an updated CLAUDE.md for AI assistants, the project constitution, and the
replacement of the old docs/ folder content (TODO.md, project-plan.md, rules-ia.md) with
SDD-aligned artifacts managed by SpecKit.

**Why this priority**: Documentation is the foundation of SDD. All other specs, plans, and
tasks are built on the assumptions documented here.

**Independent Test**: A new contributor can clone the repo, read the README, understand the
project scope, set up the dev environment, and start working — without asking questions.

**Acceptance Scenarios**:

1. **Given** no README exists, **When** documentation is complete, **Then** a root README.md
   covers: project description (portfolio, not commerce), prerequisites, setup instructions,
   directory structure, available commands, i18n info, and future roadmap.
2. **Given** CLAUDE.md has incomplete information, **When** updated, **Then** it describes:
   portfolio-only scope, per-page rendering strategies (SSG/SSR/ISR), BFF data mocking
   approach, SEO patterns, existing pages and routes, and component inventory — with zero
   shop references.
3. **Given** `docs/TODO.md` and `docs/project-plan.md` are outdated, **When** SDD conversion
   is done, **Then** these files are either archived or removed, replaced by SpecKit
   artifacts (specs, plans, tasks) under `specs/`.
4. **Given** the project constitution exists, **When** reviewed after this spec, **Then** it
   accurately reflects the portfolio-only principles without shop or commerce references.

---

### Edge Cases

- What happens when a visitor accesses a URL with a filter that matches no artwork?
  The gallery MUST display a localized "no results" message with a suggestion to clear filters.
- What happens when a visitor accesses a non-existent artwork slug?
  The system MUST display a localized 404 page, not a generic error.
- What happens when mocked data is empty (zero artworks)?
  The home page MUST gracefully handle empty featured works; the gallery MUST show an empty
  state — no broken layouts or JavaScript errors.
- What happens when a visitor accesses the site without a locale prefix (e.g., `/gallery`)?
  The middleware MUST redirect to the default locale (`/es/gallery`).
- What happens when the contact form is submitted with an invalid email?
  The form MUST show inline validation errors without submitting.
- What happens when an artwork has no additional images (only one)?
  The detail page MUST hide the thumbnail gallery and show only the single image.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The portfolio MUST have an artwork detail page showing: full-size image with zoom,
  title, description, technique, category, dimensions, year, location, dominant colors,
  thumbnail image gallery, related artworks, share buttons, and artwork-specific metadata.
- **FR-002**: The top 20 most popular artworks MUST be pre-rendered at build time; remaining
  artworks MUST be rendered on first request and cached for subsequent visits.
- **FR-003**: All shop-related code MUST be removed: components, routes, navigation links,
  i18n keys, type definitions, services, data files, and documentation references.
- **FR-004**: Navigation MUST contain only: Home, Gallery, About, Contact (localized in
  Spanish and English).
- **FR-005**: The portfolio MUST have an About page (SSG) with artist biography, trajectory,
  philosophy, profile image, and social media links.
- **FR-006**: The portfolio MUST have a Contact page (SSG) with a validated form (name, email,
  subject, message) and social media links.
- **FR-007**: The site MUST have custom 404 and error pages that maintain the graffiti theme,
  display in the active locale, and provide navigation back to useful pages.
- **FR-008**: The portfolio MUST expose an internal API layer (route handlers) for: artworks
  list with filters, single artwork by slug, and contact form submission.
- **FR-009**: The API layer MUST use a data contract identical to what a future backend will
  provide, so switching from mocked data to real endpoints requires no UI or route handler
  changes.
- **FR-010**: Contact form submissions MUST be validated server-side with appropriate error
  responses for invalid input.
- **FR-011**: All images MUST use optimized formats (AVIF/WebP), blur placeholders, descriptive
  alt text, and appropriate loading strategies (priority for LCP, lazy for below-fold).
- **FR-012**: Every page MUST include: localized meta title, description, Open Graph tags,
  Twitter Card tags, canonical URL, and alternate language links.
- **FR-013**: The home page MUST include JSON-LD structured data (WebSite + Person schema).
  Artwork detail pages MUST include VisualArtwork structured data.
- **FR-014**: The site MUST generate a dynamic sitemap with all pages in both locales and
  a robots.txt that disallows `/api/` and `/_next/`.
- **FR-015**: All user-visible text MUST be sourced from i18n message files (Spanish default,
  English supported).
- **FR-016**: The site MUST be fully responsive across mobile (375px), tablet (768px), and
  desktop (1280px+).
- **FR-017**: Project documentation MUST include: root README.md, accurate CLAUDE.md, updated
  constitution, and SDD-aligned artifacts replacing old docs/ content.

### Key Entities

- **Artwork**: A piece created by the artist. Attributes: id, slug, title, description,
  category (mural, street, canvas, digital, commission, exhibition), technique (spray,
  stencil, marker, acrylic, mixed, digital), images (main + gallery), location (city,
  country, optional coordinates), optional dimensions, year, dominant colors, orientation,
  featured flag, view/like counts, timestamps.
- **Artist Profile**: The portfolio owner's information. Attributes: name, bio, artistic
  trajectory, philosophy, social media links, profile image. Used in About page and
  structured data.
- **Gallery Filter**: Criteria for narrowing artworks. Attributes: category, technique,
  city, orientation, featured, year, search term.
- **Contact Submission**: A message from a visitor. Attributes: name, email, subject,
  message, timestamp.

## Assumptions

- The Contact page uses a form that submits to a route handler; actual email delivery
  is out of MVP scope (the handler will log the submission and return success).
- Artist profile data will be mocked in a static JSON file, same as artworks.
- The "share" functionality uses the Web Share API where available, with fallback buttons
  for specific platforms.
- CSS animations are preferred over react-magic-motion for simple transitions; react-magic-motion
  is used only where layout animations add clear UX value.
- Accessibility will target WCAG 2.1 AA compliance as a minimum.
- The old `docs/TODO.md`, `docs/project-plan.md`, and `docs/rules-ia.md` will be archived
  or removed — they are replaced by SpecKit artifacts and CLAUDE.md.

## Future Vision *(out of MVP scope — documented for architectural alignment)*

1. **Go Backend**: A backend service will replace the mocked data layer. The BFF route
   handlers will proxy to real Go API endpoints. No UI changes expected if the data
   contract is preserved.
2. **Inline Admin**: Authenticated admin users will see edit controls directly on portfolio
   pages — no separate `/admin` route. Capabilities:
   - Change hero section images
   - Add/remove/edit artworks in the gallery
   - Modify featured works selection
   - Update artist profile information
   This requires authentication and role-based UI rendering.
3. **Enhanced Features** (from original TODO.md extras): Likes/favorites system, blog
   section, Instagram API integration, video gallery support.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Lighthouse audit scores above 90 for Performance, Accessibility, Best Practices,
  and above 95 for SEO on home, gallery, and artwork detail pages.
- **SC-002**: Core Web Vitals pass: LCP < 2.5s, CLS < 0.1, INP < 200ms on all page types.
- **SC-003**: Zero shop/commerce-related references remain in application code, i18n files,
  documentation, and project artifacts after cleanup.
- **SC-004**: 100% of user-visible strings are localized — the site is fully functional in
  both Spanish and English.
- **SC-005**: A new contributor can set up and run the project within 5 minutes using only
  the README.
- **SC-006**: Gallery filtering produces correct results for every filter type individually
  and for at least 3 multi-filter combinations.
- **SC-007**: All pages render correctly on mobile (375px), tablet (768px), and desktop
  (1280px+) without horizontal scroll or overlapping elements.
- **SC-008**: The mocked data layer and API route handlers use the same contract that a future
  Go backend will fulfill — swapping the data source requires no component or route handler
  changes.
- **SC-009**: The contact form validates all fields client-side and server-side; invalid
  submissions are rejected with field-level error messages.
- **SC-010**: The dynamic sitemap contains all pages in both locales. Google Rich Results Test
  validates structured data on home and artwork detail pages.
