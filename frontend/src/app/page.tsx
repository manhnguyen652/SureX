import { Header } from '../components/layouts/header';
import { HeroSection } from '../components/layouts/hero-section';
import { ProductGrid } from '../components/layouts/product-grid';
import { Footer } from '../components/layouts/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
