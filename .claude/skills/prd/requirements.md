# PRD — Portfolio de Artista Graffiti (BLITO)

> **Estado:** En progreso (29% — Fases 1-4 completadas)
> **Última actualización:** 2026-02-12
> **Autor:** Cristian
> **Inicio del proyecto:** Enero 2026

---

## 1. Visión del producto

Portfolio web + e-commerce para un artista de graffiti/arte urbano. El proyecto tiene un doble objetivo:

1. **Producto real:** Crear un portfolio profesional para mostrar obras, conectar con clientes y vender productos (prints, merch)
2. **Aprendizaje:** Dominar Next.js 16+ implementando todas sus estrategias de renderizado (SSG, SSR, ISR, Streaming) en un contexto real

## 2. Usuarios objetivo

- **Visitantes:** Personas interesadas en arte urbano que quieren explorar el portfolio
- **Clientes potenciales:** Marcas o personas que quieren contratar al artista para murales, eventos o colaboraciones
- **Compradores:** Personas que quieren comprar prints de edición limitada, originales o merch

## 3. Funcionalidades principales

### 3.1 Splash / Landing (Home)

- Splash screen animado con CSS animations (solo en home, no bloquea otras páginas)
- Hero section con imagen de fondo, título impactante y CTAs (Ver Galería, Ver Tienda)
- Sección "Featured Works" — grid responsive con 6 obras destacadas
- Sección "About Preview" — texto breve sobre el artista + CTA a /about
- Renderizado: **SSG** (`force-static`)

### 3.2 Galería de trabajos

**Página principal (`/gallery`):**

- Grid responsive de obras (1 col mobile, 2 tablet, 3 desktop, 4 xl)
- Sistema de filtros dinámicos: categoría, técnica, ciudad, orientación, búsqueda por texto
- Filtros sincronizados con URL (searchParams) — permite compartir URLs con filtros activos
- Suspense boundaries con skeletons para streaming
- Animaciones stagger en cards (CSS)
- Empty state cuando no hay resultados
- Renderizado: **SSR** (`force-dynamic`)

**Detalle de obra (`/gallery/[slug]`):**

- Imagen principal grande con ImageViewer (zoom, fullscreen)
- Galería de imágenes adicionales con thumbnails
- Info completa: título, descripción, técnica, categoría, dimensiones, año, ubicación, colores dominantes
- Sección "Obras Relacionadas" (3-4 obras de categoría similar)
- Botón "Ver en mapa" (link a Google Maps con coordenadas)
- Share buttons (Twitter, Facebook, WhatsApp, Copy Link)
- Metadata dinámica con Open Graph y Twitter Cards
- Renderizado: **ISR** (`revalidate = 3600` — 1 hora)

### 3.3 Tienda (Shop)

**Página principal (`/shop`):**

- Grid de productos con ProductCard (imagen, nombre, precio, stock)
- Filtros: categoría (print, original, merch), rango de precios, disponibilidad
- Sorting: precio (asc/desc), popularidad, más reciente
- Badges: "Sold Out", "Limited Edition"
- Suspense con skeletons
- Renderizado: **SSR** (`force-dynamic`)

**Detalle de producto (`/shop/[productId]`):**

- Galería de imágenes del producto
- Info: nombre, precio, stock, descripción, especificaciones técnicas (tamaño, material, firmado, numerado)
- Link a obra relacionada
- Selector de variantes (tamaño, con/sin marco)
- Botón "Add to Cart" con selector de cantidad
- Renderizado: **ISR** (`revalidate = 1800` — 30 min)

**Carrito:**

- Cart sidebar (slide-in desde derecha)
- Lista de items con imagen, nombre, precio, cantidad (+/-)
- Remove items, total price
- Persistencia en LocalStorage (`useCart` hook)
- Icono en Header con badge de cantidad
- Checkout placeholder (formulario mock sin pago real)

### 3.4 About

- Bio del artista, trayectoria, filosofía artística
- Foto del artista
- Mock de datos desde `artist.json`
- Renderizado: **SSG** (`force-static`)

### 3.5 Contact

- Formulario de contacto (nombre, email, asunto, mensaje) con validación
- Links a redes sociales y email
- Submit mock (log, sin envío real de email en v1)
- Renderizado: **SSG** (formulario es Client Component)

### 3.6 API Routes

- `GET /api/artworks` — filtros via query params, latencia simulada
- `GET /api/artworks/[id]` — detalle por ID
- `GET /api/products` — filtros y sorting
- `GET /api/products/[id]` — detalle por ID
- `POST /api/contact` — recibe form data, validación con Zod
- Error handling consistente con status codes apropiados

### 3.7 Páginas de error

- 404 personalizada con diseño graffiti
- Error boundary personalizada
- Loading states globales

## 4. Requisitos técnicos

### Stack principal

- **Runtime:** Node.js LTS (v20+)
- **Framework:** Next.js 16+ con App Router
- **UI:** React 19+ con Server Components
- **Lenguaje:** TypeScript 5+ (strict mode, `noUncheckedIndexedAccess`)
- **Package Manager:** pnpm v10
- **Styling:** Tailwind CSS v4 con PostCSS plugin
- **i18n:** next-intl (`localePrefix: 'always'`, español default)
- **Animaciones:** CSS animations + react-magic-motion (sin GSAP)

### Convenciones

- Path alias: `@/*` mapea a `./src/*`
- Navegación: usar exports de `@/i18n/routing`, nunca de `next/link` o `next/navigation`
- Class merging: `cn()` desde `@/lib/utils/cn` (clsx + tailwind-merge)
- Fonts: Inter (body) y Montserrat (headings) via `next/font/google`
- Datos: JSON mocks en `src/lib/data/` con latencia simulada (sin DB real en v1)

