export function Footer() {
  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8 border-t border-trust-blue/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-trust-blue rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center text-deep-navy font-heading font-bold shadow-pressed">
                IHW
              </div>
              <span className="font-heading font-bold text-xl">Indian Hydraulic Works</span>
            </div>
            <p className="text-slate-400 max-w-sm mt-4 leading-relaxed">
              Indian Hydraulic Works, established in 1980, is a trusted name in hydraulic repair and manufacturing. We specialize in Pump, Motor & Valve Repairing, along with Hydraulic Cylinders and Hydraulic Power Packs. With decades of experience, we are committed to delivering reliable solutions, quality workmanship, and timely service.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-trust-blue transition-colors">Equipment Repair</a></li>
              <li><a href="#" className="hover:text-trust-blue transition-colors">System Design</a></li>
              <li><a href="#" className="hover:text-trust-blue transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>1800-HYD-WORK</li>
              <li>info@hydraulicworks.com</li>
              <li>Faridabad, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Indian Hydraulic Works. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
