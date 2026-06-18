"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({ children, className, interactive = false, ...props }) {
  const Component = interactive ? motion.div : "div";
  const interactiveProps = interactive ? {
    whileHover: { y: -5 },
    transition: { type: "spring", stiffness: 300, damping: 20 }
  } : {};

  return (
    <Component
      className={cn(
        "relative rounded-xl bg-metallic-light p-6 shadow-3d border border-white/50 backdrop-blur-sm",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/50 before:to-transparent before:rounded-xl before:pointer-events-none",
        interactive && "hover:shadow-3d cursor-pointer", // Assuming we want it to pop more on hover, but we are moving it up with Framer
        className
      )}
      {...interactiveProps}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
}
