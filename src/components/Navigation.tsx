import { useState } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-[#1a1a1a] text-white py-4 px-6">
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

        {/* Animated Navigation Menu */}
        <div className="flex justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/">Home</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Sign Solutions">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/sign-solutions">Sign Solutions</HoveredLink>
                <HoveredLink href="/signs">Signs</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/services">Services</HoveredLink>
                <HoveredLink href="/installation">Installation</HoveredLink>
                <HoveredLink href="/lighting">Lighting</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/resources">Resources</HoveredLink>
                <HoveredLink href="/service-areas">Service Areas</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/about">About Us</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Contact Us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/contact">Get In Touch</HoveredLink>
                <HoveredLink href="/quote">Request Quote</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
