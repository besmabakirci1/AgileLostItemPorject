'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/';
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch('/api/auth/giris', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Giriş yapılamadı.');
      return;
    }
    router.push(from);
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
          className="input mt-1"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Giriş Yap
      </button>
    </form>
  );
}
