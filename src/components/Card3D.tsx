"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 

interface CardProps {
  category: string;
  title: string;
  description: string;
  imageSrc?: string;
}

export function LiquidBubbleCard({ category, title, description, imageSrc }: CardProps) {
  return (
    <motion.div
     className="group relative p-6 bg-white/5 dark:bg-black/10 border border-white/10 dark:border-white/20 backdrop-blur-md overflow-hidden flex flex-col min-h-[280px]"
      style={{ borderRadius: "24px" }}
      whileHover={{
        scale: 1.03,
        borderRadius: ["24px", "35px 20px 30px 25px", "20px 35px 25px 30px", "24px"],
      }}
      whileTap={{ scale: 0.95, borderRadius: "40px" }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 10, mass: 0.8 },
        borderRadius: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
      }}
    >
      {/* 1. THE HIDDEN BACKGROUND IMAGE */}
      {imageSrc && (
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10 transition-colors duration-500" />
          <Image 
            src={imageSrc} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* THE CIRCULAR GLARE HAS BEEN COMPLETELY REMOVED FROM HERE */}

      {/* 2. THE CARD CONTENT */}
      <div className="relative z-20 flex flex-col h-full">
        <div className="mb-4">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full
                           bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20
                           shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.1)]
                           text-black dark:text-white transition-colors duration-500 group-hover:text-white group-hover:border-white/30">
            {category}
          </span>
        </div>

       {/* SOLID TEXT TITLE: Readable, bold, and pops cleanly over the image */}
        <h3 className="text-2xl font-bold tracking-wide mb-3 text-slate-900 dark:text-white group-hover:text-white group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-all duration-500">
          {title}
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4 group-hover:text-slate-200 transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
}