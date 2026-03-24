"use client";

import { motion } from "framer-motion";

type StepCardProps = {
  step: number;
  title: string;
  description: string;
  index: number;
  total: number;
};

export default function StepCard({ step, title, description, index, total }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4 relative z-10">
        {step}
      </div>
      {index < total - 1 && (
        <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-neutral-200" />
      )}
      <h3 className="font-heading text-lg text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-700 text-sm max-w-[200px]">{description}</p>
    </motion.div>
  );
}
