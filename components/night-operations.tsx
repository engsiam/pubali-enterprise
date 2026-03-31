import { Clock, Lightbulb, Moon, Zap } from "lucide-react";

export function NightOperationsSection() {
  const features = [
    {
      icon: Moon,
      title: "24/7 Operations",
      description:
        "Never stop - work around the clock with our round-the-clock service availability",
    },
    {
      icon: Zap,
      title: "Industrial Grade Lighting",
      description:
        "1000+ lux LED systems ensuring complete visibility and safety during night operations",
    },
    {
      icon: Clock,
      title: "Faster Project Completion",
      description:
        "Accelerate your timeline with continuous 24/7 operations and flexible scheduling",
    },
    {
      icon: Lightbulb,
      title: "Cost Optimization",
      description:
        "Maximize equipment utilization and reduce project overhead with extended hour services",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background Stars/Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: "10%", left: "10%" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: "20%", right: "15%" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{ top: "30%", left: "30%", opacity: 0.5 }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ bottom: "20%", right: "25%" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{ bottom: "15%", left: "20%", opacity: 0.5 }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
            <Moon size={16} className="text-yellow-300" />
            <span className="text-sm font-medium">24/7 Capability</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Night Operations Excellence
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pubali Enterprise specializes in continuous 24/7 operations with
            professional night work capabilities. Never let time zones or
            daylight hours slow down your project.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20 group"
              >
                <Icon className="w-10 h-10 text-yellow-300 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-white/20 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Moon size={24} className="text-yellow-300" />
            Why Choose Our Night Operations?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">Safety First</p>
              <p className="text-white">
                Specially trained crews with enhanced safety protocols and
                communication systems for night work
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Equipment Excellence</p>
              <p className="text-white">
                Latest LED lighting technology and equipment maintenance
                ensuring zero downtime during operations
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Experience Matters</p>
              <p className="text-white">
                Years of proven night operation experience across all weather
                conditions and project types
              </p>
            </div>
          </div>
        </div>

        {/* Night Work Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { stat: "500+", label: "Night Operations" },
            { stat: "24/7", label: "Availability" },
            { stat: "Zero", label: "Night Incidents" },
            { stat: "98%", label: "Schedule Adherence" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-yellow-400/50 transition-all"
            >
              <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
                {item.stat}
              </p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-yellow-500/50 transition-all hover:translate-y-[-2px]"
          >
            <Moon size={18} />
            Schedule Night Operations
          </a>
        </div>
      </div>
    </section>
  );
}
