# TODO - Portafolio Web Grafitero con Next.js 16

> **Objetivo:** Dominar Next.js 16+ implementando todas sus features en un proyecto real
> **Progreso Total:** 2/14 fases completadas (14%)

---

## 📊 Resumen de Progreso por Fase

- [x] **Fase 1:** Setup Inicial (9/9 tareas) ✅ **COMPLETADA**
- [x] **Fase 2:** Layout y Navegación (9/9 tareas) ✅ **COMPLETADA**
- [ ] **Fase 3:** Home Page SSG (0/9 tareas)
- [ ] **Fase 4:** Galería Principal SSR (0/12 tareas)
- [ ] **Fase 5:** Galería Detalle ISR (0/11 tareas)
- [ ] **Fase 6:** Tienda Principal SSR (0/11 tareas)
- [ ] **Fase 7:** Tienda Detalle & Carrito (0/12 tareas)
- [ ] **Fase 8:** Páginas Secundarias SSG (0/5 tareas)
- [ ] **Fase 9:** API Routes (0/9 tareas)
- [ ] **Fase 10:** Optimización Imágenes (0/9 tareas)
- [ ] **Fase 11:** Animaciones GSAP (0/10 tareas)
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
  npm install next-intl gsap clsx tailwind-merge
  ```
  - ✅ next-intl@4.7.0 instalado
  - ✅ gsap@3.14.2 instalado
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
- GSAP 3.14.2

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
  - ✅ Animación CSS pura (reemplazado GSAP por animaciones CSS)
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
**Duración:** 3 días | **Prioridad:** ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **3.1** Crear página Home
  - `src/app/[locale]/page.tsx`
  - Configurar como SSG: `export const dynamic = 'force-static'`
  - Metadata estática

- [ ] **3.2** Diseñar y maquetar Hero Section
  - Título impactante con gradiente
  - Subtítulo descriptivo
  - CTA buttons (Ver Galería, Ver Tienda)
  - Background con imagen o pattern

- [ ] **3.3** Implementar animaciones Hero con GSAP (básico)
  - Fade in del título
  - Slide up de botones
  - Parallax sutil en background

- [ ] **3.4** Crear sección "Featured Works"
  - Grid 3x2 de obras destacadas
  - Usar mock data temporal (6 obras)
  - Cards con hover effect
  - Link a cada obra

- [ ] **3.5** Crear mock inicial de artworks
  - `src/lib/data/artworks.json` con 6-10 obras de ejemplo
  - Estructura completa según `project-plan.md`
  - Incluir todas las propiedades necesarias

- [ ] **3.6** Crear componente ArtworkCard (versión simple)
  - `src/components/gallery/ArtworkCard.tsx` (Server)
  - Mostrar imagen, título, categoría
  - Hover effect con Tailwind
  - Link al detalle (por ahora sin funcionar)

- [ ] **3.7** Crear sección "About Preview"
  - Texto breve sobre el artista
  - Foto o avatar
  - CTA "Conocer más"

- [ ] **3.8** Optimizar imágenes del Home
  - Usar `next/image` con priority para hero
  - Dimensiones apropiadas
  - Blur placeholder básico

- [ ] **3.9** Testing y optimización
  - Verificar SSG: `pnpm build` y revisar output
  - Lighthouse test (target: >90 performance)
  - Responsive test (mobile, tablet, desktop)

### ✅ Criterios de Aceptación Fase 3
- [x] Home page es 100% estática (SSG)
- [x] Lighthouse Performance >90
- [x] Totalmente responsive
- [x] Animaciones suaves sin lag
- [x] Links funcionan (aunque destinos no estén listos)

---

## 🖼️ FASE 4: Galería - Página Principal (SSR)
**Duración:** 4 días | **Prioridad:** ALTA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **4.1** Expandir mock de artworks
  - Ampliar `artworks.json` a 30-50 obras
  - Incluir variedad de categorías, técnicas, colores
  - Asegurar datos completos para filtros

- [ ] **4.2** Crear servicios de datos
  - `src/lib/utils/delay.ts` - Función simulateLatency
  - `src/lib/types/artwork.ts` - Types de Artwork
  - `src/lib/types/filters.ts` - FilterOptions interface
  - `src/lib/services/artworkService.ts` con funciones:
    - `getArtworks(filters?: FilterOptions): Promise<Artwork[]>`
    - `getArtworkBySlug(slug: string): Promise<Artwork | null>`
    - `getPopularArtworks(limit: number): Promise<Artwork[]>`

- [ ] **4.3** Crear página Gallery con SSR
  - `src/app/[locale]/gallery/page.tsx`
  - Configurar: `export const dynamic = 'force-dynamic'`
  - Recibir `searchParams` para filtros
  - Llamar a `getArtworks(searchParams)`

- [ ] **4.4** Implementar ArtworkGrid
  - `src/components/gallery/ArtworkGrid.tsx` (Server)
  - Grid responsive (1 col mobile, 2 tablet, 3-4 desktop)
  - Mapear artworks a ArtworkCards
  - Mostrar mensaje si no hay resultados

- [ ] **4.5** Mejorar ArtworkCard
  - Mostrar más info: técnica, ubicación, año
  - Badges para categorías
  - Mejor hover effect
  - Link funcional al detalle

- [ ] **4.6** Crear componente Filters (Client)
  - `src/components/gallery/Filters.tsx` (Client)
  - Filtros: Categoría, Técnica, Ciudad, Color, Tamaño, Orientación
  - UI: Dropdowns o checkboxes
  - Botón "Limpiar filtros"

- [ ] **4.7** Implementar hook useFilters
  - `src/hooks/useFilters.ts`
  - Leer searchParams actuales
  - Función `updateFilters` que actualiza URL
  - Usar `useRouter` y `useSearchParams`

- [ ] **4.8** Conectar Filters con página
  - Pasar filtros actuales a componente Filters
  - Al cambiar filtros, actualizar URL (sin reload)
  - Verificar que SSR re-fetcha con nuevos filtros

- [ ] **4.9** Implementar Suspense y Skeletons
  - Wrap ArtworkGrid en Suspense
  - Crear `ArtworkGridSkeleton.tsx`
  - Crear `FiltersSkeleton.tsx`
  - Testear streaming

- [ ] **4.10** Añadir animaciones de entrada (GSAP)
  - Stagger animation al montar grid
  - Fade in de cards
  - Smooth transition de filtros

- [ ] **4.11** Lazy loading de imágenes
  - Configurar `loading="lazy"` en ArtworkCard
  - Verificar que only visible images load initially

- [ ] **4.12** Testing exhaustivo de filtros
  - Probar cada combinación de filtros
  - Verificar URL updates
  - Testear "back button" del navegador
  - Performance con 50 obras

### ✅ Criterios de Aceptación Fase 4
- [x] Galería usa SSR (verificar en Network tab)
- [x] Filtros actualizan la galería dinámicamente
- [x] URL refleja estado de filtros
- [x] Streaming funciona con Suspense
- [x] Performance aceptable (<3s load)
- [x] Responsive perfecto

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
  - GSAP animations

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
  - GSAP slide-in animation

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

## ✨ FASE 11: Animaciones con GSAP
**Duración:** 3 días | **Prioridad:** MEDIA | **Estado:** 🔴 No iniciado

### Tareas Principales

- [ ] **11.1** Instalar GSAP y plugins
  ```bash
  pnpm add gsap
  ```
  - Verificar compatibilidad con Next.js 15
  - Import en componentes Client

- [ ] **11.2** Splash Screen animation
  - Logo reveal con GSAP Timeline
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
  - Smooth transition (CSS + GSAP si necesario)

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
**Última actualización:** Enero 20, 2026
**Progreso:** 14% (2/14 fases completadas)

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

### 🎯 Siguiente Paso
**FASE 3: Home Page SSG** - Implementar Hero section con animaciones, Featured Works grid, ArtworkCard y mock data de artworks
