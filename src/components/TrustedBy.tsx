import { motion } from "framer-motion";

const TrustedBy = () => {
  const brands = [
    "DUNKIN'",
    "Tropical Smoothie CAFE",
    "BondVet",
    "CLUB PILATES",
    "Capriotti's",
    "SPORT FITNESS",
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full py-16 bg-background overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-script italic text-foreground/80">
          trusted by
        </h2>
      </div>
      
      <div className="relative w-full">
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -1920], // Adjust based on content width
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-8 text-2xl font-bold text-foreground/70 whitespace-nowrap tracking-wide"
              style={{ minWidth: "200px" }}
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
