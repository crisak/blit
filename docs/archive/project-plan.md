# Planificación del Proyecto: Portafolio Web para Grafitero

## 📋 Información General

**Tipo de Proyecto:** Portafolio Web + E-commerce para Artista Grafitero
**Objetivo Principal:** Aprender Next.js (última versión) mediante implementación práctica de todas sus features
**Stack Principal:** Next.js 15+ + React 19+ + TypeScript + pnpm
**Estado:** Fase 2 Completada (14%)
**Fecha de Inicio:** Enero 2026

---

## 🎯 Objetivos del Proyecto

### Objetivos de Aprendizaje
- **Dominar todas las estrategias de renderizado de Next.js** (SSR, SSG, ISR, Streaming)
- Implementar React Server Components y Client Components correctamente
- Utilizar App Router con todas sus capacidades
- Usar buenas practicas recomendadas por el equipo de Next.js
- Optimización de imágenes avanzada con next/image
- Implementar internacionalización (i18n) con next-intl
- Alcanzar Web Core Vitals óptimos
- Aplicar arquitectura limpia y patrones escalables

### Objetivos Funcionales
- Crear un portafolio profesional para mostrar obras de arte urbano
- Implementar tienda online para venta de productos
- Proporcionar sistema de filtros avanzado para búsqueda de obras
- Ofrecer experiencia multiidioma (ES/EN)
- Lograr carga ultrarrápida de imágenes de alta calidad
- Diseño oscuro inspirado en cultura graffiti/street art

---

## 🏗️ Stack Técnico Completo

### Core Stack
```
- Runtime: Node.js LTS (v20+)
- Framework: Next.js 15+ (App Router)
- Language: TypeScript 5+ (strict mode)
- UI Library: React 19+ (Server Components)
- Package Manager: pnpm
```

### Librerías Principales

#### Styling & Animations
- **Tailwind CSS 4+** - Utility-first CSS framework
- **react-magic-motion** - Animaciones declarativas (reemplaza GSAP)
- **CSS Animations** - Para transiciones y efectos simples

#### Internacionalización
- **next-intl** - Solución i18n para Next.js App Router
- Soporte: Español (default) e Inglés

#### Optimización de Imágenes
- **next/image** - Componente optimizado de Next.js
- **sharp** - Procesamiento de imágenes (built-in Next.js)
- **Lazy loading** - Carga diferida nativa
- **Blur placeholder** - Placeholders con efecto blur

#### Development Tools
- **ESLint** - Linting
- **Prettier** - Formateo de código
- **TypeScript Strict Mode** - Tipado estricto
- **Husky** - Git hooks

#### Database Simulation
- **JSON files** - Mocks de datos
- **Simulated latency** - setTimeout para simular queries reales

---

## 📁 Arquitectura del Proyecto

### Estructura de Carpetas

