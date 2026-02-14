'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ImageUploadZone } from '@/components/ImageUploadZone';

const CATEGORIES = ['Cüzdan', 'Telefon', 'Anahtar', 'Gözlük', 'Çanta', 'Bilgisayar', 'Diğer'];

export function BulunanIlanForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const foundAt = formData.get('foundAt') as string;
    const res = await fetch('/api/ilanlar/bulunan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        place: formData.get('place'),
        foundAt: foundAt ? new Date(foundAt).toISOString() : new Date().toISOString(),
        imageUrl: imageUrl || null,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'İlan eklenemedi.');
      return;
    }
    router.push(`/ilanlar/bulunan/${data.id}`);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="card mt-6 space-y-5 p-6 sm:p-8">
      {error && (
        <div className="rounded-xl bg-lost/10 px-4 py-3 text-sm text-lost">{error}</div>
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
          placeholder="Örn: Siyah cüzdan bulundu"
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
          Bulunduğu yer *
        </label>
        <input
          id="place"
          name="place"
          required
          className="input mt-1"
          placeholder="Örn: Kampüs kütüphane"
        />
      </div>
      <div>
        <label htmlFor="foundAt" className="block text-sm font-medium text-neutral-700">
          Bulunuş tarihi *
        </label>
        <input
          id="foundAt"
          name="foundAt"
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
