'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const CATEGORIES = [
  'Cüzdan',
  'Telefon',
  'Anahtar',
  'Gözlük',
  'Çanta',
  'Bilgisayar',
  'Diğer',
];

type Props = {
  type: 'kayip' | 'bulunan';
  basePath: string;
};

export function SearchFilters({ type, basePath }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setFilter = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(searchParams.toString());
      if (value) next.set(key, value);
      else next.delete(key);
      router.push(`${basePath}?${next.toString()}`);
    },
    [router, searchParams, basePath]
  );

  const q = searchParams.get('q') ?? '';
  const kategori = searchParams.get('kategori') ?? '';
  const yer = searchParams.get('yer') ?? '';

  return (
    <div className="card p-5">
      <h3 className="section-title mb-4">Arama ve filtreleme</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-neutral-500">Kelime</label>
          <input
            type="search"
            placeholder="Başlıkta ara..."
            value={q}
            onChange={(e) => setFilter('q', e.target.value)}
            className="input text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-neutral-500">Kategori</label>
          <select
            value={kategori}
            onChange={(e) => setFilter('kategori', e.target.value)}
            className="input text-sm"
          >
            <option value="">Tümü</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-neutral-500">Yer</label>
          <input
            type="text"
            placeholder="Örn. Kampüs, Otobüs"
            value={yer}
            onChange={(e) => setFilter('yer', e.target.value)}
            className="input text-sm"
          />
        </div>
      </div>
    </div>
  );
}
