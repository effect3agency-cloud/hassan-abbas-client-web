import { DotScreenShader } from "@/components/ui/DotScreenShader";

const HeroSignboard = () => {
  return (
    <div className="h-svh w-screen flex flex-col gap-8 items-center justify-center relative">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>
      <h1 className="text-6xl md:text-7xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap pointer-events-none px-6 text-center">
        Helping Texas Businesses Stand Out Every Day
      </h1>
      <p className="text-lg md:text-xl font-light text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed pointer-events-none px-6">
        Struggling to get seen by local customers? Our professional signs turn passing traffic into paying clients. With decades of Texas expertise, we handle everything, from design to installation, so you can focus on growing your business.
      </p>
    </div>
  );
};

export default HeroSignboard;
