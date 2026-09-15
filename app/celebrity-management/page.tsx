import type { Metadata } from "next";
import { CelebritySection } from "@/app/components/celebrity/celebrity-section";

export const metadata: Metadata = {
  title: "Celebrity Management",
  description:
    "Celebrity inaugurations, festive appearances and brand endorsements - celebrity management from World Widee Digital Media Marketing.",
};

export default function CelebrityManagementPage() {
  return <CelebritySection />;
}
