"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // FORCE VISIBILITY: If it is thinking, show a red box!
  if (!mounted) {
    return (
      <div className="fixed top-8 right-8 z-[999999] px-4 py-2 bg-red-600 text-white font-bold rounded-full border-2 border-white shadow-xl pointer-events-none">
        Loading Button...
      </div>
    );
  }

  // FORCE VISIBILITY: When ready, show a highly visible white/black pill
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-8 right-8 z-[999999] px-6 py-3 rounded-full bg-white text-black font-extrabold tracking-widest uppercase text-xs md:text-sm border-2 border-neutral-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}