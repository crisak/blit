# Feature Specification: Sync Documentation with PRD v2.0

**Feature Branch**: `003-sync-doc-prd`
**Created**: 2026-03-24
**Status**: Completed
**Input**: Synchronize existing project documentation with new PRD.md v2.0 — documentation changes only, no technical implementation

## Context

A new PRD.md (v2.0 MVP) was created that defines the project scope, tech stack, routes, and features. The existing documentation conflicts with the PRD in several areas:

- Route naming (/gallery → /projects)
- E-commerce scope (shop OUT of MVP)
- Animation stack (GSAP + Framer Motion + Lenis, NOT react-magic-motion)
- State management (Zustand added)
- Map feature (/map route new)
- Design system (shadcn/ui added)
- API contracts (/api/projects not /api/artworks)

## User Scenarios & Testing

### User Story 1 - Documentation Consistency (Priority: P1)

AI coding assistants and developers consult CLAUDE.md, README.md, and specs when working on the project. The documentation must accurately reflect the PRD to prevent confusion and wrong implementations.

**Why this priority**: Inconsistent docs lead to wrong code being written (e.g., implementing shop when it's out of scope).

**Independent Test**: Documentation consumers can find accurate information about routes, tech stack, and scope in CLAUDE.md and README.md.

**Acceptance Scenarios**:

1. **Given** a developer reads CLAUDE.md, **When** they look at Active Technologies, **Then** they see GSAP, Framer Motion, Lenis, Zustand, MapCN, react-masonry-css, shadcn/ui — not react-magic-motion
2. **Given** a developer reads README.md, **When** they look at Rendering Strategies, **Then** they see /projects and /map routes — not /gallery
3. **Given** a developer reads docs/archive/project-plan.md, **When** they look at the header, **Then** they see "⚠️ ARCHIVADO - SUPERSEDIDO POR PRD.md"

---

### User Story 2 - Archived Documentation Identified (Priority: P2)

Documentation that conflicts with PRD must be clearly marked as superseded so developers don't reference outdated information.

**Why this priority**: project-plan.md had complete e-commerce planning that is now obsolete per PRD.

**Independent Test**: Any developer can quickly identify which docs are current vs. archived.

**Acceptance Scenarios**:

1. **Given** a developer finds docs/archive/project-plan.md, **When** they open it, **Then** they see a clear warning that it's superseded by PRD.md v2.0
2. **Given** a developer finds docs/archive/TODO.md, **When** they open it, **Then** they see a clear warning that it's archived

## Requirements

### Functional Requirements

- **FR-001**: CLAUDE.md MUST list all technologies from PRD Section 6 (GSAP, Framer Motion, Lenis, Zustand, MapCN, react-masonry-css, shadcn/ui)
- **FR-002**: README.md rendering strategies table MUST use /projects and /map routes per PRD Section 7
- **FR-003**: docs/archive/project-plan.md MUST have a prominent "ARCHIVADO - SUPERSEDIDO POR PRD.md" notice
- **FR-004**: specs/001-update-project-docs/quickstart.md URLs MUST reflect /projects routing
- **FR-005**: API contracts MUST use /api/projects naming per PRD Section 14
- **FR-006**: No documentation file MUST reference shop, tienda, cart, checkout, or e-commerce (out of scope per PRD Section 5)

### Key Entities

- **Documentation File**: A .md file in the repository that provides guidance or specifications
- **Source of Truth**: docs/PRD.md v2.0 takes precedence over all other documentation

## Success Criteria

### Measurable Outcomes

- **SC-001**: CLAUDE.md Active Technologies section includes all 7 new technologies from PRD
- **SC-002**: README.md routing table shows /projects (not /gallery) and /map (new)
- **SC-003**: project-plan.md, TODO.md, rules-ia.md are marked as archived/superseded
- **SC-004**: api-artworks.md contract is removed and replaced with api-projects.md
- **SC-005**: api-contact.md reflects segmented form with conditional fields per PRD
- **SC-006**: No occurrences of "shop", "tienda", "cart", "product" remain in current docs (not archive)
