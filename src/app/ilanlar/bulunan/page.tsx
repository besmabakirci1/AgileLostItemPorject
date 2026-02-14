import { Suspense } from 'react';
import { SearchFilters } from '@/components/SearchFilters';
import { ItemCard } from '@/components/ItemCard';
import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

type SearchParams = { q?: string; kategori?: string; yer?: string };

export default async function BulunanIlanlarPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const q = params.q ?? '';
  const category = params.kategori ?? '';
  const place = params.yer ?? '';

  const where: { title?: { contains: string }; category?: string; place?: string } = {};
  if (q) where.title = { contains: q };
  if (category) where.category = category;
  if (place) where.place = place;

  const items = await prisma.foundItem.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: { user: { select: { name: true, email: true } } },
  });

  const user = await getCurrentUser();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="page-title">Bulunan İlanlar</h1>
        {user && (
          <Link href="/ilanlar/bulunan/ekle" className="btn-primary shrink-0">
            Bulunan İlan Ekle
          </Link>
        )}
      </div>

      <Suspense fallback={null}>
        <SearchFilters type="bulunan" basePath="/ilanlar/bulunan" />
      </Suspense>

      {items.length === 0 ? (
        <div className="card flex flex-col items-center justify-center gap-3 p-12 text-center">
          <span className="text-4xl">✅</span>
          <p className="text-neutral-600">Bu kriterlere uygun bulunan ilan yok.</p>
          <p className="text-sm text-neutral-500">Filtreleri değiştirmeyi veya yeni ilan eklemeyi deneyin.</p>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <ItemCard
                item={{
                  ...item,
                  foundAt: item.foundAt.toISOString(),
                  createdAt: item.createdAt.toISOString(),
                }}
                type="bulunan"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
