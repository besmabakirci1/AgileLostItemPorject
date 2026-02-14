# AgileLost – Kayıp Eşya Bulma Sitesi

**Seng 204 Final Projesi** – Agile / Scrum ile geliştirme.

## Proje özeti

Kayıp eşya ve bulunan eşya ilanlarının paylaşıldığı, kullanıcıların ilan ekleyip arayıp birbirleriyle iletişim kurabileceği bir web sitesi. Geliştirme **Scrum** ile 2 haftalık sprint’ler halinde yapılıyor.

## Scrum yapısı

| Rol / Kavram | Açıklama |
|--------------|----------|
| **Product Owner** | Ürün önceliklerini ve backlog’u belirler. |
| **Scrum Master** | Sprint’in akışını kolaylaştırır, engelleri kaldırmaya çalışır. |
| **Takım** | Analiz, tasarım, geliştirme, test. |

**Önemli dokümanlar:**

- **[Product Backlog](docs/PRODUCT_BACKLOG.md)** – Tüm özellikler ve iyileştirmeler listesi.
- **[Sprint Planı](docs/SPRINT_PLAN.md)** – 4 sprint’lik 8 haftalık plan (hedefler ve görevler).
- **[Sprint 1](docs/SPRINT_1.md)** · **[Sprint 2](docs/SPRINT_2.md)** · **[Sprint 3](docs/SPRINT_3.md)** · **[Sprint 4](docs/SPRINT_4.md)** – Sprint detayları ve teslim edilen işler.
- **[Proje Planlaması](docs/PROJE_PLANLAMASI.md)** – Proje kapsamı, zaman planı, roller, riskler, teslim planı.
- **[HPCA Raporu](docs/HPCA_RAPORU.md)** – Haftalık proje çalışma aktiviteleri (haftalık rapor).

**Olaylar:**

- **Sprint Planning** – Sprint başında: Bu sprint’te ne yapacağız? (Backlog’dan seçim.)
- **Daily Standup** – Kısa günlük toplantı (~15 dk): Ne yaptım, ne yapacağım, engel var mı?
- **Sprint Review** – Sprint sonunda: Çalışan ürün gösterimi ve geri bildirim.
- **Sprint Retrospective** – Sprint sonunda: Süreçte neyi iyileştireceğiz?

## Proje yapısı

```
agile/
├── README.md
├── docs/                     # Scrum dokümanları
├── prisma/                   # Veritabanı şeması (SQLite)
├── src/
│   ├── app/                  # Next.js sayfaları ve API
│   ├── components/
│   └── lib/
├── package.json
└── .env                      # DATABASE_URL, JWT_SECRET
```

## Çalıştırma

1. **Bağımlılıkları yükle:**
   ```bash
   npm install
   ```

2. **Veritabanını oluştur:**
   ```bash
   npm run db:generate
   npm run db:push
   ```

3. **Geliştirme sunucusunu başlat:**
   ```bash
   npm run dev
   ```
   Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

4. **Üretim build (isteğe bağlı):**
   ```bash
   npm run build
   npm start
   ```

## Özellikler (Scrum sprint’leri)

- **Sprint 1:** Üyelik (kayıt/giriş), kayıp ilan ekleme, basit arayüz
- **Sprint 2:** Bulunan ilan ekleme, kayıp ve bulunan ilan listeleme
- **Sprint 3:** Arama ve filtreleme (kelime, kategori, yer), tasarım iyileştirmeleri
- **Sprint 4:** Mesajlaşma (ilan sahibiyle iletişim), mesajlar sayfası

## Nasıl ilerlenir?

1. [Product Backlog](docs/PRODUCT_BACKLOG.md) ve [Sprint Planı](docs/SPRINT_PLAN.md) dosyalarını inceleyin.
2. Giriş yapmadan ilan ekleyemezsiniz; önce **Kayıt** ile hesap oluşturun.
3. **Kayıp İlan Ekle** / **Bulunan İlan Ekle** ile ilan oluşturun; ilan detayından ilan sahibine mesaj gönderebilirsiniz.

## Lisans ve bilgi

Üniversite projesi – eğitim amaçlı.
