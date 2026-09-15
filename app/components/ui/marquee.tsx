import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full min-w-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-10 py-1">
        {children}
        {children}
      </div>
    </div>
  );
}
