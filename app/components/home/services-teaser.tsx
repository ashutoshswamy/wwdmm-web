import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import { SectionHeading } from "@/app/components/ui/section-heading";

export function ServicesTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Manifest"
          title="Four desks, one wire."
          description="Every engagement routes through the same operation, whether it's a press campaign, a talent booking, a container of export product, or a stage."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.id}
              className="flex flex-col gap-4 rounded-2xl border border-mist bg-paper-raised p-6"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-brass">
                {s.eyebrow}
              </span>
              <h3 className="font-display text-xl leading-snug">{s.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                {s.summary}
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-signal"
              >
                Read more
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
