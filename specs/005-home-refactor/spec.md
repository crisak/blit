# Feature Specification: Home Page Refactor

**Feature Branch**: `005-home-refactor`  
**Created**: 2026-03-24  
**Status**: Draft  
**Input**: User description: "Refactorizar la pagina del home con las secciones especificadas en el PRD, aplicando el estilo de marca definido en marca-coorporativa.md. Debe incluir SEO, usabilidad, animaciones (microinteracciones, scroll, transiciones) y las secciones del home como se especifica en el PRD."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Hero Section Visual Impact (Priority: P1)

Como visitante del sitio, cuando accedo a la pagina home, quiero ver una presentacion visual impactante en menos de 3 segundos que capture la esencia del arte callejero de Blito, con animaciones fluidas y un llamado a la accion claro.

**Why this priority**: La primera impresion es critical para generar engagement y convertir visitantes en clientes potenciales.

**Independent Test**: Puede ser probado completamente cargando la pagina home y verificando que la animacion del hero carga en menos de 2 segundos.

**Acceptance Scenarios**:

1. **Given** el usuario accede a la pagina home, **When** la pagina carga completamente, **Then** el hero muestra video en loop con fallback a imagen estatica, el texto "BLITO" con tipografia display oversized, el tagline "Arte callejero · Colombia", y dos botones CTA "Ver portafolio" y "Cotizar trabajo"
2. **Given** el usuario hace scroll desde el hero, **When** el scroll comienza, **Then** se activa el efecto parallax profundo en el fondo del hero
3. **Given** el hero ha terminado de cargar, **When** han pasado 2 segundos, **Then** la animacion de entrada GSAP Timeline ha completado su secuencia

---

### User Story 2 - Featured Projects Exploration (Priority: P1)

Como visitante, quiero explorar los proyectos destacados del artista para evaluar su estilo y calidad antes de decidir contactarlo.

**Why this priority**: Los proyectos destacados son la carta de presentacion principal del artista.

**Independent Test**: Puede probarse independientemente navegando a la seccion de proyectos destacados y verificando que se muestran 4-6 proyectos curados con sus efectos hover.

**Acceptance Scenarios**:

1. **Given** la pagina home ha cargado, **When** el usuario hace scroll hasta la seccion "Proyectos Destacados", **Then** se muestran 4-6 proyectos en layout asimetrico con overlapping
2. **Given** el usuario hace hover sobre una imagen de proyecto, **When** el cursor entra en el area de la imagen, **Then** la imagen escala suavemente y el titulo/categoria aparece con cursor personalizado
3. **Given** el usuario hace click en "Ver todos los proyectos", **Then** es redirigido a la pagina /projects

---

### User Story 3 - Statistics Credibility (Priority: P2)

Como visitante potencial (marca, empresa, galeria), quiero ver metricas de la trayectoria del artista para evaluar su experiencia y credibilidad profesional.

**Why this priority**: Las metricas proporcionan prueba social y establecen autoridad.

**Independent Test**: Probado verificando que los contadores animados aparecen al hacer scroll y muestran valores correctos.

**Acceptance Scenarios**:

1. **Given** el usuario hace scroll hasta la seccion "Blito en Numeros", **When** la seccion entra en el viewport, **Then** los contadores animados inician animacion de revelacion al scroll mostrando: +10 anos, +50 murales, X ciudades, X m² pintados
2. **Given** los contadores estan en animacion, **Then** la tipografia es grande y el efecto de revelacion es suave cinematico

---

### User Story 4 - Artist Connection (Priority: P2)

Como visitante, quiero conocer brevemente la historia del artista y su contexto para sentir una conexion personal antes de contactarlo.

**Why this priority**: Humanizar al artista genera confianza y diferenciacion.

**Independent Test**: Probado verificando la seccion "Sobre Blito" con foto, bio y CTAs.

**Acceptance Scenarios**:

1. **Given** el usuario hace scroll hasta la seccion "Sobre Blito", **Then** se muestra foto del artista pintando, bio de 2-3 lineas, fondo artistico oscuro con mini-galeria flotante
2. **Given** el usuario hace click en "Conoce mi historia", **Then** es redirigido a /about

---

### User Story 5 - Geographic Presence Discovery (Priority: P2)

Como visitante, quiero ver un preview del mapa con la huella geografica del artista para entender el alcance de su trabajo.

**Why this priority**: El mapa es un feature diferenciador unico.

**Independent Test**: Probado verificando el preview del mapa con pins y estadisticas.

**Acceptance Scenarios**:

