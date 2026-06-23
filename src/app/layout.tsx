import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroller } from "@/components/SmoothScroller";
import { CustomCursor } from "@/components/CustomCursor";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pranav Prasad | Portfolio",
  description: "Computer Science & Engineering portfolio featuring EduConnect and advanced systems design concepts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ThemeProvider>
        <SmoothScroller>
          <body className="min-h-full flex flex-col"><CustomCursor /><SmoothScroller>{children}</SmoothScroller></body>
        </SmoothScroller>
      </ThemeProvider>
    </html>
  );
}
