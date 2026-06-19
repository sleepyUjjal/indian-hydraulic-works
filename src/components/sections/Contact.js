"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

/* ─────────────────────────────────────────────
   Trust badges data
   ───────────────────────────────────────────── */
const TRUST_BADGES = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "ISO Certified",
    description: "Quality management systems adhering to international standards",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "45+ Years",
    description: "Decades of trusted hydraulic engineering excellence since 1980",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "1000+ Clients",
    description: "Trusted by leading manufacturers across India",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "100% Warranty",
    description: "Every repair and build backed by our quality guarantee",
  },
];

/* ─────────────────────────────────────────────
   Contact Info items
   ───────────────────────────────────────────── */
const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Phone",
    value: "+91 98XXX XXXXX",
    href: "tel:+9198XXXXXXXX",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 7l-8.97 5.7a2 2 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Email",
    value: "info@hydraulicworks.com",
    href: "mailto:info@hydraulicworks.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Location",
    value: "Faridabad, Haryana, India",
    href: "https://maps.google.com/?q=Faridabad+Haryana",
  },
];

/* ═════════════════════════════════════════════
   CONTACT SECTION
   ═════════════════════════════════════════════ */
export default function Contact() {
  const sectionRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden bg-[var(--background)] transition-colors duration-300"
      aria-label="Contact Us"
      id="contact"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-trust-blue/[0.03] dark:bg-trust-blue/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-sky-400/[0.03] dark:bg-sky-400/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-trust-blue dark:text-sky-400 mb-4"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-primary)] tracking-tight"
          >
            Let&apos;s Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-blue to-sky-500 dark:from-sky-400 dark:to-blue-400">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Have a hydraulic challenge? We&apos;d love to hear about it.
            Get a free consultation and quote from our expert team.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-trust-blue/40 to-transparent"
          />
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {TRUST_BADGES.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative text-center p-5 sm:p-6 rounded-2xl
                bg-[var(--surface)] border border-[var(--border-color)] transition-all duration-300
                hover:border-trust-blue/30"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3
                bg-trust-blue/10 dark:bg-trust-blue/15 text-trust-blue dark:text-sky-400
                group-hover:bg-trust-blue/20 transition-colors duration-300">
                {badge.icon}
              </div>
              <h3 className="text-sm font-heading font-bold text-[var(--text-primary)] mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed hidden sm:block">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact form — spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div
              className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-6">
                Request a Free Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2">
                      Full Name
                    </label>
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-[var(--text-secondary)] mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your hydraulic requirements — equipment type, issue, or custom build specs..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-8 py-3.5 text-base"
                  >
                    {submitted ? "✓ Request Sent!" : "Send Request"}
                  </Button>
                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-emerald-500 font-semibold"
                    >
                      We&apos;ll get back to you within 24 hours.
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact info — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact details card */}
            <div
              className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                {CONTACT_INFO.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4 p-3 -mx-3 rounded-xl
                      hover:bg-[var(--surface-hover)] transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                      bg-trust-blue/10 dark:bg-trust-blue/15 text-trust-blue dark:text-sky-400
                      group-hover:bg-trust-blue/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-trust-blue transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Working hours card */}
            <div
              className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <h3 className="text-lg font-heading font-bold text-[var(--text-primary)] mb-4">
                Working Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[var(--text-secondary)]">Monday – Saturday</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM – 7:00 PM</span>
                </div>
                <div className="h-px bg-[var(--border-color)]" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[var(--text-secondary)]">Sunday</span>
                  <span className="text-sm font-semibold text-red-400">Closed</span>
                </div>
              </div>

              {/* Emergency note */}
              <div className="mt-5 p-3 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20">
                <p className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
                  🔧 Emergency repairs available 24/7 — call our hotline for urgent service.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
