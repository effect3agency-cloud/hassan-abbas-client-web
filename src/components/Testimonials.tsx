import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Precision Media & Signs transformed our storefront with stunning signage. Professional service from design to installation.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Mitchell",
    role: "Dunkin' Franchise Owner",
  },
  {
    text: "Their vehicle wraps turned our fleet into mobile billboards. The quality and attention to detail exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "David Chen",
    role: "Tropical Smoothie Manager",
  },
  {
    text: "From concept to completion, they delivered exceptional illuminated signs that perfectly represent our brand.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Jennifer Ross",
    role: "BondVet Regional Director",
  },
  {
    text: "Outstanding channel letters and window graphics. Their expertise in sign design and fabrication is unmatched.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Michael Torres",
    role: "Club Pilates Owner",
  },
  {
    text: "The team delivered premium monument signs that elevated our brand presence. Highly recommend their services.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Amanda Lee",
    role: "Capriotti's Marketing Director",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border-2 border-orange-500 py-1 px-4 rounded-lg text-orange-600 dark:text-orange-400">Our Client</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-orange-600 dark:text-orange-400">
            What Our Clients Say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about our signage services.
          </p>
        </motion.div>

        <div className="flex justify-start gap-6 mt-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={25} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
