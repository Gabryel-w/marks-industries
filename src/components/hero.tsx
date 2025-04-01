"use client";

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
    <section id="home" className="relative min-h-screen flex items-center pb-16 pt-32 bg-[#1E40AF]">
      {/* Fundo gradiente azul médio */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1E3A8A]/90 to-[#1E40AF]/85">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533630654593-b391f34065bc?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block bg-blue-700 text-white font-medium text-sm px-4 py-1 rounded-full">
              Tradição desde 1970
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
              Precisão e Qualidade <br /> em Cada Detalhe
            </h1>

            <p className="text-lg text-gray-200 max-w-xl">
              Compromisso com a excelência em metalurgia, oferecendo soluções personalizadas com precisão e inovação há mais de duas décadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={handleScroll("contact")}
                className="px-6 py-3 text-white bg-blue-600 font-medium rounded-full shadow-lg text-center hover:bg-blue-700 transition"
              >
                Faça um Orçamento
              </a>

              <a
                href="#services"
                onClick={handleScroll("services")}
                className="px-6 py-3 text-white bg-blue-600 font-medium rounded-full text-center hover:bg-blue-700 transition"
              >
                Serviços
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-6">
              {[
                { icon: Calendar, text: "25+ Anos" },
                { icon: Award, text: "Qualidade Garantida" },
                { icon: Users, text: "Empresa Familiar" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=640&q=80"
              alt="Trabalhador metalúrgico especializado"
              className="w-full h-auto rounded-2xl object-cover shadow-xl relative z-10"
            />
            <div className="absolute bottom-8 -right-4 bg-[#1E3A8A] p-5 rounded-xl shadow-lg z-20">
              <p className="text-sm font-medium text-gray-200">
                "Produzindo peças metálicas com precisão e dedicação há gerações."
              </p>
              <p className="text-xs text-blue-300 mt-2 font-medium">— Marks - Fundador</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a
          href="#services"
          onClick={handleScroll("services")}
          className="flex flex-col items-center"
        >
          <span className="mb-2 text-sm font-medium">Conheça Nosso Trabalho</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
