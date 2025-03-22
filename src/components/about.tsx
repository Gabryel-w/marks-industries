'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/about-metal.jpg" // Incluir imagem real
            alt="Sobre nossa indústria"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Inovação e Precisão na Indústria Metalúrgica
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Com anos de experiência no setor, oferecemos soluções de alta qualidade, 
            combinando tecnologia de ponta e expertise técnica para atender às necessidades 
            do mercado.
          </p>
          <p className="mt-2 text-gray-700 text-lg">
            Nosso compromisso é com a excelência, garantindo produtos duráveis, precisos e 
            que impulsionam o crescimento dos nossos clientes.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Saiba Mais
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
