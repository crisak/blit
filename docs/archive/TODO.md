# TODO - Portafolio Web Grafitero con Next.js 16

> **⚠️ ARCHIVADO - SUPERSEDIDO POR PRD.md**
> Este documento ha sido reemplazado por `docs/PRD.md` (v2.0 MVP).
> El PRD tiene prioridad sobre este documento. No utilizar como referencia.
> Fecha de archivado: Marzo 2026

> **Objetivo:** ~~Dominar Next.js 16+ implementando todas sus features en un proyecto real~~
> **Progreso Total:** 4/14 fases completadas (29%) — fases de shop e-commerce removidas per PRD

---

## 📊 Resumen de Progreso por Fase

- [x] **Fase 1:** Setup Inicial (9/9 tareas) ✅ **COMPLETADA**
- [x] **Fase 2:** Layout y Navegación (9/9 tareas) ✅ **COMPLETADA**
- [x] **Fase 3:** Home Page SSG (9/9 tareas) ✅ **COMPLETADA**
- [x] **Fase 4:** Galería Principal SSR (12/12 tareas) ✅ **COMPLETADA**
- [ ] **Fase 5:** Galería Detalle ISR (0/11 tareas)
- [ ] **Fase 6:** Tienda Principal SSR (0/11 tareas)
- [ ] **Fase 7:** Tienda Detalle & Carrito (0/12 tareas)
- [ ] **Fase 8:** Páginas Secundarias SSG (0/5 tareas)
- [ ] **Fase 9:** API Routes (0/9 tareas)
- [ ] **Fase 10:** Optimización Imágenes (0/9 tareas)
- [ ] **Fase 11:** Animaciones react-magic-motion (0/10 tareas)
- [ ] **Fase 12:** SEO y Metadata (0/10 tareas)
- [ ] **Fase 13:** Testing y QA (0/11 tareas)
- [ ] **Fase 14:** Documentación (0/6 tareas)

---

## 🚀 FASE 1: Setup Inicial

**Duración:** 3 días | **Prioridad:** CRÍTICA | **Estado:** ✅ **COMPLETADA**

### Tareas Principales

- [x] **1.1** Inicializar proyecto Next.js 16+

  ```bash
  npm create next-app@latest . --typescript --tailwind --app --src-dir
  ```

  - ✅ Versión Next.js 16.1.4 instalada
  - ✅ React 19.2.3 instalado
  - ✅ Estructura con `src/app` directory confirmada
  - 📝 **Nota:** Usado npm en lugar de pnpm por restricciones de permisos del entorno VM

- [x] **1.2** Configurar TypeScript en modo strict
  - ✅ `tsconfig.json`: `"strict": true`
  - ✅ `"noUncheckedIndexedAccess": true` añadido
  - ✅ Path alias: `"@/*": ["./src/*"]` configurado
  - ✅ Compilación verificada sin errores

- [x] **1.3** Instalar dependencias principales

  ```bash
  npm install next-intl react-magic-motion clsx tailwind-merge
  ```

  - ✅ next-intl@4.7.0 instalado
  - ✅ react-magic-motion instalado
  - ✅ clsx@2.1.1 y tailwind-merge@3.4.0 instalados

- [x] **1.4** Instalar dependencias de desarrollo

  ```bash
  npm install -D eslint prettier eslint-config-prettier husky lint-staged @types/node
  ```

  - ✅ ESLint configurado con Next.js preset
  - ✅ `.prettierrc` creado con configuración
  - ✅ Tailwind CSS v4 (4.1.18) instalado

- [x] **1.5** Configurar next-intl básico
  - ✅ `i18n.ts` creado en root (required by next-intl)
  - ✅ `src/i18n/routing.ts` creado con ES/EN locales
  - ✅ `middleware.ts` creado en root
  - ✅ Carpeta `src/i18n/messages/` con `es.json` y `en.json`
  - ✅ next.config.mjs configurado con createNextIntlPlugin
  - ✅ Español configurado como idioma por defecto

- [x] **1.6** Crear estructura de carpetas completa
  - ✅ Estructura completa creada según `project-plan.md`:
    - `src/components/` (ui, layout, gallery, shop, splash, contact)
    - `src/lib/` (data, services, types, utils, validations)
    - `src/hooks/`
    - `src/i18n/`
    - `docs/`

- [x] **1.7** Configurar Git y Husky
  - ✅ Git inicializado
  - ⚠️ Husky no configurado debido a restricciones de permisos (git index.lock bloqueado)
  - ✅ `.gitignore` apropiado creado
  - 📝 **Nota:** Usuario puede configurar Husky manualmente en su entorno local

- [x] **1.8** Crear archivos de configuración base
  - ✅ `.eslintrc.json` con Next.js y Prettier integration
  - ✅ `.prettierrc` con reglas de formateo
  - ✅ `.prettierignore` creado
  - ✅ `next.config.mjs` con next-intl plugin y optimización de imágenes
  - ✅ `postcss.config.js` para Tailwind v4
  - ✅ `.npmrc` para configuración de pnpm
  - ✅ `src/lib/utils/cn.ts` (clsx + tailwind-merge utility)

- [x] **1.9** Configuración de Tailwind CSS v4
  - ✅ `globals.css` actualizado con sintaxis v4 (`@import "tailwindcss"` y `@theme`)
  - ✅ Tema graffiti dark personalizado configurado
  - ✅ Custom utility classes creados (`.text-accent-spray`, `.bg-primary`, etc.)
  - ✅ Fonts configurados (Inter para body, Montserrat para headings)
  - ✅ Page inicial usando Tailwind utilities en lugar de inline styles
  - 📄 Documentación creada en `docs/tailwind-v4-config.md`

- [x] **1.10** Verificación del proyecto
  - ✅ Proyecto verificado funcionando en localhost del usuario
  - ✅ Servidor inicia correctamente en `http://localhost:3000/es`
  - ✅ i18n funcionando (español por defecto, inglés disponible)
  - ✅ Tema graffiti aplicado correctamente
  - ⚠️ Turbopack con problemas de permisos en VM (solucionado removiendo flag)

### ✅ Criterios de Aceptación Fase 1

- [x] Proyecto inicia sin errores con `npm run dev` ✅
- [x] TypeScript compila sin errores ✅
- [x] ESLint y Prettier funcionan correctamente ✅
- [x] Estructura de carpetas creada ✅
- [x] Git inicializado (Husky pendiente para entorno local) ⚠️
- [x] next-intl configurado y funcionando ✅
- [x] Tailwind v4 con tema graffiti operativo ✅

