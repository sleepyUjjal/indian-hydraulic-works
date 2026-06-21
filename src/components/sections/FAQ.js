"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What are the common signs that my hydraulic pump needs repair?",
    answer: "Common signs of hydraulic pump failure include unusual noises (like whining or knocking), fluid leaks, overheating, slow operation, erratic cylinder movements, and a drop in overall system pressure. If you notice any of these, shut down the system to prevent further damage and call for an inspection.",
  },
  {
    question: "Do you offer emergency hydraulic pump repair services?",
    answer: "Yes, we understand that equipment downtime costs money. We offer emergency repair services for industrial hydraulic systems across Faridabad and Delhi NCR. Our technicians are ready to diagnose and fix urgent issues to get your machinery back online quickly.",
  },
  {
    question: "What types of hydraulic pumps do you repair?",
    answer: "We have over 45 years of experience repairing all major types of hydraulic pumps, including gear pumps, vane pumps, radial piston pumps, and axial piston pumps from leading brands like Rexroth, Danfoss, Parker, Eaton, and Vickers.",
  },
  {
    question: "Is it more cost-effective to repair or replace a failing hydraulic pump?",
    answer: "In most cases, repairing or rebuilding a hydraulic pump is significantly more cost-effective than buying a new one—often saving you up to 50-60%. We meticulously inspect the internal components; if the housing and major shafts are intact, a full reconditioning will restore it to OEM specifications.",
  },
  {
    question: "How long does a typical hydraulic pump repair take?",
    answer: "Standard repairs typically take 2 to 4 days, depending on the severity of the damage and parts availability. However, for critical breakdowns, we offer expedited same-day or next-day emergency repair services.",
  },
  {
    question: "Do you test the hydraulic components after repairing them?",
    answer: "Absolutely. Every pump, motor, valve, and cylinder we repair undergoes rigorous testing on our in-house hydraulic test bench. We simulate real-world working loads to ensure optimal pressure, flow, and leak-free performance before it leaves our facility.",
  },
  {
    question: "What areas do you serve for onsite maintenance?",
    answer: "Our primary service center is in Faridabad, Haryana. We provide onsite hydraulic maintenance, troubleshooting, and AMC (Annual Maintenance Contract) services across the entire Delhi NCR region, including Delhi, Noida, Gurgaon, Ghaziabad, and Palwal.",
  },
  {
    question: "Can you design custom hydraulic power packs?",
    answer: "Yes, we specialize in designing and manufacturing custom hydraulic power packs (HPP) tailored to your specific industrial applications. From miniature power packs to heavy-duty industrial units, we handle the complete design, manifold block machining, and assembly.",
  }
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 bg-[var(--background)] relative overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-trust-blue dark:text-sky-400 mb-4"
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight mb-6"
          >
            Hydraulic Repair <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-sky-500">FAQ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--text-secondary)] text-lg"
          >
            Everything you need to know about our hydraulic repair services, maintenance, and turnaround times.
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                    ? "bg-[var(--surface)] border-trust-blue/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                    : "bg-[var(--surface)] border-[var(--border-color)] hover:border-trust-blue/20"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-[var(--text-primary)]">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-trust-blue text-white" : "bg-[var(--surface-hover)] text-[var(--text-secondary)]"
                    }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent mb-6" />
                        <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
