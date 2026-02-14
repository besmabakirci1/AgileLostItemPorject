import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';
  const category = searchParams.get('kategori') ?? '';
  const place = searchParams.get('yer') ?? '';

  const where: { title?: { contains: string }; category?: string; place?: string } = {};
  if (q) where.title = { contains: q };
  if (category) where.category = category;
  if (place) where.place = place;

  const items = await prisma.foundItem.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: { user: { select: { name: true, email: true } } },
  });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Giriş gerekli.' }, { status: 401 });
  }
  try {
    const body = await request.json();
    const { title, description, category, place, foundAt, imageUrl } = body;
    if (!title || !description || !category || !place || !foundAt) {
      return NextResponse.json(
        { error: 'Başlık, açıklama, kategori, yer ve bulunuş tarihi gerekli.' },
        { status: 400 }
      );
    }
    const item = await prisma.foundItem.create({
      data: {
        userId: session.userId,
        title,
        description,
        category,
        place,
        foundAt: new Date(foundAt),
        imageUrl: imageUrl || null,
      },
    });
    return NextResponse.json(item);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: 'İlan eklenemedi.' },
      { status: 500 }
    );
  }
}
