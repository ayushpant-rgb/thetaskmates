"use client";

import { useState } from "react";
import { countries, staffCounts } from "@/lib/constants";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-neutral-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-neutral-900 mb-2">Thank You!</h3>
        <p className="text-neutral-700">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-xl p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1.5">
            Company Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1.5">
            Phone / WhatsApp <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            placeholder="+61 400 000 000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1.5">
            Country <span className="text-accent">*</span>
          </label>
          <select
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white"
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-900 mb-1.5">
            Number of Staff Required
          </label>
          <select className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-white">
            <option value="">Select</option>
            {staffCounts.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Staffing Type
        </label>
        <div className="flex gap-6">
          {["Full-Time", "Part-Time", "Both"].map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
              <input
                type="radio"
                name="staffingType"
                value={type}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900 mb-1.5">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Submit Enquiry
      </Button>
    </form>
  );
}
