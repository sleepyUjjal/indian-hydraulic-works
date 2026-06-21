"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-[var(--background)]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-trust-blue/[0.03] dark:bg-trust-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-6"
        >
          {/* Animated 404 Number */}
          <h1 className="text-[8rem] sm:text-[12rem] font-heading font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-sky-400 select-none">
            404
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-heading font-bold text-[var(--text-primary)] mt-8 mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-[var(--text-secondary)] mb-10 leading-relaxed"
        >
          The page or hydraulic component you are looking for seems to be missing, moved, or temporarily offline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/" variant="primary" className="px-8 py-3.5 w-full sm:w-auto">
            Return to Homepage
          </Button>
          <Button href="/contact" variant="outline" className="px-8 py-3.5 w-full sm:w-auto dark:border-white/20 dark:text-white border-deep-navy/20 text-deep-navy">
            Contact Support
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
