"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaCopy, FaCheck, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "999999999";
  const email = "EMAIL@DOMINIO.COM";
  const address = "Rua Exemplo, 123 - Cidade, Estado";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Rua+Exemplo,+123+-+Cidade,+Estado";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <section className="bg-gray-100 py-24 px-6 w-full">
      <div className="w-full bg-white shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contato */}
        <div className="flex flex-col items-start space-y-6 px-6">
          <h2 className="text-3xl font-bold text-gray-800">Entre em Contato</h2>
          <p className="text-gray-600 text-lg">Estamos aqui para ajudar! Entre em contato pelo e-mail ou WhatsApp.</p>
          
          <div
            onClick={handleCopyEmail}
            className="flex items-center justify-between bg-blue-600 text-white rounded-lg p-4 w-full max-w-lg cursor-pointer transition-all duration-300 hover:bg-blue-700 shadow-md"
          >
            <span>{email}</span>
            <button>{isCopied ? <FaCheck size={20} /> : <FaCopy size={20} />}</button>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-300 hover:bg-green-600"
          >
            <FaWhatsapp size={24} /> Fale conosco no WhatsApp
          </a>
        </div>

        {/* Endereço */}
        <div className="flex flex-col items-start space-y-6 px-6">
          <h2 className="text-3xl font-bold text-gray-800">Nosso Endereço</h2>
          <p className="text-gray-600 text-lg">Visite-nos em nosso escritório para um atendimento presencial.</p>
          
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-200 text-gray-800 rounded-lg p-4 w-full max-w-lg shadow-md transition-all duration-300 hover:bg-gray-300"
          >
            <FaMapMarkerAlt size={24} className="text-red-500" />
            <span>{address}</span>
          </a>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-46.625290!3d-23.533773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c3b2a3b3bb%3A0x4e09a5a2b3f2b6c3!2sRua+Exemplo%2C+123+-+Cidade%2C+Estado!5e0!3m2!1sen!2sbr!4v1640000000000!5m2!1sen!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
