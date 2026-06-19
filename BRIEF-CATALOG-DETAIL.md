# Brief: Halaman Detail Katalog KayuPrima

**Untuk:** Farel
**Project:** KayuPrima - Marketplace Kayu Indonesia
**Branch:** `feat/catalog-detail-page`

---

## 1. Persiapan Awal (Git)

### 1.1 Install Git
Download & install Git: https://git-scm.com/downloads

Setelah install, buka terminal (VS Code terminal atau Git Bash) lalu jalankan:
```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email_kamu@gmail.com"
```

### 1.2 Clone Repository
```bash
git clone git@github.com:satheoooo/KayuPrimaReact.git
cd KayuPrimaReact
```

### 1.3 Install Dependencies
```bash
npm install
```

### 1.4 Jalankan Development Server
```bash
npm run dev
```
Buka browser di `http://localhost:5173`

### 1.5 Buat Branch Kerja
```bash
git checkout -b feat/catalog-detail-page
```
> **PENTING:** Selalu kerja di branch sendiri, jangan di `main`!

---

## 2. Tech Stack yang Dipakai

| Teknologi | Keterangan |
|-----------|------------|
| React 19 | Framework UI |
| TypeScript | Bahasa pemrograman |
| Tailwind CSS 4 | Styling (utility-first CSS) |
| React Router DOM | Routing/halaman |

### Style Guide
- **Primary Green:** `#2F5E2F` (warna tombol, navbar, heading)
- **Primary Dark:** `#244824` (hover state)
- **Accent:** `#F0F7F0` (background highlight)
- **Text Primary:** `#1a1a1a`
- **Text Secondary:** `#4A4A4A`
- **Background:** `#F9F9F9`

---

## 3. Yang Harus Dikerjakan

### File yang Dibuat
- `src/pages/catalog-detail-page.tsx` (file baru)

### File yang Dimodifikasi
- `src/App.tsx` — tambah route baru

### Data yang Sudah Ada
Data kayu sudah ada di `src/components/tree-catalog.tsx` — 7 jenis kayu:

| ID | Nama | Latin | Harga/m³ |
|----|------|-------|----------|
| jati | Kayu Jati | Tectona grandis | Rp 20.000.000 |
| mahoni | Kayu Mahoni | Swietenia macrophylla | Rp 15.000.000 |
| meranti | Kayu Meranti | Shorea spp. | Rp 8.000.000 |
| sungkai | Kayu Sungkai | Peronema canescens | Rp 6.500.000 |
| sonokeling | Kayu Sonokeling | Dalbergia latifolia | Rp 17.000.000 |
| ulin | Kayu Ulin | Eusideroxylon zwageri | Rp 22.000.000 |
| bangkirai | Kayu Bangkirai | Shorea balangeran | Rp 12.000.000 |

---

## 4. Fitur yang Harus Dibuat

### 4.1 Route Baru
Tambah di `src/App.tsx`:
```tsx
import CatalogDetailPage from "./pages/catalog-detail-page";

// Di dalam <Routes>:
<Route path="/catalog/:id" element={<CatalogDetailPage />} />
```

### 4.2 Halaman Detail
Tampilan halaman dengan 2 bagian (layout split):

**Bagian Kiri — Gambar:**
- Gambar besar jenis kayu
- Badge harga di pojok kanan atas
- Lebar: `lg:w-1/2`

**Bagian Kanan — Info:**
- Nama kayu (heading besar)
- Nama latin (italic, abu-abu)
- Harga per m³ (badge hijau)
- Deskripsi lengkap
- **Karakteristik** — tag/badge kecil hijau (`bg-[#F0F7F0] text-[#2F5E2F]`)
- **Kegunaan** — tag/badge abu-abu (`bg-gray-100 text-gray-600`)
- **2 Tombol:**
  - "Hitung Harga" → navigasi ke `/premium-calculator` (hijau solid)
  - "Lihat Pembeli" → navigasi ke `/pembeli-premium` (outline hijau)

### 4.3 Responsive Design
- Mobile: gambar di atas, info di bawah (flex-col)
- Desktop: gambar kiri, info kanan (flex-row)

---

## 5. Contoh Struktur Code

