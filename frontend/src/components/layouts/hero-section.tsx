'use client';

import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          Giao Dịch An Toàn, Bảo Vệ Tuyệt Đối
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Nền tảng trung gian uy tín cho mọi giao dịch tài khoản số.
        </p>
        <Button className="bg-[#636E72] hover:bg-[#525a5f] text-white px-8 py-3 rounded-lg font-semibold text-lg">
          Khám phá ngay
        </Button>
      </div>
    </section>
  );
}
