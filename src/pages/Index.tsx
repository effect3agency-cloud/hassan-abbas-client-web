import HeroSignboard from "@/components/HeroSignboard";
import Navigation from "@/components/Navigation";
import logo from "@/assets/logo.jpg";

const Index = () => {
  return (
    <div className="relative">
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <img 
          src={logo} 
          alt="Precision Media & Signs" 
          className="h-16 md:h-20 w-auto object-contain drop-shadow-lg" 
        />
      </div>
      <HeroSignboard />
      <Navigation />
    </div>
  );
};

export default Index;
