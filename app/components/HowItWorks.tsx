const steps = [
  {
    number: "01",
    title: "Create your workspace",
    description:
      "Set up in under two minutes. Import existing projects from Jira, Trello, or Asana — or start fresh with one of our proven templates.",
    detail: "No credit card required",
  },
  {
    number: "02",
    title: "Invite your team",
    description:
      "Add teammates by email. Assign roles, set permissions, and organize work into projects and spaces that match your org structure.",
    detail: "Unlimited team members",
  },
  {
    number: "03",
    title: "Ship with confidence",
    description:
      "Track progress in real time, catch blockers early with smart alerts, and celebrate wins together. Your best work starts here.",
    detail: "Live dashboards included",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-ebh-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-ebh-teal text-xs font-mono font-medium px-3.5 py-1.5 bg-ebh-teal-pale rounded-full border border-ebh-teal/20 mb-5">
            Simple to start
          </div>
          <h2 className="font-display text-4xl font-bold text-ebh-neutral-900 mb-4">
            Up and running in minutes, not months
          </h2>
          <p className="text-ebh-neutral-500 text-lg leading-relaxed">
            We built Elevate Biz Hub to be the tool you actually stick with — easy to
            start, powerful as you grow.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-9 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-ebh-neutral-200 via-ebh-teal/30 to-ebh-neutral-200" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Step circle */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-ebh-teal/30 shadow-teal-sm flex flex-col items-center justify-center mb-6">
                <span className="font-mono text-xs font-semibold text-ebh-teal/60 leading-none mb-0.5">
                  step
                </span>
                <span className="font-display text-xl font-bold text-ebh-teal leading-none">
                  {step.number}
                </span>
              </div>

              <h3 className="font-semibold text-ebh-neutral-900 text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-ebh-neutral-500 text-sm leading-relaxed mb-4 max-w-xs">
                {step.description}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ebh-teal">
                <svg
                  className="w-3.5 h-3.5"
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
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-white border border-ebh-neutral-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-ebh-neutral-900 mb-1">
              Ready to see it in action?
            </h3>
            <p className="text-sm text-ebh-neutral-500">
              Book a 20-minute demo with our team and we&apos;ll walk you through
              everything.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="#"
              className="bg-ebh-teal hover:bg-ebh-teal-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-teal-sm whitespace-nowrap"
            >
              Book a demo
            </a>
            <a
              href="#"
              className="border border-ebh-neutral-200 hover:border-ebh-teal text-ebh-neutral-800 hover:text-ebh-teal font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
