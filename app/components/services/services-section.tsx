import { SectionHeading } from "@/app/components/ui/section-heading";
import { ServicesTabs } from "@/app/components/services/services-tabs";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t border-mist bg-paper-raised/60 py-24 sm:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <SectionHeading
          eyebrow="Manifest"
          title="Four desks, one wire."
          description="Every engagement routes through the same operation, whether it's a press campaign, a talent booking, or a container of export product."
        />
        <ServicesTabs />
      </div>
    </section>
  );
}
