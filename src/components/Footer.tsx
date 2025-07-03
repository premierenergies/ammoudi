import { Mail, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:info@paradisemykonos.gr" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">Paradise Mykonos</h3>
            <p className="text-blue-100 leading-relaxed">
              Experience luxury at our boutique hotel in the heart of Mykonos, 
              where Cycladic elegance meets modern comfort just steps from Paradise Beach.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:rotate-12"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-blue-100 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Contact Details</h4>
            <div className="space-y-3 text-blue-100">
              <div>
                <p className="font-medium text-white">Address</p>
                <p>Paradise Beach, Mykonos<br />South Aegean, Greece 84600</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>+30 22890 23456</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p>reservations@paradisemykonos.gr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-blue-100 text-sm">
              © {currentYear} Paradise Mykonos. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-blue-100 hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-blue-100 hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};