```
next-renders/
├── docs/
│   ├── rules-ia.md                      ✅ Existente
│   ├── project-plan.md                  📝 Este archivo
│   ├── rendering-strategies.md          🔜 Documentación de estrategias
│   └── architecture.md                  🔜 Arquitectura detallada
│
├── public/
│   ├── images/
│   │   ├── gallery/                     # Imágenes de obras
│   │   ├── products/                    # Imágenes de productos
│   │   └── placeholders/                # Blur placeholders
│   ├── fonts/                           # Fuentes personalizadas
│   └── splash/                          # Recursos del splash screen
│
├── src/
│   ├── app/
│   │   ├── [locale]/                    # Rutas dinámicas por idioma
│   │   │   ├── layout.tsx               # [SSR] Layout raíz con i18n
│   │   │   ├── page.tsx                 # [SSG] Home page
│   │   │   ├── loading.tsx              # Splash/Loading UI
│   │   │   ├── error.tsx                # Error boundary
│   │   │   ├── not-found.tsx            # 404 page
│   │   │   │
│   │   │   ├── gallery/
│   │   │   │   ├── page.tsx             # [SSR] Galería con filtros
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx         # [ISR] Detalle de obra
│   │   │   │
│   │   │   ├── shop/
│   │   │   │   ├── page.tsx             # [SSR] Tienda con filtros
│   │   │   │   └── [productId]/
│   │   │   │       └── page.tsx         # [ISR] Detalle de producto
│   │   │   │
│   │   │   ├── about/
│   │   │   │   └── page.tsx             # [SSG] Sobre el artista
│   │   │   │
│   │   │   └── contact/
│   │   │       └── page.tsx             # [SSG] Contacto
│   │   │
│   │   ├── api/                         # API Routes
│   │   │   ├── artworks/
│   │   │   │   └── route.ts             # [Dynamic] API obras
│   │   │   └── products/
│   │   │       └── route.ts             # [Dynamic] API productos
│   │   │
│   │   ├── globals.css                  # Estilos globales
│   │   └── manifest.ts                  # PWA manifest
│   │
│   ├── components/
│   │   ├── ui/                          # Componentes base reutilizables
│   │   │   ├── Button.tsx               # [Client]
│   │   │   ├── Card.tsx                 # [Server]
│   │   │   ├── Modal.tsx                # [Client]
│   │   │   └── Input.tsx                # [Client]
│   │   │
│   │   ├── gallery/                     # Componentes de galería
│   │   │   ├── ArtworkCard.tsx          # [Server]
│   │   │   ├── ArtworkGrid.tsx          # [Server]
│   │   │   ├── Filters.tsx              # [Client]
│   │   │   └── ImageViewer.tsx          # [Client] con GSAP
│   │   │
│   │   ├── shop/                        # Componentes de tienda
│   │   │   ├── ProductCard.tsx          # [Server]
│   │   │   ├── ProductGrid.tsx          # [Server]
│   │   │   ├── Cart.tsx                 # [Client]
│   │   │   └── Checkout.tsx             # [Client]
│   │   │
│   │   ├── layout/                      # Componentes de layout
│   │   │   ├── Header.tsx               # [Client] con navegación
│   │   │   ├── Footer.tsx               # [Server]
│   │   │   ├── Navigation.tsx           # [Client]
│   │   │   └── LanguageSwitcher.tsx     # [Client]
│   │   │
│   │   └── splash/
│   │       └── SplashScreen.tsx         # [Client] Animación entrada
│   │
│   ├── lib/
│   │   ├── data/                        # Mocks y datos simulados
│   │   │   ├── artworks.json            # Mock de obras
│   │   │   ├── products.json            # Mock de productos
│   │   │   └── artist.json              # Info del artista
│   │   │
│   │   ├── services/                    # Servicios con latencia simulada
│   │   │   ├── artworkService.ts        # CRUD obras + delay
│   │   │   ├── productService.ts        # CRUD productos + delay
│   │   │   └── filterService.ts         # Lógica de filtros
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts                    # Classnames helper
│   │   │   ├── image.ts                 # Helpers de imágenes
│   │   │   └── delay.ts                 # Simulador de latencia
│   │   │
│   │   └── types/
│   │       ├── artwork.ts               # Types de obras
│   │       ├── product.ts               # Types de productos
│   │       └── filters.ts               # Types de filtros
│   │
│   ├── hooks/                           # Custom React Hooks
│   │   ├── useFilters.ts                # Hook para filtros
│   │   ├── useCart.ts                   # Hook para carrito
│   │   └── useIntersectionObserver.ts   # Hook para lazy load
│   │
│   ├── i18n/                            # Internacionalización
│   │   ├── request.ts                   # next-intl config
│   │   ├── routing.ts                   # Routing config
│   │   └── messages/
│   │       ├── es.json                  # Traducciones español
│   │       └── en.json                  # Traducciones inglés
│   │
│   └── styles/                          # Estilos adicionales
│       └── graffiti-theme.css           # Tema graffiti custom
│
├── middleware.ts                        # Middleware i18n
├── next.config.mjs                      # Configuración Next.js
├── tailwind.config.ts                   # Configuración Tailwind
├── tsconfig.json                        # Configuración TypeScript
├── .eslintrc.json                       # Configuración ESLint
├── .prettierrc                          # Configuración Prettier
├── pnpm-lock.yaml                       # Lock file pnpm
├── package.json                         # Dependencies
├── TODO.md                              # 🔜 Lista de tareas
└── README.md                            # Documentación del proyecto
```

---

## 🎨 Estrategias de Renderizado por Página

### Documentación Detallada en `docs/rendering-strategies.md`

#### 📄 Páginas con SSG (Static Site Generation)
**Cuándo:** Contenido que raramente cambia

1. **Home (`/[locale]/page.tsx`)**
   - **Estrategia:** SSG con `force-cache`
   - **Justificación:** Landing page con contenido estático, máximo performance
   - **Implementación:** `export const dynamic = 'force-static'`
   - **Revalidación:** Build time

2. **About (`/[locale]/about/page.tsx`)**
   - **Estrategia:** SSG
   - **Justificación:** Bio del artista no cambia frecuentemente
   - **Implementación:** `generateStaticParams()` para locales
   - **Revalidación:** On-demand con `revalidatePath`

3. **Contact (`/[locale]/contact/page.tsx`)**
   - **Estrategia:** SSG
   - **Justificación:** Formulario estático, interacción en client
   - **Implementación:** `force-static`

#### 🔄 Páginas con ISR (Incremental Static Regeneration)
**Cuándo:** Contenido que cambia periódicamente

1. **Artwork Detail (`/[locale]/gallery/[slug]/page.tsx`)**
   - **Estrategia:** ISR con revalidación cada 1 hora
   - **Justificación:** Obras pueden actualizarse, pero no constantemente
   - **Implementación:**
     ```typescript
     export const revalidate = 3600; // 1 hora
     export async function generateStaticParams() {
       // Pre-generar las 50 obras más populares
       const artworks = await getPopularArtworks(50);
       return artworks.map((art) => ({ slug: art.slug }));
     }
     ```
   - **Beneficios:** Fast first load + contenido relativamente fresco

2. **Product Detail (`/[locale]/shop/[productId]/page.tsx`)**
   - **Estrategia:** ISR con revalidación cada 30 minutos
   - **Justificación:** Inventario y precios pueden cambiar
   - **Implementación:**
     ```typescript
     export const revalidate = 1800; // 30 minutos
     export async function generateStaticParams() {
       const products = await getAvailableProducts();
       return products.map((p) => ({ productId: p.id }));
     }
     ```

#### ⚡ Páginas con SSR (Server-Side Rendering)
**Cuándo:** Contenido dinámico o personalizado

