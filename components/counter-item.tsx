"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  endValue: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function CounterItem({
  endValue,
  label,
  suffix = "",
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(endValue * progress));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isVisible, endValue, duration]);

  return (
    <div ref={ref} className="text-center premium-transition hover-premium-lift">
<div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-white premium-numbers">
        {count}
        {suffix}
      </div>
      <p className="text-white font-medium mt-2">{label}</p>
    </div>
  );
}
