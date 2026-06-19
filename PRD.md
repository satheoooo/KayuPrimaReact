# Product Requirements Document (PRD)
## KayuPrima — Marketplace Kayu Indonesia

**Versi:** 1.1
**Tanggal:** 19 Juni 2026
**Status:** Frontend MVP

---

## 1. Ringkasan Produk

**KayuPrima** adalah platform marketplace kayu Indonesia yang mempertemukan **penjual kayu** (petani/penjual) dengan **pembeli kayu** (industri/perusahaan/meubel). Platform ini menyediakan kalkulator valuasi kayu, katalog jenis kayu, dan akses langsung ke jaringan pembeli premium via WhatsApp.

### Visi
Menjadi platform #1 di Indonesia untuk transaksi kayu yang transparan, adil, dan tanpa perantara.

### Target Pengguna
| Persona | Deskripsi |
|---------|-----------|
| **Penjual Kayu** | Petani, pemilik lahan, atau penjual kayu yang ingin menjual kayu dengan harga wajar pasar |
| **Pembeli Kayu** | Perusahaan meubel, kontraktor, pengrajin, atau industri yang membutuhkan suplai kayu |

### Point of View
Seluruh UI dan UX dirancang dari **perspektif penjual kayu** yang mencari calon pembeli.

---

## 2. Tech Stack

| Kategori | Teknologi | Versi |
|----------|-----------|-------|
| Framework | React | ^19.2.6 |
| Build Tool | Vite | ^8.0.12 |
| Bahasa | TypeScript | ~6.0.2 |
| Styling | Tailwind CSS | ^4.3.0 |
| Routing | React Router DOM | ^7.17.0 |
| React Compiler | Babel Plugin React Compiler | ^1.0.0 |
| Linting | ESLint 10 + plugins | - |

### Catatan Teknis
- **Frontend only** — belum ada backend/API
- **Auth simulasi** — menggunakan Context + localStorage
- **Data hardcoded** — semua data kayu, pembeli, dan harga masih statis
- **Tidak ada fitur chat** — untuk mencegah kecurangan, komunikasi via WhatsApp langsung

---

## 3. Skema Warna & Branding

| Token | Hex | Penggunaan |
|-------|-----|------------|
| Primary | `#2F5E2F` | Warna utama (hijau hutan) — tombol, navbar, heading |
| Primary Dark | `#244824` | Hover state tombol |
| Accent | `#F0F7F0` | Background highlight, badge |
| Text Primary | `#1a1a1a` | Heading text |
| Text Secondary | `#4A4A4A` | Body text, label |
| Background | `#F9F9F9` | Background section alternatif |
| Premium Gold | `#EAB308` | Badge premium, icon crown |

---

## 4. Struktur Halaman & Routing

### 4.1 Daftar Halaman

| Route | Nama Halaman | Status | Akses |
|-------|-------------|--------|-------|
| `/` | Beranda | ✅ Lengkap + Responsive | Public |
| `/login` | Masuk | ✅ Lengkap + Responsive | Public |
| `/register` | Daftar | ✅ Lengkap + Responsive | Public |
| `/forgot-password` | Lupa Password | ✅ Lengkap + Responsive | Public |
| `/catalog` | Katalog Pohon | ⚠️ Placeholder | Public |
| `/premium` | Premium Plan | ✅ Lengkap + Responsive | Public (upgrade di dalam) |
| `/pembeli-premium` | Calon Pembeli | ✅ Lengkap + Responsive | Premium Only |
| `/premium-calculator` | Kalkulator Premium | ✅ Lengkap + Responsive | Login + Premium |

### 4.2 Rincian Per Halaman

#### 4.2.1 Beranda (`/`)
Halaman utama yang menampilkan seluruh nilai produk KayuPrima.

