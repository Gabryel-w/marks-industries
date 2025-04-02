"use client"

import { ChevronDown, Calendar, Sparkles, Hammer, Shield, Zap, Cog, Award, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const metalFeatures = [
  {
    icon: <Hammer />,
    title: "Artesanato de Precisão",
    description: "Trabalhamos com metal com atenção aos mínimos detalhes",
    delay: 100,
  },
  {
    icon: <Shield />,
    title: "Qualidade Garantida",
    description: "Testes rigorosos e certificação líder do setor",
    delay: 200,
  },
  {
    icon: <Sparkles />,
    title: "Soluções Personalizadas",
    description: "Metalurgia sob medida para suas especificações únicas",
    delay: 300,
  },
  {
    icon: <Zap />,
    title: "Entrega Rápida",
    description: "Produção eficiente sem comprometer a qualidade",
    delay: 400,
  },
  {
    icon: <Calendar />,
    title: "Mais de 25 Anos de Experiência",
    description: "Uma tradição familiar de excelência desde 1998",
    delay: 500,
  },
  {
    icon: <Cog />,
    title: "Técnicas Avançadas",
    description: "Combinamos expertise tradicional com tecnologia moderna",
    delay: 600,
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const metalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setIsTextVisible(true), 500);
    const timer3 = setTimeout(() => setIsImageVisible(true), 700);
    const timer4 = setTimeout(() => setIsGridVisible(true), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!metalRef.current) return;

      const { left, top, width, height } = metalRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const posX = (x / width) * 100;
      const posY = (y / height) * 100;

      metalRef.current.style.setProperty('--x-pos', `${posX}%`);
      metalRef.current.style.setProperty('--y-pos', `${posY}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-[#1E40AF] min-h-[1600px] md:min-h-screen">

      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 10%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 10%),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.3) 0%, transparent 10%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 8%)
          `
        }}
      ></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 1px, transparent 1px, transparent 15px)`
        }}></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 1px, transparent 1px, transparent 15px)`
        }}></div>
      </div>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full translate-x-1/2 -translate-y-1/2 bg-blue-400/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full -translate-x-1/2 translate-y-1/2 bg-blue-300/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container relative mx-auto px-4 pt-20 pb-10 z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-8 z-10">
            <div className={`transition-all duration-700 transform ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30">
                <Award className="h-4 w-4 text-blue-200" />
                <span className="text-blue-200 font-medium text-sm">Empresa familiar desde 1970</span>
              </div>
            </div>

            <div
              ref={metalRef}
              className={`relative transition-all duration-1000 transform ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl relative z-10">
                <span className="block text-white">Forjando</span>
                <span
                  className="block bg-clip-text text-transparent pb-2 metallic-text"
                  style={{
                    backgroundImage: `
                    linear-gradient(
                      135deg, 
                      rgba(255, 255, 255, 0.4) 0%, 
                      rgba(255, 255, 255, 0.9) 50%, 
                      rgba(255, 255, 255, 0.5) 100%
                    )
                  `,
                  }}
                >
                  Excelência
                </span>
                <span className="block text-white">em Metal</span>
              </h1>

              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  background: `radial-gradient(circle at var(--x-pos, 50%) var(--y-pos, 50%), rgba(255,255,255,0.8), transparent 80%)`,
                  mixBlendMode: 'overlay'
                }}
              ></div>
            </div>

            <p className={`text-lg text-blue-100 max-w-xl leading-relaxed transition-all duration-700 delay-150 transform ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Uma tradição familiar em metalurgia excepcional, unindo precisão artesanal e soluções inovadoras. Nosso atendimento personalizado transforma seus projetos mais desafiadores em realidade.
            </p>

            <div className={`flex flex-col sm:flex-row gap-5 transition-all duration-700 delay-200 transform ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

              <button
                className="border-2 rounded-xl border-blue-300/40 text-white hover:bg-blue-700 font-medium px-8 transition-all duration-300 hover:-translate-y-1 group"
              >
                <a href="#services" onClick={handleScrollDown} className="flex items-center justify-between">
                  <span>Nossos Serviços</span>
                  <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative z-10">
            <div className={`relative transition-all duration-1000 ease-out transform ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative perspective-effect h-[500px] overflow-hidden rounded-2xl hidden lg:block lg:col-span-7 relative z-10">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/20 mix-blend-multiply z-10"></div>
                  <Image
                    src="/slide1.jpg"
                    alt="Skilled metalworker"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-t-xl shadow-2xl"
                  />
                </div>

                <div className="absolute -top-4 left-[20%] w-32 h-32 rounded-lg bg-gradient-to-br from-blue-200 to-white/80 shadow-xl transform rotate-12 z-20 backdrop-blur-sm animate-float-slow"></div>
                <div className="absolute top-[30%] -right-6 w-40 h-40 rounded-lg bg-gradient-to-tl from-blue-300/80 to-white/80 shadow-xl transform -rotate-6 z-20 backdrop-blur-sm animate-float-slow" style={{ animationDelay: '1.5s' }}></div>

                <div className="absolute top-[15%] left-[10%] bg-white/95 p-5 rounded-xl shadow-xl max-w-[240px] z-40 backdrop-blur-sm transform -rotate-3 transition-all duration-300 hover:rotate-0">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-[#1E40AF] font-bold text-lg">Engenharia de Precisão</h3>
                    <div className="w-full h-1 bg-gradient-to-r from-blue-300 to-[#1E40AF] rounded-full"></div>
                    <p className="text-gray-700 text-sm">
                      &quot;O segredo do nosso sucesso está na dedicação e no compromisso com a qualidade em cada peça que produzimos.&quot;
                    </p>

                    <div className="flex justify-end items-center text-sm font-semibold text-[#1E40AF]">
                      — Marks
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-500 transform ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metalFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-blue-900/80 to-blue-800/80 backdrop-blur-sm rounded-xl p-5 border border-blue-700/50 transition-all duration-500 cursor-pointer
                  hover:shadow-lg hover:border-blue-500/80 hover:-translate-y-1 overflow-hidden
                  ${activeFeature === index ? 'ring-2 ring-blue-300' : ''}
                  transition-all duration-500 transform
                  ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${feature.delay}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="p-3 bg-blue-800 rounded-lg text-blue-200 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                    <p className="text-blue-200 text-sm">{feature.description}</p>
                  </div>
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full"
                  style={{ transitionDuration: '1.5s' }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className={`absolute mt-2 lg:mt-8 left-1/2 transform -translate-x-1/2 text-blue-200 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#services"
            onClick={handleScrollDown}
            className="flex flex-col items-center group"
          >
            <span className="mb-2 text-sm font-medium text-blue-200 group-hover:text-white transition-colors">Explore Nossa Expertise</span>
            <div className="p-2 rounded-full border border-blue-400/30 group-hover:border-blue-300 group-hover:bg-blue-800/50 transition-all">
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </div>
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .metallic-text {
          background-size: 200% 200%;
          animation: shimmer 5s infinite linear;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        
        .perspective-effect {
          transform-style: preserve-3d;
          transform: perspective(1000px) rotateX(5deg);
        }
        
        .animate-float-slow {
          animation: float 7s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotation, 0deg)); }
        }
      `}} />
    </section>
  );
}