### Diseño

- Tema oscuro con escala de grises elegante (gray-950 a gray-50)
- Tipografía: Montserrat para headings (bold, extrabold), Inter para body
- Mobile-first responsive

## 5. Páginas y rutas

| Ruta                         | Descripción                   | Rendering   | Prioridad  |
| ---------------------------- | ----------------------------- | ----------- | ---------- |
| `/[locale]/`                 | Home / Landing con splash     | SSG         | Alta       |
| `/[locale]/gallery`          | Galería con filtros dinámicos | SSR         | Alta       |
| `/[locale]/gallery/[slug]`   | Detalle de obra               | ISR (1h)    | Alta       |
| `/[locale]/shop`             | Tienda con filtros y sorting  | SSR         | Alta       |
| `/[locale]/shop/[productId]` | Detalle de producto           | ISR (30min) | Media-Alta |
| `/[locale]/shop/checkout`    | Checkout placeholder          | SSG         | Media      |
| `/[locale]/about`            | Sobre el artista              | SSG         | Media      |
| `/[locale]/contact`          | Formulario de contacto        | SSG         | Media      |
| `/api/artworks`              | API obras                     | Dynamic     | Media      |
| `/api/products`              | API productos                 | Dynamic     | Media      |
| `/api/contact`               | API contacto                  | Dynamic     | Media      |

## 6. Fuera de alcance (v1)

- Sistema de pagos real (Stripe, PayPal, etc.)
- Panel de administración para gestionar obras/productos
- Base de datos real (se usan JSON mocks)
- Blog / sistema de contenido
- Dark/Light mode toggle
- Sistema de likes/favorites con persistencia en servidor
- Newsletter / email marketing
- Integración con Instagram API
- Google Maps embebido (solo link externo)
- PWA features
- Video gallery

## 7. Métricas de éxito

### Performance

- Lighthouse Performance: >95
- Lighthouse Accessibility: >95
- Lighthouse Best Practices: >95
- Lighthouse SEO: 100

### Core Web Vitals

- LCP (Largest Contentful Paint): <2.5s
- FID/INP (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1
- TTFB: <600ms
- FCP: <1.8s

### Calidad de código

- 0 errores de TypeScript
- 0 errores de ESLint
- Nunca usar `any`
- Componentes modulares y reutilizables

### Aprendizaje

- Implementar al menos 3 estrategias de renderizado (SSG, SSR, ISR)
- Usar Server y Client Components correctamente
- Implementar streaming con Suspense
- i18n completo con next-intl
- Optimización de imágenes avanzada con next/image

## 8. Cronograma / Fases

### Fase 1 — Setup inicial ✅

- Proyecto Next.js 16, TypeScript strict, ESLint + Prettier
- next-intl configurado (ES/EN)
- Estructura de carpetas, Tailwind v4 con tema graffiti

### Fase 2 — Layout y navegación ✅

- Header responsive con navegación y scroll effect
- LanguageSwitcher, Footer, Splash Screen
- Componentes UI base (Button, Card, Input, Modal)

### Fase 3 — Home Page (SSG) ✅

- Hero section con animaciones CSS
- Featured Works grid, About Preview
- Mock data con 8 obras iniciales

### Fase 4 — Galería principal (SSR) ✅

- 35 obras en mock data, artworkService completo
- Filtros dinámicos (5 tipos), URL state management
- Suspense, skeletons, animaciones stagger

### Fase 5 — Galería detalle (ISR)

- Página detalle con ISR, generateStaticParams top 20
- ImageViewer con zoom, obras relacionadas
- Share buttons, metadata dinámica

### Fase 6 — Tienda principal (SSR)

- Mock de 20-30 productos, productService
- Filtros, sorting, ProductGrid/ProductCard

### Fase 7 — Tienda detalle y carrito

- Detalle producto ISR, useCart hook
- Cart sidebar con persistencia LocalStorage
- Checkout placeholder

### Fase 8 — Páginas secundarias (SSG)

- About, Contact (formulario con validación)
- Páginas 404 y error personalizadas

### Fase 9 — API Routes

- Endpoints para artworks, products, contact
- Validación con Zod, error handling

### Fase 10 — Optimización de imágenes

- Blur placeholders con sharp, AVIF/WebP
- Priority para LCP, lazy loading

### Fase 11 — Animaciones

- react-magic-motion para animaciones complejas
- Scroll-triggered, parallax, prefers-reduced-motion

### Fase 12 — SEO y Metadata

- Metadata dinámica, Open Graph, Twitter Cards
- Structured data (JSON-LD), sitemap, robots.txt

### Fase 13 — Testing y QA

- Testing manual en ambos idiomas
- Responsive, cross-browser, Lighthouse audit
- Accessibility (WCAG AA)

### Fase 14 — Documentación

- architecture.md, rendering-strategies.md
- README profesional, comentarios en código

## 9. Modelo de datos

### Artwork

```
id, slug, title (es/en), description (es/en), category, technique,
location (city, country, coordinates), year, images (main, thumbnail,
blur, gallery[]), dimensions (width, height, unit), colors[],
orientation, size, isPaid, featured, views, likes
```

### Product

```
id, slug, name (es/en), description (es/en), relatedArtwork,
price (amount, currency), stock, images (main, gallery[]),
specifications (size, material, frame, signed, numbered),
category, available
```

### FilterOptions (Gallery)

```
category, technique, orientation, location, colors[],
size, isPaid, searchTerm
```
