import Link from 'next/link';
import { Header } from '../../components/layouts/header';
import { Footer } from '../../components/layouts/footer';
import { Button } from '../../components/ui/button';

const MOCK_ORDERS = [
  {
    id: 'ORD-2026-0001',
    productName: 'Tài khoản Valorant Rank Cao',
    status: 'Đang xử lý',
    updatedAt: '26/03/2026 21:10',
  },
  {
    id: 'ORD-2026-0002',
    productName: 'Canva Pro 12 tháng',
    status: 'Đã bàn giao',
    updatedAt: '25/03/2026 10:35',
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#636E72]">Theo dõi đơn hàng</h1>
          <p className="mt-2 text-slate-600">Cập nhật trạng thái mới nhất của các đơn bạn đã đặt</p>

          <div className="mt-8 space-y-4">
            {MOCK_ORDERS.map((order) => (
              <div key={order.id} className="border border-slate-200 rounded-xl p-5 bg-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500">Mã đơn: {order.id}</p>
                    <h2 className="text-lg font-semibold text-slate-800 mt-1">{order.productName}</h2>
                    <p className="text-sm text-slate-500 mt-1">Cập nhật: {order.updatedAt}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">{order.status}</span>
                    <Button asChild variant="outline" className="border-[#636E72] text-[#636E72]">
                      <Link href="/orders/complaints">Khiếu nại</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
