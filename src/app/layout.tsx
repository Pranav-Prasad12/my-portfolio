import { GlobalBackground } from "@/components/GlobalBackground";
import type { Metadata } from "next";
import { Inter, Orbitron, Space_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroller } from "@/components/SmoothScroller";

// 1. Configure the Body Font
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

// 2. Configure the Header Font
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
});

// 3. Configure the Monospace Accent Font
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pranav Prasad | Portfolio",
  description: "Computer Science & Engineering Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${orbitron.variable} ${spaceMono.variable} font-sans antialiased text-slate-900 dark:text-white transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange>
          
          <CustomCursor />
          <ThemeToggle />
          <GlobalBackground />
          <SmoothScroller>
            {children}
          </SmoothScroller>
              
        </ThemeProvider>
      </body>
    </html>
  );
}