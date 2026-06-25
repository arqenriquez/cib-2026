# CIB 2026 — Landing Page

Landing informativa para el **Curso de Iniciación Bíblica 2026 (CIB)** impartido por la
**Animación Bíblica de la Pastoral (ABP)** de la Arquidiócesis de Hermosillo.

Sitio estático (HTML + CSS + JS vanilla), responsivo *mobile-first*. Sin build.

## Estructura

```
.
├── index.html          # Página única con todas las secciones
├── css/styles.css      # Estilos (sistema de color del flyer)
├── js/main.js          # Menú móvil, acordeón FAQ, enlace al Google Form
├── assets/             # Imágenes (ver assets/README.md)
└── docs/spec.md        # Especificación del proyecto
```

## ✅ Pendientes antes de publicar

1. **Google Form** — Crea tu formulario y pega la URL en `js/main.js`:
   ```js
   const GOOGLE_FORM_URL = "https://forms.gle/TU_FORM";
   ```
   Mientras siga en `"#"`, el botón muestra un aviso y redirige a WhatsApp.

2. **Imágenes en `assets/`** (ver `assets/README.md`):
   - `abp-logo.png` — logo ABP (header y footer)
   - `hero-bg.jpg` — fondo del hero y del bloque de registro (Biblia/luz)
   - `flyer.jpg` — usado como imagen al compartir en redes (Open Graph)

3. Revisa textos de FAQ, contacto y redes sociales.

## Ver en local

Abre `index.html` en el navegador, o sirve la carpeta:
```bash
npx serve .
```

## Deploy en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel: **Add New → Project → Import** el repo.
3. Framework Preset: **Other** (sitio estático). Sin comando de build.
4. **Deploy**. Listo.

> Tip: si la carpeta del repo tiene espacios/números en el nombro, Vercel igual lo toma;
> el `index.html` debe estar en la raíz del proyecto importado.
