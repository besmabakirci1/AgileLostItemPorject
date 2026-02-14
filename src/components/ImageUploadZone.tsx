'use client';

import { useRef, useState } from 'react';

type Props = {
  value: string | null;
  onChange: (url: string | null) => void;
  onError?: (message: string | null) => void;
  onUploadingChange?: (uploading: boolean) => void;
};

export function ImageUploadZone({ value, onChange, onError, onUploadingChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  function setUploadingState(v: boolean) {
    setUploading(v);
    onUploadingChange?.(v);
  }

  async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: formData });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Yükleme başarısız.');
    return data.url as string;
  }

  async function handleFile(file: File | null) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      onError?.('Sadece resim dosyası seçebilirsiniz.');
      return;
    }
    onError?.(null);
    setUploadingState(true);
    try {
      const url = await uploadFile(file);
      onChange(url);
    } catch (e) {
      onError?.(e instanceof Error ? e.message : 'Fotoğraf yüklenemedi.');
    } finally {
      setUploadingState(false);
    }
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(true);
  }

  function onDragLeave() {
    setDragOver(false);
  }

  return (
    <div>
      <span className="block text-sm font-medium text-neutral-700">
        Fotoğraf <span className="font-normal text-neutral-500">(isteğe bağlı)</span>
      </span>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = '';
        }}
      />
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={`mt-2 flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-colors ${
          dragOver
            ? 'border-red-400 bg-red-50/50'
            : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 hover:bg-neutral-100/50'
        } ${uploading ? 'pointer-events-none opacity-70' : ''}`}
      >
        {value ? (
          <div className="relative w-full p-3">
            <div className="relative mx-auto aspect-video max-h-48 w-full max-w-sm overflow-hidden rounded-lg bg-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={value}
                alt="Yüklenen fotoğraf"
                className="h-full w-full object-contain"
              />
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
              }}
              className="mt-2 text-sm font-medium text-red-600 hover:underline"
            >
              Fotoğrafı kaldır
            </button>
          </div>
        ) : uploading ? (
          <p className="text-sm text-neutral-500">Yükleniyor...</p>
        ) : (
          <>
            <span className="text-3xl text-neutral-400">📷</span>
            <p className="mt-2 text-sm font-medium text-neutral-600">
              Sürükleyip bırakın veya tıklayıp galeriden seçin
            </p>
            <p className="mt-0.5 text-xs text-neutral-500">
              JPEG, PNG, WebP, GIF · En fazla 5 MB
            </p>
          </>
        )}
      </div>
    </div>
  );
}
