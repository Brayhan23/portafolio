import { perfil } from "@/content/perfil";
import type { Lang } from "@/content/types";
import { Container } from "./Container";
import { TextLink } from "./ButtonLink";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer lang={lang} className="mt-24 border-t border-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} {perfil.nombre}
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <a
              href={`mailto:${perfil.correo}`}
              className="font-mono text-ink transition-colors hover:text-accent"
            >
              {perfil.correo}
            </a>
          </li>
          <li>
            <TextLink href={perfil.linkedin}>LinkedIn</TextLink>
          </li>
          <li>
            <TextLink href={perfil.github}>GitHub</TextLink>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
