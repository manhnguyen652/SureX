'use client';

import { ProductCard } from './product-card';

const MOCK_PRODUCTS = [
  {
    id: 1,
    category: 'Game',
    title: 'Tài khoản PUBG Mobile VIP',
    price: '1,500,000 VNĐ',
    seller: 'Người bán A',
    image: '/products/pubg-mobile.jpg',
  },
  {
    id: 2,
    category: 'Software',
    title: 'Adobe Creative Suite - 1 năm',
    price: '2,800,000 VNĐ',
    seller: 'Người bán B',
    image: '/products/adobe-creative.jpg',
  },
  {
    id: 3,
    category: 'Game',
    title: 'Steam Account Premium',
    price: '3,200,000 VNĐ',
    seller: 'Người bán C',
    image: '/products/stream-account.jpg',
  },
  {
    id: 4,
    category: 'Social',
    title: 'Instagram Business',
    price: '5,000,000 VNĐ',
    seller: 'Người bán D',
    image: '/products/instagram-business.jpg',
  },
];

export function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Tài khoản đang bán mới nhất
          </h2>
          <p className="text-slate-600 mt-2">
            Khám phá những tài khoản chất lượng cao từ các người bán uy tín
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              category={product.category}
              title={product.title}
              price={product.price}
              seller={product.seller}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
