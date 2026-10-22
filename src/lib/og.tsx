import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Imagen OG con la estética del sitio: fondo claro, línea fina, acento verde.
export function ogImagen({
  etiqueta,
  titulo,
  subtitulo,
}: {
  etiqueta: string;
  titulo: string;
  subtitulo: string;
}) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#F5F2EB",
        color: "#16181A",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#1E5B47",
          letterSpacing: 1,
        }}
      >
        {etiqueta}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 84, lineHeight: 1.05 }}>
          {titulo}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#5E615F",
            lineHeight: 1.35,
            maxWidth: 1000,
          }}
        >
          {subtitulo}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: 2,
          background: "#1E5B47",
          width: 160,
        }}
      />
    </div>,
    ogSize,
  );
}
