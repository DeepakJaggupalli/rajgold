"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Rahul Sharma", role: "Investor", text: "I regularly buy 50g gold bars from Raj Gold. Their premiums over spot price are the most reasonable in the market, and the delivery is always secure and fully insured." },
    { name: "Priya Desai", role: "Business Owner", text: "The premium buying experience at their showroom is incredible. The staff is highly knowledgeable and the gold bars are beautifully packaged with all BIS certifications." },
    { name: "Amit Patel", role: "Financial Advisor", text: "I recommend Raj Gold to all my clients looking to diversify into physical gold. The purity is unmatched and the documentation is perfectly compliant for tax purposes." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 relative bg-emerald-deep" id="testimonials">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white">
            Client Experiences
          </h2>
          <p className="text-white/90 text-lg font-medium">
            Hear from thousands of investors who secure their future with Raj Gold Bars.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon Background */}
          <div className="absolute -top-10 -left-10 text-gold-classic/10 z-0">
            <Quote size={120} />
          </div>

          <div className="relative z-10 overflow-hidden min-h-[250px]">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: activeIndex === idx ? 1 : 0, 
                  x: activeIndex === idx ? 0 : 50,
                  pointerEvents: activeIndex === idx ? "auto" : "none"
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-emerald-dark p-8 md:p-12 rounded-[2rem] border-4 border-gold-classic flex flex-col justify-between shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex text-gold-classic">
                    {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                  </div>
                  <p className="text-xl md:text-2xl text-white italic leading-relaxed font-medium">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-full bg-gold-classic flex items-center justify-center text-emerald-deep font-bold text-2xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gold-classic font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-gold-classic w-10" : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
