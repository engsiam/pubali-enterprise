"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
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

  const services = [
    "Barge Loading",
    "Barge Unloading",
    "Crane Rental/Operation",
    "Sand/Soil Handling",
    "Heavy Equipment Handling",
    "Night Operation Services",
  ];

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
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1234-567890",
      href: "tel:+8801234567890",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+880 1234-567890",
      href: "https://wa.me/8801234567890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Narayanganj, Bangladesh",
      sub: "Port & river logistics zone",
      href: "https://maps.google.com/?q=Narayanganj,Bangladesh",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@pubalienterprises.com",
      href: "mailto:info@pubalienterprises.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
    >
      {/* Map Background */}
      <div className="absolute inset-0">
        <iframe
          title="Pubali Enterprise Location"
          src="https://www.google.com/maps?q=Narayanganj,Bangladesh&z=11&output=embed"
          className="h-full w-full scale-[1.03]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_40%)]" />
      </div>

      {/* Floating glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[12%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
            <Clock3 size={15} className="text-blue-300" />
            Fast Response Within 24 Hours
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl [text-shadow:0_8px_30px_rgba(0,0,0,0.35)]">
            Request a Project Quote
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
            Share your cargo handling, vessel unloading, crane support, or night
            operation requirements and our team will prepare a practical quote
            for your project.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[30px] border border-white/10 bg-white/70 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_35px_100px_rgba(0,0,0,0.34)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
            {/* Left Panel */}
            <div className="relative bg-gradient-to-br from-[#07142f] via-[#0f2c72] to-[#1b4fb5] p-6 text-white md:p-8 lg:p-10 xl:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                  <ShieldCheck size={15} className="text-emerald-300" />
                  Trusted Industrial Support
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl">
                  Request a Free Quote
                </h3>

                <p className="mt-5 max-w-md text-[15px] leading-8 text-blue-100/90">
                  Tell us about your project scope, equipment needs, site
                  location, and timeline. We&apos;ll get back with a tailored
                  plan and quotation.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Port Operations", "Heavy Equipment", "Night Handling"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100 shadow-sm"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-10 space-y-4">
                  {contactItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{ duration: 0.25 }}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/12 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                          <Icon className="h-5 w-5 text-blue-200 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm text-blue-100/70">
                            {item.label}
                          </p>
                          <p className="font-semibold text-white break-words">
                            {item.value}
                          </p>
                          {item.sub && (
                            <p className="mt-0.5 text-xs text-blue-200/70">
                              {item.sub}
                            </p>
                          )}
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <a
                    href="https://maps.google.com/?q=Narayanganj,Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:shadow-lg"
                  >
                    View on Google Maps
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white/92 p-6 md:p-8 lg:p-10 xl:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX XXX XXX"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-800">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
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

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Dhaka River Port, Narayanganj"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project... (tonnage, timeline, equipment needed, etc.)"
                    rows={5}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_14px_30px_rgba(37,99,235,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending Request..." : "Get Free Quote"}
                    {!isSubmitting && (
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-slate-500">
                    We usually respond within 24 hours for project inquiries.
                  </p>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                  >
                    ✓ Quote request sent successfully. Our team will contact you
                    shortly.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
