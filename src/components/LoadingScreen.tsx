"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Crown } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-emerald-deep flex items-center justify-center overflow-hidden"
        >
          {/* Background animated styling */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.5)_0%,rgba(2,44,34,0)_70%)] rounded-full blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gold-classic p-[2px] shadow-[0_0_30px_rgba(212,175,55,0.5)] mb-8"
            >
              <div className="w-full h-full rounded-full bg-emerald-deep flex items-center justify-center relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-gold-classic/20 to-white/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <div className="w-full h-full rounded-full bg-[#eaddbe] flex items-center justify-center relative overflow-hidden z-10">
                  <img src="/logo.jpg" alt="Raj Gold Logo" className="w-[85%] h-[85%] object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="overflow-hidden"
            >
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white uppercase flex">
                {"Raj Gold".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    className={char === " " ? "w-3" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Loading Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="w-48 h-[3px] bg-emerald-dark mt-8 rounded-full overflow-hidden relative"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                className="absolute inset-y-0 left-0 w-full bg-gold-classic rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
