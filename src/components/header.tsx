'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#577c8e] py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 relative">
        
        <nav className="hidden lg:flex flex-1 justify-start space-x-10 text-white">
          <Link href="#"><span className="cursor-pointer hover:text-gray-200 transition">Inicio</span></Link>
          <Link href="#"><span className="cursor-pointer hover:text-gray-200 transition">Sobre</span></Link>
        </nav>

        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Marks Logo" width={150} height={100} />
        </div>

        <nav className="hidden lg:flex flex-1 justify-end space-x-10 text-white">
          <Link href="#"><span className="cursor-pointer hover:text-gray-200 transition">Produtos</span></Link>
          <Link href="#"><span className="cursor-pointer hover:text-gray-200 transition">Contato</span></Link>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`fixed top-[130px] w-full bg-[#577c8e] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out 
        ${isMenuOpen ? "opacity-100 h-[300px]" : "opacity-0 h-0 overflow-hidden"}`}
      >
        <nav className="flex flex-col items-center space-y-6 text-white text-xl py-4">
          <Link href="#"><span className="cursor-pointer hover:text-gray-200 transition">Inicio</span></Link>
          <Link href="#"><span className="cursor-pointer hover:text-gray-200 transition">Sobre</span></Link>
          <Link href="#"><span className="cursor-pointer hover:text-gray-200 transition">Produtos</span></Link>
          <Link href="#"><span className="cursor-pointer hover:text-gray-200 transition">Contato</span></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
