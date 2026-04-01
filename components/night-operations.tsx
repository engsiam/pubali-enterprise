import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Lightbulb,
  Moon,
  Zap,
} from "lucide-react";

export function NightOperationsSection() {
  const features = [
    {
      icon: Moon,
      title: "Continuous Operations",
      description:
        "Round-the-clock support for uninterrupted project execution.",
    },
    {
      icon: Zap,
      title: "Industrial Lighting",
      description: "High-lux LED systems for safe and efficient night work.",
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Continuous scheduling helps reduce overall project time.",
    },
    {
      icon: Lightbulb,
      title: "Cost Efficient",
      description: "Extended-hour operations improve equipment utilization.",
    },
  ];

  const trustItems = [
    "Rapid Deployment",
    "Trained Night Crew",
    "Safety-Compliant Equipment",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-14 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

        {/* subtle dots */}
        <div className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-white/20" />
        <div className="absolute right-[15%] top-[28%] h-1 w-1 rounded-full bg-white/10" />
        <div className="absolute left-[22%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-yellow-300/20" />
        <div className="absolute right-[28%] bottom-[25%] h-1 w-1 rounded-full bg-blue-300/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(255,255,255,0.04)]">
            <Moon size={15} className="text-yellow-300" />
            24/7 Capability
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Night Operations Excellence
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
            Reliable night-time port operations with trained crews, industrial
            lighting, and continuous execution.
          </p>

          {/* Trust strip */}
          <div className="mt-5 flex flex-wrap justify-center gap-3.5">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 backdrop-blur-sm"
              >
                <CheckCircle2 size={14} className="text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Compact Features */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/[0.09]"
              >
                {/* subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />
                </div>

                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl 
                  bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 
                  ring-1 ring-yellow-300/30 
                  shadow-[0_0_20px_rgba(250,204,21,0.15)]"
                >
                  <Icon className="h-5 w-5 text-yellow-300 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="text-sm sm:text-base font-semibold leading-snug text-white">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs sm:text-sm leading-5 sm:leading-[1.65] text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compact CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-gradient-to-r from-yellow-400 to-yellow-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(250,204,21,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(250,204,21,0.28)]"
          >
            Schedule Night Operations
            <ArrowRight size={16} />
          </a>

          <p className="mt-3 text-xs text-slate-400">
            Available for urgent operations and scheduled night handling.
          </p>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
