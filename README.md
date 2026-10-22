# Portafolio — Brayhan Escobar

Portafolio bilingüe (es/en) con Next.js (App Router), TypeScript y Tailwind CSS v4. Todo el contenido vive en `src/content/`; los componentes no contienen textos.

```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run lint
```

## Agregar imágenes y video a un proyecto

Edita el proyecto en `src/content/proyectos.ts` (identificado por su `slug`). Sin imágenes se muestra un placeholder con las iniciales.

### Imágenes

1. Crea la carpeta `public/proyectos/<slug>/` y copia allí las capturas.
2. Nombres en minúsculas, con guiones y orden: `01-inicio.webp`, `02-ventas.webp`, …
3. Tamaño recomendado: 1600 px de ancho (proporción 16:10 para la principal), formato WebP o JPG, menos de 300 KB cada una. Next.js genera las variantes responsivas.
4. Registra cada imagen en `imagenes` (la **primera** es la principal y la portada de la tarjeta):

```ts
imagenes: [
  {
    src: "/proyectos/app-milagros/01-inicio.webp",
    alt: { es: "Pantalla de ventas con el carrito abierto", en: "Sales screen with the cart open" },
    ancho: 1600, // ancho real en px
    alto: 1000,  // alto real en px
    leyenda: { es: "Venta con escáner de códigos", en: "Sale using the barcode scanner" }, // opcional
  },
],
```

`alt` es obligatorio en ambos idiomas. Proyectos comerciales: solo capturas con datos ficticios.

### Video

- **mp4 local** (preferible ≤ 20 MB, H.264): guárdalo en `public/proyectos/<slug>/demo.mp4`, con un póster en `public/proyectos/<slug>/demo-poster.webp`:

```ts
video: { src: "/proyectos/app-milagros/demo.mp4", poster: "/proyectos/app-milagros/demo-poster.webp" },
```

- **YouTube**: usa solo el ID. Se carga con fachada (no se contacta a YouTube hasta pulsar reproducir) desde `youtube-nocookie.com`:

```ts
video: { youtubeId: "XXXXXXXXXXX" },
```

El video y la galería aparecen en la sección «Galería» del caso de estudio.
