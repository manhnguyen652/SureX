'use client';

import { useMemo, useState } from 'react';
import { Header } from '../../components/layouts/header';
import { Footer } from '../../components/layouts/footer';
import { ProductCard } from '../../components/layouts/product-card';
import { PRODUCTS } from '../../utils/products';

const categories = ['Tất cả', 'Game', 'Software', 'Social'] as const;
const priceRanges = [
  { key: 'all', label: 'Tất cả mức giá', min: 0, max: Number.MAX_SAFE_INTEGER },
  { key: 'under-1m', label: 'Dưới 1 triệu', min: 0, max: 999999 },
  { key: '1m-3m', label: 'Từ 1 - 3 triệu', min: 1000000, max: 3000000 },
  { key: 'above-3m', label: 'Trên 3 triệu', min: 3000001, max: Number.MAX_SAFE_INTEGER },
] as const;

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('Tất cả');
  const [selectedPrice, setSelectedPrice] = useState<(typeof priceRanges)[number]['key']>('all');

  const selectedPriceRange = priceRanges.find((range) => range.key === selectedPrice) ?? priceRanges[0];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchedCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;
      const matchedPrice =
        product.priceValue >= selectedPriceRange.min && product.priceValue <= selectedPriceRange.max;

      return matchedCategory && matchedPrice;
    });
  }, [selectedCategory, selectedPriceRange]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 bg-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#636E72]">Shop sản phẩm</h1>
          <p className="mt-2 text-slate-600">Lọc theo danh mục và mức giá để tìm sản phẩm phù hợp</p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <aside className="border border-slate-200 rounded-xl p-5 h-fit bg-white">
              <h2 className="text-lg font-semibold text-[#636E72]">Bộ lọc</h2>

              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-700 mb-3">Danh mục</p>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#636E72] border-[#636E72] text-white'
                          : 'bg-white border-slate-300 text-slate-700 hover:border-[#636E72] hover:text-[#636E72]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-700 mb-3">Mức giá</p>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.key}
                      onClick={() => setSelectedPrice(range.key)}
                      className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                        selectedPrice === range.key
                          ? 'bg-[#636E72] border-[#636E72] text-white'
                          : 'bg-white border-slate-300 text-slate-700 hover:border-[#636E72] hover:text-[#636E72]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <section>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-600">
                  Tìm thấy <span className="font-semibold text-[#636E72]">{filteredProducts.length}</span> sản phẩm
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      category={product.category}
                      title={product.title}
                      price={product.price}
                      seller={product.seller}
                      image={product.image}
                    />
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-slate-300 rounded-xl p-10 text-center text-slate-500">
                  Không có sản phẩm phù hợp với bộ lọc hiện tại.
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
