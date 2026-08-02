"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GoldRain() {
  const [bars, setBars] = useState<{ id: number; left: number; duration: number; delay: number; scale: number; rotation: number }[]>([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Generate beautiful falling gold bars for a one-time entrance effect
    const newBars = Array.from({ length: 40 }).map((_, i) => {
      const scale = Math.random() * 0.8 + 0.4;
      return {
        id: i,
        left: Math.random() * 100, // percentage
        duration: Math.random() * 3 + 3, // 3 to 6 seconds to fall
        delay: Math.random() * 1.5, // stagger start times slightly
        scale: scale,
        rotation: Math.random() * 180 - 90, // Random initial rotation
      };
    });
    setBars(newBars);

    // Unmount the component after the animation finishes (max duration ~ 7.5s)
    const timer = setTimeout(() => setShow(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {bars.map((bar) => (
        <motion.div
          key={bar.id}
          initial={{ y: -150, opacity: 0, rotate: bar.rotation }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: bar.rotation + (Math.random() * 100 - 50) }}
          transition={{
            duration: bar.duration,
            delay: bar.delay,
            ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
          }}
          className="absolute drop-shadow-2xl"
          style={{ 
            left: `${bar.left}%`, 
            transform: `scale(${bar.scale})`,
          }}
        >
          {/* Beautiful, Clean, Premium SVG Gold Bar */}
          <svg width="60" height="30" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L105 5L115 55L5 55L15 5Z" fill="url(#paint0_linear)"/>
            <path d="M15 5L105 5L115 55L5 55L15 5Z" fill="url(#paint1_linear)"/>
            <path d="M22 15L98 15L102 45L18 45L22 15Z" fill="url(#paint2_linear)"/>
            
            {/* Engraving */}
            <text x="60" y="32" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#B38F00" textAnchor="middle" letterSpacing="2">999.9</text>
            <text x="60" y="42" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#D4AF37" textAnchor="middle" letterSpacing="1">FINE GOLD</text>

            <defs>
              <linearGradient id="paint0_linear" x1="60" y1="5" x2="60" y2="55" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDE047"/>
                <stop offset="0.5" stopColor="#EAB308"/>
                <stop offset="1" stopColor="#A16207"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="5" y1="30" x2="115" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.4"/>
                <stop offset="0.2" stopColor="white" stopOpacity="0"/>
                <stop offset="0.8" stopColor="white" stopOpacity="0"/>
                <stop offset="1" stopColor="white" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="60" y1="15" x2="60" y2="45" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FEF08A"/>
                <stop offset="1" stopColor="#CA8A04"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
