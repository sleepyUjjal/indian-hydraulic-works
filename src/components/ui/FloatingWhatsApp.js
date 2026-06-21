"use client";

import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  // Use NEXT_PUBLIC_ prefix so it's accessible on the client side
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917942651152"; 
  const defaultMessage = "Hi, I have an inquiry about hydraulic services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-[0_8px_25px_rgba(37,211,102,0.5)] border border-[#25D366]/50 cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 12px 30px rgba(37,211,102,0.6)" 
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
    >
      {/* Skeuomorphic Highlight */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      
      {/* Notification Dot */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[var(--background)]"></span>
      </span>

      <svg 
        className="w-8 h-8 sm:w-9 sm:h-9 text-white relative z-10" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.233-1.337a9.994 9.994 0 004.779 1.217h.004c5.502 0 9.985-4.48 9.989-9.988C22.001 6.386 17.513 2 12.012 2zM12.012 20.005h-.002a8.318 8.318 0 01-4.249-1.156l-.304-.18-3.159.828.843-3.08-.198-.314a8.275 8.275 0 01-1.272-4.428c.002-4.57 3.723-8.289 8.298-8.289 4.57 0 8.291 3.722 8.293 8.295-.002 4.572-3.723 8.285-8.289 8.285zm4.568-6.223c-.25-.125-1.482-.731-1.713-.815-.23-.083-.398-.125-.566.125-.168.25-.648.815-.795.983-.146.168-.293.188-.543.063-.25-.125-1.057-.39-2.014-1.246-.745-.665-1.248-1.487-1.395-1.737-.146-.25-.015-.386.11-.511.113-.113.25-.292.375-.438.125-.146.168-.25.25-.417.083-.168.042-.314-.021-.438-.063-.125-.566-1.365-.776-1.87-.203-.493-.41-.426-.566-.434-.146-.007-.314-.007-.482-.007s-.44.063-.67.314c-.23.25-.88 8.86-.88 2.096s.902 2.385 1.027 2.552c.125.168 1.74 2.656 4.215 3.723 2.053.882 2.66.711 3.12.595.534-.135 1.482-.605 1.692-1.188.21-.583.21-1.085.146-1.188-.063-.104-.23-.168-.48-.292z"/>
      </svg>
    </motion.a>
  );
}
