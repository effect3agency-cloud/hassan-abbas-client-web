import { Home, Briefcase, FolderOpen, BookOpen } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { title: "Home", icon: Home, href: "/" },
    { title: "Services", icon: Briefcase, href: "#services" },
    { title: "Portfolio", icon: FolderOpen, href: "#portfolio" },
    { title: "Resources", icon: BookOpen, href: "#resources" },
  ];

  return (
    <nav className="sticky top-4 left-1/2 -translate-x-1/2 z-50 w-fit mx-auto">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 justify-center rounded-xl md:rounded-2xl px-4 md:px-6 py-2.5 md:py-3 border-2 border-orange-500 bg-white/95 dark:bg-gray-900/95 backdrop-blur-[20px] shadow-[0_0_25px_rgba(249,115,22,0.25)]">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="flex items-center gap-2 text-foreground hover:text-orange-500 transition-all hover:scale-105 px-3 py-1.5 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/30"
          >
            <item.icon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm font-medium hidden sm:inline">{item.title}</span>
          </a>
        ))}
        
        <a
          href="#contact"
          className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700 transition-all text-xs md:text-sm font-medium ml-2"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
