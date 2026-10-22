import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { assertLang } from "@/lib/i18n";

export default async function SiteLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  assertLang(lang);
  return (
    <>
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
