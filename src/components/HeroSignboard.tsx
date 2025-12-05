import { DotScreenShader } from "@/components/ui/DotScreenShader";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import signsAndMedia from "@/assets/signs and media.png";

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
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-6 pt-8 -mt-12">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="mb-4"
        >
          <img
            src={signsAndMedia}
            alt="Precision Signs and Media"
            className="w-[22rem] md:w-[26rem] lg:w-[32rem] xl:w-[38rem] h-auto object-contain"
            loading="eager"
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black text-center leading-tight pointer-events-none"
        >
          Helping Businesses Stand Out
          <br />
          <span className="text-center" style={{ color: '#f97316' }}>
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          className="text-base md:text-lg font-normal text-center text-black max-w-3xl leading-relaxed pointer-events-none"
        >
          Struggling to get seen by customers? Our marketing experts turn passing traffic into paying clients. With decades of marketing and signage expertise, we handle everything from design and permitting to installation and digital marketing so you can focus on growing your business.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSignboard;
