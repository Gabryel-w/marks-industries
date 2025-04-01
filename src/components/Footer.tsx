"use client"

import { 
  Facebook, 
  Instagram, 
  Mail,
  MapPin,
  Phone,
  Clock,
  Hammer 
} from "lucide-react";
import { footerLinks } from "@/lib/constants";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const rect = element.getBoundingClientRect();
        window.scrollTo({
          top: rect.top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-[#1E40AF] border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-primary/10 p-2 rounded-md text-white">
                <Hammer className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold text-white">Indústria<span className="text-white font-light">Marks</span></span>
            </div>
            <p className="text-white mb-6">
              A family tradition of quality metalwork since 1998. Crafting precision components with personal care and attention to detail.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-100 hover:bg-primary/10 text-primary p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-primary/10 text-primary p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:marks@gmail.com" className="bg-gray-100 hover:bg-primary/10 text-primary p-2 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white text-lg mb-5">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-white text-sm">
                  123 Craftsman Way<br />
                  Industrial District<br />
                  Anytown, ST 12345
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <p className="text-white text-sm">
                  (555) 123-4567
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <p className="text-white text-sm">
                 industiraMarks@gmail.com
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-white text-sm">
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Indústria Marks. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            {footerLinks.legal.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