1. **Gallery with Filters (`/[locale]/gallery/page.tsx`)**
   - **Estrategia:** SSR con streaming
   - **Justificación:** Filtros dinámicos basados en query params
   - **Implementación:**
     ```typescript
     export const dynamic = 'force-dynamic';
     // Usa searchParams para filtros
     export default async function GalleryPage({
       searchParams
     }: {
       searchParams: {
         category?: string;
         color?: string;
         city?: string;
       }
     }) {
       const artworks = await getFilteredArtworks(searchParams);
       return <ArtworkGrid artworks={artworks} />;
     }
     ```
   - **Optimización:** Suspense boundaries para streaming

2. **Shop with Filters (`/[locale]/shop/page.tsx`)**
   - **Estrategia:** SSR con streaming
   - **Justificación:** Filtros + disponibilidad en tiempo real
   - **Implementación:**
     ```typescript
     export const dynamic = 'force-dynamic';
     // Streaming con Suspense
     export default async function ShopPage({ searchParams }) {
       return (
         <Suspense fallback={<ProductGridSkeleton />}>
           <ProductGrid searchParams={searchParams} />
         </Suspense>
       );
     }
     ```

#### 🌊 Streaming con Suspense
**Implementación en páginas SSR:**

```typescript
// /[locale]/gallery/page.tsx
import { Suspense } from 'react';

export default function GalleryPage() {
  return (
    <>
      {/* Header se renderiza inmediatamente */}
      <GalleryHeader />

      {/* Filtros se cargan rápido (cliente) */}
      <Suspense fallback={<FiltersSkeleton />}>
        <Filters />
      </Suspense>

      {/* Grid se streamea desde servidor */}
      <Suspense fallback={<ArtworkGridSkeleton />}>
        <ArtworkGrid />
      </Suspense>
    </>
  );
}
```

#### 🔌 API Routes (Dynamic)
Todas las API routes son dinámicas por naturaleza:

```typescript
// app/api/artworks/route.ts
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const artworks = await getArtworks(searchParams);

  // Simular latencia de DB
  await simulateLatency(100);

  return Response.json(artworks);
}
```

---

## 🎨 Diseño y UX

### Paleta de Colores (Tema Oscuro con Grayscale Elegante)

```css
:root {
  /* Dark Base - Escala de grises elegante */
  --bg-primary: #030712;        /* gray-950 */
  --bg-secondary: #111827;      /* gray-900 */
  --bg-tertiary: #1f2937;       /* gray-800 */

  /* Accent Colors - Tonos neutros con sutiles acentos */
  --accent-light: #f9fafb;      /* gray-50 */
  --accent-medium: #9ca3af;     /* gray-400 */
  --accent-border: #374151;     /* gray-700 */

  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #d1d5db;    /* gray-300 */
  --text-muted: #6b7280;        /* gray-500 */

  /* Overlays */
  --overlay-dark: rgba(3, 7, 18, 0.85);
  --glass: rgba(255, 255, 255, 0.05);
}
```

> **Nota:** Se cambió de colores neón vibrantes a una escala de grises elegante para dar un aspecto más sofisticado y callejero.

### Tipografía

```typescript
// Fuentes sugeridas
- Headers: "Montserrat" (bold, extrabold) - Impacto urbano
- Body: "Inter" - Legibilidad
- Accent: "Bebas Neue" - Títulos grandes tipo graffiti
```

### Animaciones con CSS y react-magic-motion

```typescript
// Ejemplos de animaciones clave:
1. Splash Screen: CSS transitions (opacity, scale, tracking)
2. Gallery Grid: Stagger animation con react-magic-motion
3. Image Viewer: CSS transforms y zoom suave
4. Page Transitions: CSS transitions (opacity, transform)
5. Filters: CSS accordion con transitions
```

> **Nota:** Se reemplazó GSAP por react-magic-motion y CSS animations nativas para reducir bundle size y mejorar performance.

---

## 🔍 Sistema de Filtros

### Filtros Disponibles

```typescript
interface FilterOptions {
  // Orientación
  orientation?: 'vertical' | 'horizontal' | 'square';

  // Técnicas
  techniques?: string[]; // ['spray', 'stencil', 'mural', 'canvas']

  // Ubicación
  location?: string; // Ciudad donde se realizó
  isPaid?: boolean; // Trabajo pagado vs personal

  // Visual
  colors?: string[]; // Colores dominantes
  size?: 'small' | 'medium' | 'large' | 'mural';

  // Categorías
  categories?: string[]; // ['graffiti', 'painting', 'tattoo', 'photography']

  // Artista (para futuro multi-artista)
  artist?: string;

  // Búsqueda
  searchTerm?: string;
}
```

### Implementación de Filtros

