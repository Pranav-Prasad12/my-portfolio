"use client";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import { useTheme } from "next-themes";

export function BlobBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-[-1] bg-[#f8fafc] dark:bg-[#050505]" />;
  }

  const isDark = resolvedTheme === "dark";

  // DYNAMIC COLORS BASED ON THEME
  const bgColor = isDark ? "bg-[#050505]" : "bg-slate-100"; // Slightly darker slate so the water drop stands out
  const materialColor = isDark ? "#2e1065" : "#e0f2fe"; // Deep purple vs. Very pale water blue
  const bottomLightColor = isDark ? "#a855f7" : "#0284c7"; // Purple glow vs. Deep water blue glow
  
  // PHYSICS PROPERTIES
  const metalness = isDark ? 1 : 0.1; // Dark mode is metallic, light mode is non-metallic
  const roughness = isDark ? 0.1 : 0; // Water is perfectly smooth
  const transmission = isDark ? 0 : 0.95; // This makes it glassy and see-through!
  const thickness = isDark ? 0 : 2; // How thick the water droplet is

  return (
    <div className={`fixed inset-0 z-[-1] transition-colors duration-700 ${bgColor}`}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        
        <ambientLight intensity={isDark ? 0.8 : 2} />
        <directionalLight position={[10, 10, 10]} intensity={isDark ? 2 : 1} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={isDark ? 5 : 3} color={bottomLightColor} />

        <Sphere visible args={[1, 100, 200]} scale={2.2}>
          <MeshDistortMaterial
            color={materialColor}
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={roughness}
            metalness={metalness}
            // THE WATER PHYSICS:
            transparent={!isDark}
            opacity={isDark ? 1 : 0.8}
            transmission={transmission} 
            thickness={thickness}
            ior={1.33} // 1.33 is the literal physical Index of Refraction for water
          />
        </Sphere>
        
        {/* 'studio' provides clean, bright light boxes for the water to reflect and refract */}
        {/* 'dawn' provides a soft, natural sky gradient without any harsh lighting fixtures */}
<Environment preset={isDark ? "city" : "forest"} />
      </Canvas>
    </div>
  );
}