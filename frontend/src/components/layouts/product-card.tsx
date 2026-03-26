import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  category: string;
  title: string;
  price: string;
  seller: string;
  image?: string;
}

export function ProductCard({ id, category, title, price, seller, image }: ProductCardProps) {
  return (
    <Link
      href={`/checkout?productId=${id}`}
      className="block bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover w-full h-full" />
        ) : (
          <div className="text-slate-400 text-sm font-medium">Ảnh sản phẩm</div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-xl font-bold text-slate-700 mb-4">{price}</p>

        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Người bán: <span className="font-medium">{seller}</span>
          </p>
          <span className="bg-[#636E72] text-white px-4 py-2 rounded-lg text-sm font-medium">Mua ngay</span>
        </div>
      </div>
    </Link>
  );
}
