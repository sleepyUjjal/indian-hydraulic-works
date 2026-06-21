"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

/* ─────────────────────────────────────────────
   Gauge presets — click to cycle through
   ───────────────────────────────────────────── */
const GAUGE_PRESETS = [
  { psi: 2450, fill: 0.70, needle: 55, label: "Operating", color: "#3b82f6" },
  { psi: 3200, fill: 0.90, needle: 100, label: "Max Load", color: "#f59e0b" },
  { psi: 800, fill: 0.25, needle: -68, label: "Idle", color: "#22c55e" },
  { psi: 1600, fill: 0.50, needle: 0, label: "Standard", color: "#8b5cf6" },
];

/* ─────────────────────────────────────────────
   Interactive Pressure Gauge — SVG
   ───────────────────────────────────────────── */
function PressureGauge({ preset, onCycle }) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.75; // 270° arc

  return (
    <div
      className="relative w-[240px] h-[240px] cursor-pointer select-none"
      onClick={onCycle}
      role="button"
      tabIndex={0}
      aria-label={`Pressure gauge showing ${preset.psi} PSI — click to change mode`}
      onKeyDown={(e) => e.key === "Enter" && onCycle()}
    >
      {/* Outer glow — color matches preset */}
      <motion.div
        className="absolute inset-[-20px] rounded-full blur-2xl"
        style={{ opacity: 0.2 }}
        initial={{ backgroundColor: preset.color }}
        animate={{ backgroundColor: preset.color }}
        transition={{ duration: 0.8 }}
      />

      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl dark:drop-shadow-2xl drop-shadow-lg">
        {/* Track ring */}
        <circle
          cx="100" cy="100" r={radius}
          fill="none"
          stroke="rgba(148,163,184,0.2)"
          strokeWidth="8"
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={0}
          strokeLinecap="round"
          transform="rotate(135 100 100)"
        />

        {/* Animated fill arc */}
        <motion.circle
          cx="100" cy="100" r={radius}
          fill="none"
          stroke={preset.color}
          strokeWidth="8"
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeLinecap="round"
          transform="rotate(135 100 100)"
          initial={{ strokeDashoffset: arcLength }}
          animate={{ strokeDashoffset: arcLength * (1 - preset.fill) }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Tick marks */}
        {[...Array(10)].map((_, i) => {
          const angle = 135 + i * 27;
          const rad = (angle * Math.PI) / 180;
          const x1 = +(100 + 68 * Math.cos(rad)).toFixed(2);
          const y1 = +(100 + 68 * Math.sin(rad)).toFixed(2);
          const x2 = +(100 + 74 * Math.cos(rad)).toFixed(2);
          const y2 = +(100 + 74 * Math.sin(rad)).toFixed(2);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(148,163,184,0.3)" strokeWidth="1.5" strokeLinecap="round"
            />
          );
        })}

        {/* Center hub */}
        <circle cx="100" cy="100" r="24" fill="url(#hubGradient)" className="dark:opacity-100 opacity-90" />
        <circle cx="100" cy="100" r="18" fill="url(#hubInner)" className="dark:opacity-100 opacity-90" />

        {/* Animated needle */}
        <motion.g
          style={{ transformOrigin: "100px 100px", transformBox: "view-box" }}
          animate={{ rotate: preset.needle }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <line
            x1="100" y1="100" x2="100" y2="30"
            stroke="url(#needleGrad)" strokeWidth="3" strokeLinecap="round"
          />
          <line
            x1="100" y1="100" x2="100" y2="32"
            stroke="rgba(0,0,0,0.3)" strokeWidth="4" strokeLinecap="round"
            transform="translate(1, 1)"
          />
        </motion.g>

        {/* Center dot */}
        <circle cx="100" cy="100" r="4" fill="#f8fafc" />

        {/* PSI label */}
        <text x="100" y="140" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600" letterSpacing="0.15em">
          PSI
        </text>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="needleGrad" x1="0" y1="100" x2="0" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <radialGradient id="hubGradient" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <radialGradient id="hubInner" cx="50%" cy="35%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
        </defs>
      </svg>

      {/* Digital readout — animates on preset change */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <div className="bg-deep-navy/80 dark:bg-deep-navy/80 bg-white/80 border dark:border-slate-700/50 border-slate-300/50 rounded px-3 py-0.5 backdrop-blur-sm">
          <motion.span
            key={preset.psi}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-mono font-bold tabular-nums"
            style={{ color: preset.color }}
          >
            {preset.psi.toLocaleString()}
          </motion.span>
        </div>
        <motion.span
          key={preset.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[9px] uppercase tracking-[0.15em] font-semibold"
          style={{ color: preset.color }}
        >
          {preset.label}
        </motion.span>
      </div>

      {/* Click hint ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 dark:border-white/0 border-slate-900/0"
        whileHover={{ borderColor: "rgba(100,116,139,0.2)", scale: 1.04 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Animated Flow Lines — hydraulic fluid paths
   ───────────────────────────────────────────── */
function FlowLines({ color }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
      {/* Top curved line */}
      <motion.path
        d="M 0 180 Q 100 120, 180 140 Q 250 160, 320 140 Q 400 120, 500 180"
        fill="none" stroke={color} strokeWidth="1.5" opacity="0.25"
      />
      {/* Bottom curved line */}
      <motion.path
        d="M 0 350 Q 120 400, 200 370 Q 280 340, 380 380 Q 440 400, 500 360"
        fill="none" stroke={color} strokeWidth="1" opacity="0.2"
      />
      {/* Left vertical pipe */}
      <motion.path
        d="M 80 0 Q 70 150, 90 250 Q 110 350, 80 500"
        fill="none" stroke={color} strokeWidth="1" opacity="0.15"
      />
      {/* Right vertical pipe */}
      <motion.path
        d="M 420 0 Q 430 120, 415 250 Q 400 380, 430 500"
        fill="none" stroke={color} strokeWidth="1" opacity="0.15"
      />

      {/* Pulsing junction nodes */}
      {[
        { cx: 80, cy: 250 }, { cx: 420, cy: 250 },
        { cx: 180, cy: 140 }, { cx: 320, cy: 140 },
        { cx: 200, cy: 370 }, { cx: 380, cy: 380 },
      ].map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx} cy={p.cy} r="3"
          fill={color}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, repeatDelay: 2 }}
        />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Floating Metric Panel — glassmorphic + hover
   ───────────────────────────────────────────── */
function MetricPanel({ label, value, unit, delay, className, accentColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`backdrop-blur-lg rounded-lg px-4 py-3 cursor-pointer transition-colors duration-300
        dark:bg-white/[0.06] dark:border-white/[0.1] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] dark:hover:bg-white/[0.1]
        bg-white/90 border border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.12)] hover:bg-white
        ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent dark:via-white/20 via-slate-300/50 to-transparent rounded-t-lg" />
      <p className="text-[10px] uppercase tracking-[0.12em] dark:text-slate-400 text-steel-grey mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <motion.span
          className="text-xl font-heading font-bold dark:text-white text-deep-navy tabular-nums"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          {value}
        </motion.span>
        <span className="text-xs font-medium" style={{ color: accentColor || "#94a3b8" }}>{unit}</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Stat bar (bottom row)
   ───────────────────────────────────────────── */
const stats = [
  { value: "1980", label: "Established", delay: 0.4 },
  { value: "45+", label: "Years Experience", delay: 0.55 },
  { value: "100%", label: "Quality Service", delay: 0.7 },
  { value: "1000+", label: "Projects Delivered", delay: 0.85 },
];

/* ═════════════════════════════════════════════
   HERO COMPONENT
   ═════════════════════════════════════════════ */
export default function Hero() {
  const heroRef = useRef(null);
  const vizRef = useRef(null);

  /* Gauge state */
  const [presetIndex, setPresetIndex] = useState(0);
  const preset = GAUGE_PRESETS[presetIndex];

  const cyclePreset = useCallback(() => {
    setPresetIndex((prev) => (prev + 1) % GAUGE_PRESETS.length);
  }, []);

  /* Scroll-based parallax */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const vizScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  /* Mouse-tracking 3D tilt for the visualization panel */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, 80]), { stiffness: 150, damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, 80]), { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback((e) => {
    const rect = vizRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
      aria-label="Indian Hydraulic Works – Premium Hydraulic Pumps & Machinery"
    >
      {/* ── Background — Dark ── */}
      <div
        className="absolute inset-0 z-0 dark:opacity-100 opacity-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(
            160deg,
            #080d1a 0%,
            #0F172A 25%,
            #132044 50%,
            #0F172A 75%,
            #080d1a 100%
          )`,
        }}
      />
      {/* ── Background — Light ── */}
      <div
        className="absolute inset-0 z-0 dark:opacity-0 opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(
            160deg,
            #e2e8f0 0%,
            #f1f5f9 25%,
            #f8fafc 50%,
            #f1f5f9 75%,
            #e2e8f0 100%
          )`,
        }}
      />

      {/* Blueprint grid */}
      <div className="absolute inset-0 z-[1] pointer-events-none dark:opacity-[0.025] opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />



      {/* Ambient glow */}
      <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] dark:bg-trust-blue/10 bg-trust-blue/[0.07] rounded-full blur-[160px] pointer-events-none z-[1]" />
      <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] dark:bg-blue-600/8 bg-sky-400/[0.06] rounded-full blur-[140px] pointer-events-none z-[1]" />

      {/* ── Split Layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ─── LEFT: Content ─── */}
          <motion.div style={{ y: contentY }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold tracking-[0.15em] uppercase dark:text-slate-400 text-steel-grey mb-6"
            >
              Indian Hydraulic Works · Faridabad
            </motion.p>

            <motion.h1
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-heading font-bold dark:text-white text-deep-navy leading-[1.1] tracking-tight"
            >
              Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-sky-300 dark:via-blue-400 dark:to-trust-blue from-trust-blue via-blue-600 to-sky-600">
                Hydraulic Pump
              </span>
              <br />
              Repair &amp; Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0.5, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg dark:text-slate-300/90 text-steel-grey max-w-lg leading-relaxed"
            >
              From high-performance hydraulic pumps to complete industrial
              machinery solutions — powering India&apos;s manufacturing backbone
              with engineering you can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Button variant="primary" className="px-8 py-3.5 text-base">
                Get a Free Quote
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3.5 text-base dark:border-white/30 dark:text-white dark:hover:bg-white/10 border-deep-navy/30 text-deep-navy hover:bg-deep-navy/5"
              >
                View Products
              </Button>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 lg:gap-8 mt-12 pt-8 border-t dark:border-white/[0.06] border-slate-300/40"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: s.delay, duration: 0.5 }}
                >
                  <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold dark:text-white text-deep-navy tracking-tight whitespace-nowrap">{s.value}</p>
                  <p className="text-[10px] sm:text-xs dark:text-slate-400 text-steel-grey mt-1 uppercase tracking-[0.15em] font-semibold">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Interactive Visualization ─── */}
          <motion.div
            ref={vizRef}
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
            style={{
              y: vizScrollY,
              rotateX,
              rotateY,
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Mouse-following spotlight glow */}
            <motion.div
              className="absolute w-[250px] h-[250px] rounded-full pointer-events-none z-0"
              style={{
                left: glowX.get() + "%",
                top: glowY.get() + "%",
                x: "-50%",
                y: "-50%",
                background: `radial-gradient(circle, ${preset.color} 0%, transparent 70%)`,
                opacity: 0.15,
                filter: "blur(40px)",
              }}
            />

            {/* Flow lines — color matches preset */}
            <FlowLines color={preset.color} />

            {/* Central gauge — clickable */}
            <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
              <PressureGauge preset={preset} onCycle={cyclePreset} />
            </div>

            {/* Interactive metric panels — hover to enlarge */}
            <MetricPanel
              label="Flow Rate" value="120" unit="L/min"
              delay={1.2} accentColor={preset.color}
              className="absolute top-8 right-4 sm:right-12 z-20"
            />
            <MetricPanel
              label="Temperature" value="42" unit="°C"
              delay={1.5} accentColor={preset.color}
              className="absolute bottom-12 left-4 sm:left-8 z-20"
            />
            <MetricPanel
              label="Efficiency" value="98.6" unit="%"
              delay={1.8} accentColor={preset.color}
              className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 z-20"
            />

            {/* Orbiting rings */}
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full border dark:border-white/[0.04] border-slate-400/[0.08]"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                initial={{ backgroundColor: preset.color }}
                animate={{ backgroundColor: preset.color }}
                style={{ opacity: 0.6 }}
              />
            </motion.div>

            <motion.div
              className="absolute w-[380px] h-[380px] rounded-full border border-dashed dark:border-white/[0.03] border-slate-400/[0.06]"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full"
                initial={{ backgroundColor: preset.color }}
                animate={{ backgroundColor: preset.color }}
                style={{ opacity: 0.4 }}
              />
            </motion.div>

            {/* Click hint — bottom center */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] dark:text-slate-500/60 text-steel-grey/60 uppercase tracking-[0.15em] font-medium z-20 whitespace-nowrap"
            >
              Click gauge to change mode
            </motion.p>
          </motion.div>
        </div>
      </div>


      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-[3]" />
    </section>
  );
}
