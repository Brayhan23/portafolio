import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/es/imprimir", "/en/imprimir"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
