import Link from 'next/link';
import { Header } from '../../../components/layouts/header';
import { Footer } from '../../../components/layouts/footer';
import { Button } from '../../../components/ui/button';

export default function OrderComplaintsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#636E72]">Khiếu nại đơn hàng</h1>
          <p className="mt-2 text-slate-600">Gửi thông tin khiếu nại, đội ngũ hỗ trợ sẽ phản hồi sớm nhất.</p>

          <section className="mt-8 border border-slate-200 rounded-xl p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border border-slate-300 rounded-lg px-3 py-2" placeholder="Mã đơn hàng" />
              <input className="border border-slate-300 rounded-lg px-3 py-2" placeholder="Tiêu đề khiếu nại" />
              <input className="border border-slate-300 rounded-lg px-3 py-2 md:col-span-2" placeholder="Email liên hệ" />
              <textarea
                className="border border-slate-300 rounded-lg px-3 py-2 md:col-span-2"
                rows={6}
                placeholder="Mô tả chi tiết vấn đề của bạn..."
              />
            </div>

            <div className="mt-5 flex gap-3">
              <Button className="bg-[#636E72] hover:bg-[#525a5f] text-white">Gửi khiếu nại</Button>
              <Link href="/orders" className="self-center text-sm text-[#636E72] hover:underline">
                Quay lại theo dõi đơn
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
