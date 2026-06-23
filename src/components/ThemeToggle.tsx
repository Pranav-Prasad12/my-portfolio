"use client";
import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // DIAGNOSTIC CHECK: If it gets stuck loading, show a massive red box
  if (!mounted) {
    return (
      <button className="fixed top-20 right-10 z-[999999] px-6 py-3 bg-red-600 text-white font-bold border-4 border-white">
        LOADING THEME...
      </button>
    );
  }

  // DIAGNOSTIC CHECK: If it loads successfully, show a massive green box
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-20 right-10 z-[999999] px-6 py-3 bg-green-500 text-black font-bold border-4 border-white shadow-2xl"
    >
      {theme === "dark" ? "CLICK FOR LIGHT MODE" : "CLICK FOR DARK MODE"}
    </button>
  );
}