"use client"

import { useState, useEffect } from "react";
import { Hammer, Menu, X, PhoneCall } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY - 100;
        const sectionHeight = rect.height;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white shadow-sm' : 'py-4 bg-transparent'}`} id="navbar">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-heading font-bold flex items-center text-gray-800 gap-2">
          <span className="text-primary">
            <Hammer className="h-6 w-6" />
          </span>
          <span>Industria<span className="text-primary font-light">Marks</span></span>
        </a>
        
        {/* Contact info - desktop only */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-700">
            <PhoneCall className="h-4 w-4 text-primary" />
            <span className="text-sm">(555) 123-4567</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm hover:text-primary transition-colors py-2 relative text-gray-700 font-medium ${
                      activeSection === link.href.replace("#", "") 
                        ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
        </div>
        
        {/* Mobile Nav/Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <a href="tel:5551234567" className="text-primary">
            <PhoneCall className="h-5 w-5" />
          </a>
          
          <button 
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="container mx-auto px-4 py-20">
          <button
            className="absolute top-4 right-4 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <nav>
            <ul className="space-y-6 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block text-xl font-medium transition-colors py-2 ${
                      activeSection === link.href.replace("#", "") ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 flex justify-center">
              <button 
              
                className="rounded-full px-8"
              >
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                  Contact Us
                </a>
              </button>
            </div>
            
            <div className="mt-12 text-center text-gray-600">
              <p className="mb-2 text-sm">Have questions? Call us</p>
              <a href="tel:5551234567" className="text-primary font-medium text-lg">
                (555) 123-4567
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
