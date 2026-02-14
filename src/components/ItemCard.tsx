import Link from 'next/link';

type Item = {
  id: string;
  title: string;
  description: string;
  category: string;
  place: string;
  lostAt?: string;
  foundAt?: string;
  createdAt: string;
  imageUrl?: string | null;
  user?: { name: string | null; email: string };
};

type Props = {
  item: Item;
  type: 'kayip' | 'bulunan';
};

export function ItemCard({ item, type }: Props) {
  const date = item.lostAt || item.foundAt || item.createdAt;
  const dateLabel = type === 'kayip' ? 'Kayıp tarihi' : 'Bulunuş tarihi';
  const isLost = type === 'kayip';

  return (
    <Link
      href={`/ilanlar/${type}/${item.id}`}
      className="group block rounded-2xl border border-neutral-100 bg-white p-5 shadow-card transition-all hover:shadow-card-hover"
    >
      <div className="flex gap-4">
        {item.imageUrl ? (
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imageUrl}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${
              isLost ? 'bg-red-50 text-red-600' : 'bg-neutral-100 text-neutral-600'
            }`}
          >
            {isLost ? '🔍' : '✓'}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-neutral-900 group-hover:text-neutral-700">
            {item.title}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-sm text-neutral-500">{item.description}</p>
          <div className="mt-2.5 flex flex-wrap gap-2 text-xs text-neutral-400">
            <span className="rounded-md bg-neutral-100 px-2 py-0.5 font-medium">
              {item.category}
            </span>
            <span>{item.place}</span>
            <span>
              {dateLabel}: {new Date(date).toLocaleDateString('tr-TR')}
            </span>
          </div>
          {item.user && (
            <p className="mt-2 text-xs text-neutral-400">
              {item.user.name || item.user.email}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
