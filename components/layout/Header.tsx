"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl text-primary">
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-primary"
                  : "text-neutral-700 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" size="default" className="!bg-accent !text-white hover:!bg-accent-hover rounded-full px-6">
            Get Started
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-neutral-900"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-2 ${
                pathname === item.href
                  ? "text-primary"
                  : "text-neutral-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="w-full mt-2 !bg-accent !text-white hover:!bg-accent-hover rounded-full">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
