import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/app/components/ui/section-heading";

export function TestimonialGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Wire - verified"
          title="What files back to the desk."
          description="Client reports, unfiltered."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl border border-mist bg-paper-raised p-6"
            >
              <Quote size={22} className="text-brass" strokeWidth={1.5} />
              <p className="flex-1 text-base leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <span className="text-sm font-medium">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
