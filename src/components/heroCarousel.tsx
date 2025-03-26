'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'Transformando Ideias em Realidade',
    description: 'Soluções inovadoras para impulsionar seu negócio.',
    image: '/slide1.jpg',
  },
  {
    id: 2,
    title: 'Qualidade e Precisão',
    description: 'Produzimos com alta tecnologia e excelência.',
    image: '/slide2.jpg',
  },
  {
    id: 3,
    title: 'Inovação na Indústria',
    description: 'Modernizamos processos para máxima eficiência.',
    image: '/slide3.jpg',
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[800px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[800px] flex items-center justify-center">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority
              />
              {/* Escurecimento ajustado para melhor contraste */}
              <div className="absolute inset-0 bg-black/80"></div>
              
              <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl font-medium drop-shadow-md">
                  {slide.description}
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                  Saiba Mais
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
