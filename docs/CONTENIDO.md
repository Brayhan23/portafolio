# Contenido verificado (fuente para crear src/content/)

## Perfil
- Nombre: Brayhan Alexander Escobar Rivera — Medellín, Colombia.
- Titular: Desarrollador Full Stack | React · Next.js · Node.js · PostgreSQL | Experiencia Freelance | Docente de Programación | Ingeniero Informático en formación
- Resumen: Desarrollador Full Stack y estudiante de noveno semestre de Ingeniería Informática en el Politécnico Colombiano Jaime Isaza Cadavid. Desarrolla software para clientes reales desde 2025, integrando frontend, backend y datos con JavaScript, React, Next.js, Node.js, PostgreSQL y SQLite. Combina el desarrollo con la docencia y la investigación en el Semillero de IA (SIIC).
- Formación: Ingeniería Informática, Politécnico Colombiano Jaime Isaza Cadavid — 9.º semestre, en curso (NO graduado). Diplomado en Docencia Universitaria, 120 h, Politécnico JIC (abr–jul 2026).
- Correo: escobarb634@gmail.com → visible en el pie de página + botón "Escríbeme" (mailto) en la sección de contacto.
- Teléfono: +57 321 776 9409 → SOLO en la versión PDF.
- LinkedIn: https://www.linkedin.com/in/brayhan-alexander-escobar-rivera-510ab1389/
- GitHub: https://github.com/Brayhan23
- Foto: `public/perfil/brayhan.webp` (vertical 4:5). Ubicación: hero, a la derecha en escritorio, debajo del texto en móvil. Recorte 4:5, borde 1px color line, radio 4px, sin filtros.
- Stack principal: React, JavaScript, Next.js, Node.js, PostgreSQL, SQLite.
- También: TypeScript, Express, NestJS, Java/Spring Boot, Python/Flask, Tailwind CSS, Git/GitHub, Vercel, Render, pruebas automatizadas.

## Experiencia (línea de tiempo)
1. Desarrollador Full Stack independiente — sep 2025 – actualidad. Desarrollo de software a medida para clientes: requerimientos, arquitectura, frontend, backend, pruebas, despliegue y entrega.
2. Auxiliar docente de Investigación de Operaciones — Politécnico JIC, Facultad de Ingeniería — ago 2026 – actualidad. Asesorías a estudiantes y clases en sustitución de docentes.
3. Estudiante investigador — Semillero SIIC (IA), Politécnico JIC — jul 2026 – actualidad. Iniciativa APEX: gamificación e IA responsable para el aprendizaje de programación (investigación en curso, sin resultados publicados aún).
4. Docente de programación — Kodland LATAM — jun 2024 – jun 2026. Clases de programación y lógica para niños y adolescentes con Lua y Roblox Studio. Además, asesorías particulares de programación (independiente, vigente).

## Logros
- Equipo APEX: puesto 29 de 111 en la XL Maratón Nacional de Programación ACIS/REDIS (3 oct 2026, Universidad EAFIT). Clasificado a ICPC South America North Finals 2026.
- NatiChain: primer puesto compartido en Monad Blitz Medellín V2 (17 oct 2026).
- Ponencia programada: 5.º Encuentro de Ingeniería, Innovación y Sostenibilidad — 6 nov 2026 (mostrar como "programada").

## Proyectos destacados (en este orden)

### 1. App Milagros — `app-milagros`
- Tipo: Comercial (freelance) · Estado: En producción · Año: 2026 [PENDIENTE: confirmar año]
- Contexto: comercio de productos capilares en San Roque, Antioquia.
- Problema: el negocio necesitaba controlar ventas, inventario y créditos sin depender de internet y en equipos de pocos recursos.
- Solución: sistema POS e inventario local-first, 100 % offline, empaquetado como ejecutable .exe para equipos de 4 GB de RAM.
- Funciones: productos y stock; escáner de códigos de barras; ventas a crédito y control de deudores; facturación con impresora térmica de 80 mm; recibos por correo; reportes e historial; exportación a Excel y PDF; copias de seguridad automáticas.
- Stack: Node.js, Express 5, SQLite (better-sqlite3), JavaScript, HTML5, CSS3, PDFKit, ExcelJS, bcrypt, @yao-pkg/pkg.
- Rol: Desarrollador Full Stack principal — arquitectura, base de datos, frontend, backend, pruebas unitarias, optimización, empaquetado e instalación en el cliente. Otra persona colaboró en 4 historias de usuario.
- Decisiones: [PENDIENTE: por qué SQLite y no PostgreSQL] · [PENDIENTE: qué se hizo para rendir en 4 GB de RAM]
- Repo: https://github.com/Brayhan23/app-milagros (verificar que sea público antes de publicar)
- Demo: no hay demo pública → galería + video.

