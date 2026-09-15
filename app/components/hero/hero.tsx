"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StatCounter } from "@/app/components/hero/stat-counter";
import { founder, heroStats, philosophy } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-mist">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="flex flex-col gap-8">
            <motion.span
              variants={item}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-mist px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft"
            >
              Estd. 2003 · Badlapur, India
            </motion.span>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Visibility is your{" "}
              <span className="text-signal">strongest currency.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              World Widee Digital Media Marketing pairs two decades of press
              instinct with a working line to global trade — digital
              marketing, celebrity management, import/export and event
              curation, built on results since 2003.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
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
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-mist px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-ink transition-colors hover:border-brass hover:text-brass"
              >
                Explore Services
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-mist pt-8 sm:grid-cols-4"
            >
              {heroStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <span className="h-0.5 w-8 bg-brass" aria-hidden />
                  <StatCounter {...s} />
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-mist shadow-[0_24px_60px_-24px_rgba(20,24,31,0.35)]">
              <Image
                src="/prajakta.png"
                alt={founder.name}
                width={640}
                height={720}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 flex max-w-[75%] flex-col gap-1 rounded-2xl border border-mist bg-paper-raised p-4 shadow-[0_16px_40px_-16px_rgba(20,24,31,0.3)] sm:-left-8">
              <span className="font-display text-sm font-semibold leading-snug">
                {founder.name}
              </span>
              <span className="text-xs text-ink-soft">{founder.role}</span>
              <span className="mt-1 border-t border-mist pt-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-brass">
                &ldquo;{philosophy.line}&rdquo;
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
