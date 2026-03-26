# Hero Section — Guia de Assets

## Estructura de archivos

```
public/images/hero/
├── hero-bg.jpg       # Capa fondo — escena completa
├── hero-fg.png       # Capa frente — sujeto recortado con transparencia
├── logo.png          # Logo principal centrado
├── logo-glow.png     # Versión glow del logo (detrás del principal)
└── logo-mask.svg     # SVG del logo para el efecto máscara (CRÍTICO)
```

---

## Especificaciones por archivo

### 1. `hero-bg.jpg` — Fondo (escena completa)

| Propiedad | Valor |
|-----------|-------|
| **Formato** | JPG |
| **Dimensiones** | 3840 × 2160 px (4K) mínimo |
| **Aspect ratio** | 16:9 landscape |
| **Fondo transparente** | No — es JPG, fondo sólido |
| **Calidad de compresión** | 80–85% |
| **Peso máximo sugerido** | ~800 KB |

**Qué debe ser:** La escena completa — el mural, la pared, el entorno. Es lo que se ve detrás de todo.

**Tips:**
- No pongas el sujeto principal aquí (eso va en `hero-fg.png`)
- La imagen empieza con zoom al 125% y va hasta 100% al scrollear, así que asegúrate de que haya contenido en los bordes
- No necesitas convertir a WebP — Next.js lo hace automáticamente

---

### 2. `hero-fg.png` — Sujeto/Foreground (se desvanece al scroll)

| Propiedad | Valor |
|-----------|-------|
| **Formato** | PNG (RGBA — con canal alfa) |
| **Dimensiones** | Igual que `hero-bg.jpg` (3840 × 2160 px) |
| **Aspect ratio** | 16:9 landscape (igual que el BG) |
| **Fondo transparente** | **Sí** — sujeto recortado sobre fondo transparente |
| **Peso máximo sugerido** | ~500 KB (optimizar con tinypng.com) |

**Qué debe ser:** El sujeto principal recortado — puede ser el artista, un personaje de un mural, una figura icónica. Al scrollear, esta capa se desvanece revelando solo el fondo.

**Tips:**
- **IMPORTANTE:** Las dimensiones deben ser idénticas al `hero-bg.jpg`. El sujeto debe estar posicionado exactamente donde aparece en la foto original
- Si el sujeto cubre mucho el centro, el logo y los botones quedarán visualmente ocultos
- Optimiza el PNG con tinypng.com o `pngquant`

**Cómo crear BG + FG desde una sola foto:**
1. Abre la foto original en Photoshop/GIMP
2. Recorta el sujeto principal (Selección rápida → Seleccionar y Máscara)
3. Exporta el sujeto recortado como `hero-fg.png` (PNG con transparencia)
4. En la capa original, rellena el hueco (Content-Aware Fill / Clone Stamp)
5. Exporta el fondo como `hero-bg.jpg`
6. **Ambos archivos deben tener las mismas dimensiones exactas**

---

### 3. `logo.png` — Logo principal

| Propiedad | Valor |
|-----------|-------|
| **Formato** | PNG (RGBA) |
| **Dimensiones** | ~800 × 540 px (o proporcional a tu logo) |
| **Fondo transparente** | **Sí** |
| **Peso máximo sugerido** | ~100 KB |

**Qué debe ser:** Tu logo de artista o nombre estilizado.

**Tips:**
- Bordes limpios y bien definidos
- Si es solo texto, asegúrate de que contraste sobre fondos oscuros (color blanco o claro)
- El logo se renderiza con `width={500}` — el original debe ser al menos 2x (1000px) para retina

---

### 4. `logo-glow.png` — Glow del logo

| Propiedad | Valor |
|-----------|-------|
| **Formato** | PNG (RGBA) |
| **Dimensiones** | Igual o ligeramente mayor que `logo.png` (~900 × 600 px) |
| **Fondo transparente** | **Sí** |
| **Peso máximo sugerido** | ~50 KB |

**Qué debe ser:** Versión difuminada de tu logo para efecto glow/resplandor.

**Tips:**
- Opción 1: Duplica tu logo en Photoshop, aplica Gaussian Blur (15–25px) y baja la opacidad
- Opción 2: Usa el mismo `logo.png` — el código ya aplica `blur-sm` y `opacity-60` por CSS
- Si quieres glow de color (dorado, neón), cambia el color antes del blur

---

### 5. `logo-mask.svg` — Máscara SVG (ARCHIVO MÁS IMPORTANTE)

| Propiedad | Valor |
|-----------|-------|
| **Formato** | SVG |
| **Contenido** | Paths sólidos con `fill="#fff"` |
| **Fondo** | Transparente (sin rectángulo de fondo) |
| **Peso máximo sugerido** | ~5 KB |

**Qué debe ser:** Tu logo convertido a SVG con paths blancos sólidos. Este SVG funciona como "ventana" — la forma blanca es lo que deja ver la imagen de fondo. Al scrollear, la ventana se encoge hasta revelar solo la forma del logo.

**Cómo funciona:** El navegador usa este SVG como `mask-image`. Las áreas blancas del SVG son visibles, las transparentes son invisibles. Empieza gigante (cubriendo toda la pantalla) y se encoge al hacer scroll.

**Cómo crear:**
1. Abre tu logo en Illustrator/Inkscape
2. Si es imagen rasterizada: Image Trace / Trazar imagen → expandir
3. Asegúrate de que todos los paths tengan `fill="#fff"`
4. Exporta como SVG (sin fondo, sin metadatos extra)
5. El SVG actual fue generado desde `public/images/logo/logo-white.svg`

**Actualmente:** Se está usando el logo de Blito (`logo-white.svg`) con fill cambiado a blanco. Si quieres un logo diferente para el efecto mask, reemplaza este archivo.

---

## Notas generales

- **Next.js Image** convierte automáticamente a WebP/AVIF al servir
- **Alineación BG ↔ FG**: El punto más crítico. Si no están alineadas, el efecto se rompe
- **Zoom effect**: La imagen empieza con `scale(1.25)` y al scrollear va a `scale(1)`. Por eso necesita contenido extra en los bordes (~25% más)
- **Performance**: El PNG transparente (hero-fg.png) es el archivo más pesado. Optimízalo bien
- **El efecto mask**: Empieza cubriendo toda la pantalla y al scrollear se encoge hasta ser solo la silueta del logo. Es el efecto principal del hero
