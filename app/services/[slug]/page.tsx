import {
  Anchor,
  ArrowRight,
  CheckCircle,
  Gauge,
  Moon,
  Ship,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const serviceDetails: Record<
  string,
  {
    title: string;
    shortDesc: string;
    image: string;
    icon: any;
    fullDescription: string;
    capabilities: string[];
    specifications: { label: string; value: string }[];
    useCases: string[];
    benefits: string[];
    equipment: string[];
    pricing?: string;
    availability: string;
  }
> = {
  "barge-loading": {
    title: "Barge Loading",
    shortDesc: "Precision cargo loading on barges",
    image: "/images/can-holding.jpg",
    icon: Truck,
    fullDescription:
      "Our professional barge loading services ensure safe, efficient, and precise placement of cargo on vessels. We use state-of-the-art equipment and employ highly trained operators to guarantee optimal load distribution and rapid turnaround times.",
    capabilities: [
      "Precision cargo placement and weight distribution",
      "Real-time load monitoring and documentation",
      "Quick turnaround times with minimal downtime",
      "Multi-commodity handling expertise",
      "Weather-resistant operations",
    ],
    specifications: [
      { label: "Max Cargo Capacity", value: "5000+ tons per operation" },
      { label: "Loading Speed", value: "200-300 tons/hour" },
      { label: "Operating Temperature", value: "-10°C to +50°C" },
      { label: "Weather Conditions", value: "Year-round operations" },
    ],
    useCases: [
      "Coal loading at port terminals",
      "Container placement on barges",
      "Agricultural commodity loading",
      "Salt and mineral transport",
      "Port-to-port transfers",
    ],
    benefits: [
      "Reduced cargo handling time",
      "Improved load stability",
      "Cost-effective logistics",
      "Professional documentation",
      "Safety compliance",
    ],
    equipment: [
      "Hydraulic loaders",
      "Conveyor systems",
      "Weighing scales",
      "Load monitoring equipment",
    ],
    availability: "24/7 Operations",
  },

  "barge-unloading": {
    title: "Barge Unloading",
    shortDesc: "Fast and safe vessel unloading",
    image: "/images/Unloading-Coal.jpg",
    icon: Gauge,
    fullDescription:
      "We specialize in efficient and safe unloading of various commodities from vessels. Our experienced crew uses advanced equipment to ensure rapid discharge while maintaining the highest safety and quality standards.",
    capabilities: [
      "High-capacity bulk material unloading",
      "Controlled discharge operations",
      "Environmental protection measures",
      "Quick vessel turnaround",
      "Multiple commodity expertise",
    ],
    specifications: [
      { label: "Max Discharge Rate", value: "300-400 tons/hour" },
      { label: "Vessel Capacity Handled", value: "Up to 10,000 tons" },
      { label: "Operation Duration", value: "Continuous 24/7" },
      { label: "Environmental Control", value: "Dust suppression included" },
    ],
    useCases: [
      "Coal vessel unloading",
      "Sand and gravel discharge",
      "Mineral ore handling",
      "Fertilizer operations",
      "General cargo handling",
    ],
    benefits: [
      "Minimal vessel idle time",
      "Environmental compliance",
      "Safe material handling",
      "Professional operations",
      "Quality assurance",
    ],
    equipment: [
      "Bucket chain excavators",
      "Grab cranes",
      "Conveyor belts",
      "Dust suppression systems",
    ],
    availability: "24/7 Operations",
  },

  "crane-rental-operation": {
    title: "Crane Rental & Operation",
    shortDesc: "Up to 500-ton capacity cranes",
    image: "/images/Unloading-Fertiliser.jpg",
    icon: Wrench,
    fullDescription:
      "Our comprehensive crane rental and operation services provide flexible solutions for heavy lifting requirements. We maintain a modern fleet of cranes operated by certified professionals to handle complex loading, unloading, and placement tasks.",
    capabilities: [
      "Heavy lifting up to 500 tons",
      "Precision placement",
      "Various attachment options",
      "Expert operator service",
      "Safety compliance",
    ],
    specifications: [
      { label: "Maximum Capacity", value: "500 tons" },
      { label: "Reach", value: "Up to 60 meters" },
      { label: "Operation Hours", value: "Flexible scheduling" },
      { label: "Setup Time", value: "1-2 hours" },
    ],
    useCases: [
      "Industrial machinery installation",
      "Generator placement",
      "Heavy equipment handling",
      "Bridge and structure construction",
      "Mine equipment operations",
    ],
    benefits: [
      "Flexible rental terms",
      "Certified operators",
      "Insurance included",
      "Minimal project delays",
      "Cost-effective solutions",
    ],
    equipment: [
      "500-ton mobile crane",
      "250-ton mobile crane",
      "Lifting spreader bars",
      "Slings and rigging",
    ],
    pricing: "Available upon request",
    availability: "24/7 with advance booking",
  },

  "sand-soil-handling": {
    title: "Sand & Soil Handling",
    shortDesc: "Bulk material unloading solutions",
    image: "/images/operations/3.jpg",
    icon: Zap,
    fullDescription:
      "We provide comprehensive sand, soil, and aggregate unloading services with specialized equipment designed for bulk material handling. Our systems ensure fast throughput while minimizing environmental impact.",
    capabilities: [
      "Bulk sand and soil unloading",
      "Multiple loading configurations",
      "Quick turnaround times",
      "Weather protection",
      "Stackable discharge",
    ],
    specifications: [
      { label: "Daily Capacity", value: "2000-3000 tons" },
      { label: "Material Types", value: "Sand, soil, aggregates, minerals" },
      { label: "Discharge Height", value: "Up to 15 meters" },
      { label: "Operating Season", value: "Year-round" },
    ],
    useCases: [
      "River dredging operations",
      "Construction material supply",
      "Sand mining extraction",
      "Soil remediation projects",
      "Aggregate production",
    ],
    benefits: [
      "Fast material movement",
      "Cost-effective operations",
      "Environmental protection",
      "Reduced project timeline",
      "Consistent quality",
    ],
    equipment: [
      "Wheel loaders",
      "Conveyor systems",
      "Screening equipment",
      "Dust control systems",
    ],
    availability: "Daily operations, flexible scheduling",
  },

  "heavy-equipment-handling": {
    title: "Heavy Equipment Handling",
    shortDesc: "Industrial machinery handling",
    image: "/images/port-operations.jpg",
    icon: Truck,
    fullDescription:
      "Specialized services for handling, loading, and unloading industrial machinery and heavy equipment. Our trained team ensures safe, damage-free operations with proper rigging and documentation.",
    capabilities: [
      "Complex machinery rigging",
      "Custom lifting solutions",
      "Damage prevention",
      "Full documentation",
      "Expert consultation",
    ],
    specifications: [
      { label: "Equipment Weight Range", value: "100 tons to 500+ tons" },
      {
        label: "Types Handled",
        value: "Turbines, generators, pumps, compressors",
      },
      { label: "Rigging Options", value: "Multiple configurations" },
      { label: "Insurance", value: "Full coverage available" },
    ],
    useCases: [
      "Power plant equipment installation",
      "Industrial turbine placement",
      "Generator commissioning",
      "Pump and compressor handling",
      "Mining equipment operations",
    ],
    benefits: [
      "Zero damage record",
      "Expert team",
      "Insurance protection",
      "Professional documentation",
      "Guaranteed safety",
    ],
    equipment: [
      "500-ton crane",
      "Specialized rigging",
      "Air cushion systems",
      "Monitoring equipment",
    ],
    availability: "24/7 with scheduling",
  },

  "night-operation-services": {
    title: "Night Operation Services",
    shortDesc: "24/7 operations with LED lighting",
    image: "/images/operations/1.jpg",
    icon: Moon,
    fullDescription:
      "We provide round-the-clock operations with specialized night crews and industrial LED lighting systems. Our night operation teams are highly trained and equipped to handle any cargo handling requirement after sunset.",
    capabilities: [
      "Industrial LED lighting systems",
      "Specialized night crew",
      "Full visibility operations",
      "Safety protocols maintained",
      "Uninterrupted service",
    ],
    specifications: [
      { label: "Operating Hours", value: "24/7/365" },
      { label: "Lighting System", value: "Industrial LED (1000+ lux)" },
      { label: "Night Crew", value: "Highly trained specialists" },
      { label: "Safety Standards", value: "Exceeds industry standards" },
    ],
    useCases: [
      "Port terminal operations",
      "Urgent cargo handling",
      "Continuous production support",
      "Emergency logistics",
      "Time-sensitive deliveries",
    ],
    benefits: [
      "Always available",
      "No project delays",
      "Premium night rates",
      "Full safety compliance",
      "Reduced turnaround time",
    ],
    equipment: [
      "Industrial LED lighting",
      "Night-vision equipment",
      "Generator sets",
      "Backup power systems",
    ],
    availability: "24/7/365",
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-96 md:h-[500px] bg-black overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <Icon className="w-8 h-8 text-blue-300" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {service.title}
              </h1>
              <p className="text-lg text-blue-100 mt-2">{service.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Left: Description & Benefits */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Service Overview
              </h2>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Key Capabilities */}
              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">
                Key Capabilities
              </h3>
              <div className="grid gap-3 mb-8">
                {service.capabilities.map((capability, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>

              {/* Use Cases */}
              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">
                Common Use Cases
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.useCases.map((useCase, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all"
                  >
                    <p className="text-foreground font-medium">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Info */}
            <div>
              {/* Availability Box */}
              <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-xl p-6 mb-6">
                <h4 className="font-bold mb-2">Availability</h4>
                <p className="text-sm mb-4">{service.availability}</p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full text-center justify-center"
                >
                  Book Now
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Specifications */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-primary mb-4">Specifications</h4>
                <div className="space-y-3">
                  {service.specifications.map((spec, idx) => (
                    <div key={idx}>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {spec.label}
                      </p>
                      <p className="text-foreground font-medium mt-1">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <section className="mb-12 py-8 border-t border-border">
            <h2 className="text-3xl font-bold text-primary mb-8">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent text-white flex items-center justify-center mb-4">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-foreground font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Equipment Section */}
          <section className="py-8 border-t border-border">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Equipment Used
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.equipment.map((equipment, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 transition-all"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">
                    {equipment}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Other Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/services"
              className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Ship size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground group-hover:text-primary">
                  View All Services
                </h3>
                <p className="text-sm text-muted-foreground">
                  Explore our complete service lineup
                </p>
              </div>
              <ArrowRight className="text-slate-400 group-hover:text-primary" />
            </Link>

            <a
              href="/#contact"
              className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                <Anchor size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground group-hover:text-primary">
                  Request Custom Quote
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get a personalized solution
                </p>
              </div>
              <ArrowRight className="text-slate-400 group-hover:text-primary" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
