# Hero Section — Guia de Assets

## Estructura de archivos

```
public/images/hero/
├── hero-bg.jpg          # Capa 0 — Fondo completo (Layer 0)
├── hero-fg.png          # Capa 1 — Sujeto recortado con transparencia (Layer 1)
├── logo.png             # Logo principal del artista
└── logo-glow.png        # Versión glow del logo (detrás del principal)
```

---

## Especificaciones por archivo

### 1. `hero-bg.jpg` — Fondo (Layer 0)

| Propiedad | Valor |
|-----------|-------|
| **Formato** | JPG |
| **Dimensiones** | 3840 × 2160 px (4K) mínimo |
| **Aspect ratio** | 16:9 landscape |
| **Fondo transparente** | No — es JPG, fondo sólido |
| **Calidad de compresión** | 80–85% (balance entre calidad y peso) |
| **Peso máximo sugerido** | ~800 KB |

**Qué debe ser:** La escena completa — el mural, la pared, el entorno. Es lo que se ve detrás de todo. Puede ser una foto de un mural completo, una pared con arte callejero, o una composición artística.

**Tips:**
- Esta imagen se mueve más lento que el foreground al hacer scroll, así que se percibe como "lejana"
- No pongas el sujeto principal aquí (eso va en `hero-fg.png`)
- Asegúrate de que los bordes tengan contenido — la imagen se escala al 102.5% para evitar gaps durante el parallax
- No necesitas convertir a WebP manualmente, Next.js lo hace automáticamente

---

### 2. `hero-fg.png` — Sujeto/Foreground (Layer 1)

| Propiedad | Valor |
|-----------|-------|
| **Formato** | PNG (RGBA — con canal alfa) |
| **Dimensiones** | Igual que `hero-bg.jpg` (3840 × 2160 px) |
| **Aspect ratio** | 16:9 landscape (igual que el BG) |
| **Fondo transparente** | **Sí** — el sujeto recortado sobre fondo transparente |
| **Peso máximo sugerido** | ~500 KB (optimizar con tinypng.com) |

**Qué debe ser:** El sujeto principal recortado — puede ser el artista, un personaje de un mural, una figura icónica de tu arte. El fondo DEBE ser transparente para que se vea la capa de atrás.

**Tips:**
- **IMPORTANTE:** Las dimensiones deben ser idénticas al `hero-bg.jpg`. El sujeto debe estar posicionado exactamente donde aparece en la foto original. Esto es porque ambas capas se superponen pixel a pixel
- El sujeto debe estar centrado o ligeramente a un lado, dejando espacio en el centro para el logo y los botones
- Si el sujeto cubre mucho el centro, los botones CTA quedarán visualmente ocultos (aunque seguirán siendo clickeables)
- Optimiza el PNG: usa tinypng.com o `pngquant` para reducir el peso sin perder transparencia

**Cómo crear BG + FG desde una sola foto:**
1. Abre la foto original en Photoshop/GIMP
2. Recorta el sujeto principal (Selección rápida → Seleccionar y Máscara / Refinar borde)
3. Exporta el sujeto recortado como `hero-fg.png` (PNG con transparencia)
4. En la capa original, rellena el hueco donde estaba el sujeto (Content-Aware Fill / Clone Stamp)
5. Exporta el fondo completo como `hero-bg.jpg`
6. Ambos archivos deben tener las mismas dimensiones exactas

---

### 3. `logo.png` — Logo principal

| Propiedad | Valor |
|-----------|-------|
| **Formato** | PNG (RGBA) |
| **Dimensiones** | ~800 × 540 px (o proporcional a tu logo) |
| **Fondo transparente** | **Sí** |
| **Peso máximo sugerido** | ~100 KB |

**Qué debe ser:** Tu logo de artista o nombre estilizado. Es lo primero que ve el visitante.

**Tips:**
- Bordes limpios y bien definidos — se renderiza sobre la escena
- Si tu logo es solo texto, asegúrate de que contraste bien sobre fondos oscuros (usa color blanco o claro)
- El logo se renderiza con `width={500}` en el código, así que el archivo original debe ser al menos 2x (1000px) para pantallas retina

---

### 4. `logo-glow.png` — Glow del logo

| Propiedad | Valor |
|-----------|-------|
| **Formato** | PNG (RGBA) |
| **Dimensiones** | Igual o ligeramente mayor que `logo.png` (~900 × 600 px) |
| **Fondo transparente** | **Sí** |
| **Peso máximo sugerido** | ~50 KB |

**Qué debe ser:** Una versión suave/difuminada de tu logo que se coloca detrás del logo principal para crear un efecto de glow/resplandor.

**Tips:**
- Opción 1: Duplica tu logo en Photoshop, aplica Gaussian Blur (15–25px) y baja la opacidad
- Opción 2: Usa el mismo `logo.png` — el código ya aplica `blur-sm` y `opacity-60` por CSS
- Si quieres un glow de color (ej: dorado, neón), cambia el color del logo antes de aplicar el blur
- No necesita ser perfecto — el blur CSS se encarga de suavizar

---

## Notas generales

- **Next.js Image** convierte automáticamente a WebP/AVIF al servir, así que guarda en JPG/PNG sin preocuparte por formatos modernos
- **Aspect ratio**: Todas las imágenes de las capas (BG y FG) deben ser **16:9 landscape** para llenar el viewport correctamente
- **Alineación BG ↔ FG**: Este es el punto más crítico. Si las capas no están alineadas, el efecto de profundidad se rompe. Trabaja siempre desde la misma foto base
- **Parallax y bordes**: Las imágenes se escalan al 102.5% (`scale(1.025)`) para que al moverse con el parallax no se vean bordes vacíos. Por eso es importante que la imagen tenga contenido hasta los bordes
- **Performance**: El PNG transparente (hero-fg.png) es el archivo más pesado. Optimízalo bien. El JPG del fondo comprime mucho mejor
