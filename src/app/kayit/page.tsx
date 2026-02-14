import Link from 'next/link';
import { RegisterForm } from './RegisterForm';

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md">
      <div className="card p-8 sm:p-10">
        <h1 className="page-title text-2xl sm:text-3xl">Kayıt Ol</h1>
        <p className="mt-2 text-neutral-500">Yeni hesap oluşturun</p>
        <RegisterForm />
        <p className="mt-6 text-center text-sm text-neutral-500">
          Zaten hesabınız var mı?{' '}
          <Link href="/giris" className="font-semibold text-red-600 hover:underline">
            Giriş yapın
          </Link>
        </p>
      </div>
    </div>
  );
}
