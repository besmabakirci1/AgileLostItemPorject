import Link from 'next/link';
import { cookies } from 'next/headers';
import { getCurrentUser } from '@/lib/auth';
import { LOCALE_COOKIE, type Locale } from '@/lib/i18n';
import { HeaderNav } from './HeaderNav';

export async function Header() {
  const [user, cookieStore] = await Promise.all([getCurrentUser(), cookies()]);
  const locale = (cookieStore.get(LOCALE_COOKIE)?.value as Locale) ?? 'tr';

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 py-1 text-lg font-semibold tracking-tight text-neutral-900 transition hover:text-neutral-600"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
            🔍
          </span>
          <span>Kayıp Eşya</span>
        </Link>

        <HeaderNav user={user} locale={locale} />
      </div>
    </header>
  );
}
