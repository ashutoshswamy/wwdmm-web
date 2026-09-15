import { Marquee } from "@/app/components/ui/marquee";

const channels = [
  "Broadcast interviews",
  "Print & digital features",
  "Podcast placements",
  "Red carpet coverage",
  "Talk show bookings",
  "Creator collaborations",
  "Award-season press",
  "Regional syndication",
];

export function PressReachGallery() {
  return (
    <div className="flex flex-col gap-3">
      <Marquee>
        {channels.map((c) => (
          <span
            key={c}
            className="rounded-full border border-mist bg-paper-raised px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft"
          >
            {c}
          </span>
        ))}
      </Marquee>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-soft/70">
        Placement channels across our media network
      </p>
    </div>
  );
}
