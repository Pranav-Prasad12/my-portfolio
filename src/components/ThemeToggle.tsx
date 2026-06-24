"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting until the component mounts
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-6 right-6 z-[90000] flex items-center w-20 h-10 rounded-full p-1 cursor-none
                 bg-transparent backdrop-blur-md border border-black/10 dark:border-white/20
                 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_2px_8px_rgba(255,255,255,0.05)]
                 transition-colors duration-500"
    >
      {/* THE THICK FROSTED GLASS SLIDER (Matches the video's physics) */}
      <motion.div
        className="absolute top-1 bottom-1 w-8 rounded-full
                   /* Frosted distortion effect */
                   bg-black/5 dark:bg-white/10 backdrop-blur-xl
                   /* Heavy inner light glare to make it look like a 3D glass marble */
                   shadow-[inset_0_2px_6px_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.4),0_4px_8px_rgba(0,0,0,0.3)]"
        initial={false}
        animate={{
          x: isDark ? 40 : 0, // Slides precisely to the right side in dark mode
        }}
        transition={{
          // Butter-smooth spring physics, just like the Webflow example
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 1,
        }}
      />

      {/* THE ICONS (Sun and Moon) */}
      <div className="relative w-full flex justify-between px-[10px] text-slate-800 dark:text-white pointer-events-none">
        {/* Sun Icon (Light Mode) */}
        <svg className="w-[18px] h-[18px] z-10 transition-opacity duration-300" style={{ opacity: isDark ? 0.3 : 1 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        
        {/* Moon Icon (Dark Mode) */}
        <svg className="w-[18px] h-[18px] z-10 transition-opacity duration-300" style={{ opacity: isDark ? 1 : 0.3 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    </button>
  );
}