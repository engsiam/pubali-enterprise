import { ArrowRight, ShieldCheck, Truck, Wrench } from "lucide-react";
import Image from "next/image";

export function EquipmentFleet() {
  const equipment = [
    {
      title: "Heavy-Duty Cranes",
      description:
        "Mobile hydraulic cranes for precise loading and unloading with advanced operational safety.",
      image: "/images/operations/3.jpg",
      badge: "Up to 500 ton capacity",
      tags: ["Barge operations", "Heavy equipment"],
    },
    {
      title: "Bulk Material Loaders",
      description:
        "High-capacity loaders built for sand, coal, fertilizer, and aggregate material handling.",
      image: "/images/operations/1.jpg",
      badge: "40–60 ton/hour throughput",
      tags: ["Soil handling", "Material unloading"],
    },
    {
      title: "LED Night Operation Lights",
      description:
        "Industrial-grade lighting systems enabling safe 24/7 operations with reliable visibility.",
      image: "/images/operations/2.jpg",
      badge: "1000+ lux illumination",
      tags: ["24/7 work", "Safety compliance"],
    },
    {
      title: "Conveyor Systems",
      description:
        "Efficient transfer systems designed for smooth material movement with dust control support.",
      image: "/images/service-barge-loading.jpg",
      badge: "Up to 300 ton/day",
      tags: ["Material transfer", "Efficiency"],
    },
    {
      title: "Transport Vehicles",
      description:
        "Reliable fleet support for cargo transportation, internal logistics, and site coordination.",
      image: "/images/Unloading-Coal.jpg",
      badge: "10–20 ton capacity",
      tags: ["Transport", "Quick delivery"],
    },
    {
      title: "Safety Equipment Package",
      description:
        "Complete PPE, harnesses, and safety systems aligned with industrial site requirements.",
      image: "/images/crane-operations.jpg",
      badge: "100% compliance",
      tags: ["Worker safety", "Risk mitigation"],
    },
  ];

  const stats = [
    {
      icon: Wrench,
      value: "500T+",
      label: "Lift Capacity",
    },
    {
      icon: Truck,
      value: "24/7",
      label: "Operations",
    },
    {
      icon: ShieldCheck,
      value: "1000+",
      label: "Lux Lighting",
    },
    {
      icon: ArrowRight,
      value: "18+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-20">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
            Industrial Equipment
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Our Equipment Fleet
          </h2>

          <p className="mt-4 text-[15px] leading-8 text-slate-600 md:text-lg">
            State-of-the-art machinery and technology enabling efficient, safe,
            and reliable industrial operations across cargo, river, and heavy
            material projects.
          </p>
        </div>

        {/* Premium Stats */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-white/90 px-5 py-5 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.10)]"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>
                <p className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_24px_50px_rgba(15,23,42,0.10)]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[1.35rem] font-bold tracking-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-[11px] font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/90 px-6 py-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)] backdrop-blur">
            <h3 className="text-2xl font-bold text-slate-900">
              Ready for Large-Scale Port Operations?
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">
              Our equipment fleet is prepared for coal, fertilizer, sand,
              aggregate, and heavy cargo handling across river and port
              operations.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Request Equipment Support
                <ArrowRight size={16} />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400"
              >
                View Project Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
