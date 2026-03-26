import { Header } from '../../components/layouts/header';
import { Footer } from '../../components/layouts/footer';
import { SignupForm } from '../../components/layouts/signup-form';

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}