import type { L } from "./types";

export const perfil = {
  nombre: "Brayhan Alexander Escobar Rivera",
  nombreCorto: "Brayhan Escobar",
  ubicacion: "Medellín, Colombia",
  titular: {
    es: "Desarrollador Full Stack | React · Next.js · Node.js · PostgreSQL | Experiencia Freelance | Docente de Programación | Ingeniero Informático en formación",
    en: "Full Stack Developer | React · Next.js · Node.js · PostgreSQL | Freelance Experience | Programming Teacher | Computer Engineering Student",
  } satisfies L,
  resumen: {
    es: "Desarrollador Full Stack y estudiante de noveno semestre de Ingeniería Informática en el Politécnico Colombiano Jaime Isaza Cadavid. Desarrolla software para clientes reales desde 2025, integrando frontend, backend y datos con JavaScript, React, Next.js, Node.js, PostgreSQL y SQLite. Combina el desarrollo con la docencia y la investigación en el Semillero de IA (SIIC).",
    en: "Full Stack Developer and ninth-semester Computer Engineering student at Politécnico Colombiano Jaime Isaza Cadavid. Has built software for real clients since 2025, integrating frontend, backend and data with JavaScript, React, Next.js, Node.js, PostgreSQL and SQLite. Combines development with teaching and research in the AI Research Group (SIIC).",
  } satisfies L,
  formacion: [
    {
      titulo: {
        es: "Ingeniería Informática",
        en: "Computer Engineering",
      },
      institucion: "Politécnico Colombiano Jaime Isaza Cadavid",
      detalle: {
        es: "9.º semestre, en curso",
        en: "9th semester, in progress",
      },
    },
    {
      titulo: {
        es: "Diplomado en Docencia Universitaria (120 h)",
        en: "Diploma in University Teaching (120 h)",
      },
      institucion: "Politécnico Colombiano Jaime Isaza Cadavid",
      detalle: {
        es: "abr – jul 2026",
        en: "Apr – Jul 2026",
      },
    },
  ],
  cv: {
    es: "/cv/portafolio-brayhan-escobar-es.pdf",
    en: "/cv/portafolio-brayhan-escobar-en.pdf",
  } satisfies L,
  correo: "escobarb634@gmail.com",
  // Solo para la versión PDF (/imprimir). Nunca mostrar en el sitio web.
  telefono: "+57 321 776 9409",
  linkedin:
    "https://www.linkedin.com/in/brayhan-alexander-escobar-rivera-510ab1389/",
  github: "https://github.com/Brayhan23",
  foto: {
    src: "/perfil/brayhan.jpg",
    ancho: 1258,
    alto: 1086,
    alt: {
      es: "Retrato de Brayhan Escobar",
      en: "Portrait of Brayhan Escobar",
    } satisfies L,
  },
  stackPrincipal: ["React", "JavaScript", "Next.js", "Node.js", "PostgreSQL", "SQLite"],
  stackTambien: [
    "TypeScript",
    "Express",
    "NestJS",
    "Java/Spring Boot",
    "Python/Flask",
    "Tailwind CSS",
    "Git/GitHub",
    "Vercel",
    "Render",
    {
      es: "Pruebas automatizadas",
      en: "Automated testing",
    } satisfies L,
  ] as (string | L)[],
  // [PENDIENTE: URL final del sitio en Vercel]. Vacío = no se muestra en la versión impresa.
  urlSitio: "",
};
