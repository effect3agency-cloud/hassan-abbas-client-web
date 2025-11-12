import { NavLink } from "@/components/NavLink";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sign Solutions", path: "/sign-solutions" },
    { name: "Signs", path: "/signs" },
    { name: "Installation", path: "/installation" },
    { name: "Lighting", path: "/lighting" },
    { name: "Services", path: "/services" },
  ];

  const secondRowLinks = [
    { name: "Resources", path: "/resources" },
    { name: "Service Areas", path: "/service-areas" },
    { name: "About Us", path: "/about" },
    { name: "Get In Touch", path: "/contact" },
  ];

  return (
    <nav className="bg-[#1a1a1a] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Social + Logo + Phone */}
        <div className="flex items-center justify-between mb-4">
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Precision Media & Signs" className="h-20 w-auto" />
          </div>

          {/* Phone */}
          <a
            href="tel:832-970-2805"
            className="bg-[#2c5aa0] hover:bg-[#234880] px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            832-970-2805
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-2">
          {/* First Row */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wide"
                activeClassName="text-accent"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex gap-6">
            {secondRowLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-white hover:text-accent transition-colors text-sm uppercase tracking-wide"
                activeClassName="text-accent"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
