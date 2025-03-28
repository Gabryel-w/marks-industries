import Image from 'next/image';

const products = [
  { id: 1, name: 'Globo da morte', description: 'construimos sob medida golobos da morte para circo', image: '/product1.jpg' },
  { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', image: '/images/product2.jpg' },
  { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3', image: '/images/product3.jpg' },
];

export default function Products() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Nossos Produtos</h2>
        <p className="text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
          Descubra a qualidade e inovação dos nossos produtos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
