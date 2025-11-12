import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logo} alt="Precision Media & Signs" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 max-w-md">
              Texas's trusted sign company delivering quality signage solutions since 1998. 
              Making businesses stand out with professional design and installation.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#services" className="hover:text-secondary transition-colors">Building Signs</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">LED Letters</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Vehicle Wraps</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Custom Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-secondary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Precision Media & Signs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
