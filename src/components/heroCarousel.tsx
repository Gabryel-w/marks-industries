'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'Transformando Ideias em Realidade',
    description: 'Soluções inovadoras para impulsionar seu negócio.',
    image: '/images/slide1.jpg',
  },
  {
    id: 2,
    title: 'Qualidade e Precisão',
    description: 'Tecnologia de ponta para atender suas necessidades.',
    image: '/images/slide2.jpg',
  },
  {
    id: 3,
    title: 'O Futuro Começa Aqui',
    description: 'Junte-se a nós e construa algo incrível.',
    image: '/images/slide3.jpg',
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
        className="w-full h-full custom-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[800px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-base md:text-lg">{slide.description}</p>
                <button className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition">
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
