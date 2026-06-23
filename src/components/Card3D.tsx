"use client";
import React, { useRef, useState } from "react";

// NOTICE: We added "imageSrc?: string" here so you can pass images to it!
export const Card3D = ({ title, description, category, imageSrc }: { title: string, description: string, category: string, imageSrc?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate the tilt effect based on mouse position
    const tiltX = ((y - centerY) / centerY) * -15;
    const tiltY = ((x - centerX) / centerX) * 15;
    
    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    // Snap back to flat when the mouse leaves
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 h-full flex flex-col justify-start hover:bg-white/10 hover:border-white/20 transition-colors duration-300 cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden relative group"
      >
        {/* Glow effect that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
        
       {/* THE FINAL ANIMATED IMAGE BACKGROUND */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-in-out pointer-events-none"
          />
        )}
        
        {/* 3D Pop-out content */}
        {/* NOTICE: Added 'relative z-20' so the text stays safely IN FRONT of the image */}
        <div className="relative z-20" style={{ transform: "translateZ(40px)" }}>
          <span className="text-xs font-bold px-3 py-1 bg-white text-black rounded-full mb-4 inline-block shadow-lg">
            {category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};