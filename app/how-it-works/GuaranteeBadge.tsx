"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function GuaranteeBadge() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border-2 border-primary/20 rounded-xl p-8 max-w-2xl mx-auto flex items-center gap-6"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="text-primary" size={32} />
          </div>
          <div>
            <h3 className="font-heading text-xl text-neutral-900 mb-1">
              3-Month Replacement Guarantee
            </h3>
            <p className="text-neutral-700 text-sm">
              We ensure peace of mind with a replacement guarantee for every hire.
              If your team member isn&apos;t the right fit, we&apos;ll find a replacement at no extra cost.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
