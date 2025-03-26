"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const images = [
  "/images/factory1.jpg",
  "/images/factory2.jpg",
  "/images/factory3.jpg",
  "/images/factory4.jpg",
  "/images/factory5.jpg",
  "/images/factory6.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Nossa Fábrica</h2>
        <p className="text-gray-600 mb-12 text-lg">Confira algumas imagens da nossa infraestrutura e processos produtivos.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <Image
              src={img}
              alt={`Imagem ${index + 1}`}
              width={500}
              height={300}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={24} />
            </button>
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
