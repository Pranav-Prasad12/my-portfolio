import { Preloader } from "@/components/Preloader";
import { GlobalBackground } from "@/components/GlobalBackground";
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
      <body className={`${inter.className} antialiased text-slate-900 dark:text-white transition-colors duration-500`}>
        {/* The Preloader sits right here, on top of everything */}
        <Preloader /> 
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
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