import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Grid3D() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (gridRef.current) {
      // Subtle animation - slowly move the grid forward
      gridRef.current.position.z += 0.01;
      if (gridRef.current.position.z > 5) {
        gridRef.current.position.z = -10;
      }
    }
  });

  const gridSize = 20;
  const gridSpacing = 1;
  const lines = [];

  // Create vertical lines
  for (let i = -gridSize / 2; i <= gridSize / 2; i++) {
    const points = [];
    for (let j = -10; j <= 5; j++) {
      points.push(new THREE.Vector3(i * gridSpacing, -3, j * gridSpacing));
    }
    lines.push(points);
  }

  // Create horizontal lines
  for (let j = -10; j <= 5; j++) {
    const points = [];
    for (let i = -gridSize / 2; i <= gridSize / 2; i++) {
      points.push(new THREE.Vector3(i * gridSpacing, -3, j * gridSpacing));
    }
    lines.push(points);
  }

  return (
    <group ref={gridRef} rotation={[0, 0, 0]}>
      {lines.map((points, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: "#f97316",
          opacity: 0.5,
          transparent: true,
        });
        const line = new THREE.Line(geometry, material);
        return <primitive key={index} object={line} />;
      })}
    </group>
  );
}

export default function GridBackground3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Grid3D />
        {/* Add fog to create blur effect towards the front */}
        <fog attach="fog" args={["#000000", 3, 10]} />
      </Canvas>
      {/* Gradient overlay for additional blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </div>
  );
}
