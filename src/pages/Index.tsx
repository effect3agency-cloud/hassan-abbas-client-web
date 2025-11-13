import HeroSignboard from "@/components/HeroSignboard";
import Navigation from "@/components/Navigation";
import CurvedLoop from "@/components/CurvedLoop";
import showcaseImage from "@/assets/showcase-image.png";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <HeroSignboard />
      
      {/* Image Section with Overlaying Animation */}
      <section className="relative w-full px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <img 
            src={showcaseImage} 
            alt="Precision Media & Signs - Gateway Commons Showcase" 
            className="w-full h-auto rounded-xl shadow-2xl"
          />
          
          {/* Curved Loop Animation Overlay */}
          <div className="absolute top-0 left-0 right-0 -translate-y-1/3 pointer-events-none">
            <div className="opacity-90 mix-blend-soft-light pointer-events-auto">
              <CurvedLoop 
                marqueeText="Manufacturing • Installation • Service • Lighting • Subcontractor • Design • Advertising • Architect • "
                speed={2}
                curveAmount={150}
                direction="left"
                interactive={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
