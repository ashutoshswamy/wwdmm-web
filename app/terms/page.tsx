import type { Metadata } from "next";
import { LegalPage } from "@/app/components/legal/legal-page";
import { termsSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for World Widee Digital Media Marketing.",
};

export default function TermsPage() {
  return <LegalPage title="Terms of Service" sections={termsSections} />;
}
