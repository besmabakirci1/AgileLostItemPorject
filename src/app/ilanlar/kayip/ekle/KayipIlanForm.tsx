'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ImageUploadZone } from '@/components/ImageUploadZone';

const CATEGORIES = ['Cüzdan', 'Telefon', 'Anahtar', 'Gözlük', 'Çanta', 'Bilgisayar', 'Diğer'];

export function KayipIlanForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const lostAt = formData.get('lostAt') as string;
    const res = await fetch('/api/ilanlar/kayip', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        place: formData.get('place'),
        lostAt: lostAt ? new Date(lostAt).toISOString() : new Date().toISOString(),
        imageUrl: imageUrl || null,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'İlan eklenemedi.');
      return;
    }
    router.push(`/ilanlar/kayip/${data.id}`);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="card mt-6 space-y-5 p-6 sm:p-8">
      {error && (
        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-neutral-700">
          Başlık *
        </label>
        <input
          id="title"
          name="title"
          required
          className="input mt-1"
          placeholder="Örn: Siyah cüzdan"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-neutral-700">
          Açıklama *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={3}
          className="input mt-1"
          placeholder="Eşyayı kısaca tanımlayın..."
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-neutral-700">
          Kategori *
        </label>
        <select id="category" name="category" required className="input mt-1">
          <option value="">Seçin</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="place" className="block text-sm font-medium text-neutral-700">
          Kayıp yeri *
        </label>
        <input
          id="place"
          name="place"
          required
          className="input mt-1"
          placeholder="Örn: Kampüs kütüphane, 42 numaralı otobüs"
        />
      </div>
      <div>
        <label htmlFor="lostAt" className="block text-sm font-medium text-neutral-700">
          Kayıp tarihi *
        </label>
        <input
          id="lostAt"
          name="lostAt"
          type="date"
          required
          className="input mt-1"
        />
      </div>

      <ImageUploadZone
        value={imageUrl}
        onChange={setImageUrl}
        onError={setError}
        onUploadingChange={setUploading}
      />

      <button type="submit" className="btn-primary w-full" disabled={uploading}>
        İlanı Yayınla
      </button>
    </form>
  );
}
