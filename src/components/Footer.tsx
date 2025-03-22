'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#577c8e] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo e Descrição */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Industria Marks</h2>
          <p className="mt-2 text-sm text-gray-200">
            Inovação e Precisão para a Indústria.
          </p>
        </div>

        {/* Links Rápidos */}
        <nav className="mb-6 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <li><a href="#" className="hover:text-gray-300 transition">Início</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Sobre</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Serviços</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Contato</a></li>
          </ul>
        </nav>

        {/* Ícones Sociais */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#577c8e] hover:bg-gray-200 transition">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#577c8e] hover:bg-gray-200 transition">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#577c8e] hover:bg-gray-200 transition">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Linha Separadora */}
      <div className="border-t border-gray-300 mt-6 opacity-50"></div>

      {/* Direitos Autorais */}
      <div className="text-center text-sm text-gray-200 mt-4">
        © {new Date().getFullYear()} Industria Marks. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
