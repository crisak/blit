# Research: Documentation Sync with PRD v2.0

## Task Summary

Synchronize existing project documentation with `docs/PRD.md` v2.0. This is a documentation-only task — no code implementation changes.

## Conflicts Identified

### 1. Route Structure

| Current Doc     | PRD              | Action                |
| --------------- | ---------------- | --------------------- |
| /gallery        | /projects        | Update all references |
| (no /map)       | /map             | Add to routing tables |
| /gallery/[slug] | /projects/[slug] | Update references     |

### 2. E-commerce Scope

| Current Doc                                  | PRD                         | Action                  |
| -------------------------------------------- | --------------------------- | ----------------------- |
| project-plan.md has full shop implementation | PRD says "No es e-commerce" | Archive project-plan.md |

### 3. Animation Stack

| Current Doc        | PRD                          | Action                         |
| ------------------ | ---------------------------- | ------------------------------ |
| react-magic-motion | GSAP + Framer Motion + Lenis | Update CLAUDE.md and README.md |

### 4. State Management

| Current Doc   | PRD                              | Action                     |
| ------------- | -------------------------------- | -------------------------- |
| Not mentioned | Zustand for filters, modals, map | Add to Active Technologies |

### 5. Design System

| Current Doc       | PRD                | Action                                 |
| ----------------- | ------------------ | -------------------------------------- |
| Tailwind CSS only | shadcn/ui (custom) | Add to Styling and Active Technologies |

### 6. Map Feature

| Current Doc              | PRD                            | Action                           |
| ------------------------ | ------------------------------ | -------------------------------- |
| /map route doesn't exist | MapCN (React-Leaflet + Mapbox) | Add map/ directory to components |

### 7. API Contracts

| Current              | PRD             | Action                |
| -------------------- | --------------- | --------------------- |
| /api/artworks        | /api/projects   | Replace contract file |
| (no /api/map/points) | /api/map/points | Create new contract   |

## Decisions Made

### Decision: Archive E-commerce Documentation

**Chosen**: Move all shop/e-commerce related docs to docs/archive/
**Rationale**: PRD explicitly states e-commerce is out of scope. Archiving preserves history while indicating obsolescence.
**Alternatives considered**: Delete entirely (rejected - history valuable), keep in place (rejected - causes confusion)

### Decision: GSAP + Framer Motion Stack

**Chosen**: Use GSAP for complex scroll animations, Framer Motion for micro-interactions
**Rationale**: PRD specifies both; GSAP excels at scroll-linked animations, Framer Motion is lighter for page transitions
**Alternatives considered**: react-magic-motion only (rejected - PRD doesn't mention it), GSAP only (rejected - PRD specifies both)

### Decision: Route Rename /gallery → /projects

**Chosen**: Rename all gallery references to projects
**Rationale**: PRD architecture uses /projects for the gallery. Consistency between docs and implementation prevents confusion.
**Alternatives considered**: Keep /gallery (rejected - PRD explicitly uses /projects)

## User Approvals Received

1. **Animations Stack**: "PRD (GSAP + Framer Motion)" — GSAP + Framer Motion prevail over react-magic-motion
2. **E-commerce Scope**: "Archivar docs de shop" — shop documentation archived, not deleted
3. **Route Naming**: "Cambiar a /projects" — all routes updated to /projects
4. **Zustand**: "Agregar Zustand al stack" — Zustand added to documentation
5. **shadcn/ui**: "Agregar shadcn/ui (Recommended)" — shadcn/ui added as design system

## Files Modified

| File                                                    | Change                                                                                          |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| CLAUDE.md                                               | Added: GSAP, Framer Motion, Lenis, Zustand, MapCN, react-masonry-css, shadcn/ui; updated routes |
| README.md                                               | Routes /gallery → /projects; added /map; added tech stack items; removed shop references        |
| docs/archive/project-plan.md                            | Added "ARCHIVADO - SUPERSEDIDO" header                                                          |
| docs/archive/TODO.md                                    | Added "ARCHIVADO" header                                                                        |
| docs/archive/README.md                                  | Updated to explain why docs are archived                                                        |
| specs/001-update-project-docs/quickstart.md             | Updated URLs and rendering table                                                                |
| specs/001-update-project-docs/contracts/api-artworks.md | Deleted                                                                                         |
| specs/001-update-project-docs/contracts/api-projects.md | Created (new contract per PRD)                                                                  |
| specs/001-update-project-docs/contracts/api-contact.md  | Updated to segmented form                                                                       |
