import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-ebh-teal-dark via-ebh-teal to-ebh-teal-light"
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-white/80 text-xs font-mono font-medium px-3.5 py-1.5 bg-white/10 rounded-full border border-white/20 mb-7">
          Free 14-day trial · No credit card required
        </div>

        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Your team&apos;s best work starts today
        </h2>

        <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl mx-auto">
          Join thousands of teams who use Elevate Biz Hub to ship faster, collaborate
          better, and stay aligned — from day one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="bg-ebh-orange hover:bg-ebh-orange-hover text-white font-bold px-9 py-4 rounded-xl transition-colors shadow-orange-md text-base"
          >
            Start your free trial
          </Link>
          <Link
            href="#"
            className="border border-white/30 hover:border-white/60 text-white font-semibold px-9 py-4 rounded-xl transition-colors text-base"
          >
            Talk to sales
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-white/60 text-xs font-mono">
          {[
            "SOC 2 Type II certified",
            "99.9% uptime SLA",
            "Cancel anytime",
            "GDPR compliant",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
