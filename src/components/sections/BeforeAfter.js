"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Comparison data
   ───────────────────────────────────────────── */
const COMPARISONS = [
  {
    id: 1,
    title: "Hydraulic Cylinder Restoration",
    description: "Complete reconditioning — bore honing, rod re-chroming, new seals & tested to 250 BAR.",
    before: "/comparisons/before-cylinder.png",
    after: "/comparisons/after-cylinder.png",
  },
  {
    id: 2,
    title: "Power Pack Overhaul",
    description: "Full refurbishment — new motor, reservoir repaint, hose replacement & pressure testing.",
    before: "/comparisons/before-powerpack.png",
    after: "/comparisons/after-powerpack.png",
  },
];

/* ─────────────────────────────────────────────
   Interactive Comparison Slider
   ───────────────────────────────────────────── */
function ComparisonSlider({ before, after, title }) {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    updateSlider(e.clientX);
  }, [updateSlider]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  }, [isDragging, updateSlider]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    updateSlider(e.touches[0].clientX);
  }, [updateSlider]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, [isDragging, updateSlider]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none touch-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      role="slider"
      aria-label={`Before and after comparison for ${title}`}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(0, p - 2));
        if (e.key === "ArrowRight") setSliderPos((p) => Math.min(100, p + 2));
      }}
    >
      {/* After image (full background) */}
      <Image
        src={after}
        alt={`${title} — After`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      {/* Before image (clipped via clip-path) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${title} — Before`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-[0_2px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Before / After labels */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full bg-red-500/80 backdrop-blur-md text-white border border-red-400/30">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full bg-emerald-500/80 backdrop-blur-md text-white border border-emerald-400/30">
          After
        </span>
      </div>

      {/* Drag hint */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isDragging ? 0 : 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
          Drag to compare
        </span>
      </motion.div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   BEFORE/AFTER SECTION
   ═════════════════════════════════════════════ */
export default function BeforeAfter() {
  const sectionRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 overflow-hidden bg-[var(--background)] transition-colors duration-300"
      aria-label="Repair Results"
      id="repairs"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-trust-blue dark:text-sky-400 mb-4"
          >
            Repair Excellence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight"
          >
            Before{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">&</span>
            {" "}After
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            See the transformation — drag the slider to compare equipment
            condition before and after our expert reconditioning.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-trust-blue/40 to-transparent"
          />
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {COMPARISONS.map((comp, i) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <ComparisonSlider
                before={comp.before}
                after={comp.after}
                title={comp.title}
              />
              <div className="mt-5">
                <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-2">
                  {comp.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {comp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
