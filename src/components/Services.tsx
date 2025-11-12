import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Lightbulb, PenTool, Truck, Wrench, Zap } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building Signs",
    description: "Eye-catching exterior signs that make your business stand out from the street and attract customers 24/7."
  },
  {
    icon: Lightbulb,
    title: "LED & Channel Letters",
    description: "Illuminated signage that keeps your brand visible day and night with energy-efficient LED technology."
  },
  {
    icon: PenTool,
    title: "Custom Design",
    description: "Professional design services tailored to your brand identity and business goals."
  },
  {
    icon: Truck,
    title: "Vehicle Wraps",
    description: "Turn your fleet into mobile billboards with full or partial vehicle wraps that get noticed."
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Expert installation services ensuring your signs are secure, compliant, and perfectly positioned."
  },
  {
    icon: Zap,
    title: "Maintenance",
    description: "Keep your signs looking their best with our professional cleaning and repair services."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Sign Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to installation, we handle every aspect of your signage needs 
            with professionalism and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
