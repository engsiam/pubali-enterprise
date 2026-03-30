"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export function PremiumFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Consulting", href: "#" },
        { name: "Design", href: "#" },
        { name: "Development", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Sitemap", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Disclaimer", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, link: "#", label: "Facebook" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
    { icon: Twitter, link: "#", label: "Twitter" },
    { icon: Instagram, link: "#", label: "Instagram" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Dhaka, Bangladesh",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1234-567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@pubali.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-slate-100 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5 pointer-events-none" />

      <div className="relative z-10">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Newsletter Section */}
          <div className="mb-16 bg-gradient-to-r from-blue-600/10 to-blue-400/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  Stay Updated
                </h3>
                <p className="text-slate-400">
                  Subscribe to receive the latest news, updates, and exclusive
                  offers.
                </p>
              </div>
              <form
                onSubmit={handleSubscribe}
                className="w-full md:w-auto flex-1 md:flex-initial"
              >
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap group"
                  >
                    {isSubscribed ? "Subscribed!" : "Subscribe"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">
                  PUBALI <span className="text-blue-500">ENTERPRISE</span>
                </h2>
                <p className="text-slate-400 text-sm mt-2">
                  Delivering excellence through innovation and commitment.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-t border-b border-slate-800">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">{label}</p>
                  <p className="text-white font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm text-center md:text-left">
                © 2024 Pubali Enterprise. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-slate-500">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy
                </a>
                <span className="text-slate-700">•</span>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms
                </a>
                <span className="text-slate-700">•</span>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
