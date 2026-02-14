import Link from 'next/link';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/db';
import { getTranslations, LOCALE_COOKIE, type Locale } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [lostCount, foundCount, cookieStore] = await Promise.all([
    prisma.lostItem.count(),
    prisma.foundItem.count(),
    cookies(),
  ]);
  const locale = (cookieStore.get(LOCALE_COOKIE)?.value as Locale) ?? 'tr';
  const t = getTranslations(locale);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero - minimal */}
      <section className="relative text-center">
        <p className="section-title">{t('home.heroLabel')}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl md:leading-[1.1]">
          {t('home.title1')}
          <br />
          <span className="text-neutral-500">{t('home.title2')}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-neutral-500 sm:text-lg">
          {t('home.subtitle')}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/ilanlar/kayip" className="btn-primary">
            {t('home.ctaLost')}
          </Link>
          <Link href="/ilanlar/bulunan" className="btn-secondary">
            {t('home.ctaFound')}
          </Link>
        </div>
      </section>

      {/* Two cards - clean */}
      <section className="grid gap-5 sm:grid-cols-2">
        <Link
          href="/ilanlar/kayip"
          className="group flex flex-col rounded-2xl border border-neutral-100 bg-white p-8 shadow-card transition-all hover:shadow-card-hover"
        >
          <span className="text-3xl">🔍</span>
          <p className="mt-4 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {lostCount} {t('common.listings')}
          </p>
          <h2 className="mt-1 text-xl font-semibold text-neutral-900">{t('home.lostCard')}</h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
            {t('home.lostDesc')}
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-red-600 group-hover:gap-2">
            {t('home.goToListings')}
            <span aria-hidden>→</span>
          </span>
        </Link>

        <Link
          href="/ilanlar/bulunan"
          className="group flex flex-col rounded-2xl border border-neutral-100 bg-white p-8 shadow-card transition-all hover:shadow-card-hover"
        >
          <span className="text-3xl">✓</span>
          <p className="mt-4 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {foundCount} {t('common.listings')}
          </p>
          <h2 className="mt-1 text-xl font-semibold text-neutral-900">{t('home.foundCard')}</h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
            {t('home.foundDesc')}
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 group-hover:gap-2">
            {t('home.goToListings')}
            <span aria-hidden>→</span>
          </span>
        </Link>
      </section>

      {/* How it works - minimal steps */}
      <section className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-card sm:p-10">
        <h2 className="section-title">{t('home.howItWorks')}</h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: '1', titleKey: 'home.step1', descKey: 'home.step1Desc' },
            { n: '2', titleKey: 'home.step2', descKey: 'home.step2Desc' },
            { n: '3', titleKey: 'home.step3', descKey: 'home.step3Desc' },
            { n: '4', titleKey: 'home.step4', descKey: 'home.step4Desc' },
          ].map(({ n, titleKey, descKey }) => (
            <li key={n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium text-neutral-600">
                {n}
              </span>
              <div>
                <h3 className="font-medium text-neutral-900">{t(titleKey)}</h3>
                <p className="mt-0.5 text-sm text-neutral-500">{t(descKey)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
