import permitInspection from "@/assets/permit-inspection.jpg";
import permitProcessing from "@/assets/permit-processing.jpg";

const SignPermitting = () => {
  return (
    <section id="sign-permitting" className="w-full py-16 md:py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">
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
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-accent">Decades of Experience</h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  With a proven track record serving thousands of satisfied clients, we bring unmatched expertise to every project.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-accent">Complete Sign Permitting</h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Many cities require permits for exterior signs. We handle the entire permitting process so your sign goes up without a hitch.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-accent">Marketing Integration</h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Beyond signs, we offer digital marketing, website design, and social media services to amplify your brand across all channels.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-accent">Premium Quality</h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  We use only high-grade materials and professional craftsmanship to ensure your signage stands the test of time.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default SignPermitting;
