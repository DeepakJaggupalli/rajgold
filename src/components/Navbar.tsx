"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, PhoneCall, Crown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-emerald-deep py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-[#eaddbe] flex items-center justify-center shadow-lg shrink-0">
            <img src="/logo.jpg" alt="Raj Gold" className="w-[85%] h-[85%] object-contain" />
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-playfair font-bold text-white tracking-wide hidden sm:block"
          >
            RAJ GOLD
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-white/90 hover:text-gold-classic transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gold-classic transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="tel:+1234567890">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-classic text-emerald-deep px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-gold-hover shadow-lg transition-all"
            >
              <PhoneCall size={18} />
              Call Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 w-full bg-emerald-deep py-6 flex flex-col items-center gap-4 border-t border-white/20 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-white hover:text-gold-classic transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="tel:+1234567890" onClick={() => setMobileMenuOpen(false)}>
            <button className="mt-4 bg-gold-classic text-emerald-deep px-8 py-3 rounded-full font-bold flex items-center gap-2">
              <PhoneCall size={20} />
              Call Now
            </button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
