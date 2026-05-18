"use client";

import { useRef } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import * as THREE from "three";

function OrbMesh() {
  const meshRef = useRef<THREE.LineSegments>(null);

  const geo = new THREE.IcosahedronGeometry(2, 1);
  const edges = new THREE.EdgesGeometry(geo);

  useFrame((state: RootState) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += state.mouse.x * 0.0004;
    meshRef.current.rotation.x += state.mouse.y * 0.0004;
  });

  return (
    <lineSegments ref={meshRef} geometry={edges}>
      <lineBasicMaterial color="#F59E0B" transparent opacity={0.65} />
    </lineSegments>
  );
}

export default function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <OrbMesh />
    </Canvas>
  );
}
