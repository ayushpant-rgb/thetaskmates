"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { aboutPreview } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-semibold text-4xl md:text-5xl text-primary mb-8 tracking-tight">
              We connect you with world-class talent, effortlessly.
            </h2>
            <div className="space-y-6">
              {aboutPreview.text.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-neutral-600 text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-10">
              <Button href="/about" className="!bg-primary !text-white hover:!bg-primary/90 rounded-full px-8 py-4 font-medium" size="lg">
                {aboutPreview.linkText || "Learn More About Us"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="/about-image.png" 
                alt="Professionals collaborating over a desk" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
