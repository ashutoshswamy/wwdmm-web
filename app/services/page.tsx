import type { Metadata } from "next";
import { ServicesSection } from "@/app/components/services/services-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing & branding, celebrity management, global trade and event curation - four desks, one wire.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}