```typescript
// hooks/useFilters.ts (Client Component)
'use client';

export function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilters = useCallback((newFilters: Partial<FilterOptions>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, Array.isArray(value) ? value.join(',') : value);
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`, { scroll: false });
  }, [searchParams, router]);

  return { filters: Object.fromEntries(searchParams), updateFilters };
}
```

---

## 📊 Mocks de Base de Datos

### Estructura de Datos

#### `lib/data/artworks.json`
```json
{
  "artworks": [
    {
      "id": "artwork-001",
      "slug": "urban-dreams-madrid",
      "title": {
        "es": "Sueños Urbanos",
        "en": "Urban Dreams"
      },
      "description": {
        "es": "Mural de gran formato en el centro de Madrid...",
        "en": "Large format mural in Madrid downtown..."
      },
      "category": "graffiti",
      "technique": "spray",
      "location": {
        "city": "Madrid",
        "country": "Spain",
        "coordinates": { "lat": 40.4168, "lng": -3.7038 }
      },
      "year": 2024,
      "images": {
        "main": "/images/gallery/urban-dreams-main.jpg",
        "thumbnail": "/images/gallery/urban-dreams-thumb.jpg",
        "blur": "/images/placeholders/urban-dreams-blur.jpg",
        "gallery": [
          "/images/gallery/urban-dreams-1.jpg",
          "/images/gallery/urban-dreams-2.jpg"
        ]
      },
      "dimensions": {
        "width": 1200,
        "height": 800,
        "unit": "cm"
      },
      "colors": ["#00ff88", "#ff006e", "#0a0a0a"],
      "orientation": "horizontal",
      "size": "mural",
      "isPaid": true,
      "featured": true,
      "views": 1523,
      "likes": 342
    }
  ]
}
```

#### `lib/data/products.json`
```json
{
  "products": [
    {
      "id": "prod-001",
      "slug": "urban-dreams-print",
      "name": {
        "es": "Print Sueños Urbanos - Edición Limitada",
        "en": "Urban Dreams Print - Limited Edition"
      },
      "description": {
        "es": "Impresión de alta calidad en papel fotográfico...",
        "en": "High quality print on photo paper..."
      },
      "relatedArtwork": "artwork-001",
      "price": {
        "amount": 89.99,
        "currency": "EUR"
      },
      "stock": 15,
      "images": {
        "main": "/images/products/urban-dreams-print-main.jpg",
        "gallery": [
          "/images/products/urban-dreams-print-1.jpg",
          "/images/products/urban-dreams-print-2.jpg"
        ]
      },
      "specifications": {
        "size": "50x70 cm",
        "material": "Hahnemühle Photo Rag 308g",
        "frame": false,
        "signed": true,
        "numbered": "1/50"
      },
      "category": "print",
      "available": true
    }
  ]
}
```

### Simulación de Latencia

```typescript
// lib/utils/delay.ts
export async function simulateLatency(min: number = 50, max: number = 300) {
  const delay = Math.random() * (max - min) + min;
  await new Promise(resolve => setTimeout(resolve, delay));
}

// lib/services/artworkService.ts
export async function getArtworks(filters?: FilterOptions): Promise<Artwork[]> {
  // Simular latencia de query DB
  await simulateLatency(100, 500);

  const data = await import('@/lib/data/artworks.json');
  let artworks = data.artworks;

  // Aplicar filtros
  if (filters?.category) {
    artworks = artworks.filter(a => a.category === filters.category);
  }

  // ... más filtros

  return artworks;
}
```

---

## 🌐 Internacionalización (i18n)

### Configuración next-intl

#### `i18n/request.ts`
```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

#### `i18n/routing.ts`
```typescript
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'always' // Siempre incluir locale en URL para evitar bugs en desarrollo
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

> **Nota:** Se cambió `localePrefix` de `'as-needed'` a `'always'` para evitar bugs de caching del router en modo desarrollo.

#### `middleware.ts`
```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

#### `src/app/page.tsx` (Root redirect)
```typescript
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/es');
}
```

> **Nota:** Se creó una página root que redirige al locale por defecto para evitar que `/` no tenga contenido.

### Traducciones

#### `i18n/messages/es.json`
```json
{
  "nav": {
    "home": "Inicio",
    "gallery": "Galería",
    "shop": "Tienda",
    "about": "Sobre Mí",
    "contact": "Contacto"
  },
  "gallery": {
    "title": "Mi Galería",
    "filters": {
      "category": "Categoría",
      "technique": "Técnica",
      "location": "Ubicación",
      "color": "Color",
      "size": "Tamaño"
    }
  },
  "shop": {
    "addToCart": "Añadir al Carrito",
    "soldOut": "Agotado",
    "limitedEdition": "Edición Limitada"
  }
}
```

---

## 🖼️ Optimización de Imágenes

### Estrategia de Carga de Imágenes

```typescript
// Componente optimizado
import Image from 'next/image';

export function ArtworkImage({ artwork }: { artwork: Artwork }) {
  return (
    <Image
      src={artwork.images.main}
      alt={artwork.title.es}
      width={1200}
      height={800}
      quality={85}
      placeholder="blur"
      blurDataURL={artwork.images.blur}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading="lazy" // Lazy para imágenes below-fold
      className="object-cover transition-transform duration-500 hover:scale-105"
    />
  );
}
```

### Generación de Blur Placeholders

```typescript
// Script para generar placeholders (ejecutar en build)
// scripts/generate-placeholders.ts
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function generateBlurPlaceholder(imagePath: string) {
  const buffer = await sharp(imagePath)
    .resize(20) // Muy pequeño
    .blur()
    .toBuffer();

  const base64 = `data:image/jpeg;base64,${buffer.toString('base64')}`;
  return base64;
}
```

### next.config.mjs - Configuración de Imágenes

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
```

---

## ⚡ Performance y Web Vitals

### Objetivos de Performance

```
✅ Lighthouse Score
- Performance: >95
- Accessibility: >95
- Best Practices: >95
- SEO: 100

✅ Core Web Vitals
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

