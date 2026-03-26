'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { registerApi } from '../../app/api/auth-api';

export function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!agreeTerms) {
      setError('Vui lòng đồng ý với Điều khoản và Chính sách');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    setIsLoading(true);
    try {
      const res = await registerApi({
        fullname: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      setSuccess(res.message || 'Đăng ký thành công! Đang chuyển qua trang đăng nhập...');
      setTimeout(() => router.push('/login'), 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đăng ký thất bại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">Đăng ký</h2>
        <p className="text-center text-slate-500 text-sm mb-8">Tạo tài khoản mới để bắt đầu giao dịch an toàn</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Họ và tên</label>
            <Input
              type="text"
              name="fullName"
              placeholder="Nhập họ và tên"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#636E72]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Nhập email của bạn"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#636E72]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Mật khẩu</label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#636E72]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Xác nhận mật khẩu</label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#636E72]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-5 h-5 mt-0.5 accent-[#636E72] cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-slate-600">
              Tôi đồng ý với <a href="#" className="text-[#636E72] hover:underline">Điều khoản dịch vụ</a> và{' '}
              <a href="#" className="text-[#636E72] hover:underline">Chính sách bảo mật</a>
            </label>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && <p className="text-sm text-green-600">{success}</p>}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#636E72] hover:bg-[#525a5f] text-white py-3 rounded-lg font-semibold text-base mt-6"
          >
            {isLoading ? 'Đang đăng ký...' : 'Đăng ký'}
          </Button>
        </form>

        <div className="text-center mt-8">
          <p className="text-slate-600 text-sm">
            Đã có tài khoản?{' '}
            <Link href="/login" className="text-[#636E72] hover:underline font-semibold">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
