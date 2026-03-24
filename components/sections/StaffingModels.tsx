"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staffingModels } from "@/lib/constants";

export default function StaffingModels() {
  return (
    <section className="py-20 md:py-24 bg-neutral-50">
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          title="Flexible Hiring Models for Your Business"
          subtitle="Choose the model that fits your business — or combine both for maximum efficiency."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {staffingModels.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-heading text-2xl text-neutral-900 mb-2">
                {model.title}
              </h3>
              <p className="text-neutral-700 text-sm mb-6">{model.description}</p>
              <ul className="space-y-4">
                {model.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <Check className="text-success w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-neutral-900">
                        {f.label}:
                      </span>{" "}
                      <span className="text-sm text-neutral-700">{f.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
