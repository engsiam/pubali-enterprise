import { Calendar, MapPin, TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-12 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
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
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/5 to-transparent opacity-90" />

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-white/85 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-slate-800 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-[1.05rem] font-semibold tracking-tight text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-slate-400" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-slate-400" />
                    {project.date}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-slate-800">
                    <TrendingUp size={13} className="text-blue-600" />
                    {project.tonnage}
                  </span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

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
    </motion.section>
  );
}
