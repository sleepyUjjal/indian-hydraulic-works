"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-3d border-b border-steel-light/20 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-navy rounded flex items-center justify-center text-white font-heading font-bold shadow-pressed">
              HW
            </div>
            <span className="font-heading font-bold text-2xl text-deep-navy hidden sm:block">HydraulicWorks</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-trust-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button variant="primary" className="py-2 px-6">Get Quote</Button>
          </div>

          <button 
            className="md:hidden text-deep-navy focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white flex flex-col pt-20 px-6 md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-deep-navy focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-7 h-7" />
            </button>
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-3xl font-heading font-bold text-deep-navy border-b border-slate-100 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="primary" className="mt-8 w-full py-4 text-lg">Get Quote</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
