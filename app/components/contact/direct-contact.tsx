import { Mail, MapPin, Phone } from "lucide-react";
import { contact, headquarters } from "@/lib/data";

export function DirectContact() {
  return (
    <div className="flex flex-wrap items-start gap-x-10 gap-y-4 border-t border-mist pt-8 font-mono text-sm">
      <a
        href={`mailto:${contact.email}`}
        className="flex items-center gap-2 text-ink-soft hover:text-ink"
      >
        <Mail size={15} className="text-brass" />
        {contact.email}
      </a>
      {contact.phones.map((p) => (
        <a
          key={p}
          href={`tel:${p.replace(/\s+/g, "")}`}
          className="flex items-center gap-2 text-ink-soft hover:text-ink"
        >
          <Phone size={15} className="text-brass" />
          {p}
        </a>
      ))}
      <span className="flex items-center gap-2 text-ink-soft">
        <MapPin size={15} className="text-brass" />
        {headquarters.line1}, {headquarters.line2}
      </span>
    </div>
  );
}
