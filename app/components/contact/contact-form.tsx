"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, CircleCheck } from "lucide-react";
import { useRef, useState } from "react";
import { businessTypes, goals, targetMarkets } from "@/lib/data";

type FormState = {
  businessType: string;
  targetMarket: string;
  goals: string[];
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  businessType: "",
  targetMarket: "",
  goals: [],
  name: "",
  email: "",
  message: "",
};

const steps = ["Business", "Market", "Goals", "You"] as const;

function PillGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`rounded-full border px-4 py-2.5 text-left text-sm transition-colors ${
            value === opt
              ? "border-ink bg-ink text-paper"
              : "border-mist text-ink-soft hover:border-brass hover:text-brass"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        stepRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    },
    { scope: stepRef, dependencies: [step] }
  );

  const canAdvance =
    (step === 0 && form.businessType !== "") ||
    (step === 1 && form.targetMarket !== "") ||
    (step === 2 && form.goals.length > 0) ||
    step === 3;

  function toggleGoal(goal: string) {
    setForm((f) => ({
      ...f,
      goals: f.goals.includes(goal)
        ? f.goals.filter((g) => g !== goal)
        : [...f.goals, goal],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    // ponytail: no lead-gen backend wired yet - swap for a real POST when the intake API exists.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-mist bg-paper-raised p-6 sm:p-8">
        <CircleCheck size={32} className="text-signal" strokeWidth={1.5} />
        <h3 className="font-display text-2xl">Filed. We&apos;re on it.</h3>
        <p className="text-sm leading-relaxed text-ink-soft">
          Your brief is with the desk. Expect a reply from a strategist
          within one business day at {form.email}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 rounded-2xl border border-mist bg-paper-raised p-6 sm:p-8"
    >
      <div className="flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <div
              className={`h-1 rounded-full transition-colors ${
                i <= step ? "bg-signal" : "bg-mist"
              }`}
            />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-soft">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div ref={stepRef} className="min-h-[180px]">
        {step === 0 && (
          <div className="flex flex-col gap-4">
            <label className="font-display text-xl">
              What best describes your business?
            </label>
            <PillGroup
              options={businessTypes}
              value={form.businessType}
              onChange={(v) => setForm((f) => ({ ...f, businessType: v }))}
            />
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <label className="font-display text-xl">
              Which market matters most right now?
            </label>
            <PillGroup
              options={targetMarkets}
              value={form.targetMarket}
              onChange={(v) => setForm((f) => ({ ...f, targetMarket: v }))}
            />
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <label className="font-display text-xl">
              What are you trying to get done? Pick all that apply.
            </label>
            <div className="flex flex-wrap gap-2">
              {goals.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => toggleGoal(g)}
                  className={`rounded-full border px-4 py-2.5 text-left text-sm transition-colors ${
                    form.goals.includes(g)
                      ? "border-ink bg-ink text-paper"
                      : "border-mist text-ink-soft hover:border-brass hover:text-brass"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <label className="font-display text-xl">
              Where should we send our reply?
            </label>
            <input
              required
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={(e) =>
                setForm((f) => ({ ...f, name: e.target.value }))
              }
              className="rounded-xl border border-mist bg-paper px-4 py-3 text-sm outline-none focus:border-brass"
            />
            <input
              required
              type="email"
              placeholder="Work email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className="rounded-xl border border-mist bg-paper px-4 py-3 text-sm outline-none focus:border-brass"
            />
            <textarea
              placeholder="Anything else the desk should know? (optional)"
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              rows={3}
              className="resize-none rounded-xl border border-mist bg-paper px-4 py-3 text-sm outline-none focus:border-brass"
            />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft ${
            step === 0 ? "invisible" : ""
          }`}
        >
          <ArrowLeft size={14} /> Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            disabled={!canAdvance}
            onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-paper transition-opacity disabled:opacity-30"
          >
            Next <ArrowRight size={14} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!form.name || !form.email}
            className="inline-flex items-center gap-1.5 rounded-full bg-signal px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-paper transition-opacity disabled:opacity-30"
          >
            Send brief <ArrowRight size={14} />
          </button>
        )}
      </div>
    </form>
  );
}
