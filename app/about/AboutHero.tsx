"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function AboutHero() {
  const howWeWork = [
    "You select the best talent",
    "They work exclusively for you",
    "We handle HR, payroll, and compliance",
  ];

  return (
    <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Your Trusted Offshore HR Partner
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-4">
              Elevate Biz Hub is your go-to offshore HR partner, helping businesses efficiently
              build, manage, and scale offshore teams.
            </p>
            <p className="text-white/75 text-base leading-relaxed mb-8">
              As your Employer of Record (EOR), we legally employ your staff in offshore
              locations while you retain full control over their daily work.
            </p>
            <div className="space-y-3">
              {howWeWork.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <span className="text-white/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full h-[400px] lg:h-[500px] hidden lg:block rounded-[32px] overflow-hidden shadow-2xl"
          >
             <img src="/about-hero.png" alt="Vibrant dynamic team collaborating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
