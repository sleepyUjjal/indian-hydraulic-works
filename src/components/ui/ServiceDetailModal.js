"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

/* ─────────────────────────────────────────────
   Detailed data for each service — maps to service titles
   Uses existing product images from /public/products/
   ───────────────────────────────────────────── */
const SERVICE_DETAILS = {
  "Hydraulic Pump Repairing": {
    heroImage: "/products/hydraulic-pump-v3.webp",
    gallery: [
      { src: "/products/rexroth-hydraulic-pump-v3.webp", label: "Rexroth Hydraulic Pump" },
      { src: "/products/gear-pump-v3.webp", label: "Gear Pump" },
      { src: "/products/hydraulic-axial-piston-pump-v3.webp", label: "Axial Piston Pump" },
    ],
    longDescription:
      "With over 45 years of hands-on expertise, Indian Hydraulic Works provides comprehensive pump repair services for all major hydraulic pump types — including gear pumps, vane pumps, piston pumps, and axial piston pumps. Our technicians diagnose issues such as internal leakage, cavitation damage, seal failure, and bearing wear with precision. Every pump is disassembled, inspected, reconditioned, and tested to restore factory-grade performance before delivery.",
    capabilities: [
      "Complete teardown and inspection",
      "Seal & bearing replacement",
      "Precision honing of pump housings",
      "Flow and pressure testing",
      "Cavitation damage repair",
      "Performance benchmarking",
    ],
    brands: ["Rexroth", "Danfoss", "Eaton", "Parker", "Yuken", "Tokimec"],
    turnaround: "2–5 working days",
    relatedProducts: ["rexroth-hydraulic-pump-pmp1", "gear-pump-pmp5", "hydraulic-axial-piston-pump-pmp3"],
  },
  "Hydraulic Motor Repairing": {
    heroImage: "/products/hydraulic-motor-v3.webp",
    gallery: [
      { src: "/products/intermot-hydraulic-motor-v3.webp", label: "Intermot Motor" },
      { src: "/products/hydraulic-motor-v3.webp", label: "Hydraulic Motor" },
    ],
    longDescription:
      "Our hydraulic motor repair service covers radial piston, axial piston, gear, and orbital motors from all leading manufacturers. We handle everything from minor seal replacements to full shaft reconditioning and internal component overhaul. Each motor undergoes rigorous torque and speed testing on our in-house test bench to ensure reliable, vibration-free operation before returning to service.",
    capabilities: [
      "Shaft reconditioning & re-machining",
      "Internal gear and rotor replacement",
      "Full seal kit overhaul",
      "Torque and speed bench testing",
      "Vibration analysis",
      "Complete motor rebuild",
    ],
    brands: ["Intermot", "Rexroth", "Eaton", "Danfoss", "Parker", "Staffa"],
    turnaround: "3–7 working days",
    relatedProducts: ["hydraulic-motor-mtr1", "intermot-hydraulic-motor-mtr2"],
  },
  "Hydraulic Valve Repairing": {
    heroImage: "/products/hydraulic-valve-v3.webp",
    gallery: [
      { src: "/products/hydraulic-valve-v3.webp", label: "Directional Control Valve" },
      { src: "/products/spare-parts-v3.webp", label: "Valve Spare Parts" },
    ],
    longDescription:
      "Hydraulic valves are the brain of any fluid power system. Our valve repair service covers directional control valves, pressure relief valves, flow control valves, and proportional/servo valves. We use precision lapping, ultrasonic cleaning, and advanced leak-testing to restore every valve to OEM-grade tightness and responsiveness. Faulty solenoids, worn spools, and damaged seats are all addressed in our workshop.",
    capabilities: [
      "Spool and seat reconditioning",
      "Solenoid testing & replacement",
      "Precision lapping of valve faces",
      "Ultrasonic cleaning",
      "Internal & external leak testing",
      "Proportional valve calibration",
    ],
    brands: ["Rexroth", "Yuken", "Parker", "Vickers", "Moog", "Continental"],
    turnaround: "2–4 working days",
    relatedProducts: ["hydraulic-valve-val1", "hydraulic-spare-parts-spr1"],
  },
  "Hydraulic Cylinders": {
    heroImage: "/products/hydraulic-cylinder-v3.webp",
    gallery: [
      { src: "/products/hydraulic-cylinder-v3.webp", label: "Hydraulic Cylinder" },
      { src: "/products/spare-parts-v3.webp", label: "Cylinder Spare Parts" },
    ],
    longDescription:
      "We manufacture and repair hydraulic cylinders for every industrial application — from compact single-acting units to heavy-duty, long-stroke double-acting cylinders. Our workshop handles bore re-honing, rod re-chroming, piston machining, and complete cylinder rebuilds using EN24 high-tensile alloy steel. Each cylinder is hydro-tested at 1.5x working pressure to guarantee zero-leak performance under the most demanding conditions.",
    capabilities: [
      "Bore honing and re-sleeving",
      "Rod hard-chrome plating",
      "Piston and gland machining",
      "Custom cylinder manufacturing",
      "Hydrostatic pressure testing",
      "Seal and O-ring replacement",
    ],
    brands: ["Custom Built", "OEM Specifications", "All Makes & Models"],
    turnaround: "3–7 working days",
    relatedProducts: ["hydraulic-cylinder-cyl1"],
  },
  "Hydraulic Power Packs": {
    heroImage: "/products/hydrulic-power-pack-v3.webp",
    gallery: [
      { src: "/products/hydrulic-power-pack-v3.webp", label: "Standard Power Pack" },
      { src: "/products/mini-hydraulic-power-pack-v3.webp", label: "Mini Power Pack" },
    ],
    longDescription:
      "Indian Hydraulic Works designs, assembles, and tests complete hydraulic power packs tailored to your exact specifications. From reservoir sizing and pump selection to motor integration and manifold design — we handle every aspect in-house. Our power packs come pre-tested and ready for plug-and-play deployment. We also repair and retrofit existing units with upgraded components for better efficiency and longer service life.",
    capabilities: [
      "Custom design & engineering",
      "Motor and pump selection",
      "Reservoir fabrication",
      "Manifold block design",
      "Complete system testing",
      "Retrofit and upgrade services",
    ],
    brands: ["Custom Built", "Rexroth", "Yuken", "Parker", "Eaton"],
    turnaround: "5–10 working days",
    relatedProducts: ["hydraulic-power-pack-pwp1", "mini-hydraulic-power-pack-pwp2"],
  },
  "Maintenance & AMC": {
    heroImage: "/products/spare-parts-v3.webp",
    gallery: [
      { src: "/products/spare-parts-v3.webp", label: "Hydraulic Spare Parts" },
      { src: "/products/hydraulic-valve-v3.webp", label: "Valve Maintenance" },
      { src: "/products/hydraulic-pump-v3.webp", label: "Pump Servicing" },
    ],
    longDescription:
      "Prevent costly breakdowns with our scheduled preventive maintenance programs and Annual Maintenance Contracts (AMC). Our field service team performs regular inspections, fluid analysis, filter changes, pressure checks, and component condition monitoring to keep your hydraulic systems running at peak efficiency. AMC clients receive priority service, discounted repairs, and dedicated technical support.",
    capabilities: [
      "Scheduled preventive maintenance",
      "Hydraulic fluid analysis & replacement",
      "Filter and strainer servicing",
      "Pressure and flow diagnostics",
      "Condition monitoring reports",
      "Emergency breakdown support",
    ],
    brands: ["All Makes & Models", "Multi-brand Support"],
    turnaround: "Ongoing / As Scheduled",
    relatedProducts: ["hydraulic-spare-parts-spr1"],
  },
};

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  const details = SERVICE_DETAILS[service?.title];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!service || !details) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl
              bg-[var(--background)] border border-[var(--border-color)]
              shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 dark:bg-white/10
                backdrop-blur-md flex items-center justify-center text-white
                hover:bg-black/60 dark:hover:bg-white/20 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero image section */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-t-2xl">
              <Image
                src={details.heroImage}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                  style={{ backgroundColor: service.accent + "cc" }}
                >
                  Core Service
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                  {service.title}
                </h2>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-3">
                  About This Service
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {details.longDescription}
                </p>
              </div>

              {/* Two column: Capabilities + Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Capabilities */}
                <div>
                  <h3 className="text-base font-heading font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.accent }} />
                    What We Do
                  </h3>
                  <ul className="space-y-2.5">
                    {details.capabilities.map((cap, i) => (
                      <motion.li
                        key={cap}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                      >
                        <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: service.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {cap}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Info cards */}
                <div className="space-y-4">
                  {/* Brands */}
                  <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Brands We Service</h4>
                    <div className="flex flex-wrap gap-2">
                      {details.brands.map((brand) => (
                        <span
                          key={brand}
                          className="px-2.5 py-1 rounded-md text-xs font-medium
                            bg-[var(--surface-hover)] text-[var(--text-secondary)]
                            border border-[var(--border-color)]"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Turnaround */}
                  <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">Typical Turnaround</h4>
                    <p className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                      <svg className="w-4 h-4 shrink-0" style={{ color: service.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {details.turnaround}
                    </p>
                  </div>

                  {/* Quality Guarantee */}
                  <div className="p-4 rounded-xl border border-[var(--border-color)]" style={{ backgroundColor: service.accent + "08" }}>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">Quality Guarantee</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Every job is backed by our quality assurance process — including pressure testing, performance benchmarking, and a satisfaction guarantee.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              {details.gallery.length > 0 && (
                <div>
                  <h3 className="text-base font-heading font-bold text-[var(--text-primary)] mb-4">
                    Related Equipment
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {details.gallery.map((item, i) => (
                      <motion.div
                        key={item.src}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border-color)] group"
                      >
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 300px"
                        />
                        {/* Label overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 pt-8">
                          <p className="text-xs sm:text-sm font-semibold text-white truncate">
                            {item.label}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[var(--border-color)]">
                <Link
                  href="/#contact"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl
                    text-sm font-semibold text-white
                    bg-gradient-to-r from-trust-blue to-sky-600
                    hover:from-trust-blue/90 hover:to-sky-500
                    shadow-lg shadow-trust-blue/20
                    transition-all duration-300"
                >
                  Get a Quote for {service.title}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                    text-sm font-semibold text-[var(--text-primary)]
                    bg-[var(--surface)] border border-[var(--border-color)]
                    hover:bg-[var(--surface-hover)]
                    transition-all duration-300"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
