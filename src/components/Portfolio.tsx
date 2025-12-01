import ExpandableGallery from "@/components/ui/gallery-animation";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";

const Portfolio = () => {
  const portfolioImages = [
    {
      url: portfolio1,
      title: "The Grove Wine & Whiskey",
      desc: "Premium storefront signage with professional installation",
    },
    {
      url: portfolio2,
      title: "Esther's Cajun Café",
      desc: "Eye catching dimensional lettering with LED lighting",
    },
    {
      url: portfolio3,
      title: "RoadTrac Convenience Store",
      desc: "Complete exterior branding and signage solution",
    },
    {
      url: portfolio4,
      title: "Kroger Pharmacy Monument",
      desc: "Large scale monument signage with tenant panels",
    },
    {
      url: portfolio5,
      title: "Window Graphics Display",
      desc: "Vibrant window graphics for retail locations",
    },
    {
      url: portfolio6,
      title: "Interior LED Signage",
      desc: "Custom LED displays for indoor applications",
    },
    {
      url: portfolio7,
      title: "Montessori School Signage",
      desc: "Professional educational facility signage",
    },
    {
      url: portfolio8,
      title: "Arabisca Café",
      desc: "Dimensional logo and branding installation",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of signage projects across Texas. From storefront signs to monument displays, 
            each project showcases our commitment to quality and attention to detail.
          </p>
        </div>
        
        {/* Expandable Gallery */}
        <div className="px-4 md:px-0">
          <ExpandableGallery images={portfolioImages} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
