"use client";

import StatsCounter from "@/components/ui/StatsCounter";
import { stats } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-neutral-50">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatsCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
