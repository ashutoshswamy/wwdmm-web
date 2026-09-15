import { headquarters } from "@/lib/data";

export function LocationMap() {
  const address = `${headquarters.line1}, ${headquarters.line2}`;
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-mist">
      <iframe
        src={src}
        title={`Map to World Widee Digital Media Marketing — ${address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full grayscale-[0.2] sm:h-96"
      />
    </div>
  );
}
