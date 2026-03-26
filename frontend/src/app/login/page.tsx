import { Header } from '../../components/layouts/header';
import { Footer } from '../../components/layouts/footer';
import { LoginForm } from '../../components/layouts/login-form';

export const metadata = {
  title: 'Đăng nhập - SureX',
  description: 'Đăng nhập vào tài khoản SureX của bạn',
};

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}