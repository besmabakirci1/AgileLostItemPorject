# Sprint 1 – Temel Sistem

**Proje:** AgileLost – Kayıp Eşya Bulma Sitesi  
**Sprint süresi:** 2 hafta (Hafta 1–2)  
**Hedef:** Çalışan temel sistem (MVP); kullanıcı kayıt/giriş ve kayıp ilan ekleyebilmeli.

---

## Sprint hedefi

- Kullanıcılar e-posta/şifre ile kayıt olup giriş yapabilsin.
- Giriş yapan kullanıcı kayıp eşya ilanı ekleyebilsin.
- Ana sayfa, giriş/kayıt ve ilan ekleme sayfaları çalışır durumda olsun.

---

## Product Backlog öğeleri

| ID    | Öğe                         | Kabul kriterleri |
|-------|-----------------------------|------------------|
| PB-001 | Üyelik sistemi              | Kayıt, giriş, çıkış; şifre güvenli saklansın. |
| PB-002 | Kayıp eşya ilanı ekleme     | Başlık, açıklama, kategori, yer, kayıp tarihi zorunlu; ilan kaydedilsin. |
| PB-003 | Basit arayüz                | Ana sayfa, giriş/kayıt, ilan ekleme sayfaları; korumalı rotalar. |

---

## Sprint backlog (görevler)

| Görev              | Durum | Not |
|--------------------|--------|-----|
| Veritabanı şeması (User, LostItem) | ✓ | Prisma + SQLite |
| Auth API (kayıt, giriş, çıkış)    | ✓ | JWT + cookie |
| Giriş / Kayıt sayfaları           | ✓ | Form + validasyon |
| Kayıp ilan ekleme formu ve API    | ✓ | CRUD |
| Ana sayfa ve header               | ✓ | Navigasyon |
| Middleware (korumalı sayfalar)    | ✓ | /ilanlar/kayip/ekle vb. |

---

## Sprint olayları

- **Sprint Planning:** Backlog’dan PB-001, PB-002, PB-003 seçildi; görevlere bölündü.
- **Daily Standup:** Günlük kısa senkron (yapılanlar, yapılacaklar, engeller).
- **Sprint Review:** Çalışan ürün gösterimi (kayıt, giriş, kayıp ilan ekleme).
- **Sprint Retrospective:** İyileştirme maddeleri bir sonraki sprint’e taşındı.

---

## Teslim edilen çıktılar

- Üyelik (kayıt, giriş, çıkış) tamamlandı.
- Kayıp ilan ekleme sayfası ve API çalışıyor.
- Ana sayfa ve temel arayüz hazır.
