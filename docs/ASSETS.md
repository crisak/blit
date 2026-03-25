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

## 3. Mock URLs Temporales (Unsplash)

```javascript
// Hero / About
'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&q=80'

// murals
'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=1200&q=80'
'https://images.unsplash.com/photo-1578926288207-a90a103fe657?w=1200&q=80'
'https://images.unsplash.com/photo-1561069934-eee2259528a6?w=1200&q=80'
```

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

## 6. Checklist de Assets

### MVP

- [ ] bg-hero.webp (1920x1080)
- [ ] 4-6 imagenes de murales (1200x900 min)
- [ ] Foto Blito pintando (1200x1500)
- [ ] Logos colectivos SVG
- [ ] Logos marcas placeholder

### Posterior

- [ ] Video hero real
- [ ] Logos marcas reales
- [ ] GIFs de proceso

---

## 7. Optimizacion

- Usar WebP/AVIF sobre JPEG
- Next/Image con lazy loading
- Max file sizes: 10MB video, 500KB images
