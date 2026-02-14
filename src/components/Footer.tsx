import Link from 'next/link';
import { cookies } from 'next/headers';
import { getTranslations, LOCALE_COOKIE, type Locale } from '@/lib/i18n';

export async function Footer() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get(LOCALE_COOKIE)?.value as Locale) ?? 'tr';
  const t = getTranslations(locale);

  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-medium text-neutral-500">Kayıp Eşya</span>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
            <Link href="/ilanlar/kayip" className="transition hover:text-neutral-700">
              {t('footer.lostListings')}
            </Link>
            <Link href="/ilanlar/bulunan" className="transition hover:text-neutral-700">
              {t('footer.foundListings')}
            </Link>
            <Link href="/giris" className="transition hover:text-neutral-700">
              {t('footer.login')}
            </Link>
            <Link href="/kayit" className="transition hover:text-neutral-700">
              {t('footer.register')}
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Seng 204 Projesi
        </p>
      </div>
    </footer>
  );
}
