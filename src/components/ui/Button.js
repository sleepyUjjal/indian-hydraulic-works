"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({ 
  children, 
  variant = "primary", 
  className, 
  ...props 
}) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all overflow-hidden focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-navy text-white shadow-3d hover:shadow-pressed",
    secondary: "bg-metallic-light text-slate-900 shadow-3d hover:shadow-pressed border border-steel-light/30",
    outline: "bg-transparent text-trust-blue border-2 border-trust-blue hover:bg-trust-blue/5",
  };

  const isLink = Boolean(props.href);
  const MotionComponent = isLink ? motion.a : motion.button;

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97, y: 2 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* Optional shine effect for primary button */}
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:animate-shimmer" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </MotionComponent>
  );
}
