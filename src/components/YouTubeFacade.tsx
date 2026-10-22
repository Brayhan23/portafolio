"use client";

import { useState } from "react";

// Fachada: no carga nada de YouTube hasta que la persona pulsa reproducir.
export function YouTubeFacade({
  youtubeId,
  titulo,
  reproducir,
}: {
  youtubeId: string;
  titulo: string;
  reproducir: string;
}) {
  const [activo, setActivo] = useState(false);

  if (activo) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={titulo}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="aspect-video w-full border border-line"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivo(true)}
      aria-label={`${reproducir}: ${titulo}`}
      className="group relative block aspect-video w-full overflow-hidden border border-line bg-surface transition-colors hover:border-accent"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- miniatura externa de YouTube; CSP debe permitir i.ytimg.com */}
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-[4px] border border-white/60 bg-black/70 px-4 py-2 font-mono text-sm text-white">
          ▶ {reproducir}
        </span>
      </span>
    </button>
  );
}
