"use client"

import { useState } from "react";
import { galleryImages } from "@/lib/constants";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "All Images" },
  { id: "process", name: "Manufacturing Process" },
  { id: "workshop", name: "Workshop" },
  { id: "quality", name: "Quality Control" }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
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
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
            Behind The <span className="text-primary">Scenes</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {galleryCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={activeFilter === category.id 
                ? "bg-primary text-white border-primary hover:bg-primary/90" 
                : "bg-white hover:bg-gray-100 text-gray-700 border-gray-200"
              }
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-xl relative group cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img 
                src={image.image} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <ZoomIn className="h-10 w-10 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {openImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-5xl p-4">
            <button 
              onClick={handleModalClose}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); showNextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="bg-black bg-opacity-90 rounded-xl overflow-hidden">
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
