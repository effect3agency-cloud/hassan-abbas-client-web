import { Briefcase, FolderOpen, DollarSign, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { title: "Services", icon: Briefcase, href: "/services" },
    { title: "Our Work", icon: FolderOpen, href: "/our-work" },
    { title: "Pricing", icon: DollarSign, href: "/pricing" },
    { title: "Contact Us", icon: Mail, href: "/contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-4 rounded-3xl px-6 py-3 border-2 border-orange-500 bg-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(249,115,22,0.25)]">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="flex flex-col items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-colors"
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs font-medium">{item.title}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