**Section:**
1. **Navbar** — Navigasi, auth check, badge premium, dropdown profile, mobile hamburger menu
2. **Hero** — Headline, subtext, 3 fitur unggulan, kalkulator pohon (gratis), **3D Floating Wood Particles animation**
3. **Price Ticker** — Marquee harga kayu real-time (10 jenis kayu, animasi scroll)
4. **Pembeli Premium** — Preview 2 pembeli premium (blur untuk non-premium)
5. **Katalog Pohon** — 3 kartu pertama dari 7 jenis kayu
6. **Testimoni** — 3 review dari pengguna
7. **Brand Logos** — Logo mitra bisnis (infinite scroll) + banner trust SVLK
8. **Footer** — Info perusahaan, tautan, kontak, newsletter

#### 4.2.2 Login (`/login`)
- Layout split-screen: form kiri, gambar kanan
- Login via Email/Password (simulasi)
- Login via Google OAuth (simulasi)
- Link ke register dan forgot password
- Validasi: email & password wajib diisi

#### 4.2.3 Register (`/register`)
- Layout split-screen: form kiri, gambar kanan
- Field: Nama, Email, Password, Konfirmasi Password
- Validasi: semua field wajib, password min 8 karakter, konfirmasi cocok
- Centang syarat & ketentuan
- Login otomatis setelah register

#### 4.2.4 Lupa Password (`/forgot-password`)
- Input email → tombol "Kirim Link Reset"
- State sukses: notifikasi email terkirim + link kembali ke login

#### 4.2.5 Katalog (`/catalog`)
- **Status: Placeholder** — baru menampilkan judul
- **Rencana:** Grid katalog lengkap semua jenis kayu dengan filter, search, detail

#### 4.2.6 Premium Plan (`/premium`)
Tiga tampilan tergantung status user:

| Status | Tampilan |
|--------|----------|
| Belum login | Halaman paket + tombol "Login untuk Daftar" (disabled) |
| Login, belum premium | Halaman paket + benefit list + tombol "Daftar Sekarang" |
| Sudah premium | Status "Kamu Sudah Premium!" + 3 button navigasi |

**Setelah daftar premium → Success Page:**
- Pesan: "Selamat! Kamu Premium! 🎉"
- 3 button:
  1. Kembali ke Beranda
  2. Cek Pembeli Premium → `/pembeli-premium`
  3. Cek Kalkulator Premium → `/premium-calculator`

#### 4.2.7 Calon Pembeli (`/pembeli-premium`)
Halaman premium-only yang menampilkan daftar calon pembeli.

**Gate:** Belum premium → tampilkan "Premium Diperlukan" + link ke `/premium`

**Isi:**
- Header: judul, jumlah total pembeli, jumlah premium
- Grid 2 kolom: 6 kartu pembeli (3 premium, 3 non-premium)

**Perbedaan Kartu:**

| Elemen | Premium | Non-Premium |
|--------|---------|-------------|
| Background | Gradient hijau | Putih + border abu |
| Badge | Crown + "PREMIUM" | Tidak ada |
| Avatar border | White/30 | Gray-200 |
| Tombol WhatsApp | Langsung chat | Tersedia juga |

**Data per kartu:**
- Nama perusahaan/orang
- Lokasi (icon pin)
- Kebutuhan kayu
- Jumlah yang dibutuhkan
- Budget
- Tombol "Chat via WhatsApp" → `wa.me/{nomor}`

#### 4.2.8 Kalkulator Premium (`/premium-calculator`)
Halaman login-only dengan 4 fitur utama:

**Gate:** Belum login → tampilkan "Login Diperlukan" + link login

**Fitur:**

1. **Kalkulator Harga** (kolom kiri atas)
   - Pilih jenis kayu (7 opsi)
   - Input diameter (cm), tinggi (cm), jumlah pohon
   - Output: volume per pohon (m³), harga per m³, estimasi harga jual

2. **Perbandingan Harga** (kolom kiri bawah)
   - Pilih 2 jenis kayu untuk dibandingkan
   - Visualisasi bar horizontal
   - Tampilkan selisih harga per m³

3. **Grafik Tren Harga** (kolom kanan atas)
   - Pilih jenis kayu: **Semua 7 jenis** (Jati, Mahoni, Meranti, Sungkai, Sonokeling, Ulin, Bangkirai)
   - Bar chart 6 bulan terakhir
   - Indikator tren naik/turun (persentase)

