const testimonials = [
  {
    quote:
      "Elevate Biz Hub cut our sprint planning time in half. The visibility across squads is something we've never had before — everyone finally knows what everyone else is working on.",
    name: "Priya Sharma",
    role: "Head of Engineering",
    company: "Luminar Tech",
    initials: "PS",
    color: "bg-ebh-teal",
  },
  {
    quote:
      "We tried four other tools before finding Elevate Biz Hub. The balance of simplicity and depth is spot-on. Our design and development teams are finally working from the same source of truth.",
    name: "Marcus Reid",
    role: "Director of Product",
    company: "Archway Digital",
    initials: "MR",
    color: "bg-ebh-orange",
  },
  {
    quote:
      "The analytics dashboard alone is worth the subscription. I can see workload distribution at a glance and catch burnout risk before it becomes a problem.",
    name: "Sofia Lindqvist",
    role: "Engineering Manager",
    company: "Northvault",
    initials: "SL",
    color: "bg-ebh-teal-dark",
  },
];

const logos = ["Luminar Tech", "Archway Digital", "Northvault", "Creston Labs", "Meridian Co"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-ebh-teal text-xs font-mono font-medium px-3.5 py-1.5 bg-ebh-teal-pale rounded-full border border-ebh-teal/20 mb-5">
            Loved by teams
          </div>
          <h2 className="font-display text-4xl font-bold text-ebh-neutral-900 mb-4">
            Trusted by 10,000+ high-performing teams
          </h2>
          <p className="text-ebh-neutral-500 text-lg leading-relaxed">
            From startups to enterprises, teams switch to Elevate Biz Hub and don&apos;t
            look back.
          </p>
        </div>

        {/* Company logos strip */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-16">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-mono font-medium text-ebh-neutral-200 tracking-wide uppercase"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-6 rounded-2xl border border-ebh-neutral-200 bg-ebh-neutral-50 hover:border-ebh-teal/30 hover:shadow-teal-sm transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-ebh-orange fill-ebh-orange"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-ebh-neutral-800 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} text-white text-xs font-mono font-semibold flex items-center justify-center flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ebh-neutral-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-ebh-neutral-500 font-mono">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
