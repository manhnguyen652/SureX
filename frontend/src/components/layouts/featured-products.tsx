import { ProductCard } from './product-card';
import { FEATURED_PRODUCTS } from '../../utils/products';

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#636E72]">Sản phẩm nổi bật</h2>
          <p className="mt-2 text-slate-600">Các sản phẩm được quan tâm nhiều nhất hôm nay</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.slice(0, 4).map((product) => (
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
      </div>
    </section>
  );
}
