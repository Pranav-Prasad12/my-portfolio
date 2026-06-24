"use client";
import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden transition-colors duration-700 bg-[#F1F5F9] dark:bg-[#1E293B]">
      
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#CBD5E1] dark:bg-[#334155] blur-[120px] opacity-70 transition-colors duration-700"
      />

      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#CBD5E1] dark:bg-[#334155] blur-[140px] opacity-70 transition-colors duration-700"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-[#CBD5E1] dark:bg-[#334155] blur-[100px] transition-colors duration-700"
      />

      {/* Replaced the heavy glass overlay with a subtle blend layer for texture */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 mix-blend-overlay pointer-events-none" />
    </div>
  );
}