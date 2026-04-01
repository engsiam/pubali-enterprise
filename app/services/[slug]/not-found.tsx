"use client";

import { Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-4 py-20">
      <div className="text-center max-w-2xl">
        {/* Icon Display */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950 dark:to-orange-950 border-2 border-amber-200 dark:border-amber-800">
              <Search className="w-10 h-10 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Service Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          We couldn't find the service you're looking for. It may have been
          removed or the URL might be incorrect. Browse our available services
          or return to the homepage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Search size={18} />
            View All Services
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>

        {/* Additional Info */}
        <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Need help?{" "}
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
