"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export function AboutTimeline() {
  return (
    <ol className="relative flex flex-col gap-10 border-l border-mist pl-8">
      {timeline.map((entry, i) => (
        <motion.li
          key={entry.year}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
          className="relative"
        >
          <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-paper bg-brass" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-brass">
            {entry.year}
          </span>
          <h3 className="mt-1 font-display text-2xl">{entry.title}</h3>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
            {entry.copy}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
