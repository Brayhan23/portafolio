import { notFound } from "next/navigation";
import Link from "next/link";
import { getProyecto, proyectos } from "@/content/proyectos";
import { LANGS } from "@/content/types";
import { ui } from "@/content/ui";
import { assertLang, t } from "@/lib/i18n";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => proyectos.map((p) => ({ lang, slug: p.slug })));
}

export default async function Proyecto({ params }: PageProps<"/[lang]/proyectos/[slug]">) {
  const { lang, slug } = await params;
  assertLang(lang);
  const p = getProyecto(slug);
  if (!p) notFound();
  return (
    <main id="contenido" className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <Link href={`/${lang}`}>{t(ui.botones.volver, lang)}</Link>
      <h1>{p.titulo}</h1>
      <p>
        {t(ui.campos.tipo, lang)}: {t(p.tipo, lang)} · {t(ui.campos.estado, lang)}: {t(p.estado, lang)} ·{" "}
        {t(ui.campos.anio, lang)}: {p.anio}
      </p>
      <p>
        {t(ui.campos.stack, lang)}: {p.stack.join(", ")}
      </p>
      <h2>01 {t(ui.secciones.problema, lang)}</h2>
      <p>{t(p.problema, lang)}</p>
      <h2>02 {t(ui.secciones.solucion, lang)}</h2>
      <p>{t(p.solucion, lang)}</p>
      {p.funciones.length > 0 && (
        <>
          <h2>03 {t(ui.secciones.funciones, lang)}</h2>
          <ul>
            {p.funciones.map((f) => (
              <li key={f.es}>{t(f, lang)}</li>
            ))}
          </ul>
        </>
      )}
      {p.decisiones.length > 0 && (
        <>
          <h2>04 {t(ui.secciones.decisiones, lang)}</h2>
          {p.decisiones.map((d) => (
            <div key={d.titulo.es}>
              <h3>{t(d.titulo, lang)}</h3>
              <p>{t(d.detalle, lang)}</p>
            </div>
          ))}
        </>
      )}
      <h2>05 {t(ui.secciones.rol, lang)}</h2>
      <p>{t(p.rol, lang)}</p>
      <h2>06 {t(ui.secciones.enlaces, lang)}</h2>
      <ul>
        {p.enlaces.demo && (
          <li>
            <a href={p.enlaces.demo} target="_blank" rel="noopener noreferrer">
              {t(ui.botones.demo, lang)}
            </a>
            {p.enlaces.notaDemo && <> — {t(p.enlaces.notaDemo, lang)}</>}
          </li>
        )}
        {p.enlaces.repo && (
          <li>
            <a href={p.enlaces.repo} target="_blank" rel="noopener noreferrer">
              {t(ui.botones.repo, lang)}
            </a>
          </li>
        )}
      </ul>
    </main>
  );
}
