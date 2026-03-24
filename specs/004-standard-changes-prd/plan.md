# Implementation Plan: Standardize Project with PRD v2.0 Tools

**Branch**: `004-standard-changes-prd` | **Date**: 2026-03-24 | **Spec**: [spec.md](./spec.md)
**Input**: Standardize codebase with new tools defined in PRD v2.0 — navigation updates, tool configuration, ensure no e-commerce references

## Summary

Standardize the existing codebase to align with PRD v2.0 documentation and configured tools. This is a code-only stabilization task (no new features):

- Update Header.tsx navigation from `/gallery` to `/projects` route
- Update translation labels from "gallery" to "projects" in es.json and en.json
- Verify all new tools from PRD are properly configured: GSAP, Framer Motion, Lenis, Zustand, MapCN, react-masonry-css, shadcn/ui
- Verify no e-commerce references (shop, tienda, cart, checkout) exist in src/
- Build, lint, and type-check must pass after changes

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode) + Next.js 16.1.4, React 19.2.3 | **Primary Dependencies**: GSAP, Framer Motion, Lenis, Zustand, MapCN, react-masonry-css, shadcn/ui | **Storage**: N/A (static JSON via BFF) | **Testing**: Build verification (`pnpm build`, `pnpm lint`, `pnpm type-check`) | **Target Platform**: Web (responsive) | **Project Type**: Next.js portfolio web application | **Performance Goals**: Lighthouse >90 (maintain existing) | **Constraints**: Must not break existing functionality, must not add new features, stabilization only | **Scale/Scope**: Small — navigation and configuration updates only

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

**Principles applicable to this task**:

| Principle                       | Relevance                                                                   |
| ------------------------------- | --------------------------------------------------------------------------- |
| **I. Next.js App Router First** | SSR for Projects list — route naming change is cosmetic                     |
| **II. i18n Non-Negotiable**     | Translation labels must be updated consistently in both es.json and en.json |
| **III. TypeScript Strict Mode** | No code changes beyond route labels — existing types remain valid           |
| **IV. Feature-Organized UI**    | No structural changes to components                                         |
| **V. Simplicity & YAGNI**       | This task explicitly prohibits adding new features                          |
| **VI. BFF Data Contract**       | No changes to data layer                                                    |

**GATE STATUS**: ✅ PASS — No Constitution violations. This task enforces existing principles by aligning code with documentation and configured tools.

## Project Structure

### Documentation (this feature)

```text
specs/004-standard-changes-prd/
├── plan.md              # This file
├── spec.md              # Feature specification
├── quickstart.md        # Verification guide
└── checklists/          # Quality checklist
```

### Source Code (repository root)

No structural changes. This feature modifies only:

```text
src/
├── components/layout/Header.tsx        # Update navLinks from /gallery to /projects
├── i18n/messages/es.json              # Update nav.gallery label to nav.projects
├── i18n/messages/en.json              # Update nav.gallery label to nav.projects
```

**Tools to verify (already in package.json per PRD)**:

- `gsap` — ScrollTrigger, Timeline for scroll animations
- `framer-motion` — page transitions and micro-interactions
- `lenis` — smooth scroll integrated with GSAP
- `zustand` — UI state (filters, modals, map)
- `react-leaflet`, `leaflet` — MapCN components
- `react-masonry-css` — masonry gallery layout
- `shadcn/ui` — custom base design system

## Complexity Tracking

> No complexity violations. All changes are documentation alignment and configuration verification — no new abstractions, dependencies, or patterns introduced.

## Phase Status

- [x] Phase 0: Research (NOT REQUIRED — no technical unknowns, task is straightforward code synchronization)
- [x] Phase 1: Design & Contracts (NOT REQUIRED — no data model or contract changes)
- [ ] Phase 2: Tasks (simple enough to execute directly)

## Deliverables

| File                             | Status  | Description                                         |
| -------------------------------- | ------- | --------------------------------------------------- |
| src/components/layout/Header.tsx | Pending | Change navLinks href from `/gallery` to `/projects` |
| src/i18n/messages/es.json        | Pending | Change `nav.gallery` key to `nav.projects`          |
| src/i18n/messages/en.json        | Pending | Change `nav.gallery` key to `nav.projects`          |
| Tool verification                | Pending | Confirm all PRD tools are configured                |

## Verification

After changes, run:

```bash
# Verify Header.tsx uses /projects
rg "href.*'/projects'" src/components/layout/Header.tsx

# Verify no /gallery references in Header
rg "'/gallery'" src/components/layout/Header.tsx || echo "Clean - no /gallery references"

# Verify no e-commerce references
rg -i "shop|tienda|cart|checkout" src/ --glob '!*.md' || echo "Clean - no e-commerce references"

# Verify tool configurations (examples)
rg "from 'gsap'" src/ --glob '*.ts' --glob '*.tsx' | head -5
rg "from 'framer-motion'" src/ --glob '*.ts' --glob '*.tsx' | head -5
rg "from 'zustand'" src/ --glob '*.ts' --glob '*.tsx' | head -5

# Full verification
pnpm build && pnpm lint && pnpm type-check
```

Expected: Header.tsx uses `/projects`, no `/gallery` or e-commerce terms in src/, all tools verified, build/lint/type-check pass.

## Notes

- This is a STABILIZATION task — no new features, no new tools, no new functionality
- Tools are already defined in PRD and documented in CLAUDE.md
- Only ensure existing code matches documented configuration
