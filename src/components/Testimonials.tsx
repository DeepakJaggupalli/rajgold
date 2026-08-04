"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Testimonials() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject if it hasn't been injected yet
    if (container.current && container.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "FX_IDC:XAUINR",
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "dateRange": "1M",
          "colorTheme": "dark",
          "isTransparent": true,
          "autosize": true,
          "largeChartUrl": ""
        }
      `;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 relative bg-emerald-deep" id="live-rates">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white">
            Live Gold Rates
          </h2>
          <p className="text-white/90 text-lg font-medium">
            Track real-time Gold spot prices in INR directly on our platform. <br className="hidden md:block" />
            <span className="text-gold-classic/80 text-sm md:text-base mt-2 block">*Prices shown are for 1 Troy Ounce (~31.1 grams)</span>
            <span className="text-emerald-400 font-medium text-sm md:text-base mt-1 block">More local live rates (1g, 10g) will be launching soon!</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-dark p-6 md:p-8 rounded-[2rem] border-4 border-gold-classic shadow-2xl w-full h-[350px] overflow-hidden"
          >
            <div className="w-full h-full" ref={container}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
