"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center pointer-events-none"
    >
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase"
      >
        Pranav.
      </motion.h1>
    </motion.div>
  );
};