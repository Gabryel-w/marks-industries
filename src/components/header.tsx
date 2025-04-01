"use client";

import { useState, useEffect } from "react";
import { Hammer, Menu, X, PhoneCall } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inHeroSection, setInHeroSection] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      const offset = 50;

      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setInHeroSection(rect.top >= -offset && rect.bottom > offset);
      }

      setScrolled(window.scrollY > offset);

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
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white shadow-sm" : "py-4 bg-transparent"
      }`}
      id="navbar"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className={`text-xl font-heading font-bold flex items-center gap-2 transition-colors ${
            inHeroSection ? "text-white" : "text-gray-800"
          }`}
        >
          <Hammer className={`h-6 w-6 transition-colors ${inHeroSection ? "text-white" : "text-blue-600"}`} />
          <span>Marks<span className="font-light">Indústria</span></span>
        </a>

        {/* Contato (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className={`flex items-center gap-2 transition-colors ${inHeroSection ? "text-gray-300" : "text-gray-700"}`}>
            <PhoneCall className={`h-4 w-4 transition-colors ${inHeroSection ? "text-white" : "text-blue-600"}`} />
            <span className="text-sm">(555) 123-4567</span>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium relative transition-colors ${
                      inHeroSection ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"
                    } ${
                      activeSection === link.href.replace("#", "")
                        ? "text-blue-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
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

        {/* Menu Mobile */}
        <div className="flex lg:hidden items-center gap-4">
          <a href="tel:5551234567" className={`${inHeroSection ? "text-white" : "text-blue-600"}`}>
            <PhoneCall className="h-5 w-5" />
          </a>

          <button
            className={`${inHeroSection ? "text-white" : "text-gray-700"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navegação Mobile */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="container mx-auto px-4 py-20">
          <button className="absolute top-4 right-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
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
                      activeSection === link.href.replace("#", "") ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            

            <div className="mt-12 text-center text-gray-600">
              <p className="mb-2 text-sm">Tem dúvidas? Ligue para nós</p>
              <a href="tel:5551234567" className="text-blue-600 font-medium text-lg">
                (555) 123-4567
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
