import { useState, useRef } from "react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Briefcase, FolderOpen, DollarSign, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dockRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const navItems = [
    {
      title: 'Services',
      icon: <Briefcase className='h-full w-full text-neutral-700 dark:text-neutral-300' />,
      href: '/services',
    },
    {
      title: 'Our Work',
      icon: <FolderOpen className='h-full w-full text-neutral-700 dark:text-neutral-300' />,
      href: '/portfolio',
    },
    {
      title: 'Pricing',
      icon: <DollarSign className='h-full w-full text-neutral-700 dark:text-neutral-300' />,
      href: '/pricing',
    },
    {
      title: 'Contact Us',
      icon: <Phone className='h-full w-full text-neutral-700 dark:text-neutral-300' />,
      href: '/contact',
    },
  ];

  return (
    <div className="fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 px-4">
      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <img 
          src={logo} 
          alt="Precision Media & Signs" 
          className="h-24 w-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Dock Navigation */}
      <div 
        ref={dockRef}
        onMouseMove={handleMouseMove}
        className="relative"
      >
        {/* Mouse light reflection */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 165, 0, 0.5), transparent)`,
          }}
        />
        
        <Dock 
          className="items-end pb-3 backdrop-blur-md bg-white/10 dark:bg-black/10 border-2 border-orange-500 shadow-lg shadow-orange-500/20"
          magnification={60}
          distance={100}
        >
          {navItems.map((item, idx) => (
            <Link key={idx} to={item.href}>
              <DockItem className='aspect-square rounded-full bg-gradient-to-br from-orange-400/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 hover:border-orange-500 transition-all'>
                <DockLabel className="bg-orange-50/90 dark:bg-orange-950/90 border-orange-500/50 text-orange-900 dark:text-orange-100">
                  {item.title}
                </DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ))}
        </Dock>
      </div>
    </div>
  );
};

export default Navigation;
