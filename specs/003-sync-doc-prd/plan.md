# Implementation Plan: Sync Documentation with PRD v2.0

**Branch**: `003-sync-doc-prd` | **Date**: 2026-03-24 | **Spec**: [spec.md](./spec.md)
**Input**: Synchronize existing project documentation with new PRD.md v2.0

## Summary

Documentation synchronization task. No technical implementation — only .md files updated to align with `docs/PRD.md` v2.0. Conflicts resolved: route naming (/gallery → /projects), e-commerce scope (shop archived), animation stack (GSAP + Framer Motion + Lenis), state management (Zustand), map feature (/map), design system (shadcn/ui), API contracts (/api/projects).

## Technical Context

This is a documentation-only task — not applicable.

**Language/Version**: N/A
**Primary Dependencies**: N/A
**Storage**: N/A
**Testing**: N/A
**Target Platform**: Documentation
**Project Type**: Documentation synchronization
**Performance Goals**: N/A
**Constraints**: Only modify .md files; PRD v2.0 is source of truth
**Scale/Scope**: 9 files modified, 1 deleted, 2 created

## Constitution Check

_This task has no Constitution violations since it only modifies documentation files and does not change any technical implementation._

## Project Structure

### Documentation (this feature)

```text
specs/003-sync-doc-prd/
├── plan.md              # This file
├── research.md          # Phase 0 output - conflicts identified
├── data-model.md        # Phase 1 output - N/A for this task
├── quickstart.md        # Phase 1 output - verification guide
└── spec.md              # Feature specification
```

### Source Code (repository root)

No source code changes. This is documentation-only.

## Complexity Tracking

No complexity violations. All changes are documentation-only.

## Deliverables

| File                                                    | Status      | Description                                                                    |
| ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------ |
| CLAUDE.md                                               | ✅ Modified | Added GSAP, Framer Motion, Lenis, Zustand, MapCN, react-masonry-css, shadcn/ui |
| README.md                                               | ✅ Modified | Routes /gallery → /projects, added /map, updated tech stack                    |
| docs/archive/project-plan.md                            | ✅ Modified | Added "ARCHIVADO - SUPERSEDIDO" notice                                         |
| docs/archive/TODO.md                                    | ✅ Modified | Added "ARCHIVADO" notice                                                       |
| docs/archive/README.md                                  | ✅ Modified | Updated to explain PRD supersession                                            |
| specs/001-update-project-docs/quickstart.md             | ✅ Modified | Updated URLs and rendering table                                               |
| specs/001-update-project-docs/contracts/api-artworks.md | ✅ Deleted  | Replaced by api-projects.md                                                    |
| specs/001-update-project-docs/contracts/api-projects.md | ✅ Created  | New contract per PRD v2.0                                                      |
| specs/001-update-project-docs/contracts/api-contact.md  | ✅ Modified | Updated to segmented form                                                      |

## Verification

After this task, run:

```bash
# Verify no shop references in current docs
rg -l "shop|tienda|cart|checkout" docs/*.md docs/**/*.md --glob '!archive/*'

# Verify archived files have warning
head -5 docs/archive/project-plan.md
head -5 docs/archive/TODO.md
```

Expected: No matches for shop terms in current docs; archive files show "ARCHIVADO" warning.

## Phase Status

- [x] Phase 0: Research (conflicts identified, user approvals obtained)
- [x] Phase 1: Design & Contracts (documentation updated)
- [x] Phase 2: Tasks (NOT REQUIRED for documentation-only task)

**Note**: Since this is a documentation synchronization task with no technical implementation, Phase 2 (task generation) is not applicable. All changes have been completed.
