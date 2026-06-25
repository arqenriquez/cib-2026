/* ===================================================================
   CIB 2026 — Landing Curso de Iniciación Bíblica
   Lógica de interacción (vanilla JS, sin dependencias)
   =================================================================== */

/* -------------------------------------------------------------------
   1) URL DEL GOOGLE FORM
   TODO (cliente): pega aquí la URL de tu Google Form de registro.
   Mientras esté en "#", los botones de registro avisan que falta
   configurar el formulario en vez de llevar a una página vacía.
   Ejemplo: const GOOGLE_FORM_URL = "https://forms.gle/AbCdEf123";
------------------------------------------------------------------- */
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe4tZ-xoPDItHyGqxzkhqUZd2K-b7wX7GoA9I-WZgF8aULCpg/viewform?usp=header";

(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    // Cierra el menú al tocar un enlace (navegación por anclas)
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Botón de registro -> Google Form ---------- */
  const registroBtn = document.getElementById("registroBtn");

  if (registroBtn) {
    if (GOOGLE_FORM_URL && GOOGLE_FORM_URL !== "#") {
      registroBtn.setAttribute("href", GOOGLE_FORM_URL);
    } else {
      // Aún no se ha configurado el form: evita ir a una página vacía.
      registroBtn.addEventListener("click", function (e) {
        e.preventDefault();
        alert(
          "El formulario de registro se está preparando.\n\n" +
          "Por ahora puedes escribirnos por WhatsApp al 662 363 3327 " +
          "y con gusto te ayudamos con tu registro."
        );
      });
    }
  }

  /* ---------- Aparición al hacer scroll (reveal on scroll) ---------- */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced && "IntersectionObserver" in window) {
    const revealEls = document.querySelectorAll(
      ".section-title, .eyebrow, .curso-text, .curso-cita, " +
      ".dato-card, .modalidad-card, .faq-item, " +
      ".ubicacion-text, .ubicacion-map, .registro-text, #registroBtn, .registro-alt, " +
      ".footer-brand, .footer-contact, .footer-cta"
    );

    revealEls.forEach(function (el) { el.classList.add("reveal"); });

    // Aparición escalonada (stagger) dentro de las cuadrículas
    document.querySelectorAll(".datos-grid, .modalidades-grid, .faq-list").forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.style.transitionDelay = (i * 110) + "ms";
      });
    });

    const io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Acordeón FAQ: cierra los demás al abrir uno ---------- */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();
