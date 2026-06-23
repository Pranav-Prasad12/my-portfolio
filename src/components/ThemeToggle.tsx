"use client";
import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-8 right-8 md:top-10 md:right-10 z-[100000] flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-200/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-400/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-black dark:text-white"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}