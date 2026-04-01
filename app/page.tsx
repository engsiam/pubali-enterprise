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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "",
          location: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Barge Loading",
    "Barge Unloading",
    "Crane Rental/Operation",
    "Sand/Soil Handling",
    "Heavy Equipment Handling",
    "Night Operation Services",
  ];

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

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/port-operations.jpg"
                alt="Port operations"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                About Pubali Enterprise
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-foreground">
                  Pubali Enterprise is specialized in vessel unloading and
                  handling dry bulk materials.
                </span>{" "}
                Founded in 2022, we have quickly established a strong reputation
                for our commitment to excellence, efficiency, and safety in port
                logistics and industrial operations.
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Our Specializations:
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-sm mb-6">
                  {[
                    "Coal unloading",
                    "Stone chips handling",
                    "Sand & soil operations",
                    "Fertilizer logistics",
                    "Salt cargo handling",
                    "Heavy equipment handling",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent font-bold">→</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Why We Stand Out:
                </h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Experienced crew trained in safety protocols & modern best practices",
                  "State-of-the-art equipment and technology for maximum efficiency",
                  "24/7 operational support with round-the-clock availability",
                  "Competitive pricing & cost-effective logistics solutions",
                  "100% safety compliance with zero-incident record",
                  "Proven track record across Bangladesh's major ports",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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
      <section id="contact" className="relative py-12 md:py-16 overflow-hidden">
        {/* Full-width Map Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58480.60147242732!2d90.4514544017446!3d23.638824738932026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10812a520a3%3A0x6d3af4457bec4c90!2sNarayanganj!5e0!3m2!1sen!2sbd!4v1774958816543!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-5"></div>

        {/* Floating Card Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="w-full max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-6 md:p-8 flex flex-col justify-center min-h-max md:min-h-full">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">
                  Request a Free Quote
                </h3>
                <p className="text-lg text-white mb-8">
                  Tell us about your project requirements and we'll provide a
                  detailed quote within 24 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <Phone className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 font-medium mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="font-semibold hover:text-blue-300 transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <MessageCircle className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 font-medium mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/1234567890"
                        className="font-semibold hover:text-blue-300 transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <MapPin className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 font-medium mb-1">
                        Location
                      </p>
                      <p className="font-semibold">
                        Narayanganj, Bangladesh
                        <br />
                        <span className="text-blue-200 text-sm">
                          Shipping City, ST 12345
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                      <Mail className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 font-medium mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@pubalienterprises.com"
                        className="font-semibold hover:text-blue-300 transition-colors break-all"
                      >
                        info@pubalienterprises.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Right Side */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXX XXX XXX"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Dhaka River Port, Narayanganj"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project... (tonnage, timeline, equipment needed, etc.)"
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-accent to-blue-700 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-70 disabled:cursor-not-allowed hover:translate-y-[-2px] text-sm"
                  >
                    {isSubmitting ? "Sending..." : "Get Free Quote"}
                  </button>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                      ✓ Quote request sent! We'll contact you shortly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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
