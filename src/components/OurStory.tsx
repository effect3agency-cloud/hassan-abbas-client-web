import ourStoryImage from "@/assets/our-story.jpg";

const OurStory = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Our Story
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Welcome to Precision Signs & Media, a leader in the signage industry since 1995, renowned for blending craftsmanship with innovation to light up the Texas landscape.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src={ourStoryImage}
                alt="Precision Signs & Media - RoadTrac storefront signage showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
