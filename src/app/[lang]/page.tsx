import Link from "next/link";
import { experiencia } from "@/content/experiencia";
import { logros } from "@/content/logros";
import { perfil } from "@/content/perfil";
import { proyectosMenores, proyectosOrdenados } from "@/content/proyectos";
import { ui } from "@/content/ui";
import { assertLang, t } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  assertLang(lang);
  return (
    <main>
      <header>
        <h1>{perfil.nombre}</h1>
        <p>{t(perfil.titular, lang)}</p>
        <p>{t(perfil.resumen, lang)}</p>
        <p>{perfil.ubicacion}</p>
        <p>{perfil.stackPrincipal.join(" · ")}</p>
        <p>
          {perfil.stackTambien.map((s) => (typeof s === "string" ? s : t(s, lang))).join(" · ")}
        </p>
        <Link href={`/${lang === "es" ? "en" : "es"}`}>{lang === "es" ? "EN" : "ES"}</Link>
      </header>

      <section>
        <h2>01 {t(ui.secciones.destacados, lang)}</h2>
        {proyectosOrdenados.map((p) => (
          <article key={p.slug}>
            <h3>{p.titulo}</h3>
            <p>
              {t(p.tipo, lang)} · {t(p.estado, lang)} · {p.anio}
            </p>
            <p>{t(p.resumen, lang)}</p>
            <p>{p.stack.join(", ")}</p>
            <Link href={`/${lang}/proyectos/${p.slug}`}>{t(ui.botones.verCaso, lang)}</Link>
          </article>
        ))}
      </section>

      <section>
        <h2>02 {t(ui.secciones.otros, lang)}</h2>
        <ul>
          {proyectosMenores.map((p) => (
            <li key={p.nombre}>
              {p.nombre} — {t(p.descripcion, lang)} — {p.tecnologias.join(", ")} —{" "}
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                {t(ui.botones.repo, lang)}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>03 {t(ui.secciones.experiencia, lang)}</h2>
        {experiencia.map((e) => (
          <article key={e.periodo.es + e.organizacion}>
            <h3>{t(e.cargo, lang)}</h3>
            <p>
              {e.organizacion} · {t(e.periodo, lang)}
            </p>
            <p>{t(e.descripcion, lang)}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>04 {t(ui.secciones.logros, lang)}</h2>
        {logros.map((l) => (
          <article key={l.titulo.es}>
            <p>{t(l.fecha, lang)}</p>
            <h3>{t(l.titulo, lang)}</h3>
            <p>{t(l.detalle, lang)}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>05 {t(ui.secciones.contacto, lang)}</h2>
        <p>{t(ui.contacto.frase, lang)}</p>
        <a href={`mailto:${perfil.correo}`}>{t(ui.botones.escribeme, lang)}</a>
        <p>{perfil.correo}</p>
        <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        <a href={perfil.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </section>
    </main>
  );
}
