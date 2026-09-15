export function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((label) => (
        <span
          key={label}
          className="rounded-full border border-mist bg-paper-raised px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft"
        >
          {label}
        </span>
      ))}
    </div>
  );
}
