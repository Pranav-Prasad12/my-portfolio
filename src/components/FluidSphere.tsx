"use client";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

export const FluidSphere = () => {
  return (
    <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 3] }}>
        
        {/* Pumped up the lighting so the metal has sharp, bright reflections */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={4} color="#ffffff" />
        {/* A strong bright blue/indigo light hitting it from the bottom left */}
        <directionalLight position={[-5, -5, -5]} intensity={8} color="#4f46e5" /> 
        
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1, 100, 100]} scale={1.2}>
            <MeshDistortMaterial
              color="#d1d5db"        // Changed from Black to bright Silver
              emissive="#000000"     // Removed the artificial glow to let the lights work
              distort={0.4}          
              speed={2.5}            
              roughness={0.05}       // Made it ultra-smooth/glossy
              metalness={1}          // Maximum metallic reflection
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};