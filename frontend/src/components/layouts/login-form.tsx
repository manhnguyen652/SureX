'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { loginApi } from '../../app/api/auth-api';

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await loginApi({ email, password });
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('current_user', JSON.stringify(res.user));
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đăng nhập thất bại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">Đăng nhập</h2>
          <p className="text-slate-500 text-sm">Giao dịch an toàn, bảo vệ tuyệt đối</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#636E72] focus:ring-1 focus:ring-[#636E72]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Mật khẩu
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#636E72] focus:ring-1 focus:ring-[#636E72]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="text-right">
            <Link href="#" className="text-sm text-[#636E72] hover:text-[#525a5f] font-medium">
              Quên mật khẩu?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#636E72] hover:bg-[#525a5f] text-white py-2 rounded-lg font-semibold transition-colors"
          >
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm">
            Bạn chưa có tài khoản?{' '}
            <Link href="/signup" className="text-[#636E72] hover:text-[#525a5f] font-semibold">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
