import { SectionHeading } from "@/app/components/ui/section-heading";
import { ContactForm } from "@/app/components/contact/contact-form";
import { BookingPicker } from "@/app/components/contact/booking-picker";
import { DirectContact } from "@/app/components/contact/direct-contact";
import { LocationMap } from "@/app/components/contact/location-map";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mesh-hero border-t border-mist py-24 sm:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionHeading
          eyebrow="Route - get in touch"
          title="Send a brief, or just book the call."
          description="Two ways onto the wire: file a short brief and a strategist will reply, or grab a slot on the calendar directly."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <BookingPicker />
        </div>
        <DirectContact />
        <LocationMap />
      </div>
    </section>
  );
}
