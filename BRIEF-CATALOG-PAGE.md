# Brief: Halaman Katalog Produk KayuPrima

**Untuk:** Alliya
**Project:** KayuPrima - Marketplace Kayu Indonesia
**Branch:** `feat/catalog-page`

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
git checkout -b feat/catalog-page
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

### File yang Dimodifikasi
- `src/pages/catalog-page.tsx` (saat ini masih placeholder kosong)

### Data yang Sudah Ada
Data kayu sudah ada di `src/components/tree-catalog.tsx` — 7 jenis kayu:
1. Jati (Rp 20.000.000/m³)
2. Mahoni (Rp 15.000.000/m³)
3. Meranti (Rp 8.000.000/m³)
4. Sungkai (Rp 6.500.000/m³)
5. Sonokeling (Rp 17.000.000/m³)
6. Ulin (Rp 22.000.000/m³)
7. Bangkirai (Rp 12.000.000/m³)

---

## 4. Fitur yang harus Dibuat

### 4.1 Header Halaman
- Judul: "Katalog Produk"
- Subtitle: penjelasan singkat tentang katalog
- Background hijau `#2F5E2F` seperti halaman premium lainnya
- Padding responsive: `px-4 md:px-8 lg:px-[160px]`

### 4.2 Filter & Search
- **Search bar** — cari berdasarkan nama kayu
- **Filter harga** — range harga (murah → mahal)
- **Filter kegunaan** — Furnitur, Konstruksi, Dekorasi, dll

### 4.3 Grid Katalog
- Tampilan grid kartu (card) untuk semua 7 jenis kayu
- Responsive: 1 kolom (mobile) → 2 kolom (tablet) → 3 kolom (desktop)
- Class: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`

### 4.4 Kartu Produk (Card)
Setiap kartu harus menampilkan:
- **Gambar** kayu (pakai URL Unsplash yang sudah ada di data)
- **Nama kayu** + nama latin (italic)
- **Harga per m³** — badge di pojok kanan atas gambar
- **Deskripsi** singkat (max 2 baris)
- **Karakteristik** — tag/badge kecil (contoh: "Tahan lama", "Anti rayap")
- **Kegunaan** — tag/badge abu-abu
- **Tombol "Lihat Detail"** — outline button hijau

### 4.5 Efek & Animasi
- **Hover scale** pada gambar: `group-hover:scale-105 transition duration-300`
- **Hover shadow** pada kartu: `hover:shadow-lg transition`
- Smooth transition pada semua tombol

---

## 5. Contoh Struktur Code

```tsx
// src/pages/catalog-page.tsx

import { useState } from "react";
import Navbar from "../components/navbar";

const trees = [
  // ... copy data dari tree-catalog.tsx
];

function CatalogPage() {
  const [search, setSearch] = useState("");

  const filteredTrees = trees.filter((tree) =>
    tree.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#2F5E2F] py-12 px-4 md:px-8 lg:px-[160px]">
        <h1 className="text-[28px] md:text-[32px] font-bold text-white mb-2">
          Katalog Produk
        </h1>
        <p className="text-[15px] text-white/80">
          Temukan jenis kayu yang tepat untuk kebutuhan Anda
        </p>
      </section>

      {/* Search & Filter */}
      <section className="px-4 md:px-8 lg:px-[160px] py-8">
        <input
          type="text"
          placeholder="Cari jenis kayu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-[400px] px-4 py-3 rounded-xl border border-gray-200 ..."
        />
      </section>

      {/* Grid Katalog */}
      <section className="px-4 md:px-8 lg:px-[160px] pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrees.map((tree) => (
            // ... card katalog
          ))}
        </div>
      </section>
    </div>
  );
}

export default CatalogPage;
```

---

## 6. Cara Push ke GitHub

### 6.1 Commit Perubahan
```bash
git add .
git commit -m "feat: implementasi halaman katalog produk"
```

### 6.2 Push Branch
```bash
git push origin feat/catalog-page
```

### 6.3 Buat Pull Request
1. Buka: https://github.com/satheoooo/KayuPrimaReact
2. Klik "Compare & pull request"
3. Title: `feat: implementasi halaman katalog produk`
4. Description: jelaskan apa yang sudah dikerjakan
5. Klik "Create pull request"

---

## 7. Checklist Sebelum Push

- [ ] Semua card tampil untuk 7 jenis kayu
- [ ] Search/filter berfungsi
- [ ] Responsive di mobile (375px)
- [ ] Responsive di tablet (768px)
- [ ] Responsive di desktop (1024px+)
- [ ] Tidak ada error di console browser
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
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---