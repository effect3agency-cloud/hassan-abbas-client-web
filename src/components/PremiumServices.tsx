import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import socialMediaMarketing from "@/assets/Services Pics/Social Media Marketing.jpg";
import websiteDesign from "@/assets/Services Pics/Website Design.jpg";
import seoAeo from "@/assets/Services Pics/SEO and AEO.jpg";
import aiMarketing from "@/assets/Services Pics/AI Marketing.png";
import graphicDesign from "@/assets/Services Pics/Graphic Design.png";
import refurbishmentRepair from "@/assets/Services Pics/Refurbishment and Repair.png";

const PremiumServices = () => {
  const services = [
    {
      title: "Social Media Marketing",
      image: socialMediaMarketing,
      description: "Elevate your brand presence across all social platforms with strategic content creation, engagement campaigns, and data-driven insights to maximize your reach and impact."
    },
    {
      title: "Website Design",
      image: websiteDesign,
      description: "Create stunning, responsive websites that captivate your audience and drive conversions. From concept to launch, we deliver exceptional digital experiences tailored to your brand."
    },
    {
      title: "SEO and AEO",
      image: seoAeo,
      description: "Boost your online visibility with comprehensive search engine optimization and answer engine optimization strategies that put your business at the top of search results."
    },
    {
      title: "AI Marketing",
      image: aiMarketing,
      description: "Harness the power of artificial intelligence to automate marketing campaigns, personalize customer experiences, and gain predictive insights for smarter business decisions."
    },
    {
      title: "Graphic Design",
      image: graphicDesign,
      description: "Transform your vision into compelling visual content with our expert graphic design services. From logos to marketing materials, we create designs that leave lasting impressions."
    },
    {
      title: "Refurbishment and Repair",
      image: refurbishmentRepair,
      description: "Extend the life of your existing signage with professional refurbishment and repair services. We restore signs to their original glory with quality workmanship and attention to detail."
    }
  ];

  return (
    <section id="premium-services" className="w-full flex flex-col items-center justify-start py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url(/src/assets/signboard-texture.jpg)', backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
      <div className="max-w-3xl text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">
          Our Premium Service
        </h2>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-8 md:px-12 relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 flex items-center justify-center bg-muted/40 dark:bg-muted/20 p-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-accent">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default PremiumServices;
