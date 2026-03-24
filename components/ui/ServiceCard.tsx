"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

type ServiceCardProps = {
  title: string;
  icon: string;
  description: string;
  items: string[];
  index: number;
  expanded?: boolean;
};

export default function ServiceCard({
  title,
  icon,
  description,
  items,
  index,
  expanded = false,
}: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        {IconComponent && <IconComponent className="text-primary" size={24} />}
      </div>
      <h3 className="font-heading text-xl text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-700 text-sm mb-4">{description}</p>
      {expanded && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
              <Icons.Check className="text-success w-4 h-4 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
