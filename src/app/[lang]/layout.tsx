import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Instrument_Serif,
} from "next/font/google";
import { connection } from "next/server";
import { LANGS } from "@/content/types";
import { ui } from "@/content/ui";
import { assertLang, t } from "@/lib/i18n";
import { metadatos } from "@/lib/metadata";
import { temaInicial } from "@/lib/tema";
import "../globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-sans",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plex-mono",
});

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  assertLang(lang);
  return metadatos({
    lang,
    titulo: t(ui.meta.titulo, lang),
    descripcion: t(ui.meta.descripcion, lang),
  });
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  // Render por petición: necesario para que Next.js aplique el nonce de la CSP (src/proxy.ts).
  await connection();
  const { lang } = await params;
  assertLang(lang);
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[4px] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          {t(ui.botones.saltar, lang)}
        </a>
        {children}
      </body>
    </html>
  );
}
