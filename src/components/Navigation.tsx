import { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 px-4">
      <div className="flex items-center justify-center mb-4">
        <img src={logo} alt="Precision Media & Signs" className="h-20 w-auto object-contain" style={{ background: 'transparent' }} />
      </div>

      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">Services</HoveredLink>
            <HoveredLink href="/installation">Installation</HoveredLink>
            <HoveredLink href="/lighting">Lighting</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Our Work">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/portfolio">Portfolio</HoveredLink>
            <HoveredLink href="/case-studies">Case Studies</HoveredLink>
            <HoveredLink href="/testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pricing">View Pricing</HoveredLink>
            <HoveredLink href="/quote">Request Quote</HoveredLink>
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
