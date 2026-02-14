# HPCA Raporu – Haftalık Proje Çalışma Aktiviteleri

**Proje:** AgileLost – Kayıp Eşya Bulma Sitesi  
**Ders:** Seng 204  
**Rapor türü:** Haftalık proje çalışma aktiviteleri (HPCA) / Haftalık rapor

---

## Amaç

Bu dokümanda projenin hafta hafta yapılan aktiviteleri özetlenmektedir. Scrum sprint’leri 2’şer hafta olduğu için her iki hafta bir “sprint” bazında, haftalık düzeyde de yapılan işler kısaca listelenmektedir.

---

## Hafta 1–2 (Sprint 1)

### Hafta 1
- Proje konusu ve kapsamının belirlenmesi (Kayıp eşya bulma sitesi).
- Agile/Scrum metodolojisinin seçilmesi; Product Backlog ve Sprint Planı taslağının yazılması.
- Teknoloji seçimi: Next.js, Prisma, SQLite, Tailwind.
- Veritabanı şemasının tasarlanması (User, LostItem).
- Kimlik doğrulama (kayıt, giriş, çıkış) API ve sayfalarının geliştirilmesi.

### Hafta 2
- Kayıp ilan ekleme formu ve API’sinin tamamlanması.
- Ana sayfa, header ve temel sayfa yapısının oluşturulması.
- Korumalı sayfalar için middleware yazılması (giriş yapmadan ilan ekleme sayfasına erişimin engellenmesi).
- Sprint 1 Review: Çalışan ürün gösterimi (kayıt, giriş, kayıp ilan ekleme).
- Sprint 1 Retrospective ve Sprint 2 planlaması.

**Sprint 1 çıktısı:** Kullanıcı kayıt/giriş yapabiliyor; kayıp ilan ekleyebiliyor.

---

## Hafta 3–4 (Sprint 2)

### Hafta 3
- Bulunan ilan (FoundItem) modeli ve API’sinin eklenmesi.
- Bulunan ilan ekleme sayfası ve formunun geliştirilmesi.
- Kayıp ilanlar listesi sayfasının yazılması (/ilanlar/kayip).

### Hafta 4
- Bulunan ilanlar listesi sayfasının yazılması (/ilanlar/bulunan).
- Ortak ilan kartı bileşeninin (ItemCard) kullanılması.
- İlan detay sayfalarının oluşturulması (kayıp/bulunan [id]).
- Sprint 2 Review ve Retrospective.

**Sprint 2 çıktısı:** Kayıp ve bulunan ilanlar eklenip listelenebiliyor.

---

## Hafta 5–6 (Sprint 3)

### Hafta 5
- Arama ve filtreleme gereksiniminin netleştirilmesi (kelime, kategori, yer).
- SearchFilters bileşeninin yazılması.
- Liste API’lerine filtre parametrelerinin eklenmesi (q, kategori, yer).

### Hafta 6
- Arayüz iyileştirmeleri: siyah-beyaz-kırmızı tema, tipografi, kartlar.
- Header ve footer’ın güncellenmesi.
- Responsive düzenlemeler.
- Sprint 3 Review ve Retrospective.

**Sprint 3 çıktısı:** İlanlar arama/filtre ile listelenebiliyor; arayüz sadeleştirildi.

---

## Hafta 7–8 (Sprint 4)

### Hafta 7
- Mesajlaşma modeli (Message) ve API’sinin tasarlanması ve yazılması.
- İlan detay sayfasında mesaj kutusu (MesajKutusu) bileşeninin eklenmesi.
- Mesajlar listesi sayfasının (/mesajlar) oluşturulması.
- Dil seçimi (Türkçe/İngilizce): cookie, i18n metinleri, menüde “Dil” alanı.

### Hafta 8
- Opsiyonel fotoğraf yükleme: sürükle-bırak ve galeriden/dosyadan seçim; upload API ve ImageUploadZone bileşeni.
- Hata düzeltmeleri ve genel test.
- Dokümantasyon: README, Product Backlog, Sprint Planı, Sprint 1–4 detayları, Proje Planlaması, HPCA Raporu.
- Projenin GitHub’a push edilmesi.
- Sprint 4 Review; proje teslime hazır hale getirildi.

**Sprint 4 çıktısı:** Mesajlaşma, dil seçimi ve fotoğraf yükleme çalışıyor; planlama ve haftalık rapor dokümanları tamamlandı.

---

## Özet tablo

| Hafta | Sprint | Ana aktiviteler |
|-------|--------|------------------|
| 1 | 1 | Planlama, backlog, auth, veritabanı |
| 2 | 1 | Kayıp ilan, arayüz, MVP teslimi |
| 3 | 2 | Bulunan ilan, API ve formlar |
| 4 | 2 | Listeleme sayfaları, detay sayfaları |
| 5 | 3 | Arama/filtre bileşeni ve API |
| 6 | 3 | Tasarım iyileştirmeleri |
| 7 | 4 | Mesajlaşma, dil seçimi |
| 8 | 4 | Fotoğraf yükleme, dokümantasyon, teslim |

---

## Not

Bu rapor, projenin planlanan haftalık/sprint aktivitelerini özetlemektedir. HPCA (Haftalık Proje Çalışma Aktiviteleri) veya haftalık rapor formatı, dersin gerektirdiği şablona göre düzenlenebilir veya ek sayfalara bölünebilir.
