"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "@/app/components/theme/theme-toggle";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="World Widee Digital Media Marketing"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
            priority
          />
          <span className="font-display text-base leading-tight tracking-tight sm:text-lg">
            World Widee Digital
            <span className="block font-mono text-[0.5rem] uppercase tracking-[0.15em] text-brass">
              Media Marketing
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:text-ink ${
                pathname === link.href ? "text-ink" : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-signal"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-mist"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="flex flex-col gap-1 border-t border-mist bg-paper px-6 py-4 xl:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2 font-mono text-sm uppercase tracking-[0.15em] ${
                pathname === link.href ? "text-ink" : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-paper"
          >
            Get Started
          </Link>
        </div>
      ) : null}
    </header>
  );
}
