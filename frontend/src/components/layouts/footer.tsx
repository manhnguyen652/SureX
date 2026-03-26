export function Footer() {
  return (
    <footer className="bg-[#636E72] text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">SureX</h3>
            <p className="text-slate-200 text-sm leading-relaxed mb-4">
              Nền tảng trung gian uy tín cho mọi giao dịch tài khoản số. Giao dịch an toàn, bảo vệ tuyệt đối.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-200 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.915A9.964 9.964 0 0116.738 3.75c3.75 0 5.868-3.087 5.868-5.868 0-.309-.01-.618-.045-.923A7.521 7.521 0 0024 4.557z"/><path d="M4.461 4.582A4.476 4.476 0 003.678 5.96c0 2.485-1.347 4.57-3.345 5.868A4.534 4.534 0 001.5 13.5"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none"/><path d="M19.5 1h-15A4.5 4.5 0 000 5.5v13A4.5 4.5 0 004.5 23h15a4.5 4.5 0 004.5-4.5v-13A4.5 4.5 0 0019.5 1z" fill="currentColor"/><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm6-2a1 1 0 102 0 1 1 0 00-2 0z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Tài Khoản */}
          <div>
            <h4 className="font-semibold text-white mb-4">Tài Khoản</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Tài khoản của tôi</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Giao dịch của tôi</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Ví điện tử</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Bảo mật tài khoản</a></li>
            </ul>
          </div>

          {/* Hỗ Trợ */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Trung tâm hỗ trợ</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Liên hệ chúng tôi</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Hỏi đáp</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Chính Sách */}
          <div>
            <h4 className="font-semibold text-white mb-4">Chính Sách</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Quy tắc ứng xử</a></li>
              <li><a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Giải quyết tranh chấp</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-400 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-200 text-sm">
              © 2024 SureX. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Cài đặt Cookie</a>
              <a href="#" className="text-slate-200 hover:text-white text-sm transition-colors">Tuỳ chọn quảng cáo</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
