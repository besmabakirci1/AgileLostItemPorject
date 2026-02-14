import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Giriş gerekli.' }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const lostItemId = searchParams.get('lostItemId');
  const foundItemId = searchParams.get('foundItemId');

  if (!lostItemId && !foundItemId) {
    const messages = await prisma.message.findMany({
      where: {
        OR: [{ senderId: session.userId }, { receiverId: session.userId }],
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
    return NextResponse.json(threads);
  }

  if (lostItemId) {
    const messages = await prisma.message.findMany({
      where: { lostItemId },
      orderBy: { createdAt: 'asc' },
      include: {
        sender: { select: { id: true, name: true, email: true } },
        receiver: { select: { id: true, name: true, email: true } },
      },
    });
    return NextResponse.json(messages);
  }
  if (foundItemId) {
    const messages = await prisma.message.findMany({
      where: { foundItemId },
      orderBy: { createdAt: 'asc' },
      include: {
        sender: { select: { id: true, name: true, email: true } },
        receiver: { select: { id: true, name: true, email: true } },
      },
    });
    return NextResponse.json(messages);
  }
  return NextResponse.json({ error: 'lostItemId veya foundItemId gerekli.' }, { status: 400 });
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Giriş gerekli.' }, { status: 401 });
  }
  try {
    const body = await request.json();
    const { content, receiverId, lostItemId, foundItemId } = body;
    if (!content?.trim() || !receiverId) {
      return NextResponse.json(
        { error: 'Mesaj metni ve alıcı gerekli.' },
        { status: 400 }
      );
    }
    if (!lostItemId && !foundItemId) {
      return NextResponse.json(
        { error: 'lostItemId veya foundItemId gerekli.' },
        { status: 400 }
      );
    }
    const message = await prisma.message.create({
      data: {
        content: content.trim(),
        senderId: session.userId,
        receiverId,
        lostItemId: lostItemId || null,
        foundItemId: foundItemId || null,
      },
      include: {
        sender: { select: { id: true, name: true, email: true } },
        receiver: { select: { id: true, name: true, email: true } },
      },
    });
    return NextResponse.json(message);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: 'Mesaj gönderilemedi.' },
      { status: 500 }
    );
  }
}
