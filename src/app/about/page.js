"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Team Data
   ───────────────────────────────────────────── */
const PLACEHOLDER_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='transparent'/%3E%3C/svg%3E";

const TEAM = [
  {
    name: "Mr. Shangara Singh",
    role: "Founder",
    description: "Pioneered Indian Hydraulic Works in 1980 with a vision for uncompromising quality and precision engineering. Built the foundation of trust that defines our company today.",
    image: PLACEHOLDER_IMG,
  },
  {
    name: "Mr. Jasdeep Singh",
    role: "Managing Director",
    description: "Leading the company's modernization and expansion into advanced servo-hydraulics and automated control systems, ensuring IHW stays at the forefront of industrial innovation.",
    image: PLACEHOLDER_IMG,
  },
];

/* ─────────────────────────────────────────────
   Core Values Data
   ───────────────────────────────────────────── */
const CORE_VALUES = [
  {
    title: "Uncompromising Precision",
    description: "We engineer hydraulic systems with exacting tolerances, ensuring flawless operation in the most demanding industrial environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Proven Reliability",
    description: "Decades of field-tested performance back our products. When downtime is not an option, industry leaders trust our solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Client-Centric Innovation",
    description: "We don't just supply equipment; we partner with clients to develop custom solutions that drive operational efficiency and growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   About Page Components
   ───────────────────────────────────────────── */
export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <main className="min-h-screen bg-[var(--background)] transition-colors duration-300 pt-24 pb-32">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-trust-blue/[0.03] dark:from-trust-blue/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-trust-blue dark:text-sky-400 mb-4"
          >
            Our Legacy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[var(--text-primary)] tracking-tight mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-sky-500 dark:from-sky-400 dark:to-blue-400">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
          >
            For over four decades, Indian Hydraulic Works has been synonymous with precision, durability, and trust. What started as a vision has grown into a leading force in hydraulic engineering.
          </motion.p>
        </div>

        {/* Leadership Section */}
        <div className="mb-40 space-y-32">
          {TEAM.map((member, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Photo Side */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-3xl p-3 bg-gradient-to-br from-slate-200 via-white to-slate-300 dark:from-slate-700 dark:via-slate-600 dark:to-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
                    <div className="absolute inset-0 rounded-3xl border border-white/40 dark:border-white/10 mix-blend-overlay" />
                    <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden bg-[var(--background)] border-4 border-white dark:border-[var(--surface)] shadow-inner transition-transform duration-700 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 font-semibold text-sm">
                        Photo pending
                      </div>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] mb-4">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-trust-blue dark:text-sky-400 mb-8">
                    {member.role}
                  </p>
                  <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Values / Why Partner With Us Section */}
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--text-primary)]">Why Partner With Us</h2>
            <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-trust-blue/40 to-transparent" />
            <p className="mt-8 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our commitment goes beyond engineering. We build long-term partnerships rooted in trust, quality, and mutual success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {CORE_VALUES.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border-color)] transition-all duration-300 hover:border-trust-blue/40 hover:-translate-y-2 group"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-trust-blue/10 dark:bg-trust-blue/20 flex items-center justify-center text-trust-blue dark:text-sky-400 mb-8 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
