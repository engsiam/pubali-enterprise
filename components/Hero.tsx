"use client";

import { MailIcon, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let lastMove = 0;

    const ripples: any[] = [];

    const resizeCanvas = () => {
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 0,
        alpha: 0.35, // increased visibility
      });
    };

    const handleMove = (clientX: number, clientY: number) => {
      const now = Date.now();
      if (now - lastMove < 50) return;

      const rect = section.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        createRipple(x, y);
        lastMove = now;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handleMove(t.clientX, t.clientY);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];

        r.radius += 2.6;
        r.alpha -= 0.007;

        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // glow ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius + 10, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59,130,246,${r.alpha * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* ✅ VIDEO (base layer) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/videos/hero-cargo.mp4" type="video/mp4" />
      </video>

      {/* ❗ fallback ONLY if video fails (not overlay) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-0"
        style={{ backgroundImage: "url('/images/hero-cargo-ship.jpg')" }}
      />

      {/* ✅ overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/50 to-slate-900/20 z-[1]" />

      {/* cinematic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)] z-[1]" />

      {/* ✅ ripple canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[2]"
      />

      {/* ✅ content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm">Live: 24/7 Port Operations</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Reliable Barge Loading & Unloading Services
          </h1>

          <p className="mb-8 text-lg text-slate-100">
            Heavy cargo handling, crane operations, and river logistics
            solutions.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
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
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-semibold hover:bg-green-600"
            >
              <MailIcon size={18} />
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
