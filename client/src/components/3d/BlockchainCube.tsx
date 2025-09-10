import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";

interface BlockchainCubeProps {
  position: [number, number, number];
  scale?: number;
  color?: string;
}

export default function BlockchainCube({ position, scale = 1, color = "#00ffff" }: BlockchainCubeProps) {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      
      // Scale animation on hover
      const targetScale = hovered ? scale * 1.2 : scale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
      />
      
      {/* Wireframe overlay */}
      <mesh>
        <boxGeometry args={[1.01, 1.01, 1.01]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </mesh>
  );
}
