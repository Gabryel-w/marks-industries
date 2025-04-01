"use client";

import Image from "next/image";
import { ArrowRight, Heart, Shield, Clock, Award } from "lucide-react";
import { services } from "@/lib/constants";

export default function Services() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contact = document.getElementById("contact");
    if (contact) {
      window.scrollTo({
        top: contact.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#1E40AF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block bg-blue-600 rounded-lg px-3 py-1 text-white font-medium text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
            Soluções Metalúrgicas <span className="text-white">de Excelência</span>
          </h2>
          <p className="text-lg text-gray-300">
            Com mais de 25 anos de experiência, entregamos fabricação metálica de qualidade com um toque personalizado. Cada projeto recebe o cuidado e a precisão que merece.
          </p>
        </div>

        {/* Valores da empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 mb-20">
          {[
            { icon: Heart, title: "Atendimento Personalizado", text: "Cada cliente é tratado como parte da família." },
            { icon: Shield, title: "Qualidade Garantida", text: "Nosso nome está em cada peça que produzimos." },
            { icon: Clock, title: "Entrega Pontual", text: "Compromisso com prazos sem comprometer a qualidade." },
            { icon: Award, title: "Expertise Legado", text: "Conhecimento passado por gerações." },
          ].map((item, index) => (
            <div key={index} className="text-center px-4">
              <div className="w-14 h-14 rounded-full bg-[#374151] text-yellow-300 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-medium text-white text-lg mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Serviços oferecidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={640} 
                  height={400} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={service.id === 1} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-medium text-white text-xl">{service.title}</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a
                href="#contact"
                className="text-yellow-300 font-medium hover:text-[#D97706]/80 transition-colors inline-flex items-center"
                onClick={scrollToContact}
              >
                Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
