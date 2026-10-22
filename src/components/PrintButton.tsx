"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-[4px] border border-accent bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-transparent hover:text-accent"
    >
      {label}
    </button>
  );
}