### 2. APEX-WEB — `apex-web`
- Tipo: Comercial · Estado: Desplegado · Año: 2026
- Problema: el proyecto de investigación APEX necesitaba un sitio para comunicar su propuesta, metodología, equipo y fases.
- Solución: sitio de divulgación de 12 secciones organizado en los pilares REFUERZA, COMPITE y AVANZA.
- Stack: Next.js (App Router), React, TypeScript, Tailwind CSS v4, clsx, tailwind-merge, Vercel.
- Rol: desarrollo completo e independiente — arquitectura de componentes, diseño visual, estructura de contenido, animaciones scroll-reveal accesibles (useInView / useReducedMotion), tipado y despliegue.
- Decisiones: [PENDIENTE: por qué Next.js App Router y Tailwind v4]
- Demo: https://apex-web-gamma.vercel.app/
- Repo: https://github.com/Brayhan23/apex-web (verificar que sea público)
- Aclaración: es el sitio de divulgación, no la plataforma educativa completa.

### 3. Adivina Quién Web — `adivina-quien`
- Tipo: Académico (individual) · Estado: Desplegado · Año: [PENDIENTE]
- Solución: juego multijugador en tiempo real con emparejamiento público o privado (enlace/QR), salas simultáneas, turnos y reglas validados por el servidor y estado aislado por partida.
- Stack: Python 3.10+, Flask, Flask-SocketIO, threading (locks por partida), JavaScript, HTML5, CSS3, qrcode.js, unittest, Render.
- Rol: desarrollo completo — arquitectura orientada a eventos, WebSockets, sincronización de estado, concurrencia, pruebas automatizadas y despliegue.
- Decisiones: [PENDIENTE: por qué locks por partida]
- Demo: https://juego-adivina-quien-web.onrender.com/ (avisar en la UI que el plan gratuito de Render puede tardar ~1 min en despertar)
- Repo: https://github.com/Brayhan23/juego-adivina-quien-web

### 4. NatiChain — `natichain`
- Tipo: Hackathon · Estado: Prototipo · Año: 2026
- Resultado: primer puesto compartido (con PACT) en Monad Blitz Medellín V2, 17 oct 2026.
- Problema: en las natilleras (grupos de ahorro colectivo) el dinero depende de la confianza en un tesorero.
- Solución: natillera con reglas en un contrato inteligente sobre Monad Testnet y una aplicación web para ver aportes y saldos con transparencia.
- Funciones: [PENDIENTE: confirmar cuáles quedaron implementadas en el MVP — creación de natilleras, unión y aportes en MON, consulta de saldos, bloqueo de retiros anticipados, retiro al vencimiento, salida de emergencia con penalidad]
- Stack: Solidity, Monad Testnet (EVM), Scaffold-ETH 2 [PENDIENTE: confirmar stack final].
- Rol: desarrollador principal en un equipo de 3. Implementó la mayor parte del proyecto; un compañero apoyó el despliegue del contrato inteligente y otro preparó la presentación.
- No afirmar que maneja fondos reales (es testnet).
- Repo/demo: (https://natichain.vercel.app/)

## Otros proyectos académicos (sección compacta: nombre, una línea, enlace)
- Presupuesto personal — Next.js — https://github.com/Brayhan23/presupuesto-personal — [PENDIENTE: descripción de una línea]
- Sistema Experto Diagnóstico — Python — https://github.com/Brayhan23/Sistema_Experto_Diagnostico — [PENDIENTE: descripción]
- ProyectoRMI — https://github.com/Brayhan23/ProyectoRMI — [PENDIENTE: descripción y tecnología]
