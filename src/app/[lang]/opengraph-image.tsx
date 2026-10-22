import { perfil } from "@/content/perfil";
import { isLang } from "@/content/types";
import { ui } from "@/content/ui";
import { ogImagen, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = ui.meta.titulo.es;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: l } = await params;
  const lang = isLang(l) ? l : "es";
  const titular = perfil.titular[lang].split("|").map((p) => p.trim());
  return ogImagen({
    etiqueta: perfil.ubicacion,
    titulo: perfil.nombre,
    subtitulo: titular.slice(0, 2).join(" · "),
  });
}
