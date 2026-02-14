'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { getTranslations, type Locale, LOCALE_COOKIE } from '@/lib/i18n';

type User = { id: string; name: string | null; email: string } | null;

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000`;
}

function useClickOutside(ref: React.RefObject<HTMLElement>, onClose: () => void) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, onClose]);
}

function Dropdown({
  label,
  children,
  align = 'left',
  className = '',
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 ${className}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg className={`h-3.5 w-3.5 transition ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          className={`absolute top-full z-50 mt-1 min-w-[200px] rounded-xl border border-neutral-100 bg-white py-1 shadow-card-hover ${align === 'right' ? 'right-0' : 'left-0'}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownLink({
  href,
  children,
  onClick,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-4 py-2.5 text-sm text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-900 ${className}`}
    >
      {children}
    </Link>
  );
}

export function HeaderNav({ user, locale }: { user: User; locale: Locale }) {
  const router = useRouter();
  const t = getTranslations(locale);
  const displayName = user ? (user.name || user.email).slice(0, 14) + ((user.name || user.email).length > 14 ? '…' : '') : null;

  const handleLocale = (newLocale: Locale) => {
    setLocaleCookie(newLocale);
    router.refresh();
  };

  return (
    <nav className="flex items-center justify-end gap-1">
      <Dropdown label={t('nav.listings')}>
        <DropdownLink href="/ilanlar/kayip">{t('nav.lostListings')}</DropdownLink>
        <DropdownLink href="/ilanlar/bulunan">{t('nav.foundListings')}</DropdownLink>
        {user && (
          <>
            <div className="my-1 border-t border-neutral-100" />
            <DropdownLink href="/ilanlar/kayip/ekle">{t('nav.addLost')}</DropdownLink>
            <DropdownLink href="/ilanlar/bulunan/ekle">{t('nav.addFound')}</DropdownLink>
          </>
        )}
      </Dropdown>

      {user ? (
        <>
          <Link
            href="/mesajlar"
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            {t('nav.messages')}
          </Link>
          <Dropdown label={t('nav.language')}>
            <button
              type="button"
              onClick={() => handleLocale('tr')}
              className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-neutral-50 ${locale === 'tr' ? 'font-medium text-neutral-900' : 'text-neutral-700 hover:text-neutral-900'}`}
            >
              Türkçe
            </button>
            <button
              type="button"
              onClick={() => handleLocale('en')}
              className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-neutral-50 ${locale === 'en' ? 'font-medium text-neutral-900' : 'text-neutral-700 hover:text-neutral-900'}`}
            >
              English
            </button>
          </Dropdown>
          <Dropdown
            label={<span className="max-w-[7rem] truncate">{displayName}</span>}
            align="right"
            className="bg-neutral-50"
          >
            <div className="px-4 py-2 text-xs text-neutral-500">
              {user.name || user.email}
            </div>
            <div className="border-t border-neutral-100" />
            <form action="/api/auth/cikis" method="POST">
              <button
                type="submit"
                className="w-full px-4 py-2.5 text-left text-sm text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-900"
              >
                {t('nav.logout')}
              </button>
            </form>
          </Dropdown>
        </>
      ) : (
        <>
          <Dropdown label={t('nav.language')}>
            <button
              type="button"
              onClick={() => handleLocale('tr')}
              className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-neutral-50 ${locale === 'tr' ? 'font-medium text-neutral-900' : 'text-neutral-700 hover:text-neutral-900'}`}
            >
              Türkçe
            </button>
            <button
              type="button"
              onClick={() => handleLocale('en')}
              className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-neutral-50 ${locale === 'en' ? 'font-medium text-neutral-900' : 'text-neutral-700 hover:text-neutral-900'}`}
            >
              English
            </button>
          </Dropdown>
          <Link
            href="/giris"
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
          >
            {t('nav.login')}
          </Link>
          <Link
            href="/kayit"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            {t('nav.register')}
          </Link>
        </>
      )}
    </nav>
  );
}
