import { Header } from '../components/layouts/header';
import { HeroSection } from '../components/layouts/hero-section';
import { ProductGrid } from '../components/layouts/product-grid';
import { ProductCard } from '../components/layouts/product-card';
import { Footer } from '../components/layouts/footer';
import { PRODUCTS } from '../data/products';

export default function Home() {
  const featuredProducts = PRODUCTS.filter((product) => product.featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <section className="py-12 md:py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#636E72]">Sản phẩm nổi bật</h2>
              <p className="mt-2 text-slate-600">Những sản phẩm được quan tâm nhiều nhất hôm nay</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
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

        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
