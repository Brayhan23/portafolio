import Link from "next/link";
import { perfil } from "@/content/perfil";
import type { Lang } from "@/content/types";
import { ui } from "@/content/ui";
import { t } from "@/lib/i18n";
import { Container } from "./Container";
import { HeaderShell } from "./HeaderShell";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";

const enlaces = [
  ["proyectos", "proyectos"],
  ["experiencia", "experiencia"],
  ["logros", "logros"],
  ["contacto", "contacto"],
] as const;

export function Header({ lang }: { lang: Lang }) {
  return (
    <HeaderShell>
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
        <Link href={`/${lang}`} className="font-serif text-xl leading-none">
          {perfil.nombreCorto}
        </Link>
        <nav
          aria-label={t(ui.navegacion, lang)}
          className="order-last flex w-full gap-5 text-sm text-muted md:order-none md:w-auto"
        >
          {enlaces.map(([id, clave]) => (
            <Link key={id} href={`/${lang}#${id}`} className="transition-colors hover:text-accent">
              {t(ui.nav[clave], lang)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} label={t(ui.idioma, lang)} />
          <ThemeToggle
            label={t(ui.tema.cambiar, lang)}
            toLight={t(ui.tema.claro, lang)}
            toDark={t(ui.tema.oscuro, lang)}
          />
        </div>
      </Container>
    </HeaderShell>
  );
}
