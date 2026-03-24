import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/layout/CTABanner";

const homeSteps = [
  { step: 1, title: "We Recruit", description: "Source top talent tailored to your needs" },
  { step: 2, title: "We Employ", description: "Handle payroll, compliance, and contracts" },
  { step: 3, title: "You Manage", description: "Direct and manage your team" },
  { step: 4, title: "We Handle the Rest", description: "HR, taxes, and administration" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <HowItWorks steps={homeSteps} />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