### 📝 Notas Importantes de Fase 1

**Tecnologías Instaladas:**

- Next.js 16.1.4 (con Turbopack por defecto)
- React 19.2.3
- TypeScript 5.9.3
- Tailwind CSS 4.1.18 (versión v4 con nueva sintaxis CSS)
- next-intl 4.7.0
- react-magic-motion

**Desafíos Resueltos:**

1. **Permisos pnpm:** No se pudo habilitar corepack, pero se configuró `packageManager: "pnpm@10.28.1"` en package.json
2. **Tailwind v4:** Sintaxis completamente nueva (CSS-based config vs JS config)
3. **next-intl config missing:** Se creó `i18n.ts` en root (requerido por next-intl)
4. **Turbopack cache:** Problemas de permisos en VM, removido flag `--turbopack` del script dev

**Archivos Clave Creados:**

- `/i18n.ts` - Configuración next-intl (ROOT, no en src/)
- `/middleware.ts` - i18n routing
- `/src/i18n/routing.ts` - Definición de locales
- `/src/app/[locale]/layout.tsx` - Layout con i18n
- `/src/app/[locale]/page.tsx` - Home page
- `/src/app/globals.css` - Tailwind v4 con tema graffiti
- `/docs/tailwind-v4-config.md` - Documentación de configuración

**Pendiente para Usuario:**

- Configurar Husky en su entorno local (si lo desea)

---

## 🎨 FASE 2: Layout y Navegación

**Duración:** 4 días | **Prioridad:** ALTA | **Estado:** ✅ **COMPLETADA**

### Tareas Principales

- [x] **2.1** Configurar layout raíz con i18n
  - ✅ `src/app/[locale]/layout.tsx` actualizado con Header, Footer y metadata dinámica
  - ✅ `generateStaticParams` implementado para locales
  - ✅ Fonts (Inter, Montserrat) configurados con `next/font`
  - ✅ `generateMetadata` con Open Graph y Twitter Cards

- [x] **2.2** Crear tema Tailwind personalizado
  - ✅ `globals.css` ampliado con más variables CSS (borders, states, transitions)
  - ✅ Glow effects para componentes (`.glow-spray`, `.glow-pink`, etc.)
  - ✅ Gradientes graffiti (`.bg-gradient-graffiti`, `.text-gradient-graffiti`)
  - ✅ Utilidades de transición (`.transition-fast`, `.transition-base`, `.transition-slow`)

- [x] **2.3** Crear componentes UI base - Button
  - ✅ `src/components/ui/Button.tsx` (Client Component)
  - ✅ Variants: primary, secondary, ghost, danger
  - ✅ Sizes: sm, md, lg
  - ✅ Estados: loading con spinner, disabled
  - ✅ TypeScript strict con `forwardRef`

- [x] **2.4** Crear componentes UI base - Card, Input, Modal
  - ✅ `Card.tsx` (Server Component) con CardHeader, CardContent, CardFooter
  - ✅ `Input.tsx` (Client Component) con label, error y helperText
  - ✅ `Modal.tsx` (Client Component) con focus trap, ESC close y backdrop
  - ✅ Index de exports en `src/components/ui/index.ts`

- [x] **2.5** Implementar Header con navegación
  - ✅ `src/components/layout/Header.tsx` (Client Component)
  - ✅ Logo BLITO con efecto glow
  - ✅ Links de navegación con indicador activo
  - ✅ Mobile menu hamburger con animación
  - ✅ Sticky header con efecto backdrop-blur al scroll

- [x] **2.6** Implementar LanguageSwitcher
  - ✅ `src/components/layout/LanguageSwitcher.tsx` (Client)
  - ✅ Dropdown con flags ES/EN
  - ✅ Usa `useRouter` y `usePathname` de `@/i18n/routing`
  - ✅ Mantiene path actual al cambiar idioma con `router.replace`
  - ✅ Fix: Añadido `router.refresh()` para solucionar cache issue en desarrollo

- [x] **2.7** Crear Footer
  - ✅ `src/components/layout/Footer.tsx` (Server Component)
  - ✅ Sección de marca con descripción
  - ✅ Links útiles a páginas principales
  - ✅ Social media icons (Instagram, Twitter/X, YouTube)
  - ✅ Copyright dinámico con año actual

- [x] **2.8** Crear traducciones iniciales
  - ✅ `es.json` actualizado con metadata, nav, footer, splash, common
  - ✅ `en.json` actualizado con las mismas secciones
  - ✅ Cambio de idioma funcional

- [x] **2.9** Implementar Splash Screen
  - ✅ `src/components/splash/SplashScreen.tsx` (Client)
  - ✅ Animación CSS pura (reemplazado react-magic-motion por animaciones CSS)
  - ✅ Background con efectos de blur radial
  - ✅ Loading shimmer animado
  - ✅ Prop `duration` funcional para controlar duración total
  - ✅ Solo se muestra en Home page (no en otras páginas)
  - ✅ `HomeContent.tsx` creado para integrar splash solo en home

### ✅ Criterios de Aceptación Fase 2

- [x] Layout se renderiza correctamente en ambos idiomas ✅
- [x] Navegación funciona sin errores ✅
- [x] Cambio de idioma preserva la ruta ✅
- [x] Header responsive (mobile + desktop) ✅
- [x] Splash screen se muestra al cargar ✅

---

## 🏠 FASE 3: Home Page (SSG)

**Duración:** 3 días | **Prioridad:** ALTA | **Estado:** ✅ **COMPLETADA**

### Tareas Principales

- [x] **3.1** Crear página Home
  - ✅ `src/app/[locale]/page.tsx` actualizado
  - ✅ Configurar como SSG: `export const dynamic = 'force-static'`
  - ✅ Metadata estática implementada en layout

- [x] **3.2** Diseñar y maquetar Hero Section
  - ✅ Título impactante con diseño elegante
  - ✅ Subtítulo descriptivo
  - ✅ CTA buttons (Ver Galería, Ver Tienda)
  - ✅ Background con imagen de Unsplash y overlays

- [x] **3.3** Implementar animaciones Hero con CSS
  - ✅ Fade in del subtítulo
  - ✅ Slide up del título
  - ✅ Fade in con delay de botones
  - ✅ Animaciones CSS personalizadas creadas

- [x] **3.4** Crear sección "Featured Works"
  - ✅ Grid responsive (1 col mobile, 2 tablet, 3 desktop)
  - ✅ 6 obras destacadas del mock data
  - ✅ Cards con hover effect y transiciones
  - ✅ Link a cada obra (ruta: /[locale]/gallery/[slug])

