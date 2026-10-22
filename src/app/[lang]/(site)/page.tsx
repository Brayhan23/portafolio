import Image from "next/image";
import Link from "next/link";
import { ButtonLink, TextLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ProjectCover } from "@/components/ProjectCover";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { experiencia } from "@/content/experiencia";
import { logros } from "@/content/logros";
import { perfil } from "@/content/perfil";
import { proyectosMenores, proyectosOrdenados } from "@/content/proyectos";
import { ui } from "@/content/ui";
import { assertLang, t } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  assertLang(lang);

  // El titular viene separado por "|": en escritorio se parte en 2 líneas con separadores ·
  const partes = t(perfil.titular, lang).split("|").map((p) => p.trim());
  const lineas = [partes.slice(0, 2), partes.slice(2)];

  return (
    <main id="contenido">
      <Container className="grid items-center gap-12 py-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-20">
        <div>
          <p className="mb-5 font-mono text-sm text-muted">{perfil.ubicacion}</p>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">{perfil.nombre}</h1>
          <p className="mt-6 text-lg text-ink md:text-xl">
            {lineas.map((l, i) => (
              <span key={i} className="block">
                {l.join(" · ")}
              </span>
            ))}
          </p>
          <p className="mt-6 max-w-xl text-muted">{t(perfil.resumen, lang)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${lang}#proyectos`}>{t(ui.botones.verProyectos, lang)}</ButtonLink>
            <ButtonLink href={perfil.cv[lang]} variant="secondary" download>
              {t(ui.botones.descargarPdf, lang)}
            </ButtonLink>
          </div>
        </div>
        <Image
          src={perfil.foto.src}
          alt={t(perfil.foto.alt, lang)}
          width={perfil.foto.ancho}
          height={perfil.foto.alto}
          priority
          sizes="(min-width: 768px) 400px, 384px"
          className="aspect-[4/5] w-full max-w-sm rounded-[4px] border border-line object-cover md:justify-self-end"
        />
      </Container>

      <Container as="section" id="proyectos" labelledBy="titulo-destacados" className="reveal py-12 md:py-16">
        <SectionHeader numero="01" titulo={t(ui.secciones.destacados, lang)} id="titulo-destacados" />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {proyectosOrdenados.map((p) => (
            <li
              key={p.slug}
              className="group relative flex flex-col border border-line bg-surface transition-colors hover:border-accent"
            >
              <ProjectCover proyecto={p} lang={lang} />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <p className="font-mono text-xs text-muted">
                  {t(p.tipo, lang)} · {t(p.estado, lang)} · {p.anio}
                </p>
                <h3 className="font-serif text-3xl leading-tight">{p.titulo}</h3>
                <p className="text-muted">{t(p.resumen, lang)}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${lang}/proyectos/${p.slug}`}
                  className="text-sm font-medium text-accent after:absolute after:inset-0 after:content-['']"
                >
                  {t(ui.botones.verCaso, lang)} →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Container as="section" id="otros" labelledBy="titulo-otros" className="reveal py-12 md:py-16">
        <SectionHeader numero="02" titulo={t(ui.secciones.otros, lang)} id="titulo-otros" />
        <div className="mt-8">
          <div className="hidden grid-cols-[1.2fr_2fr_1.2fr_auto] gap-6 border-b border-line pb-2 font-mono text-xs text-muted md:grid">
            <span>{t(ui.campos.nombre, lang)}</span>
            <span>{t(ui.campos.descripcion, lang)}</span>
            <span>{t(ui.campos.tecnologias, lang)}</span>
            <span>{t(ui.botones.repo, lang)}</span>
          </div>
          <ul>
            {proyectosMenores.map((p) => (
              <li
                key={p.nombre}
                className="grid gap-1 border-b border-line py-4 md:grid-cols-[1.2fr_2fr_1.2fr_auto] md:gap-6"
              >
                <span className="font-medium">{p.nombre}</span>
                <span className="text-muted">{t(p.descripcion, lang)}</span>
                <span className="font-mono text-xs text-muted md:pt-1">
                  {p.tecnologias.length ? p.tecnologias.join(", ") : "—"}
                </span>
                <TextLink href={p.repo}>{t(ui.botones.repo, lang)}</TextLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container as="section" id="experiencia" labelledBy="titulo-experiencia" className="reveal py-12 md:py-16">
        <SectionHeader numero="03" titulo={t(ui.secciones.experiencia, lang)} id="titulo-experiencia" />
        <ol className="mt-10 ml-1 border-l border-line">
          {experiencia.map((e) => (
            <li key={e.periodo.es + e.organizacion} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[5px] size-[9px] rounded-full border border-accent bg-bg"
              />
              <p className="font-mono text-xs text-accent">{t(e.periodo, lang)}</p>
              <h3 className="mt-1 text-lg font-medium">{t(e.cargo, lang)}</h3>
              <p className="text-sm text-muted">{e.organizacion}</p>
              <p className="mt-2 max-w-2xl text-muted">{t(e.descripcion, lang)}</p>
            </li>
          ))}
        </ol>
      </Container>

      <Container as="section" id="logros" labelledBy="titulo-logros" className="reveal py-12 md:py-16">
        <SectionHeader numero="04" titulo={t(ui.secciones.logros, lang)} id="titulo-logros" />
        <ul className="mt-8">
          {logros.map((l) => (
            <li
              key={l.titulo.es}
              className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8"
            >
              <p className="font-mono text-xs text-accent md:pt-1.5">{t(l.fecha, lang)}</p>
              <div>
                <h3 className="text-lg font-medium">{t(l.titulo, lang)}</h3>
                <p className="mt-1 text-muted">{t(l.detalle, lang)}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Container as="section" id="contacto" labelledBy="titulo-contacto" className="reveal py-12 md:py-16">
        <SectionHeader numero="05" titulo={t(ui.secciones.contacto, lang)} id="titulo-contacto" />
        <p className="mt-8 max-w-xl font-serif text-3xl leading-snug md:text-4xl">
          {t(ui.contacto.frase, lang)}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink href={`mailto:${perfil.correo}`}>{t(ui.botones.escribeme, lang)}</ButtonLink>
          <TextLink href={perfil.linkedin}>LinkedIn</TextLink>
          <TextLink href={perfil.github}>GitHub</TextLink>
        </div>
      </Container>
    </main>
  );
}
