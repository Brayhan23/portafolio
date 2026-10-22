import type { Proyecto, ProyectoMenor } from "./types";
import { verPublicacion } from "./ui";

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
    anio: "2026",
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
      {
        es: "Ventas a crédito y control de deudores",
        en: "Credit sales and debtor tracking",
      },
      {
        es: "Facturación con impresora térmica de 80 mm",
        en: "Invoicing with an 80 mm thermal printer",
      },
      { es: "Recibos por correo", en: "Receipts by email" },
      { es: "Reportes e historial", en: "Reports and history" },
      { es: "Exportación a Excel y PDF", en: "Export to Excel and PDF" },
      { es: "Copias de seguridad automáticas", en: "Automatic backups" },
    ],
    decisiones: [
      {
        titulo: {
          es: "SQLite en lugar de PostgreSQL",
          en: "SQLite instead of PostgreSQL",
        },
        detalle: {
          es: "Es una base de datos liviana que va incluida en el mismo paquete de la aplicación, así que no hay que instalar nada en el equipo del cliente.",
          en: "It is a lightweight database bundled in the same package as the application, so nothing has to be installed on the client's machine.",
        },
      },
      {
        titulo: {
          es: "Rendimiento en 4 GB de RAM",
          en: "Performance on 4 GB of RAM",
        },
        detalle: {
          es: "El servidor del cliente tenía esa limitación, por lo que se redujo el trabajo innecesario tanto en el servidor como en el cliente. Por ejemplo, no se incluyeron imágenes de productos, para mantener el sistema liviano.",
          en: "The client's machine had that limitation, so unnecessary work was reduced on both the server and the client. For example, product images were left out to keep the system lightweight.",
        },
      },
    ],
    stack: [
      "Node.js",
      "Express 5",
      "SQLite (better-sqlite3)",
      "JavaScript",
      "HTML5",
      "CSS3",
      "PDFKit",
      "ExcelJS",
      "bcrypt",
      "@yao-pkg/pkg",
    ],
    // Capturas con datos simulados.
    imagenes: [
      {
        src: "/proyectos/app-milagros/01-venta.webp",
        ancho: 1440,
        alto: 809,
        alt: {
          es: "Pantalla de nueva venta con un producto en el carrito, tipo de cliente, método de pago y total con IVA",
          en: "New sale screen with one product in the cart, customer type, payment method and total with VAT",
        },
        leyenda: {
          es: "Punto de venta: el producto se agrega escaneando el código de barras o buscándolo por nombre.",
          en: "Point of sale: products are added by scanning the barcode or searching by name.",
        },
      },
      {
        src: "/proyectos/app-milagros/02-factura.webp",
        ancho: 1440,
        alto: 987,
        alt: {
          es: "Factura generada con detalle del producto, método de pago, total y opción de enviar copia por correo",
          en: "Generated invoice with product details, payment method, total and an option to email a copy",
        },
        leyenda: {
          es: "Factura lista para imprimir o enviar por correo al cliente.",
          en: "Invoice ready to print or email to the customer.",
        },
      },
      {
        src: "/proyectos/app-milagros/03-inventario.webp",
        ancho: 1440,
        alto: 1045,
        alt: {
          es: "Tabla de inventario con código, precios de compra, detal y mayor, stock y un aviso de stock bajo",
          en: "Inventory table with code, purchase, retail and wholesale prices, stock and a low-stock warning",
        },
        leyenda: {
          es: "Inventario con precios de compra, detal y mayor, y aviso de productos con poco stock.",
          en: "Inventory with purchase, retail and wholesale prices, and a warning for low-stock products.",
        },
      },
      {
        src: "/proyectos/app-milagros/04-ingreso-stock.webp",
        ancho: 1440,
        alto: 1215,
        alt: {
          es: "Formulario en línea para sumar unidades al stock de un producto",
          en: "Inline form to add units to a product's stock",
        },
        leyenda: {
          es: "Ingreso de mercancía directamente desde la fila del producto.",
          en: "Stock intake directly from the product row.",
        },
      },
      {
        src: "/proyectos/app-milagros/05-cliente-credito.webp",
        ancho: 1440,
        alto: 846,
        alt: {
          es: "Ficha de cliente con deuda total, facturas a crédito, saldo pendiente y alerta de mora",
          en: "Customer record with total debt, credit invoices, outstanding balance and an overdue alert",
        },
        leyenda: {
          es: "Control de deudores: facturas a crédito, saldos y días de mora por cliente.",
          en: "Debtor tracking: credit invoices, balances and days overdue per customer.",
        },
      },
      {
        src: "/proyectos/app-milagros/06-registrar-abono.webp",
        ancho: 1440,
        alto: 1020,
        alt: {
          es: "Formulario para registrar un pago parcial sobre una factura a crédito",
          en: "Form to record a partial payment on a credit invoice",
        },
        leyenda: {
          es: "Registro de abonos sobre una factura a crédito.",
          en: "Recording partial payments on a credit invoice.",
        },
      },
      {
        src: "/proyectos/app-milagros/07-ventas-del-dia.webp",
        ancho: 1440,
        alto: 1190,
        alt: {
          es: "Reporte de ventas del día con totales, ganancia, IVA, desglose por método de pago y lista de ventas",
          en: "Daily sales report with totals, profit, VAT, breakdown by payment method and list of sales",
        },
        leyenda: {
          es: "Reporte diario: facturado, recibido en caja, ganancia e IVA, con desglose por método de pago.",
          en: "Daily report: billed, cash received, profit and VAT, broken down by payment method.",
        },
      },
      {
        src: "/proyectos/app-milagros/08-mas-vendidos.webp",
        ancho: 1440,
        alto: 631,
        alt: {
          es: "Tabla de productos más vendidos con unidades vendidas e ingreso generado en un rango de fechas",
          en: "Best-selling products table with units sold and revenue generated over a date range",
        },
        leyenda: {
          es: "Productos más vendidos en un rango de fechas.",
          en: "Best-selling products over a date range.",
        },
      },
      {
        src: "/proyectos/app-milagros/09-auditoria.webp",
        ancho: 1440,
        alto: 1507,
        alt: {
          es: "Registro de actividad con fecha, usuario, acción y detalle de ventas e inicios de sesión",
          en: "Activity log with date, user, action and details of sales and logins",
        },
        leyenda: {
          es: "Auditoría: quién hizo qué y cuándo, solo lectura.",
          en: "Audit log: who did what and when, read-only.",
        },
      },
    ],
    enlaces: {
      repo: "https://github.com/Brayhan23/app-milagros",
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
      {
        titulo: { es: "Next.js App Router", en: "Next.js App Router" },
        detalle: {
          es: "Server Components para las vistas que no requieren interacción y Client Components reservados solo para las partes interactivas.",
          en: "Server Components for views that need no interaction, with Client Components reserved only for the interactive parts.",
        },
      },
      {
        titulo: { es: "Tailwind CSS v4", en: "Tailwind CSS v4" },
        detalle: {
          es: "Estilos utilitarios con configuración directa en CSS, que mantienen el diseño consistente y el CSS final liviano.",
          en: "Utility-first styling configured directly in CSS, which keeps the design consistent and the final CSS lightweight.",
        },
      },
    ],
    stack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "clsx",
      "tailwind-merge",
      "Vercel",
    ],
    imagenes: [],
    enlaces: {
      demo: "https://apex-web-gamma.vercel.app/",
      repo: "https://github.com/Brayhan23/apex-web",
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
    anio: "2025",
    origen: {
      es: "Comenzó como proyecto de una materia y luego se convirtió en un proyecto personal.",
      en: "It started as a course project and later became a personal project.",
    },
    rol: {
      es: "Desarrollo completo — arquitectura orientada a eventos, WebSockets, sincronización de estado, concurrencia, pruebas automatizadas y despliegue.",
      en: "Complete development — event-driven architecture, WebSockets, state synchronization, concurrency, automated tests and deployment.",
    },
    problema: {
      es: "Construir un juego multijugador en tiempo real donde varias partidas simultáneas se mantengan consistentes: el servidor valida las reglas y los turnos, y cada partida tiene su propio estado.",
      en: "Build a real-time multiplayer game where several simultaneous matches stay consistent: the server validates rules and turns, and each match has its own state.",
    },
    solucion: {
      es: "Juego multijugador en tiempo real con emparejamiento público o privado (enlace/QR), salas simultáneas, turnos y reglas validados por el servidor y estado aislado por partida.",
      en: "Real-time multiplayer game with public or private matchmaking (link/QR), simultaneous rooms, server-validated turns and rules, and per-game isolated state.",
    },
    funciones: [],
    decisiones: [
      {
        titulo: { es: "Locks por partida", en: "Per-match locks" },
        detalle: {
          es: "Evitan que varias operaciones modifiquen al mismo tiempo el estado de una misma partida de forma incompatible.",
          en: "They prevent several operations from modifying the state of the same match at the same time in incompatible ways.",
        },
      },
    ],
    stack: [
      "Python 3.10+",
      "Flask",
      "Flask-SocketIO",
      "threading (locks por partida)",
      "JavaScript",
      "HTML5",
      "CSS3",
      "qrcode.js",
      "unittest",
      "Render",
    ],
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
      es: "Natillera con reglas en un contrato inteligente sobre Monad Testnet. Ganador de Monad Blitz Medellín V2.",
      en: "Savings circle (natillera) governed by a smart contract on Monad Testnet. Winner of Monad Blitz Medellín V2.",
    },
    resultado: {
      es: "Resultado: primer puesto compartido (con PACT) en Monad Blitz Medellín V2, 17 oct 2026.",
      en: "Result: shared first place (with PACT) at Monad Blitz Medellín V2, Oct 17, 2026.",
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
      es: "Natillera con reglas en un contrato inteligente sobre Monad Testnet y una aplicación web para ver aportes y saldos con transparencia. Funciona en testnet: no maneja fondos reales. Contrato verificado en Sourcify (0x3FcED7F51b5559bA1FBBB45F0bbb53Bf04409675, Monad Testnet).",
      en: "A natillera with rules enforced by a smart contract on Monad Testnet and a web app to view contributions and balances transparently. It runs on testnet: it does not handle real funds. Contract verified on Sourcify (0x3FcED7F51b5559bA1FBBB45F0bbb53Bf04409675, Monad Testnet).",
    },
    funciones: [
      {
        es: "Ahorro: crear natillera, unirse, aportar cuotas y retirar al cierre. Nadie retira antes (sello BLOQUEADO) y no hay administrador.",
        en: "Savings: create a natillera, join, pay contributions and withdraw at closing. Nobody withdraws early (LOCKED seal) and there is no administrator.",
      },
      {
        es: "Salida de emergencia: el socio recibe el 90 % y el 10 % de penalidad queda para el grupo.",
        en: "Emergency exit: the member receives 90% and the 10% penalty stays with the group.",
      },
      {
        es: "Préstamos a empresas o personas: solo se aprueban si todos los socios votan sí, con tope del 50 %, pagaré con huella (hash) en la blockchain (demostración), cobro, pago y mora.",
        en: "Loans to businesses or individuals: approved only if all members vote yes, capped at 50%, with a promissory-note hash on the blockchain (demonstration), collection, payment and late fees.",
      }, // revisar-en
      {
        es: "Eventos con inscripción (bingo, rifa, paseo, venta) y donaciones.",
        en: "Events with sign-up (bingo, raffle, outing, sale) and donations.",
      },
      {
        es: '"Tu diciembre": muestra el ahorro, la ganancia estimada y de dónde sale.',
        en: '"Your December": shows your savings, the estimated gain and where it comes from.',
      }, // revisar-en
      {
        es: 'Página "Confianza": contrato verificado y límites conocidos.',
        en: '"Trust" page: verified contract and known limitations.',
      },
    ],
    decisiones: [],
    stack: [
      "Solidity 0.8.28",
      "Monad Testnet (EVM)",
      "Scaffold-ETH 2",
      "Hardhat",
      "Next.js 15",
      "React 19",
      "wagmi",
      "viem",
      "RainbowKit",
      "Sourcify",
      "Vercel",
    ],
    imagenes: [],
    enlaces: {
      demo: "https://natichain.vercel.app/",
      repo: "https://github.com/Brayhan23/natichain",
      evidencia: {
        url: "https://www.instagram.com/p/DesASpDlpte/",
        etiqueta: verPublicacion,
      },
    },
    destacado: true,
    orden: 4,
  },
];

export const proyectosMenores: ProyectoMenor[] = [
  {
    nombre: "Presupuesto personal",
    descripcion: {
      es: "Aplicación web en la nube para crear un presupuesto mensual y llevar el control de los gastos.",
      en: "Cloud web app to create a monthly budget and keep track of expenses.",
    },
    tecnologias: ["Next.js", "Vercel"],
    repo: "https://github.com/Brayhan23/presupuesto-personal",
  },
  {
    nombre: "Sistema Experto Diagnóstico",
    descripcion: {
      es: "Proyecto académico en Python con una aplicación (app.py) y un cuaderno de Jupyter sobre un agente robot limpiador.",
      en: "Academic Python project with an application (app.py) and a Jupyter notebook about a cleaning-robot agent.",
    },
    tecnologias: ["Python"],
    repo: "https://github.com/Brayhan23/Sistema_Experto_Diagnostico",
  },
];

export const proyectosOrdenados = [...proyectos].sort(
  (a, b) => a.orden - b.orden,
);
export const getProyecto = (slug: string) =>
  proyectos.find((p) => p.slug === slug);
