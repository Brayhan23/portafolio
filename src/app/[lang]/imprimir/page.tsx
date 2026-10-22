import type { Metadata } from "next";
import Image from "next/image";
import { PrintButton } from "@/components/PrintButton";
import { experiencia } from "@/content/experiencia";
import { logros } from "@/content/logros";
import { perfil } from "@/content/perfil";
import { proyectosMenores, proyectosOrdenados } from "@/content/proyectos";
import { LANGS } from "@/content/types";
import { ui } from "@/content/ui";
import { assertLang, t } from "@/lib/i18n";
import { metadatos } from "@/lib/metadata";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/imprimir">): Promise<Metadata> {
  const { lang } = await params;
  assertLang(lang);
  return metadatos({
    lang,
    ruta: "/imprimir",
    titulo: `${perfil.nombreCorto} — ${t(ui.meta.imprimir, lang)}`,
    descripcion: t(perfil.resumen, lang),
    indexar: false,
  });
}

// Enlace con la URL como texto visible (sin protocolo), legible en papel.
function Url({ href }: { href: string }) {
  const texto = href
    .replace(/^mailto:/, "")
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");
  return (
    <a href={href} className="whitespace-nowrap text-accent">
      {texto}
    </a>
  );
}

function Seccion({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-4">
      <h2 className="break-after-avoid border-b border-line pb-1 font-mono text-[8.5pt] tracking-wider text-accent uppercase">
        {titulo}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export default async function Imprimir({
  params,
  searchParams,
}: PageProps<"/[lang]/imprimir">) {
  const { lang } = await params;
  assertLang(lang);
  // El teléfono solo aparece con ?contacto=completo (versión para enviar por correo).
  const { contacto } = await searchParams;
  const conTelefono = contacto === "completo";

  // Dos líneas fijas para que el corte no caiga en medio de un enlace.
  const lineasContacto = [
    [
      <Url key="correo" href={`mailto:${perfil.correo}`} />,
      conTelefono ? <span key="tel">{perfil.telefono}</span> : null,
      <span key="ubicacion">{perfil.ubicacion}</span>,
      perfil.urlSitio ? <Url key="sitio" href={perfil.urlSitio} /> : null,
    ],
    [
      <Url key="linkedin" href={perfil.linkedin} />,
      <Url key="github" href={perfil.github} />,
    ],
  ].map((l) => l.filter(Boolean));

  return (
    <div className="hoja-impresion min-h-screen bg-bg text-ink">
      <div className="mx-auto flex max-w-[210mm] justify-end px-6 pt-6 print:hidden">
        <PrintButton label={t(ui.botones.imprimir, lang)} />
      </div>

      <main
        id="contenido"
        className="mx-auto my-6 max-w-[210mm] bg-surface px-[14mm] py-[12mm] text-[9pt] leading-[1.42] print:m-0 print:max-w-none print:bg-transparent print:p-0"
      >
        <header>
          <h1 className="font-serif text-[28pt] leading-none">
            {perfil.nombre}
          </h1>
          <p className="mt-2 text-[10.5pt]">
            {t(perfil.titular, lang).replaceAll("|", "·")}
          </p>
          <div className="mt-2 space-y-0.5 font-mono text-[8pt] text-muted">
            {lineasContacto.map((linea, i) => (
              <p key={i} className="flex flex-wrap gap-x-3">
                {linea.map((c, j) => (
                  <span key={j} className="flex gap-3">
                    {j > 0 && <span aria-hidden="true">·</span>}
                    {c}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </header>

        <Seccion titulo={t(ui.secciones.perfil, lang)}>
          <p>{t(perfil.resumen, lang)}</p>
        </Seccion>

        <Seccion titulo={t(ui.secciones.experiencia, lang)}>
          <ul className="space-y-2">
            {experiencia.map((e) => (
              <li
                key={e.periodo.es + e.organizacion}
                className="break-inside-avoid"
              >
                <p className="grid grid-cols-[1fr_auto] items-baseline gap-x-4">
                  <span className="font-medium">
                    {t(e.cargo, lang)}{" "}
                    <span className="font-normal text-muted">
                      — {e.organizacion}
                    </span>
                  </span>
                  <span className="font-mono text-[8pt] whitespace-nowrap text-muted">
                    {t(e.periodo, lang)}
                  </span>
                </p>
                <p className="text-muted">{t(e.descripcion, lang)}</p>
              </li>
            ))}
          </ul>
        </Seccion>

        <Seccion titulo={t(ui.secciones.destacados, lang)}>
          <div className="space-y-3">
            {proyectosOrdenados.map((p) => {
              const img = p.imagenes[0];
              return (
                <article
                  key={p.slug}
                  className="break-inside-avoid border-t border-line pt-2.5 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-serif text-[15pt] leading-tight">
                      {p.titulo}
                    </h3>
                    <p className="font-mono text-[8pt] text-muted">
                      {t(p.tipo, lang)} · {t(p.estado, lang)} · {p.anio}
                    </p>
                  </div>
                  <div
                    className={`mt-1.5 ${img ? "grid grid-cols-[42mm_1fr] gap-4" : ""}`}
                  >
                    {img && (
                      <Image
                        src={img.src}
                        alt={t(img.alt, lang)}
                        width={img.ancho}
                        height={img.alto}
                        sizes="320px"
                        loading="eager"
                        className="w-full border border-line"
                      />
                    )}
                    <dl className="grid grid-cols-[22mm_1fr] gap-x-3 gap-y-1">
                      <dt className="font-mono text-[8pt] text-muted">
                        {t(ui.secciones.problema, lang)}
                      </dt>
                      <dd>{t(p.problema, lang)}</dd>
                      <dt className="font-mono text-[8pt] text-muted">
                        {t(ui.secciones.solucion, lang)}
                      </dt>
                      <dd>{t(p.solucion, lang)}</dd>
                      <dt className="font-mono text-[8pt] text-muted">
                        {t(ui.campos.rol, lang)}
                      </dt>
                      <dd>{t(p.rol, lang)}</dd>
                      <dt className="font-mono text-[8pt] text-muted">
                        {t(ui.campos.stack, lang)}
                      </dt>
                      <dd className="font-mono text-[8pt]">
                        {p.stack.join(" · ")}
                      </dd>
                      <dt className="font-mono text-[8pt] text-muted">
                        {t(ui.secciones.enlaces, lang)}
                      </dt>
                      <dd className="font-mono text-[8pt]">
                        {p.enlaces.demo && (
                          <span className="block">
                            {t(ui.botones.demo, lang)}:{" "}
                            <Url href={p.enlaces.demo} />
                          </span>
                        )}
                        {p.enlaces.repo && (
                          <span className="block">
                            {t(ui.botones.repo, lang)}:{" "}
                            <Url href={p.enlaces.repo} />
                          </span>
                        )}
                        {p.enlaces.evidencia && (
                          <span className="block">
                            {t(p.enlaces.evidencia.etiqueta, lang)}:{" "}
                            <Url href={p.enlaces.evidencia.url} />
                          </span>
                        )}
                      </dd>
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </Seccion>

        <Seccion titulo={t(ui.secciones.otros, lang)}>
          <ul className="space-y-1.5">
            {proyectosMenores.map((p) => (
              <li key={p.nombre} className="break-inside-avoid">
                <span className="font-medium">{p.nombre}</span>{" "}
                <span className="font-mono text-[8pt] text-muted">
                  ({p.tecnologias.join(", ")})
                </span>{" "}
                — {t(p.descripcion, lang)}{" "}
                <span className="font-mono text-[8pt]">
                  <Url href={p.repo} />
                </span>
              </li>
            ))}
          </ul>
        </Seccion>

        <div className="break-inside-avoid">
          <Seccion titulo={t(ui.secciones.logros, lang)}>
            <ul className="space-y-1.5">
              {logros.map((l) => (
                <li
                  key={l.titulo.es}
                  className="grid grid-cols-[30mm_1fr] gap-3"
                >
                  <span className="font-mono text-[8pt] text-muted">
                    {t(l.fecha, lang)}
                  </span>
                  <span>
                    <span className="font-medium">{t(l.titulo, lang)}.</span>{" "}
                    {t(l.detalle, lang)}
                    {l.evidencia && (
                      <span className="font-mono text-[8pt]">
                        {" "}
                        {t(l.evidencia.etiqueta, lang)}:{" "}
                        <Url href={l.evidencia.url} />
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Seccion>
        </div>

        <div className="break-inside-avoid">
          <Seccion titulo={t(ui.secciones.formacion, lang)}>
            <ul className="space-y-1.5">
              {perfil.formacion.map((f) => (
                <li
                  key={f.titulo.es}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-4"
                >
                  <span>
                    <span className="font-medium">{t(f.titulo, lang)}</span>{" "}
                    <span className="text-muted">— {f.institucion}</span>
                  </span>
                  <span className="font-mono text-[8pt] whitespace-nowrap text-muted">
                    {t(f.detalle, lang)}
                  </span>
                </li>
              ))}
            </ul>
          </Seccion>
        </div>
      </main>
    </div>
  );
}
