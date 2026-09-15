import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal/legal-page";
import { privacySections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for World Widee Digital Media Marketing.",
};

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={privacySections} />;
}
