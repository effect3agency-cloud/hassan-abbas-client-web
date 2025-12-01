import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  showBanner: boolean;
}

const Navigation = ({ showBanner }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const topPosition = useMotionValue(64);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // When scrolled down, move to top with small padding
    // When at top, position based on banner visibility with gap
    const targetPosition = isScrolled ? 16 : (showBanner ? 60 : 16);
    
    animate(topPosition, targetPosition, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  }, [showBanner, isScrolled, topPosition]);

  const navItems = [
    { title: "Home", href: "#", id: "home" },
    { title: "Our Story", href: "#our-story", id: "our-story" },
    { title: "Testimonials", href: "#testimonials", id: "testimonials" },
    { title: "Gallery", href: "#gallery", id: "gallery" },
    { title: "Services", href: "#services", id: "services" },
    { title: "How We Work", href: "#how-we-work", id: "how-we-work" },
    { title: "Portfolio", href: "#portfolio", id: "portfolio" },
    { title: "Premium Services", href: "#premium-services", id: "premium-services" },
    { title: "Why Choose Us", href: "#sign-permitting", id: "sign-permitting" },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ["home", "our-story", "testimonials", "gallery", "services", "how-we-work", "portfolio", "premium-services", "sign-permitting", "contact-us"];
          const scrollPosition = window.scrollY + 200;

          // Check if at top of page
          if (window.scrollY < 100) {
            setActiveSection("home");
            ticking = false;
            return;
          }

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetBottom = offsetTop + element.offsetHeight;

              if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div 
        className="hidden lg:flex fixed left-0 right-0 z-50 justify-center"
        style={{ top: topPosition }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-1 sm:gap-2 justify-center rounded-xl md:rounded-2xl px-2 md:px-4 py-2 md:py-2.5 border-2 border-orange-500 bg-white/95 dark:bg-gray-900/95 backdrop-blur-[20px] shadow-[0_0_25px_rgba(249,115,22,0.25)]">
          {/* Nav Items */}
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={idx}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-2 md:px-3 py-1.5 rounded-lg transition-all text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap ${
                  isActive 
                    ? 'text-orange-500 bg-orange-50 dark:bg-orange-950/30' 
                    : 'text-foreground hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/30'
                }`}
              >
                <span>{item.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          
          {/* Get In Touch Button */}
          <motion.a
            href="#contact-us"
            onClick={(e) => handleSmoothScroll(e, "#contact-us")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 md:px-4 py-1.5 rounded-lg transition-all text-xs md:text-sm font-medium ${
              activeSection === "contact-us"
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-orange-500 hover:text-white'
            }`}
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className="lg:hidden fixed z-50"
        style={{ top: topPosition }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-xl border-2 border-orange-500 bg-white/95 dark:bg-gray-900/95 backdrop-blur-[20px] shadow-[0_0_25px_rgba(249,115,22,0.25)]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-orange-500" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-2">
                <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-orange-500">Menu</h3>
                </div>
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href);
                        setIsMenuOpen(false);
                      }}
                      className={`block px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                        isActive
                          ? 'text-orange-500 bg-orange-50 dark:bg-orange-950/30'
                          : 'text-foreground hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/30'
                      }`}
                    >
                      {item.title}
                    </a>
                  );
                })}
                <a
                  href="#contact-us"
                  onClick={(e) => {
                    handleSmoothScroll(e, "#contact-us");
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-3 rounded-lg bg-orange-500 text-white text-center font-medium mt-4"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
