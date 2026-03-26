# Implementation Plan: Home Page Refactor

**Branch**: `005-home-refactor` | **Date**: 2026-03-24 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/005-home-refactor/spec.md`

## Summary

Refactorizar la pagina del home para implementar todas las secciones especificadas en el PRD con animaciones profesionales (GSAP, Framer Motion, Lenis), el estilo de marca definido (dark mode #121212, tipografia sans-serif bold/rounded, formas organicas), y SEO optimizado. La pagina actual solo tiene Hero, FeaturedWorks y AboutPreview basicos - el objetivo es una experiencia inmersiva al nivel de okudasanmiguel.com.

## Technical Context

**Language/Version**: TypeScript (Next.js 16 + React 19, strict mode)  
**Primary Dependencies**: GSAP (ScrollTrigger, Timeline), Framer Motion, Lenis, Tailwind CSS v4, next-intl, shadcn/ui  
**Storage**: N/A (mocked data via BFF pattern)  
**Testing**: ESLint (`pnpm lint`), TypeScript check (`pnpm type-check`), Prettier format (`pnpm format`)  
**Target Platform**: Web (mobile-first responsive, 320px+ to desktop)  
**Performance Goals**: Lighthouse Performance >90, dark mode #121212  
**Constraints**: Must follow Constitution principles (i18n, BFF pattern, component-first organization)  
**Scale/Scope**: Single page home with 9 sections (Hero, FeaturedProjects, Statistics, AboutPreview, MapPreview, Collaborations, Collectives, Footer, WhatsApp Button)

## Constitution Check

| Principle                              | Status | Notes                                                        |
| -------------------------------------- | ------ | ------------------------------------------------------------ |
| I. Next.js App Router First            | PASS   | Home is `force-static` SSG under `src/app/[locale]/page.tsx` |
| II. i18n Non-Negotiable                | PASS   | All strings from `messages/es.json` and `messages/en.json`   |
| III. TypeScript Strict Mode            | PASS   | No `any`, proper types throughout                            |
| IV. Component-First, Feature-Organized | PASS   | Components under `src/components/home/`                      |
| V. Simplicity & YAGNI                  | PASS   | Reusing existing artowrk data, no new abstractions           |
| VI. BFF Data Contract                  | PASS   | Using `src/lib/data/artworks.json` via service pattern       |

**GATE: All principles pass. Proceeding to Phase 0.**

## Phase 0: Research

No se requieren investigaciones adicionales. El stack tecnologico y restricciones estan definidas en la Constitucion. Los unknowns del PRD ya fueron interpretados:

- Video fallback: usar `onError` handler para mostrar imagen estatica
- prefers-reduced-motion: usar `useReducedMotion()` de Framer Motion
- Mobile GSAP: usar `ScrollTrigger.matchMedia()` para simplificar en moviles

## Project Structure

### Documentation (this feature)

```text
specs/005-home-refactor/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Not needed (Phase 0 resolved)
├── data-model.md        # Not applicable (no new entities)
├── quickstart.md        # Not applicable
├── contracts/           # Not applicable
└── checklists/
    └── requirements.md  # Specification quality checklist
```

### Source Code (repository root)

```text
src/
├── app/
│   └── [locale]/
│       └── page.tsx                    # Home page (MODIFY - add new sections)
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx             # MODIFY - video background, parallax, kinetic typography
│   │   ├── FeaturedProjects.tsx        # MODIFY - asymmetric layout, hover effects
│   │   ├── StatisticsSection.tsx       # NEW - animated counters
│   │   ├── AboutPreview.tsx            # MODIFY - floating mini-gallery
│   │   ├── MapPreview.tsx              # NEW - map teaser with pins
│   │   ├── CollaborationsSection.tsx  # NEW - logo bar grayscale
│   │   ├── CollectivesSection.tsx      # NEW - collective logos with links
│   │   ├── WhatsAppButton.tsx          # NEW - floating persistent button
│   │   ├── CustomCursor.tsx            # NEW - cursor that changes on hover
│   │   └── index.ts                    # MODIFY - export new components
│   ├── layout/
│   │   └── Footer.tsx                  # MODIFY - add collectives section
│   └── ui/
│       └── Button.tsx                  # Already exists
├── i18n/
│   └── messages/
│       ├── es.json                     # MODIFY - add new translation keys
│       └── en.json                     # MODIFY - add new translation keys
└── lib/
    ├── data/
    │   └── artworks.json               # READONLY - featured artworks source
    └── services/
        └── artworkService.ts           # READONLY - BFF pattern service
