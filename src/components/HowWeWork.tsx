const HowWeWork = () => {
  return (
    <section id="how-we-work" className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-6 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url(/src/assets/signboard-texture.jpg)', backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-8">
          How We Work
        </h2>
        <div className="space-y-6 text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
          <p>
            At Precision Media & Signs, we combine cutting edge technology with expert craftsmanship to deliver exceptional signage solutions. From initial design concepts to final installation, our streamlined process ensures quality results that exceed expectations.
          </p>
          <p>
            Our experienced team works closely with you at every step, providing professional guidance and transparent communication throughout your project. We handle everything from permits to manufacturing, making the entire process simple and stress free for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
