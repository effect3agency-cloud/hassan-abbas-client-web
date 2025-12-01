import { motion } from "framer-motion";

const MapLocation = () => {
  const address = "9476 Hwy 6 South, Houston, TX 77083";
  const query = encodeURIComponent(address);
  // Using generic embed that does not require an API key.
  const embedUrl = `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <motion.section
      id="location"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-24 px-6 bg-background"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">Our Location</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Visit or reach us at: {address}</p>
        </div>
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-border">
          <iframe
            title="Google Map - Company Location"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MapLocation;
