"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Ramesh Sharma",
    company: "Sharma Engineering Works",
    text: "Indian Hydraulic Works provided exceptional service for our heavy-duty press cylinder repair. Their precision and quick turnaround saved us from days of downtime.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    company: "Singh Manufacturing",
    text: "We have been sourcing hydraulic pumps from IHW for the past 5 years. Their products are rugged, reliable, and their after-sales support is unmatched in the industry.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    company: "Kumar Earth Movers",
    text: "The hydraulic motor rebuild they did for our excavator was flawless. It performs just like a brand new OEM part but at a fraction of the cost.",
    rating: 5
  },
  {
    name: "Amit Patel",
    company: "Patel Automations",
    text: "Their custom hydraulic power packs are perfectly designed. The team understands exact pressure requirements and delivers a plug-and-play solution.",
    rating: 5
  }
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    };
  }
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 4 items. We use a wrapping index.
  const index = ((page % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length;
  const card = TESTIMONIALS[index];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[var(--background)]">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-trust-blue/[0.03] dark:bg-trust-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-trust-blue dark:text-sky-400 mb-4"
          >
            Client Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight mb-4"
          >
            What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-sky-500">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what our long-term partners and industrial clients have to say about our work.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto h-[350px] sm:h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full px-4 sm:px-16"
            >
              <div className="bg-[var(--surface)] border border-[var(--border-color)] p-8 sm:p-12 rounded-3xl relative" style={{ boxShadow: "var(--card-shadow)" }}>
                {/* Quote Icon */}
                <div className="absolute -top-6 -left-2 sm:left-4 text-trust-blue/15 dark:text-trust-blue/10">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex gap-1 text-amber-400 mb-6">
                    {[...Array(card.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[var(--text-secondary)] italic text-lg sm:text-xl leading-relaxed mb-8">
                    &quot;{card.text}&quot;
                  </p>
                  <h4 className="font-heading font-bold text-[var(--text-primary)] text-lg mb-1">{card.name}</h4>
                  <p className="text-sm text-[var(--text-muted)] uppercase tracking-widest font-semibold">{card.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right Buttons */}
          <button 
            onClick={() => paginate(-1)}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-trust-blue hover:border-trust-blue transition-all focus:outline-none"
            style={{ boxShadow: "var(--card-shadow)" }}
            aria-label="Previous Testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => paginate(1)}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-trust-blue hover:border-trust-blue transition-all focus:outline-none"
            style={{ boxShadow: "var(--card-shadow)" }}
            aria-label="Next Testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const newDirection = i > index ? 1 : -1;
                setPage([page + (i - index), newDirection]);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                i === index ? "w-8 bg-trust-blue" : "bg-[var(--border-color)] hover:bg-[var(--text-muted)]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
