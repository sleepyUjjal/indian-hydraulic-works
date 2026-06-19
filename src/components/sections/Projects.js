"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Project data
   ───────────────────────────────────────────── */
const CATEGORIES = ["All", "Repair", "Manufacturing", "Installation"];

const PROJECTS = [
  {
    id: 1,
    title: "Custom Hydraulic Power Pack",
    category: "Manufacturing",
    description: "Designed and built a 200L custom power pack unit with dual-pump configuration for an automotive press line.",
    image: "/projects/powerpack.png",
    specs: { pressure: "250 BAR", flow: "120 L/min" },
    tall: false,
  },
  {
    id: 2,
    title: "Heavy-Duty Cylinder Overhaul",
    category: "Repair",
    description: "Complete reconditioning of a 3-meter bore hydraulic cylinder for a steel plant's rolling mill.",
    image: "/projects/cylinder-repair.png",
    specs: { bore: "300mm", stroke: "3000mm" },
    tall: true,
  },
  {
    id: 3,
    title: "Pump System Installation",
    category: "Installation",
    description: "Turnkey installation of a multi-pump hydraulic system with centralised filtration and cooling.",
    image: "/projects/pump-install.png",
    specs: { capacity: "500 HP", units: "4 Pumps" },
    tall: false,
  },
  {
    id: 4,
    title: "Industrial Hydraulic Press",
    category: "Manufacturing",
    description: "800-ton forging press equipped with servo-hydraulic controls and precision force monitoring.",
    image: "/projects/press.png",
    specs: { force: "800 Ton", accuracy: "±0.1mm" },
    tall: true,
  },
  {
    id: 5,
    title: "Precision Valve Assembly",
    category: "Repair",
    description: "Multi-station directional control valve manifold with proportional flow regulation for CNC operations.",
    image: "/projects/valve-assembly.png",
    specs: { stations: "5 Ports", rating: "210 BAR" },
    tall: false,
  },
  {
    id: 6,
    title: "Custom System Build",
    category: "Manufacturing",
    description: "Complete hydraulic power unit with reservoir, motor, and integrated control panel for automated tooling.",
    image: "/projects/custom-system.png",
    specs: { power: "75 kW", reservoir: "200L" },
    tall: false,
  },
];

/* ─────────────────────────────────────────────
   Project Card
   ───────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex flex-col h-full cursor-pointer`}
    >
      <div
        className="relative overflow-hidden rounded-2xl flex flex-col h-full
          bg-[var(--surface)] border border-[var(--border-color)]
          transition-all duration-500"
        style={{ boxShadow: "var(--card-shadow)" }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--card-shadow-hover)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--card-shadow)"; }}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-[260px] shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
              {project.category}
            </span>
          </div>

          {/* Specs overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-3">
            {Object.entries(project.specs).map(([key, val]) => (
              <div
                key={key}
                className="bg-white/15 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/20"
              >
                <p className="text-[9px] uppercase tracking-wider text-white/70 mb-0.5">{key}</p>
                <p className="text-sm font-bold text-white font-mono">{val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col grow">
          <h3 className="text-base font-heading font-bold text-[var(--text-primary)] mb-2 group-hover:text-trust-blue transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* View project link */}
          <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-trust-blue dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View Details</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═════════════════════════════════════════════
   PROJECTS SECTION
   ═════════════════════════════════════════════ */
export default function Projects() {
  const sectionRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden bg-[var(--background)] transition-colors duration-300"
      aria-label="Our Projects"
      id="projects"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-trust-blue/[0.03] dark:bg-trust-blue/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-trust-blue dark:text-sky-400 mb-4"
          >
            Our Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-sky-500 dark:from-sky-400 dark:to-blue-400">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            A showcase of our hydraulic engineering expertise — from custom
            power packs to heavy-duty industrial repairs.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-trust-blue/40 to-transparent"
          />
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                ${activeCategory === cat
                  ? "bg-trust-blue text-white border-trust-blue shadow-[0_4px_15px_rgba(30,58,138,0.3)]"
                  : "bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-trust-blue/40"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
