import type { MetadataRoute } from "next";
import { proyectos } from "@/content/proyectos";
import { LANGS } from "@/content/types";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", ...proyectos.map((p) => `/proyectos/${p.slug}`)];
  return rutas.flatMap((ruta) =>
    LANGS.map((lang) => ({
      url: `${siteUrl}/${lang}${ruta}`,
      changeFrequency: "monthly" as const,
      priority: ruta === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(LANGS.map((l) => [l, `${siteUrl}/${l}${ruta}`])),
      },
    })),
  );
}
