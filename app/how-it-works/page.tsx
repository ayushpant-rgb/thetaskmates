import type { Metadata } from "next";
import HowItWorksHero from "./HowItWorksHero";
import StaffingModels from "@/components/sections/StaffingModels";
import HowItWorks from "@/components/sections/HowItWorks";
import GuaranteeBadge from "./GuaranteeBadge";
import CTABanner from "@/components/layout/CTABanner";
import { processSteps } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Simple Offshore Hiring Process in 5 Easy Steps",
  description:
    "Discover our transparent offshore hiring process — from talent sourcing to onboarding and ongoing HR support.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <StaffingModels />
      <HowItWorks
        steps={processSteps}
        title="The 5-Step Process"
        subtitle="A simple, transparent process that gets your offshore team up and running fast."
      />
      <GuaranteeBadge />
      <CTABanner />
    </>
  );
}