- [x] **3.5** Crear mock inicial de artworks
  - ✅ `src/lib/data/artworks.json` con 8 obras completas
  - ✅ Estructura completa con todos los campos
  - ✅ `src/lib/types/artwork.ts` con interfaces TypeScript

- [x] **3.6** Crear componente ArtworkCard (versión simple)
  - ✅ `src/components/gallery/ArtworkCard.tsx` creado
  - ✅ Mostrar imagen, título, categoría, técnica, ubicación, año
  - ✅ Hover effect con scale y overlay
  - ✅ Badge "Featured" para obras destacadas

- [x] **3.7** Crear sección "About Preview"
  - ✅ Texto sobre el artista (traducido ES/EN)
  - ✅ Imagen de artista trabajando
  - ✅ CTA "Conocer más" con link a /about
  - ✅ Layout responsive (grid 2 columnas en desktop)

- [x] **3.8** Optimizar imágenes del Home
  - ✅ `next/image` con priority para hero background
  - ✅ Dimensiones apropiadas y sizes configurados
  - ✅ Imágenes de Unsplash optimizadas

- [x] **3.9** Testing y optimización
  - ✅ Verificar SSG: `npm build` exitoso
  - ✅ Páginas estáticas generadas (.next/server/app/es.html, en.html)
  - ✅ Build output muestra "● (SSG)" para /[locale]
  - ✅ Responsive confirmado en diseño

### ✅ Criterios de Aceptación Fase 3

- [x] Home page es 100% estática (SSG) ✅
- [x] Build exitoso sin errores ✅
- [x] Totalmente responsive ✅
- [x] Animaciones CSS suaves ✅
- [x] Links funcionan (rutas preparadas) ✅

### 📝 Notas Importantes de Fase 3

**Archivos Creados/Modificados:**

- `/src/lib/types/artwork.ts` - Interfaces TypeScript para obras
- `/src/lib/data/artworks.json` - Mock data con 8 obras completas
- `/src/components/gallery/ArtworkCard.tsx` - Componente de card de obra
- `/src/app/[locale]/page.tsx` - Configurado con SSG
- `/src/components/home/HomeContent.tsx` - Actualizado con 3 secciones
- `/src/i18n/messages/es.json` y `en.json` - Traducciones agregadas
- `/src/app/globals.css` - Animaciones CSS agregadas

**Features Implementadas:**

1. Hero Section con animaciones CSS (fade-in, slide-up)
2. Featured Works con grid responsive y ArtworkCard
3. About Preview con layout 2 columnas
4. SSG configurado con `export const dynamic = 'force-static'`
5. Mock data completo con 8 obras de arte
6. Imágenes optimizadas con next/image

**Decisiones Técnicas:**

- Usamos CSS animations en lugar de react-magic-motion para mejor performance
- Imágenes de Unsplash para mock (serán reemplazadas en producción)
- ArtworkCard como Server Component para mejor SSG
- HomeContent como Client Component por necesidad del SplashScreen

---

## 🖼️ FASE 4: Galería - Página Principal (SSR)

**Duración:** 4 días | **Prioridad:** ALTA | **Estado:** ✅ **COMPLETADA**

### Tareas Principales

- [x] **4.1** Expandir mock de artworks
  - ✅ Ampliado `artworks.json` a 35 obras completas
  - ✅ Incluye variedad completa de categorías, técnicas, colores, orientaciones
  - ✅ Datos completos para todos los filtros (ciudad, año, dimensiones)

- [x] **4.2** Crear servicios de datos
  - ✅ `src/lib/utils/delay.ts` - Función simulateLatency creada
  - ✅ `src/lib/types/artwork.ts` - Types actualizados con FilterOptions
  - ✅ `src/lib/services/artworkService.ts` implementado con funciones:
    - ✅ `getArtworks(filters?: FilterOptions): Promise<Artwork[]>`
    - ✅ `getArtworkBySlug(slug: string): Promise<Artwork | null>`
    - ✅ `getPopularArtworks(limit: number): Promise<Artwork[]>`
    - ✅ `getFeaturedArtworks(limit?: number): Promise<Artwork[]>`
    - ✅ `getRelatedArtworks(currentSlug, category, limit): Promise<Artwork[]>`
    - ✅ `getUniqueCities(): string[]` y `getUniqueYears(): number[]`

- [x] **4.3** Crear página Gallery con SSR
  - ✅ `src/app/[locale]/gallery/page.tsx` creada
  - ✅ Configurada con: `export const dynamic = 'force-dynamic'`
  - ✅ Recibe `searchParams` y construye FilterOptions
  - ✅ Llama a `getArtworks(filterOptions)` en cada request
  - ✅ Build verificado: muestra como `ƒ (Dynamic)` - SSR confirmado

- [x] **4.4** Implementar ArtworkGrid
  - ✅ `src/components/gallery/ArtworkGrid.tsx` (Server Component)
  - ✅ Grid responsive perfecto (1 col mobile, 2 tablet, 3 desktop, 4 xl)
  - ✅ Mapea artworks a ArtworkCards con animaciones stagger
  - ✅ Empty state con mensaje traducido cuando no hay resultados

- [x] **4.5** Mejorar ArtworkCard
  - ✅ Muestra: views, likes, categoría, técnica, orientación, dimensiones
  - ✅ Badges traducidos para categorías y técnicas
  - ✅ Featured badge con icono de estrella
  - ✅ Hover effects mejorados con shadow accent-pink
  - ✅ Loading="lazy" configurado en imágenes

- [x] **4.6** Crear componente Filters (Client)
  - ✅ `src/components/gallery/Filters.tsx` (Client Component)
  - ✅ Filtros implementados: Categoría, Técnica, Ciudad, Orientación, Búsqueda
  - ✅ UI con selects responsivos
  - ✅ Botón "Limpiar filtros" que aparece solo cuando hay filtros activos
  - ✅ Mobile responsive con toggle para mostrar/ocultar filtros

- [x] **4.7** Implementar hook useFilters
  - ✅ `src/hooks/useFilters.ts` creado
  - ✅ Lee searchParams actuales y los parsea
  - ✅ Función `updateFilters` que actualiza URL sin reload
  - ✅ Funciones `clearFilters` y `setFilter` implementadas
  - ✅ Usa `useRouter`, `usePathname` y `useSearchParams`

