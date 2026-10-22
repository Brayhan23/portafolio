export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-[2px] border border-line px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
