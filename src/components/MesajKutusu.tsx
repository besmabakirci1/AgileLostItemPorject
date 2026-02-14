'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Message = {
  id: string;
  content: string;
  createdAt: string;
  senderId: string;
  sender: { name: string | null; email: string };
  receiver: { name: string | null; email: string };
};

type Props = {
  type: 'kayip' | 'bulunan';
  itemId: string;
  receiverId: string;
  receiverName: string;
};

export function MesajKutusu({ type, itemId, receiverId, receiverName }: Props) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const param = type === 'kayip' ? 'lostItemId' : 'foundItemId';

  useEffect(() => {
    fetch(`/api/mesajlar?${param}=${itemId}`)
      .then((r) => r.json())
      .then((data) => Array.isArray(data) && setMessages(data))
      .catch(() => {});
  }, [itemId, param]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim() || loading) return;
    setLoading(true);
    const res = await fetch('/api/mesajlar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: content.trim(),
        receiverId,
        ...(type === 'kayip' ? { lostItemId: itemId } : { foundItemId: itemId }),
      }),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setMessages((prev) => [
        ...prev,
        {
          ...data,
          createdAt: new Date().toISOString(),
          sender: data.sender,
          receiver: data.receiver,
        },
      ]);
      setContent('');
      router.refresh();
    }
  }

  return (
    <div className="card p-6">
      <h2 className="section-title">
        İlan sahibiyle mesajlaşın <span className="font-normal text-neutral-500">({receiverName})</span>
      </h2>
      <div className="mt-4 max-h-72 space-y-3 overflow-y-auto rounded-xl border border-neutral-200 bg-neutral-50/50 p-4">
        {messages.length === 0 ? (
          <p className="py-8 text-center text-sm text-neutral-500">
            Henüz mesaj yok. İlk mesajı siz yazın.
          </p>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className="rounded-xl bg-white px-4 py-3 shadow-card"
            >
              <p className="text-xs font-medium text-neutral-500">
                {m.sender?.name || m.sender?.email} ·{' '}
                {new Date(m.createdAt).toLocaleString('tr-TR')}
              </p>
              <p className="mt-1.5 text-neutral-800">{m.content}</p>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Mesajınızı yazın..."
          className="input flex-1"
          maxLength={500}
        />
        <button type="submit" disabled={loading || !content.trim()} className="btn-primary">
          Gönder
        </button>
      </form>
    </div>
  );
}
