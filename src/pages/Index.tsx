import HeroSignboard from "@/components/HeroSignboard";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Portfolio from "@/components/Portfolio";
import { UpgradeBanner } from "@/components/ui/upgrade-banner";
import showcaseImage from "@/assets/showcase-image.png";
import { useState } from "react";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  
  return (
    <div className="relative">
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
  );
};

export default Index;
