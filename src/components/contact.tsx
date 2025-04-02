"use client";
import { Phone, Clock, Facebook, Instagram, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const openWhatsApp = () => {
    const whatsappNumber = "5551234567";
    const message = "Olá! Tenho interesse nos serviços da sua metalúrgica.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-700/10 rounded-lg px-3 py-1 text-blue-700 font-medium text-sm mb-3">
            Entre em Contato
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
            Fale com a <span className="text-blue-700">Nossa Equipe</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tem dúvidas sobre nossos serviços de metalurgia? Nossa equipe está pronta para atendê-lo. Envie uma mensagem e receba um atendimento personalizado.
          </p>

          <button
            onClick={openWhatsApp}
            className="bg-[#25D366] hover:bg-[#22c35e] text-white font-semibold rounded-full px-6 py-3 flex items-center gap-3 shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <MessageSquare className="h-6 w-6" />
            Fale Conosco pelo WhatsApp
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Respondemos em até 1-2 horas durante o horário comercial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-700/10 p-3 rounded-full text-blue-700 mb-4 mt-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-gray-900 text-lg mb-2">Localização da Oficina</h3>
              <p className="text-gray-600 mb-4">
                Rua dos Metalúrgicos, 123<br />
                Distrito Industrial<br />
                São Paulo, SP - 01000-000
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-700/10 p-3 rounded-full text-blue-700 mb-4 mt-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-gray-900 text-lg mb-2">Telefone & E-mail</h3>
              <p className="text-gray-600 mb-2">(11) 98765-4321</p>
              <p className="text-gray-600 mb-4">contato@metalurgica.com.br</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-700/10 p-3 rounded-full text-blue-700 mb-4 mt-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-gray-900 text-lg mb-2">Horário de Funcionamento</h3>
              <div className="text-gray-600 space-y-1 mb-4">
                <p className="flex justify-between gap-4">
                  <span className="font-medium">Seg - Sex:</span>
                  <span>08:00 - 18:00</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span className="font-medium">Sábado:</span>
                  <span>08:00 - 12:00</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span className="font-medium">Domingo:</span>
                  <span>Fechado</span>
                </p>
              </div>
              <div className="flex space-x-3 mt-auto">
                <a href="#" className="bg-gray-100 hover:bg-blue-700/10 text-blue-700 p-2 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-blue-700/10 text-blue-700 p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-sm max-w-5xl mx-auto h-80">
          <iframe
            title="Localização no Google Maps"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95373631531673!3d-37.81627917975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c6d9d4ad6ab94a!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1646285942898!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
