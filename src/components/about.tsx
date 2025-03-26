"use client";

import React from "react";

export default function CompanyHistory() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Nossa História</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Desde nossa fundação, buscamos inovação e excelência na indústria
          metalúrgica. Ao longo dos anos, crescemos, evoluímos e nos tornamos
          referência no setor, sempre comprometidos com qualidade e inovação.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <img
            src="/images/history.jpg"
            alt="Nossa trajetória"
            className="w-full rounded-lg shadow-lg object-cover h-96"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">Do Passado ao Futuro</h3>
          <p className="text-gray-300 text-lg">
            Com décadas de experiência, nossa empresa se destacou pelo compromisso
            com a inovação, sustentabilidade e excelência. Cada peça produzida é
            resultado de um processo meticuloso e de alta qualidade.
          </p>
          <p className="text-gray-300 text-lg">
            Hoje, continuamos expandindo nossos horizontes, investindo em tecnologia e
            garantindo soluções cada vez mais eficientes para nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
