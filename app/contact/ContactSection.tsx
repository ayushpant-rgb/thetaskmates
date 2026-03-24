"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Prefer to talk */}
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-heading text-lg text-neutral-900 mb-2">
                Prefer to Talk?
              </h3>
              <p className="text-neutral-700 text-sm mb-4">
                Book a free strategy call to discuss your offshore staffing needs.
              </p>
              <Button href={siteConfig.calendlyUrl} variant="secondary" className="w-full">
                <Calendar className="mr-2 w-4 h-4" />
                Book a Strategy Call
              </Button>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-primary w-5 h-5 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">Email</p>
                  <p className="text-sm text-neutral-700">{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-primary w-5 h-5 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">WhatsApp</p>
                  <p className="text-sm text-neutral-700">{siteConfig.whatsapp}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">Locations</p>
                  <p className="text-sm text-neutral-700">India (Operations)</p>
                  <p className="text-sm text-neutral-700">Serving Australia &amp; UK</p>
                </div>
              </div>
            </div>

            {/* Closing line */}
            <p className="text-neutral-700 text-sm italic border-t border-neutral-200 pt-6">
              &ldquo;Elevate your business. Simplify your operations. Build your team — with Elevate Biz Hub.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
