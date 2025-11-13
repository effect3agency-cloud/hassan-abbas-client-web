import { DotScreenShader } from "@/components/ui/DotScreenShader";
import { useState, useEffect } from "react";

const HeroSignboard = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Everyday";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(fullText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting]);

  return (
    <div className="h-svh w-screen flex flex-col items-center justify-center relative px-6 pb-32">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black text-center leading-tight pointer-events-none">
          Helping Texas Businesses Stand Out{" "}
          <span className="inline-block min-w-[240px] text-left text-orange-500">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <p className="text-base md:text-lg font-normal text-center text-black max-w-3xl leading-relaxed pointer-events-none mt-8">
          Struggling to get seen by local customers? Our professional signs turn passing traffic into paying clients. With decades of Texas expertise, we handle everything — from design to installation — so you can focus on growing your business.
        </p>
      </div>
    </div>
  );
};

export default HeroSignboard;
