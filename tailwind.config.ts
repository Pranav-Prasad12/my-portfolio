import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <-- The magic word that connects to your button!
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sets Inter as the default text font (font-sans)
        sans: ["var(--font-inter)"],
        // Sets Orbitron for specific headings (font-heading)
        heading: ["var(--font-orbitron)"],
        // Sets Space Mono for code snippets and tags (font-mono)
        mono: ["var(--font-space-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;