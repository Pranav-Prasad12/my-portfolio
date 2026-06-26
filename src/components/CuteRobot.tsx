"use client";
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function RobotModel() {
  const headRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Listens to the entire window so it never loses track of your cursor
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

 useFrame((state) => {
    // state.pointer ensures the robot ONLY tracks the cursor inside the green box
    if (headRef.current) {
      // Clamped to Math.PI / 6 (30 degrees) to prevent over-rotation
      // This keeps the robot looking "at" the viewer even when the mouse moves to the edge
      const targetX = THREE.MathUtils.clamp((state.pointer.x * Math.PI) / 6, -Math.PI / 6, Math.PI / 6);
      const targetY = THREE.MathUtils.clamp((state.pointer.y * Math.PI) / 6, -Math.PI / 6, Math.PI / 6);
      
      // Smoothly interpolate to the clamped target
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.1);
    }
  });
  return (
    <Float speed={3.5} rotationIntensity={0.6} floatIntensity={3.5}>
      <group ref={headRef} position={[0, 0, 0]}>
        
        {/* Main White Orb Body */}
        <mesh castShadow>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
        </mesh>

        <group position={[0, 0.1, 0]}>
          
          {/* Left Eye */}
          <mesh position={[-0.32, 0, 0.96]} scale={[1, 1, 0.2]}>
            <sphereGeometry args={[0.14, 32, 32]} />
            <meshStandardMaterial color="#050505" roughness={0.4} metalness={0.1} />
          </mesh>

          {/* Right Eye */}
          <mesh position={[0.32, 0, 0.96]} scale={[1, 1, 0.2]}>
            <sphereGeometry args={[0.14, 32, 32]} />
            <meshStandardMaterial color="#050505" roughness={0.4} metalness={0.1} />
          </mesh>

          {/* THE FIXED LINE */}
          <mesh position={[0, 0, 1.005]}>
            <boxGeometry args={[0.64, 0.02, 0.015]} />
            <meshStandardMaterial color="#050505" roughness={0.4} metalness={0.1} />
          </mesh>

        </group>

      </group>
    </Float>
  );
}

export function CuteRobot() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <RobotModel />
        
        <Environment preset="city" />
        
        <ContactShadows position={[0, -1.8, 0]} opacity={0.1} scale={8} blur={4.5} far={4} />
      </Canvas>
    </div>
  );
}