import { motion } from "motion/react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

const OurWork = () => {
  const images = [work1, work2, work3, work4, work5];

  return (
    <section className="w-full flex flex-col items-center justify-start py-12 bg-background">
      <div className="max-w-3xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400">
            Our Work
          </h2>
          <p className="text-sm opacity-75 mt-4">
            At Precision Signs, we take pride in delivering high-quality signage
            solutions that help businesses stand out. As a leading signage
            company in Houston Texas, we've worked with a wide range of clients
            from local shops to large corporations creating impactful signs that
            grab attention and leave a lasting impression.
          </p>
        </motion.div>
      </div>

      {/* Gallery */}
      <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={src}
              alt={`Precision Media & Signs work example ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
