import { createHash } from "node:crypto";
import { temaInicial } from "./tema";

const isDev = process.env.NODE_ENV === "development";
const hashTema = createHash("sha256").update(temaInicial).digest("base64");

// script-src: nonce para los scripts de Next.js + hash para el script inline del tema.
// style-src necesita 'unsafe-inline' por los atributos style de next/image y next/font.
export function cspHeader(nonce: string) {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'sha256-${hashTema}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://i.ytimg.com",
    "font-src 'self'",
    "media-src 'self'",
    "frame-src https://www.youtube-nocookie.com",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}
