# Fases de construcción

Cada fase termina con: build + lint sin errores, `npm audit`, commit, y resumen breve (archivos, pendientes).

## Fase 1 — Base, contenido e idiomas
1. Estructura:
   ```
   src/app/page.tsx                    → redirect('/es')
   src/app/[lang]/layout.tsx           → layout raíz con <html lang={lang}>, fuentes, tema
   src/app/[lang]/page.tsx             → inicio
   src/app/[lang]/proyectos/[slug]/page.tsx
   src/app/[lang]/imprimir/page.tsx
   src/app/not-found.tsx
   src/content/types.ts | perfil.ts | experiencia.ts | logros.ts | proyectos.ts | ui.ts
   public/perfil/  public/proyectos/<slug>/  public/cv/
   ```
2. Tipos: `type L = { es: string; en: string }` para todo texto visible. Proyecto: slug, titulo, resumen, tipo, estado, anio, rol, problema, solucion, funciones[], decisiones[] {titulo, detalle}, stack[], imagenes[] {src, alt: L, ancho, alto, leyenda?: L}, video? ({src, poster} | {youtubeId}), enlaces {repo?, demo?, notaDemo?: L}, destacado, orden. Proyecto menor: nombre, descripcion: L, tecnologias[], repo.
3. Llenar `src/content/` con `docs/CONTENIDO.md` (español) y traducir al inglés con fidelidad. `ui.ts` contiene textos de interfaz (navegación, botones, títulos de sección) en ambos idiomas.
4. `generateStaticParams` para lang (es, en) y slug. Idioma inválido o slug inexistente → notFound().
5. Páginas solo con contenido sin estilo, para validar datos. Al final, listar todos los [PENDIENTE].

## Fase 2 — Sistema de diseño e inicio
1. Tokens de CLAUDE.md como variables CSS + `@theme` de Tailwind v4. Toggle claro/oscuro accesible que respete la preferencia del sistema y la recuerde (localStorage con try/catch, sin parpadeo al cargar).
2. Fuentes con next/font (Instrument Serif, IBM Plex Sans, IBM Plex Mono), solo pesos usados.
3. Componentes: Container, Header (nombre, navegación por anclas, selector ES/EN que conserva la ruta, toggle de tema), SectionHeader numerado, Tag (mono), Button/Link, Footer (correo visible, LinkedIn, GitHub, año).
4. Inicio en este orden:
   - Hero: nombre, titular (en escritorio puede partirse en 2 líneas con separadores ·), resumen, botones "Ver proyectos" y "Descargar PDF", foto 4:5 a la derecha (abajo en móvil) con `priority`.
   - 01 Proyectos destacados: 4 tarjetas en retícula (imagen, tipo · estado · año en mono, título, resumen, 3–4 tags de stack, enlace al caso). Sin sombras; hover con borde en accent.
   - 02 Otros proyectos académicos: lista compacta tipo tabla (nombre, descripción, tecnologías, enlace).
   - 03 Experiencia: línea de tiempo vertical compacta.
   - 04 Logros: 3 filas con fecha en mono.
   - 05 Contacto: frase corta, botón "Escríbeme" (mailto), LinkedIn y GitHub.
5. Header fijo discreto que gana borde inferior al hacer scroll. Reveal sutil por sección.

## Fase 3 — Casos de estudio y multimedia
1. Página de proyecto:
   - Volver al inicio · encabezado con título grande y bloque de metadatos en mono (tipo, estado, año, rol, stack).
   - Imagen principal.
   - Secciones numeradas: Problema · Solución · Funciones · Decisiones técnicas · Mi rol · Galería · Enlaces.
   - Navegación anterior/siguiente al final.
2. Galería: retícula de miniaturas con next/image + lightbox propio accesible (dialog nativo, flechas, Esc, foco atrapado y devuelto, contador "2 / 5", leyenda). Sin librerías.
3. Video: `<video controls preload="none" poster>` para mp4 local, o iframe youtube-nocookie con carga diferida (fachada con miniatura).
4. Sin imágenes → placeholder tipográfico con iniciales del proyecto y patrón de líneas, no un recuadro roto.
5. `notaDemo` visible junto al enlace de demo (ej. aviso de Render).
6. Documentar en README.md cómo agregar imágenes/video a un proyecto (carpeta, nombres, tamaño recomendado, campos en proyectos.ts).

## Fase 4 — Seguridad, SEO y calidad
1. Headers de seguridad de CLAUDE.md en next.config.ts; verificar que la CSP no rompa fuentes, imágenes, el script de tema ni YouTube.
2. `generateMetadata` por página e idioma: title, description, Open Graph, Twitter card, `alternates.languages` (hreflang es/en), canonical. Imagen OG generada con `opengraph-image.tsx`.
3. sitemap.ts, robots.ts, favicon/icon simple con las iniciales "BE".
4. Accesibilidad: saltar al contenido, landmarks, alt en todas las imágenes, orden de foco, contraste AA en ambos temas.
5. Rendimiento: imágenes con `sizes` correctos, sin JS innecesario en cliente (componentes cliente solo donde haga falta).
6. Revisar textos en inglés marcados `// revisar-en` y listarlos para revisión humana.
7. Indicarme qué revisar en Lighthouse (móvil y escritorio).

## Fase 5 — Versión PDF
1. `/[lang]/imprimir`: todo el portafolio en A4 con `@media print` y `@page { size: A4; margin: 14mm }`.
   - Encabezado: nombre, titular, correo, teléfono, LinkedIn, GitHub y URL del sitio.
   - Resumen, experiencia, proyectos destacados (sin galerías: una imagen pequeña por proyecto + problema, solución, stack, rol, enlaces), otros proyectos, logros, formación.
   - Siempre en tema claro, sin animaciones ni navegación, enlaces como texto visible, `break-inside: avoid` en bloques, máximo 3 páginas.
2. En pantalla, `/imprimir` muestra un botón "Imprimir / Guardar PDF" (oculto al imprimir).
3. Botón "Descargar PDF" del inicio → `/cv/portafolio-brayhan-escobar-es.pdf` o `-en.pdf` según idioma.
4. Al terminar, darme los pasos para generar ambos PDF desde Chrome y el checklist final de despliegue en Vercel.
