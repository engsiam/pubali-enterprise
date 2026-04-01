"use client";

import { BrandLogo } from "@/components/brand-logo";
import {
  Home,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 py-20">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 p-6">
        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
          <BrandLogo />
        </Link>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-3xl mx-auto">
        {/* Animated 404 Display */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            {/* Search Icon Animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-2 border-blue-200 dark:border-blue-800">
                <Search className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            {/* Divider */}
            <div className="text-5xl font-extralight text-slate-300 dark:text-slate-700">
              ×
            </div>

            {/* 404 Numbers */}
            <div className="text-7xl font-black bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              404
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h1>

          {/* Subheading */}
          <p className="text-xl text-center text-slate-600 dark:text-slate-400 mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <p className="text-center text-slate-500 dark:text-slate-500">
            Let us help you get back on track
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Search size={20} />
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
