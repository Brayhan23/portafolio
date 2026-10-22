import type { Metadata } from "next";
import { LANGS } from "@/content/types";
import { ui } from "@/content/ui";
import { assertLang } from "@/lib/i18n";
import "../globals.css";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  assertLang(lang);
  return { title: ui.meta.titulo[lang], description: ui.meta.descripcion[lang] };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  assertLang(lang);
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
