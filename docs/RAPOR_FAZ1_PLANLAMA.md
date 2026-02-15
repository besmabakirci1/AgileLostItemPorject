# SENG 204 – Proje Raporu  
## (Slayt Yapısına Göre – Faz 1: Planlama)

**Ders:** SENG 204 – Software Engineering  
**Öğretim üyesi:** Dr. Niayesh Gharaei  
**Proje adı:** AgileLost – Kayıp Eşya Bulma Sitesi  
**Tarih:** 2026

---

*Bu teslimde raporun **1. Introduction** ve **2. Software Process Model** bölümleri (Planlama aşaması) sunulmaktadır. Bölüm 3, 4 ve 5 sonraki teslimlerde eklenecektir.*

---

## 1. Introduction

### 1.1 Problem definition

Kampüs, toplu taşıma ve kamu alanlarında kaybolan veya bulunan eşyaların (cüzdan, telefon, anahtar vb.) sahiplerine ulaştırılması zordur. İlanlar duyuru panosu, sosyal medya gibi dağınık kanallarda kaldığı için eşleştirme verimsizdir; kullanıcılar tek bir yerde arama yapamaz ve ilan sahipleriyle doğrudan iletişim kuramaz.

Bu projede, kayıp eşya ve bulunan eşya ilanlarının **tek bir web platformunda** toplanması, aranması ve ilan sahipleriyle mesajlaşılması hedeflenmektedir.

### 1.2 Project objectives

| No | Objective | Açıklama |
|----|-----------|----------|
| 1 | Çalışan kayıp–bulunan platformu | Kullanıcılar kayıt olup giriş yapabilmeli; kayıp ve bulunan ilan ekleyebilmeli; ilanlar listelenmeli. |
| 2 | Arama ve filtreleme | İlanlar başlık, kategori, yer gibi kriterlere göre aranıp filtrelenebilmeli. |
| 3 | İletişim | İlan sahibi ile mesajlaşma imkânı sunulmalı. |
| 4 | Süreç modeli uygulaması | Proje, ders kapsamında öğrenilen yazılım süreci (Agile/Scrum) ile planlanıp yürütülmeli. |
| 5 | Dokümantasyon | Planlama, gereksinimler, tasarım ve ilerleme raporları (slayttaki rapor yapısına uygun) üretilmeli. |

**Planlama kapsamında ek bilgiler:**
- **Süre (Time):** 8 hafta, 4 sprint (her sprint 2 hafta).
- **Maliyet (Cost):** Öğrenci projesi; açık kaynak araçlar (Next.js, Prisma, Tailwind vb.) kullanılacak; ek maliyet yok.

---

## 2. Software Process Model

### 2.1 Chosen software development model

Seçilen model: **Agile – Scrum.**

**Gerekçe:**
- Gereksinimler proje boyunca netleşebilir; Agile değişikliklere uyuma izin verir.
- Kısa sprint’lerle (1–4 hafta) erken ve sık çalışan ürün teslimi mümkündür.
- LMS benzeri projeler için slaytta vurgulandığı gibi “requirements can change frequently” ve “faster delivery of usable modules” Agile’ı uygun kılar; kayıp eşya platformu da aynı şekilde adım adım geliştirilebilir ve kullanıcı geri bildirimi alınabilir.

### 2.2 Application of the model in the Project

Scrum’ın projede uygulanışı:

| Scrum bileşeni | Projedeki uygulama |
|----------------|--------------------|
| **Product Backlog** | Tüm özellikler listelenir: kullanıcı kayıt/giriş, kayıp/bulunan ilan CRUD, arama/filtre, mesajlaşma, fotoğraf yükleme, dil seçimi vb. |
| **Sprint Backlog** | Her sprint için seçilen işler (örn. Sprint 1: auth + kayıp ilan ekleme; Sprint 2: bulunan ilan + listeleme; Sprint 3: arama/filtre; Sprint 4: mesajlaşma, fotoğraf, dil). |
| **Sprint** | Sabit 2 haftalık iterasyonlar; toplam 4 sprint. |
| **Daily Stand-up** | Takım ilerlemeyi paylaşır: dün ne yapıldı, bugün ne yapılacak, engel var mı. |
| **Sprint Review** | Sprint sonunda tamamlanan modül gösterilir, geri bildirim alınır. |
| **Sprint Retrospective** | Neyin iyi gittiği, neyin iyileştirileceği tartışılır. |

Bu yapı, slayttaki “Product Backlog → WHAT to build”, “Sprint Backlog → WHAT in this sprint”, “Sprints → WHEN it is built” özetine uygun şekilde projede kullanılmaktadır.

---

**Sonraki rapor bölümleri (slayt sırasına göre):**
- **3. Requirement Analysis** – User requirements (functional, non-functional), System specifications  
- **4. System Modeling** – Context models, Interaction models, Use case, Sequence diagrams  
- **5. Architectural Design** – Structural models (class diagrams, generalization, aggregation), Behavioral models  
