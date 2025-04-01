"use client";

import { useState } from "react";
import { galleryImages } from "@/lib/constants";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [activeFilter] = useState("all");
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  const handleImageClick = (index: number) => {
    setOpenImageIndex(index);
  };

  const handleModalClose = () => {
    setOpenImageIndex(null);
  };

  const showNextImage = () => {
    if (openImageIndex === null) return;
    setOpenImageIndex((openImageIndex + 1) % filteredImages.length);
  };

  const showPrevImage = () => {
    if (openImageIndex === null) return;
    setOpenImageIndex((openImageIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[#1E293B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D97706]/20 rounded-lg px-3 py-1 text-[#D97706] font-medium text-sm mb-3">
            Nossa Galeria
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
            Registros da <span className="text-[#D97706]">Metalurgia</span>
          </h2>
        </div>
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-xl relative group cursor-pointer shadow-md hover:shadow-lg transition-shadow"
              onClick={() => handleImageClick(index)}
            >
              <img 
                src={image.image} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <ZoomIn className="h-10 w-10 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {openImageIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-5xl p-4">
            <button 
              onClick={handleModalClose}
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
            >
              <X className="h-6 w-6" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); showNextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="bg-black/90 rounded-xl overflow-hidden p-2">
              <img 
                src={filteredImages[openImageIndex].image} 
                alt={filteredImages[openImageIndex].title} 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
