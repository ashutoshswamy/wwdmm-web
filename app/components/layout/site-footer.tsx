import Image from "next/image";
import Link from "next/link";
import { contact, headquarters, navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-mist bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex max-w-xs flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="World Widee Digital Media Marketing"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0"
              />
              <span className="font-display text-lg leading-tight">
                World Widee Digital
                <span className="block font-mono text-[0.5rem] uppercase tracking-[0.15em] text-paper/50">
                  Media Marketing
                </span>
              </span>
            </div>
            <p className="text-sm text-paper/60">
              Media, PR and global trade, run from one wire out of
              Maharashtra.
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper/40">
              Navigate
            </span>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-paper/70 hover:text-paper"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper/40">
              Head office
            </span>
            <span className="text-sm text-paper/70">{headquarters.line1}</span>
            <span className="text-sm text-paper/70">{headquarters.line2}</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper/40">
              Reach the desk
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-paper/70 hover:text-paper"
            >
              {contact.email}
            </a>
            {contact.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s+/g, "")}`}
                className="text-sm text-paper/70 hover:text-paper"
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-paper/10 pt-6 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-paper/40">
          <span>© {new Date().getFullYear()} World Widee Digital Media Marketing. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
