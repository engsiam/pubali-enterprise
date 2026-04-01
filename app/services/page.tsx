"use client";

import { Gauge, Moon, Truck, Wrench, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    slug: "barge-loading",
    title: "Barge Loading",
    icon: Truck,
    description:
      "Professional barge loading operations with precision handling and modern equipment for optimal cargo placement.",
    image: "/images/can-holding.jpg",
    shortDesc: "Precision cargo loading on barges",
  },
  {
    slug: "barge-unloading",
    title: "Barge Unloading",
    icon: Gauge,
    description:
      "Efficient vessel unloading operations using state-of-the-art equipment with safety as our top priority.",
    image: "/images/Unloading-Coal.jpg",
    shortDesc: "Fast and safe vessel unloading",
  },
  {
    slug: "crane-rental-operation",
    title: "Crane Rental & Operation",
    icon: Wrench,
    description:
      "Heavy-duty crane services up to 500 tons capacity for complex loading/unloading and equipment placement.",
    image: "/images/Unloading-Fertiliser.jpg",
    shortDesc: "Up to 500-ton capacity cranes",
  },
  {
    slug: "sand-soil-handling",
    title: "Sand & Soil Handling",
    icon: Zap,
    description:
      "Bulk sand, soil, and aggregate unloading with dedicated loaders and conveyor systems for fast throughput.",
    image: "/images/operations/3.jpg",
    shortDesc: "Bulk material unloading solutions",
  },
  {
    slug: "heavy-equipment-handling",
    title: "Heavy Equipment Handling",
    icon: Truck,
    description:
      "Specialized crane operations for loading/unloading industrial machinery, generators, and equipment.",
    image: "/images/port-operations.jpg",
    shortDesc: "Industrial machinery handling",
  },
  {
    slug: "night-operation-services",
    title: "Night Operation Services",
    icon: Moon,
    description:
      "Round-the-clock operations with industrial LED lighting and specialized night crews for 24/7 availability.",
    image: "/images/operations/1.jpg",
    shortDesc: "24/7 operations with LED lighting",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-primary to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive cargo handling solutions tailored to your logistics
              needs. Click on any service to learn more details.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group"
                >
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10 group-hover:from-primary/95 group-hover:via-primary/75 transition-all duration-500"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-300" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-blue-100 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Read More Button */}
                      <div className="mt-4 inline-flex items-center text-white font-semibold group-hover:gap-2 gap-1 transition-all duration-300">
                        View Details
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We can combine multiple services or create a custom package tailored
            to your specific requirements.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
          >
            Request Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
}