4. **Export Hasil** (kolom kanan bawah)
   - Ringkasan kalkulasi (jenis, dimensi, volume, harga)
   - Tombol "Cetak / Export PDF" → `window.print()`

---

## 5. Sistem Autentikasi

### 5.1 Model Data User

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;        // URL (ui-avatars.com)
  provider: "google" | "email";
}
```

### 5.2 Auth Context

| Field/Action | Tipe | Deskripsi |
|-------------|------|-----------|
| `user` | `User \| null` | Data user yang sedang login |
| `isPremium` | `boolean` | Status keanggotaan premium |
| `isAuthenticated` | `boolean` | Derived: `!!user` |
| `login(userData)` | function | Simpan user ke state + localStorage |
| `logout()` | function | Hapus user + reset premium |
| `upgradeToPremium()` | function | Set `isPremium = true` + simpan ke localStorage |

### 5.3 Persistensi
- `kayuprima_user` → JSON string data user
- `kayuprima_premium` → string "true" atau tidak ada

### 5.4 Flow Autentikasi

```
Belum Login → Klik Fitur Premium → Modal "Masuk ke KayuPrima" → /login
Login, Belum Premium → Klik Fitur Premium → Modal "Upgrade ke Premium" → /premium
Login, Sudah Premium → Klik "Pembeli Premium" → /pembeli-premium
Login, Sudah Premium → Klik "Kalkulator Premium" → /premium-calculator
```

---

## 6. Sistem Premium

### 6.1 Free Plan

| Fitur | Akses |
|-------|-------|
| Kalkulator dasar di beranda | ✅ |
| Katalog pohon di beranda | ✅ |
| Halaman `/catalog` | ✅ |
| Melihat pembeli premium | ❌ |
| Chat pembeli via WhatsApp | ❌ |
| Kalkulator Premium | ❌ |

### 6.2 Premium Plan

| Fitur | Akses |
|-------|-------|
| Semua fitur Free | ✅ |
| Daftar calon pembeli (`/pembeli-premium`) | ✅ |
| Chat pembeli via WhatsApp | ✅ |
| Kalkulator Premium | ✅ |
| Perbandingan harga | ✅ |
| Grafik tren harga | ✅ |
| Export hasil kalkulasi | ✅ |

### 6.3 Akses Premium Plan

| Akses | Deskripsi |
|-------|-----------|
| Navbar "Pembeli Premium" | Klik → cek login → cek premium → modal/navigasi |
| Navbar "Kalkulator Premium" | Klik → cek login → cek premium → modal/navigasi |
| Modal popup upgrade | "Lihat Paket Premium" → `/premium` |
| Dropdown profile | ⭐ "Upgrade Premium" / "Lihat Paket Premium" → `/premium` |

### 6.4 Flow Upgrade

```
1. User klik "Daftar Sekarang" di /premium
2. upgradeToPremium() dipanggil
3. isPremium = true, disimpan ke localStorage
4. Success page tampil dengan 3 navigasi
5. Badge PREMIUM muncul di navbar
6. Semua fitur premium terbuka
```

---

## 7. Komponen UI

### 7.1 Komponen Layout

| Komponen | Deskripsi |
|----------|-----------|
| `Navbar` | Navigasi atas + auth modal + premium badge + **mobile hamburger menu** |
| `Logo` | SVG logo KayuPrima (sm/md/lg) — digunakan di navbar & auth pages |
| `Footer` | 4 kolom: info, tautan, kontak, newsletter |
| `Favicon` | SVG logo pohon KayuPrima (bukan logo Vite default) |

### 7.2 Komponen Homepage

| Komponen | Deskripsi |
|----------|-----------|
| `Hero` | Headline + kalkulator + cursor glow effect + **3D Wood Particles** |
| `WoodParticles` | Animasi 3D partikel kayu melayang (25 partikel + 8 blok + 6 decorative circles) |
| `Calculator` | Kalkulator pohon (gratis) — 7 jenis kayu |
| `PriceTicker` | Marquee harga kayu (10 jenis, animasi) |
| `PremiumBuyers` | Preview pembeli premium (blur overlay) |
| `TreeCatalog` | 3 kartu katalog pohon |
| `Testimonials` | 3 testimoni pengguna |
| `BrandLogos` | Logo mitra + banner trust |

### 7.3 Komponen Premium

| Komponen | Deskripsi |
|----------|-----------|
| `PremiumPage` | Halaman plan + success + status |
| `BuyersPage` | Daftar calon pembeli + WhatsApp |
| `PremiumCalculatorPage` | Kalkulator + perbandingan + grafik + export |

### 7.4 Komponen yang Dihapus

| File | Status |
|------|--------|
| `buyer-card.tsx` | ❌ Dihapus (19 Juni 2026) |
| `wood-card.tsx` | ❌ Dihapus (19 Juni 2026) |
| `login-modal.tsx` | ❌ Dihapus (19 Juni 2026) |
| `premium-section.tsx` | ❌ Dihapus (19 Juni 2026) |
| `featured-products.tsx` | ❌ Dihapus (19 Juni 2026) |

---

## 8. Data Statis

### 8.1 Jenis Kayu (7)

| ID | Nama | Harga/m³ |
|----|------|----------|
| jati | Kayu Jati | Rp 20.000.000 |
| mahoni | Kayu Mahoni | Rp 15.000.000 |
| meranti | Kayu Meranti | Rp 8.000.000 |
| sungkai | Kayu Sungkai | Rp 6.500.000 |
| sonokeling | Kayu Sonokeling | Rp 17.000.000 |
| ulin | Kayu Ulin | Rp 22.000.000 |
| bangkirai | Kayu Bangkirai | Rp 12.000.000 |

### 8.2 Harga Ticker (10 jenis)

Termasuk: Jati, Mahoni, Sonokeling, Ulin, Bangkirai, Meranti, Sungkai, Cendana, Cengkeh, Menggani

### 8.3 Data Pembeli (6)

| Nama | Lokasi | Kayu | Jumlah | Budget | Premium |
|------|--------|------|--------|--------|---------|
| PT Maju Jaya | Surabaya | Jati | 50 m³ | Rp 750jt | ✅ |
| CV Berkah Furniture | Yogyakarta | Mahoni | 30 m³ | Rp 240jt | ✅ |
| PT Sinar Kayu | Bandung | Sonokeling | 20 m³ | Rp 340jt | ✅ |
| Budi Santoso | Solo | Jati | 10 m³ | Rp 150jt | ❌ |
| Rina Wijaya | Malang | Meranti | 15 m³ | Rp 80jt | ❌ |
| Toko Mebel Jati | Kudus | Jati, Mahoni | 25 m³ | Rp 400jt | ❌ |

### 8.4 Data Tren Harga (6 bulan)

Untuk Jati, Mahoni, Meranti — data dari Januari hingga Juni

### 8.5 Katalog Pohon (7)

Jati, Mahoni, Meranti, Sungkai, Sonokeling, Ulin, Bangkirai — dengan nama latin, deskripsi, karakteristik, kegunaan

### 8.6 Testimoni (3)

1 penjual + 2 pembeli dengan rating bintang 5

### 8.7 Mitra (8)

PT Jati Luhur Agung, PT Rimba Makmur Utama, PT Dian Alam Lestari, PT Bukit Asam, PT Indah Kiat Pulp & Paper, CV Karya Pratama Furniture, PT Inhutani I, PT Perhutani

---

## 9. Kalkulasi

### 9.1 Volume Pohon

```
Volume per pohon (m³) = (Diameter cm × Tinggi cm × 100) / 1.000.000
```

### 9.2 Estimasi Harga

```
Total Harga = Volume per pohon × Harga per m³ × Jumlah Pohon
```

### 9.3 Format Harga

Menggunakan `Intl.NumberFormat` dengan locale `id-ID` dan mata uang IDR.

### 9.4 Custom Dropdown

Semua `<select>` element menggunakan custom SVG arrow icon dengan padding kanan (`pr-10`) untuk tampilan yang lebih rapi.

---

## 10. Animasi & Efek

| Efek | Lokasi | Deskripsi |
|------|--------|-----------|
| **3D Floating Wood Particles** | Hero | Partikel kayu 3D melayang dengan rotasi (25 partikel + 8 blok besar) |
| Cursor Glow | Hero | Radial gradient mengikuti kursor mouse |
| Infinite Scroll | PriceTicker, BrandLogos | CSS `animate-scroll` / `animate-ticker` |
| Hover Scale | Gambar kartu | `hover:scale-105` pada gambar |
| Blur Overlay | PremiumBuyers | `blur-md` untuk konten terkunci |
| Smooth Transition | Semua tombol/link | `transition` pada hover/click state |

---

## 11. Responsive Design

**Status: ✅ Sudah diimplementasi**

| Breakpoint | Deskripsi |
|------------|-----------|
| Mobile | `< 768px` — 1 kolom, padding kecil |
| Tablet | `768px - 1024px` — 2 kolom, padding sedang |
| Desktop | `> 1024px` — 3+ kolom, padding penuh |

**Yang sudah responsive:**
- Navbar dengan hamburger menu mobile
- Semua halaman (homepage, premium, buyers, calculator, auth)
- Grid layouts (1→2→3 kolom)
- Auth pages (split layout: form full-width di mobile, image hidden)
- Padding global: `px-4 md:px-8 lg:px-[160px]`

---

## 12. Yang Belum Dikerjakan (Backlog)

### Prioritas Tinggi
- [x] ~~Implementasi halaman `/catalog`~~ (sedang dikerjakan - Alliya)
- [x] ~~Responsive design untuk mobile & tablet~~ ✅ (19 Juni 2026)
- [x] ~~Hapus komponen kosong~~ ✅ (19 Juni 2026)
- [x] ~~Hapus atau gunakan `featured-products.tsx`~~ ✅ (19 Juni 2026)

### Prioritas Menengah
- [ ] Backend API untuk auth (register, login, session)
- [ ] Database untuk data kayu, pembeli, dan harga
- [ ] Integrasi payment gateway untuk premium (Midtrans/Xendit)
- [ ] Halaman detail katalog per jenis kayu (`/catalog/:id`) - sedang dikerjakan (Farel)

### Prioritas Rendah
- [x] ~~Push semua commit ke GitHub~~ ✅
- [ ] PWA (Progressive Web App) untuk akses offline
- [ ] Multi-bahasa (Indonesia + English)
- [ ] Push notifikasi untuk harga kayu berubah
- [ ] Dashboard penjual (status listing, riwayat)

---

## 13. Catatan Git

- **Repository:** https://github.com/satheoooo/KayuPrimaReact.git
- **SSH Key:** `~/.ssh/id_ed25519` (sudah ter-setup)
- **Remote:** `git@github.com:satheoooo/KayuPrimaReact.git`
- **Branch:** `main`
- **Status:** Semua commit sudah terpush

### Commit Terakhir
| Hash | Message | Tanggal |
|------|---------|---------|
| `cb89df5` | update: perbaiki logo & gambar halaman register & forgot password | 19 Juni 2026 |
| `5d2d981` | revert: hapus animasi floating leaves, sisakan wood particles saja | 19 Juni 2026 |
| `9299f46` | feat: tambah animasi floating leaves di hero section | 19 Juni 2026 |
| `6f589ca` | feat: tambah animasi 3D floating wood particles di hero section | 19 Juni 2026 |
| `04b77b9` | feat: grafik tren harga untuk semua 7 jenis kayu | 19 Juni 2026 |
| `a80bb3d` | feat: export PDF hanya tampilkan hasil kalkulasi | 19 Juni 2026 |
| `6956980` | feat: hapus komponen kosong & tambahkan responsive design mobile/tablet | 19 Juni 2026 |

---

*Document generated by Claude — 19 Juni 2026*
