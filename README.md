# Mountop — Sitio web

Sitio estático (HTML + CSS + JS) listo para publicar en GitHub Pages.

## Estructura

```
mountop/
├── index.html        → Inicio
├── nosotros.html      → Quiénes somos
├── servicios.html     → Servicios
├── contacto.html       → Contacto
├── css/
│   └── styles.css     → TODOS los estilos y colores del sitio
├── js/
│   └── script.js       → Menú móvil + animación del cartel superior
└── README.md
```

## Cómo publicarlo en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `mountop`).
2. Subí todos estos archivos y carpetas manteniendo la misma estructura (el `index.html` debe quedar en la raíz del repo).
3. En el repo: **Settings → Pages → Source → Deploy from a branch → main → / (root) → Save**.
4. En unos minutos el sitio queda publicado en:
   `https://tu-usuario.github.io/mountop/`

## Cómo agregar tu logo

Ahora mismo el logo es el texto "MOUNTOP." en `css/styles.css` (clase `.logo`). Cuando tengas el archivo de logo:

1. Creá una carpeta `assets/` y poné ahí tu logo (ej: `assets/logo.png`).
2. En cada archivo `.html`, buscá esta línea (aparece en el header de las 4 páginas):
   ```html
   <a href="index.html" class="logo">MOUNTOP<span>.</span></a>
   ```
3. Reemplazala por:
   ```html
   <a href="index.html" class="logo"><img src="assets/logo.png" alt="Mountop" style="height:36px;"></a>
   ```

## Cómo conectar el formulario de contacto con HubSpot

En `contacto.html` hay un bloque comentado que explica el paso a paso (buscá "INTEGRACIÓN CON HUBSPOT"). En resumen:

1. En HubSpot: **Marketing → Formularios → crear formulario**.
2. Copiá el código de inserción (embed) que te da HubSpot.
3. Pegalo reemplazando el `<div class="hubspot-placeholder">` dentro de `contacto.html`.

El botón de WhatsApp ya funciona (`https://wa.me/34619480862`) — si el número cambia, buscá y reemplazá `34619480862` en los 4 archivos HTML.

## Editar colores y tipografía

Todo el diseño se controla desde la parte de arriba de `css/styles.css`, en la sección `:root` (buscá el comentario "TOKENS"). Cambiando esos valores cambia el sitio entero:

```css
--bg: #15120e;       /* fondo general */
--amber: #e8a33d;    /* color de acento principal (dorado) */
--ember: #c1502e;    /* color de acento secundario (naranja) */
```

## Notas

- El sitio es 100% estático: no necesita build ni Node — anda tal cual en GitHub Pages.
- Las tipografías (Anton, Work Sans, IBM Plex Mono) se cargan desde Google Fonts.
- Es responsive: probado desde mobile (menú hamburguesa) hasta escritorio.
