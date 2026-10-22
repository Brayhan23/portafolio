import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ButtonLink, TextLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { ProjectCover } from "@/components/ProjectCover";
import { ProjectVideo } from "@/components/ProjectVideo";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import {
  getProyecto,
  proyectos,
  proyectosOrdenados,
} from "@/content/proyectos";
import { perfil } from "@/content/perfil";
import { LANGS } from "@/content/types";
import { ui } from "@/content/ui";
import { assertLang, t } from "@/lib/i18n";
import { metadatos } from "@/lib/metadata";

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    proyectos.map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/proyectos/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  assertLang(lang);
  const p = getProyecto(slug);
  if (!p) notFound();
  return metadatos({
    lang,
    ruta: `/proyectos/${slug}`,
    titulo: `${p.titulo} — ${perfil.nombreCorto}`,
    descripcion: t(p.resumen, lang),
  });
}

// Versión corta del rol para el bloque de metadatos: lo previo a " — " o la primera oración.
function rolCorto(rol: string) {
  const [antes] = rol.split(" — ");
  return antes.split(/\.\s/)[0].replace(/\.$/, "");
}

export default async function Proyecto({
  params,
}: PageProps<"/[lang]/proyectos/[slug]">) {
  const { lang, slug } = await params;
  assertLang(lang);
  const p = getProyecto(slug);
  if (!p) notFound();

  const idx = proyectosOrdenados.findIndex((x) => x.slug === slug);
  const anterior = proyectosOrdenados[idx - 1];
  const siguiente = proyectosOrdenados[idx + 1];

  const tieneMultimedia = p.imagenes.length > 0 || !!p.video;
  const secciones = [
    { id: "problema", titulo: ui.secciones.problema, ver: true },
    { id: "solucion", titulo: ui.secciones.solucion, ver: true },
    {
      id: "funciones",
      titulo: ui.secciones.funciones,
      ver: p.funciones.length > 0,
    },
    {
      id: "decisiones",
      titulo: ui.secciones.decisiones,
      ver: p.decisiones.length > 0,
    },
    { id: "rol", titulo: ui.secciones.rol, ver: true },
    { id: "galeria", titulo: ui.secciones.galeria, ver: tieneMultimedia },
    {
      id: "enlaces",
      titulo: ui.secciones.enlaces,
      ver: !!(p.enlaces.demo || p.enlaces.repo || p.enlaces.evidencia),
    },
  ]
    .filter((s) => s.ver)
    .map((s, i) => ({ ...s, numero: String(i + 1).padStart(2, "0") }));
  const sec = (id: string) => secciones.find((s) => s.id === id);

  const meta: [string, string][] = [
    [t(ui.campos.tipo, lang), t(p.tipo, lang)],
    [t(ui.campos.estado, lang), t(p.estado, lang)],
    [t(ui.campos.anio, lang), p.anio],
    [t(ui.campos.rol, lang), rolCorto(t(p.rol, lang))],
  ];

  const cabecera = (id: string) => {
    const s = sec(id)!;
    return (
      <SectionHeader
        numero={s.numero}
        titulo={t(s.titulo, lang)}
        id={`titulo-${id}`}
        compact
      />
    );
  };
  const bloque = "mt-6 max-w-3xl text-lg leading-relaxed";

  return (
    <main id="contenido">
      <Container className="py-10 md:py-14">
        <Link
          href={`/${lang}`}
          className="font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          ← {t(ui.botones.volver, lang)}
        </Link>

        <h1 className="mt-8 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
          {p.titulo}
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-muted">
          {t(p.resumen, lang)}
        </p>
        {p.origen && (
          <p className="mt-3 max-w-2xl text-muted">{t(p.origen, lang)}</p>
        )}
        {p.resultado && (
          <p className="mt-3 max-w-2xl font-mono text-sm text-accent">
            {t(p.resultado, lang)}
          </p>
        )}

        <dl className="mt-10 grid gap-x-8 gap-y-5 border-y border-line py-5 font-mono text-sm sm:grid-cols-2 md:grid-cols-4">
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs text-muted">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
          <div className="sm:col-span-2 md:col-span-4">
            <dt className="text-xs text-muted">{t(ui.campos.stack, lang)}</dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {p.enlaces.demo && (
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <ButtonLink href={p.enlaces.demo} external>
              {t(ui.botones.verDemo, lang)} ↗
            </ButtonLink>
            {p.enlaces.notaDemo && (
              <p className="text-sm text-muted">
                {t(p.enlaces.notaDemo, lang)}
              </p>
            )}
          </div>
        )}

        <div className="mt-10 overflow-hidden border border-line">
          <ProjectCover
            proyecto={p}
            lang={lang}
            priority
            sizes="(min-width: 1152px) 1088px, calc(100vw - 48px)"
          />
        </div>
      </Container>

      <Container className="flex flex-col gap-16 pb-8">
        <section aria-labelledby="titulo-problema">
          {cabecera("problema")}
          <p className={bloque}>{t(p.problema, lang)}</p>
        </section>

        <section aria-labelledby="titulo-solucion">
          {cabecera("solucion")}
          <p className={bloque}>{t(p.solucion, lang)}</p>
        </section>

        {sec("funciones") && (
          <section aria-labelledby="titulo-funciones">
            {cabecera("funciones")}
            <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-lg marker:text-accent">
              {p.funciones.map((f) => (
                <li key={f.es}>{t(f, lang)}</li>
              ))}
            </ul>
          </section>
        )}

        {sec("decisiones") && (
          <section aria-labelledby="titulo-decisiones">
            {cabecera("decisiones")}
            <div className="mt-6 grid max-w-4xl gap-8 md:grid-cols-2">
              {p.decisiones.map((d) => (
                <div key={d.titulo.es} className="border-l border-line pl-5">
                  <h3 className="text-lg font-medium">{t(d.titulo, lang)}</h3>
                  <p className="mt-2 text-muted">{t(d.detalle, lang)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="titulo-rol">
          {cabecera("rol")}
          <p className={bloque}>{t(p.rol, lang)}</p>
        </section>

        {sec("galeria") && (
          <section aria-labelledby="titulo-galeria">
            {cabecera("galeria")}
            <div className="mt-6 flex flex-col gap-8">
              {p.video && (
                <ProjectVideo video={p.video} lang={lang} titulo={p.titulo} />
              )}
              {p.imagenes.length > 0 && (
                <Gallery
                  imagenes={p.imagenes}
                  lang={lang}
                  textos={{
                    ampliar: t(ui.galeria.ampliar, lang),
                    cerrar: t(ui.galeria.cerrar, lang),
                    anterior: t(ui.galeria.anterior, lang),
                    siguiente: t(ui.galeria.siguiente, lang),
                    visor: t(ui.galeria.visor, lang),
                  }}
                />
              )}
            </div>
          </section>
        )}

        {sec("enlaces") && (
          <section aria-labelledby="titulo-enlaces">
            {cabecera("enlaces")}
            <ul className="mt-6 space-y-3 text-lg">
              {p.enlaces.demo && (
                <li>
                  <TextLink href={p.enlaces.demo}>
                    {t(ui.botones.demo, lang)}
                  </TextLink>
                  <span className="ml-3 font-mono text-xs text-muted">
                    {p.enlaces.demo}
                  </span>
                  {p.enlaces.notaDemo && (
                    <p className="mt-1 text-sm text-muted">
                      {t(p.enlaces.notaDemo, lang)}
                    </p>
                  )}
                </li>
              )}
              {p.enlaces.repo && (
                <li>
                  <TextLink href={p.enlaces.repo}>
                    {t(ui.botones.repo, lang)}
                  </TextLink>
                  <span className="ml-3 font-mono text-xs text-muted">
                    {p.enlaces.repo}
                  </span>
                </li>
              )}
              {p.enlaces.evidencia && (
                <li>
                  <TextLink href={p.enlaces.evidencia.url}>
                    {t(p.enlaces.evidencia.etiqueta, lang)} ↗
                  </TextLink>
                </li>
              )}
            </ul>
          </section>
        )}
      </Container>

      <Container className="mt-16 pb-8">
        <nav aria-label={t(ui.secciones.destacados, lang)}>
          <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
            <li className="bg-bg">
              {anterior && (
                <Link
                  href={`/${lang}/proyectos/${anterior.slug}`}
                  className="block p-5 transition-colors hover:text-accent"
                >
                  <span className="font-mono text-xs text-muted">
                    ← {t(ui.botones.anterior, lang)}
                  </span>
                  <span className="mt-1 block font-serif text-2xl">
                    {anterior.titulo}
                  </span>
                </Link>
              )}
            </li>
            <li className="bg-bg md:text-right">
              {siguiente && (
                <Link
                  href={`/${lang}/proyectos/${siguiente.slug}`}
                  className="block p-5 transition-colors hover:text-accent"
                >
                  <span className="font-mono text-xs text-muted">
                    {t(ui.botones.siguiente, lang)} →
                  </span>
                  <span className="mt-1 block font-serif text-2xl">
                    {siguiente.titulo}
                  </span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </main>
  );
}
