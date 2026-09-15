import { legalLastUpdated, type LegalSection } from "@/lib/legal";

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <div className="flex flex-col gap-3 border-b border-mist pb-8">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-brass">
          Legal
        </span>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
          Last updated: {legalLastUpdated}
        </p>
      </div>

      <div className="flex flex-col gap-10 pt-10">
        {sections.map((s) => (
          <div key={s.heading} className="flex flex-col gap-3">
            <h2 className="font-display text-xl leading-snug sm:text-2xl">
              {s.heading}
            </h2>
            <p className="text-base leading-relaxed text-ink-soft">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
