"use client";

import { motion } from "framer-motion";
import { Globe, DollarSign, Shield, Users } from "lucide-react";

const missions = [
  {
    icon: Globe,
    title: "Global Talent Access",
    description: "Provide access to skilled professionals worldwide",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Reduce operational costs by up to 60%",
  },
  {
    icon: Shield,
    title: "Eliminate Complexity",
    description: "Eliminate HR and compliance complexities",
  },
  {
    icon: Users,
    title: "Full Control",
    description: "Give you full control of your offshore team",
  },
];

export default function AboutMission() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 mb-4">
            Our Mission
          </h2>
          <p className="text-neutral-700 text-lg max-w-2xl mx-auto">
            We exist to make offshore hiring simple, reliable, and cost-effective for businesses of every size.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <m.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-lg text-neutral-900 mb-2">{m.title}</h3>
              <p className="text-neutral-700 text-sm">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
