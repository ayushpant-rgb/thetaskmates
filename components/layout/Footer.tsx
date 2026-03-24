import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl mb-4">{siteConfig.name}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-white/60 text-sm">
              A division of {siteConfig.parentCompany}
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/70">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/70">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/70">
              Contact
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>{siteConfig.email}</li>
              <li>WhatsApp: {siteConfig.whatsapp}</li>
              <li>India (Operations)</li>
              <li>Serving Australia &amp; UK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
