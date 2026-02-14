# Sprint 4 – İletişim ve Teslim

**Proje:** AgileLost – Kayıp Eşya Bulma Sitesi  
**Sprint süresi:** 2 hafta (Hafta 7–8)  
**Hedef:** İlan sahibiyle mesajlaşma; proje teslime ve sunuma hazır.

---

## Sprint hedefi

- İlan detay sayfasında ilan sahibine mesaj gönderilebilsin.
- Mesajlar sayfasında konuşma listesi görünsün.
- Dil seçimi (TR/EN), fotoğraf yükleme (sürükle-bırak) eklensin.
- Dokümantasyon ve sunum hazır olsun.

---

## Product Backlog öğeleri

| ID    | Öğe                    | Kabul kriterleri |
|-------|------------------------|------------------|
| PB-008 | Mesajlaşma sistemi     | İlan bağlamında mesaj; alıcı/satıcı; mesajlar listesi. |
| PB-009 | Hata düzeltmeleri ve test | Kritik hatalar giderildi; temel akışlar test edildi. |
| PB-010 | Sunum ve dokümantasyon | README, proje planlaması, sprint raporları, HPCA raporu. |

---

## Sprint backlog (görevler)

| Görev                      | Durum | Not |
|----------------------------|--------|-----|
| Message modeli (Prisma)    | ✓ | lostItemId / foundItemId ilişkisi |
| Mesaj API (GET, POST)      | ✓ | /api/mesajlar |
| Mesaj kutusu (ilan detay)  | ✓ | MesajKutusu bileşeni |
| Mesajlar listesi sayfası   | ✓ | /mesajlar |
| Dil seçimi (TR/EN)         | ✓ | Cookie, i18n, menü |
| Fotoğraf yükleme           | ✓ | Sürükle-bırak, /api/upload |
| Proje planlaması dokümanı  | ✓ | docs/PROJE_PLANLAMASI.md |
| Sprint dokümanları         | ✓ | docs/SPRINT_1..4.md |
| HPCA / haftalık rapor      | ✓ | docs/HPCA_RAPORU.md |

---

## Sprint olayları

- **Sprint Planning:** PB-008, PB-009, PB-010 seçildi.
- **Daily Standup:** Günlük ilerleme.
- **Sprint Review:** Mesajlaşma, dil, fotoğraf ve dokümantasyon demo edildi.
- **Sprint Retrospective:** Proje teslime hazır; olası iyileştirmeler not edildi.

---

## Teslim edilen çıktılar

- Mesajlaşma (ilan bazlı) çalışıyor.
- Türkçe / İngilizce dil seçimi eklendi.
- İlan eklerken opsiyonel fotoğraf (sürükle-bırak veya dosya seçimi) eklendi.
- Proje planlaması ve haftalık (HPCA) raporu yazıldı.
