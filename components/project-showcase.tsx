import { Calendar, MapPin, TrendingUp } from "lucide-react";
import Image from "next/image";

export function ProjectShowcase() {
  const projects = [
    {
      title: "Coal Unloading - Dhaka River Port",
      category: "Heavy Materials",
      location: "Dhaka, Bangladesh",
      tonnage: "2,500 tons",
      date: "March 2024",
      description:
        "Successfully unloaded 2,500 tons of coal using modern handling equipment with minimal handling time.",
      image: "/images/operations/1.jpg",
      highlights: [
        "Efficient execution",
        "Safety compliant",
        "On-time delivery",
      ],
    },
    {
      title: "Fertilizer Handling - Night Operations",
      category: "Night Operations",
      location: "Narayanganj Port",
      tonnage: "1,800 tons",
      date: "February 2024",
      description:
        "Completed fertilizer unloading during night hours with advanced LED lighting and trained crew.",
      image: "/images/operations/2.jpg",
      highlights: [
        "24/7 operations",
        "Advanced lighting",
        "Precision handling",
      ],
    },
    {
      title: "Sand Aggregates Project",
      category: "Materials",
      location: "Khulna Port",
      tonnage: "3,200 tons",
      date: "January 2024",
      description:
        "Bulk sand and aggregate unloading with dedicated loader fleet and conveyor systems.",
      image: "/images/operations/3.jpg",
      highlights: ["High throughput", "Dust control", "Fleet coordination"],
    },
    {
      title: "Heavy Equipment Loading",
      category: "Equipment",
      location: "Chittagong Port",
      tonnage: "450 tons",
      date: "December 2023",
      description:
        "Specialized crane operations for loading heavy industrial machinery onto barges.",
      image: "/images/port-operations.jpg",
      highlights: ["Precision loading", "Safety protocols", "Expert crew"],
    },
    {
      title: "Salt Import Operations",
      category: "Materials",
      location: "Narayanganj",
      tonnage: "2,100 tons",
      date: "November 2023",
      description:
        "Efficient salt cargo unloading and material handling with specialized equipment.",
      image: "/images/operations/3.jpg",
      highlights: ["Quick turnaround", "Quality handling", "Logistics"],
    },
    {
      title: "Stone Chips Unloading",
      category: "Materials",
      location: "Dhaka Port",
      tonnage: "1,950 tons",
      date: "October 2023",
      description:
        "Large-scale stone chips unloading with modern material handling systems.",
      image: "/images/operations/1.jpg",
      highlights: ["Bulk handling", "Equipment fleet", "Experienced crew"],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <TrendingUp size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Recent Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Recent Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real project examples showcasing our expertise, equipment, and
            professionalism
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-accent/50 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category Badge */}
                <span className="inline-block w-fit text-xs font-semibold bg-blue-50 text-accent px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} className="text-accent" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} className="text-accent" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp size={14} className="text-accent" />
                    <span className="font-semibold text-primary">
                      {project.tonnage}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-200"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-3">
            See More of Our Work
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Visit our gallery page to explore extensive photo documentation of
            our port operations, equipment in action, and past projects.
          </p>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
