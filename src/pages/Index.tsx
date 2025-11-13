import HeroSignboard from "@/components/HeroSignboard";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
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

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Index;