```

**Structure Decision**: Los nuevos componentes viven en `src/components/home/` siguiendo el principio de organizacion por feature. Footer se modifica in-place para agregar la seccion de colectivos.

## Phase 1: Design & Contracts

No se requieren nuevos modelos de datos o contratos. La estructura de datos existente (`Artwork`, `Artist`) cubre las necesidades del home page.

### Datos Existentes Utilizados

| Entity    | Source                       | Usage                                          |
| --------- | ---------------------------- | ---------------------------------------------- |
| Artwork[] | `src/lib/data/artworks.json` | Featured projects, statistics                  |
| Artist    | `src/lib/data/artist.json`   | Bio, social links (ACTUALIZAR para colectivos) |

### API Contracts (Existentes)

- `GET /api/artworks` - Lista de obras con filtros (no se modifica)
- Datos de artistas - usar `artist.json` directamente

## Phase 2: Planning

### Task Groups

#### Group 1: Hero Section Enhancement (P1)

- Modificar `HeroSection.tsx` para agregar:
  - Video background con fallback a imagen estatica
  - Animacion GSAP Timeline de entrada
  - Efecto parallax profundo al scroll
  - Kinetic typography con "BLITO" oversized
  - Tagline "Arte callejero · Colombia"
  - 2 CTAs: "Ver portafolio" → /projects, "Cotizar trabajo" → /contact

#### Group 2: Featured Projects Upgrade (P1)

- Modificar `FeaturedProjects.tsx` para agregar:
  - Layout asimetrico con overlapping (CSS Grid o positioning)
  - Hover effects con escala suave + cursor personalizado
  - 4-6 proyectos curados
  - CTA "Ver todos los proyectos"

#### Group 3: New Sections - Statistics, Map Preview, Collaborations (P2)

- Crear `StatisticsSection.tsx`:
  - Contadores animados: +10 anos, +50 murales, X ciudades, X m²
  - Animacion de revelacion al scroll (ScrollTrigger)
- Crear `MapPreview.tsx`:
  - Preview del mapa con 3-4 pins
  - Estadistica de departamentos
  - CTA "Ver todas las obras en el mapa" → /map
- Crear `CollaborationsSection.tsx`:
  - Logo bar en escala de grises
  - Texto "Han confiado en mi trabajo"
  - Marquee horizontal o grid estatico

#### Group 4: New Sections - About Preview Update, Collectives (P2)

- Modificar `AboutPreview.tsx` para agregar:
  - Mini-galeria flotante (inspiracion retna.com)
  - Fondo artistico oscuro
- Crear `CollectivesSection.tsx`:
  - Logos de @ilegales.col, @saborlatinocrewoficial, @saborlatinocallejero
  - Links funcionales a redes sociales

#### Group 5: WhatsApp Button + Custom Cursor (P1)

- Crear `WhatsAppButton.tsx`:
  - Boton flotante persistente
  - Numero: +57 312 357 4867
  - Mensaje pre-cargado contextual
- Crear `CustomCursor.tsx`:
  - Cursor personalizado que cambia forma/tamano/color
  - Elementos interactivos: imagenes, botones, links, mapa
  - Implementado con Framer Motion

#### Group 6: i18n Updates (P1)

- Agregar claves en `es.json` y `en.json`:
  - home.hero.\* (tagline, ctas)
  - home.statistics.\* (labels, values)
  - home.mapPreview.\* (title, cta)
  - home.collaborations.\* (title, logos)
  - home.collectives.\* (title, links)
  - home.whatsapp.\* (tooltip)
  - Actualizar home.about.\* (bio correcta de Blito)
  - Actualizar artist.json con datos correctos de colectivos

#### Group 7: Footer Enhancement (P3)

- Modificar `Footer.tsx` para agregar:
  - Seccion de colectivos con logos
  - Link a ilegales.co

#### Group 8: SEO & Performance (P1)

- Verificar metadata OG para home
- Agregar JSON-LD para Person + VisualArtwork
- Optimizar imagenes con next/image
- Lazy load de secciones debajo del fold

### Implementation Order

1. Actualizar i18n (es.json, en.json, artist.json)
2. HeroSection enhancement
3. FeaturedProjects upgrade
4. StatisticsSection (NEW)
5. AboutPreview update
6. MapPreview (NEW)
7. CollaborationsSection (NEW)
8. CollectivesSection (NEW)
9. WhatsAppButton (NEW)
10. CustomCursor (NEW)
11. Footer enhancement
12. Update page.tsx to include all sections
13. Lint + TypeCheck + Format
14. Lighthouse validation

### Complexity Tracking

No hay violaciones de la Constitucion. La complejidad es apropiada para el alcance del feature.

| Aspecto                          | Justificacion                                                   |
| -------------------------------- | --------------------------------------------------------------- |
| 9 componentes nuevos/modificados | Necesario para cubrir todas las secciones del PRD               |
| GSAP + Framer Motion + Lenis     | PRD especifica estas tecnologias para animaciones profesionales |
| Cursor personalizado             | Feature diferenciador especificado en PRD                       |

## Quickstart

```bash
# Development
pnpm dev

# Validate
pnpm lint
pnpm type-check
pnpm format

# Build
pnpm build
```
