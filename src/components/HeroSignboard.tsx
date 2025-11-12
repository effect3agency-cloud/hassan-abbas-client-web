import { motion } from 'framer-motion';
import { DotScreenShader } from '@/components/ui/DotScreenShader';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSignboard = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
      {/* Shader Background */}
      <div className="absolute inset-0 z-0">
        <DotScreenShader />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Helping Texas Businesses
          <br />
          <span className="text-accent">Stand Out Every Day</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-white/80 mb-10 font-light"
        >
          Struggling to get seen by local customers? Our professional signs turn passing traffic into paying clients. 
          With decades of Texas expertise, we handle everything, from design to installation, so you can focus on growing your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button 
            variant="hero" 
            size="xl"
            className="group"
          >
            Get Free Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            className="bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
          >
            View Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSignboard;
