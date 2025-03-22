'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição breve do produto 1.',
    price: 'R$ 199,90',
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição breve do produto 2.',
    price: 'R$ 299,90',
    image: '/images/product2.jpg',
  },
  {
    id: 3,
    name: 'Produto 3',
    description: 'Descrição breve do produto 3.',
    price: 'R$ 399,90',
    image: '/images/product3.jpg',
  },
  {
    id: 4,
    name: 'Produto 4',
    description: 'Descrição breve do produto 4.',
    price: 'R$ 499,90',
    image: '/images/product4.jpg',
  },
];

const Products = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Nossos Produtos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={300} 
                height={200} 
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <p className="text-lg font-bold text-blue-600 mt-4">{product.price}</p>
                <div className="mt-4 flex justify-between">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    Comprar
                  </button>
                  <Link href="#">
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      Detalhes
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
