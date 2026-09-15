"use client";

import { CalendarCheck, Clock } from "lucide-react";
import { useMemo, useState } from "react";

const TIME_SLOTS = ["09:00", "10:30", "13:00", "15:00", "16:30"];

// ponytail: custom picker holding no real availability - swap for a Cal.com/Calendly
// embed once a booking backend exists; UI contract (day + slot -> confirm) stays the same.
function nextWeekdays(count: number) {
  const days: Date[] = [];
  const d = new Date();
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
  }
  return days;
}

export function BookingPicker() {
  const days = useMemo(() => nextWeekdays(5), []);
  const [dayIndex, setDayIndex] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed && dayIndex !== null && slot) {
    const day = days[dayIndex];
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-mist bg-paper-raised p-6 sm:p-8">
        <CalendarCheck size={28} className="text-signal" strokeWidth={1.5} />
        <h3 className="font-display text-2xl">Call booked.</h3>
        <p className="text-sm text-ink-soft">
          {day.toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}{" "}
          at {slot}. A confirmation and dial-in link will follow by email.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-mist bg-paper-raised p-6 sm:p-8">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
        <Clock size={14} />
        Strategy call · 30 min
      </div>

      <div>
        <p className="mb-3 text-sm font-medium">Pick a day</p>
        <div className="grid grid-cols-5 gap-2">
          {days.map((d, i) => (
            <button
              key={i}
              onClick={() => {
                setDayIndex(i);
                setSlot(null);
              }}
              className={`flex flex-col items-center gap-1 rounded-xl border py-3 text-xs transition-colors ${
                dayIndex === i
                  ? "border-ink bg-ink text-paper"
                  : "border-mist text-ink-soft hover:border-brass hover:text-brass"
              }`}
            >
              <span className="font-mono uppercase">
                {d.toLocaleDateString(undefined, { weekday: "short" })}
              </span>
              <span className="font-display text-lg">{d.getDate()}</span>
            </button>
          ))}
        </div>
      </div>

      {dayIndex !== null && (
        <div>
          <p className="mb-3 text-sm font-medium">Pick a time</p>
          <div className="flex flex-wrap gap-2">
            {TIME_SLOTS.map((t) => (
              <button
                key={t}
                onClick={() => setSlot(t)}
                className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
                  slot === t
                    ? "border-ink bg-ink text-paper"
                    : "border-mist text-ink-soft hover:border-brass hover:text-brass"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        disabled={dayIndex === null || !slot}
        onClick={() => setConfirmed(true)}
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-paper transition-opacity disabled:opacity-30"
      >
        Confirm call
      </button>
    </div>
  );
}