1. **Given** el usuario hace scroll hasta la seccion "Huella en Colombia", **Then** se muestra preview del mapa con 3-4 pins destacados y estadistica de departamentos impactados
2. **Given** el usuario hace click en "Ver todas las obras en el mapa", **Then** es redirigido a /map

---

### User Story 6 - Trust Through Collaborations (Priority: P3)

Como visitante (marca, empresa), quiero ver las marcas y colectivos que han trabajado con el artista para evaluar su legitimidad y alcance.

**Why this priority**: Las colaboraciones generan confianza y prueba social.

**Independent Test**: Probado verificando la seccion de logos de colaboraciones.

**Acceptance Scenarios**:

1. **Given** el usuario hace scroll hasta la seccion "Colaboraciones", **Then** se muestran logos en escala de grises con texto "Han confiado en mi trabajo"
2. **Given** la seccion "Colectivos y Vinculos" esta visible, **Then** se muestran logos/iconos de @ilegales.col, @saborlatinocrewoficial, @saborlatinocallejero con links

---

### User Story 7 - Navigation and Contact (Priority: P1)

Como visitante, quiero acceder facilmente a la navegacion y contactar al artista por multiples canales.

**Why this priority**: Facilitar el contacto es el objetivo principal de conversion del sitio.

**Independent Test**: Probado verificando el footer y botones de contacto.

**Acceptance Scenarios**:

1. **Given** el usuario esta en cualquier parte de la pagina, **When** hace scroll hasta el footer, **Then** ve redes sociales (Instagram, Threads, Facebook, WhatsApp), enlace a ilegales.co y creditos del sitio
2. **Given** el usuario hace click en el boton WhatsApp flotante (presente en todo el sitio), **Then** se abre WhatsApp con numero +57 312 357 4867 y mensaje pre-cargado

---

### User Story 8 - SEO and Discoverability (Priority: P1)

Como visitante potencial a traves de busquedas organicas, quiero encontrar el sitio y acceder a contenido relevante con metadata correcta.

**Why this priority**: SEO es fundamental para atraer clientes potenciales organicos.

**Independent Test**: Probado verificando metadata, Open Graph y estructura semantica.

**Acceptance Scenarios**:

1. **Given** un motor de busqueda indexa la pagina, **Then** el title, description y og:image son unicos y descriptivos para la pagina home
2. **Given** la pagina carga, **Then** la estructura HTML usa tags semanticos (header, main, section, footer) correctamente

---

### User Story 9 - Smooth Animations and Interactions (Priority: P2)

Como visitante, quiero una experiencia visual fluida con animaciones cinematicas que cuenten la historia del artista sin顿之感.

**Why this priority**: Las animaciones diferencian el sitio de competidores y crean una experiencia memorable.

**Independent Test**: Probado verificando que todas las animaciones son fluidas y Lenis proporciona scroll suave.

**Acceptance Scenarios**:

1. **Given** el usuario navega por la pagina, **When** hace scroll, **Then** el movimiento es suave cinematico gracias a Lenis integrado con GSAP ScrollTrigger
2. **Given** el usuario interactua con elementos (hover en imagenes, botones, links), **Then** Framer Motion provee micro-interacciones fluidas

---

### Edge Cases

