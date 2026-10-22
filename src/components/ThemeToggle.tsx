"use client";

// Alterna entre claro y oscuro. Las etiquetas se muestran por CSS (.if-light/.if-dark), sin estado de React.
export function ThemeToggle({
  label,
  toLight,
  toDark,
}: {
  label: string;
  toLight: string;
  toDark: string;
}) {
  function alternar() {
    const root = document.documentElement;
    const actual =
      root.dataset.theme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const siguiente = actual === "dark" ? "light" : "dark";
    root.dataset.theme = siguiente;
    try {
      localStorage.setItem("theme", siguiente);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={label}
      className="rounded-[4px] border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <span className="if-light" aria-hidden="true">
        {toDark}
      </span>
      <span className="if-dark" aria-hidden="true">
        {toLight}
      </span>
    </button>
  );
}
