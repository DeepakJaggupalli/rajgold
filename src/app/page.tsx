"use client";

import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/LoadingScreen";
import GoldRain from "@/components/GoldRain";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative bg-light-bg min-h-screen">
      <LoadingScreen />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-classic origin-left z-[100]"
        style={{ scaleX }}
      />

      <GoldRain />

      <Hero />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <Contact />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/917416966659"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border-2 border-white"
        >
          <MessageCircle size={28} />
        </motion.a>

        {/* Back to Top */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: showTopBtn ? 1 : 0, scale: showTopBtn ? 1 : 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-white text-red-deep flex items-center justify-center shadow-lg transition-colors border-2 border-red-deep"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>
    </main>
  );
}
