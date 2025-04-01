"use client";

export default function About() {
  const stats = [
    { value: "25+", label: "Anos de Experiência" },
    { value: "500+", label: "Projetos Completos" },
    { value: "50+", label: "Parceiros da Indústria" },
    { value: "12", label: "Prêmios Recebidos" }
  ];

  return (
    <section id="about" className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-gray-900">
              Sobre <span className="text-blue-600">Indústria Marks</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Fundada em 2010, a Indústria Marks se tornou uma referência em soluções metalúrgicas avançadas. Nosso compromisso com inovação, precisão e qualidade nos torna parceiros confiáveis para diversas indústrias ao redor do mundo.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Contamos com instalações de ponta e uma equipe experiente de engenheiros e metalurgistas, entregando soluções completas desde o conceito até a produção para setores como aeroespacial, automotivo e manufatura industrial.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-heading font-bold text-blue-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              "about/about3.jpg",
              "https://images.unsplash.com/photo-1473621038790-b778b4750efe?auto=format&fit=crop&w=640&q=80",
              "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=640&q=80",
              "/about/about1.jpg"

            ].map((src, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
              >
                <img src={src} alt="Imagem da Indústria" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
