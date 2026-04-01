"use client";

import { BrandLogo } from "@/components/brand-logo";
import { PremiumFooter } from "@/components/premium-footer";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1 sm:gap-2 flex-shrink-0"
            >
              <BrandLogo />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
              <Link
                href="/"
                className="text-foreground text-sm lg:text-base font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-foreground text-sm lg:text-base font-medium hover:text-primary transition-colors"
              >
                Services
              </Link>
              <a
                href="/#gallery"
                className="text-foreground text-sm lg:text-base font-medium hover:text-primary transition-colors"
              >
                Gallery
              </a>
              <a
                href="/#contact"
                className="text-foreground text-sm lg:text-base font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <a
                href="/#contact"
                className="cursor-pointer hidden lg:inline-flex h-11 min-w-[170px] items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md"
              >
                Free Consultation
              </a>

              <a
                href="tel:+1234567890"
                className="hidden lg:inline-flex h-11 min-w-[170px] items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md hover:bg-blue-700 bg-blue-700"
              >
                <Phone size={16} strokeWidth={2.2} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-3 sm:pb-4 border-t border-border">
              <Link
                href="/"
                className="block w-full text-left px-2 sm:px-3 py-2.5 sm:py-3 text-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block w-full text-left px-2 sm:px-3 py-2.5 sm:py-3 text-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                Services
              </Link>
              <a
                href="/#gallery"
                className="block w-full text-left px-2 sm:px-3 py-2.5 sm:py-3 text-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                Gallery
              </a>
              <a
                href="/#contact"
                className="block w-full text-left px-2 sm:px-3 py-2.5 sm:py-3 text-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="/#contact"
                className="block w-full mt-2 sm:mt-3 border-2 border-primary text-primary px-3 sm:px-4 py-2 rounded-lg text-center font-medium text-xs sm:text-sm hover:bg-primary hover:text-white transition-all"
              >
                Free Consultation
              </a>
              <a
                href="tel:+1234567890"
                className="block w-full mt-2 bg-accent text-white px-3 sm:px-4 py-2 rounded-lg text-center font-medium text-xs sm:text-sm hover:bg-blue-700 transition-all"
              >
                Call Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {children}

      {/* Premium Footer */}
      <PremiumFooter />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-40 animate-bounce"
        aria-label="WhatsApp us"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.176l-.348.214-3.617-.952.969 3.742.227.364a9.86 9.86 0 00-1.519 5.26c0 5.487 4.144 9.975 9.622 9.975 2.563 0 4.977-.967 6.923-2.566 1.946-1.599 3.009-3.85 3.009-6.322 0-5.487-4.144-9.975-9.622-9.975" />
        </svg>
      </a>
    </div>
  );
}
