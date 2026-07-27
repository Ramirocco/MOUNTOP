// ============================================================
// MOUNTOP — Interacciones del sitio
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  /* Menú móvil */
  const toggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cierra el menú al elegir una opción (mejor experiencia en mobile)
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Ticker: duplicamos el contenido para que el loop sea infinito y parejo */
  const track = document.querySelector(".ticker-track");
  if (track) {
    track.innerHTML += track.innerHTML;
  }
});
