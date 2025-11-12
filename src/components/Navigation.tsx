import { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 px-4">
      <div className="flex items-center justify-between mb-4">
        {/* Logo */}
        <img src={logo} alt="Precision Media & Signs" className="h-16 w-auto" />
        
        {/* Phone */}
        <a
          href="tel:832-970-2805"
          className="bg-[#2c5aa0] hover:bg-[#234880] px-6 py-3 rounded-lg text-lg font-semibold text-white transition-colors"
        >
          832-970-2805
        </a>
      </div>

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
  );
};

export default Navigation;
