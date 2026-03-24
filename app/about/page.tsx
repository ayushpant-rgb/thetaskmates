import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import StaffingModels from "@/components/sections/StaffingModels";
import StatsSection from "./StatsSection";
import CTABanner from "@/components/layout/CTABanner";

export const metadata: Metadata = {
  title: "About TaskMates — Your Trusted Offshore HR Partner",
  description:
    "Learn how TaskMates helps businesses build offshore teams with EOR services, reducing costs and simplifying HR management.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <StaffingModels />
      <StatsSection />
      <CTABanner />
    </>
  );
}
