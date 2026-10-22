import { perfil } from "@/content/perfil";
import { getProyecto } from "@/content/proyectos";
import { isLang } from "@/content/types";
import { ogImagen, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = perfil.nombreCorto;

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: l, slug } = await params;
  const lang = isLang(l) ? l : "es";
  const p = getProyecto(slug);
  if (!p) {
    return ogImagen({
      etiqueta: perfil.nombreCorto,
      titulo: perfil.nombre,
      subtitulo: "",
    });
  }
  return ogImagen({
    etiqueta: `${perfil.nombreCorto} · ${p.tipo[lang]} · ${p.anio}`,
    titulo: p.titulo,
    subtitulo: p.resumen[lang],
  });
}
