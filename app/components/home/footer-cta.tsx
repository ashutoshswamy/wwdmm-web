import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FooterCta() {
  return (
    <section className="mesh-hero border-t border-mist py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Ready to elevate your brand?
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-ink-soft">
          Book a free consultation and find out how WWD can put your brand
          on the wire.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-paper transition-colors hover:bg-signal"
        >
          Get Started
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
