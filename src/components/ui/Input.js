import { cn } from "@/lib/utils";

export function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg px-4 py-2 text-base transition-all",
        "bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-color)]",
        "focus:outline-none focus:ring-2 focus:ring-trust-blue/50 focus:border-trust-blue/40",
        "placeholder:text-[var(--text-muted)]",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg px-4 py-3 text-base transition-all",
        "bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border-color)]",
        "focus:outline-none focus:ring-2 focus:ring-trust-blue/50 focus:border-trust-blue/40",
        "placeholder:text-[var(--text-muted)] resize-y",
        className
      )}
      {...props}
    />
  );
}
