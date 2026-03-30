"use client";

import { useEffect, useRef } from "react";

export function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const companies = [
    { name: "Global Shipping Co.", icon: "🚢" },
    { name: "Port Authority", icon: "⚓" },
    { name: "Maritime Services", icon: "🌊" },
    { name: "Cargo Logistics", icon: "📦" },
    { name: "Industrial Haulers", icon: "🚚" },
    { name: "Vessel Operations", icon: "⛴️" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll) return;

    // Clone items to create seamless loop
    const itemWidth = scroll.scrollWidth / companies.length;
    let scrollPos = 0;
    let animationId: number;

    const animate = () => {
      scrollPos += 0.5; // Speed of scroll (pixels per frame)

      // Get the width of one complete set
      const oneSetWidth = itemWidth * companies.length;

      // When we've scrolled one full set, reset to beginning seamlessly
      if (scrollPos >= oneSetWidth) {
        scrollPos = 0;
      }

      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative py-4">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none"></div>
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none"></div>

      <div
        ref={containerRef}
        className="overflow-x-hidden scroll-smooth"
        style={{ scrollBehavior: "auto" }}
      >
        <div ref={scrollRef} className="flex whitespace-nowrap">
          {/* Render companies multiple times for seamless loop */}
          {[...Array(6)].map((_, setIdx) =>
            companies.map((company, idx) => (
              <div
                key={`${setIdx}-${idx}`}
                className="flex-shrink-0 px-16 py-4 text-gray-500 font-semibold text-base hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
              >
                <span>{company.icon}</span>
                <span>{company.name}</span>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
}
