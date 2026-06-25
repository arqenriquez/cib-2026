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
