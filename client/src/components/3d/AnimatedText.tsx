import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Group } from "three";
import * as THREE from "three";

interface AnimatedTextProps {
  text: string;
  position: [number, number, number];
  fontSize?: number;
  color?: string;
  maxWidth?: number;
}

export default function AnimatedText({ 
  text, 
  position, 
  fontSize = 1, 
  color = "#ffffff",
  maxWidth = 10
}: AnimatedTextProps) {
  const groupRef = useRef<Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Text
        fontSize={fontSize}
        color={color}
        maxWidth={maxWidth}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/inter.json"
        anchorX="center"
        anchorY="middle"
      >
        {text}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Text>
    </group>
  );
}
