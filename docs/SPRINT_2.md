# Sprint 2 – İki Taraflı Site

**Proje:** AgileLost – Kayıp Eşya Bulma Sitesi  
**Sprint süresi:** 2 hafta (Hafta 3–4)  
**Hedef:** Hem kayıp hem bulunan ilanlar; site iki yönlü kullanılabilsin.

---

## Sprint hedefi

- Bulunan eşya ilanı eklenebilsin (form + API).
- Kayıp ve bulunan ilanlar ayrı sayfalarda listelensin.
- Kullanıcı hem kayıp hem bulunan ilanları görüntüleyebilsin.

---

## Product Backlog öğeleri

| ID    | Öğe                         | Kabul kriterleri |
|-------|-----------------------------|------------------|
| PB-004 | Bulunan eşya ilanı ekleme   | Form: başlık, açıklama, kategori, yer, bulunuş tarihi; API kaydı. |
| PB-005 | İlanları listeleme         | Kayıp ilanlar listesi, bulunan ilanlar listesi; kart görünümü. |

---

## Sprint backlog (görevler)

| Görev                        | Durum | Not |
|-----------------------------|--------|-----|
| FoundItem modeli (Prisma)    | ✓ | Schema güncellendi |
| Bulunan ilan API (GET, POST) | ✓ | /api/ilanlar/bulunan |
| Bulunan ilan ekleme sayfası  | ✓ | Form + validasyon |
| Kayıp ilanlar listesi sayfası| ✓ | /ilanlar/kayip |
| Bulunan ilanlar listesi sayfası | ✓ | /ilanlar/bulunan |
| İlan kartı bileşeni (ItemCard) | ✓ | Ortak kullanım |

---

## Sprint olayları

- **Sprint Planning:** PB-004 ve PB-005 seçildi.
- **Daily Standup:** Günlük ilerleme takibi.
- **Sprint Review:** Kayıp ve bulunan ilan ekleme + listeleme demo edildi.
- **Sprint Retrospective:** Liste sayfalarında filtre ihtiyacı Sprint 3’e taşındı.

---

## Teslim edilen çıktılar

- Bulunan ilan ekleme ve listeleme tamamlandı.
- Kayıp ve bulunan ilan listeleri çalışıyor.
