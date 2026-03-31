import { Code2, Wrench, Zap } from "lucide-react";

export function EquipmentSection() {
  const equipment = [
    {
      name: "Heavy-Duty Cranes",
      capacity: "Up to 500 ton capacity",
      description:
        "Mobile hydraulic cranes for precise loading and unloading operations with advanced safety features.",
      icon: Wrench,
      uses: ["Barge operations", "Heavy equipment", "Container handling"],
      image: "/images/crane-equipment.jpg",
    },
    {
      name: "Bulk Material Loaders",
      capacity: "40-60 ton/hour throughput",
      description:
        "High-capacity loaders specifically designed for sand, coal, fertilizer, and aggregate materials.",
      icon: Code2,
      uses: ["Soil handling", "Sand operations", "Material unloading"],
      image: "/images/loader-equipment.jpg",
    },
    {
      name: "LED Night Operation Lights",
      capacity: "1000+ lux illumination",
      description:
        "Industrial-grade LED lighting systems enabling safe 24/7 operations with minimal power consumption.",
      icon: Zap,
      uses: [
        "Round-the-clock work",
        "Safety compliance",
        "Schedule flexibility",
      ],
      image: "/images/night-lights.jpg",
    },
    {
      name: "Conveyor Systems",
      capacity: "Up to 300 ton/day",
      description:
        "Modular conveyor belts for efficient material transfer with dust control and safety guards.",
      icon: Wrench,
      uses: ["Material transfer", "Dust control", "Efficiency"],
      image: "/images/conveyor.jpg",
    },
    {
      name: "Transport Vehicles",
      capacity: "10-20 ton capacity",
      description:
        "Fleet of trucks and tippers for reliable material transportation and site logistics.",
      icon: Code2,
      uses: ["Material transport", "Site logistics", "Quick delivery"],
      image: "/images/trucks.jpg",
    },
    {
      name: "Safety Equipment Package",
      capacity: "100% compliance",
      description:
        "Complete PPE, harnesses, and safety systems meeting all international standards.",
      icon: Zap,
      uses: ["Worker safety", "Compliance", "Risk mitigation"],
      image: "/images/safety-equipment.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Equipment Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art machinery and technology enabling efficient, safe,
            and reliable industrial operations
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-accent/50"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-blue-900/60 z-10 group-hover:opacity-70 transition-opacity"></div>
                  <Icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/80 z-20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Capacity */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold">
                      {item.capacity}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Uses */}
                  <div className="flex flex-wrap gap-2">
                    {item.uses.map((use, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-50 text-primary px-2.5 py-1 rounded-full border border-blue-200"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Need Specific Equipment?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our equipment rental and operation services can be customized for
            your project needs. Get in touch with our team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Equipment Quote
          </a>
        </div>
      </div>
    </section>
  );
}
