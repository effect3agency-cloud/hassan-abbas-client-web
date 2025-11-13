import HeroSignboard from "@/components/HeroSignboard";
import Navigation from "@/components/Navigation";
import CurvedLoop from "@/components/CurvedLoop";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <HeroSignboard />
      <CurvedLoop 
        marqueeText="Manufacturing • Installation • Service • Lighting • Subcontractor • Design • Advertising • Architect • "
        speed={2}
        curveAmount={400}
        direction="left"
        interactive={true}
      />
    </div>
  );
};

export default Index;
