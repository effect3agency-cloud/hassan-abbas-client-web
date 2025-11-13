import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";
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
  const imageItems = [
    {
      id: 1,
      title: "The Grove Wine & Whiskey",
      desc: "Premium storefront signage with professional installation",
      url: portfolio1,
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "Esther's Cajun Café",
      desc: "Eye catching dimensional lettering with LED lighting",
      url: portfolio2,
      span: "md:row-span-1",
    },
    {
      id: 3,
      title: "RoadTrac Convenience Store",
      desc: "Complete exterior branding and signage solution",
      url: portfolio3,
      span: "md:row-span-1",
    },
    {
      id: 4,
      title: "Kroger Pharmacy Monument",
      desc: "Large scale monument signage with tenant panels",
      url: portfolio4,
      span: "md:row-span-2",
    },
    {
      id: 5,
      title: "Window Graphics Display",
      desc: "Vibrant window graphics for retail locations",
      url: portfolio5,
      span: "md:row-span-1",
    },
    {
      id: 6,
      title: "Interior LED Signage",
      desc: "Custom LED displays for indoor applications",
      url: portfolio6,
      span: "md:col-span-2 md:row-span-1",
    },
    {
      id: 7,
      title: "Montessori School Signage",
      desc: "Professional educational facility signage",
      url: portfolio7,
      span: "md:row-span-1",
    },
    {
      id: 8,
      title: "Arabisca Café",
      desc: "Dimensional logo and branding installation",
      url: portfolio8,
      span: "md:row-span-1",
    },
    {
      id: 9,
      title: "Custom Building Sign",
      desc: "Premium architectural signage solution",
      url: portfolio9,
      span: "md:row-span-1",
    },
  ];

  return (
    <div className="relative">
      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title="Our Portfolio"
        description="Explore our diverse range of signage projects across Texas. From storefront signs to monument displays, each project showcases our commitment to quality and attention to detail."
      />
      {/* Swipe Indicator */}
      <div className="absolute top-24 right-8 hidden md:flex items-center gap-2 text-muted-foreground animate-pulse">
        <span className="text-sm font-medium">Swipe to explore</span>
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
