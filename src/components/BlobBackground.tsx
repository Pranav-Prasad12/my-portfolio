"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

// --- 1. THE VERTEX SHADER ---
const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

// --- 2. THE FRAGMENT SHADER ---
const fragmentShader = `
  uniform vec3 uResolution;
  uniform float uTime;
  
  uniform float u_time_scale;
  uniform float u_view_scale;
  uniform float u_detail;
  uniform float u_shift_rate;
  uniform float u_shift_amp;
  
  uniform float u_tint_angle;
  uniform float u_color_sat;
  uniform float u_lum_factor;
  uniform vec3 u_rgb_weights;
  
  // NEW: Inversion toggle for light mode
  uniform float u_invert;

  void computeSurface(out vec4 fragColor, vec2 fragCoord) {
    vec2 resolution = uResolution.xy;
    float minRes = min(resolution.x, resolution.y);
    vec2 normCoord = (fragCoord * 2.0 - resolution) / minRes;
    
    normCoord *= u_view_scale;

    float t = uTime * u_time_scale * 0.3;
    float shiftT = uTime * u_shift_rate * 0.5;

    vec2 phase = vec2(-t * 0.5, 0.0);
    vec2 pos = normCoord;
    
    for (float j = 0.0; j < 8.0; j += 1.0) {
      vec2 offset = vec2(sin(shiftT + j * 1.3), cos(shiftT - j * 1.1)) * u_shift_amp;
      vec2 p = pos + offset;
      
      phase.y += cos(j - phase.x - p.x * u_detail);
      phase.x += sin(p.y * u_detail + phase.y);
    }
    phase.x += t * 0.5;
    
    vec3 color = vec3(
      cos(normCoord.x * phase.x + normCoord.y * phase.y) * 0.6 + 0.4, 
      cos(phase.y + phase.x) * 0.5 + 0.5,
      0.0 
    );
    
    color.b = cos(phase.y + phase.x) * 0.5 + 0.5;
    color = cos(color * cos(vec3(phase.x, phase.y, 2.5)) * 0.5 + 0.5);
    
    color *= u_rgb_weights;
    
    // NEW: Smoothly flip black to white and bright to dark
    color = mix(color, 1.0 - color, u_invert);
    
    float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
    color = mix(vec3(luma), color, u_color_sat);
    
    vec3 k = vec3(0.577350269);
    float cA = cos(u_tint_angle);
    color = color * cA + cross(k, color) * sin(u_tint_angle) + k * dot(k, color) * (1.0 - cA);
    
    color *= u_lum_factor;
    
    fragColor = vec4(color, 1.0);
  }

  void main() {
    computeSurface(gl_FragColor, gl_FragCoord.xy);
  }
`;

// --- 3. THE THEME PALETTES ---
const palettes = {
  // Dark Mode: Deep space neon (invert: 0)
  dark: { angle: 0.0, sat: 0.0, lum: 1.2, invert: 1.0, black_liquid: 0.0, weights: new THREE.Vector3(1.0, 1.0, 1.0) },
  // Light Mode: Liquid silver/pearl (invert: 1)
  light: { angle: 0.0, sat: 1.0, lum: 1.0, invert: 0.0, weights: new THREE.Vector3(1.0, 1.0, 1.0) }
};

// --- 4. THE SHADER COMPONENT ---
const ShaderPlane = ({ isDark }: { isDark: boolean }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  const uniforms = useMemo(() => ({
    uResolution: { value: new THREE.Vector3(size.width, size.height, 1) },
    uTime: { value: 0 },
    u_time_scale: { value: 0.6 },
    u_view_scale: { value: 0.9193 },
    u_detail: { value: 0.7007 },
    u_shift_rate: { value: 0.834 },
    u_shift_amp: { value: 0.7005 },
    u_tint_angle: { value: palettes.dark.angle },
    u_color_sat: { value: palettes.dark.sat },
    u_lum_factor: { value: palettes.dark.lum },
    u_invert: { value: palettes.dark.invert },
    u_rgb_weights: { value: palettes.dark.weights.clone() },
  }), [size]);

  useFrame((state) => {
    if (materialRef.current) {
      const mat = materialRef.current;
      const target = isDark ? palettes.dark : palettes.light;
      
      mat.uniforms.uTime.value = state.clock.elapsedTime;
      mat.uniforms.uResolution.value.set(size.width, size.height, 1);
      
      // Smoothly animate the transition parameters
      mat.uniforms.u_tint_angle.value = THREE.MathUtils.lerp(mat.uniforms.u_tint_angle.value, target.angle, 0.05);
      mat.uniforms.u_color_sat.value = THREE.MathUtils.lerp(mat.uniforms.u_color_sat.value, target.sat, 0.05);
      mat.uniforms.u_lum_factor.value = THREE.MathUtils.lerp(mat.uniforms.u_lum_factor.value, target.lum, 0.05);
      mat.uniforms.u_invert.value = THREE.MathUtils.lerp(mat.uniforms.u_invert.value, target.invert, 0.05);
      mat.uniforms.u_rgb_weights.value.lerp(target.weights, 0.05);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

// --- 5. THE MASTER CONTAINER ---
export function BlobBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark" || resolvedTheme === "system";

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] bg-[#F1F5F9] dark:bg-[#050505] transition-colors duration-700">
      <Canvas orthographic camera={{ position: [0, 0, 1], left: -1, right: 1, top: 1, bottom: -1 }}>
        <ShaderPlane isDark={isDark} />
      </Canvas>
    </div>
  );
}