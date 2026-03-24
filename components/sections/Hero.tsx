"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { homeHero } from "@/lib/constants";

export default function Hero() {
  return (
    <>
    {/* Top Banner */}
    <div className="bg-primary-dark text-white py-2.5 text-center flex items-center justify-center gap-3">
      <span className="text-sm font-medium">✨ Build your offshore team fast and save up to 60% on staffing.</span>
      <a href="/contact" className="text-sm font-semibold hover:text-accent transition-colors flex items-center">
        Get started <ArrowRight className="ml-1 w-3 h-3" />
      </a>
    </div>

    <section className="relative bg-[#FAFAFA] lg:overflow-hidden pt-12 pb-16 md:pt-16 md:pb-28">
      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-neutral-900 leading-[1.1] tracking-tight mb-6">
              {homeHero.headline}
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl lg:text-[22px] leading-relaxed mb-10 max-w-[540px]">
              {homeHero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg" 
                className="rounded-full shadow-lg hover:shadow-xl transition-all font-medium py-3.5 px-8 text-base !bg-accent !text-white hover:!bg-accent-hover"
              >
                {homeHero.primaryCta || "Learn more"}
              </Button>
              <Button
                href="/how-it-works"
                variant="secondary"
                size="lg"
                className="rounded-full font-medium py-3.5 px-8 text-base !border-neutral-200 !text-primary hover:!bg-neutral-100 hover:!border-neutral-300"
              >
                {homeHero.secondaryCta || "Request a demo"}
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-accent text-sm mb-0.5 tracking-widest">
                  ★★★★★
                </div>
                <p className="text-neutral-900 font-semibold text-sm">
                  {homeHero.socialProof}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <div className="relative h-[450px] lg:h-[550px] w-full hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl z-20"
            >
              <img src="/hero-image.png" alt="Professionals working remotely" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Decoration Element */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent rounded-[32px] z-10 hidden xl:block"
            >
              <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #111 2px, transparent 0)', backgroundSize: '16px 16px' }}></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