✅ Otros Métricas
- TTFB (Time to First Byte): <600ms
- FCP (First Contentful Paint): <1.8s
- TTI (Time to Interactive): <3.5s
```

### Técnicas de Optimización

1. **Code Splitting Automático**
   - Next.js lo hace por defecto con App Router
   - Componentes dinámicos con `next/dynamic`

2. **Font Optimization**
   ```typescript
   // app/[locale]/layout.tsx
   import { Inter, Montserrat } from 'next/font/google';

   const inter = Inter({
     subsets: ['latin'],
     display: 'swap',
     variable: '--font-inter'
   });

   const montserrat = Montserrat({
     subsets: ['latin'],
     weight: ['700', '800'],
     display: 'swap',
     variable: '--font-montserrat'
   });
   ```

3. **Suspense Boundaries Estratégicos**
   ```typescript
   // Cargar filtros sin bloquear contenido principal
   <Suspense fallback={null}>
     <FiltersPanel />
   </Suspense>
   ```

4. **Prefetching Inteligente**
   ```typescript
   // next-intl Link hace prefetch automático
   <Link href="/gallery" prefetch={true}>
     Galería
   </Link>
   ```

5. **Route Segment Config**
   ```typescript
   // Para páginas estáticas
   export const dynamic = 'force-static';
   export const revalidate = false;

   // Para páginas dinámicas optimizadas
   export const dynamic = 'force-dynamic';
   export const fetchCache = 'force-no-store';
   ```

---

## 🔒 SEO Optimization

### Metadata por Página

```typescript
// app/[locale]/gallery/[slug]/page.tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: { locale: string; slug: string }
}): Promise<Metadata> {
  const artwork = await getArtworkBySlug(params.slug);
  const t = await getTranslations({ locale: params.locale });

  return {
    title: `${artwork.title[params.locale]} | ${t('site.name')}`,
    description: artwork.description[params.locale],
    openGraph: {
      title: artwork.title[params.locale],
      description: artwork.description[params.locale],
      images: [
        {
          url: artwork.images.main,
          width: 1200,
          height: 630,
          alt: artwork.title[params.locale],
        }
      ],
      locale: params.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: artwork.title[params.locale],
      description: artwork.description[params.locale],
      images: [artwork.images.main],
    },
    alternates: {
      canonical: `/${params.locale}/gallery/${params.slug}`,
      languages: {
        'es': `/es/gallery/${params.slug}`,
        'en': `/en/gallery/${params.slug}`,
      }
    }
  };
}
```

### Sitemap Dinámico

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getArtworks } from '@/lib/services/artworkService';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tu-dominio.com';
  const artworks = await getArtworks();

  const artworkUrls = artworks.flatMap((artwork) => [
    {
      url: `${baseUrl}/es/gallery/${artwork.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/gallery/${artwork.slug}`,
          en: `${baseUrl}/en/gallery/${artwork.slug}`,
        }
      }
    }
  ]);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...artworkUrls,
  ];
}
```

### robots.txt

```typescript
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://tu-dominio.com/sitemap.xml',
  };
}
```

---

## 🚀 Fases de Implementación

### Fase 1: Setup Inicial (Semana 1 - Días 1-3)
**Duración:** 3 días
**Prioridad:** CRÍTICA

#### Tareas
- [ ] Inicializar proyecto con Next.js 15+ usando pnpm
  ```bash
  pnpm create next-app@latest next-renders --typescript --tailwind --app --src-dir
  ```
- [ ] Configurar TypeScript en modo strict
- [ ] Instalar y configurar ESLint + Prettier
- [ ] Configurar next-intl para i18n
- [ ] Crear estructura de carpetas completa
- [ ] Configurar Git + Husky
- [ ] Crear mocks JSON iniciales
- [ ] Configurar Tailwind con tema graffiti
- [ ] Primer commit

#### Entregables
✅ Proyecto inicializado y configurado
✅ Estructura de carpetas completa
✅ Configuraciones base funcionando

---

### Fase 2: Layout y Navegación (Semana 1 - Días 4-7)
**Duración:** 4 días
**Prioridad:** ALTA
**Estado:** ✅ COMPLETADA

#### Tareas
- [x] Implementar layout raíz con i18n (`[locale]/layout.tsx`)
- [x] Crear Header con navegación (Client Component)
- [x] Implementar LanguageSwitcher con `router.refresh()` para fix de desarrollo
- [x] Crear Footer
- [x] Implementar middleware de i18n con `localePrefix: 'always'`
- [x] Configurar fonts (Inter, Montserrat)
- [x] Crear componentes UI base (Button, Card, Input, Modal)
- [x] Implementar tema grayscale elegante con CSS variables
- [x] Splash Screen con CSS animations (solo en home page)
- [x] Añadir `setRequestLocale` en layout para static rendering
- [x] Crear root page redirect a `/es`

#### Entregables
✅ Layout completo funcionando
✅ Navegación con i18n (funcionando en dev y prod)
✅ Componentes UI base con hover states
✅ Splash screen animado (solo en home)
✅ Paleta grayscale elegante implementada

#### Notas Técnicas
- **i18n bugs resueltos:** Switch de idioma, carga de EN, redirect de root
- **GSAP reemplazado:** Ahora usa react-magic-motion y CSS animations
- **Splash optimizado:** Solo se muestra en home page, no bloquea otras páginas

---

### Fase 3: Home Page (SSG) (Semana 2 - Días 1-3)
**Duración:** 3 días
**Prioridad:** ALTA

#### Tareas
- [ ] Diseñar y maquetar Home Page
- [ ] Implementar hero section con GSAP animations
- [ ] Sección "Featured Works" (Grid de 6 obras destacadas)
- [ ] Sección "About Preview"
- [ ] Call-to-action a Gallery y Shop
- [ ] Configurar `force-static` para SSG
- [ ] Optimizar imágenes del hero
- [ ] Implementar metadata y SEO
- [ ] Testing de performance (Lighthouse)

#### Entregables
✅ Home page completamente estática (SSG)
✅ Animaciones funcionando
✅ Score Lighthouse >90

---

### Fase 4: Galería - Página Principal (SSR) (Semana 2 - Días 4-7)
**Duración:** 4 días
**Prioridad:** ALTA

#### Tareas
- [ ] Crear mock completo de artworks (30-50 obras)
- [ ] Implementar `artworkService.ts` con latencia simulada
- [ ] Crear página Gallery (`/[locale]/gallery/page.tsx`)
- [ ] Configurar SSR con `force-dynamic`
- [ ] Implementar ArtworkGrid (Server Component)
- [ ] Crear ArtworkCard optimizado
- [ ] Implementar Filters component (Client)
- [ ] Hook `useFilters` con URL search params
- [ ] Suspense boundaries con skeletons
- [ ] Animaciones de entrada con GSAP (stagger)
- [ ] Lazy loading de imágenes
- [ ] Testing de filtros

#### Entregables
✅ Galería con SSR funcionando
✅ Filtros operativos
✅ Performance óptimo con streaming

---

### Fase 5: Galería - Detalle de Obra (ISR) (Semana 3 - Días 1-3)
**Duración:** 3 días
**Prioridad:** ALTA

#### Tareas
- [ ] Crear página detalle (`/[locale]/gallery/[slug]/page.tsx`)
- [ ] Configurar ISR con `revalidate = 3600`
- [ ] Implementar `generateStaticParams` para top 20 obras
- [ ] Crear ImageViewer con zoom (GSAP)
- [ ] Galería de imágenes adicionales
- [ ] Información detallada de la obra
- [ ] Obras relacionadas
- [ ] Botón "Ver en mapa" (ubicación)
- [ ] Share buttons (redes sociales)
- [ ] Metadata dinámica con Open Graph
- [ ] Testing ISR (verificar revalidación)

#### Entregables
✅ Página detalle con ISR
✅ ImageViewer funcional
✅ SEO completo

---

### Fase 6: Tienda - Página Principal (SSR) (Semana 3 - Días 4-7)
**Duración:** 4 días
**Prioridad:** ALTA

#### Tareas
- [ ] Crear mock de productos (20-30 productos)
- [ ] Implementar `productService.ts`
- [ ] Crear página Shop (`/[locale]/shop/page.tsx`)
- [ ] Configurar SSR
- [ ] Implementar ProductGrid
- [ ] Crear ProductCard con precio y stock
- [ ] Filtros de productos (categoría, precio, disponibilidad)
- [ ] Badge "Sold Out" / "Limited Edition"
- [ ] Sorting (precio, popularidad, novedad)
- [ ] Suspense para streaming
- [ ] Animaciones

#### Entregables
✅ Tienda con SSR
✅ Filtros y sorting
✅ UI de e-commerce profesional

---

### Fase 7: Tienda - Detalle y Carrito (Semana 4 - Días 1-4)
**Duración:** 4 días
**Prioridad:** MEDIA-ALTA

#### Tareas
- [ ] Página detalle producto (ISR, revalidate 1800)
- [ ] `generateStaticParams` para productos disponibles
- [ ] Galería de imágenes del producto
- [ ] Especificaciones técnicas
- [ ] Selector de variantes (si aplica)
- [ ] Botón "Add to Cart" (Client Component)
- [ ] Implementar `useCart` hook con LocalStorage
- [ ] Cart sidebar (Client Component)
- [ ] Update quantities
- [ ] Remove items
- [ ] Cart total
- [ ] Checkout placeholder (sin pago real)

#### Entregables
✅ Detalle producto con ISR
✅ Carrito funcional
✅ Persistencia en LocalStorage

---

### Fase 8: Páginas Secundarias (SSG) (Semana 4 - Días 5-7)
**Duración:** 3 días
**Prioridad:** MEDIA

#### Tareas
- [ ] Página About (`/[locale]/about/page.tsx` - SSG)
  - Bio del artista
  - Trayectoria
  - Filosofía artística
  - Foto del artista
- [ ] Página Contact (`/[locale]/contact/page.tsx` - SSG)
  - Formulario de contacto (Client)
  - Redes sociales
  - Email
- [ ] Página 404 personalizada
- [ ] Error page personalizada
- [ ] Loading states

#### Entregables
✅ About page completa
✅ Contact page con formulario
✅ Error handling

---

### Fase 9: API Routes (Semana 5 - Días 1-3)
**Duración:** 3 días
**Prioridad:** MEDIA

#### Tareas
- [ ] API Route: GET `/api/artworks` (con filtros)
- [ ] API Route: GET `/api/artworks/[id]`
- [ ] API Route: GET `/api/products` (con filtros)
- [ ] API Route: GET `/api/products/[id]`
- [ ] API Route: POST `/api/contact` (enviar form)
- [ ] Validación de inputs con Zod
- [ ] Rate limiting básico
- [ ] Error handling consistente
- [ ] Testing de APIs

#### Entregables
✅ API Routes funcionando
✅ Validación implementada
✅ Documentación de endpoints

---

### Fase 10: Optimización de Imágenes (Semana 5 - Días 4-7)
**Duración:** 4 días
**Prioridad:** ALTA

#### Tareas
- [ ] Generar blur placeholders para todas las imágenes
- [ ] Optimizar tamaños de imágenes (sharp script)
- [ ] Configurar `next/image` con sizes óptimos
- [ ] Implementar progressive loading
- [ ] Lazy loading para imágenes below-fold
- [ ] Priority para LCP images
- [ ] Convertir a AVIF/WebP
- [ ] Testing de performance con Lighthouse
- [ ] Verificar LCP < 2.5s

#### Entregables
✅ Todas las imágenes optimizadas
✅ Blur placeholders generados
✅ LCP mejorado significativamente

---

### Fase 11: Animaciones con react-magic-motion y CSS (Semana 6 - Días 1-3)
**Duración:** 3 días
**Prioridad:** MEDIA

#### Tareas
- [ ] Configurar react-magic-motion para animaciones complejas
- [ ] Gallery grid stagger animation con MagicMotion
- [ ] Image hover effects con CSS transitions
- [ ] Filter panel animations con CSS
- [ ] Cart sidebar slide-in con CSS transforms
- [ ] Scroll-triggered animations (IntersectionObserver)
- [ ] Parallax effects (hero section) con CSS
- [ ] Testing de performance (no afectar FPS)
- [ ] Respetar `prefers-reduced-motion`

#### Entregables
✅ Animaciones implementadas con react-magic-motion y CSS
✅ No impacto negativo en performance
✅ Bundle size optimizado (sin GSAP)

> **Nota:** GSAP fue reemplazado por react-magic-motion y CSS animations para reducir el bundle size y mejorar performance.

---

### Fase 12: SEO y Metadata (Semana 6 - Días 4-7)
**Duración:** 4 días
**Prioridad:** ALTA

#### Tareas
- [ ] Metadata dinámica en todas las páginas
- [ ] Open Graph images personalizadas
- [ ] Twitter Cards
- [ ] Structured Data (JSON-LD) para obras y productos
- [ ] Sitemap.xml dinámico
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] hreflang tags para i18n
- [ ] Testing con herramientas SEO
- [ ] Google Search Console setup

