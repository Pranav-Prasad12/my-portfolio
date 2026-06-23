"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// We have to use 'any' here for Next 15/React 19 compatibility with the current types
export function ThemeProvider({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}