"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function PremiumFooter() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/people/Pubali-Enterprise-Barge-loading-unloading-company/61570405942942/",
      label: "Facebook",
    },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
    { icon: Instagram, link: "#", label: "Instagram" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      value: "Narayanganj, Bangladesh",
    },
    {
      icon: Phone,
      value: "+880 1234-567890",
    },
    {
      icon: Mail,
      value: "info@pubali.com",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-[#020817] text-slate-100"
    >
      {/* Premium background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.05),transparent_26%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Main Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/5 py-14 md:py-16"
        >
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.95fr] lg:gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400/80">
                Trusted Port Operations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-[2rem]">
                PUBALI <span className="text-blue-500">ENTERPRISE</span>
              </h2>

              <p className="mt-5 max-w-[580px] text-[15px] leading-8 text-slate-300/90">
                Pubali Enterprise specializes in vessel unloading, cargo
                handling, and dry bulk material operations across
                Bangladesh&apos;s ports with a strong focus on safety, speed,
                and reliability.
              </p>

              {/* Social */}
              <div className="mt-8 flex gap-3">
                {socialLinks.map(({ icon: Icon, link, label }) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ duration: 0.25 }}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-between gap-10 lg:items-end"
            >
              {/* Quick Links */}
              <div className="w-full lg:max-w-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Quick Access
                </p>

                <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="relative text-[15px] font-medium text-slate-300 transition-all duration-300 hover:text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="w-full lg:max-w-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Contact
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {contactInfo.map(({ icon: Icon, value }) => (
                    <motion.div
                      key={value}
                      whileHover={{ y: -2, scale: 1.02 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-blue-500/15 bg-blue-500/10">
                        <Icon className="h-4 w-4 text-blue-400" />
                      </div>

                      <p className="text-sm font-medium leading-6 text-slate-200">
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/5 py-5"
        >
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              © 2024 Pubali Enterprise. All rights reserved.
            </p>

            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              Reliable cargo & barge logistics solutions across Bangladesh.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
