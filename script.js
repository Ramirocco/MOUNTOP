/* ============================================================
   MOUNTOP — Hoja de estilos principal
   Editá los valores de la sección "TOKENS" para cambiar colores,
   tipografías o espaciados en todo el sitio de una sola vez.
   ============================================================ */

/* ---------- TOKENS (variables de diseño) ---------- */
:root {
  /* Colores */
  --bg: #15120e;          /* fondo general, negro cálido tipo tinta */
  --panel: #1e1a15;       /* fondo de tarjetas / franjas */
  --panel-2: #262019;     /* fondo de tarjeta al hover */
  --border: #362f26;      /* líneas divisorias */
  --paper: #f3eee4;       /* texto principal, blanco cálido */
  --fog: #a79c8a;         /* texto secundario / apagado */
  --amber: #e8a33d;       /* acento primario — dorado cartel de ruta */
  --amber-dim: #7a5a26;
  --ember: #c1502e;       /* acento secundario — naranja quemado */

  /* Tipografía */
  --font-display: "Anton", sans-serif;
  --font-body: "Work Sans", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  /* Layout */
  --container: 1180px;
  --radius: 4px;
  --header-h: 76px;
}

/* ---------- RESET ---------- */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--paper);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { margin: 0; padding: 0; list-style: none; }
h1, h2, h3 { margin: 0; font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.01em; line-height: 1.05; }
p { margin: 0 0 1em; color: var(--fog); max-width: 60ch; }
button { font: inherit; cursor: pointer; }

.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}

:focus-visible {
  outline: 2px solid var(--amber);
  outline-offset: 3px;
}

/* ---------- UTILIDADES ---------- */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 14px;
}
.eyebrow::before {
  content: "";
  width: 18px;
  height: 1px;
  background: var(--amber);
}
.section { padding: 88px 0; }
.section--tight { padding: 56px 0; }
.section-title { font-size: clamp(1.8rem, 4vw, 2.7rem); margin-bottom: 18px; }
.section-head { max-width: 640px; margin-bottom: 48px; }
.section--alt { background: var(--panel); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: var(--radius);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--amber); color: #191307; }
.btn-primary:hover { background: #f2b45a; }
.btn-secondary { border-color: var(--border); color: var(--paper); }
.btn-secondary:hover { border-color: var(--amber); color: var(--amber); }
.btn-whatsapp { background: #25d366; color: #0c2016; }
.btn-whatsapp:hover { background: #35e578; }

/* ---------- HEADER ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  display: flex;
  align-items: center;
  background: rgba(21, 18, 14, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
.site-header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--paper);
  display: flex;
  align-items: baseline;
  gap: 2px;
}
.logo span { color: var(--amber); }

.nav-list { display: flex; gap: 36px; }
.nav-list a {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fog);
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.nav-list a:hover,
.nav-list a[aria-current="page"] { color: var(--paper); border-color: var(--amber); }

.nav-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  color: var(--paper);
}
.nav-toggle svg { width: 20px; height: 20px; }

/* ---------- TICKER (cartel LED de destino) ---------- */
.ticker {
  background: #0f0d0a;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  white-space: nowrap;
}
.ticker-track {
  display: inline-flex;
  width: max-content;
  animation: scroll-left 28s linear infinite;
  padding: 10px 0;
}
.ticker-track span {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--amber);
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  gap: 18px;
}
.ticker-track span::after { content: "•"; color: var(--ember); }
@keyframes scroll-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ---------- HERO ---------- */
.hero {
  padding: 72px 0 96px;
}
.hero .container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
}
.hero h1 {
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  margin-bottom: 24px;
}
.hero h1 em {
  font-style: normal;
  color: var(--amber);
}
.hero p.lead {
  font-size: 1.1rem;
  max-width: 46ch;
  margin-bottom: 32px;
}
.hero-actions { display: flex; flex-wrap: wrap; gap: 16px; }

/* Gráfico de ruta (elemento decorativo SVG) */
.route-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px 20px;
}
.route-card__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fog);
  margin-bottom: 12px;
}
.route-svg text {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  fill: var(--paper);
  text-transform: uppercase;
}
.route-svg .route-line { stroke: var(--border); stroke-width: 2; fill: none; }
.route-svg .route-dot { fill: var(--bg); stroke: var(--amber); stroke-width: 2; }
.route-svg .route-dot--active { fill: var(--amber); }

