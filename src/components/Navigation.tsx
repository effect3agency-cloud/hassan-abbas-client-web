import { Briefcase, FolderOpen, DollarSign, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { title: "Services", icon: Briefcase, href: "/services" },
    { title: "Our Work", icon: FolderOpen, href: "/our-work" },
    { title: "Pricing", icon: DollarSign, href: "/pricing" },
    { title: "Contact Us", icon: Mail, href: "/contact" },
  ];

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1200px]">
      <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 border-2 border-orange-500 bg-white/10 backdrop-blur-[20px] shadow-[0_0_25px_rgba(249,115,22,0.25)] transition-all hover:shadow-[0_0_35px_rgba(249,115,22,0.5)]">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="flex flex-col items-center gap-1 md:gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-all hover:scale-105"
          >
            <item.icon className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-[10px] md:text-xs font-medium">{item.title}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
