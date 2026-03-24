import type { Metadata } from "next";
import ContactHero from "./ContactHero";
import ContactSection from "./ContactSection";

export const metadata: Metadata = {
  title: "Build Your Offshore Team Today — Contact Elevate Biz Hub",
  description:
    "Get started with offshore staffing today. Contact Elevate Biz Hub to build your dedicated or part-time offshore team.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
