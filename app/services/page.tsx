import type { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "Offshore Staffing Services for Every Business Function",
  description:
    "Explore offshore staffing services including admin support, digital marketing, sales, bookkeeping, and more with TaskMates.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid expanded showCta={false} />
      <CTABanner
        headline="Not Sure What You Need?"
        subheadline="Tell us about your business and we'll recommend the right staffing solution."
        primaryCta="Let's Talk"
        primaryHref="/contact"
        secondaryCta="Book a Strategy Call"
        secondaryHref="/contact"
      />
    </>
  );
}
