export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]">
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated outer ring */}
        <div className="w-16 h-16 border-4 border-[var(--surface-hover)] border-t-trust-blue rounded-full animate-spin" />
        
        {/* Center glowing dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-trust-blue rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
        
        <p className="mt-6 text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
