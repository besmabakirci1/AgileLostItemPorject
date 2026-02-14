import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { MesajKutusu } from '@/components/MesajKutusu';

export const dynamic = 'force-dynamic';

export default async function BulunanIlanDetayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [item, user] = await Promise.all([
    prisma.foundItem.findUnique({
      where: { id },
      include: { user: { select: { id: true, name: true, email: true } } },
    }),
    getCurrentUser(),
  ]);

  if (!item) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link
        href="/ilanlar/bulunan"
        className="inline-flex items-center gap-1 text-sm font-medium text-neutral-600 transition hover:text-red-600"
      >
        ← Bulunan ilanlara dön
      </Link>

      <div className="card overflow-hidden p-6 sm:p-8">
        <div className="flex gap-5">
          {item.imageUrl ? (
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-neutral-100 sm:h-32 sm:w-32">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-4xl">
              ✓
            </span>
          )}
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {item.title}
            </h1>
            <p className="mt-3 text-neutral-600">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm text-neutral-500">
              <span className="rounded-xl bg-neutral-100 px-3 py-1.5 font-medium">
                {item.category}
              </span>
              <span>Yer: {item.place}</span>
              <span>Bulunuş: {new Date(item.foundAt).toLocaleDateString('tr-TR')}</span>
            </div>
            {item.user && (
              <p className="mt-4 text-sm text-neutral-500">
                İlan sahibi: <span className="font-medium text-neutral-700">{item.user.name || item.user.email}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {user && item.user && user.id !== item.user.id && (
        <MesajKutusu
          type="bulunan"
          itemId={item.id}
          receiverId={item.user.id}
          receiverName={item.user.name || item.user.email}
        />
      )}
    </div>
  );
}
