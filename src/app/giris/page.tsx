import Link from 'next/link';
import { LoginForm } from './LoginForm';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md">
      <div className="card p-8 sm:p-10">
        <h1 className="page-title text-2xl sm:text-3xl">Giriş Yap</h1>
        <p className="mt-2 text-neutral-500">Hesabınıza giriş yapın</p>
        <LoginForm />
        <p className="mt-6 text-center text-sm text-neutral-500">
          Hesabınız yok mu?{' '}
          <Link href="/kayit" className="font-semibold text-red-600 hover:underline">
            Kayıt olun
          </Link>
        </p>
      </div>
    </div>
  );
}
