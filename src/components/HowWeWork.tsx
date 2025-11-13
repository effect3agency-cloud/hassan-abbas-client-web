import howWeWorkVideo from "@/assets/how-we-work.mp4";

const HowWeWork = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-3xl text-center mb-12">
        <div className="inline-block px-3 py-1 mb-4 text-sm border rounded-full border-accent text-accent">
          Process
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-accent">
          How We Work
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl w-full">
        <div className="relative shadow-2xl rounded-2xl overflow-hidden shrink-0">
          <video 
            className="max-w-md w-full object-cover rounded-2xl"
            src={howWeWorkVideo}
            controls
            playsInline
          />
        </div>
        <div className="text-sm text-foreground max-w-lg">
          <p className="mt-4">
            At Precision Media & Signs, we combine cutting edge technology with expert craftsmanship to deliver exceptional signage solutions. From initial design concepts to final installation, our streamlined process ensures quality results that exceed expectations.
          </p>
          <p className="mt-4">
            Our experienced team works closely with you at every step, providing professional guidance and transparent communication throughout your project. We handle everything from permits to manufacturing, making the entire process simple and stress free for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
