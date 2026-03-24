import Link from "next/link";

const tasks = [
  { title: "Design system tokens", done: true, tag: "Design", initials: "AP" },
  { title: "API authentication flow", done: true, tag: "Backend", initials: "MR" },
  { title: "Dashboard analytics views", done: false, tag: "Frontend", initials: "SL" },
  { title: "Mobile responsive layout", done: false, tag: "Frontend", initials: "AP" },
  { title: "User onboarding flow", done: false, tag: "Product", initials: "KJ" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ebh-teal-pale via-white to-white pt-20 pb-28">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-ebh-teal/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-ebh-orange/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-ebh-teal-pale text-ebh-teal text-xs font-mono font-medium px-3.5 py-1.5 rounded-full mb-7 border border-ebh-teal/20">
              <span className="w-1.5 h-1.5 bg-ebh-teal rounded-full animate-pulse" />
              Now in public beta — join 10,000+ teams
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold text-ebh-neutral-900 leading-[1.1] tracking-tight mb-6">
              Where great teams{" "}
              <span className="text-ebh-teal">get things</span>{" "}
              done together
            </h1>

            <p className="text-lg text-ebh-neutral-500 leading-relaxed mb-9 max-w-lg">
              Elevate Biz Hub brings your team&apos;s work into one place — tasks,
              deadlines, discussions, and insights — so nothing falls through
              the cracks.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-14">
              <Link
                href="#"
                className="bg-ebh-orange hover:bg-ebh-orange-hover text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-center shadow-orange-md"
              >
                Start for free
              </Link>
              <Link
                href="#how-it-works"
                className="border border-ebh-neutral-200 hover:border-ebh-teal text-ebh-neutral-800 hover:text-ebh-teal font-semibold px-8 py-3.5 rounded-xl transition-colors text-center"
              >
                See how it works →
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-display font-bold text-ebh-neutral-900">10k+</div>
                <div className="text-xs text-ebh-neutral-500 font-mono mt-0.5">Teams active</div>
              </div>
              <div className="w-px h-10 bg-ebh-neutral-200" />
              <div>
                <div className="text-2xl font-display font-bold text-ebh-neutral-900">98%</div>
                <div className="text-xs text-ebh-neutral-500 font-mono mt-0.5">Satisfaction rate</div>
              </div>
              <div className="w-px h-10 bg-ebh-neutral-200" />
              <div>
                <div className="text-2xl font-display font-bold text-ebh-neutral-900">2.4M</div>
                <div className="text-xs text-ebh-neutral-500 font-mono mt-0.5">Tasks completed</div>
              </div>
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-teal-md border border-ebh-neutral-200 bg-white">
              {/* Browser chrome */}
              <div className="bg-ebh-neutral-50 border-b border-ebh-neutral-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4 bg-white rounded border border-ebh-neutral-200 px-3 py-1 text-xs text-ebh-neutral-500 font-mono">
                  app.elevatebizhub.io/workspace
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-semibold text-ebh-neutral-900 mb-0.5">
                      Q1 Product Sprint
                    </div>
                    <div className="text-xs text-ebh-neutral-500 font-mono">
                      14 tasks · 3 members
                    </div>
                  </div>
                  <div className="bg-ebh-teal-pale text-ebh-teal text-xs font-mono font-medium px-2.5 py-1 rounded-full border border-ebh-teal/20">
                    In Progress
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-ebh-neutral-500 mb-1.5">
                    <span>Progress</span>
                    <span className="font-mono font-medium text-ebh-teal">71%</span>
                  </div>
                  <div className="h-2 bg-ebh-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-ebh-teal to-ebh-teal-light rounded-full"
                      style={{ width: "71%" }}
                    />
                  </div>
                </div>

                {/* Task rows */}
                <div className="space-y-1.5">
                  {tasks.map((task, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                        task.done ? "opacity-55" : "bg-ebh-neutral-50"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                          task.done
                            ? "bg-ebh-teal"
                            : "border-2 border-ebh-neutral-200"
                        }`}
                      >
                        {task.done && (
                          <svg
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-xs flex-1 ${
                          task.done
                            ? "line-through text-ebh-neutral-500"
                            : "text-ebh-neutral-800"
                        }`}
                      >
                        {task.title}
                      </span>
                      <span className="text-xs font-mono text-ebh-neutral-500 bg-ebh-neutral-100 px-1.5 py-0.5 rounded">
                        {task.tag}
                      </span>
                      <div className="w-5 h-5 rounded-full bg-ebh-teal text-white text-[10px] flex items-center justify-center font-mono font-medium flex-shrink-0">
                        {task.initials[0]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-5 -left-7 bg-white border border-ebh-neutral-200 rounded-xl shadow-teal-sm p-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-ebh-orange-pale rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-ebh-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-ebh-neutral-900">
                  Task completed!
                </div>
                <div className="text-xs text-ebh-neutral-500">
                  Alex finished &ldquo;API auth flow&rdquo;
                </div>
              </div>
            </div>

            {/* Floating team badge */}
            <div className="absolute -top-5 -right-5 bg-white border border-ebh-neutral-200 rounded-xl shadow-teal-sm px-3.5 py-2.5 flex items-center gap-2">
              <div className="flex -space-x-2">
                {["AP", "MR", "SL"].map((ini) => (
                  <div
                    key={ini}
                    className="w-6 h-6 rounded-full bg-ebh-teal border-2 border-white text-white text-[9px] flex items-center justify-center font-mono font-medium"
                  >
                    {ini[0]}
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium text-ebh-neutral-800">3 online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
