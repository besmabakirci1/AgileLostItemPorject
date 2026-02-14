import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function MesajlarPage() {
  const user = await getCurrentUser();
  if (!user) redirect('/giris');

  const messages = await prisma.message.findMany({
    where: {
      OR: [{ senderId: user.id }, { receiverId: user.id }],
    },
    orderBy: { createdAt: 'desc' },
    include: {
      sender: { select: { id: true, name: true, email: true } },
      receiver: { select: { id: true, name: true, email: true } },
      lostItem: { select: { id: true, title: true } },
      foundItem: { select: { id: true, title: true } },
    },
  });

  const seen = new Set<string>();
  const threads: typeof messages = [];
  for (const m of messages) {
    const key = m.lostItemId ? `l-${m.lostItemId}` : `f-${m.foundItemId}`;
    if (!seen.has(key)) {
      seen.add(key);
      threads.push(m);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="page-title">Mesajlarım</h1>
      {threads.length === 0 ? (
        <div className="card flex flex-col items-center justify-center gap-3 p-12 text-center">
          <span className="text-4xl">💬</span>
          <p className="text-neutral-600">Henüz mesajlaşma yok.</p>
          <p className="text-sm text-neutral-500">
            Bir ilan detayından ilan sahibine mesaj göndererek başlayabilirsiniz.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {threads.map((m) => {
            const other = m.senderId === user.id ? m.receiver : m.sender;
            const item = m.lostItem || m.foundItem;
            const type = m.lostItemId ? 'kayip' : 'bulunan';
            const href = item ? `/ilanlar/${type}/${item.id}` : '#';
            return (
              <li key={m.id}>
                <Link
                  href={href}
                  className="card-hover flex items-center gap-4 p-5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-2xl">
                    {m.lostItemId ? '🔍' : '✅'}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-neutral-900">
                      {item?.title ?? 'İlan'}
                    </p>
                    <p className="mt-0.5 text-sm text-neutral-500">
                      {other?.name || other?.email} ile · {m.content.slice(0, 50)}
                      {m.content.length > 50 ? '...' : ''}
                    </p>
                  </div>
                  <span className="text-xs text-neutral-400">
                    {new Date(m.createdAt).toLocaleDateString('tr-TR')}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
