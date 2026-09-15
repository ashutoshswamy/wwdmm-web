import { HeartHandshake } from "lucide-react";
import { founder } from "@/lib/data";

export function ImpactBlock() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-mist bg-paper-raised p-6 sm:p-8">
      <HeartHandshake size={28} className="text-signal" strokeWidth={1.5} />
      <p className="font-display text-2xl leading-snug">
        Helped 100+ women-led enterprises transition into the digital
        marketplace.
      </p>
      <blockquote className="border-l-2 border-brass pl-4 text-sm italic leading-relaxed text-ink-soft">
        &ldquo;{founder.quote}&rdquo;
        <footer className="mt-2 font-mono text-[0.65rem] not-italic uppercase tracking-[0.1em] text-brass">
          - {founder.name}, {founder.role}
        </footer>
      </blockquote>
    </div>
  );
}
