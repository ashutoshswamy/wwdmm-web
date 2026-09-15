import type { Metadata } from "next";
import { GallerySection } from "@/app/components/gallery/gallery-section";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and video from World Widee Digital Media Marketing.",
};

export default function GalleryPage() {
  return <GallerySection />;
}
