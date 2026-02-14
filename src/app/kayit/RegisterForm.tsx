'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch('/api/auth/kayit', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('name') || undefined,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Kayıt yapılamadı.');
      return;
    }
    router.push('/');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {error && (
        <div className="rounded-lg bg-lost/10 px-3 py-2 text-sm text-lost">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
          Ad Soyad (isteğe bağlı)
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="input mt-1"
          placeholder="Adınız Soyadınız"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input mt-1"
          placeholder="ornek@email.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
          Şifre
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          className="input mt-1"
          placeholder="En az 6 karakter"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Kayıt Ol
      </button>
    </form>
  );
}
