# Portafolio — Brayhan Escobar

Portafolio web bilingüe (es/en) + versión imprimible en PDF. Casos de estudio técnicos para procesos de selección (incluidos cargos senior).
- Contenido verificado: `docs/CONTENIDO.md` (solo se usa en la Fase 1; después la fuente de verdad es `src/content/`).
- Plan de trabajo: `docs/FASES.md`. Ejecutar solo la fase que te pida.

## Forma de trabajar (ahorro de tokens)
- Respuestas breves: no pegar código en el chat ni explicar lo obvio. Al terminar: lista corta de archivos cambiados, comandos a ejecutar y `[PENDIENTE]` encontrados.
- No releer archivos que ya leíste en esta sesión salvo que hayan cambiado. No explorar carpetas innecesarias (node_modules, .next).
- No instalar dependencias sin justificarlas y preguntar.
- Antes de cerrar una fase: `npm run build` y `npm run lint` sin errores. Commit con mensaje convencional en español (feat:, fix:, style:, docs:, chore:).

## Reglas de contenido (obligatorias)
- NO inventar datos: métricas, clientes, usuarios, resultados ni tecnologías no listadas en `docs/CONTENIDO.md` o `src/content/`.
- Dato faltante → `[PENDIENTE: qué falta]`.
- Ningún texto de contenido hardcodeado en componentes; todo sale de `src/content/`.
- Textos en inglés: traducción fiel y natural del español, sin agregar ni exagerar nada. Marcar con `// revisar-en` las frases dudosas.

## Stack
Next.js (App Router, última estable) + TypeScript estricto + Tailwind CSS v4. Sitio estático sin backend, BD, formularios ni auth. `next/image` para imágenes, `next/font` para fuentes. Rutas `/es` y `/en` (patrón `app/[lang]` con diccionarios, sin librería de i18n); `/` redirige a `/es`. Despliegue en Vercel (sin `output: 'export'`).

## Diseño (fijo, no proponer alternativas)
Estética "documento técnico editorial": sobria, precisa, con carácter.
- Tokens claro: bg #F5F2EB · surface #FBFAF6 · ink #16181A · muted #5E615F · line #DAD5CA · accent #1E5B47 · accent-soft #E3ECE6
- Tokens oscuro (`prefers-color-scheme` + toggle): bg #111312 · surface #181B19 · ink #ECEAE4 · muted #9A9D98 · line #2A2E2B · accent #6FBF9C · accent-soft #1C2A24
- Fuentes: Instrument Serif (títulos grandes) · IBM Plex Sans (texto) · IBM Plex Mono (metadatos: stack, fechas, estado, etiquetas, números de sección).
- Retícula clara, mucho espacio, líneas finas de 1px, secciones numeradas (01, 02…). Acento solo en enlaces, estados y detalles.
- Prohibido: gradientes, glassmorphism, emojis, sombras grandes, barras de % de habilidad, partículas, cursores custom, efecto typewriter, iconos decorativos en exceso.
- Animación: solo fade/reveal discreto y transiciones de hover; respetar `prefers-reduced-motion`.
- Responsive desde 360px, sin scroll horizontal. Contraste AA, foco visible, HTML semántico.

## Seguridad
- Headers en `next.config.ts`: CSP estricta (default-src 'self'; img-src 'self' data:; media-src 'self'; frame-src https://www.youtube-nocookie.com; frame-ancestors 'none'), HSTS, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy (camera=(), microphone=(), geolocation=()).
- Enlaces externos con `target="_blank" rel="noopener noreferrer"`.
- Sin secretos en el repo; `.gitignore` incluye `.env*`.
- Teléfono SOLO en la versión de impresión/PDF, nunca en el sitio web.
- Capturas de proyectos comerciales: solo con datos ficticios.
- `npm audit --omit=dev` al cerrar cada fase.
