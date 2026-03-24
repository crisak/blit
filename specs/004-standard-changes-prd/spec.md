# Feature Specification: Standardize Project with PRD v2.0 Tools

**Feature Branch**: `004-standard-changes-prd`
**Created**: 2026-03-24
**Status**: Draft
**Input**: Necesito estandarizar y configurar el proyecto con las nuevas herramientas que definieron en el especificacion @specs/003-sync-doc-prd/, necesito que cambies/configures/actualiza las nuevas herramientas, la navegacion etc. Necesito que dejemos estable el portafolio NO vallas agregar nada nuevo

## Context

The PRD.md v2.0 (documented in `specs/003-sync-doc-prd/spec.md`) defines new tools and technologies that must be integrated into the project. The documentation has been synchronized but the actual code configuration needs to be updated.

New tools from PRD v2.0:

- **GSAP** (ScrollTrigger, Timeline) — scroll-driven animations and parallax
- **Framer Motion** — page transitions and micro-interactions
- **Lenis** — smooth scroll (integrated with GSAP ScrollTrigger)
- **Zustand** — UI state management (filters, modals, map interactions)
- **MapCN** — React-Leaflet + Mapbox dark tiles for interactive map
- **react-masonry-css** — puzzle/masonry gallery layout
- **shadcn/ui** — custom base design system

This is a **stabilization task** — no new features, only configure and standardize existing functionality.

## User Scenarios & Testing

### User Story 1 - Navigation Consistency (Priority: P1)

Navigation links must match the routes defined in PRD to prevent 404 errors.

**Why this priority**: Inconsistent navigation breaks user experience.

**Acceptance Scenarios**:

1. **Given** a user is on any page, **When** they click "Projects" in the navigation, **Then** they are taken to `/projects` route
2. **Given** a developer reads Header.tsx, **When** they look at navLinks, **Then** they see `href: '/projects'` — not `/gallery`

---

### User Story 2 - Code-Tools Parity (Priority: P1)

Source code must reflect the tools documented in CLAUDE.md and README.md.

**Why this priority**: AI assistants use documented tools to understand the project; misalignment causes wrong code generation.

**Acceptance Scenarios**:

1. **Given** a developer runs `pnpm build`, **When** the build completes, **Then** all new tools are properly installed and configured
2. **Given** a developer reads the codebase, **When** they look at imports, **Then** they see the documented tools being used

---

## Requirements

### Functional Requirements

- **FR-001**: Header.tsx navigation MUST use `/projects` route per PRD Section 7
- **FR-002**: All navLabels in translations referencing "gallery" SHOULD be updated to "projects"
- **FR-003**: No code MUST reference shop, tienda, cart, or checkout (e-commerce out of scope per PRD Section 5)
- **FR-004**: No new features or routes MAY be added during this standardization
- **FR-005**: Build MUST pass after changes (`pnpm build`)

### Tool Configuration Requirements

- **FR-006**: GSAP ScrollTrigger and Timeline MUST be properly imported and configured
- **FR-007**: Framer Motion MUST be available for page transitions
- **FR-008**: Lenis MUST be integrated with GSAP ScrollTrigger for smooth scroll
- **FR-009**: Zustand store MUST be configured for UI state (filters, modals)
- **FR-010**: MapCN components MUST be available for future /map route
- **FR-011**: react-masonry-css MUST be configured for gallery layout
- **FR-012**: shadcn/ui components MUST be properly set up

## Success Criteria

### Measurable Outcomes

- **SC-001**: Header.tsx uses `/projects` route (not `/gallery`)
- **SC-002**: No broken navigation links exist
- **SC-003**: No references to e-commerce terms exist in src/
- **SC-004**: `pnpm build` completes successfully
- **SC-005**: All new tools are importable and configured
- **SC-006**: `pnpm lint` passes without errors
- **SC-007**: `pnpm type-check` passes without errors

## Assumptions

- The `/map` route is a future feature; MapCN components are configured but not actively used
- All new tools are already listed in CLAUDE.md Active Technologies
- No new dependencies need to be installed — only configuration standardization

## Notes

This is a STABILIZATION task — no new features, no new tools (tools are already defined in PRD), only ensure existing code is configured correctly to match documentation.
