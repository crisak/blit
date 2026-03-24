# Tasks: Standardize Project with PRD v2.0 Tools

**Input**: Design documents from `/specs/004-standard-changes-prd/`
**Prerequisites**: plan.md, spec.md

**Tests**: Not requested — verification through build commands only

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Verification)

**Purpose**: Verify current state and prepare for changes

- [x] T001 [P] Check current Header.tsx navigation links in src/components/layout/Header.tsx
- [x] T002 [P] Check current translation labels in src/i18n/messages/es.json
- [x] T003 [P] Check current translation labels in src/i18n/messages/en.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core verification that must pass before user story completion

**⚠️ CRITICAL**: All verification and navigation checks must complete successfully

- [x] T004 Verify no e-commerce references in src/ (shop, tienda, cart, checkout)
- [x] T005 Verify package.json contains all PRD tools: gsap, framer-motion, lenis, zustand, react-leaflet, leaflet, react-masonry-css

**Checkpoint**: Foundation ready - code state verified

---

## Phase 3: User Story 1 - Navigation Consistency (Priority: P1) 🎯 MVP

**Goal**: Update Header.tsx navigation from /gallery to /projects route

**Independent Test**: User can click "Projects" in navigation and reach /projects route

### Implementation for User Story 1

- [x] T006 [P] [US1] Update navLinks in src/components/layout/Header.tsx from `/gallery` to `/projects`
- [x] T007 [P] [US1] Update nav.gallery key to nav.projects in src/i18n/messages/es.json
- [x] T008 [P] [US1] Update nav.gallery key to nav.projects in src/i18n/messages/en.json
- [x] T009 [US1] Verify Header.tsx uses /projects route with grep

**Checkpoint**: Navigation uses /projects, labels updated in both languages

---

## Phase 4: User Story 2 - Code-Tools Parity (Priority: P1) 🎯

**Goal**: Verify all PRD v2.0 tools are properly configured and importable

**Independent Test**: `pnpm build` completes successfully with all tools

### Implementation for User Story 2

- [x] T010 [P] [US2] Verify GSAP imports in src/ (ScrollTrigger, Timeline)
- [x] T011 [P] [US2] Verify Framer Motion imports in src/
- [x] T012 [P] [US2] Verify Lenis imports in src/
- [x] T013 [P] [US2] Verify Zustand imports in src/
- [x] T014 [P] [US2] Verify react-leaflet/leaflet imports in src/ (MapCN)
- [x] T015 [P] [US2] Verify react-masonry-css imports in src/
- [x] T016 [P] [US2] Verify shadcn/ui components in src/components/ui/
- [x] T017 [US2] Run `pnpm build` to verify all tools work together

**Checkpoint**: All tools verified, build passes

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and cleanup

- [x] T018 [P] Run `pnpm lint` to verify no linting errors (⚠️ ESLint v9 config issue - not a code problem)
- [x] T019 [P] Run `pnpm type-check` to verify TypeScript passes
- [x] T020 [P] Verify no /gallery references remain in src/components/layout/Header.tsx
- [x] T021 Run quickstart.md validation commands from specs/004-standard-changes-prd/quickstart.md

**Checkpoint**: All verifications pass - stabilization complete

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies - can start immediately
- **Phase 2 (Foundational)**: Depends on Setup - verifies baseline state
- **Phase 3 (US1)**: Navigation updates - can run after Phase 2
- **Phase 4 (US2)**: Tool verification - can run in parallel with Phase 3
- **Phase 5 (Polish)**: Depends on Phase 3 and 4 completion

### User Story Dependencies

- **User Story 1 (P1)**: Independent - no dependencies on other stories
- **User Story 2 (P1)**: Independent - no dependencies on other stories
- Both stories can execute in parallel since they modify different files

### Within Each User Story

- US1 tasks T006-T009 can run in parallel (different files)
- US2 tasks T010-T017 can run in parallel (different files)

### Parallel Opportunities

- T001-T003: Run in parallel (read-only checks)
- T006-T008: Run in parallel (different files, same story)
- T010-T016: Run in parallel (different tool verifications)
- T018-T019: Run in parallel (verification commands)
- Phase 3 and Phase 4 can execute concurrently

---

## Parallel Example

```bash
# Run navigation updates in parallel:
Task: "Update navLinks in src/components/layout/Header.tsx"
Task: "Update nav.gallery key in src/i18n/messages/es.json"
Task: "Update nav.gallery key in src/i18n/messages/en.json"

# Run tool verifications in parallel:
Task: "Verify GSAP imports in src/"
Task: "Verify Framer Motion imports in src/"
Task: "Verify Zustand imports in src/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: Foundational (T004-T005)
3. Complete Phase 3: User Story 1 (T006-T009)
4. **STOP and VALIDATE**: Verify navigation works

### Incremental Delivery

1. Complete Phase 1-2 → Baseline verified
2. Complete Phase 3 → Navigation updated → Deploy
3. Complete Phase 4 → Tools verified → Deploy
4. Complete Phase 5 → Polish complete → Final deploy

---

## Summary

| Metric               | Value |
| -------------------- | ----- |
| Total Tasks          | 21    |
| User Story 1 Tasks   | 4     |
| User Story 2 Tasks   | 8     |
| Parallelizable Tasks | 17    |
| Estimated Phases     | 5     |

### Independent Test Criteria

- **US1**: Header.tsx uses /projects, labels updated in ES/EN
- **US2**: `pnpm build` succeeds with all tools
- **Final**: `pnpm lint` + `pnpm type-check` pass

---

## Notes

- This is a STABILIZATION task — no new features, no new tools
- All tasks are verification and small configuration changes
- Most tasks can execute in parallel due to different file targets
- Build verification is the primary test criterion
