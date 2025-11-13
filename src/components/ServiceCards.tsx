import { Card } from "@/components/ui/card";
import signManufacturing from "@/assets/sign-manufacturing.png";
import signInstallation from "@/assets/sign-installation.jpg";
import printing from "@/assets/printing.jpg";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "DESIGN & MANUFACTURE",
      images: [signManufacturing, signManufacturing, signManufacturing, signManufacturing],
      bgColor: "bg-[#C84B31]",
    },
    {
      id: 2,
      title: "INSTALLATION & REPAIR",
      images: [signInstallation, signInstallation, signInstallation, signInstallation],
      bgColor: "bg-white",
      textColor: "text-foreground",
    },
    {
      id: 3,
      title: "LIGHTING SERVICES",
      images: [printing, printing, printing, printing],
      bgColor: "bg-[#2D4263]",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`${service.bgColor} border-none shadow-2xl rounded-3xl overflow-hidden p-0`}
            >
              <div className="grid grid-cols-2 gap-1 p-6">
                {service.images.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${service.title} - Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className={`p-8 ${service.textColor || "text-white"}`}>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-center">
                  {service.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
