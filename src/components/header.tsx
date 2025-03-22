'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#5B7984] py-4 border-t-2 border-purple-500">
      <div className="container mx-auto flex items-center justify-between px-8">
        <nav className="flex-1 flex justify-start space-x-10 text-white">
          <Link href="#">
            <span className="cursor-pointer">Home</span>
          </Link>
          <Link href="#">
            <span className="cursor-pointer">About Us</span>
          </Link>
        </nav>
        
        <div className="flex-shrink-0 flex items-center">
          <Image src="/logo.png" alt="Marks Logo" width={80} height={80} />
        </div>
        
        <nav className="flex-1 flex justify-end space-x-10 text-white">
          <Link href="#">
            <span className="cursor-pointer">Products</span>
          </Link>
          <Link href="#">
            <span className="cursor-pointer">Contact Us</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
