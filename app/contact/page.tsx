import type { Metadata } from "next";
import { ContactSection } from "@/app/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a brief or book a strategy call with World Widee Digital Media Marketing.",
};

export default function ContactPage() {
  return <ContactSection />;
}
