"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { timeline } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutTimeline() {
  const listRef = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -16,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: listRef }
  );

  return (
    <ol
      ref={listRef}
      className="relative flex flex-col gap-10 border-l border-mist pl-8"
    >
      {timeline.map((entry) => (
        <li key={entry.year} className="timeline-item relative">
          <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-paper bg-brass" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-brass">
            {entry.year}
          </span>
          <h3 className="mt-1 font-display text-2xl">{entry.title}</h3>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
            {entry.copy}
          </p>
        </li>
      ))}
    </ol>
  );
}
