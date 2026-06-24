"use client";
import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-700 bg-[#eaf5f0] dark:bg-[#1a1c23]">
      
      {/* BASE BACKGROUND: Soft Mint (#eaf5f0) in Light Mode -> Rich Charcoal (#1a1c23) in Dark Mode */}

      {/* Blob 1: Top Left */}
      <motion.div
        className="absolute top-0 left-0 w-[60vw] h-[60vw] rounded-full filter blur-[100px] 
                   mix-blend-normal dark:mix-blend-screen opacity-70 dark:opacity-40 transition-colors duration-700
                   /* COLOR: Pale Blue in Light Mode -> Bright Indigo in Dark Mode */
                   bg-[radial-gradient(circle,rgba(186,230,253,0.8)_0%,transparent_70%)]
                   dark:bg-[radial-gradient(circle,rgba(99,102,241,0.5)_0%,transparent_70%)]"
        animate={{
          x: ["-20%", "20%", "-10%", "-20%"],
          y: ["-20%", "10%", "20%", "-20%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2: Bottom Right */}
      <motion.div
        className="absolute bottom-0 right-0 w-[70vw] h-[70vw] rounded-full filter blur-[120px] 
                   mix-blend-normal dark:mix-blend-screen opacity-60 dark:opacity-40 transition-colors duration-700
                   /* COLOR: Soft Minty Blue in Light Mode -> Deep Indigo in Dark Mode */
                   bg-[radial-gradient(circle,rgba(167,243,208,0.6)_0%,transparent_70%)]
                   dark:bg-[radial-gradient(circle,rgba(67,56,202,0.5)_0%,transparent_70%)]"
        animate={{
          x: ["20%", "-20%", "10%", "20%"],
          y: ["20%", "-10%", "-20%", "20%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Edge Vignette: Soft white glow for Light Mode -> Deep charcoal shadow for Dark Mode */}
      <div className="absolute inset-0 transition-shadow duration-700 
                      shadow-[inset_0_0_150px_rgba(255,255,255,0.7)] 
                      dark:shadow-[inset_0_0_200px_rgba(20,22,28,0.9)]" />
    </div>
  );
}