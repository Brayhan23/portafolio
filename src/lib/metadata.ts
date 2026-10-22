import type { Metadata } from "next";
import { perfil } from "@/content/perfil";
import { LANGS, type Lang } from "@/content/types";
import { siteUrl } from "./site";

const locales: Record<Lang, string> = { es: "es_CO", en: "en_US" };

// Metadatos por página e idioma: canonical, hreflang (es/en/x-default), Open Graph y Twitter.
// La imagen OG la aporta el archivo opengraph-image.tsx más cercano.
export function metadatos({
  lang,
  ruta = "",
  titulo,
  descripcion,
  indexar = true,
}: {
  lang: Lang;
  ruta?: string;
  titulo: string;
  descripcion: string;
  indexar?: boolean;
}): Metadata {
  const url = `/${lang}${ruta}`;
  return {
    metadataBase: new URL(siteUrl),
    title: titulo,
    description: descripcion,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LANGS.map((l) => [l, `/${l}${ruta}`])),
        "x-default": `/es${ruta}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: titulo,
      description: descripcion,
      siteName: perfil.nombreCorto,
      locale: locales[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => locales[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
    },
    robots: indexar ? undefined : { index: false, follow: true },
  };
}