/* ---------- STATS ---------- */
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.stat {
  background: var(--panel);
  padding: 32px 24px;
  text-align: left;
}
.stat strong {
  display: block;
  font-family: var(--font-display);
  font-size: 2.4rem;
  color: var(--amber);
}
.stat span {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fog);
}

/* ---------- GRID DE SERVICIOS ---------- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.service-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.service-card:hover { border-color: var(--amber-dim); background: var(--panel-2); }
.service-card__icon {
  width: 40px;
  height: 40px;
  color: var(--amber);
  margin-bottom: 18px;
}
.service-card__icon svg { width: 100%; height: 100%; }
.service-card h3 { font-size: 1.15rem; margin-bottom: 10px; }
.service-card p { font-size: 0.94rem; margin-bottom: 0; }

/* Página de servicios: lista más detallada */
.service-row {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 24px;
  padding: 32px 0;
  border-bottom: 1px solid var(--border);
}
.service-row:first-of-type { border-top: 1px solid var(--border); }
.service-row__icon { width: 44px; height: 44px; color: var(--amber); }
.service-row__icon svg { width: 100%; height: 100%; }
.service-row h3 { font-size: 1.3rem; margin-bottom: 8px; }
.service-row p { max-width: 62ch; }

/* ---------- QUIÉNES SOMOS ---------- */
.about-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}
.about-block + .about-block { margin-top: 64px; }
.pin-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  color: var(--paper);
}
.pin-list li svg { width: 16px; height: 16px; color: var(--amber); flex-shrink: 0; }

/* ---------- CONTACTO ---------- */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
.contact-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
}
.contact-card h3 { font-size: 1.2rem; margin-bottom: 14px; }
.contact-detail {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 0.92rem;
  padding: 10px 0;
  color: var(--paper);
}
.contact-detail svg { width: 18px; height: 18px; color: var(--amber); flex-shrink: 0; }
.hubspot-placeholder {
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  padding: 28px;
  text-align: center;
  color: var(--fog);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

/* Formulario propio (envía a HubSpot por API, sin widget ni marca) */
.mountop-form { display: flex; flex-direction: column; gap: 18px; }
.mountop-form .field { display: flex; flex-direction: column; gap: 6px; }
.mountop-form label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fog);
}
.mountop-form input,
.mountop-form textarea {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px 14px;
  color: var(--paper);
  font-family: var(--font-body);
  font-size: 0.95rem;
}
.mountop-form input:focus,
.mountop-form textarea:focus {
  outline: none;
  border-color: var(--amber);
}
.mountop-form textarea { resize: vertical; min-height: 110px; }
.field--checkbox { flex-direction: row; }
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--fog);
  cursor: pointer;
}
.checkbox-label input[type="checkbox"] {
  margin-top: 3px;
  width: 16px;
  height: 16px;
  accent-color: var(--amber);
  flex-shrink: 0;
}
.mountop-form .btn { align-self: flex-start; border: none; }
.mountop-form .btn[disabled] { opacity: 0.6; pointer-events: none; }
.form-status {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 12px 14px;
  border-radius: var(--radius);
  display: none;
}
.form-status.is-visible { display: block; }
.form-status.is-success { background: rgba(37, 211, 102, 0.12); color: #4be08a; border: 1px solid rgba(75, 224, 138, 0.3); }
.form-status.is-error { background: rgba(193, 80, 46, 0.12); color: var(--ember); border: 1px solid rgba(193, 80, 46, 0.35); }

/* ---------- FOOTER ---------- */
.site-footer {
  background: var(--panel);
  border-top: 1px solid var(--border);
  padding: 56px 0 28px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}
.footer-grid h4 {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 16px;
}
.footer-grid ul li { margin-bottom: 10px; }
.footer-grid ul li a:hover { color: var(--amber); }
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 24px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--fog);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 900px) {
  .hero .container { grid-template-columns: 1fr; }
  .about-block { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 720px) {
  .nav-list {
    position: fixed;
    top: var(--header-h);
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 12px 24px 24px;
    gap: 4px;
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease, transform 0.15s ease;
  }
  .nav-list a { display: block; padding: 12px 0; border-bottom: 1px solid var(--border); }
  .nav-list.is-open { transform: translateY(0); opacity: 1; pointer-events: auto; }
  .nav-toggle { display: flex; }
  .stats { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
  .service-row { grid-template-columns: 48px 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .ticker-track { animation: none; }
  .btn:hover { transform: none; }
}
