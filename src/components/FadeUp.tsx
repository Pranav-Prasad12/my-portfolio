"use client";
import { motion } from "framer-motion";
import React from "react";

// Defines the properties this component accepts
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string; // Optional className to allow custom styling
}

export const FadeUp = ({ 
  children, 
  delay = 0, 
  className 
}: FadeUpProps) => {
  return (
    <motion.div
      className={className} 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
    >
      {children}
    </motion.div>
  );
};