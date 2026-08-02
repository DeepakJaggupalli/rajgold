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
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gold-classic/20 blur-[80px] rounded-full"></div>
            <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto rounded-[2rem] overflow-hidden border-[8px] border-gold-classic shadow-2xl group">
              <img src="/md.jpg" alt="Managing Director" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent flex flex-col justify-end p-8">
                <h4 className="text-3xl font-bold text-white mb-1">Deepak Jaggupalli</h4>
                <p className="text-gold-classic font-bold text-sm uppercase tracking-widest">Managing Director</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-emerald-deep leading-tight">
              The Gold Standard of <br/>
              <span className="text-gold-hover">Trust & Authenticity</span>
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Raj Gold is recognized as a premier dealer of physical gold bullion. Under visionary leadership, our direct relationships with global refineries allow us to offer the highest quality gold bars at the most competitive premiums.
            </p>

            {/* Managing Director Profile (Mobile only) */}
            <motion.div 
              className="lg:hidden w-full max-w-[300px] aspect-[4/5] mx-auto rounded-[2rem] overflow-hidden border-[4px] border-gold-classic shadow-xl relative mt-8 mb-8"
            >
              <img src="/md.jpg" alt="Managing Director" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent flex flex-col justify-end p-6">
                <h4 className="text-2xl font-bold text-white mb-1">Deepak Jaggupalli</h4>
                <p className="text-gold-classic font-bold text-xs uppercase tracking-widest">Managing Director</p>
              </div>
            </motion.div>

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

            {/* Business Portfolio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-[#FDFBF7] rounded-2xl border-2 border-gold-classic/40 shadow-lg"
            >
              <p className="text-gray-700 italic font-medium leading-relaxed mb-6">
                "Our unwavering commitment to absolute purity and transparency has made Raj Gold the most trusted destination for premium wealth preservation in India."
              </p>
              
              <div className="pt-5 border-t border-gray-200">
                <p className="text-xs font-bold text-emerald-deep/60 uppercase tracking-wider mb-3">Leadership Portfolio</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] md:text-xs bg-emerald-deep/5 border border-emerald-deep/20 text-emerald-deep px-3 py-1.5 rounded-md font-bold">Raj Gold</span>
                  <span className="text-[11px] md:text-xs bg-emerald-deep/5 border border-emerald-deep/20 text-emerald-deep px-3 py-1.5 rounded-md font-bold">Infrastructure & Constructions</span>
                  <span className="text-[11px] md:text-xs bg-emerald-deep/5 border border-emerald-deep/20 text-emerald-deep px-3 py-1.5 rounded-md font-bold">Civil & Electrical Works</span>
                  <span className="text-[11px] md:text-xs bg-emerald-deep/5 border border-emerald-deep/20 text-emerald-deep px-3 py-1.5 rounded-md font-bold">Transport</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
