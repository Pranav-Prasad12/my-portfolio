import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroller } from "@/components/SmoothScroller";

const inter = Inter({ subsets: ["latin"] });

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
      {/* The BODY tag must wrap everything else! */}
      <body className={`${inter.className} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          
          <CustomCursor />
          <ThemeToggle />
          
          <SmoothScroller>
            {children}
          </SmoothScroller>
            
        </ThemeProvider>
      </body>
    </html>
  );
}