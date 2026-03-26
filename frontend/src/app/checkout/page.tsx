import Link from 'next/link';
import { Header } from '../../components/layouts/header';
import { Footer } from '../../components/layouts/footer';
import { Button } from '../../components/ui/button';
import { getProductById } from '../../data/products';

type CheckoutPageProps = {
  searchParams?: Promise<{
    productId?: string;
  }>;
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = (await searchParams) ?? {};
  const productId = Number(params.productId);
  const product = Number.isNaN(productId) ? undefined : getProductById(productId);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#636E72]">Thanh toán</h1>
          <p className="mt-2 text-slate-600">Xác nhận thông tin đơn hàng trước khi thanh toán</p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
            <section className="border border-slate-200 rounded-xl p-6 bg-white">
              <h2 className="text-lg font-semibold text-slate-800">Thông tin người nhận</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border border-slate-300 rounded-lg px-3 py-2" placeholder="Họ và tên" />
                <input className="border border-slate-300 rounded-lg px-3 py-2" placeholder="Số điện thoại" />
                <input className="border border-slate-300 rounded-lg px-3 py-2 md:col-span-2" placeholder="Email" />
                <textarea className="border border-slate-300 rounded-lg px-3 py-2 md:col-span-2" rows={4} placeholder="Ghi chú đơn hàng" />
              </div>

              <h2 className="text-lg font-semibold text-slate-800 mt-8">Phương thức thanh toán</h2>
              <div className="mt-4 space-y-2 text-slate-700">
                <label className="flex items-center gap-2"><input type="radio" name="payment" defaultChecked /> Chuyển khoản ngân hàng</label>
                <label className="flex items-center gap-2"><input type="radio" name="payment" /> Ví điện tử</label>
              </div>
            </section>

            <aside className="border border-slate-200 rounded-xl p-6 bg-slate-50 h-fit">
              <h3 className="text-lg font-semibold text-slate-800">Đơn hàng của bạn</h3>
              {product ? (
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p className="font-semibold text-slate-800">{product.title}</p>
                  <p>Người bán: {product.seller}</p>
                  <p>Danh mục: {product.category}</p>
                  <p className="text-base font-bold text-[#636E72]">{product.price}</p>
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-600">Chưa chọn sản phẩm. Vui lòng quay lại shop để chọn.</p>
              )}

              <Button className="mt-6 w-full bg-[#636E72] hover:bg-[#525a5f] text-white">Xác nhận thanh toán</Button>
              <div className="mt-3 text-center">
                <Link href="/orders" className="text-sm text-[#636E72] hover:underline">Theo dõi đơn hàng</Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
