import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '../../../components/layouts/header';
import { Footer } from '../../../components/layouts/footer';
import { getProductById } from '../../../data/products';
import { Button } from '../../../components/ui/button';

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const productId = Number(id);
  const product = getProductById(productId);

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/shop" className="text-sm text-[#636E72] hover:underline">
            ← Quay lại shop
          </Link>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 border border-slate-200 rounded-2xl p-6">
            <div className="relative bg-slate-100 rounded-xl min-h-[320px] overflow-hidden">
              <Image src={product.image} alt={product.title} fill className="object-cover" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-slate-800 mt-3">{product.title}</h1>
              <p className="text-2xl font-bold text-[#636E72] mt-4">{product.price}</p>
              <p className="mt-4 text-slate-600">{product.description}</p>
              <p className="mt-4 text-slate-600">
                Người bán: <span className="font-semibold">{product.seller}</span>
              </p>

              <Button className="mt-6 bg-[#636E72] hover:bg-[#525a5f] text-white">Mua ngay</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