- [x] **4.8** Conectar Filters con página
  - ✅ Filters recibe currentFilters desde page.tsx
  - ✅ Al cambiar filtros, URL se actualiza automáticamente
  - ✅ SSR re-fetcha artworks con nuevos filtros en cada cambio
  - ✅ Back/Forward button del navegador funciona correctamente

- [x] **4.9** Implementar Suspense y Skeletons
  - ✅ ArtworkGrid wrapped en Suspense en page.tsx
  - ✅ `ArtworkGridSkeleton.tsx` creado con 12 placeholders
  - ✅ Skeleton con animación pulse
  - ✅ Suspense también en Filters para carga inicial

- [x] **4.10** Añadir animaciones de entrada
  - ✅ Stagger animation con CSS en ArtworkGrid
  - ✅ Cada card tiene delay incremental (50ms \* index)
  - ✅ Animación `animate-fade-in-up` aplicada
  - ✅ Transiciones suaves en hover effects

- [x] **4.11** Lazy loading de imágenes
  - ✅ `loading="lazy"` configurado en ArtworkCard
  - ✅ Imágenes solo se cargan cuando están cerca del viewport
  - ✅ Priority=false en todas las imágenes de galería

- [x] **4.12** Testing exhaustivo de filtros
  - ✅ Todos los filtros funcionan individualmente
  - ✅ Combinación de filtros funciona correctamente
  - ✅ URL updates verificados con cada cambio
  - ✅ Back button del navegador funciona
  - ✅ Build exitoso - SSR verificado como `ƒ (Dynamic)`
  - ✅ Performance con 35 obras: excelente

### ✅ Criterios de Aceptación Fase 4

- [x] Galería usa SSR ✅ (verificado en build output como `ƒ (Dynamic)`)
- [x] Filtros actualizan la galería dinámicamente ✅
- [x] URL refleja estado de filtros ✅
- [x] Streaming funciona con Suspense ✅
- [x] Performance aceptable ✅ (simulateLatency: 1.5s)
- [x] Responsive perfecto ✅

### 📝 Notas Importantes de Fase 4

**Archivos Creados:**

- `/src/lib/utils/delay.ts` - Utility para simular latencia
- `/src/lib/services/artworkService.ts` - Servicio completo con 7 funciones
- `/src/app/[locale]/gallery/page.tsx` - Página con SSR (force-dynamic)
- `/src/components/gallery/ArtworkGrid.tsx` - Grid con animaciones
- `/src/components/gallery/ArtworkGridSkeleton.tsx` - Loading state
- `/src/components/gallery/Filters.tsx` - Filtros client-side
- `/src/hooks/useFilters.ts` - Hook para gestión de filtros en URL

**Archivos Actualizados:**

- `/src/lib/data/artworks.json` - Expandido de 8 a 35 obras
- `/src/lib/types/artwork.ts` - Agregado FilterOptions
- `/src/components/gallery/ArtworkCard.tsx` - Mejorado con más info y badges
- `/src/i18n/messages/es.json` - Traducciones de galería expandidas
- `/src/i18n/messages/en.json` - Traducciones de galería expandidas

**Features Implementadas:**

1. **SSR Completo:** Página renderizada en servidor en cada request
2. **Filtros Dinámicos:** 5 tipos de filtros (categoría, técnica, ciudad, orientación, búsqueda)
3. **URL State Management:** Filtros sincronizados con URL searchParams
4. **Suspense & Streaming:** Carga progresiva con skeletons
5. **Lazy Loading:** Imágenes cargadas solo cuando son visibles
6. **Animaciones CSS:** Stagger effect en grid
7. **Responsive Design:** Mobile-first con toggle para filtros
8. **i18n:** Todas las etiquetas traducidas en ES/EN
9. **Empty States:** Mensajes cuando no hay resultados

**Decisiones Técnicas:**

- SSR elegido sobre SSG para permitir filtros dinámicos
- FilterOptions separado para type safety
- simulateLatency(1500ms) para demostrar SSR y loading states
- Animaciones CSS en lugar de react-magic-motion para mejor performance
- Client Component solo para Filters (interactividad), resto Server Components

**Ciudades Disponibles en Filtros (20):**
Madrid, Barcelona, Valencia, Málaga, Sevilla, Bilbao, Zaragoza, Granada, Alicante, Murcia, Santander, Oviedo, Córdoba, Pamplona, Vigo, Gijón, Cádiz, Tarragona, Logroño, Salamanca, León, Burgos, Valladolid, Huelva, Albacete, Castellón, Badajoz, Cáceres, Pontevedra, Ávila, Segovia, Lugo, Ourense, Guadalajara

---

## 🎨 FASE 5: Galería - Detalle de Obra (ISR)

**Duración:** 3 días | **Prioridad:** ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **5.1** Crear página detalle de obra
  - `src/app/[locale]/gallery/[slug]/page.tsx`
  - Configurar ISR: `export const revalidate = 3600` (1 hora)
  - Implementar `generateStaticParams` para top 20 obras

- [ ] **5.2** Fetch data de la obra
  - Usar `getArtworkBySlug(params.slug)` con latency
  - Handle caso: obra no encontrada (404)
  - Preparar datos para renderizado

- [ ] **5.3** Diseñar layout de detalle
  - Hero con imagen principal (grande)
  - Sidebar con info:
    - Título, descripción
    - Técnica, categoría
    - Dimensiones, año
    - Ubicación (ciudad)
    - Colores dominantes (badges)

- [ ] **5.4** Crear ImageViewer avanzado
  - `src/components/gallery/ImageViewer.tsx` (Client)
  - Zoom on click (modal fullscreen)
  - Gestos: pinch-zoom, pan
  - Close button
  - react-magic-motion animations

- [ ] **5.5** Galería de imágenes adicionales
  - Thumbnails debajo de imagen principal
  - Click para cambiar imagen principal
  - Smooth transition

- [ ] **5.6** Sección "Obras Relacionadas"
  - Filtrar obras por categoría similar
  - Mostrar 3-4 obras
  - Cards más pequeños
  - Links funcionales

- [ ] **5.7** Botón "Ver en mapa"
  - Usar coordenadas de la obra
  - Link a Google Maps (external)
  - Icono de ubicación

- [ ] **5.8** Share buttons
  - Botones: Twitter, Facebook, WhatsApp, Copy Link
  - Usar Web Share API si disponible
  - Fallback para desktop

- [ ] **5.9** Implementar metadata dinámica
  - `generateMetadata` function
  - Open Graph: título, descripción, imagen
  - Twitter Card
  - Canonical URL
  - hreflang para ES/EN

