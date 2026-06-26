"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
            // CHANGED: The background is now a sleek, warm off-white (#e8e8e6)
            className="absolute inset-0 bg-[#e8e8e6] flex items-center justify-center"
            initial={{ "--hole-size": "0%" } as any}
            animate={{ "--hole-size": "200%" } as any}
            transition={{
              duration: 2.2,
              delay: 1.2, 
              ease: [0.76, 0, 0.24, 1] 
            }}
            style={{
              // Note: We leave 'black' here because in CSS masks, 'black' just means "100% visible", it doesn't change the actual color!
              WebkitMaskImage: "radial-gradient(circle at center, transparent var(--hole-size), black calc(var(--hole-size) + 1%))",
              maskImage: "radial-gradient(circle at center, transparent var(--hole-size), black calc(var(--hole-size) + 1%))"
            }}
          >
            {/* THE TEXT */}
         <motion.h1
  // Updated to use 'font-heading' and the larger font size
  className="text-[#050505] font-heading text-6xl md:text-[12rem] font-black tracking-tighter lowercase leading-none"
  initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
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