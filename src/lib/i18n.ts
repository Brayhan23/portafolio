import { notFound } from "next/navigation";
import { isLang, type L, type Lang } from "@/content/types";

export const t = (texto: L, lang: Lang) => texto[lang];

export function assertLang(value: string): asserts value is Lang {
  if (!isLang(value)) notFound();
}
