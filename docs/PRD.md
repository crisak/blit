# PRD

**Versión:** 2.0 — MVP

**Estado:** ✏️ Draft

**Fecha:** 24 ****Marzo 2026 - 3:45 AM

---

# 1. Resumen Ejecutivo

Sitio web de portafolio para el artista callejero colombiano **Pablo Guerrero (Blito)**, con +10 años de trayectoria y +50 obras. Objetivo: mostrar su obra de forma visual e inmersiva, generar oportunidades de contratación (murales, marcas, instituciones, prensa) y centralizar el contacto profesional. **No es e-commerce** → para eso existe [www.ilegales.co](http://www.ilegales.co).

---

# 2. Contexto y Problema

Blito es referente del arte callejero en Colombia, miembro de Sabor Latino Crew y líder del proyecto Ilegales en Soacha. No cuenta con un espacio digital que centralice su obra profesionalmente, permita cotizar trabajos, visualice su huella geográfica ni compita en calidad visual con referentes internacionales (Okuda San Miguel, Fintan Magee, Shepard Fairey, JR).

---

# 3. Objetivos del Producto

| Objetivo | Métrica de éxito |
| --- | --- |
| Mostrar trayectoria completa | 100% de proyectos con ficha completa |
| Generar contacto para encargos | Formulario + WhatsApp activos desde día 1 |
| SEO posicionamiento | Indexación correcta de todas las páginas `/projects/[slug]` |
| Diferenciación visual | Animaciones al nivel de [okudasanmiguel.com](http://okudasanmiguel.com) |
| Mapear huella artística | Mapa interactivo con todos los puntos geolocalizados |
| Conversión visitante → cliente | CTA visible en cada página, formulario segmentado |

---

# 4. Usuarios Objetivo

## 4.1 Usuario Primario — El Artista

Pablo Guerrero / Blito. Manejo básico-intermedio digital. En MVP el contenido es estático (CMS fuera del alcance).

## 4.2 Usuarios Secundarios — Visitantes

| Perfil | Objetivo |
| --- | --- |
| Marcas / empresas | Cotizar mural o encargo artístico |
| Medios / prensa | Información para cobertura o entrevista |
| Galerías / curadores | Evaluar trayectoria y estilo |
| Público general | Descubrir y explorar la obra |
| Artistas / colectivos | Colaboraciones |

---

# 5. Alcance del MVP

## ✅ Incluido

- Sitio estático con datos mockeados vía BFF (Next.js `/app/api/`)
- Todas las páginas definidas en este documento
- Mapa interactivo (React-Leaflet + Mapbox tiles, dark style)
- Galería con layout puzzle/masonry y filtros
- Contacto: WhatsApp + formulario segmentado
- SEO base (SSG/ISR)
- Responsive mobile-first
- Animaciones: GSAP + Framer Motion + Lenis
- Dark mode base (`#121212`)

## ❌ Fuera del MVP

- CMS / dashboard (autenticación, CRUD)
- Backend Go + AWS Lambda + Pulumi
- Integración S3
- Base de datos
- E-commerce
- Multi-idioma (inglés a futuro)
- Blog

---

# 6. Stack Tecnológico

## 6.1 Frontend

| Capa | Tecnología | Rol |
| --- | --- | --- |
| Framework | **Next.js 16** | SSG / ISR / SSR, SEO, routing |
| Estilos | **shadcn/ui** (custom) | Sistema de diseño base |
| Validación | **Zod** | Tipado de contratos |
| Estado | **Zustand** | Estado UI (filtros, modales, mapa) |
| Animaciones complejas | **GSAP** (ScrollTrigger, Timeline) | Scroll, hero, parallax, pin |
| Micro-interacciones | **Framer Motion** | Transiciones de página, hovers |
| Scroll suave | **Lenis** | Scroll cinematográfico + GSAP |
| Mapa | **MapCN** | Mapa de obras (dark tiles, markers custom) |
| Galería | **react-masonry-css** | Layout puzzle/masonry |

## 6.2 BFF (Backend For Frontend)

| Capa | Tecnología | Rol |
| --- | --- | --- |
| API Routes | Next.js `/app/api/` | Mock data para MVP |
| Archivos | `/public/` | Imágenes, videos, GIFs |
| Futuro | Go + AWS Lambda + Pulumi | API real post-MVP |

> El BFF es el único contrato entre cliente y datos. Cuando el backend en Go esté listo, el BFF adapta la respuesta sin afectar al cliente.
> 

---

# 7. Arquitectura de Información

```
/ (Home)
├── /projects              → Galería principal
│   └── /projects/[slug]   → Página individual de proyecto
├── /map                   → Mapa interactivo
├── /about                 → Sobre Blito
└── /contact               → Contacto y cotización
```

Next.js i18n routing (`/en/projects/[slug]`) resuelve la futura versión en inglés sin reestructurar.

---

# 8. Descripción de Páginas

## 8.1 Home `/`

**Objetivo:** Primera impresión. Capturar en menos de 3 segundos la esencia visual de Blito.

### Hero (100vh)

- Video de fondo en loop (15-20s, muted, time-lapse de mural) con fallback a imagen estática
- **"BLITO"** en tipografía display oversized (kinetic typography)
- Tagline: *"Arte callejero · Colombia"*
- 2 CTAs: `Ver portafolio` → `/projects` | `Cotizar trabajo` → `/contact`
- Animación de entrada con GSAP Timeline (secuencia orquestada)
- Efecto parallax profundo al scroll (inspiración: Rockstar Games VI)

### Proyectos Destacados

- 4-6 proyectos curados, layout asimétrico con overlapping
- Hover: imagen escala + título/categoría aparece
- Cursor personalizado al hovear imágenes (inspiración: [okudasanmiguel.com](http://okudasanmiguel.com))
- CTA: `Ver todos los proyectos`

### Blito en Números

- Contadores animados: **+10 años | +50 murales | X ciudades | X m² pintados**
- Tipografía grande, reveal al scroll

### Sobre Blito (extracto)

- Foto del artista pintando + bio de 2-3 líneas
- Fondo artístico oscuro + mini-galería flotante (inspiración: [retna.com](http://retna.com))
- CTA: `Conoce mi historia` → `/about`

### Huella en Colombia (teaser mapa)

- Preview del mapa con 3-4 pins destacados + estadística de departamentos
- CTA: `Ver todas las obras en el mapa` → `/map`

### Colaboraciones

- Logo bar en escala de grises: "Han confiado en mi trabajo"
- Marquee horizontal o grid estático

### Colectivos y Vínculos

- Logos/íconos de: @ilegales.col + [ilegales.co](http://ilegales.co), @saborlatinocrewoficial, @saborlatinocallejero

### Footer

- Redes: Instagram, Threads, Facebook, WhatsApp
- Enlace a [ilegales.co](http://ilegales.co)
- Créditos del sitio

---

## 8.2 Proyectos `/projects`

**Objetivo:** Explorar y filtrar toda la obra (+50 proyectos).

### Layout

- Grid tipo **puzzle/masonry/tetris** (`react-masonry-css`)
- Soporte: JPG, PNG, WebP, GIF, MP4, YouTube embed
- Cada tarjeta: imagen poster + título + categoría/tags
- Hover: escala suave + overlay con datos

### Sistema de Categorización

**Categorías fijas** (filtro principal, define URLs y arquitectura):

| Categoría | Contenido |
| --- | --- |
| **Murales urbanos** | Arte público, festivales, trabajo personal callejero |
| **Murales comerciales** | Comisiones para marcas, empresas, interiores |
| **Galería** | Obra en lienzo, papel, cuadros |
| **Comunidad** | Proyectos sociales, talleres Ilegales, eventos participativos |

**Tags secundarios** (filtros dentro de cada categoría):

- Año (2015-2026)
- Ciudad / departamento
- Técnica (spray, acrílico, mixta)
- Escala (pequeña, mediana, gran formato)

### Filtros disponibles

- Por categoría (tabs visuales, no en navbar — inspiración: [dface.co.uk](http://dface.co.uk))
- Por ciudad/departamento
- Por tags
- Buscador de texto libre

### Carga

- Infinite scroll con cursor-based pagination (12-16 items iniciales)
- Intersection Observer para cargas adicionales
- Preservar posición de scroll al volver del detalle

---

## 8.3 Proyecto Individual `/projects/[slug]`

**Objetivo:** Mostrar el proyecto completo como un case study visual.

### Estructura de datos

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `title` | string | Título del proyecto |
| `slug` | string | Identificador URL |
| `poster` | image | Imagen principal/portada |
| `description` | rich text | Narrativa del proyecto |
| `city` | string | Ciudad |
| `department` | string | Departamento |
| `coordinates` | lat/lng | Para el mapa |
| `tags` | string[] | Etiquetas temáticas |
| `category` | enum | murales_urbanos / murales_comerciales / galeria / comunidad |
| `palette` | hex[] | Colores predominantes |
| `media` | Media[] | Galería: imágenes, GIFs, videos, YouTube |
| `date` | date | Fecha de realización |
| `collaborators` | string[] | Artistas colaboradores (opcional) |

### Variantes de presentación por tipo

**Murales** (formato case study): galería 5-10 fotos (vista general, detalles, contexto urbano), sección colapsable de proceso (boceto → progreso → final), narrativa de 2-3 párrafos.

**Cuadros**: 1-3 fotos, descripción breve, dimensiones.

**Proyectos comunitarios**: galería extensa, descripción con objetivos y participantes, video si existe, lista de partners.

### Elementos de página

- Galería interna con navegación (1 o N medios por proyecto)
- Visualización de paleta de colores (chips)
- Navegación anterior/siguiente proyecto
- CTA: `¿Quieres una obra como esta? Cotiza aquí` → `/contact`
- Obras relacionadas por ubicación o temática

---

## 8.4 Mapa `/map`

**Objetivo:** Visualizar la huella geográfica de Blito. Feature diferenciador (ningún muralista individual lo tiene).

### Funcionalidades

- Mapa interactivo centrado en Colombia (React-Leaflet + Mapbox dark tiles)
- Cada obra = marcador con thumbnail custom
- Click en marcador → popup con imagen, título, ciudad, link a `/projects/[slug]`
- Contador de obras por departamento (tooltip o panel lateral)
- Clustering para rendimiento con muchos puntos
- Importación dinámica con `ssr: false` (Leaflet requiere DOM)

### Filtros

- Por categoría
- Por rango de fechas (opcional en MVP)

### Diseño

- Estilo artístico, no utilitario. Mapa oscuro/custom que combine con la identidad
- Inspiración: [okudasanmiguel.com/worldwide/](http://okudasanmiguel.com/worldwide/)

---

## 8.5 Sobre Blito `/about`

**Objetivo:** Humanizar al artista y generar confianza profesional.

### Contenido

- Foto principal: Blito pintando en acción (andamio, spray, gran escala)
- Bio híbrida: tercera persona profesional + secciones en primera persona
- Statement artístico (filosofía, temas, por qué pinta en la calle)
- Datos clave: nombre artístico y real, origen, colectivos
- Línea de tiempo visual de carrera (hitos importantes)
- Colectivos y proyectos vinculados con links
- CV descargable en PDF (estándar para curadores/galerías)
- CTA: `Contáctame` → `/contact`

### Bio base

> *"El artista de arte callejero conocido como Blito cuenta con 10 años de trayectoria en el sector cultural y forma parte del colectivo Sabor Latino Crew. Actualmente lidera el proyecto 'Ilegales' en el barrio Olivos, Soacha, un espacio dedicado a la pedagogía, la entrega de insumos artísticos y la creación de murales de esperanza."*
> 

---

## 8.6 Contacto `/contact`

**Objetivo:** Puente para encargos, cotizaciones y prensa. Convertir en menos de 1 minuto.

### Formulario segmentado

**Campos siempre visibles:** nombre, email, tipo de proyecto (dropdown), mensaje.

**Campos condicionales** según selección del tipo:

| Tipo | Campos adicionales |
| --- | --- |
| Mural comercial | Ubicación, dimensiones aprox., interior/exterior, timeline, rango presupuesto |
| Encargo artístico | Descripción, timeline |
| Prensa / Medios | Medio, tipo de solicitud, deadline |
| Otro | Solo mensaje |

Validación con Zod en BFF. Auto-respuesta confirmando recepción (48h).

### WhatsApp directo

Botón flotante persistente en todo el sitio. Número: `+57 312 357 4867`. Mensaje pre-cargado según contexto.

### Redes sociales

- Instagram: [@blito.col](https://www.instagram.com/blito.col/)
- Threads: @blito.col
- Facebook: [libreton94](https://www.facebook.com/libreton94)
- Colectivos: @ilegales.col, @saborlatinocrewoficial, @saborlatinocallejero
- Commerce: [www.ilegales.co](http://www.ilegales.co)

---

# 9. Experiencia Visual y Animación

## 9.1 Principios de Diseño

| Principio | Descripción |
| --- | --- |
| El sitio es arte | Cada sección es una obra en sí misma |
| Scroll como narrativa | El scroll cuenta la historia de Blito |
| Imágenes protagonistas | La UI es el marco, no el cuadro |
| Fluidez cinematográfica | Lenis: ningún movimiento brusco |
| Identidad callejera | Estética urbana: crudo, expresivo, con textura |
| Dark mode | Base `#121212` (no negro puro). Colores vibrantes resaltan |

## 9.2 Sistema de Animaciones

| Herramienta | Uso |
| --- | --- |
| GSAP Timeline | Entrada del hero, secuencias de aparición |
| GSAP ScrollTrigger | Parallax, pin de secciones, reveal al scroll |
| Framer Motion | Transiciones entre páginas, hovers, micro-interacciones |
| Lenis | Scroll suave integrado con GSAP ScrollTrigger |

## 9.3 Interacciones Específicas

| Interacción | Inspiración |
| --- | --- |
| Hero con transformación de scroll profundo | [rockstargames.com/VI](http://rockstargames.com/VI) |
| Cursor personalizado en imágenes | [okudasanmiguel.com](http://okudasanmiguel.com) |
| Menú full-page con animaciones hover | [okudasanmiguel.com](http://okudasanmiguel.com) |
| Transiciones de página fluidas | [okudasanmiguel.com](http://okudasanmiguel.com) |
| Parallax en imágenes de proyectos | [okudasanmiguel.com](http://okudasanmiguel.com) |
| Fondo artístico oscuro + mini-galería flotante | [retna.com](http://retna.com) |
| Objetos con movimiento físico al cursor | [wildyriftian.com](http://wildyriftian.com) |
| Categorización visual (no en navbar) | [dface.co.uk](http://dface.co.uk) |

## 9.4 Cursor Personalizado

Cambia forma/tamaño/color al interactuar con: imágenes, botones, links, mapa. Implementado con Framer Motion.

---

# 10. SEO

- SSG para proyectos, ISR para actualizaciones
- Metadata dinámica: `title`, `description`, `og:image`, `og:title` por página
- URLs amigables: `/projects/mural-soacha-2023`
- `sitemap.xml` y `robots.txt` automáticos
- JSON-LD: [Schema.org](http://Schema.org) `Person` + `VisualArtwork`
- Cada obra con su propia URL, metadata y Open Graph

---

# 11. Responsive Design

- **Mobile-first**
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl` (Tailwind/shadcn)
- Mapa funcional en móvil (gestos táctiles)
- Galería adapta grid según ancho
- Animaciones GSAP simplificadas en móvil

---

# 12. Conversión: Estrategia de CTAs

### Ubicación de CTAs

| Ubicación | CTA |
| --- | --- |
| Hero (above the fold) | "Ver portafolio" / "Cotizar trabajo" |
| Final de cada case study | "¿Quieres algo similar? Cotiza aquí" |
| Final de About | "Contáctame" |
| WhatsApp flotante | Persistente en todo el sitio |
| Sección final del home | "¿Tienes un muro? Hagamos algo increíble" |

### Tono

Colaborativo, no transaccional. "Hablemos de tu proyecto" en vez de "Enviar". "Colaboraciones" en vez de "Clientes".

### Precios

- Murales: **no publicar precios fijos**. Indicar que cada proyecto es único + consulta sin compromiso.
- Cuadros/prints: sí incluir precio si aplica.

---

# 13. Datos del Artista (Semilla)

```json
{
  "name": "Pablo Guerrero",
  "artisticName": "Blito",
  "experience": "+10 años",
  "bio": "El artista de arte callejero conocido como Blito cuenta con 10 años de trayectoria en el sector cultural y forma parte del colectivo Sabor Latino Crew. Actualmente lidera el proyecto 'Ilegales' en el barrio Olivos, Soacha, un espacio dedicado a la pedagogía, la entrega de insumos artísticos y la creación de murales de esperanza.",
  "social": {
    "instagram": "https://www.instagram.com/blito.col/",
    "threads": "blito.col",
    "facebook": "https://www.facebook.com/libreton94",
    "whatsapp": "573123574867",
    "collectives": [
      "https://www.instagram.com/ilegales.col/",
      "https://www.instagram.com/saborlatinocrewoficial/",
      "https://www.instagram.com/saborlatinocallejero/"
    ]
  },
  "commerce": "https://www.ilegales.co"
}
```

---

# 14. Contratos de API (BFF)

## `GET /api/projects`

```json
[
  {
    "id": "uuid",
    "slug": "string",
    "title": "string",
    "poster": "string (url)",
    "category": "murales_urbanos | murales_comerciales | galeria | comunidad",
    "city": "string",
    "department": "string",
    "tags": ["string"],
    "date": "ISO 8601",
    "coordinates": { "lat": 0.0, "lng": 0.0 }
  }
]
```

## `GET /api/projects/[slug]`

```json
{
  "id": "uuid",
  "slug": "string",
  "title": "string",
  "poster": "string (url)",
  "description": "string (html o markdown)",
  "category": "murales_urbanos | murales_comerciales | galeria | comunidad",
  "city": "string",
  "department": "string",
  "tags": ["string"],
  "palette": ["#hex"],
  "date": "ISO 8601",
  "coordinates": { "lat": 0.0, "lng": 0.0 },
  "collaborators": ["string"],
  "media": [
    {
      "type": "image | gif | video | youtube",
      "url": "string",
      "caption": "string (opcional)"
    }
  ]
}
```

## `GET /api/map/points`

```json
[
  {
    "projectId": "uuid",
    "slug": "string",
    "title": "string",
    "poster": "string (url)",
    "city": "string",
    "department": "string",
    "category": "murales_urbanos | murales_comerciales | galeria | comunidad",
    "coordinates": { "lat": 0.0, "lng": 0.0 }
  }
]
```

## `POST /api/contact`

**Request:**

```json
{
  "name": "string",
  "email": "string",
  "type": "mural_comercial | encargo | prensa | otro",
  "message": "string",
  "conditionalFields": {}
}
```

**Response:**

```json
{ "success": true }
```

---

# 15. Criterios de Aceptación

| Feature | Criterio |
| --- | --- |
| Hero animado | Animación completa en < 2s; parallax visible al scroll |
| Galería puzzle | Imágenes V y H conviven sin espacios en desktop y móvil |
| Página de proyecto | Todos los campos del contrato renderizados |
| Mapa | Todos los puntos mock visibles; click muestra preview + link |
| Filtros | Categoría, ciudad, tag actualizan grid sin recarga |
| WhatsApp | Botón abre WhatsApp con número y mensaje pre-cargado |
| Formulario | Zod valida; campos condicionales aparecen según tipo; BFF responde `{ success: true }` |
| SEO | Cada proyecto tiene title, description y og:image únicos |
| Responsive | Usable y correcto en 320px+, tablet y desktop |
| Performance | Lighthouse ≥ 85 Performance en desktop |
| Dark mode | Base `#121212`, colores vibrantes resaltan |

---

# 16. Riesgos y Mitigación

| Riesgo | Mitigación |
| --- | --- |
| Performance GSAP + FM + Lenis en móvil | Reducir complejidad en breakpoints pequeños; lazy load |
| Layout puzzle con orientaciones mixtas | `react-masonry-css` o CSS Grid avanzado |
| Videos YouTube en galería | Embed `loading="lazy"`  • placeholder hasta interacción |
| Imágenes alta resolución | `next/image` con WebP/AVIF, `priority` para primeras 4-6, `blur` placeholder |
| Mapa con muchos puntos | Clustering desde el inicio |
| Leaflet + SSR | Importación dinámica `ssr: false` |

---

# 17. Glosario

| Término | Definición |
| --- | --- |
| BFF | Backend For Frontend. Capa intermedia (Next.js API Routes) |
| ISR | Incremental Static Regeneration |
| SSG | Static Site Generation |
| Mock data | Datos ficticios en BFF para MVP |
| Proyecto | Unidad de obra artística (1 o N medios) |
| Puzzle layout | Disposición masonry sin espacios en blanco |
| Case study | Proyecto con narrativa completa (proceso, contexto, galería extensa) |

---

*Documento vivo — actualizar con cada iteración del producto.*