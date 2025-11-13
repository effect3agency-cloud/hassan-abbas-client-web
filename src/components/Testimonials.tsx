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
  {
    text: "Fast turnaround on our gym signage without compromising quality. Their customer service is top-notch.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Rachel Martinez",
    role: "Sport Fitness Operations Manager",
  },
  {
    text: "Custom dimensional letters and interior signs that perfectly match our brand guidelines. Excellent craftsmanship.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Wilson",
    role: "Retail Store Manager",
  },
  {
    text: "They handled our complete wayfinding system with precision. Professional installation and stunning results.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Lisa Anderson",
    role: "Property Manager",
  },
  {
    text: "Best sign company we've worked with. LED displays and digital signage solutions that drive customer engagement.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Robert Kim",
    role: "Business Development Director",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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
            <div className="border py-1 px-4 rounded-lg">Our Client</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our clients say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about our signage services.
          </p>
        </motion.div>

        <div className="flex justify-start gap-6 mt-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-hidden">
          <TestimonialsColumn testimonials={[...firstColumn, ...secondColumn, ...thirdColumn]} duration={30} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
