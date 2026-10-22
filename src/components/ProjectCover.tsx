import Image from "next/image";
import { useId } from "react";
import type { Lang, Proyecto } from "@/content/types";

function iniciales(titulo: string) {
  const palabras = titulo.split(/[\s-]+/).filter(Boolean);
  return (palabras.length > 1 ? palabras.slice(0, 2).map((p) => p[0]) : [titulo.slice(0, 2)])
    .join("")
    .toUpperCase();
}

// Imagen principal del proyecto o, sin imágenes, placeholder tipográfico con patrón de líneas.
export function ProjectCover({
  proyecto,
  lang,
  priority = false,
  sizes = "(min-width: 768px) 560px, 100vw",
}: {
  proyecto: Proyecto;
  lang: Lang;
  priority?: boolean;
  sizes?: string;
}) {
  const patron = useId();
  const img = proyecto.imagenes[0];
  if (img) {
    return (
      <Image
        src={img.src}
        alt={img.alt[lang]}
        width={img.ancho}
        height={img.alto}
        priority={priority}
        sizes={sizes}
        className="aspect-[16/10] w-full border-b border-line object-cover"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-line bg-accent-soft text-accent"
    >
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden="true">
        <defs>
          <pattern id={patron} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patron})`} />
      </svg>
      <span className="relative font-serif text-7xl">{iniciales(proyecto.titulo)}</span>
    </div>
  );
}
