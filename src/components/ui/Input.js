import { cn } from "@/lib/utils";

export function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg bg-slate-200/50 px-4 py-2 text-base text-slate-900",
        "shadow-inset-deep border border-steel-light/30",
        "focus:outline-none focus:ring-2 focus:ring-trust-blue/50 focus:bg-white transition-all",
        "placeholder:text-slate-500",
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
        "flex min-h-[120px] w-full rounded-lg bg-slate-200/50 px-4 py-3 text-base text-slate-900",
        "shadow-inset-deep border border-steel-light/30",
        "focus:outline-none focus:ring-2 focus:ring-trust-blue/50 focus:bg-white transition-all",
        "placeholder:text-slate-500 resize-y",
        className
      )}
      {...props}
    />
  );
}
