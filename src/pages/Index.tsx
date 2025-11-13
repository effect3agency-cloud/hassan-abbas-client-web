import HeroSignboard from "@/components/HeroSignboard";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import showcaseImage from "@/assets/showcase-image.png";

const Index = () => {
  return (
    <div className="relative">
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
    </div>
  );
};

export default Index;
