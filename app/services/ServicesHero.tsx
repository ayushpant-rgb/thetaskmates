"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Our Services
          </h1>
          <p className="text-white/85 text-lg leading-relaxed">
            We provide skilled offshore professionals tailored to your needs — whether
            you need one specialist or a full team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
