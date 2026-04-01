"use client";
import { BrandLogo } from "@/components/brand-logo";
import { CounterItem } from "@/components/counter-item";
import { EquipmentSection } from "@/components/equipment-section";
import { GalleryPage } from "@/components/gallery-page";
import { InfiniteCarousel } from "@/components/infinite-carousel";
import { NightOperationsSection } from "@/components/night-operations";
import { PremiumFooter } from "@/components/premium-footer";
import { ProjectShowcase } from "@/components/project-showcase";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/Contact";
import {
  Anchor,
  Gauge,
  Mail,
  MailIcon,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Shield,
  CheckCircle2,
  Clock3,
  DollarSign,

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
      <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-border">
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
      </nav>

      {/* Hero Section - Full Screen with Video Background */}
      <section className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-cargo.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          <img
            src="/images/hero-cargo-ship.jpg"
            alt="Heavy cargo loading"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {/* Dark Overlay with Smooth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Live Operations Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-6 w-fit animate-float-up">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-badge"></div>
              <span className="text-sm font-medium text-white">
                Live: 24/7 Port Operations Active
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-4 leading-tight animate-float-up">
              Reliable Barge Loading & Unloading Services in Bangladesh
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-gray-100 mb-6 leading-relaxed animate-float-up">
              👉 Heavy cargo handling, crane operations, and river logistics
              solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-float-up">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg text-sm sm:text-base"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold text-sm sm:text-base"
              >
                <MailIcon size={18} />
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-8 sm:py-10 md:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
          </div>
        </div>
      </section>

      {/* About Section - Final Premium Balanced Redesign */}
      <section
        id="about"
        className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/60"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5">
              <span className="text-sm font-semibold text-primary">
                About Us
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
              Pubali Enterprise
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in vessel unloading and dry bulk material
              handling
            </p>
          </div>

          {/* TOP ROW */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT - Large Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                <img
                  src="/images/port-operations.jpg"
                  alt="Port operations - Heavy cargo handling"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none"></div>

                {/* Bottom-left info badge */}
                <div className="absolute left-5 bottom-5 md:left-7 md:bottom-7 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl ring-1 ring-black/5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
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
                      <p className="text-2xl font-bold text-primary leading-none">
                        12+
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Years of Operational Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Intro + Specializations only */}
            <div className="space-y-8">
              {/* Intro */}
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                  Trusted Expertise in Vessel Unloading & Bulk Cargo Operations
                </h3>

                <p className="text-base md:text-lg text-foreground leading-8">
                  <span className="font-semibold text-primary">
                    Pubali Enterprise
                  </span>{" "}
                  specializes in vessel unloading and dry bulk material handling
                  with{" "}
                  <span className="text-accent font-semibold">precision</span>,{" "}
                  <span className="text-accent font-semibold">safety</span>, and{" "}
                  <span className="text-accent font-semibold">efficiency</span>.
                </p>

                <p className="text-base md:text-lg text-muted-foreground leading-8">
                  Founded in 2022, we have rapidly built a strong reputation for
                  dependable port logistics, industrial support, and operational
                  excellence across Bangladesh’s major waterways.
                </p>
              </div>

              {/* Specializations Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg ring-1 ring-gray-100">
                <h4 className="text-xl md:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-accent rounded-full"></span>
                  Our Specializations
                </h4>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  {[
                    "Coal unloading",
                    "Stone chips handling",
                    "Sand & soil operations",
                    "Fertilizer logistics",
                    "Salt cargo handling",
                    "Heavy equipment handling",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <svg
                          className="w-4 h-4 text-accent"
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
                      <span className="text-sm md:text-base text-foreground font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW - Why Stand Out */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Why We Stand Out
              </h3>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                We combine skilled manpower, operational discipline, and modern
                logistics support to deliver reliable service every time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
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
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-gray-100 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center shadow-md mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h4>

                    <p className="text-muted-foreground leading-7 text-sm md:text-base">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 md:mt-14 text-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center gap-3 bg-primary text-white px-8 md:px-10 py-4 rounded-2xl font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl hover:bg-blue-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={20} />
                Get Free Consultation
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Marquee */}
      <section className="py-10 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-border/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfiniteCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cargo handling solutions tailored to your logistics
              needs. Click on any service to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                slug: "barge-loading",
                image: "/images/can-holding.jpg",
                title: "Barge Loading",
                icon: Truck,
                description:
                  "Professional barge loading operations with precision handling and modern equipment for optimal cargo placement.",
              },
              {
                slug: "barge-unloading",
                image: "/images/Unloading-Coal.jpg",
                title: "Barge Unloading",
                icon: Gauge,
                description:
                  "Efficient vessel unloading operations using state-of-the-art equipment with safety as our top priority.",
              },
              {
                slug: "crane-rental-operation",
                image: "/images/Unloading-Fertiliser.jpg",
                title: "Crane Rental & Operation",
                icon: Wrench,
                description:
                  "Heavy-duty crane services up to 500 tons capacity for complex loading/unloading and equipment placement.",
              },
              {
                slug: "sand-soil-handling",
                image: "/images/operations/3.jpg",
                title: "Sand & Soil Handling",
                icon: Zap,
                description:
                  "Bulk sand, soil, and aggregate unloading with dedicated loaders and conveyor systems for fast throughput.",
              },
              {
                slug: "heavy-equipment-handling",
                image: "/images/port-operations.jpg",
                title: "Heavy Equipment Handling",
                icon: Truck,
                description:
                  "Specialized crane operations for loading/unloading industrial machinery, generators, and equipment.",
              },
              {
                slug: "night-operation-services",
                image: "/images/operations/1.jpg",
                title: "Night Operation Services",
                icon: Moon,
                description:
                  "Round-the-clock operations with industrial LED lighting and specialized night crews for 24/7 availability.",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <a
                  key={idx}
                  href={`/services/${service.slug}`}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                >
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

                    {/* View Details Arrow */}
                    <div className="mt-4 inline-flex items-center text-white font-semibold group-hover:gap-2 gap-1 transition-all duration-300">
                      View Details
                      <span>→</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Need a custom service package? Let's discuss your specific
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all hover:shadow-lg"
              >
                View All Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                <Mail size={18} />
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Why Choose Pubali Enterprise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading expertise and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-4">
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
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* Equipment Section */}
      <EquipmentSection />

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
