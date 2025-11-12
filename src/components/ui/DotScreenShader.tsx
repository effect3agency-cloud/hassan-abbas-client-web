import { useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const DotMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    dotColor: new THREE.Color('#FFFFFF'),
    bgColor: new THREE.Color('#0A0A0A'),
    mouseTrail: null,
    logoTexture: null,
    logoOpacity: 0.5,
    logoScale: 1.2,
    rotation: 0,
    gridSize: 80,
    dotOpacity: 0.08,
  },
  /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl */ `
    uniform float time;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColor;
    uniform sampler2D mouseTrail;
    uniform sampler2D logoTexture;
    uniform float logoOpacity;
    uniform float logoScale;
    uniform float rotation;
    uniform float gridSize;
    uniform float dotOpacity;
    
    varying vec2 vUv;

    vec2 rotate(vec2 uv, float angle) {
      float s = sin(angle);
      float c = cos(angle);
      mat2 rotationMatrix = mat2(c, -s, s, c);
      return rotationMatrix * (uv - 0.5) + 0.5;
    }

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
      return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);
      vec2 rotatedUv = rotate(uv, rotation);
      
      // Sample mouse trail
      vec2 gridUvCenter = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);
      float mouseInfluence = texture2D(mouseTrail, gridUvCenter).r;
      
      // Logo sampling - centered and scaled
      vec2 logoUv = (uv - 0.5) / logoScale + 0.5;
      vec4 logoSample = texture2D(logoTexture, logoUv);
      
      // Create dots
      vec2 gridUv = fract(rotatedUv * gridSize);
      float dotSize = 0.28;
      float sdfDot = sdfCircle(gridUv, dotSize);
      float smoothDot = smoothstep(0.05, 0.0, sdfDot);
      
      // Mouse reveals logo
      float logoReveal = logoSample.a * logoOpacity;
      float enhancedReveal = logoReveal * (1.0 + mouseInfluence * 3.0);
      
      // Mix background with logo
      vec3 bgWithLogo = mix(bgColor, logoSample.rgb, enhancedReveal * 0.5);
      
      // Add dots on top with varying opacity based on logo presence
      float dotVisibility = dotOpacity * (1.0 + mouseInfluence * 2.5);
      vec3 composition = mix(bgWithLogo, dotColor, smoothDot * dotVisibility);
      
      gl_FragColor = vec4(composition, 1.0);
      
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
);

function Scene() {
  const size = useThree((s) => s.size);
  const viewport = useThree((s) => s.viewport);
  
  const logoTexture = useTexture('/logo.png');

  const [trail, onMove] = useTrailTexture({
    size: 1024,
    radius: 0.2,
    maxAge: 750,
    interpolate: 2,
    ease: (x) => Math.sqrt(1 - Math.pow(x - 1, 2))
  });

  const dotMaterial = useMemo(() => {
    const material = new DotMaterial();
    material.uniforms.logoTexture.value = logoTexture;
    return material;
  }, [logoTexture]);

  useEffect(() => {
    dotMaterial.uniforms.dotColor.value.setHex(0xFFFFFF);
    dotMaterial.uniforms.bgColor.value.setHex(0x0A0A0A);
  }, [dotMaterial]);

  useFrame((state) => {
    dotMaterial.uniforms.time.value = state.clock.elapsedTime;
  });

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh 
      scale={[scale, scale, 1]} 
      onPointerMove={onMove}
    >
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export const DotScreenShader = () => {
  return (
    <Canvas
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.NoToneMapping,
        alpha: false,
      }}
      style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  );
};
