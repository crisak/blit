# PRD — Portfolio de Artista Graffiti

> **Estado:** Borrador
> **Última actualización:** 2026-02-12

---

## 1. Visión del producto

<!-- Describe en 2-3 oraciones qué es el producto y por qué existe -->

Web app de portfolio para un artista de graffiti. Permite mostrar su trabajo, conectar con clientes potenciales y vender productos relacionados.

## 2. Usuarios objetivo

<!-- ¿Quién usará esto? -->

- **Visitantes:** Personas interesadas en el arte urbano que quieren ver el portfolio
- **Clientes potenciales:** Marcas o personas que quieren contratar al artista
- **Compradores:** Personas que quieren comprar productos del artista (prints, merch, etc.)

## 3. Funcionalidades principales

### 3.1 Splash / Landing

- [ ] <!-- Describe las funcionalidades del splash page -->

### 3.2 Galería de trabajos

- [ ] <!-- Describe las funcionalidades de la galería -->

### 3.3 Tienda (Shop)

- [ ] <!-- Describe las funcionalidades de la tienda -->

### 3.4 Contacto / About

- [ ] <!-- Describe las funcionalidades de contacto -->

## 4. Requisitos técnicos

- **Framework:** Next.js 16 con App Router
- **Rendering:** SSG con `generateStaticParams` para rendimiento óptimo
- **i18n:** Español (default) e inglés via `next-intl`
- **Styling:** Tailwind CSS v4
- **Hosting:** <!-- Vercel / Self-hosted / etc. -->

## 5. Páginas y rutas

| Ruta | Descripción | Prioridad |
|------|-------------|-----------|
| `/[locale]/` | Landing / Splash page | Alta |
| `/[locale]/gallery` | Galería de trabajos | Alta |
| `/[locale]/shop` | Tienda de productos | Media |
| `/[locale]/about` | Sobre el artista | Media |
| `/[locale]/contact` | Formulario de contacto | Baja |

<!-- Agrega o modifica rutas según necesites -->

## 6. Fuera de alcance (v1)

<!-- Qué NO se va a hacer en la primera versión -->

- [ ] <!-- Ej: Sistema de pagos integrado -->
- [ ] <!-- Ej: Panel de administración -->
- [ ] <!-- Ej: Blog -->

## 7. Métricas de éxito

<!-- ¿Cómo sabrás que el producto funciona? -->

- [ ] <!-- Ej: Lighthouse score > 90 en todas las categorías -->
- [ ] <!-- Ej: Tiempo de carga < 2s en mobile -->

## 8. Cronograma / Fases

<!-- Opcional: define fases si el proyecto tiene etapas -->

### Fase 1 — MVP
- <!-- Funcionalidades mínimas -->

### Fase 2 — Mejoras
- <!-- Funcionalidades adicionales -->
