const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Smart Task Management",
    description:
      "Create, assign, and prioritize tasks with flexible views — list, board, or timeline. Subtasks, dependencies, and custom fields adapt to any workflow.",
    label: "Core",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Real-Time Collaboration",
    description:
      "Comment threads, @mentions, and live cursors keep your team in sync. Everyone sees updates instantly — no more stale spreadsheets or missed emails.",
    label: "Team",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Deadline Tracking",
    description:
      "Never miss a milestone. Calendar overlays, Gantt-style timelines, and smart reminders surface the work that needs attention — before it's too late.",
    label: "Planning",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics & Insights",
    description:
      "Velocity charts, burndown graphs, and workload heatmaps give managers the clarity to plan with confidence and identify bottlenecks early.",
    label: "Analytics",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "50+ Integrations",
    description:
      "Connect Slack, GitHub, Figma, Notion, and more. Elevate Biz Hub sits at the center of your toolchain, pulling context in and pushing updates out automatically.",
    label: "Integrations",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Ready",
    description:
      "Native apps for iOS and Android keep you productive on the go. Capture tasks, check status, and respond to comments from anywhere, anytime.",
    label: "Mobile",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-ebh-teal text-xs font-mono font-medium px-3.5 py-1.5 bg-ebh-teal-pale rounded-full border border-ebh-teal/20 mb-5">
            Everything you need
          </div>
          <h2 className="font-display text-4xl font-bold text-ebh-neutral-900 mb-4">
            Built for how modern teams actually work
          </h2>
          <p className="text-ebh-neutral-500 text-lg leading-relaxed">
            Every feature is designed to reduce friction and keep your team
            focused on what matters.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-ebh-neutral-200 bg-white hover:border-ebh-teal/40 hover:shadow-teal-sm transition-all duration-200"
            >
              <div className="w-11 h-11 bg-ebh-teal-pale rounded-xl flex items-center justify-center text-ebh-teal mb-5 group-hover:bg-ebh-teal group-hover:text-white transition-colors duration-200">
                {feature.icon}
              </div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-ebh-neutral-900 text-base leading-snug">
                  {feature.title}
                </h3>
                <span className="flex-shrink-0 text-[10px] font-mono font-medium text-ebh-neutral-500 bg-ebh-neutral-100 px-2 py-0.5 rounded-full mt-0.5">
                  {feature.label}
                </span>
              </div>
              <p className="text-sm text-ebh-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
