# Proje Planlaması – AgileLost (Kayıp Eşya Bulma Sitesi)

**Ders:** Seng 204  
**Proje türü:** Final projesi – Agile / Scrum ile yazılım geliştirme  
**Tarih:** 2026

---

## 1. Proje özeti

### 1.1 Amaç

Kayıp eşya ve bulunan eşya ilanlarının paylaşıldığı, kullanıcıların ilan ekleyebildiği, arayıp filtreleyebildiği ve ilan sahipleriyle mesajlaşabildiği bir web uygulaması geliştirmek. Proje, Agile (Scrum) metodolojisi ile planlanmış ve sprint’ler halinde ilerletilmiştir.

### 1.2 Kapsam

**Dahil:**
- Kullanıcı kayıt/giriş/çıkış
- Kayıp eşya ilanı ekleme ve listeleme
- Bulunan eşya ilanı ekleme ve listeleme
- Arama ve filtreleme (kelime, kategori, yer)
- İlan detay sayfası
- İlan sahibiyle mesajlaşma
- Opsiyonel fotoğraf yükleme (sürükle-bırak / galeriden seçim)
- Dil seçimi (Türkçe / İngilizce)
- Responsive arayüz

**Kapsam dışı (ileride düşünülebilir):**
- Gerçek zamanlı bildirimler
- Harita üzerinde konum
- Admin paneli

---

## 2. Yöntem: Agile (Scrum)

### 2.1 Seçilen metodolojinin gerekçesi

- **Değişikliklere uyum:** İstekler netleştikçe backlog ve sprint’ler güncellenebilir.
- **Kısa döngüler:** 2 haftalık sprint’lerle erken ve sık çalışan ürün teslimi.
- **Şeffaflık:** Product Backlog, Sprint Backlog ve sprint raporları ile ilerleme takip edilir.
- **Ders hedefleriyle uyum:** Scrum rolleri, olayları ve artefaktları uygulama ile pekiştirilir.

### 2.2 Roller

| Rol | Sorumluluk |
|-----|-------------|
| **Product Owner** | Ürün önceliklerini belirler; Product Backlog’u yönetir; kabul kriterlerini netleştirir. |
| **Scrum Master** | Sprint’in akışını kolaylaştırır; engelleri kaldırmaya çalışır; Daily Standup ve diğer olayları yönetir. |
| **Geliştirme takımı** | Analiz, tasarım, kodlama, test; Sprint Backlog’daki görevleri tamamlar. |

*(Küçük ekipte roller birleştirilebilir.)*

### 2.3 Artefaktlar

- **Product Backlog:** Tüm özellikler ve iyileştirmeler listesi (bkz. `docs/PRODUCT_BACKLOG.md`).
- **Sprint Backlog:** Her sprint’te seçilen görevler (bkz. `docs/SPRINT_1.md` … `docs/SPRINT_4.md`).
- **Çalışan ürün (Increment):** Her sprint sonunda teslim edilen, test edilebilir özellikler.

### 2.4 Olaylar

- **Sprint Planning:** Sprint başında backlog’dan öğe seçimi ve görevlere bölme.
- **Daily Standup:** Günlük kısa toplantı (≈15 dk): Ne yaptım? Ne yapacağım? Engel var mı?
- **Sprint Review:** Sprint sonunda çalışan ürünün gösterimi ve geri bildirim.
- **Sprint Retrospective:** Sprint sürecinin değerlendirilmesi ve iyileştirme maddeleri.

---

## 3. Zaman planı

| Sprint | Hafta | Hedef |
|--------|--------|--------|
| Sprint 1 | 1–2 | Temel sistem (üyelik, kayıp ilan, arayüz) |
| Sprint 2 | 3–4 | Bulunan ilan, listeleme |
| Sprint 3 | 5–6 | Arama/filtreleme, tasarım iyileştirmeleri |
| Sprint 4 | 7–8 | Mesajlaşma, dil, fotoğraf, dokümantasyon ve teslim |

**Toplam süre:** 8 hafta (4 × 2 haftalık sprint).

---

## 4. Teknolojiler ve araçlar

| Alan | Seçim | Açıklama |
|------|--------|----------|
| Frontend & Backend | Next.js 14 (App Router) | Full-stack React; sayfalar ve API aynı projede. |
| Veritabanı | SQLite + Prisma | Geliştirme ve teslim için basit kurulum. |
| Kimlik doğrulama | JWT (jose) + cookie | Oturum yönetimi. |
| Şifre | bcryptjs | Güvenli hash. |
| Stil | Tailwind CSS | Hızlı ve tutarlı arayüz. |
| Dil | TypeScript | Tip güvenliği. |
| Versiyon kontrolü | Git / GitHub | Kaynak kodu ve dokümantasyon. |

---

## 5. Riskler ve önlemler

| Risk | Olası etki | Önlem |
|------|------------|--------|
| Süre baskısı | Eksik teslim | MVP odaklı backlog; gereksiz özellik ertelenir. |
| Teknik zorluk | Gecikme | Bilinen teknoloji (Next.js, Prisma); dokümantasyondan yararlanma. |
| Kapsam genişlemesi | Sprint hedeflerinin aşılması | Product Owner öncelikleri net tutar; yeni istekler backlog’a eklenir. |

---

## 6. Teslim planı

- **Kod:** GitHub deposu (örn. `AgileLost-temPorject`).
- **Dokümantasyon:** `docs/` klasörü (Product Backlog, Sprint Planı, Sprint 1–4, Proje Planlaması, HPCA Raporu).
- **Çalıştırma:** README’de `npm install`, `npm run db:generate`, `npm run db:push`, `npm run dev` adımları.
- **Sunum:** Proje özeti, Scrum kullanımı, ekran görüntüleri/demo.

---

## 7. Referanslar

- Proje deposu: [AgileLost-temPorject](https://github.com/besmabakirci1/AgileLost-temPorject)
- Product Backlog: `docs/PRODUCT_BACKLOG.md`
- Sprint Planı: `docs/SPRINT_PLAN.md`
- Sprint detayları: `docs/SPRINT_1.md` … `docs/SPRINT_4.md`
- Haftalık rapor: `docs/HPCA_RAPORU.md`
