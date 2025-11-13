import { Dock, DockItem, DockLabel, DockIcon } from "@/components/ui/dock";
import { Briefcase, FolderOpen, DollarSign, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { title: "Services", icon: Briefcase, href: "/services" },
    { title: "Our Work", icon: FolderOpen, href: "/our-work" },
    { title: "Pricing", icon: DollarSign, href: "/pricing" },
    { title: "Contact Us", icon: Mail, href: "/contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <Dock>
        {navItems.map((item) => (
          <DockItem key={item.title}>
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <a href={item.href} className="flex items-center justify-center h-full w-full">
                <item.icon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </a>
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
};

export default Navigation;
