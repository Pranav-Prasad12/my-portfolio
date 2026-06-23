"use client";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

export const FluidSphere = () => {
  return (
    <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] relative z-10 cursor-grab active:cursor-grabbing">
      {/* The Canvas creates a 3D scene in the browser */}
      <Canvas camera={{ position: [0, 0, 3] }}>
        
        {/* Lighting to make the sphere look glossy and metallic */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-2, -2, -5]} intensity={5} color="#4338ca" /> {/* Indigo backglow */}
        
        {/* Float makes the object hover smoothly up and down */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          
          {/* The Sphere geometry */}
          <Sphere args={[1, 100, 100]} scale={1.2}>
            
            {/* The magic material that makes it look like liquid */}
            <MeshDistortMaterial
              color="#000000"        // Black base color
              emissive="#111111"     // Slight glow
              distort={0.4}          // How wobbly it gets
              speed={2.5}            // How fast the liquid morphs
              roughness={0.1}        // Super glossy
              metalness={1}          // Highly metallic reflections
            />
          </Sphere>
          
        </Float>
      </Canvas>
    </div>
  );
};