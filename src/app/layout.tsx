import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const font = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Kayıp Eşya Bulma | Kayıp ve Bulunan Eşya İlanları',
  description: 'Kayıp eşya ve bulunan eşya ilanlarını paylaşın, eşleştirin.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={font.variable}>
      <body className="flex min-h-screen flex-col bg-[#f8f8f8] font-sans text-neutral-900 antialiased">
        <Header />
        <main className="flex-1 px-4 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-5xl">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
