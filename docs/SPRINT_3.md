# Sprint 3 – Arama ve Tasarım

**Proje:** AgileLost – Kayıp Eşya Bulma Sitesi  
**Sprint süresi:** 2 hafta (Hafta 5–6)  
**Hedef:** İlanlar aranabilir ve filtrelenebilir olsun; arayüz iyileştirilsin.

---

## Sprint hedefi

- Liste sayfalarında kelime, kategori ve yer ile arama/filtreleme.
- Arayüzde tutarlı tasarım (renkler, tipografi, responsive).
- Kullanıcı deneyimi iyileştirmeleri.

---

## Product Backlog öğeleri

| ID    | Öğe                 | Kabul kriterleri |
|-------|---------------------|------------------|
| PB-006 | Arama ve filtreleme | Başlıkta metin araması; kategori ve yer filtresi; URL parametreleri. |
| PB-007 | Tasarım iyileştirmeleri | Responsive, siyah-beyaz-kırmızı tema, kartlar, butonlar. |

---

## Sprint backlog (görevler)

| Görev                    | Durum | Not |
|--------------------------|--------|-----|
| SearchFilters bileşeni   | ✓ | q, kategori, yer |
| API’de filtre parametreleri | ✓ | GET /api/ilanlar/kayip?q=... |
| Tema güncellemesi        | ✓ | Tailwind, renk paleti |
| Header / Footer düzenleme| ✓ | Menü, dil alanı hazırlığı |
| Liste sayfalarında filtre alanı | ✓ | SearchFilters entegrasyonu |

---

## Sprint olayları

- **Sprint Planning:** PB-006 ve PB-007 seçildi.
- **Daily Standup:** Günlük ilerleme.
- **Sprint Review:** Arama/filtre ve yeni arayüz gösterildi.
- **Sprint Retrospective:** Dil seçimi bir sonraki sprint’e alındı.

---

## Teslim edilen çıktılar

- Arama ve filtreleme (kelime, kategori, yer) çalışıyor.
- Tasarım güncellendi (minimal, siyah-beyaz-kırmızı).
