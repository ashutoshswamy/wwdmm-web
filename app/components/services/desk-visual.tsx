import Image from "next/image";
import type { ReactNode } from "react";

export function DeskVisual({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-4">
      <div className="overflow-hidden rounded-2xl border border-mist">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="aspect-square w-full object-cover"
        />
      </div>
      {children}
    </div>
  );
}
