import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutTeaser, founder } from "@/lib/data";
import { SectionHeading } from "@/app/components/ui/section-heading";

export function AboutTeaser() {
  return (
    <section className="border-t border-mist bg-paper-raised/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
        <div className="relative mx-auto w-full max-w-[340px]">
          <div className="absolute -inset-3 -z-10 rounded-full border border-brass/40" />
          <Image
            src="/prajakta.png"
            alt={founder.name}
            width={680}
            height={680}
            className="aspect-square w-full rounded-full border border-mist object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="Byline" title="Founded by Prajakta Khedekar." />
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            {aboutTeaser}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-mist px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-colors hover:border-brass hover:text-brass"
            >
              Read more
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:bg-signal"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
