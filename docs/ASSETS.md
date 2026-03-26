# Especificaciones de Assets para Blito Web

**Version**: 1.0  
**Fecha**: 2026-03-25  
**Proposito**: Guia para crear y organizar todos los assets visuales del sitio web

---

## 1. Estructura de Carpetas

```
public/
├── images/
│   ├── gallery/
│   │   ├── banner/
│   │   │   ├── bg-hero.webp          # Hero background
│   │   │   └── ...
│   │   ├── murals/
│   │   │   └── mural-001.webp
│   │   └── projects/
│   │       └── [slug]/
│   │           ├── poster.webp
│   │           └── detail-01.webp
│   ├── brands/
│   │   ├── nike-logo.svg
│   │   └── ...
│   └── og-image.webp
├── videos/
│   └── hero-mural.mp4
└── gifs/
```

---

## 2. Imagenes del Home

### Hero Section

| Asset           | Dimensiones                | Formato     |
| --------------- | -------------------------- | ----------- |
| Video Hero      | 1920x1080 min, 15-20s loop | MP4 (H.264) |
| Poster/Fallback | 1920x1080                  | WebP        |

### Proyectos Destacados

| Asset           | Dimensiones  | Formato |
| --------------- | ------------ | ------- |
| Poster proyecto | 1200x900 min | WebP    |
| Thumbnail grid  | 600x450      | WebP    |

### About Preview

| Asset                   | Dimensiones        | Formato |
| ----------------------- | ------------------ | ------- |
| Foto Blito pintando     | 1200x1500 portrait | WebP    |
| Mini-gallery thumbnails | 300x300            | WebP    |

---

## 3. Mock URLs Temporales (Unsplash) - PARA DESARROLLO

```javascript
// Hero
'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&q=80'

// About Preview (Blito pintando/retrato artistico)
'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=1000&fit=crop'
'https://images.unsplash.com/photo-1578926288207-a90a103fe657?w=400&h=400&fit=crop'
'https://images.unsplash.com/photo-1561069934-eee2259528a6?w=400&h=400&fit=crop'

// Featured Works (6 murales para galeria)
'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=1200&h=900&fit=crop'
'https://images.unsplash.com/photo-1578926288207-a90a103fe657?w=1200&h=900&fit=crop'
'https://images.unsplash.com/photo-1561069934-eee2259528a6?w=1200&h=900&fit=crop'
'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&h=900&fit=crop'
'https://images.unsplash.com/photo-1555448248-2571daf6344b?w=1200&h=900&fit=crop'
'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=1200&h=900&fit=crop'
```

**NOTA:** Reemplazar con assets reales antes de produccion. Ver Seccion 10 para especificaciones de assets finales.

---

## 4. Logos de Marcas (Colaboraciones)

### Especificaciones

- Formato: SVG o PNG con transparencia
- Color: Escala de grises (CSS filter: grayscale)
- Tamano: 150x80px min

### Marcasy Placeholder (reemplazar con logos reales)

- Nike, Adidas, Coca-Cola, Red Bull

---

## 5. Logos de Colectivos

### Requeridos

1. @ilegales.col - SVG vectorial
2. @saborlatinocrewoficial - SVG vectorial
3. @saborlatinocallejero - SVG vectorial

---

## 12. Checklist de Assets

### MVP

- [ ] bg-hero.webp (1920x1080)
- [ ] 4-6 imagenes de murales (1200x900 min) - REEMPLAZAR MOCKS
- [ ] Foto Blito pintando (800x1000) - REEMPLAZAR MOCK
- [ ] 3 mini-obras AboutPreview (300x300) - REEMPLAZAR MOCKS
- [ ] Logos colectivos SVG (@ilegales, @saborlatinocrewoficial, @saborlatinocallejero)
- [ ] spray.png (48x48, fondo transparente) - cursor custom

### Posterior

- [ ] Video hero real (1920x1080, 15-20s loop)
- [ ] Logos marcas reales (Nike, Adidas, Coca-Cola, Red Bull, Puma, Rockstar)
- [ ] GIFs de proceso artistico

---

## 7. Cursor Custom - Spray Can

### Asset Requerido

| Asset     | Dimensiones         | Formato               | Hotspot                                 |
| --------- | ------------------- | --------------------- | --------------------------------------- |
| spray.png | 48x48px (max 64x64) | PNG con transparencia | 16, 16 (esquina superior izq del spray) |

### Especificaciones

- **Fondo:** Transparente (canal alpha)
- **Color:** Blanco o escala de grises
- **Estilo:** Silueta simplificada, no detallada
- **Proposito:** Cursor personalizado para el sitio

### Ubicacion

```
public/images/gallery/utils/
└── spray.png
```

### Nota sobre imagen actual

La imagen actual en `public/images/gallery/utils/spray.png` es 128x128 con fondo blanco solido. Para produccion se recomienda crear una version:

- 48x48px
- Fondo transparente
- Diseño simplificado

---

## 8. Iconografia UI

### Iconos Requeridos

| Icono       | Uso                             | Formato    |
| ----------- | ------------------------------- | ---------- |
| expand (+)  | Galeria - expandir imagen       | SVG inline |
| close (X)   | Modal - cerrar imagen expandida | SVG inline |
| arrow-right | CTAs                            | SVG inline |
| map-pin     | Mapa                            | SVG inline |

**Nota:** Usar Lucide React o similar para consistencia.

---

## 9. Transiciones Cinematograficas

El efecto de transicion cinematografica entre secciones es puramente codigo (GSAP ScrollTrigger). No requiere assets adicionales.

**Efecto implementado:**

- Fade in/out de secciones basado en scroll position
- Parallax diferenciado (fondo se mueve a diferente velocidad que contenido)

---

## 10. Assets Finales para Reemplazar Mocks (Produccion)

### Hero Section

| Asset           | Dimensiones       | Formato   | Notas                            |
| --------------- | ----------------- | --------- | -------------------------------- |
| Video Hero      | 1920x1080, 15-20s | MP4 H.264 | Loop sin fin, mural espectacular |
| Poster/Fallback | 1920x1080         | WebP      | Primer frame del video           |

### About Preview

| Asset               | Dimensiones       | Formato | Notas                            |
| ------------------- | ----------------- | ------- | -------------------------------- |
| Foto Blito pintando | 800x1000 portrait | WebP    | Blito en accion, pintura en mano |
| Obra mini 1         | 300x300           | WebP    | Obra artistica del autor         |
| Obra mini 2         | 300x300           | WebP    | Obra artistica del autor         |
| Obra mini 3         | 300x300           | WebP    | Obra artistica del autor         |

### Featured Works (Galeria - 6 obras minimo)

| Asset         | Dimensiones  | Formato | Notas            |
| ------------- | ------------ | ------- | ---------------- |
| mural-001.jpg | 1200x900 min | WebP    | Obra destacada 1 |
| mural-002.jpg | 1200x900 min | WebP    | Obra destacada 2 |
| mural-003.jpg | 1200x900 min | WebP    | Obra destacada 3 |
| mural-004.jpg | 1200x900 min | WebP    | Obra destacada 4 |
| mural-005.jpg | 1200x900 min | WebP    | Obra destacada 5 |
| mural-006.jpg | 1200x900 min | WebP    | Obra destacada 6 |

**Caracteristicas de imagenes:**

- Alta resolucion (para expand en modal)
- Color real del mural
- Variedad de angulos y estilos

---

## 11. Optimizacion

- Usar WebP/AVIF sobre JPEG
- Next/Image con lazy loading
- Max file sizes: 10MB video, 500KB images
