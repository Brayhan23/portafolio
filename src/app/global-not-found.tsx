import Link from "next/link";
import "./globals.css";
import { ui } from "@/content/ui";

export default function NotFound() {
  const n = ui.noEncontrado;
  return (
    <html lang="es">
      <body>
        <main>
          <h1>
            {n.titulo.es} / {n.titulo.en}
          </h1>
          <p>{n.texto.es}</p>
          <p>{n.texto.en}</p>
          <Link href="/es">{n.volver.es}</Link> · <Link href="/en">{n.volver.en}</Link>
        </main>
      </body>
    </html>
  );
}
