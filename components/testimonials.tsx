import { Star, Users } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Md. Hasan Ali",
      company: "Bangladesh Cargo Co.",
      role: "Operations Manager",
      text: "Pubali Enterprise delivered exceptional service during our coal unloading project. Their equipment was top-notch and the team worked efficiently around the clock.",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Fatima Begum",
      company: "River Logistics Ltd",
      role: "Director",
      text: "Outstanding professionalism! They completed our fertilizer handling project 2 days ahead of schedule. Highly recommended for any serious industrial work.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Ahmed Khan",
      company: "Port Management Authority",
      role: "Project Lead",
      text: "18 years in this business and Pubali Enterprise stands out. Safety protocols are excellent and their crew is among the best trained I've seen.",
      rating: 5,
      image: "/images/testimonial-3.jpg",
    },
    {
      name: "Sima Ray",
      company: "Global Trade Partners",
      role: "Supply Chain Manager",
      text: "Reliable, cost-effective, and professional. They handle our monthly sand and stone operations without any issues. Great value for money.",
      rating: 5,
      image: "/images/testimonial-4.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <Users size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about working with Pubali Enterprise
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200/50 hover:border-accent/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
