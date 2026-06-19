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
   Timeline Data
   ───────────────────────────────────────────── */
const MILESTONES = [
  {
    year: "1980",
    title: "The Beginning",
    description: "Founded by Mr. Shangara Singh, starting as a specialized repair shop for heavy-duty earthmoving hydraulic cylinders.",
  },
  {
    year: "1995",
    title: "Manufacturing Expansion",
    description: "Expanded operations to begin manufacturing custom hydraulic power packs and standard cylinders for local industries.",
  },
  {
    year: "2010",
    title: "Facility Upgrade",
    description: "Moved to a state-of-the-art facility equipped with CNC machining, a 10,000 Class clean room, and 500 BAR testing beds.",
  },
  {
    year: "2024",
    title: "Next Generation",
    description: "Under the leadership of Mr. Jasdeep Singh, integrating servo-proportional tech and IoT monitoring into our hydraulic systems.",
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

        {/* Team Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--border-color)] transition-all duration-500 hover:border-trust-blue/30"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                {/* Metallic Frame & Portrait */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 rounded-full p-2 bg-gradient-to-br from-slate-200 via-white to-slate-300 dark:from-slate-700 dark:via-slate-600 dark:to-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 rounded-full border border-white/40 dark:border-white/10 mix-blend-overlay" />
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--background)] border-4 border-white dark:border-[var(--surface)] shadow-inset">
                    <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 font-semibold text-sm">
                      {/* Image placeholder text shown if src is missing/broken */}
                      Photo pending
                    </div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover relative z-10"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-trust-blue dark:text-sky-400 mb-6">
                  {member.role}
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[var(--text-primary)]">Our Journey</h2>
            <div className="mt-4 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-trust-blue/40 to-transparent" />
          </div>

          {/* Vertical Line */}
          <div className="absolute left-[39px] sm:left-1/2 sm:-translate-x-1/2 top-[120px] bottom-0 w-1 bg-gradient-to-b from-trust-blue/40 via-sky-400/20 to-transparent rounded-full" />

          <div className="space-y-16 sm:space-y-24">
            {MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-[31px] sm:left-1/2 sm:-translate-x-1/2 w-5 h-5 rounded-full bg-[var(--background)] border-4 border-trust-blue shadow-[0_0_15px_rgba(30,58,138,0.5)] z-10" />

                  {/* Content card */}
                  <div className={`w-full sm:w-1/2 pl-24 sm:pl-0 ${isEven ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'}`}>
                    <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] transition-all duration-300 hover:border-trust-blue/30" style={{ boxShadow: "var(--card-shadow)" }}>
                      <span className="inline-block px-3 py-1 mb-4 text-xs font-bold font-mono tracking-widest rounded-full bg-trust-blue/10 dark:bg-trust-blue/20 text-trust-blue dark:text-sky-400">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}
