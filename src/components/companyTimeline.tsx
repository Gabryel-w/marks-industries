"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaCogs, FaRocket, FaTrophy } from "react-icons/fa";

const timelineData = [
  {
    year: "2000",
    title: "Fundação da Empresa",
    description: "Início da nossa jornada no setor metalúrgico, com foco na qualidade e inovação.",
    icon: <FaBuilding size={24} />,
  },
  {
    year: "2010",
    title: "Expansão da Fábrica",
    description: "Investimos em novas tecnologias e ampliamos nossa capacidade de produção.",
    icon: <FaCogs size={24} />,
  },
  {
    year: "2020",
    title: "Liderança no Setor",
    description: "Nos tornamos referência em soluções metalúrgicas, conquistando certificações importantes.",
    icon: <FaTrophy size={24} />,
  },
  {
    year: "2025",
    title: "Rumo ao Futuro",
    description: "Continuamos inovando e buscando excelência para atender às demandas do mercado.",
    icon: <FaRocket size={24} />,
  },
];

export default function CompanyTimeline() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossa Trajetória</h2>
        <p className="text-gray-600 text-lg mb-12">
          Conheça os principais marcos da nossa história e evolução ao longo dos anos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative border-l-4 border-gray-800 pl-6 space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -left-8 top-0 bg-gray-800 text-white p-3 rounded-full shadow-lg">
              {item.icon}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-gray-500 font-semibold">{item.year}</span>
              <h3 className="text-xl font-bold text-gray-800 mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
