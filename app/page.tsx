import { Hero } from "@/app/components/hero/hero";
import { ServicesTeaser } from "@/app/components/home/services-teaser";
import { AboutTeaser } from "@/app/components/home/about-teaser";
import { TestimonialGrid } from "@/app/components/home/testimonial-grid";
import { WhyChooseUs } from "@/app/components/home/why-choose-us";
import { FooterCta } from "@/app/components/home/footer-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <AboutTeaser />
      <TestimonialGrid />
      <WhyChooseUs />
      <FooterCta />
    </>
  );
}
