"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Crown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-dark pt-20 pb-10 border-t-4 border-gold-classic relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 relative z-10">
        
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/logo.jpg" alt="Raj Gold" className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)] border border-gold-classic/50 shrink-0" />
            <span className="text-3xl font-sans font-bold text-white tracking-wide">
              RAJ GOLD
            </span>
          </Link>
          <p className="text-white/80 leading-relaxed text-sm font-medium">
            India's No.1 Gold Bar Seller. Invest in 24K pure BIS-hallmarked gold bars with 100% transparency, trusted service, and secure delivery.
          </p>
          <div className="flex gap-4">
            {[
              { label: "Fb", href: "#" },
              { label: "Ig", href: "#" },
              { label: "X", href: "#" },
              { label: "In", href: "#" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, backgroundColor: "#D4AF37", color: "#022C22" }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors border border-white/20 font-bold font-sans text-sm"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-gold-classic">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "About Us", "Buy Gold Bars", "Testimonials", "Contact"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-white/80 hover:text-gold-classic transition-colors text-sm flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-gold-classic"></span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>



        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-gold-classic">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/80 text-sm font-medium">
              <MapPin className="text-gold-classic shrink-0 mt-0.5" size={18} />
              <a 
                href="https://www.google.com/maps/place/17%C2%B044'43.7%22N+83%C2%B019'01.9%22E/@17.7454778,83.3171917,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gold-classic transition-colors"
              >
                Visakhapatnam,<br/>Andhra Pradesh, India
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm font-medium">
              <Phone className="text-gold-classic shrink-0" size={18} />
              <a href="tel:+917416966659" className="hover:text-gold-classic transition-colors">+91 74169 66659</a>
            </li>
            <li className="flex items-center gap-3 text-white/80 text-sm font-medium">
              <Mail className="text-gold-classic shrink-0" size={18} />
              <a href="mailto:rajgoldtrade7569@gmail.com" className="hover:text-gold-classic transition-colors">rajgoldtrade7569@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 md:px-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-white/60 text-xs font-medium text-center md:text-left">
          &copy; {new Date().getFullYear()} Raj Gold Company. All rights reserved. No.1 Gold Bar Seller.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-white/60 hover:text-gold-classic text-xs transition-colors font-medium">Privacy Policy</Link>
          <Link href="#" className="text-white/60 hover:text-gold-classic text-xs transition-colors font-medium">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
