import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import signInstallation from "@/assets/sign-installation.jpg";
import signManufacturing from "@/assets/sign-manufacturing.png";
import designAndPermits from "@/assets/design-and-permits.jpg";
import printing from "@/assets/printing.jpg";
import awningsAndCanopy from "@/assets/awnings-and-canopy.jpg";

const Services = () => {
  const services = [
    {
      title: "Sign Installation",
      image: signInstallation,
      description: "Professional installation services ensuring your signage is securely mounted and perfectly positioned for maximum visibility and impact."
    },
    {
      title: "Sign Manufacturing",
      image: signManufacturing,
      description: "Expert craftsmanship in creating durable, high quality signs using premium materials and advanced manufacturing techniques."
    },
    {
      title: "Design and Permits",
      image: designAndPermits,
      description: "Complete design consultation and permit handling services to bring your vision to life while ensuring full compliance with local regulations."
    },
    {
      title: "Printing",
      image: printing,
      description: "State of the art printing technology delivering vibrant, long lasting graphics that capture attention and withstand the elements."
    },
    {
      title: "Awnings and Canopy",
      image: awningsAndCanopy,
      description: "Custom awning and canopy solutions that provide shelter, enhance aesthetics, and create a welcoming entrance for your business."
    }
  ];

  return (
    <section id="services" className="w-full flex flex-col items-center justify-start py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url(/src/assets/signboard-texture.jpg)', backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
      <div className="max-w-3xl text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">
          What We Offer
        </h2>
      </div>

      <div className="w-full max-w-7xl px-12 relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

export default Services;
