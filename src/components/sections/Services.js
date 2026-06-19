"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/Button";

/* ─────────────────────────────────────────────
   Service data — IHW core offerings
   ───────────────────────────────────────────── */
const SERVICES = [
  {
    title: "Pump Repairing",
    description:
      "Expert diagnosis and repair of all hydraulic pump types — gear, vane, and piston — restoring factory-grade performance.",
    accent: "#3b82f6",
    icon: (color) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2" opacity="0.2" />
        <circle cx="24" cy="24" r="10" stroke={color} strokeWidth="2.5" strokeDasharray="4 3" />
        <path d="M24 14v20M14 24h20" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill={color} />
      </svg>
    ),
  },
  {
    title: "Motor Repairing",
    description:
      "Complete hydraulic motor overhaul — from seal replacement to shaft reconditioning — with precision torque testing.",
    accent: "#f59e0b",
    icon: (color) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="14" width="28" height="20" rx="3" stroke={color} strokeWidth="2" />
        <path d="M18 14V10M30 14V10" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="2" />
        <path d="M24 18v12M18 24h12" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M38 20h3M38 28h3M7 20h3M7 28h3" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Valve Repairing",
    description:
      "Precision reconditioning of directional, pressure, and flow control valves — ensuring leak-free, reliable operation.",
    accent: "#22c55e",
    icon: (color) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M12 24h8l4-8 4 16 4-8h8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="24" r="3" stroke={color} strokeWidth="1.5" />
        <circle cx="36" cy="24" r="3" stroke={color} strokeWidth="1.5" />
        <path d="M24 8v6M24 34v6" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Hydraulic Cylinders",
    description:
      "Custom manufacturing and repair of single & double-acting hydraulic cylinders for any industrial application.",
    accent: "#8b5cf6",
    icon: (color) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="18" width="36" height="12" rx="6" stroke={color} strokeWidth="2" />
        <rect x="14" y="21" width="20" height="6" rx="3" fill={color} opacity="0.25" />
        <line x1="34" y1="21" x2="34" y2="27" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M38 21h4v6h-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 18v-4h4M10 30v4h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Hydraulic Power Packs",
    description:
      "End-to-end design, assembly, and testing of compact hydraulic power units tailored to your exact specifications.",
    accent: "#ec4899",
    icon: (color) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="10" width="28" height="28" rx="4" stroke={color} strokeWidth="2" />
        <rect x="16" y="16" width="16" height="16" rx="2" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="24" cy="24" r="4" fill={color} opacity="0.3" />
        <circle cx="24" cy="24" r="2" fill={color} />
        <path d="M10 20H6M10 28H6M38 20h4M38 28h4M20 10V6M28 10V6M20 38v4M28 38v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Maintenance & AMC",
    description:
      "Scheduled preventive maintenance and Annual Maintenance Contracts to minimize downtime and extend equipment life.",
    accent: "#14b8a6",
    icon: (color) => (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M28 8l-4 8h8l-4 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="32" r="8" stroke={color} strokeWidth="2" />
        <path d="M24 28v4l3 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 12h-2a2 2 0 00-2 2v22a2 2 0 002 2h2M34 12h2a2 2 0 012 2v22a2 2 0 01-2 2h-2" stroke={color} strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   Service Card — interactive with depth
   ───────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative rounded-2xl cursor-pointer"
    >
      {/* Card body */}
      <div
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8 h-full
          bg-white border border-slate-200/80
          shadow-[0_4px_20px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)]
          group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.12),0_8px_20px_rgba(15,23,42,0.06)]
          transition-shadow duration-500"
      >
        {/* Top highlight line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Accent top border — appears on hover */}
        <motion.div
          className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl origin-left"
          style={{ backgroundColor: service.accent }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Hover glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700"
          style={{ backgroundColor: service.accent }}
        />

        {/* Icon container */}
        <div className="relative mb-6">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center
              border transition-all duration-500
              bg-slate-50 border-slate-200/60
              group-hover:border-transparent
              shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)]
              group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)]"
            style={{
              "--hover-bg": `${service.accent}10`,
            }}
          >
            <div className="transition-transform duration-500 group-hover:scale-110">
              {service.icon(service.accent)}
            </div>
          </div>

          {/* Animated dot indicator */}
          <motion.div
            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: service.accent }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-deep-navy mb-3 tracking-tight group-hover:text-trust-blue transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-steel-grey leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ color: service.accent }}
        >
          <span>Learn more</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Bottom-right decorative corner */}
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="64" cy="64" r="48" stroke={service.accent} strokeWidth="1" />
            <circle cx="64" cy="64" r="32" stroke={service.accent} strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ═════════════════════════════════════════════
   SERVICES SECTION
   ═════════════════════════════════════════════ */
export default function Services() {
  const sectionRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#f8fafc]"
      aria-label="Our Services"
      id="services"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-trust-blue/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-trust-blue mb-4"
          >
            What We Do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-deep-navy tracking-tight"
          >
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-sky-500">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-steel-grey max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive hydraulic solutions — from precision repairs to
            complete system manufacturing — delivered with 45+ years of
            trusted expertise.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-trust-blue/40 to-transparent"
          />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-steel-grey mb-6 text-sm sm:text-base">
            Need a custom hydraulic solution? We&apos;ll engineer it for you.
          </p>
          <Button variant="primary" className="px-10 py-3.5 text-base">
            Request a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
