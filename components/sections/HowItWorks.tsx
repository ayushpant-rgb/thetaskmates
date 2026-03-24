"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import StepCard from "@/components/ui/StepCard";

type HowItWorksProps = {
  steps: { step: number; title: string; description: string }[];
  title?: string;
  subtitle?: string;
};

export default function HowItWorks({
  steps,
  title = "How It Works",
  subtitle,
}: HowItWorksProps) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className={`grid grid-cols-2 gap-8 ${
          steps.length === 5
            ? "md:grid-cols-3 lg:grid-cols-5"
            : steps.length === 4
            ? "md:grid-cols-4"
            : "md:grid-cols-3"
        }`}>
          {steps.map((step, i) => (
            <StepCard key={step.step} {...step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