- [ ] **5.10** Testing de ISR
  - Verificar pre-render de top 20 obras en build
  - Testear revalidación (cambiar data, esperar 1h)
  - Verificar fallback para obras no pre-renderizadas

- [ ] **5.11** Optimización final
  - Lighthouse test
  - Verificar LCP con imagen hero
  - Lazy load de related artworks

### ✅ Criterios de Aceptación Fase 5

- [x] Página usa ISR correctamente
- [x] Top 20 obras pre-rendered en build
- [x] Metadata dinámica funciona
- [x] ImageViewer fluido y responsive
- [x] Share buttons funcionan
- [x] SEO score alto

---

## 🛒 FASE 6: Tienda - Página Principal (SSR)

**Duración:** 4 días | **Prioridad:** ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **6.1** Crear mock de productos
  - `src/lib/data/products.json` con 20-30 productos
  - Relacionar productos con obras (relatedArtwork)
  - Incluir: precio, stock, especificaciones

- [ ] **6.2** Crear tipos y servicios de productos
  - `src/lib/types/product.ts` - Product interface
  - `src/lib/services/productService.ts`:
    - `getProducts(filters?: ProductFilters): Promise<Product[]>`
    - `getProductById(id: string): Promise<Product | null>`
    - `getAvailableProducts(): Promise<Product[]>`

- [ ] **6.3** Crear página Shop con SSR
  - `src/app/[locale]/shop/page.tsx`
  - Configurar: `export const dynamic = 'force-dynamic'`
  - Recibir searchParams para filtros/sorting

- [ ] **6.4** Implementar ProductGrid
  - `src/components/shop/ProductGrid.tsx` (Server)
  - Grid responsive
  - Mapear productos a ProductCards
  - Empty state

- [ ] **6.5** Crear ProductCard
  - `src/components/shop/ProductCard.tsx` (Server)
  - Imagen del producto
  - Nombre, precio
  - Badge "Sold Out" si stock = 0
  - Badge "Limited Edition"
  - CTA "Ver Detalles"

- [ ] **6.6** Crear filtros de productos
  - Categoría (print, original, merch, etc.)
  - Rango de precios
  - Disponibilidad (en stock / sold out)
  - Relacionado con obra específica (opcional)

- [ ] **6.7** Implementar sorting
  - Precio: Low to High, High to Low
  - Popularidad (views/likes)
  - Más reciente
  - UI: Dropdown

- [ ] **6.8** Conectar filtros y sorting con URL
  - Actualizar searchParams
  - Re-fetch desde servidor con nuevos params

- [ ] **6.9** Suspense y skeletons
  - ProductGridSkeleton
  - Streaming de productos

- [ ] **6.10** Animaciones
  - Stagger de ProductCards
  - Smooth transitions

- [ ] **6.11** Testing
  - Filtros funcionando
  - Sorting correcto
  - Responsive
  - Performance

### ✅ Criterios de Aceptación Fase 6

- [x] Shop usa SSR
- [x] Filtros y sorting operativos
- [x] UI profesional de e-commerce
- [x] Productos relacionados con obras
- [x] Performance óptimo

---

## 🛍️ FASE 7: Tienda - Detalle y Carrito

**Duración:** 4 días | **Prioridad:** MEDIA-ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **7.1** Crear página detalle de producto
  - `src/app/[locale]/shop/[productId]/page.tsx`
  - ISR: `export const revalidate = 1800` (30 min)
  - `generateStaticParams` para productos disponibles

- [ ] **7.2** Layout de detalle de producto
  - Galería de imágenes (principal + thumbnails)
  - Info: nombre, precio, stock, descripción
  - Especificaciones técnicas (tabla)
  - Link a obra relacionada

- [ ] **7.3** Selector de variantes (si aplica)
  - Tamaño, color, con/sin marco, etc.
  - Update precio según variante
  - Check stock por variante

- [ ] **7.4** Botón "Add to Cart"
  - `src/components/shop/AddToCartButton.tsx` (Client)
  - Selector de cantidad
  - Disabled si sold out
  - Feedback visual al añadir

- [ ] **7.5** Implementar hook useCart
  - `src/hooks/useCart.ts`
  - Estado global del carrito (Context o Zustand)
  - Funciones: addItem, removeItem, updateQuantity, clearCart
  - Persistir en LocalStorage
  - Calculate total

- [ ] **7.6** Crear componente Cart Sidebar
  - `src/components/shop/Cart.tsx` (Client)
  - Slide-in desde la derecha
  - Lista de items con imagen, nombre, precio, cantidad
  - Botones +/- para cantidad
  - Botón Remove
  - Total price
  - CTA "Checkout"

- [ ] **7.7** Integrar Cart en Header
  - Icono de carrito con badge (número de items)
  - Click abre Cart sidebar
  - react-magic-motion slide-in animation

- [ ] **7.8** Página Checkout (placeholder)
  - `src/app/[locale]/shop/checkout/page.tsx`
  - Resumen de items
  - Form: nombre, email, dirección (fake)
  - Botón "Place Order" (no payment real)
  - Success message

- [ ] **7.9** Testing de carrito
  - Add/remove items
  - Update quantities
  - Verificar persistencia (refresh page)
  - Total calculations correctos

- [ ] **7.10** Metadata dinámica de productos
  - Open Graph con imagen del producto
  - Precio en metadata (opcional)

- [ ] **7.11** Animaciones del Cart
  - Slide-in/out suave
  - Fade de items al añadir/quitar
  - Badge bounce al añadir item

- [ ] **7.12** Optimización final
  - Lighthouse
  - Responsive del Cart
  - Accessibility (keyboard navigation)

### ✅ Criterios de Aceptación Fase 7

- [x] Detalle producto con ISR
- [x] Carrito funcional con persistencia
- [x] Animaciones fluidas
- [x] LocalStorage funcionando
- [x] UI/UX profesional

---

## 📄 FASE 8: Páginas Secundarias (SSG)

**Duración:** 3 días | **Prioridad:** MEDIA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **8.1** Crear página About
  - `src/app/[locale]/about/page.tsx` (SSG)
  - `export const dynamic = 'force-static'`
  - Layout: imagen del artista + bio
  - Secciones: Trayectoria, Filosofía, Premios (si aplica)
  - Timeline visual (opcional)

- [ ] **8.2** Crear mock de datos del artista
  - `src/lib/data/artist.json`
  - Nombre, bio, foto
  - Social media links
  - Trayectoria

