import { ImageIcon, Video } from "lucide-react";
import { galleryPlaceholderCount } from "@/lib/data";
import { SectionHeading } from "@/app/components/ui/section-heading";

// ponytail: placeholder tiles only - no source photos were provided for this
// page. Drop real files into /public/gallery and swap these tiles for
// next/image once they're in hand; the grid layout won't need to change.
export function GallerySection() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="On the record"
        title="Gallery"
        description="Photos and video from launches, festive appearances and press moments - being filed."
      />

      <div className="flex flex-col gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-brass">
          Photos
        </span>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: galleryPlaceholderCount }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-mist bg-paper-raised text-ink-soft/40"
            >
              <ImageIcon size={28} strokeWidth={1.25} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-brass">
          Videos
        </span>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-mist bg-paper-raised text-ink-soft/40"
            >
              <Video size={28} strokeWidth={1.25} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
