import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/app/components/ui/section-heading";

export function WhyChooseUs() {
  return (
    <section className="border-t border-mist bg-paper-raised/60 py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <SectionHeading
          eyebrow="Manifest - why us"
          title="Why brands file through WWD."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-mist bg-paper p-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              <h3 className="font-display text-lg leading-snug">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