- [ ] **8.3** Crear página Contact
  - `src/app/[locale]/contact/page.tsx` (SSG)
  - Formulario de contacto (Client Component)
  - Campos: nombre, email, asunto, mensaje
  - Redes sociales
  - Email de contacto

- [ ] **8.4** Implementar formulario de contacto
  - `src/components/contact/ContactForm.tsx` (Client)
  - Validación con Zod o React Hook Form
  - Submit handler (mock, sin envío real por ahora)
  - Estados: idle, submitting, success, error
  - Feedback visual

- [ ] **8.5** Crear páginas de error personalizadas
  - `src/app/[locale]/not-found.tsx` (404)
  - `src/app/[locale]/error.tsx` (Error boundary)
  - Diseño acorde al tema graffiti
  - CTA para volver al home

### ✅ Criterios de Aceptación Fase 8

- [x] About y Contact son SSG
- [x] Formulario valida inputs
- [x] Páginas de error personalizadas
- [x] Todo el contenido en ES/EN

---

## 🔌 FASE 9: API Routes

**Duración:** 3 días | **Prioridad:** MEDIA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **9.1** API Route: GET /api/artworks
  - `src/app/api/artworks/route.ts`
  - Aceptar query params para filtros
  - Retornar artworks filtrados
  - Simular latencia
  - `export const dynamic = 'force-dynamic'`

- [ ] **9.2** API Route: GET /api/artworks/[id]
  - `src/app/api/artworks/[id]/route.ts`
  - Retornar artwork por ID
  - 404 si no existe

- [ ] **9.3** API Route: GET /api/products
  - `src/app/api/products/route.ts`
  - Filtros y sorting via query params

- [ ] **9.4** API Route: GET /api/products/[id]
  - `src/app/api/products/[id]/route.ts`
  - Retornar producto por ID
  - 404 si no existe

- [ ] **9.5** API Route: POST /api/contact
  - `src/app/api/contact/route.ts`
  - Recibir form data
  - Validar con Zod
  - Mock: log to console (no envío real de email)
  - Retornar 200 success

- [ ] **9.6** Implementar validación con Zod
  - `src/lib/validations/contact.ts` - Schema de contacto
  - Aplicar en API route

- [ ] **9.7** Error handling consistente
  - Try/catch en todas las routes
  - Retornar errores con formato estándar
  - Status codes apropiados (400, 404, 500)

- [ ] **9.8** Rate limiting básico (opcional)
  - Usar Vercel rate limiting o implementación simple
  - Limitar requests por IP

- [ ] **9.9** Testing de APIs
  - Postman o Thunder Client
  - Probar todos los endpoints
  - Verificar errores
  - Documentar en README o docs/

### ✅ Criterios de Aceptación Fase 9

- [x] Todas las API routes funcionando
- [x] Validación implementada
- [x] Error handling robusto
- [x] Documentación básica

---

## 🖼️ FASE 10: Optimización de Imágenes

**Duración:** 4 días | **Prioridad:** ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **10.1** Auditar todas las imágenes actuales
  - Listar todas las imágenes usadas
  - Check sizes y formatos
  - Identificar las más pesadas

- [ ] **10.2** Script para generar blur placeholders
  - `scripts/generate-placeholders.ts`
  - Usar sharp para crear placeholders blurred
  - Generar base64 data URLs
  - Guardar en JSON o carpeta separada

- [ ] **10.3** Ejecutar script de placeholders
  - Generar para todas las imágenes de gallery y shop
  - Actualizar mocks con `blurDataURL`

- [ ] **10.4** Optimizar tamaños de imágenes
  - Script para resize a dimensiones óptimas
  - Mantener aspect ratio
  - Generar múltiples tamaños si necesario

- [ ] **10.5** Convertir a formatos modernos
  - AVIF como primera opción
  - WebP como fallback
  - Verificar soporte en `next.config.mjs`

- [ ] **10.6** Actualizar componentes con optimizaciones
  - ArtworkCard: añadir `blurDataURL`
  - ProductCard: añadir `blurDataURL`
  - Hero section: `priority={true}`
  - Configurar `sizes` apropiados

- [ ] **10.7** Lazy loading para below-fold
  - Verificar `loading="lazy"` en images fuera del viewport
  - Priority solo para LCP image

- [ ] **10.8** Testing de performance
  - Lighthouse antes/después
  - Verificar LCP < 2.5s
  - Check network tab: tamaños descargados
  - Test en 3G throttling

- [ ] **10.9** Verificar cumplimiento Core Web Vitals
  - LCP: <2.5s ✅
  - CLS: <0.1 ✅
  - FID/INP: <100ms ✅

### ✅ Criterios de Aceptación Fase 10

- [x] Todas las imágenes con blur placeholder
- [x] Formatos AVIF/WebP
- [x] LCP mejorado significativamente
- [x] Lighthouse Performance >95
- [x] Core Web Vitals en verde

---

## ✨ FASE 11: Animaciones con react-magic-motion

**Duración:** 3 días | **Prioridad:** MEDIA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **11.1** Instalar react-magic-motion y plugins

  ```bash
  pnpm add react-magic-motion
  ```

  - Verificar compatibilidad con Next.js 15
  - Import en componentes Client

- [ ] **11.2** Splash Screen animation
  - Logo reveal con react-magic-motion Timeline
  - Fade in + scale effect
  - Spray paint effect (opcional)
  - Auto-hide con delay

- [ ] **11.3** Hero Section animations
  - Title: split text + stagger fade in
  - Subtitle: fade in from bottom
  - CTA buttons: scale + bounce
  - Background parallax (scroll-based)

- [ ] **11.4** Gallery Grid stagger
  - Cards aparecen con stagger (0.1s delay entre cada una)
  - Fade in + translateY
  - Smooth entrance

- [ ] **11.5** Image hover effects
  - Scale up suave en hover
  - Overlay fade in
  - Smooth transition (CSS + react-magic-motion si necesario)

- [ ] **11.6** Filters panel animations
  - Slide down/up al abrir/cerrar
  - Fade in de opciones
  - Smooth collapse

- [ ] **11.7** Cart sidebar animation
  - Slide in desde derecha
  - Overlay backdrop fade in
  - Items fade in con stagger al añadir

- [ ] **11.8** Scroll-triggered animations
  - Fade in elements al hacer scroll
  - Parallax effects en secciones
  - Usar ScrollTrigger plugin

- [ ] **11.9** Page transitions (opcional)
  - Fade out/in entre rutas
  - Requiere configuración especial en App Router

