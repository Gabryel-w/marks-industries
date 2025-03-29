"use client"

import { ChevronDown, Calendar, Award, Users } from "lucide-react";

export default function Hero() {
  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pb-16 pt-32 bg-[#FFECCC]">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-secondary/20 to-secondary/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533630654593-b391f34065bc?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block bg-primary/10 text-primary font-medium text-sm px-4 py-1 rounded-full">Family Owned Since 1970</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent leading-tight">
              Craftsmanship in <br /> Every Detail
            </h1>

            <p className="text-lg text-gray-700 max-w-xl">
              A family tradition of quality metalwork, delivering personalized solutions with care and precision for over two decades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                onClick={handleScroll("waitlist")}
                className="px-6 py-3 bg- font-medium rounded-full shadow-lg text-center"
              >
                Get a Quote
              </a>

              <a
                href="#services"
                onClick={handleScroll("services")}
                className="px-6 py-3 border border-primary/30 hover:border-primary/50 text-gray-700 font-medium rounded-full text-center"
              >
                Our Services
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-6">
              {[{ icon: Calendar, text: "25+ Years" }, { icon: Award, text: "Quality Guaranteed" }, { icon: Users, text: "Family Business" }].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=640&q=80"
              alt="Skilled metalworker in family workshop"
              className="w-full h-auto rounded-2xl object-cover shadow-xl relative z-10"
            />
            <div className="absolute bottom-8 -right-4 bg-white p-5 rounded-xl shadow-lg z-20">
              <p className="text-sm font-medium text-gray-700">
                "Crafting precision metal components with the same care we've had for generations."
              </p>
              <p className="text-xs text-primary mt-2 font-medium">— Marks - fundador</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce">
        <a
          href="#services"
          onClick={handleScroll("services")}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-sm font-medium">Discover Our Work</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
