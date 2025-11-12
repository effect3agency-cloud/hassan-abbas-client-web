import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Precision Media & Signs" className="h-12" />
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground hover:text-secondary transition-colors font-medium">
            Services
          </a>
          <a href="#portfolio" className="text-foreground hover:text-secondary transition-colors font-medium">
            Portfolio
          </a>
          <a href="#about" className="text-foreground hover:text-secondary transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-secondary transition-colors font-medium">
            Contact
          </a>
        </div>

        <Button variant="hero" size="lg">
          Get a Quote
        </Button>
      </nav>
    </header>
  );
};

export default Header;
