import { Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Md. Hasan Ali",
      company: "Bangladesh Cargo Co.",
      role: "Operations Manager",
      text: "Pubali Enterprise delivered exceptional service during our coal unloading project. Their equipment was top-notch and the team worked efficiently around the clock.",
      rating: 5,
    },
    {
      name: "Fatima Begum",
      company: "River Logistics Ltd",
      role: "Director",
      text: "Outstanding professionalism! They completed our fertilizer handling project 2 days ahead of schedule. Highly recommended for any serious industrial work.",
      rating: 5,
    },
    {
      name: "Ahmed Khan",
      company: "Port Management Authority",
      role: "Project Lead",
      text: "18 years in this business and Pubali Enterprise stands out. Safety protocols are excellent and their crew is among the best trained I've seen.",
      rating: 5,
    },
    {
      name: "Sima Ray",
      company: "Global Trade Partners",
      role: "Supply Chain Manager",
      text: "Reliable, cost-effective, and professional. They handle our monthly sand and stone operations without any issues. Great value for money.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      company: "Eastern Shipping Group",
      role: "Procurement Head",
      text: "Their team handled our bulk unloading operations with impressive speed and coordination. Communication was clear from start to finish.",
      rating: 5,
    },
    {
      name: "Rezaul Karim",
      company: "Harbor Materials Ltd",
      role: "Managing Director",
      text: "A dependable logistics partner. Their professionalism and equipment readiness make them one of the most reliable operators we’ve worked with.",
      rating: 5,
    },
    {
      name: "Md. Hasan Ali",
      company: "Bangladesh Cargo Co.",
      role: "Operations Manager",
      text: "Pubali Enterprise delivered exceptional service during our coal unloading project. Their equipment was top-notch and the team worked efficiently around the clock.",
      rating: 5,
    },
    {
      name: "Fatima Begum",
      company: "River Logistics Ltd",
      role: "Director",
      text: "Outstanding professionalism! They completed our fertilizer handling project 2 days ahead of schedule. Highly recommended for any serious industrial work.",
      rating: 5,
    },
    {
      name: "Ahmed Khan",
      company: "Port Management Authority",
      role: "Project Lead",
      text: "18 years in this business and Pubali Enterprise stands out. Safety protocols are excellent and their crew is among the best trained I've seen.",
      rating: 5,
    },
    {
      name: "Sima Ray",
      company: "Global Trade Partners",
      role: "Supply Chain Manager",
      text: "Reliable, cost-effective, and professional. They handle our monthly sand and stone operations without any issues. Great value for money.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      company: "Eastern Shipping Group",
      role: "Procurement Head",
      text: "Their team handled our bulk unloading operations with impressive speed and coordination. Communication was clear from start to finish.",
      rating: 5,
    },
    {
      name: "Rezaul Karim",
      company: "Harbor Materials Ltd",
      role: "Managing Director",
      text: "A dependable logistics partner. Their professionalism and equipment readiness make them one of the most reliable operators we’ve worked with.",
      rating: 5,
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-14 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <Users size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what our clients say about working with Pubali Enterprise
          </p>
        </motion.div>

        {/* Moving Columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-6 h-[520px] overflow-hidden"
        >
          {/* fade top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-slate-50 to-transparent" />
          {/* fade bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-slate-50 to-transparent" />

          {/* Column 1 */}
          <div className="relative overflow-hidden">
            <div className="animate-testimonial-up hover:[animation-play-state:paused] space-y-6">
              {[...firstColumn, ...firstColumn].map((testimonial, idx) => (
                <TestimonialCard
                  key={`col1-${idx}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative overflow-hidden hidden md:block">
            <div className="animate-testimonial-up-slow hover:[animation-play-state:paused] space-y-6">
              {[...secondColumn, ...secondColumn].map((testimonial, idx) => (
                <TestimonialCard
                  key={`col2-${idx}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,99,235,0.10)]">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-700 text-sm leading-7 italic mb-6">
        "{testimonial.text}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-900 to-blue-700 flex items-center justify-center text-white font-semibold text-sm shadow-md">
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-xs text-slate-500">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
