"use client";
import React, { createContext, useState, useContext } from "react";

export type MediaState = {
  type: "image" | "video";
  src: string;
} | null;

const CursorContext = createContext<{
  mediaData: MediaState;
  setMediaData: (val: MediaState) => void;
}>({
  mediaData: null,
  setMediaData: () => {},
});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [mediaData, setMediaData] = useState<MediaState>(null);
  return (
    <CursorContext.Provider value={{ mediaData, setMediaData }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);