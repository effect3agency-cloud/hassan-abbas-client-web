import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="w-full flex flex-col items-center justify-start py-12 px-4">
      <div className="max-w-3xl text-center mb-12">
        <div className="inline-block px-3 py-1 mb-4 text-sm border rounded-full border-accent text-accent">
          Services
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-accent">
          What We Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
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
        ))}
      </div>
    </section>
  );
};

export default Services;