- [ ] **11.10** Performance testing
  - Verificar FPS durante animaciones
  - GPU acceleration habilitada
  - No afectar Core Web Vitals
  - Reducir motion para users con prefers-reduced-motion

### ✅ Criterios de Aceptación Fase 11

- [x] Animaciones fluidas (60fps)
- [x] No impact negativo en Lighthouse
- [x] Accesibilidad: respeta prefers-reduced-motion
- [x] Mejora la UX, no la estorba

---

## 🔍 FASE 12: SEO y Metadata

**Duración:** 4 días | **Prioridad:** ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **12.1** Metadata dinámica en todas las páginas
  - Home: metadata estática
  - Gallery list: metadata con descripción y OG
  - Artwork detail: `generateMetadata` con datos de la obra
  - Shop: metadata de productos
  - About/Contact: metadata estática

- [ ] **12.2** Open Graph completo
  - og:title, og:description
  - og:image (1200x630 ideal)
  - og:type = "website"
  - og:locale (es_ES / en_US)

- [ ] **12.3** Twitter Cards
  - twitter:card = "summary_large_image"
  - twitter:title, twitter:description
  - twitter:image

- [ ] **12.4** Implementar Structured Data (JSON-LD)
  - Artwork: schema.org/VisualArtwork
  - Product: schema.org/Product con precio, stock
  - Artist: schema.org/Person
  - Inject en metadata de cada página

- [ ] **12.5** Crear sitemap dinámico
  - `src/app/sitemap.ts`
  - Incluir todas las rutas estáticas
  - Generar URLs de artworks y products dinámicamente
  - Alternates para ES/EN
  - Prioridades y changeFrequency

- [ ] **12.6** Crear robots.txt
  - `src/app/robots.ts`
  - Allow all
  - Disallow /api
  - Link a sitemap

- [ ] **12.7** Canonical URLs
  - Añadir canonical en metadata
  - Formato: `https://tu-dominio.com/[locale]/[path]`

- [ ] **12.8** hreflang tags para i18n
  - Alternates en metadata
  - `<link rel="alternate" hreflang="es" href="..." />`
  - Para cada página en ambos idiomas

- [ ] **12.9** Testing con herramientas SEO
  - Google Rich Results Test
  - Facebook Sharing Debugger
  - Twitter Card Validator
  - Verificar JSON-LD con validator

- [ ] **12.10** Lighthouse SEO
  - Target: 100/100 SEO score
  - Fix any issues encontrados

### ✅ Criterios de Aceptación Fase 12

- [x] Lighthouse SEO: 100/100
- [x] Todas las páginas con metadata completa
- [x] Sitemap y robots.txt generados
- [x] Structured data sin errores
- [x] OG y Twitter Cards validados

---

## 🧪 FASE 13: Testing y QA

**Duración:** 4 días | **Prioridad:** ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **13.1** Testing de todas las páginas en ES
  - Home, Gallery, Artwork detail, Shop, Product detail, About, Contact
  - Navegación completa
  - Interacciones (filtros, carrito, etc.)

- [ ] **13.2** Testing de todas las páginas en EN
  - Cambiar idioma y repetir testing
  - Verificar traducciones correctas
  - Links preservan idioma

- [ ] **13.3** Verificar estrategias de renderizado
  - Build del proyecto: `pnpm build`
  - Revisar output: identificar SSG, SSR, ISR
  - Confirmar que coincide con el plan

- [ ] **13.4** Testing exhaustivo de filtros
  - Gallery: probar cada filtro individualmente
  - Combinaciones de filtros
  - Clear filters
  - URL updates correctos

- [ ] **13.5** Testing de carrito
  - Add items
  - Update quantities
  - Remove items
  - Persistencia (reload page)
  - Total calculations

- [ ] **13.6** Testing responsive
  - Mobile (375px, 414px)
  - Tablet (768px, 1024px)
  - Desktop (1280px, 1920px)
  - Navigation menu mobile
  - Cart sidebar mobile

- [ ] **13.7** Testing cross-browser
  - Chrome
  - Firefox
  - Safari (macOS/iOS)
  - Edge

- [ ] **13.8** Lighthouse audit completo
  - Cada página principal
  - Performance >95
  - Accessibility >95
  - Best Practices >95
  - SEO 100

- [ ] **13.9** Accessibility audit
  - Keyboard navigation
  - Screen reader (NVDA o VoiceOver)
  - Focus indicators
  - ARIA labels
  - Color contrast (WCAG AA)

- [ ] **13.10** Performance profiling
  - Network tab: check waterfall
  - Performance tab: identify bottlenecks
  - Memory leaks check
  - Bundle size analysis

- [ ] **13.11** Fix de bugs
  - Documentar bugs encontrados
  - Priorizar: críticos → importantes → menores
  - Resolver todos los críticos
  - Resolver importantes si hay tiempo

### ✅ Criterios de Aceptación Fase 13

- [x] 0 bugs críticos
- [x] Lighthouse >95 en todas las categorías
- [x] Responsive perfecto
- [x] Accessibility conforme WCAG AA
- [x] Cross-browser sin issues mayores

---

## 📚 FASE 14: Documentación

**Duración:** 3 días | **Prioridad:** ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **14.1** Crear `docs/architecture.md`
  - Explicar estructura de carpetas
  - Patrones utilizados (Server/Client Components)
  - Decisiones técnicas clave
  - Diagramas (opcional)

- [ ] **14.2** Crear `docs/rendering-strategies.md`
  - Tabla completa de todas las páginas
  - Estrategia de renderizado de cada una
  - Justificación detallada
  - Code snippets de configuración

- [ ] **14.3** Actualizar README.md principal
  - Descripción del proyecto
  - Features principales
  - Tech stack
  - Setup instructions
    - Prerequisites
    - Installation
    - Running locally
    - Building for production
  - Scripts disponibles
  - Screenshots (opcional)
  - Créditos

- [ ] **14.4** Documentar componentes principales
  - Props interfaces
  - Usage examples
  - Notes sobre Server/Client

- [ ] **14.5** Guía de contribución (opcional)
  - CONTRIBUTING.md
  - Code style guidelines
  - Commit message conventions

- [ ] **14.6** Comentarios en código complejo
  - Revisar código
  - Añadir JSDoc comments donde sea útil
  - Explicar partes no obvias

### ✅ Criterios de Aceptación Fase 14

- [x] Documentación completa y clara
- [x] README permite setup sin fricción
- [x] Architecture y rendering strategies bien documentados
- [x] Código comentado apropiadamente

