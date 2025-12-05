import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact-us" },
  ];

  const services = [
    { name: "Sign Manufacturing", href: "#services" },
    { name: "Sign Installation", href: "#services" },
    { name: "Design & Permits", href: "#services" },
    { name: "Premium Services", href: "#premium-services" },
    { name: "Sign Permitting", href: "#sign-permitting" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584366973268", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/precisionsignsandmedia/", color: "hover:text-pink-600" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Precision Media & Signs Logo" 
                className="h-12 w-12 rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold text-orange-500">
                Precision Signs
              </h3>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              A leader in the signage industry since 1995, renowned for blending craftsmanship with innovation to light up the Texas landscape.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 text-sm text-white/90">
                <MapPin className="h-4 w-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>9476 Hwy 6 South, Houston, TX 77083</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <a href="tel:8329702805" className="hover:text-orange-500 transition-colors">
                  832 970-2805
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@precisionsignsmedia.com" className="hover:text-orange-500 transition-colors">
                  info@precisionsignsmedia.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/90 hover:text-orange-500 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-orange-500 mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-white/90 hover:text-orange-500 transition-colors inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-orange-500 mb-4">Connect With Us</h4>
            <p className="text-sm text-white/90 mb-4">
              Follow us on social media for updates and inspiration.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-700 border border-gray-600 hover:bg-orange-500 transition-all hover:scale-110 hover:shadow-md group"
                    aria-label={`Follow us on ${social.name}`}
                    title={`Follow us on ${social.name}`}
                  >
                    <Icon className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-white/70 mt-3">
              Working on social media? Connect with us on our platforms!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-white/80 text-center">
              © {currentYear} Precision Media & Signs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
