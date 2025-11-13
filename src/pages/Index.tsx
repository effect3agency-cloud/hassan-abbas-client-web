import HeroSignboard from "@/components/HeroSignboard";
import Navigation from "@/components/Navigation";
import CurvedLoop from "@/components/CurvedLoop";
import showcaseImage from "@/assets/showcase-image.png";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <HeroSignboard />
      
      {/* Image Section */}
      <section className="w-full px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <img 
            src={showcaseImage} 
            alt="Precision Media & Signs - Gateway Commons Showcase" 
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
