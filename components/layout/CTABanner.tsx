"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

type CTABannerProps = {
  headline?: string;
  subheadline?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

export default function CTABanner({
  headline = "Let\u2019s Build Your Offshore Team \u2014 The Smart Way",
  subheadline = "Elevate your business with TaskMates and unlock global talent today.",
  primaryCta = "Book a Strategy Call",
  primaryHref = "/contact",
  secondaryCta = "Get a Proposal",
  secondaryHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-primary-dark py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-container mx-auto px-6 text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
          {headline}
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryCta}
          </Button>
          <Button
            href={secondaryHref}
            variant="secondary"
            size="lg"
            className="!border-white !bg-transparent !text-white hover:!bg-white hover:!text-primary"
          >
            {secondaryCta}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
