export function SectionHeader({ numero, titulo, id }: { numero: string; titulo: string; id: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-line pt-5">
      <span className="font-mono text-sm text-accent">{numero}</span>
      <h2 id={id} className="font-serif text-4xl leading-tight md:text-5xl">
        {titulo}
      </h2>
    </div>
  );
}