#### Entregables
✅ SEO completo implementado
✅ Score SEO: 100/100
✅ Rich snippets funcionando

---

### Fase 13: Testing y QA (Semana 7 - Días 1-4)
**Duración:** 4 días
**Prioridad:** ALTA

#### Tareas
- [ ] Testing de todas las páginas en ambos idiomas
- [ ] Verificar estrategias de renderizado
- [ ] Testing de filtros exhaustivo
- [ ] Testing de carrito
- [ ] Testing responsive (mobile, tablet, desktop)
- [ ] Testing cross-browser
- [ ] Lighthouse audit completo
- [ ] Accessibility audit (WCAG AA)
- [ ] Fix de bugs encontrados
- [ ] Performance profiling
- [ ] Verificar Core Web Vitals

#### Entregables
✅ Todos los bugs críticos resueltos
✅ Lighthouse >95 en todas las categorías
✅ Responsive perfecto

---

### Fase 14: Documentación (Semana 7 - Días 5-7)
**Duración:** 3 días
**Prioridad:** ALTA

#### Tareas
- [ ] Crear `docs/architecture.md`
  - Estructura de carpetas explicada
  - Patrones utilizados
  - Decisiones técnicas
- [ ] Crear `docs/rendering-strategies.md`
  - Tabla con todas las páginas
  - Estrategia de cada una
  - Justificación detallada
  - Code snippets
