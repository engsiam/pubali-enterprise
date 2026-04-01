"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  DollarSign,
  Mail,
  MapPin,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/60"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center md:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
            <span className="text-sm font-semibold text-primary">About Us</span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-primary md:text-4xl">
            Pubali Enterprise
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Your trusted partner in vessel unloading and dry bulk material
            handling
          </p>
        </div>

        {/* TOP ROW */}
        <div className="grid items-center gap-10 overflow-hidden lg:grid-cols-2 lg:gap-16">
          {/* LEFT - Large Image (Slides in from Left) */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
              <img
                src="/images/port-operations.jpg"
                alt="Port operations - Heavy cargo handling"
                className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[440px] lg:h-[520px]"
              />

              {/* Dark gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>

              {/* Bottom-left info badge */}
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-xl ring-1 ring-black/5 backdrop-blur-md md:bottom-7 md:left-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold leading-none text-primary">
                      12+
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Years of Operational Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Intro + Specializations (Slides in from Right) */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {/* Intro */}
            <div className="space-y-5">
              <h3 className="text-2xl font-bold leading-tight text-primary md:text-3xl">
                Trusted Expertise in Vessel Unloading & Bulk Cargo Operations
              </h3>

              <p className="text-base leading-8 text-foreground md:text-lg">
                <span className="font-semibold text-primary">
                  Pubali Enterprise
                </span>{" "}
                specializes in vessel unloading and dry bulk material handling
                with{" "}
                <span className="font-semibold text-accent">precision</span>,{" "}
                <span className="font-semibold text-accent">safety</span>, and{" "}
                <span className="font-semibold text-accent">efficiency</span>.
              </p>

              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                Founded in 2022, we have rapidly built a strong reputation for
                dependable port logistics, industrial support, and operational
                excellence across Bangladesh’s major waterways.
              </p>
            </div>

            {/* Specializations Card */}
            <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 md:p-8">
              <h4 className="mb-6 flex items-center gap-3 text-xl font-bold text-primary md:text-2xl">
                <span className="h-6 w-1.5 rounded-full bg-accent"></span>
                Our Specializations
              </h4>

              <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
                {[
                  "Coal unloading",
                  "Stone chips handling",
                  "Sand & soil operations",
                  "Fertilizer logistics",
                  "Salt cargo handling",
                  "Heavy equipment handling",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-4 w-4 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium leading-relaxed text-foreground md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ROW - Why Stand Out */}
        <div className="mt-16 md:mt-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h3 className="mb-3 text-2xl font-bold text-primary md:text-4xl">
              Why We Stand Out
            </h3>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              We combine skilled manpower, operational discipline, and modern
              logistics support to deliver reliable service every time.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {[
              {
                title: "Experienced Crew",
                text: "Experienced crew trained in safety protocols and modern operational best practices.",
                icon: Shield,
              },
              {
                title: "Modern Equipment",
                text: "State-of-the-art equipment and technology for maximum efficiency and smooth execution.",
                icon: Zap,
              },
              {
                title: "24/7 Support",
                text: "Round-the-clock operational support to ensure continuity and timely service delivery.",
                icon: Clock3,
              },
              {
                title: "Cost-Effective Solutions",
                text: "Competitive pricing with practical logistics planning for better value and efficiency.",
                icon: DollarSign,
              },
              {
                title: "Safety Compliance",
                text: "Strict safety compliance with a zero-incident operational commitment.",
                icon: CheckCircle2,
              },
              {
                title: "Proven Port Track Record",
                text: "Strong execution experience across Bangladesh’s major ports and waterways.",
                icon: MapPin,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-blue-600 shadow-md">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h4 className="mb-3 text-lg font-bold text-primary md:text-xl">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-muted-foreground md:text-base">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center md:mt-14"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-2xl md:px-10 md:text-lg"
            >
              <Mail size={20} />
              Get Free Consultation
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