```tsx
// src/pages/catalog-detail-page.tsx

import { useParams, Link } from "react-router-dom";
import Navbar from "../components/navbar";

const trees = [
  // ... copy data dari tree-catalog.tsx (pastikan id pakai string)
];

function CatalogDetailPage() {
  const { id } = useParams();
  const tree = trees.find((t) => t.id === id);

  if (!tree) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        <Navbar />
        <div className="flex items-center justify-center py-[120px]">
          <div className="text-center">
            <h2 className="text-[24px] font-bold text-[#2F5E2F] mb-4">
              Kayu Tidak Ditemukan
            </h2>
            <Link to="/catalog" className="text-[#2F5E2F] hover:underline">
              Kembali ke Katalog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />

      <div className="px-4 md:px-8 lg:px-[160px] py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Gambar */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={tree.image}
                alt={tree.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full">
                <span className="font-bold text-[#2F5E2F]">
                  {tree.price}{tree.unit}
                </span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-1/2">
            <h1 className="text-[32px] font-bold text-[#2F5E2F] mb-1">
              Kayu {tree.name}
            </h1>
            <p className="text-[15px] text-gray-400 italic mb-4">
              {tree.latin}
            </p>

            <p className="text-[15px] text-[#4A4A4A] leading-relaxed mb-6">
              {tree.description}
            </p>

            {/* Karakteristik */}
            <div className="mb-5">
              <h3 className="text-[14px] font-bold text-[#4A4A4A] mb-2">
                Karakteristik
              </h3>
              <div className="flex flex-wrap gap-2">
                {tree.characteristics.map((char, i) => (
                  <span key={i} className="px-3 py-1 bg-[#F0F7F0] text-[#2F5E2F] rounded-full text-[13px]">
                    {char}
                  </span>
                ))}
              </div>
            </div>

            {/* Kegunaan */}
            <div className="mb-8">
              <h3 className="text-[14px] font-bold text-[#4A4A4A] mb-2">
                Kegunaan
              </h3>
              <div className="flex flex-wrap gap-2">
                {tree.usage.map((use, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[13px]">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/premium-calculator"
                className="flex-1 py-3 bg-[#2F5E2F] text-white rounded-xl font-medium text-center hover:bg-[#244824] transition"
              >
                Hitung Harga
              </Link>
              <Link
                to="/pembeli-premium"
                className="flex-1 py-3 border-2 border-[#2F5E2F] text-[#2F5E2F] rounded-xl font-medium text-center hover:bg-[#2F5E2F] hover:text-white transition"
              >
                Lihat Pembeli
              </Link>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 text-[#2F5E2F] font-medium hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CatalogDetailPage;
```

---

## 6. Cara Push ke GitHub

### 6.1 Commit Perubahan
```bash
git add .
git commit -m "feat: implementasi halaman detail katalog kayu"
```

### 6.2 Push Branch
```bash
git push origin feat/catalog-detail-page
```

### 6.3 Buat Pull Request
1. Buka: https://github.com/satheoooo/KayuPrimaReact
2. Klik "Compare & pull request"
3. Title: `feat: implementasi halaman detail katalog kayu`
4. Description: jelaskan apa yang sudah dikerjakan
5. Klik "Create pull request"

---

## 7. Checklist Sebelum Push

- [ ] Halaman tampil untuk semua 7 jenis kayu
- [ ] URL `/catalog/jati`, `/catalog/mahoni`, dll bisa diakses
- ] Jika ID tidak ada, tampilkan pesan "Kayu Tidak Ditemukan"
- [ ] Gambar besar + badge harga tampil
- [ ] Karakteristik & kegunaan tampil dalam bentuk tag
- [ ] Tombol "Hitung Harga" → navigasi ke `/premium-calculator`
- [ ] Tombol "Lihat Pembeli" → navigasi ke `/pembeli-premium`
- [ ] Link "Kembali ke Katalog" berfungsi
- [ ] Responsive di mobile (375px)
- [ ] Responsive di tablet (768px)
- [ ] Responsive di desktop (1024px+)
- [ ] `npm run build` berhasil

---

## 8. Tips untuk Pemula

1. **Jangan edit file `main`** — selalu buat branch baru
2. **Commit sering** — jangan menumpuk banyak perubahan
3. **Commit message jelas** — pakai format `feat:`, `fix:`, `update:`
4. **Test sebelum push** — jalankan `npm run build` untuk cek error
5. **Kalau stuck** — tanya di GitHub Issues atau chat tim

---

## 9. Referensi

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/learn)
- [React Router useParams](https://reactrouter.com/en/main/hooks/use-params)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