- Que sucede cuando el video de fondo del hero no puede cargarse? Se muestra imagen estatica como fallback.
- Como se comporta la pagina en dispositivos moviles con conexiones lentas? El video podria no cargarse y se muestra fallback.
- Que pasa si el usuario tiene preferencia de movimiento reducido? Las animaciones deberian respetarse segun prefers-reduced-motion.
- Como se muestran los proyectos destacados si no hay suficientes? Se muestran solo los disponibles (minimo 1).
- Que ocurre con las estadisticas si no hay datos disponibles? Se muestran valores por defecto o se oculta la seccion.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: El hero DEBE mostrar video de fondo en loop (15-20s, muted, time-lapse de mural) con fallback a imagen estatica cuando el video no pueda reproducirse
- **FR-002**: El hero DEBE mostrar "BLITO" en tipografia display oversized con animacion de entrada GSAP Timeline orquestada
- **FR-003**: El hero DEBE incluir el tagline "Arte callejero · Colombia" y dos CTAs: "Ver portafolio" (→ /projects) y "Cotizar trabajo" (→ /contact)
- **FR-004**: El hero DEBE tener efecto parallax profundo al hacer scroll, inspirado en Rockstar Games VI
- **FR-005**: La seccion "Proyectos Destacados" DEBE mostrar 4-6 proyectos curados en layout asimetrico con overlapping
- **FR-006**: Los proyectos destacados DEBEN mostrar hover con escala suave + titulo/categoria visible + cursor personalizado
- **FR-007**: La seccion "Proyectos Destacados" DEBE incluir CTA "Ver todos los proyectos" → /projects
- **FR-008**: La seccion "Blito en Numeros" DEBE mostrar contadores animados: +10 anos, +50 murales, X ciudades, X m² pintados con revelacion al scroll
- **FR-009**: La seccion "Sobre Blito" DEBE incluir foto del artista pintando + bio de 2-3 lineas + fondo artistico oscuro + mini-galeria flotante
- **FR-010**: La seccion "Sobre Blito" DEBE incluir CTA "Conoce mi historia" → /about
- **FR-011**: La seccion "Huella en Colombia" DEBE mostrar preview del mapa con 3-4 pins destacados + estadistica de departamentos
- **FR-012**: La seccion "Huella en Colombia" DEBE incluir CTA "Ver todas las obras en el mapa" → /map
- **FR-013**: La seccion "Colaboraciones" DEBE mostrar logo bar en escala de grises con texto "Han confiado en mi trabajo"
- **FR-014**: La seccion "Colectivos y Vinculos" DEBE mostrar logos/iconos de @ilegales.col, @saborlatinocrewoficial, @saborlatinocallejero con links funcionales
- **FR-015**: El footer DEBE incluir redes sociales (Instagram, Threads, Facebook, WhatsApp), enlace a ilegales.co y creditos del sitio
- **FR-016**: El boton WhatsApp flotante DEBE estar presente en todo el sitio y abrir WhatsApp con numero +57 312 357 4867 y mensaje pre-cargado contextual
- **FR-017**: Todas las paginas DEBEN tener metadata dinamica (title, description, og:image, og:title) para SEO
- **FR-018**: El sitio DEBE usar scroll suave con Lenis integrado con GSAP ScrollTrigger
- **FR-019**: Las micro-interacciones DEBEN ser implementadas con Framer Motion
- **FR-020**: El cursor personalizado DEBE cambiar forma/tamano/color al interactuar con imagenes, botones, links, mapa
- **FR-021**: El sitio DEBE seguir el sistema de marca definido: tipografia sans-serif bold/rounded, formas organicas/redondeadas, estilo sticker, modo oscuro #121212
- **FR-022**: El sitio DEBE ser responsive mobile-first con breakpoints sm, md, lg, xl, 2xl
- **FR-023**: Las animaciones GSAP DEBEN simplificarse en dispositivos moviles para mejor performance
- **FR-024**: El sitio DEBE respetar preferencia de movimiento reducido (prefers-reduced-motion)

### Key Entities

- **HomePage**: Pagina principal que agrega todas las secciones del home
- **HeroSection**: Seccion hero con video, tipografia y CTAs
- **FeaturedProjects**: Grid de proyectos destacados con hover effects
- **StatisticsSection**: Contadores animados con revelacion al scroll
- **AboutPreview**: Seccion preview sobre el artista con foto y bio
- **MapPreview**: Preview del mapa con pins destacados
- **CollaborationsSection**: Logos de marcas que han trabajado con el artista
- **CollectivesSection**: Logos de colectivos y proyectos vinculados
- **Footer**: Navegacion, redes sociales y enlaces de contacto
- **WhatsAppFloatingButton**: Boton flotante persistente de WhatsApp
- **CustomCursor**: Cursor personalizado que cambia segun el elemento interactuado

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: La animacion completa del hero carga en menos de 2 segundos en conexiones de banda ancha
- **SC-002**: El efecto parallax del hero es visible y funcional al hacer scroll desde el hero
- **SC-003**: Los proyectos destacados (4-6) son visibles en la seccion correspondiente con layout asimetrico
- **SC-004**: Los contadores animados inician su animacion cuando la seccion entra en el viewport (Intersection Observer o ScrollTrigger)
- **SC-005**: Todas las secciones del home son visibles y funcionales en breakpoints mobile (320px+), tablet y desktop
- **SC-006**: El boton WhatsApp flotante esta presente en todo momento durante la navegacion
- **SC-007**: Los tiempos de carga de pagina cumplen con Lighthouse Performance >= 85 en desktop
- **SC-008**: El sitio usa modo oscuro base #121212 con colores vibrantes que resaltan
- **SC-009**: Las transiciones y animaciones son fluidas sin movimientos bruscos (Lenis + GSAP)
- **SC-010**: El cursor personalizado cambia de aspecto al hover sobre elementos interactivos
- **SC-011**: La metadata SEO (title, description, og:image) esta correctamente configurada para la pagina home
- **SC-012**: Los links de navegacion y CTAs dirigen a las rutas correctas (/projects, /contact, /about, /map)
