# Spec — Landing Page CIB 2026 (Curso de Iniciación Bíblica)

**Fecha:** 2026-06-25
**Cliente:** Animación Bíblica de la Pastoral (ABP) — Arquidiócesis de Hermosillo
**Objetivo:** Landing informativa de una sola página para promocionar el Curso de Iniciación
Bíblica 2026 y captar pre-registros (vía Google Form).

---

## 1. Alcance

Sitio estático de una página (`index.html`), responsivo *mobile-first* (la mayoría de los
usuarios entran desde celular). Sin backend. Deploy en Vercel desde un repo de GitHub.

## 2. Sistema visual

Tomado del flyer oficial.

| Token | Valor | Uso |
|---|---|---|
| `--navy` | `#1B2A4A` | Títulos, header, footer, fondos oscuros |
| `--navy-light` | `#2C3E5D` | Hover, degradados |
| `--gold` | `#C19A4B` | Botones, íconos, acentos, líneas |
| `--gold-light` | `#D9B978` | Hover de botones dorados |
| `--cream` | `#F5F1E8` | Fondo general |
| `--white` | `#FFFFFF` | Tarjetas y secciones |
| `--text` | `#2A2A2A` | Texto de cuerpo |

- **Tipografía display:** Cormorant Garamond (serif elegante) — títulos.
- **Tipografía cuerpo:** Poppins — texto y UI.
- **Estilo:** sobrio, cálido, espiritual. Mucho aire, líneas finas doradas, esquinas suaves.

## 3. Estructura de secciones

1. **Header / Nav** — Logo ABP + menú ancla (sticky, colapsable en móvil).
2. **Hero** — Marca "CIB 2026", título del curso, lema *"Conoce la Palabra, encuentra a
   Cristo, transforma tu vida"*, CTAs: **Pre-regístrate** y **WhatsApp**.
3. **Datos clave** — 5 tarjetas con ícono: Horario 7–9 pm · Lugar IBCAH · Fechas 3–21 ago
   (L–V) · Costo **$420 MXN** · Modalidades Presencial y En línea.
4. **Sobre el curso** — Descripción, a quién va dirigido, qué incluye. Cita Salmo 119.
5. **Modalidades** — Dos tarjetas: Presencial / En línea.
6. **Ubicación** — Datos del IBCAH + botón **Ver en Google Maps**
   (`https://maps.app.goo.gl/xAUbjXLQF4XMJZuy8`).
7. **Preguntas frecuentes** — Acordeón accesible.
8. **Pre-registro (CTA)** — Botón grande al **Google Form** (placeholder `GOOGLE_FORM_URL`,
   el cliente lo genera y lo pega).
9. **Footer / Contacto** — WhatsApp 662 363 3327, Instagram/Facebook @abphermosillo, logo ABP,
   organizado por la Arquidiócesis de Hermosillo.

## 4. Decisiones tomadas

- **Formulario:** Google Form externo (el cliente lo crea). En el código queda un placeholder
  `GOOGLE_FORM_URL` en `js/main.js` y en los botones de CTA.
- **Costo:** se muestra **$420 MXN**.
- **Google Maps:** enlace real `https://maps.app.goo.gl/xAUbjXLQF4XMJZuy8`.

## 5. Archivos

```
19. ABP - CIB 2026 - LANDING/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/            (flyer.jpg, abp-logo.png, hero-bg.jpg — los agrega el cliente)
├── docs/spec.md
└── README.md          (instrucciones de deploy)
```

## 6. Requisitos no funcionales

- Responsivo mobile-first (breakpoints 600px / 900px).
- Accesible: contraste AA, navegación por teclado en el acordeón, `alt` en imágenes.
- Sin dependencias de build: solo Google Fonts por CDN.
- SEO básico: `<title>`, meta description, Open Graph para compartir en redes/WhatsApp.

## 7. Pendientes del cliente (marcados como TODO en el código)

- Generar el Google Form y pegar su URL en `GOOGLE_FORM_URL`.
- Colocar imágenes en `assets/`: `abp-logo.png`, `flyer.jpg`, `hero-bg.jpg`.
- Confirmar número/textos de contacto.
