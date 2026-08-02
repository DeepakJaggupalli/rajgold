"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-emerald-deep" id="home">
      {/* Mandala/Traditional Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-end items-center opacity-10">
        <div className="w-[800px] h-[800px] rounded-full border-[40px] border-white absolute right-[-200px] top-1/2 -translate-y-1/2 border-dashed"></div>
        <div className="w-[600px] h-[600px] rounded-full border-[20px] border-white absolute right-[-100px] top-1/2 -translate-y-1/2 border-dotted"></div>
        <div className="w-[400px] h-[400px] rounded-full border-[10px] border-white absolute right-[0px] top-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight text-white tracking-tight">
            Raj Gold Company
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-gold-classic">
            India's No.1 Premium Gold Bar Sellers
          </h2>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
            Invest in pure 24K gold bars with confidence at Raj Gold. We offer BIS-hallmarked premium gold bars at transparent live market rates. Secure your future with the ultimate asset.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a href="tel:+917416966659" className="block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gold-classic text-emerald-deep px-8 py-4 rounded-3xl font-bold hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all text-lg border-2 border-gold-classic text-center"
              >
                Buy Gold Bars Now
                <span className="block text-xs font-medium text-emerald-deep/80 mt-1">Live transparent pricing</span>
              </motion.button>
            </a>
            <a href="#contact" className="block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-emerald-deep px-8 py-4 rounded-3xl font-bold hover:shadow-[0_10px_20px_rgba(255,255,255,0.3)] transition-all text-lg border-2 border-white text-center"
              >
                Hassle-Free Process
                <span className="block text-xs font-medium text-emerald-deep/80 mt-1">Simple steps, secure payment</span>
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Hero Visual - Real Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center mt-12 lg:mt-0"
        >
          <div className="w-full max-w-[550px] aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] border-[4px] border-gold-classic shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden bg-black group">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src="/gold-bar.jpg" 
               alt="Raj Gold International 100g Fine Gold Bar" 
               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
             />
             
             {/* Badge */}
             <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-xl flex items-center justify-between border border-gold-classic/50">
                <div>
                  <p className="text-emerald-deep font-bold text-[10px] md:text-sm uppercase">Certified Purity</p>
                  <p className="text-gray-800 font-bold text-sm md:text-xl leading-tight md:leading-normal">999.9 Fine Gold</p>
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gold-classic rounded-full flex items-center justify-center font-bold text-emerald-deep shadow-inner text-xs md:text-base">
                  BIS
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
