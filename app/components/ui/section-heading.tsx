type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brass">
        <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
