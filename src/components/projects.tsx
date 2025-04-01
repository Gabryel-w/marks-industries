"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "@/lib/constants";
import {Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [activeFilter] = useState("all");
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const checkScrollable = () => {
    if (gridRef.current) {
      const { scrollWidth, clientWidth } = gridRef.current;
      setIsScrollable(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [filteredProjects]);

  const scroll = (direction: 'left' | 'right') => {
    if (gridRef.current) {
      const { scrollLeft, clientWidth } = gridRef.current;
      const newPosition = direction === 'left'
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;

      gridRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });

      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (gridRef.current) {
      setScrollPosition(gridRef.current.scrollLeft);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#F3F4F6]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-block bg-blue-600 rounded-lg px-3 py-1 text-white font-medium text-sm mb-3">
              Nosso Portfólio
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-[#1F2937]">
              Projetos <span className="text-blue-600">Metalúrgicos</span>
            </h2>
            <p className="text-lg text-gray-700">
              Conheça nossos projetos de fabricação metálica, desenvolvidos com precisão e qualidade.
            </p>
          </div>
        </div>

        <div className="relative">
          {isScrollable && (
            <>
              <button
                onClick={() => scroll('left')}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 shadow-md -ml-4 transition-opacity duration-300 ${scrollPosition <= 10 ? 'opacity-0' : 'opacity-100'
                  }`}
                disabled={scrollPosition <= 10}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 shadow-md -mr-4 transition-opacity duration-300 ${gridRef.current && scrollPosition >= gridRef.current.scrollWidth - gridRef.current.clientWidth - 10
                    ? 'opacity-0'
                    : 'opacity-100'
                  }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            ref={gridRef}
            onScroll={handleScroll}
            className="flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 group transition-all duration-300 hover:shadow-xl flex-shrink-0 snap-start hover-lift ${index === 0
                    ? "w-full sm:w-[calc(100%-1.5rem)] md:w-[calc(75%-1rem)] lg:w-[calc(65%-1rem)]"
                    : "w-[90%] sm:w-[calc(65%-0.75rem)] md:w-[calc(50%-1rem)] lg:w-[calc(40%-0.75rem)]"
                  }`}
                data-category={project.category}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {index === 0 && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-white" /> Destaque
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-[#1F2937] mt-1 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags && project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
