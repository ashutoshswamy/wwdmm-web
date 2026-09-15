"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
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

  return (
    <div className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Services"
        className="flex flex-wrap gap-2 border-b border-mist pb-1"
      >
        {services.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={s.id === activeId}
            onClick={() => setActiveId(s.id)}
            className={`relative rounded-t-lg px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
              s.id === activeId
                ? "text-ink"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {s.eyebrow}
            {s.id === activeId ? (
              <motion.span
                layoutId="tab-underline"
                className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-signal"
              />
            ) : null}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
