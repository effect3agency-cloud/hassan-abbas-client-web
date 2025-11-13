import HeroSignboard from "@/components/HeroSignboard";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Portfolio from "@/components/Portfolio";
import OurStory from "@/components/OurStory";
import ServiceCards from "@/components/ServiceCards";
import { UpgradeBanner } from "@/components/ui/upgrade-banner";
import showcaseImage from "@/assets/showcase-image.png";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function Grid3D() {
  const gridSize = 20;
  const gridSpacing = 1;
  const lines = [];

  // Create vertical lines coming from top
  for (let i = -gridSize / 2; i <= gridSize / 2; i++) {
    const points = [];
    for (let j = -15; j <= 5; j++) {
      points.push(new THREE.Vector3(i * gridSpacing, j * 0.5, j * gridSpacing));
    }
    lines.push(points);
  }

  // Create horizontal lines
  for (let j = -15; j <= 5; j += 2) {
    const points = [];
    for (let i = -gridSize / 2; i <= gridSize / 2; i++) {
      points.push(new THREE.Vector3(i * gridSpacing, j * 0.5, j * gridSpacing));
    }
    lines.push(points);
  }

  return (
    <group rotation={[0, 0, 0]}>
      {lines.map((points, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: "#f97316",
          opacity: 0.25,
          transparent: true,
        });
        const line = new THREE.Line(geometry, material);
        return <primitive key={index} object={line} />;
      })}
    </group>
  );
}

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  
  return (
    <div className="relative">
      {/* Global 3D Grid Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 w-full h-full">
          <Canvas
            camera={{ position: [0, 3, 8], fov: 75 }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.5} />
            <Grid3D />
            <fog attach="fog" args={["#ffffff", 5, 15]} />
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
        </div>
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        {showBanner && (
        <div className="w-full bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border-b-2 border-orange-200 dark:border-orange-800">
          <UpgradeBanner 
            buttonText="Black Friday Season Sale:"
            description="Get your first signboard with a 30% service charge discount."
            onClose={() => setShowBanner(false)}
          />
        </div>
      )}
      <Navigation />
      <HeroSignboard />
      
      {/* Image Section */}
      <section className="w-full">
        <img 
          src={showcaseImage} 
          alt="Precision Media & Signs - Gateway Commons Showcase" 
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Our Story Section */}
      <OurStory />

      {/* Service Cards Section */}
      <ServiceCards />

      {/* CTA Section */}
      <CTASection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Gallery Section */}
      <Gallery />

      {/* Services Section */}
      <Services />

      {/* How We Work Section */}
      <HowWeWork />

      {/* Portfolio Section */}
      <Portfolio />
      </div>
    </div>
  );
};

export default Index;
