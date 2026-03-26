# Reel Section — Guía de Assets

## Estructura de archivos

```
public/images/gallery/banner/
├── bg-hero.mp4              # Video principal — loop corto del artista en acción
└── bg-hero-fallback.webp    # Imagen estática — se muestra mientras carga el video
```

---

## Especificaciones por archivo

### 1. `bg-hero.mp4` — Video principal

| Propiedad | Valor |
|-----------|-------|
| **Formato** | MP4 (H.264, Main Profile) |
| **Resolución** | 1920 × 1080 px (Full HD) |
| **Aspect ratio** | 16:9 landscape |
| **Duración** | 10–30 segundos (loop) |
| **Bitrate** | 4–8 Mbps |
| **Frame rate** | 24–30 fps |
| **Audio** | Sin audio (el video se reproduce muted) |
| **Peso máximo** | **15–25 MB** |

**⚠️ ESTADO ACTUAL:** El archivo pesa **161 MB** — hay que optimizarlo antes de producción.

**Qué debe ser:** Un clip corto en loop — timelapse pintando un mural, drone shot de una obra terminada, proceso de creación, o montaje rápido de trabajos. Se reproduce en silencio como fondo visual.

**Tips:**
- El video se reproduce en `object-cover` — asegúrate de que el sujeto esté centrado
- No incluyas audio — el `<video>` tiene `muted` siempre
- Que el loop sea seamless (que el último frame conecte con el primero)
- Evita transiciones bruscas o cambios de escena muy rápidos

**Cómo optimizar:**

Opción 1 — FFmpeg (línea de comandos):
```bash
# Reescalar a 1080p + comprimir a ~6 Mbps + eliminar audio
ffmpeg -i bg-hero.mp4 \
  -vf "scale=1920:1080" \
  -c:v libx264 -preset slow -crf 23 \
  -an \
  -movflags +faststart \
  bg-hero-optimized.mp4
```

Opción 2 — HandBrake (GUI):
1. Abre HandBrake → carga el video
2. Preset: "Fast 1080p30"
3. Video tab: RF 23, Encoder Preset "slow"
4. Audio tab: eliminar todas las pistas
5. Exportar

Opción 3 — Servicios online:
- [CloudConvert](https://cloudconvert.com/) — sube, configura H.264 1080p, descarga
- [Compressor.io](https://compressor.io/) — compresión rápida sin configuración

**Formato alternativo (AV1):** Si quieres mejor compresión (~30% menos peso que H.264), puedes crear una versión AV1. Sin embargo, la compatibilidad con Safari < 17 es limitada. Para máxima compatibilidad, quédate con H.264.

---

### 2. `bg-hero-fallback.webp` — Imagen de respaldo

| Propiedad | Valor |
|-----------|-------|
| **Formato** | WebP |
| **Resolución** | 1920 × 1080 px |
| **Aspect ratio** | 16:9 landscape |
| **Calidad** | 80–85% |
| **Peso máximo** | ~200 KB |

**Qué debe ser:** Un frame representativo del video, o una imagen que tenga el mismo mood. Es lo que se ve mientras el video carga y como fallback en conexiones lentas.

**Cómo crear desde el video:**
```bash
# Extraer frame del segundo 5 del video
ffmpeg -i bg-hero.mp4 -ss 5 -frames:v 1 -q:v 85 bg-hero-fallback.webp
```

O simplemente toma un screenshot del video en el momento más representativo y expórtalo como WebP.

---

## Notas generales

- **Autoplay:** El video necesita `muted` + `playsInline` para autoplay en móviles (iOS/Android)
- **Performance:** El video usa `preload="none"` — no carga hasta que la sección está cerca del viewport
- **Pause/Play:** Un `IntersectionObserver` pausa el video cuando no es visible (ahorra batería y CPU)
- **Fallback:** La imagen WebP se muestra instantáneamente. El video la reemplaza con un crossfade cuando está listo
- **Mobile:** En dispositivos lentos, es posible que el video no se reproduzca — la imagen fallback siempre está disponible
- **El peso importa:** 161 MB bloqueará la carga en conexiones lentas. El objetivo es **15–25 MB** para un balance entre calidad y velocidad
