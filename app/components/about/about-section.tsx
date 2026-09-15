import Image from "next/image";
import { founder } from "@/lib/data";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { AboutTimeline } from "@/app/components/about/about-timeline";
import { ImpactBlock } from "@/app/components/about/impact-block";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-12 sm:grid-cols-[0.75fr_1.25fr] sm:items-center">
        <div className="relative mx-auto w-full max-w-[320px] sm:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-full border border-brass/40" />
          <Image
            src="/prajakta.png"
            alt={founder.name}
            width={640}
            height={640}
            className="aspect-square w-full rounded-full border border-mist object-cover"
            priority
          />
        </div>
        <SectionHeading
          eyebrow="Byline"
          title="Founded by Prajakta Khedekar."
          description="20 years of media expertise. 15 years of business scaling. World Widee Digital turns newsroom instinct into a repeatable growth engine for founder-led brands."
        />
      </div>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_0.9fr]">
        <AboutTimeline />
        <div className="lg:pt-2">
          <ImpactBlock />
        </div>
      </div>
    </section>
  );
}