- [ ] Actualizar README.md
  - Setup instructions
  - Scripts disponibles
  - Características del proyecto
  - Screenshots
- [ ] Documentar componentes principales
- [ ] Guía de contribución
- [ ] Comentarios en código complejo

#### Entregables
✅ Documentación completa
✅ Código comentado apropiadamente
✅ README profesional

---

## 📋 TODO.md - Lista de Tareas Progresivas

**Archivo:** `TODO.md`

Este archivo será creado para que la IA pueda ir completando tareas progresivamente. Tendrá checkboxes y será actualizado constantemente.

---

## 🔧 Scripts y Comandos

### package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,json,css}\"",
    "type-check": "tsc --noEmit",
    "analyze": "ANALYZE=true next build",
    "generate-placeholders": "tsx scripts/generate-placeholders.ts"
  }
}
```

### Comandos Iniciales

```bash
# Crear proyecto
pnpm create next-app@latest next-renders --typescript --tailwind --app --src-dir

# Instalar dependencias principales
pnpm add next-intl gsap

# Instalar dependencias de desarrollo
pnpm add -D @types/node typescript eslint prettier eslint-config-prettier husky lint-staged

# Inicializar Git hooks
pnpm dlx husky init
```

---

## 📈 Métricas de Éxito

### Learning Goals Achievement
- ✅ Implementar al menos 3 estrategias de renderizado diferentes
- ✅ Usar Server Components y Client Components correctamente
- ✅ Implementar ISR con revalidación
- ✅ Usar streaming con Suspense
- ✅ I18n completo con next-intl
- ✅ Optimización de imágenes avanzada

### Performance Metrics
```
Target Lighthouse Scores:
- Performance: >95
- Accessibility: >95
- Best Practices: >95
- SEO: 100

