"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import { services } from "@/lib/constants";

type ServicesGridProps = {
  expanded?: boolean;
  showCta?: boolean;
};

export default function ServicesGrid({ expanded = false, showCta = true }: ServicesGridProps) {
  return (
    <section className="py-20 md:py-24 bg-neutral-50">
      <div className="max-w-container mx-auto px-6">
        <SectionHeading
          title="Build Your Offshore Team for Key Business Functions"
          subtitle="We provide skilled offshore professionals tailored to your needs — whether you need one specialist or a full team."
        />
        
        <div className="w-full h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-2xl mb-16 relative group">
          <img 
            src="/hero-image.png" 
            alt="Offshore team management" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#006E6E]/80 via-transparent to-transparent flex items-end p-8 md:p-12">
            <div>
              <h3 className="text-white text-3xl md:text-4xl font-bold font-heading mb-2 tracking-tight">Empowering Global Growth</h3>
              <p className="text-white/80 max-w-lg">Scale operations effortlessly with access to world-class talent managed and nurtured by our expert teams.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} expanded={expanded} />
          ))}
        </div>
        {showCta && (
          <div className="text-center mt-12">
            <p className="text-neutral-700 mb-4">
              Get tailored staffing solutions — from a single expert to a complete offshore team.
            </p>
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
