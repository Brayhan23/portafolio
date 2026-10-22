import type { L, Proyecto, ProyectoMenor } from "./types";

const P = (campo: string): L => ({
  es: `[PENDIENTE: ${campo}]`,
  en: `[PENDING: ${campo}]`,
});

export const proyectos: Proyecto[] = [
  {
    slug: "app-milagros",
    titulo: "App Milagros",
    resumen: {
      es: "Sistema de punto de venta e inventario local-first, 100 % offline, para un comercio de productos capilares.",
      en: "Local-first, fully offline point-of-sale and inventory system for a hair-products store.",
    },
    tipo: { es: "Comercial (freelance)", en: "Commercial (freelance)" },
    estado: { es: "En producción", en: "In production" },
    anio: "2026", // [PENDIENTE: confirmar año]
    rol: {
      es: "Desarrollador Full Stack principal — arquitectura, base de datos, frontend, backend, pruebas unitarias, optimización, empaquetado e instalación en el cliente. Otra persona colaboró en 4 historias de usuario.",
      en: "Lead Full Stack Developer — architecture, database, frontend, backend, unit tests, optimization, packaging and on-site installation. One other person contributed 4 user stories.",
    },
    problema: {
      es: "El negocio, un comercio de productos capilares en San Roque, Antioquia, necesitaba controlar ventas, inventario y créditos sin depender de internet y en equipos de pocos recursos.",
      en: "The business, a hair-products store in San Roque, Antioquia, needed to track sales, inventory and credit without relying on internet access and on low-spec machines.",
    },
    solucion: {
      es: "Sistema POS e inventario local-first, 100 % offline, empaquetado como ejecutable .exe para equipos de 4 GB de RAM.",
      en: "Local-first, 100% offline POS and inventory system, packaged as an .exe for machines with 4 GB of RAM.",
    },
    funciones: [
      { es: "Productos y stock", en: "Products and stock" },
      { es: "Escáner de códigos de barras", en: "Barcode scanner" },
      { es: "Ventas a crédito y control de deudores", en: "Credit sales and debtor tracking" },
      { es: "Facturación con impresora térmica de 80 mm", en: "Invoicing with an 80 mm thermal printer" },
      { es: "Recibos por correo", en: "Receipts by email" },
      { es: "Reportes e historial", en: "Reports and history" },
      { es: "Exportación a Excel y PDF", en: "Export to Excel and PDF" },
      { es: "Copias de seguridad automáticas", en: "Automatic backups" },
    ],
    decisiones: [
      { titulo: P("por qué SQLite y no PostgreSQL"), detalle: P("justificación de la elección de SQLite") },
      { titulo: P("qué se hizo para rendir en 4 GB de RAM"), detalle: P("optimizaciones aplicadas") },
    ],
    stack: ["Node.js", "Express 5", "SQLite (better-sqlite3)", "JavaScript", "HTML5", "CSS3", "PDFKit", "ExcelJS", "bcrypt", "@yao-pkg/pkg"],
    imagenes: [],
    enlaces: {
      repo: "https://github.com/Brayhan23/app-milagros", // [PENDIENTE: verificar que sea público]
    },
    destacado: true,
    orden: 1,
  },
  {
    slug: "apex-web",
    titulo: "APEX-WEB",
    resumen: {
      es: "Sitio de divulgación de 12 secciones para el proyecto de investigación APEX.",
      en: "12-section outreach website for the APEX research project.",
    },
    tipo: { es: "Comercial", en: "Commercial" },
    estado: { es: "Desplegado", en: "Deployed" },
    anio: "2026",
    rol: {
      es: "Desarrollo completo e independiente — arquitectura de componentes, diseño visual, estructura de contenido, animaciones scroll-reveal accesibles (useInView / useReducedMotion), tipado y despliegue.",
      en: "Complete, independent development — component architecture, visual design, content structure, accessible scroll-reveal animations (useInView / useReducedMotion), typing and deployment.",
    },
    problema: {
      es: "El proyecto de investigación APEX necesitaba un sitio para comunicar su propuesta, metodología, equipo y fases.",
      en: "The APEX research project needed a website to communicate its proposal, methodology, team and phases.",
    },
    solucion: {
      es: "Sitio de divulgación de 12 secciones organizado en los pilares REFUERZA, COMPITE y AVANZA. Es el sitio de divulgación, no la plataforma educativa completa.",
      en: "A 12-section outreach site organized around the pillars REFUERZA, COMPITE and AVANZA. It is the outreach site, not the full educational platform.",
    },
    funciones: [],
    decisiones: [
      { titulo: P("por qué Next.js App Router y Tailwind v4"), detalle: P("justificación técnica") },
    ],
    stack: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS v4", "clsx", "tailwind-merge", "Vercel"],
    imagenes: [],
    enlaces: {
      demo: "https://apex-web-gamma.vercel.app/",
      repo: "https://github.com/Brayhan23/apex-web", // [PENDIENTE: verificar que sea público]
    },
    destacado: true,
    orden: 2,
  },
  {
    slug: "adivina-quien",
    titulo: "Adivina Quién Web",
    resumen: {
      es: "Juego multijugador en tiempo real con salas simultáneas, turnos y reglas validados por el servidor.",
      en: "Real-time multiplayer game with simultaneous rooms, server-validated turns and rules.",
    },
    tipo: { es: "Académico (individual)", en: "Academic (individual)" },
    estado: { es: "Desplegado", en: "Deployed" },
    anio: "[PENDIENTE: año]",
    rol: {
      es: "Desarrollo completo — arquitectura orientada a eventos, WebSockets, sincronización de estado, concurrencia, pruebas automatizadas y despliegue.",
      en: "Complete development — event-driven architecture, WebSockets, state synchronization, concurrency, automated tests and deployment.",
    },
    problema: P("problema que resuelve el proyecto"),
    solucion: {
      es: "Juego multijugador en tiempo real con emparejamiento público o privado (enlace/QR), salas simultáneas, turnos y reglas validados por el servidor y estado aislado por partida.",
      en: "Real-time multiplayer game with public or private matchmaking (link/QR), simultaneous rooms, server-validated turns and rules, and per-game isolated state.",
    },
    funciones: [],
    decisiones: [
      { titulo: P("por qué locks por partida"), detalle: P("justificación técnica") },
    ],
    stack: ["Python 3.10+", "Flask", "Flask-SocketIO", "threading (locks por partida)", "JavaScript", "HTML5", "CSS3", "qrcode.js", "unittest", "Render"],
    imagenes: [],
    enlaces: {
      demo: "https://juego-adivina-quien-web.onrender.com/",
      notaDemo: {
        es: "El plan gratuito de Render puede tardar ~1 minuto en despertar.",
        en: "Render's free plan can take ~1 minute to wake up.",
      },
      repo: "https://github.com/Brayhan23/juego-adivina-quien-web",
    },
    destacado: true,
    orden: 3,
  },
  {
    slug: "natichain",
    titulo: "NatiChain",
    resumen: {
      es: "Natillera con reglas en un contrato inteligente sobre Monad Testnet. Primer puesto compartido en Monad Blitz Medellín V2.",
      en: "Savings circle (natillera) governed by a smart contract on Monad Testnet. Shared first place at Monad Blitz Medellín V2.",
    },
    tipo: { es: "Hackathon", en: "Hackathon" },
    estado: { es: "Prototipo", en: "Prototype" },
    anio: "2026",
    rol: {
      es: "Desarrollador principal en un equipo de 3. Implementó la mayor parte del proyecto; un compañero apoyó el despliegue del contrato inteligente y otro preparó la presentación.",
      en: "Lead developer in a team of 3. Implemented most of the project; one teammate helped deploy the smart contract and another prepared the presentation.",
    },
    problema: {
      es: "En las natilleras (grupos de ahorro colectivo) el dinero depende de la confianza en un tesorero.",
      en: "In natilleras (collective savings groups) the money depends on trusting a treasurer.",
    },
    solucion: {
      es: "Natillera con reglas en un contrato inteligente sobre Monad Testnet y una aplicación web para ver aportes y saldos con transparencia. Funciona en testnet: no maneja fondos reales.",
      en: "A natillera with rules enforced by a smart contract on Monad Testnet and a web app to view contributions and balances transparently. It runs on testnet: it does not handle real funds.",
    },
    funciones: [
      P("confirmar cuáles quedaron implementadas en el MVP (creación de natilleras, unión y aportes en MON, consulta de saldos, bloqueo de retiros anticipados, retiro al vencimiento, salida de emergencia con penalidad)"),
    ],
    decisiones: [],
    stack: ["Solidity", "Monad Testnet (EVM)", "Scaffold-ETH 2"], // [PENDIENTE: confirmar stack final]
    imagenes: [],
    enlaces: {
      demo: "https://natichain.vercel.app/",
    },
    destacado: true,
    orden: 4,
  },
];

export const proyectosMenores: ProyectoMenor[] = [
  {
    nombre: "Presupuesto personal",
    descripcion: P("descripción de una línea"),
    tecnologias: ["Next.js"],
    repo: "https://github.com/Brayhan23/presupuesto-personal",
  },
  {
    nombre: "Sistema Experto Diagnóstico",
    descripcion: P("descripción de una línea"),
    tecnologias: ["Python"],
    repo: "https://github.com/Brayhan23/Sistema_Experto_Diagnostico",
  },
  {
    nombre: "ProyectoRMI",
    descripcion: P("descripción y tecnología"),
    tecnologias: [],
    repo: "https://github.com/Brayhan23/ProyectoRMI",
  },
];

export const proyectosOrdenados = [...proyectos].sort((a, b) => a.orden - b.orden);
export const getProyecto = (slug: string) => proyectos.find((p) => p.slug === slug);
