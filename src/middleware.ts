import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authPaths = ['/giris', '/kayit'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('kayip-esya-session')?.value;
  const isLoggedIn = !!token;
  const path = request.nextUrl.pathname;

  const isProtected =
    path.startsWith('/ilanlar/kayip/ekle') ||
    path.startsWith('/ilanlar/bulunan/ekle') ||
    path.startsWith('/mesajlar');
  const isAuthPage = authPaths.some((p) => path.startsWith(p));

  if (isProtected && !isLoggedIn) {
    const url = new URL('/giris', request.url);
    url.searchParams.set('from', path);
    return NextResponse.redirect(url);
  }
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/ilanlar/kayip/ekle', '/ilanlar/bulunan/ekle', '/giris', '/kayit', '/mesajlar', '/mesajlar/:path*'],
};
