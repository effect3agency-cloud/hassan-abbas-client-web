import { DotScreenShader } from "@/components/ui/DotScreenShader";

const HeroSignboard = () => {
  return (
    <div className="h-svh w-screen flex flex-col items-center justify-center relative px-6">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mix-blend-exclusion text-white text-center leading-tight pointer-events-none">
          Helping Texas Businesses Stand Out Every Day
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-light text-center text-white mix-blend-exclusion max-w-3xl leading-relaxed pointer-events-none">
          Struggling to get seen by local customers? Our professional signs turn passing traffic into paying clients. With decades of Texas expertise, we handle everything, from design to installation, so you can focus on growing your business.
        </p>
      </div>
    </div>
  );
};

export default HeroSignboard;
