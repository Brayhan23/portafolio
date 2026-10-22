export function SectionHeader({
  numero,
  titulo,
  id,
  compact = false,
}: {
  numero: string;
  titulo: string;
  id: string;
  compact?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-4 border-t border-line pt-5">
      <span className="font-mono text-sm text-accent">{numero}</span>
      <h2
        id={id}
        className={`font-serif leading-tight ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}
      >
        {titulo}
      </h2>
    </div>
  );
}
