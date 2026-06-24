"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.8 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] pointer-events-none flex items-center justify-center rounded-full
                 bg-transparent border border-black/20 dark:border-white/20 transition-colors duration-500
                 backdrop-filter backdrop-blur-[3px] backdrop-contrast-110 backdrop-brightness-110
                 shadow-[inset_0_4px_10px_rgba(255,255,255,0.3),inset_0_-2px_6px_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.3)]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%", 
        translateY: "-50%",
        // Reduced size from 72 to 40 for a sleek, highly usable pointer!
        width: 40, 
        height: 40,
      }}
    />
  );
}