"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ═════════════════════════════════════════════
   PRODUCT DETAIL — Client Component
   ═════════════════════════════════════════════ */
export default function ProductDetailClient({ product, prevProduct, nextProduct }) {
  return (
    <main className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      {/* Hero banner */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-black/50 to-black/30" />

        {/* Back button */}
        <div className="absolute top-24 left-6 z-20">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/10 backdrop-blur-md text-white text-sm font-semibold
              border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Products
          </Link>
        </div>

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-[0.15em]
                rounded-full bg-trust-blue/80 backdrop-blur-md text-white border border-trust-blue/40"
            >
              {product.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight"
            >
              {product.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mt-4 text-sm text-white/70"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {product.completionDate}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {product.client}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main content — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-4">
              Product Overview
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              {product.fullDescription}
            </p>

            {/* Highlights */}
            <div className="mt-10">
              <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-5">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl
                      bg-[var(--surface)] border border-[var(--border-color)]"
                    style={{ boxShadow: "var(--card-shadow)" }}
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-snug">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar — specs card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div
              className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] sticky top-24"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-5">
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] shrink-0">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="text-sm font-bold font-mono text-trust-blue dark:text-sky-400 text-right truncate">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border-color)]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Availability
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {product.completionDate}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Market / Industry
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {product.client}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/#contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3
                  rounded-xl bg-trust-blue text-white text-sm font-semibold
                  hover:bg-trust-blue/90 transition-all duration-300
                  shadow-[0_4px_15px_rgba(30,58,138,0.3)]"
              >
                Get a Similar Solution
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Prev/Next navigation */}
        <div className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <div className="flex justify-between items-center">
            {prevProduct ? (
              <Link
                href={prevProduct.path}
                className="group flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-trust-blue transition-colors duration-300"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-0.5">Previous</p>
                  <p className="font-semibold">{prevProduct.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextProduct ? (
              <Link
                href={nextProduct.path}
                className="group flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-trust-blue transition-colors duration-300 text-right"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-0.5">Next</p>
                  <p className="font-semibold">{nextProduct.title}</p>
                </div>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </main>
  );
}
