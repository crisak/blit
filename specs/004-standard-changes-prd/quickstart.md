# Quickstart: Standardize Project with PRD v2.0 Tools

## Overview

This feature standardizes existing code to match PRD v2.0 documentation. No new functionality is added.

## Changes Required

### 1. Update Header.tsx Navigation

**File**: `src/components/layout/Header.tsx`

Change navLinks from `/gallery` to `/projects`:

```typescript
const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/projects', labelKey: 'projects' }, // was '/gallery'
  { href: '/about', labelKey: 'about' },
  { href: '/contact', labelKey: 'contact' },
] as const
```

### 2. Update Translation Labels

**Files**: `src/i18n/messages/es.json`, `src/i18n/messages/en.json`

Rename the nav key from `gallery` to `projects` and update the label text.

In `es.json`:

```json
{
  "nav": {
    "home": "Inicio",
    "projects": "Proyectos",
    "about": "Sobre Mí",
    "contact": "Contacto"
  }
}
```

In `en.json`:

```json
{
  "nav": {
    "home": "Home",
    "projects": "Projects",
    "about": "About",
    "contact": "Contact"
  }
}
```

### 3. Tool Verification

Verify all PRD v2.0 tools are properly configured:

```bash
# GSAP - scroll animations
rg "from 'gsap'" src/ --glob '*.ts' --glob '*.tsx'

# Framer Motion - page transitions
rg "from 'framer-motion'" src/ --glob '*.ts' --glob '*.tsx'

# Lenis - smooth scroll
rg "from 'lenis'" src/ --glob '*.ts' --glob '*.tsx'

# Zustand - state management
rg "from 'zustand'" src/ --glob '*.ts' --glob '*.tsx'

# MapCN - leaflet components
rg "from 'react-leaflet'" src/ --glob '*.ts' --glob '*.tsx'

# react-masonry-css
rg "from 'react-masonry-css'" src/ --glob '*.ts' --glob '*.tsx'
```

## Verification Steps

After making changes:

```bash
# 1. Verify Header.tsx uses /projects
rg "href.*'/projects'" src/components/layout/Header.tsx

# 2. Verify no /gallery references remain
rg "'/gallery'" src/components/layout/Header.tsx || echo "Clean"

# 3. Verify no e-commerce terms
rg -i "shop|tienda|cart|checkout" src/ --glob '!*.md' || echo "Clean"

# 4. Run full build verification
pnpm build && pnpm lint && pnpm type-check
```

Expected: All verifications pass, build succeeds.

## Files Modified

| File                               | Change                                   |
| ---------------------------------- | ---------------------------------------- |
| `src/components/layout/Header.tsx` | `href: '/gallery'` → `href: '/projects'` |
| `src/i18n/messages/es.json`        | `gallery` → `projects` (key and label)   |
| `src/i18n/messages/en.json`        | `gallery` → `projects` (key and label)   |

## Rollback

If issues occur:

```bash
git checkout src/components/layout/Header.tsx src/i18n/messages/es.json src/i18n/messages/en.json
```

## PRD v2.0 Tools Reference

| Tool                           | Purpose                                 | Status   |
| ------------------------------ | --------------------------------------- | -------- |
| GSAP (ScrollTrigger, Timeline) | Scroll-driven animations and parallax   | Verified |
| Framer Motion                  | Page transitions and micro-interactions | Verified |
| Lenis                          | Smooth scroll (integrated with GSAP)    | Verified |
| Zustand                        | UI state (filters, modals, map)         | Verified |
| MapCN                          | Interactive artist footprint map        | Verified |
| react-masonry-css              | Puzzle/masonry gallery layout           | Verified |
| shadcn/ui                      | Custom base design system               | Verified |
