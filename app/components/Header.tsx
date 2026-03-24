"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-shadow duration-200 ${
        scrolled
          ? "border-ebh-neutral-200 shadow-teal-sm"
          : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-ebh-teal rounded-lg flex items-center justify-center shadow-teal-sm group-hover:bg-ebh-teal-dark transition-colors">
              <svg
                className="w-4.5 h-4.5 text-white w-[18px] h-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-ebh-neutral-900 tracking-tight">
              Elevate Biz Hub
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              ["Features", "#features"],
              ["How It Works", "#how-it-works"],
              ["Pricing", "#pricing"],
              ["Testimonials", "#testimonials"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-ebh-neutral-500 hover:text-ebh-teal transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-ebh-neutral-800 hover:text-ebh-teal transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="bg-ebh-orange hover:bg-ebh-orange-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-orange-md"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-ebh-neutral-500 hover:text-ebh-teal transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ebh-neutral-100">
            <nav className="flex flex-col gap-1">
              {[
                ["Features", "#features"],
                ["How It Works", "#how-it-works"],
                ["Pricing", "#pricing"],
                ["Testimonials", "#testimonials"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-medium text-ebh-neutral-500 hover:text-ebh-teal hover:bg-ebh-teal-pale px-3 py-2.5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-ebh-neutral-100 flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm font-medium text-ebh-neutral-800 px-3 py-2.5 text-center border border-ebh-neutral-200 rounded-lg"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="bg-ebh-orange hover:bg-ebh-orange-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center transition-colors"
                >
                  Start free trial
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