---

## 🎉 POST-IMPLEMENTACIÓN

### Checklist Final Antes de Deploy

- [ ] Todas las fases completadas
- [ ] Lighthouse >95 en todas las categorías
- [ ] 0 errores en consola
- [ ] 0 TypeScript errors
- [ ] 0 ESLint errors
- [ ] Core Web Vitals en verde
- [ ] Responsive perfecto
- [ ] Ambos idiomas funcionando
- [ ] Documentación completa
- [ ] Git history limpio (commits bien organizados)

### Deployment (Opcional)

- [ ] Configurar proyecto en Vercel/Netlify
- [ ] Añadir variables de entorno (si aplica)
- [ ] Deploy a producción
- [ ] Verificar en producción
- [ ] Configurar dominio custom (si aplica)
- [ ] Google Search Console setup

### Learnings Reflection

- [ ] Documentar learnings clave sobre Next.js 15
- [ ] Anotar problemas encontrados y soluciones
- [ ] Evaluar qué features de Next.js fueron más útiles
- [ ] Identificar áreas para profundizar

---

## 📝 Notas de Progreso

**Fecha de inicio:** Enero 20, 2026
**Última actualización:** Enero 21, 2026
**Progreso:** 29% (4/14 fases completadas)

### Log de Cambios

- 2026-01-20 (inicio): TODO.md creado con todas las fases planificadas
- 2026-01-20 (11:00): Inicialización del proyecto Next.js 16.1.4
- 2026-01-20 (11:15): Instalación de dependencias principales (next-intl, GSAP, Tailwind)
- 2026-01-20 (11:30): Configuración TypeScript strict mode
- 2026-01-20 (11:45): Creación de estructura de carpetas completa
- 2026-01-20 (12:00): Configuración next-intl con ES/EN (español por defecto)
- 2026-01-20 (12:15): Fix critical - Creado i18n.ts en root para next-intl
- 2026-01-20 (12:30): Actualización a Tailwind CSS v4 con nueva sintaxis
- 2026-01-20 (12:45): Tema graffiti dark implementado con custom utilities
- 2026-01-20 (13:00): **✅ FASE 1 COMPLETADA** - Proyecto verificado funcionando en localhost
- 2026-01-20 (14:00): Componentes UI creados (Button, Card, Input, Modal)
- 2026-01-20 (14:30): Header responsive con navegación y scroll effect
- 2026-01-20 (14:45): LanguageSwitcher con dropdown y cambio de idioma preservando ruta
- 2026-01-20 (15:00): Footer con links y social media
- 2026-01-20 (15:15): Splash Screen con animaciones GSAP
- 2026-01-20 (15:30): Traducciones completas (metadata, nav, footer, common)
- 2026-01-20 (15:45): **✅ FASE 2 COMPLETADA** - Build verificado sin errores
- 2026-01-20 (16:00): Ajustes UX/UI - Estilos hover en botones y elementos interactivos
- 2026-01-20 (16:15): Cambio de paleta de colores a grayscale elegante
- 2026-01-20 (16:30): Integración de imagen banner en home
- 2026-01-20 (16:45): Fix bug i18n - `localePrefix: 'always'` en routing.ts
- 2026-01-20 (17:00): Fix bug i18n - `router.replace(pathname, { locale })` corregido
- 2026-01-20 (17:15): Creado `/src/app/page.tsx` para redirect root a `/es`
- 2026-01-20 (17:30): Reemplazado GSAP por react-magic-motion
- 2026-01-20 (17:45): SplashScreen reescrito con CSS animations (sin GSAP)
- 2026-01-20 (18:00): Splash movido solo a home page (HomeContent.tsx)
- 2026-01-20 (18:15): AppWrapper removido del layout
- 2026-01-20 (18:30): Fix desarrollo - `setRequestLocale` en layout + `router.refresh()` en LanguageSwitcher
- 2026-01-20 (18:45): **✅ FASE 2 AJUSTES COMPLETADOS** - i18n funcionando en dev y prod
- 2026-01-21 (09:00): Inicio de FASE 3 - Home Page SSG
- 2026-01-21 (09:15): Tipos de artwork creados (`src/lib/types/artwork.ts`)
- 2026-01-21 (09:30): Mock data creado con 8 obras (`src/lib/data/artworks.json`)
- 2026-01-21 (09:45): Componente ArtworkCard implementado con hover effects
- 2026-01-21 (10:00): Hero Section actualizado con animaciones CSS
- 2026-01-21 (10:15): Featured Works section con grid responsive
- 2026-01-21 (10:30): About Preview section agregada
- 2026-01-21 (10:45): Traducciones ES/EN actualizadas (featured, about)
- 2026-01-21 (11:00): Animaciones CSS agregadas (fade-in, slide-up, delays)
- 2026-01-21 (11:15): SSG configurado con `export const dynamic = 'force-static'`
- 2026-01-21 (11:30): Build exitoso - Páginas estáticas generadas correctamente
- 2026-01-21 (11:45): **✅ FASE 3 COMPLETADA** - Home Page SSG con todas las secciones
- 2026-01-21 (14:00): Inicio FASE 4 - Galería Principal SSR
- 2026-01-21 (14:15): Expandido artworks.json de 8 a 35 obras con variedad completa
- 2026-01-21 (14:30): Creado delay.ts y artworkService.ts con 7 funciones
- 2026-01-21 (14:45): FilterOptions types actualizados en artwork.ts
- 2026-01-21 (15:00): Página Gallery creada con SSR (force-dynamic)
- 2026-01-21 (15:15): Traducciones expandidas para galería (ES/EN)
- 2026-01-21 (15:30): ArtworkGrid y ArtworkGridSkeleton implementados
- 2026-01-21 (15:45): ArtworkCard mejorado con stats, badges y dimensiones
- 2026-01-21 (16:00): Hook useFilters creado para gestión de URL
- 2026-01-21 (16:15): Componente Filters con 5 tipos de filtros
- 2026-01-21 (16:30): Suspense y streaming configurados
- 2026-01-21 (16:45): Animaciones CSS stagger agregadas
- 2026-01-21 (17:00): Build exitoso - SSR verificado como ƒ (Dynamic)
- 2026-01-21 (17:15): **✅ FASE 4 COMPLETADA** - Galería SSR con filtros dinámicos

### 🎯 Siguiente Paso

**FASE 5: Galería - Detalle de Obra (ISR)** - Crear página detalle con ISR, generateStaticParams, metadata dinámica y obras relacionadas
