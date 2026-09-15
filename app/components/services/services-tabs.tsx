"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check } from "lucide-react";
import { useRef, useState } from "react";
import { services, tradeCorridors } from "@/lib/data";
import { DeskVisual } from "@/app/components/services/desk-visual";
import { ChipRow } from "@/app/components/services/chip-row";
import { PressReachGallery } from "@/app/components/services/press-reach-gallery";

const DESK_IMAGES: Record<string, string> = {
  digital: "/digital_desk.png",
  celebrity: "/celebrity_desk.png",
  trade: "/trade_desk.png",
  events: "/events_desk.png",
};

export function ServicesTabs() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId)!;

  const tabBarRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useGSAP(
    () => {
      const btn = tabRefs.current[activeId];
      if (!btn || !underlineRef.current) return;
      gsap.to(underlineRef.current, {
        x: btn.offsetLeft + 12,
        width: btn.offsetWidth - 24,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    { scope: tabBarRef, dependencies: [activeId] }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    },
    { scope: contentRef, dependencies: [activeId] }
  );

  return (
    <div className="flex flex-col gap-8">
      <div
        ref={tabBarRef}
        role="tablist"
        aria-label="Services"
        className="relative flex flex-wrap gap-2 border-b border-mist pb-1"
      >
        {services.map((s) => (
          <button
            key={s.id}
            ref={(el) => {
              tabRefs.current[s.id] = el;
            }}
            role="tab"
            aria-selected={s.id === activeId}
            onClick={() => setActiveId(s.id)}
            className={`relative rounded-t-lg px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
              s.id === activeId ? "text-ink" : "text-ink-soft hover:text-ink"
            }`}
          >
            {s.eyebrow}
          </button>
        ))}
        <span
          ref={underlineRef}
          className="pointer-events-none absolute -bottom-px left-0 h-[2px] w-0 bg-signal"
        />
      </div>

      <div
        ref={contentRef}
        className="grid gap-10 lg:grid-cols-[1fr_1fr]"
      >
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-3xl leading-tight sm:text-4xl">
            {active.title}
          </h3>
          <p className="max-w-lg text-base leading-relaxed text-ink-soft">
            {active.summary}
          </p>
          <ul className="flex flex-col gap-3">
            {active.items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm">
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-brass"
                  strokeWidth={2.5}
                />
                {it}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-w-0 items-center">
          <DeskVisual
            src={DESK_IMAGES[active.id]}
            alt={`${active.title} - WWD desk`}
          >
            {active.id === "trade" ? (
              <ChipRow
                items={tradeCorridors.map((c) => `${c.place} · ${c.code}`)}
              />
            ) : active.id === "celebrity" ? (
              <PressReachGallery />
            ) : (
              <ChipRow items={active.tags ?? []} />
            )}
          </DeskVisual>
        </div>
      </div>
    </div>
  );
}
