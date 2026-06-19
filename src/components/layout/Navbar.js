"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "#" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[var(--surface)]/80 backdrop-blur-md shadow-3d border-b border-[var(--border-color)] py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-navy rounded flex items-center justify-center text-white font-heading font-bold shadow-pressed">
              IHW
            </div>
            <span className={`font-heading font-bold text-2xl hidden sm:block transition-colors ${scrolled ? "text-[var(--text-primary)]" : "dark:text-white text-deep-navy"}`}><a href="/">Indian Hydraulic Works</a></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${scrolled ? "text-[var(--text-secondary)] hover:text-trust-blue" : "dark:text-slate-300 dark:hover:text-white text-steel-grey hover:text-trust-blue"}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300
                ${scrolled
                  ? "bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "dark:bg-white/10 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/20 bg-deep-navy/10 text-deep-navy/70 hover:text-deep-navy hover:bg-deep-navy/20"
                }
              `}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-[18px] h-[18px]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-[18px] h-[18px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Button href="/#contact" variant="primary" className="py-2 px-6">Get Quote</Button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors
                ${scrolled
                  ? "text-[var(--text-secondary)]"
                  : "dark:text-white/70 text-deep-navy/70"
                }
              `}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className={`focus:outline-none transition-colors ${scrolled ? "text-[var(--text-primary)]" : "dark:text-white text-deep-navy"}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
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
            className="fixed inset-0 z-50 bg-[var(--surface)] flex flex-col pt-20 px-6 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-[var(--text-primary)] focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-7 h-7" />
            </button>
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-heading font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button href="/#contact" variant="primary" className="mt-8 w-full py-4 text-lg" onClick={() => setMobileMenuOpen(false)}>
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
