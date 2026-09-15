"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, DoorOpen, Megaphone, PartyPopper } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { celebrityManagement } from "@/lib/data";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { PressReachGallery } from "@/app/components/services/press-reach-gallery";

const OFFERING_ICONS = [DoorOpen, PartyPopper, Megaphone];

export function CelebritySection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".celebrity-hero-reveal", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        delay: 0.1,
      });
    },
    { scope: heroRef }
  );

  return (
    <>
      <section className="border-b border-mist">
        <div
          ref={heroRef}
          className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32"
        >
          <span className="celebrity-hero-reveal inline-flex items-center gap-2 rounded-full border border-mist px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
            Celebrity Management
          </span>
          <h1 className="celebrity-hero-reveal font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {celebrityManagement.headline}
          </h1>
          <p className="celebrity-hero-reveal max-w-2xl text-lg leading-relaxed text-ink-soft">
            {celebrityManagement.subheadline}
          </p>
          <div className="celebrity-hero-reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-paper transition-colors hover:bg-signal"
            >
              Get Started
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
          <div className="celebrity-hero-reveal w-full pt-6">
            <PressReachGallery />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Offerings"
            title="Three ways to make an entrance."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {celebrityManagement.offerings.map((o, i) => {
              const Icon = OFFERING_ICONS[i] ?? DoorOpen;
              return (
                <div
                  key={o.title}
                  className="flex flex-col gap-4 rounded-2xl border border-mist bg-paper-raised p-6"
                >
                  <Icon size={22} className="text-brass" strokeWidth={1.5} />
                  <h3 className="font-display text-xl leading-snug">
                    {o.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {o.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-mist bg-paper-raised/60 py-24 sm:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for the moment."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {celebrityManagement.whyChoose.map((w) => (
              <div
                key={w.title}
                className="flex flex-col gap-3 rounded-2xl border border-mist bg-paper p-6"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-signal"
                  aria-hidden
                />
                <h3 className="font-display text-lg leading-snug">
                  {w.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {w.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
        <p className="font-display text-2xl leading-snug sm:text-3xl">
          {celebrityManagement.cta}
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-paper transition-colors hover:bg-signal"
        >
          Get Started
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </section>
    </>
  );
}
