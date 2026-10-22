import { experiencia } from "@/content/experiencia";
import { logros } from "@/content/logros";
import { perfil } from "@/content/perfil";
import { proyectosMenores, proyectosOrdenados } from "@/content/proyectos";
import { LANGS } from "@/content/types";
import { ui } from "@/content/ui";
import { assertLang, t } from "@/lib/i18n";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Imprimir({ params }: PageProps<"/[lang]/imprimir">) {
  const { lang } = await params;
  assertLang(lang);
  return (
    <main>
      <h1>{perfil.nombre}</h1>
      <p>{t(perfil.titular, lang)}</p>
      <p>
        {perfil.correo} · {perfil.telefono} · {perfil.linkedin} · {perfil.github} · {perfil.urlSitio}
      </p>
      <p>{t(perfil.resumen, lang)}</p>

      <h2>{t(ui.secciones.experiencia, lang)}</h2>
      {experiencia.map((e) => (
        <p key={e.periodo.es + e.organizacion}>
          {t(e.cargo, lang)} — {e.organizacion} ({t(e.periodo, lang)}). {t(e.descripcion, lang)}
        </p>
      ))}

      <h2>{t(ui.secciones.destacados, lang)}</h2>
      {proyectosOrdenados.map((p) => (
        <article key={p.slug}>
          <h3>{p.titulo}</h3>
          <p>{t(p.problema, lang)}</p>
          <p>{t(p.solucion, lang)}</p>
          <p>{p.stack.join(", ")}</p>
          <p>{t(p.rol, lang)}</p>
          <p>{[p.enlaces.demo, p.enlaces.repo].filter(Boolean).join(" · ")}</p>
        </article>
      ))}

      <h2>{t(ui.secciones.otros, lang)}</h2>
      <ul>
        {proyectosMenores.map((p) => (
          <li key={p.nombre}>
            {p.nombre} — {t(p.descripcion, lang)} — {p.repo}
          </li>
        ))}
      </ul>

      <h2>{t(ui.secciones.logros, lang)}</h2>
      {logros.map((l) => (
        <p key={l.titulo.es}>
          {t(l.fecha, lang)} — {t(l.titulo, lang)}. {t(l.detalle, lang)}
        </p>
      ))}

      <h2>{t(ui.secciones.formacion, lang)}</h2>
      {perfil.formacion.map((f) => (
        <p key={f.titulo.es}>
          {t(f.titulo, lang)} — {f.institucion} ({t(f.detalle, lang)})
        </p>
      ))}
    </main>
  );
}
