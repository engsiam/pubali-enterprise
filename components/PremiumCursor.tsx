"use client";

import { useEffect, useRef, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface TrailPoint {
  x: number;
  y: number;
  size: number;
  alpha: number;
  hue: number;
}

const PremiumCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const magneticRingRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  // Refs for mutable values that shouldn't trigger re-renders
  const mousePosRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const cursorPosRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const trailPointsRef = useRef<TrailPoint[]>([]);
  const trailElementsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
  const animationFrameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(false);

  // Premium brand colors palette
  const colors = {
    primary: "#0c1a2e", // Dark rich blue
    accent: "#2563eb", // Bright blue
    secondary: "#3b82f6", // Medium blue
    glow: "rgba(37, 99, 235, 0.5)", // Accent with transparency
  };

  // Linear interpolation function for smooth movement
  const lerp = (start: number, end: number, factor: number): number => {
    return start + (end - start) * factor;
  };

  // Easing function using cubic bezier math
  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  // Generate oscillating value using sine wave
  const oscillate = (
    time: number,
    frequency: number,
    amplitude: number,
    phase: number = 0
  ): number => {
    return Math.sin(time * frequency + phase) * amplitude;
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    const magneticRing = magneticRingRef.current;
    if (!cursor || !trail || !magneticRing) return;

    // Store trail elements reference
    trailElementsRef.current = trail.querySelectorAll(".trail-point");

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        setIsVisible(true);
        isVisibleRef.current = true;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      isVisibleRef.current = false;
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      isVisibleRef.current = true;
    };

    // Handle interactive elements (links, buttons, clickable elements)
    const handleInteractiveEnter = () => {
      setIsInteractive(true);
    };

    const handleInteractiveLeave = () => {
      setIsInteractive(false);
    };

    const animate = (time: number) => {
      // Smooth cursor following with lerp (15% factor for natural delay)
      cursorPosRef.current.x = lerp(
        cursorPosRef.current.x,
        mousePosRef.current.x,
        0.15
      );
      cursorPosRef.current.y = lerp(
        cursorPosRef.current.y,
        mousePosRef.current.y,
        0.15
      );

      // Update main cursor position with slight rotation oscillation
      const rotation = oscillate(time * 0.002, 1.5, 5);
      cursor.style.transform = `translate(${cursorPosRef.current.x}px, ${cursorPosRef.current.y}px) rotate(${rotation}deg)`;

      // Add new trail point with complex multi-frequency oscillation
      const offsetX =
        oscillate(time * 0.003, 2, 3) + oscillate(time * 0.001, 5, 1);
      const offsetY =
        oscillate(time * 0.003, 2.5, 3) + oscillate(time * 0.001, 4.5, 1);

      trailPointsRef.current.push({
        x: cursorPosRef.current.x + offsetX,
        y: cursorPosRef.current.y + offsetY,
        size: 12,
        alpha: 0.6,
        hue: 217 + oscillate(time * 0.001, 1, 10), // Blue hue range (217-227)
      });

      // Limit trail to 15 points
      if (trailPointsRef.current.length > 15) {
        trailPointsRef.current.shift();
      }

      // Update trail points with math-based properties
      trailElementsRef.current?.forEach((el, index) => {
        if (index < trailPointsRef.current.length) {
          const point = trailPointsRef.current[index];
          const progress = index / trailPointsRef.current.length;

          // Exponential decay for alpha (power function for smoother fade)
          point.alpha = 0.6 * Math.pow(progress, 1.5);

          // Size decreases along trail with easing
          point.size = 12 * (0.3 + 0.7 * easeOutCubic(progress));

          // Golden ratio inspired spacing effect
          const goldenRatioOffset = (index % 5) * 0.02;
          el.style.transform = `translate(${point.x}px, ${point.y}px) translate(${goldenRatioOffset}px, ${goldenRatioOffset}px) scale(${point.size / 12})`;
          el.style.opacity = String(point.alpha);
          el.style.backgroundColor = `hsl(${point.hue}, 83%, 52%)`;
        }
      });

      // Animate magnetic ring with breathing effect
      const scale =
        1 +
        oscillate(time * 0.003, 1, 0.1) +
        oscillate(time * 0.008, 2, 0.05);
      const ringOpacity = 0.3 + oscillate(time * 0.002, 1, 0.2);
      magneticRing.style.transform = `translate(${cursorPosRef.current.x}px, ${cursorPosRef.current.y}px) scale(${scale})`;
      magneticRing.style.opacity = String(ringOpacity);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Add event listeners for interactive elements after a short delay to ensure DOM is ready
    const setupInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, [role='button'], input[type='submit'], input[type='button']");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleInteractiveEnter);
        el.addEventListener("mouseleave", handleInteractiveLeave);
      });
    };

    // Initial setup
    setTimeout(setupInteractiveListeners, 100);

    // Use MutationObserver to dynamically add listeners for new interactive elements
    const observer = new MutationObserver(() => {
      setupInteractiveListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    lastTimeRef.current = performance.now();
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      // Remove interactive element listeners
      const interactiveElements = document.querySelectorAll("a, button, [role='button'], input[type='submit'], input[type='button']");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] overflow-hidden ${isInteractive ? "opacity-0" : ""}`}>
      {/* Main cursor - premium sphere */}
      <div
        ref={cursorRef}
        className={`fixed will-change-transform ${isVisible && !isInteractive ? "opacity-100" : "opacity-0"}`}
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: `radial-gradient(circle at 30% 30%, ${colors.secondary}, ${colors.primary})`,
          boxShadow: `
            0 0 20px ${colors.glow},
            0 0 40px ${colors.glow},
            0 0 60px rgba(37, 99, 235, 0.3),
            inset 0 0 8px rgba(255, 255, 255, 0.3)
          `,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          marginLeft: "-12px",
          marginTop: "-12px",
          transition: "opacity 0.2s ease-out",
        }}
      />

      {/* Trail container with particle effects */}
      <div ref={trailRef} className={`absolute inset-0 ${isInteractive ? "opacity-0" : ""}`}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="trail-point fixed will-change-transform rounded-full"
            style={{
              width: "12px",
              height: "12px",
              marginLeft: "-6px",
              marginTop: "-6px",
              opacity: 0,
              background: `radial-gradient(circle, hsl(${217 + (i * 2)}, 83%, 52%), transparent)`,
              boxShadow: `0 0 10px rgba(37, 99, 235, ${0.4 - i * 0.025})`,
            }}
          />
        ))}
      </div>

      {/* Magnetic attraction ring */}
      <div
        ref={magneticRingRef}
        className={`fixed will-change-transform ${isInteractive ? "opacity-0" : ""}`}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "1px solid rgba(37, 99, 235, 0.3)",
          marginLeft: "-30px",
          marginTop: "-30px",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default PremiumCursor;
