"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-emerald-deep" id="live-rates">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white">
            Live Gold Rates Launching Soon
          </h2>
          <p className="text-white/90 text-lg font-medium">
            Stay tuned for real-time precious metal pricing, charts, and market analytics directly from our trading desk.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-dark p-8 md:p-12 rounded-[2rem] border-4 border-gold-classic flex flex-col items-center text-center shadow-2xl max-w-2xl w-full"
          >
            <div className="w-20 h-20 rounded-full bg-gold-classic flex items-center justify-center text-emerald-deep mb-6">
              <TrendingUp size={40} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Market Data Coming Soon</h3>
            <p className="text-white/80 leading-relaxed font-medium">
              We are integrating real-time spot prices for Gold (999.9), Silver, and other precious metals. Our advanced charting and analytics tools will be available shortly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
