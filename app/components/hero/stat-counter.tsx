"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useGSAP(
    () => {
      const counter = { val: 0 };
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            once: true,
          },
        })
        .from(
          ref.current,
          { opacity: 0, y: 12, duration: 0.5, ease: "power2.out" },
          0
        )
        .to(
          counter,
          {
            val: value,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => setDisplay(Math.round(counter.val)),
          },
          0
        );
    },
    { scope: ref, dependencies: [value] }
  );

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="font-mono-tight font-display text-2xl tracking-tight sm:text-3xl">
        {display}
        {suffix}
      </span>
      <span className="text-[0.7rem] uppercase tracking-[0.1em] text-ink-soft">
        {label}
      </span>
    </div>
  );
}
