"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Imagen, Lang } from "@/content/types";

type Textos = {
  ampliar: string;
  cerrar: string;
  anterior: string;
  siguiente: string;
  visor: string;
};

const boton =
  "rounded-[4px] border border-white/30 px-3 py-1.5 font-mono text-xs text-white transition-colors hover:border-white focus-visible:outline-white";

// Miniaturas + lightbox con <dialog> nativo: showModal() atrapa y devuelve el foco, y Esc cierra.
export function Gallery({
  imagenes,
  lang,
  textos,
}: {
  imagenes: Imagen[];
  lang: Lang;
  textos: Textos;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [actual, setActual] = useState(0);
  const total = imagenes.length;
  const img = imagenes[actual];

  const ir = (delta: number) => setActual((i) => (i + delta + total) % total);

  function abrir(i: number) {
    setActual(i);
    dialogRef.current?.showModal();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
    if (e.key === "ArrowLeft") ir(-1);
    if (e.key === "ArrowRight") ir(1);
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {imagenes.map((m, i) => (
          <li key={m.src}>
            <button
              type="button"
              onClick={() => abrir(i)}
              aria-label={`${textos.ampliar}: ${m.alt[lang]}`}
              className="block w-full border border-line transition-colors hover:border-accent"
            >
              <Image
                src={m.src}
                alt={m.alt[lang]}
                width={m.ancho}
                height={m.alto}
                sizes="(min-width: 1152px) 356px, (min-width: 768px) 31vw, 47vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={textos.visor}
        onKeyDown={onKeyDown}
        onClick={(e) =>
          e.target === dialogRef.current && dialogRef.current?.close()
        }
        className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-0 backdrop:bg-black/90"
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
          <div className="flex w-full max-w-5xl items-center justify-between">
            <p className="font-mono text-sm text-white" aria-live="polite">
              {actual + 1} / {total}
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              className={boton}
            >
              {textos.cerrar}
            </button>
          </div>
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt[lang]}
            width={img.ancho}
            height={img.alto}
            sizes="100vw"
            className="max-h-[70dvh] w-auto max-w-full object-contain"
          />
          <p className="min-h-6 max-w-3xl text-center text-sm text-white">
            {img.leyenda?.[lang]}
          </p>
          {total > 1 && (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => ir(-1)}
                className={boton}
                aria-label={textos.anterior}
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => ir(1)}
                className={boton}
                aria-label={textos.siguiente}
              >
                →
              </button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
