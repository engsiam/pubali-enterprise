"use client";
import About from "@/components/About";
import { BrandLogo } from "@/components/brand-logo";
import { Contact } from "@/components/Contact";
import { CounterItem } from "@/components/counter-item";
import { EquipmentFleet } from "@/components/EquipmentFleet";
import { GalleryPage } from "@/components/gallery-page";
import Hero from "@/components/Hero";
import { InfiniteCarousel } from "@/components/infinite-carousel";
import { NightOperationsSection } from "@/components/night-operations";
import { PremiumFooter } from "@/components/premium-footer";
import { ProjectShowcase } from "@/components/project-showcase";
import { Testimonials } from "@/components/testimonials";
import { motion } from "framer-motion";
import {
  Anchor,
  Gauge,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Shield,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white shadow-lg border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Professional Logo */}
            <a
              href="#"
              className="flex items-center gap-1 sm:gap-2 flex-shrink-0"
            >
              <BrandLogo />
            </a>

            {/* Desktop Links - Anchor Menus (hidden on tablet and below) */}
            <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
              {["About", "Services", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground text-sm lg:text-base font-medium cursor-pointer hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA Buttons - Only Call Now visible on tablet, both on desktop */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer hidden lg:inline-flex h-11 min-w-[170px] items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md"
              >
                Free Consultation
              </button>

              <a
                href="tel:+1234567890"
                className="hidden lg:inline-flex h-11 min-w-[170px] items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md hover:bg-blue-700 bg-blue-700"
              >
                <Phone size={16} strokeWidth={2.2} />
                Call Now
              </a>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} className="sm:size-5" />
              ) : (
                <Menu size={20} className="sm:size-5" />
              )}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-3 sm:pb-4 border-t border-border">
              {["About", "Services", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-2 sm:px-3 py-2.5 sm:py-3 text-foreground text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full mt-2 sm:mt-3 border-2 border-primary text-primary px-3 sm:px-4 py-2 rounded-lg text-center font-medium text-xs sm:text-sm hover:bg-primary hover:text-white transition-all"
              >
                Free Consultation
              </button>
              <a
                href="tel:+1234567890"
                className="block mt-2 bg-accent text-white px-3 sm:px-4 py-2 rounded-lg text-center font-medium text-xs sm:text-sm hover:bg-blue-700 transition-all"
              >
                Call Now
              </a>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section - Full Screen with Video Background */}
      <Hero />

      {/* Stats Counter Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-8 sm:py-10 md:py-16 bg-primary text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {[
              {
                icon: Truck,
                value: 500,
                label: "Projects Completed",
                suffix: "+",
              },
              {
                icon: Shield,
                value: 12,
                label: "Years Experience",
                suffix: "+",
              },
              { icon: Zap, value: 50, label: "Heavy Equipment", suffix: "+" },
              { icon: Anchor, value: 100, label: "Tons Handled", suffix: "k+" },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center animate-count-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-10 h-10 mx-auto mb-3 text-blue-300" />
                  <CounterItem
                    endValue={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section - Final Premium Balanced Redesign */}
      <About />

      {/* Trusted Partners Marquee */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-10 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-border/50 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
        >
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
            Trusted by Industry Leaders
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfiniteCarousel />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="services"
        className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Specialized logistics and cargo handling solutions designed for
              efficiency, safety, and operational excellence.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                slug: "barge-loading",
                image: "/images/can-holding.jpg",
                title: "Barge Loading",
                icon: Truck,
                description:
                  "Efficient barge loading operations with precision handling and optimized cargo placement.",
              },
              {
                slug: "barge-unloading",
                image: "/images/Unloading-Coal.jpg",
                title: "Barge Unloading",
                icon: Gauge,
                description:
                  "Reliable vessel unloading using modern equipment with strict safety control.",
              },
              {
                slug: "crane-rental-operation",
                image: "/images/Unloading-Fertiliser.jpg",
                title: "Crane Rental & Operation",
                icon: Wrench,
                description:
                  "Heavy-duty crane solutions for complex lifting and industrial logistics operations.",
              },
              {
                slug: "sand-soil-handling",
                image: "/images/operations/3.jpg",
                title: "Sand & Soil Handling",
                icon: Zap,
                description:
                  "Fast and efficient bulk material handling using loaders and conveyor systems.",
              },
              {
                slug: "heavy-equipment-handling",
                image: "/images/port-operations.jpg",
                title: "Heavy Equipment Handling",
                icon: Truck,
                description:
                  "Safe handling of industrial machinery and heavy cargo using specialized cranes.",
              },
              {
                slug: "night-operation-services",
                image: "/images/operations/1.jpg",
                title: "Night Operation Services",
                icon: Moon,
                description:
                  "24/7 operational support with lighting systems and trained night crews.",
              },
            ].map((service, idx) => {
              const Icon = service.icon;

              return (
                <a
                  key={idx}
                  href={`/services/${service.slug}`}
                  className="group relative h-[340px] rounded-3xl overflow-hidden 
            shadow-[0_20px_45px_-15px_rgba(0,0,0,0.25)] 
            hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]
            transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* IMAGE */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center 
              transition-transform duration-700 group-hover:scale-110
              brightness-[0.92] contrast-[1.08] saturate-[1.05]"
                  />

                  {/* CLEAN OVERLAY (FIXED) */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
              from-black/75 via-black/30 to-transparent"
                  ></div>

                  {/* CONTENT */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-white/90 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-4 inline-flex items-center text-white font-semibold tracking-wide group-hover:gap-2 gap-1 transition-all duration-300">
                      Explore Service
                      <span>→</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Need a custom logistics solution? Let's discuss your requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 
          bg-primary text-white px-8 py-3 rounded-xl font-semibold 
          hover:bg-blue-900 transition-all hover:shadow-xl"
              >
                View All Services
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 
          bg-accent text-white px-8 py-3 rounded-xl font-semibold 
          hover:bg-blue-700 transition-all hover:shadow-xl"
              >
                <Mail size={18} />
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Why Choose Pubali Enterprise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading expertise and commitment to excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {[
              {
                icon: Shield,
                title: "Safe Handling",
                desc: "Zero-incident safety protocols",
              },
              {
                icon: Zap,
                title: "Timely Execution",
                desc: "On-schedule operations always",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Certified professionals",
              },
              {
                icon: Truck,
                title: "Heavy Machinery",
                desc: "All equipment types",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="text-base font-bold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground text-xs">{item.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* Equipment Section */}
      <EquipmentFleet />

      {/* Night Operations Section */}
      <NightOperationsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Portfolio Gallery Section */}
      <GalleryPage />

      {/* Contact Section */}
      <Contact />

      {/* Premium Footer */}
      <PremiumFooter />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-40 animate-bounce"
        aria-label="WhatsApp us"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