Core Web Vitals:
- LCP: <2.5s ✅
- FID: <100ms ✅
- CLS: <0.1 ✅
```

### Code Quality
- TypeScript strict mode sin errores
- 0 ESLint errors
- Código comentado en secciones complejas
- Componentes reutilizables y modulares

---

## 🎓 Learnings Esperados

### Conceptos Next.js a Dominar

1. **App Router**
   - File-based routing
   - Layouts anidados
   - Route groups
   - Dynamic routes
   - Parallel routes (opcional)

2. **Rendering Strategies**
   - SSG con `force-static`
   - SSR con `force-dynamic`
   - ISR con `revalidate`
   - Streaming con Suspense
   - Partial Prerendering (cuando esté stable)

3. **Data Fetching**
   - Server Components data fetching
   - Fetch con cache options
   - Route handlers
   - Server Actions (no usar)

4. **Optimizations**
   - Image optimization con next/image
   - Font optimization
   - Metadata API
   - Script optimization

5. **Internationalization**
   - next-intl setup
   - Server/Client components con i18n
   - Routing localizado
   - Metadata localizada

---

## 🚨 Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Over-engineering por querer usar todo | Alta | Medio | Mantener MVP claro, no forzar features |
| Performance issues con GSAP | Media | Alto | Profiling constante, usar GPU acceleration |
| Complejidad de filtros | Media | Medio | Empezar simple, iterar |
| ISR no funcionando como esperado | Baja | Medio | Testing exhaustivo de revalidación |
| Imágenes muy pesadas | Alta | Alto | Script de optimización obligatorio |

---

## 📚 Referencias y Recursos

### Documentación Oficial
- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [next-intl Docs](https://next-intl-docs.vercel.app/)
- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Artículos Clave
- [Next.js Rendering Strategies](https://nextjs.org/docs/app/building-your-application/rendering)
- [Image Optimization Best Practices](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Core Web Vitals](https://web.dev/vitals/)

### Inspiración de Diseño
- Dribbble: "graffiti portfolio"
- Behance: "street art website"
- Awwwards: Dark theme galleries

---

## ✅ Checklist Pre-Launch

### Funcionalidad
- [ ] Todas las páginas accesibles
- [ ] Filtros funcionando correctamente
- [ ] Carrito persistiendo en LocalStorage
- [ ] Formulario de contacto enviando
- [ ] Cambio de idioma sin errores
- [ ] Todas las imágenes cargando

### Performance
- [ ] Lighthouse >95 en todas las páginas
- [ ] LCP <2.5s
- [ ] CLS <0.1
- [ ] No hay console errors
- [ ] Bundle size optimizado

### SEO
- [ ] Todas las páginas tienen metadata
- [ ] Sitemap.xml generándose
- [ ] robots.txt configurado
- [ ] Structured data implementado
- [ ] hreflang tags presentes

### Accesibilidad
- [ ] Navegación por teclado funciona
- [ ] ARIA labels presentes
- [ ] Contraste de colores suficiente
- [ ] Screen reader friendly

### Documentación
- [ ] README completo
- [ ] architecture.md creado
- [ ] rendering-strategies.md detallado
- [ ] Código comentado

---

## 🎯 Próximos Pasos Inmediatos

### Esta Semana
1. ✅ **Revisar este plan** con el equipo (tú)
2. **Ejecutar comandos de setup**
   ```bash
   pnpm create next-app@latest next-renders --typescript --tailwind --app --src-dir
   cd next-renders
   pnpm add next-intl gsap
   pnpm add -D husky lint-staged prettier
   ```
3. **Crear estructura de carpetas**
4. **Configurar TypeScript strict**
5. **Setup inicial de i18n**
6. **Crear TODO.md**
7. **Primer commit**

---

## 📝 Notas Finales

Este proyecto está diseñado específicamente para:
- **Aprender haciendo**: Cada feature de Next.js se usa en un contexto real
- **Best practices**: Arquitectura limpia, TypeScript estricto, código mantenible
- **Portfolio real**: Resultado final es un sitio web profesional y usable
- **Documentación exhaustiva**: Cada decisión está justificada

El enfoque es **progresivo y organizado**, con fases claras y entregables concretos. La IA puede seguir el TODO.md e ir completando tareas de forma incremental.

---

**Última Actualización:** Enero 20, 2026
**Versión:** 2.1
**Autor:** Cristian
**Objetivo:** Dominar Next.js 16+ mediante proyecto real

---

## 📝 Changelog

### v2.1 (Enero 20, 2026)
- ✅ Fase 2 completada con ajustes
- Cambio de paleta de colores: graffiti neón → grayscale elegante
- Reemplazo de GSAP por react-magic-motion
- Fix de bugs i18n (switch, EN loading, root redirect)
- Splash screen movido solo a home page
- Añadido `setRequestLocale` y `router.refresh()` para fix de desarrollo

### v2.0 (Enero 20, 2026)
- Documento inicial de planificación
- 14 fases definidas
- Stack técnico completo

---

## 🎨 Extras Opcionales (Post-MVP)

Si el tiempo lo permite, considerar:
- [ ] Dark/Light mode toggle
- [ ] Admin panel para gestionar obras
- [ ] Sistema de likes/favorites
- [ ] Comments system
- [ ] Newsletter subscription
- [ ] Blog section
- [ ] Integration con Instagram API
- [ ] Google Maps integration para ubicaciones
- [ ] Video gallery support
- [ ] PWA features
