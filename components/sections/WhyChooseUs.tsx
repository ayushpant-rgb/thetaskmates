"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { benefits } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-primary-dark text-white">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Your Trusted Offshore HR Partner</h2>
            <p className="text-white/70 text-lg max-w-2xl">TaskMates is your go-to offshore HR partner, helping businesses efficiently build, manage, and scale offshore teams. As your Employer of Record (EOR), we legally employ your staff in offshore locations while you retain full control over their daily work.</p>
          </motion.div>
          <div className="hidden lg:block w-full h-[320px] rounded-[32px] overflow-hidden shadow-2xl relative">
            <img src="/trusted-hr.png" alt="Trusted HR Partner" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[benefit.icon];
            return (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 flex items-start gap-4 backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {IconComponent && <IconComponent className="text-accent" size={20} />}
                </div>
                <p className="text-white text-sm font-medium">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
