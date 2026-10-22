import type { Lang, Video } from "@/content/types";
import { ui } from "@/content/ui";
import { t } from "@/lib/i18n";
import { YouTubeFacade } from "./YouTubeFacade";

export function ProjectVideo({ video, lang, titulo }: { video: Video; lang: Lang; titulo: string }) {
  const etiqueta = `${t(ui.video.titulo, lang)}: ${titulo}`;
  if ("youtubeId" in video) {
    return (
      <YouTubeFacade
        youtubeId={video.youtubeId}
        titulo={etiqueta}
        reproducir={t(ui.video.reproducir, lang)}
      />
    );
  }
  return (
    <video
      controls
      preload="none"
      poster={video.poster}
      aria-label={etiqueta}
      className="aspect-video w-full border border-line bg-surface"
    >
      <source src={video.src} type="video/mp4" />
      {t(ui.video.sinSoporte, lang)}
    </video>
  );
}
