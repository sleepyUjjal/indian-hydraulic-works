"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORIES, getProductPath } from "@/lib/productData";

/* ─────────────────────────────────────────────
   Product Card
   ───────────────────────────────────────────── */
function ProductCard({ product, index, shouldAnimate }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        delay: shouldAnimate ? index * 0.15 : 0
      }}
      className="group relative flex flex-col h-full"
    >
      <Link href={getProductPath(product)} className="flex flex-col h-full">
        <div
          className="relative overflow-hidden rounded-2xl flex flex-col h-full
            bg-[var(--surface)] border border-[var(--border-color)]
            transition-all duration-500"
          style={{ boxShadow: "var(--card-shadow)" }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--card-shadow-hover)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--card-shadow)"; }}
        >
          {/* Image */}
          <div className="relative overflow-hidden h-[260px] shrink-0 bg-white">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Specs overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-3">
              {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                <div
                  key={key}
                  className="flex-1 min-w-0 bg-white/15 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/20"
                >
                  <p className="text-[9px] uppercase tracking-wider text-white/70 mb-0.5 truncate">{key}</p>
                  <p className="text-sm font-bold text-white font-mono truncate">{val}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Content */}
          <div className="p-5 flex flex-col grow">
            <h3 className="text-base font-heading font-bold text-[var(--text-primary)] mb-2 group-hover:text-trust-blue transition-colors duration-300 line-clamp-1">
              {product.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
              {product.description}
            </p>

            {/* View product link */}
            <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-trust-blue dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View Details</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ═════════════════════════════════════════════
   PRODUCTS SECTION
   ═════════════════════════════════════════════ */
export default function Products() {
  const sectionRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [animatedCount, setAnimatedCount] = useState(3);

  // Determine how many cards are in the top row based on viewport width
  // Use useEffect to avoid SSR hydration mismatch
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setAnimatedCount(1); // Mobile: 1 col
      else if (window.innerWidth < 1024) setAnimatedCount(2); // Tablet: 2 cols
      else setAnimatedCount(3); // Desktop: 3 cols
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden bg-[var(--background)] transition-colors duration-300"
      aria-label="Our Products"
      id="products"
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
            Our Catalog
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-sky-500 dark:from-sky-400 dark:to-blue-400">
              Products
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            A showcase of our extensive range of hydraulic products — from reliable pumps
            and motors to custom-built power packs and cylinders.
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

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} shouldAnimate={i < animatedCount} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
