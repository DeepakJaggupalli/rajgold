"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { question: "What is the purity of your gold bars?", answer: "All our gold bars are guaranteed 24 Karat (999.9) pure and come with BIS Hallmark certification and tamper-proof packaging." },
    { question: "How do you calculate the price?", answer: "Our prices are based on the live international gold spot price plus a minimal premium for manufacturing, hallmarking, and logistics. This ensures you get the most competitive rates." },
    { question: "Do you offer safe delivery?", answer: "Yes, we partner with specialized high-security logistics providers. Every shipment is 100% insured until it is safely delivered to your hands." },
    { question: "Can I sell the gold bars back to you?", answer: "Absolutely. We offer a guaranteed buyback policy on all Raj Gold bars at current market rates with zero deduction for melting or testing." },
    { question: "What payment methods do you accept?", answer: "We accept all major payment methods including Bank Transfer (NEFT/RTGS), UPI, and Debit/Credit Cards. Cash payments are accepted subject to government regulations." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-[#FFF9E6]" id="faq">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-6 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-emerald-deep leading-tight">
              Frequently Asked <br/>
              <span className="text-gold-hover">Questions</span>
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Everything you need to know about investing in pure gold bars with Raj Gold. Complete transparency, zero hidden details.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white transition-all duration-300 rounded-2xl overflow-hidden border-2 ${
                  activeIndex === idx ? "border-emerald-deep shadow-lg" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold font-sans transition-colors ${activeIndex === idx ? "text-emerald-deep" : "text-gray-800"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${activeIndex === idx ? "bg-emerald-deep text-white" : "bg-gray-100 text-gray-500"}`}>
                    {activeIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
