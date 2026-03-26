import { ProductCard } from './product-card';
import { PRODUCTS } from '../../data/products';

export function ProductGrid() {
  const latestProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Tài khoản đang bán mới nhất</h2>
          <p className="text-slate-600 mt-2">Khám phá những tài khoản chất lượng cao từ các người bán uy tín</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
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
