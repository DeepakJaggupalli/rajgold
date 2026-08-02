"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 relative bg-emerald-deep" id="contact">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-white/90 text-lg font-medium">
            Visit our premium showroom or request a consultation. We are here to assist you with your gold investments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-4 md:p-8 overflow-hidden shadow-2xl border-4 border-gold-classic">
          
          {/* Contact Details */}
          <div className="space-y-8 p-4 md:p-8">
            <div>
              <h3 className="text-2xl font-bold font-sans text-emerald-deep mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-emerald-deep/10 group-hover:bg-gold-classic flex items-center justify-center text-emerald-deep transition-colors shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-lg">Premium Headquarters</h4>
                    <a 
                      href="https://www.google.com/maps/place/17%C2%B044'43.7%22N+83%C2%B019'01.9%22E/@17.7454778,83.3171917,17z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 text-sm leading-relaxed font-medium hover:text-emerald-deep hover:underline"
                    >
                      Visakhapatnam,<br/>
                      Andhra Pradesh, India
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-emerald-deep/10 group-hover:bg-gold-classic flex items-center justify-center text-emerald-deep transition-colors shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-lg">Call Us (24/7)</h4>
                    <a href="tel:+917416966659" className="text-gray-600 text-sm font-medium hover:text-emerald-deep hover:underline">
                      +91 74169 66659
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-emerald-deep/10 group-hover:bg-gold-classic flex items-center justify-center text-emerald-deep transition-colors shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1 text-lg">Email Support</h4>
                    <a href="mailto:rajgoldtrade7569@gmail.com" className="text-gray-600 text-sm font-medium hover:text-emerald-deep hover:underline">
                      rajgoldtrade7569@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t-2 border-gray-100">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Business Hours</h4>
              <div className="flex justify-between text-sm text-gray-600 font-medium">
                <span>Monday - Sunday</span>
                <span className="text-emerald-deep font-bold">9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-3xl border-2 border-gold-classic/40 relative">
            <h3 className="text-2xl font-bold font-sans text-emerald-deep mb-6">Request Callback</h3>
            <form action="mailto:rajgoldtrade7569@gmail.com" method="POST" encType="text/plain" className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  name="Full Name"
                  required
                  className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-emerald-deep transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  name="Phone Number"
                  required
                  className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-emerald-deep transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Investment Interest</label>
                <select name="Investment Interest" className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-emerald-deep transition-colors appearance-none font-medium">
                  <option>1g - 10g Gold Bars</option>
                  <option>50g - 100g Gold Bars</option>
                  <option>Bulk Corporate Orders</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-deep text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-dark transition-all shadow-lg"
              >
                Submit Request
                <Send size={18} />
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
