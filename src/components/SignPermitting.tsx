import permitInspection from "@/assets/permit-inspection.jpg";
import permitProcessing from "@/assets/permit-processing.jpg";
import { Badge } from "@/components/ui/badge";

const SignPermitting = () => {
  return (
    <section id="sign-permitting" className="w-full py-16 md:py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge variant="default" className="bg-primary text-primary-foreground border-primary">
              Premium Service
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative flex items-center justify-center gap-6">
            {/* First Image - Red Border */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform -rotate-3 transition-transform group-hover:-rotate-6">
                <img
                  src={permitInspection}
                  alt="Professional permit inspection services"
                  className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Second Image - Blue Border */}
            <div className="relative group mt-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform rotate-6 transition-transform group-hover:rotate-12">
                <img
                  src={permitProcessing}
                  alt="Sign permit processing and documentation"
                  className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-[#C84B31]">SIGN</span>{" "}
                <span className="text-[#2D4263]">PERMITTING</span>
              </h2>
              <p className="text-2xl md:text-3xl italic text-muted-foreground font-serif">
                Let us handle the hard part...
              </p>
            </div>

            {/* Body Text */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Many cities and municipalities require permits for exterior signs. We'll take care of the process for you so your sign can go up without a hitch.
              </p>
            </div>

            {/* Decorative Arrow - Points to contact section */}
            <div className="hidden lg:block mt-8">
              <a href="#contact-us" className="inline-block group">
                <svg 
                  className="w-32 h-32 text-primary group-hover:text-primary/80 transition-colors animate-bounce" 
                  viewBox="0 0 100 120" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Curved arrow path */}
                  <path 
                    d="M50 10 L50 90" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Arrow head */}
                  <path 
                    d="M35 75 L50 90 L65 75" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Contact text hint */}
                  <text 
                    x="50" 
                    y="110" 
                    textAnchor="middle" 
                    fill="currentColor" 
                    fontSize="12" 
                    fontWeight="600"
                  >
                    Contact Us
                  </text>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignPermitting;
