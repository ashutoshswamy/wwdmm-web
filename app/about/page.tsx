import type { Metadata } from "next";
import { AboutSection } from "@/app/components/about/about-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded by Prajakta Khedekar, World Widee Digital Media Marketing pairs two decades of media and PR experience with 15 years of business scaling.",
};

export default function AboutPage() {
  return <AboutSection />;
}
