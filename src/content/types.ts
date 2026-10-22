export type Lang = "es" | "en";
export type L = { es: string; en: string };

export const LANGS: readonly Lang[] = ["es", "en"];
export const isLang = (v: string): v is Lang =>
  (LANGS as readonly string[]).includes(v);

export type Imagen = {
  src: string;
  alt: L;
  ancho: number;
  alto: number;
  leyenda?: L;
};

// Enlace externo que respalda un resultado (p. ej. publicación oficial).
export type Evidencia = { url: string; etiqueta: L };

export type Video = { src: string; poster: string } | { youtubeId: string };

export type Proyecto = {
  slug: string;
  titulo: string;
  resumen: L;
  tipo: L;
  estado: L;
  anio: string;
  rol: L;
  origen?: L;
  resultado?: L;
  problema: L;
  solucion: L;
  funciones: L[];
  decisiones: { titulo: L; detalle: L }[];
  stack: string[];
  imagenes: Imagen[];
  video?: Video;
  enlaces: {
    repo?: string;
    demo?: string;
    notaDemo?: L;
    evidencia?: Evidencia;
  };
  destacado: boolean;
  orden: number;
};

export type ProyectoMenor = {
  nombre: string;
  descripcion: L;
  tecnologias: string[];
  repo: string;
};

export type Experiencia = {
  cargo: L;
  organizacion: string;
  periodo: L;
  descripcion: L;
};

export type Logro = {
  fecha: L;
  titulo: L;
  detalle: L;
  evidencia?: Evidencia;
};
