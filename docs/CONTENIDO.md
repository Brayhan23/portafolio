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
- Foto: `public/perfil/brayhan.jpg` (vertical 4:5). Ubicación: hero, a la derecha en escritorio, debajo del texto en móvil. Recorte 4:5, borde 1px color line, radio 4px, sin filtros.
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
- Tipo: Comercial (freelance) · Estado: En producción · Año: 2026
- Contexto: comercio de productos capilares en San Roque, Antioquia.
- Problema: el negocio necesitaba controlar ventas, inventario y créditos sin depender de internet y en equipos de pocos recursos.
- Solución: sistema POS e inventario local-first, 100 % offline, empaquetado como ejecutable .exe para equipos de 4 GB de RAM.
- Funciones: productos y stock; escáner de códigos de barras; ventas a crédito y control de deudores; facturación con impresora térmica de 80 mm; recibos por correo; reportes e historial; exportación a Excel y PDF; copias de seguridad automáticas.
- Stack: Node.js, Express 5, SQLite (better-sqlite3), JavaScript, HTML5, CSS3, PDFKit, ExcelJS, bcrypt, @yao-pkg/pkg.
- Rol: Desarrollador Full Stack principal — arquitectura, base de datos, frontend, backend, pruebas unitarias, optimización, empaquetado e instalación en el cliente. Otra persona colaboró en 4 historias de usuario.
- Decisiones técnicas:
  - SQLite en lugar de PostgreSQL: es una base de datos liviana que va incluida en el mismo paquete de la aplicación, así que no hay que instalar nada en el equipo del cliente.
  - Rendimiento en 4 GB de RAM: el servidor del cliente tenía esa limitación, por lo que se redujo el trabajo innecesario tanto en el servidor como en el cliente. Por ejemplo, no se incluyeron imágenes de productos, para mantener el sistema liviano.
- Repo: https://github.com/Brayhan23/app-milagros (repo público)
- Demo: no hay demo pública → galería + video.

### 2. APEX-WEB — `apex-web`
- Tipo: Comercial · Estado: Desplegado · Año: 2026
- Problema: el proyecto de investigación APEX necesitaba un sitio para comunicar su propuesta, metodología, equipo y fases.
- Solución: sitio de divulgación de 12 secciones organizado en los pilares REFUERZA, COMPITE y AVANZA.
- Stack: Next.js (App Router), React, TypeScript, Tailwind CSS v4, clsx, tailwind-merge, Vercel.
- Rol: desarrollo completo e independiente — arquitectura de componentes, diseño visual, estructura de contenido, animaciones scroll-reveal accesibles (useInView / useReducedMotion), tipado y despliegue.
- Decisiones técnicas:
  - Next.js App Router: Server Components para las vistas que no requieren interacción y Client Components reservados solo para las partes interactivas.
  - Tailwind CSS v4: estilos utilitarios con configuración directa en CSS, que mantienen el diseño consistente y el CSS final liviano.
- Demo: https://apex-web-gamma.vercel.app/
- Repo: https://github.com/Brayhan23/apex-web (repo público)
- Aclaración: es el sitio de divulgación, no la plataforma educativa completa.

### 3. Adivina Quién Web — `adivina-quien`
- Tipo: Académico (individual) · Estado: Desplegado · Año: 2025
- Origen: comenzó como proyecto de una materia y luego se convirtió en un proyecto personal.
- Problema: construir un juego multijugador en tiempo real donde varias partidas simultáneas se mantengan consistentes: el servidor valida las reglas y los turnos, y cada partida tiene su propio estado.
- Solución: juego multijugador en tiempo real con emparejamiento público o privado (enlace/QR), salas simultáneas, turnos y reglas validados por el servidor y estado aislado por partida.
- Stack: Python 3.10+, Flask, Flask-SocketIO, threading (locks por partida), JavaScript, HTML5, CSS3, qrcode.js, unittest, Render.
- Rol: desarrollo completo — arquitectura orientada a eventos, WebSockets, sincronización de estado, concurrencia, pruebas automatizadas y despliegue.
- Decisiones técnicas:
  - Locks por partida: evitan que varias operaciones modifiquen al mismo tiempo el estado de una misma partida de forma incompatible.
- Demo: https://juego-adivina-quien-web.onrender.com/ (avisar en la UI que el plan gratuito de Render puede tardar ~1 min en despertar)
- Repo: https://github.com/Brayhan23/juego-adivina-quien-web

### 4. NatiChain — `natichain`
- Tipo: Hackathon · Estado: Prototipo · Año: 2026
- Resultado: primer puesto compartido (con PACT) en Monad Blitz Medellín V2, 17 oct 2026.
- Problema: en las natilleras (grupos de ahorro colectivo) el dinero depende de la confianza en un tesorero.
- Solución: natillera con reglas en un contrato inteligente sobre Monad Testnet y una aplicación web para ver aportes y saldos con transparencia.
- Funciones del MVP (todas en Monad Testnet):
  - Ahorro: crear natillera, unirse, aportar cuotas y retirar al cierre. Nadie retira antes (sello BLOQUEADO) y no hay administrador.
  - Salida de emergencia: el socio recibe el 90 % y el 10 % de penalidad queda para el grupo.
  - Préstamos a empresas o personas: solo se aprueban si todos los socios votan sí, con tope del 50 %, pagaré con huella (hash) en la blockchain (demostración), cobro, pago y mora.
  - Eventos con inscripción (bingo, rifa, paseo, venta) y donaciones.
  - "Tu diciembre": muestra el ahorro, la ganancia estimada y de dónde sale.
  - Página "Confianza": contrato verificado y límites conocidos.
- Stack: Solidity 0.8.28 (29 pruebas), Scaffold-ETH 2 con Hardhat, Next.js 15, React 19, wagmi, viem y RainbowKit. Desplegado en Vercel; contrato verificado en Sourcify (dirección 0x3FcED7F51b5559bA1FBBB45F0bbb53Bf04409675, Monad Testnet).
- Rol: desarrollador principal en un equipo de 3. Implementó la mayor parte del proyecto; un compañero apoyó el despliegue del contrato inteligente y otro preparó la presentación.
- No afirmar que maneja fondos reales (es testnet).
- Demo: https://natichain.vercel.app/
- Repo: https://github.com/Brayhan23/natichain (público)

## Otros proyectos académicos (sección compacta: nombre, una línea, enlace)
- Presupuesto personal — Next.js, Vercel — https://github.com/Brayhan23/presupuesto-personal — Aplicación web en la nube para crear un presupuesto mensual y llevar el control de los gastos.
- Sistema Experto Diagnóstico — Python — https://github.com/Brayhan23/Sistema_Experto_Diagnostico — Proyecto académico en Python con una aplicación (app.py) y un cuaderno de Jupyter sobre un agente robot limpiador.
- ProyectoRMI: NO mostrar por ahora (el repo no tiene descripción ni README). Incluirlo cuando lo tenga.
