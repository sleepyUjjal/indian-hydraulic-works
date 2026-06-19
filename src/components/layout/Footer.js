export function Footer() {
  return (
    <footer className="bg-[var(--surface)] dark:bg-deep-navy text-[var(--text-primary)] pt-16 pb-8 border-t border-[var(--border-color)] relative overflow-hidden transition-colors duration-300">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-trust-blue rounded-full blur-[120px] opacity-10 dark:opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-navy rounded-sm flex items-center justify-center text-white font-heading font-bold shadow-pressed">
                IHW
              </div>
              <span className="font-heading font-bold text-xl">Indian Hydraulic Works</span>
            </div>
            <p className="text-[var(--text-secondary)] max-w-sm mt-4 leading-relaxed text-sm">
              Indian Hydraulic Works, established in 1980, is a trusted name in hydraulic repair and manufacturing. We specialize in Pump, Motor &amp; Valve Repairing, along with Hydraulic Cylinders and Hydraulic Power Packs. With decades of experience, we are committed to delivering reliable solutions, quality workmanship, and timely service.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
              <li><a href="#services" className="hover:text-trust-blue transition-colors">Equipment Repair</a></li>
              <li><a href="#services" className="hover:text-trust-blue transition-colors">System Design</a></li>
              <li><a href="#services" className="hover:text-trust-blue transition-colors">Maintenance</a></li>
              <li><a href="/projects" className="hover:text-trust-blue transition-colors">Our Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
              <li>+91 98XXX XXXXX</li>
              <li>info@hydraulicworks.com</li>
              <li>Faridabad, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between text-sm text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Indian Hydraulic Works. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
