"use client";

import { motion } from "framer-motion";

export default function TrustSection() {
  const stats = [
    { label: "Satisfied Investors", value: "50,000+" },
    { label: "Years Heritage", value: "25+" },
    { label: "Premium Showrooms", value: "24" },
    { label: "Gold Delivered", value: "5000+ kg" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-classic/20 blur-[80px] rounded-full"></div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-emerald-deep border-[8px] border-gold-classic p-2 shadow-2xl">
              <div className="w-full h-full border-2 border-dashed border-white/50 rounded-2xl flex flex-col justify-center items-center text-center p-8 relative overflow-hidden bg-emerald-dark">
                <h3 className="text-3xl font-sans font-bold text-white mb-4">100% Certified Purity</h3>
                <p className="text-white/90 mb-8 max-w-sm font-medium">Every gold bar comes with a guarantee of 999.9 purity, verified by recognized testing centers.</p>
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full border-4 border-gold-classic bg-white flex items-center justify-center shadow-lg">
                    <span className="font-bold text-emerald-deep text-lg">BIS</span>
                  </div>
                  <div className="w-20 h-20 rounded-full border-4 border-gold-classic bg-white flex items-center justify-center shadow-lg">
                    <span className="font-bold text-emerald-deep text-lg">ISO</span>
                  </div>
                  <div className="w-20 h-20 rounded-full border-4 border-gold-classic bg-white flex items-center justify-center shadow-lg">
                    <span className="font-bold text-emerald-deep text-lg">999.9</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-emerald-deep leading-tight">
              The Gold Standard of <br/>
              <span className="text-gold-hover">Trust & Authenticity</span>
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Raj Gold is recognized as a premier dealer of physical gold bullion. Our direct relationships with global refineries allow us to offer the highest quality gold bars at the most competitive premiums over spot price.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t-2 border-emerald-deep/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <motion.h4 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-emerald-deep font-sans"
                  >
                    {stat.value}
                  </motion.h4>
                  <p className="text-gold-hover text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Managing Director Profile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 p-6 bg-[#FDFBF7] rounded-2xl border-2 border-gold-classic/40 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-[3px] border-emerald-deep shadow-lg">
                <img src="/md.jpg" alt="Managing Director" className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-bold text-emerald-deep">Deepak Jaggupalli</h4>
                <p className="text-gold-hover font-bold text-sm uppercase tracking-wide mt-1">Managing Director</p>
                <p className="text-gray-600 mt-3 text-sm italic font-medium leading-relaxed">
                  "Our unwavering commitment to absolute purity and transparency has made Raj Gold the most trusted destination for premium wealth preservation in India."
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
