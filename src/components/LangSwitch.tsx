"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGS, type Lang } from "@/content/types";

// Cambia el primer segmento de la ruta conservando el resto.
export function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname();
  const resto = pathname.split("/").slice(2).join("/");
  return (
    <nav
      aria-label={label}
      className="flex items-center gap-1 font-mono text-xs"
    >
      {LANGS.map((l) => (
        <Link
          key={l}
          href={`/${l}${resto ? `/${resto}` : ""}`}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? "true" : undefined}
          className={`rounded-[4px] px-1.5 py-1 uppercase transition-colors ${
            l === lang ? "text-accent" : "text-muted hover:text-accent"
          }`}
        >
          {l}
        </Link>
      ))}
    </nav>
  );
}
