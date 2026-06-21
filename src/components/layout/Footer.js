"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[var(--surface)] dark:bg-deep-navy text-[var(--text-primary)] pt-16 pb-8 border-t border-[var(--border-color)] relative overflow-hidden transition-colors duration-300">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-trust-blue rounded-full blur-[120px] opacity-10 dark:opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-navy rounded-sm flex items-center justify-center text-white font-heading font-bold shadow-pressed">
                IHW
              </div>
              <span className="font-heading font-bold text-xl">Indian Hydraulic Works</span>
            </div>
            <p className="text-[var(--text-secondary)] mt-4 leading-relaxed text-sm">
              Indian Hydraulic Works, established in 1980, is a trusted name in hydraulic repair and manufacturing. We specialize in Pump, Motor &amp; Valve Repairing, along with Hydraulic Cylinders and Hydraulic Power Packs. With decades of experience, we are committed to delivering reliable solutions, quality workmanship, and timely service.
            </p>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 lg:pl-4"
          >
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
              <li><a href="/#services" className="hover:text-trust-blue transition-colors">Our Services</a></li>
              <li><a href="/products" className="hover:text-trust-blue transition-colors">Products Gallery</a></li>
              <li><a href="/about" className="hover:text-trust-blue transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-trust-blue transition-colors">Contact Now</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-[var(--text-secondary)] text-sm mb-6 lg:mb-0">
              <li>
                <a href={`tel:${(process.env.NEXT_PUBLIC_CONTACT_PHONE || "+917942651152").replace(/\s/g, "")}`} className="hover:text-trust-blue transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--border-color)] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">{process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 7942651152"}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@hydraulicworks.com"}`} className="hover:text-trust-blue transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--border-color)] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@hydraulicworks.com"}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--border-color)] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Indian Hydraulic Works</strong><br/>
                  {process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Plot No. 10, New A - 73, Kapra Colony, Behind Aggarwal Dhramshala, Air Force Road, NIT, Jawahar Colony Faridabad, Faridabad - 121005, Haryana, India"}
                </span>
              </li>
            </ul>
          </motion.div>
          {/* Column 4: Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col justify-end"
          >
            <div className="w-full h-48 lg:h-[220px] rounded-xl overflow-hidden border border-[var(--border-color)] relative" style={{ boxShadow: "var(--card-shadow)" }}>
              <iframe 
                src="https://maps.google.com/maps?q=Indian+Hydraulic+Works,+Air+Force+Road,+Jawahar+Colony,+Faridabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Indian Hydraulic Works Location"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col items-center justify-center text-sm text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Indian Hydraulic Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
