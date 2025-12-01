import ExpandableGallery from "@/components/ui/gallery-animation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      url: gallery1,
      title: "Professional Signage Installation",
      desc: "High-quality signage solutions"
    },
    {
      url: gallery2,
      title: "Custom Sign Design",
      desc: "Tailored to your brand"
    },
    {
      url: gallery3,
      title: "LED Display Solutions",
      desc: "Modern illuminated signage"
    },
    {
      url: gallery4,
      title: "Monument Signs",
      desc: "Impressive entrance displays"
    },
    {
      url: gallery5,
      title: "Business Signage",
      desc: "Professional storefront solutions"
    }
  ];

  return (
    <section id="gallery" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4">
            Our Latest Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Precision Signs, we take pride in delivering high-quality signage solutions that help businesses stand out. As a leading signage company, we've worked with a wide range of clients from local shops to large corporations creating impactful signs that grab attention and leave a lasting impression.
          </p>
        </div>
        
        {/* Expandable Gallery */}
        <ExpandableGallery images={galleryImages} className="w-full" imageOnly={true} />
      </div>
    </section>
  );
};

export default Gallery;
