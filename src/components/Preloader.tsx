"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  
  // NEW: State to track when the custom font is ready
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // NEW: Wait for all fonts to load before triggering the text animation
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });

    // Sequence completes at 3.5 seconds
    setTimeout(() => setLoading(false), 3500);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
          {/* THE MASTER CONTAINER */}
          <motion.div
            className="absolute inset-0 bg-[#e8e8e6] flex items-center justify-center"
            initial={{ "--hole-size": "0%" } as any}
            animate={{ "--hole-size": "200%" } as any}
            transition={{
              duration: 2.2,
              delay: 1.2, 
              ease: [0.76, 0, 0.24, 1] 
            }}
            style={{
              WebkitMaskImage: "radial-gradient(circle at center, transparent var(--hole-size), black calc(var(--hole-size) + 1%))",
              maskImage: "radial-gradient(circle at center, transparent var(--hole-size), black calc(var(--hole-size) + 1%))"
            }}
          >
            {/* THE TEXT */}
            <motion.h1
              className="text-[#050505] font-heading text-6xl md:text-[12rem] font-black tracking-tighter lowercase leading-none"
              // Keep it invisible and scaled down initially
              initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              // ONLY animate to full opacity once fontsLoaded is true
              animate={fontsLoaded ? { scale: 1, opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              welcome
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}