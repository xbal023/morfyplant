# Morfologi Tumbuhan — Web App & Cheatsheet (Next.js)

Aplikasi web interaktif cheatsheet dan generator deskripsi morfologi tumbuhan (akar, batang, daun, bunga, dan buah) berbiji berdasarkan konvensi botani Indonesia (*Morfologi Tumbuhan* oleh Gembong Tjitrosoepomo).

Aplikasi ini telah dikembangkan dan dioptimalkan dari HTML statis tunggal menjadi **Next.js (App Router + TypeScript)** yang siap di-deploy langsung ke **Vercel**.

---

## 🚀 Fitur Utama

1. **Cheatsheet Interaktif Materi Botani**:
   - **Akar (Radix)**: Diagram anatomi ujung akar, sistem perakaran (tunggang vs serabut), tabel modifikasi akar.
   - **Batang (Caulis)**: Diagram morfologi luar batang, penampang lintang dikotil vs monokotil, tabel tipe batang & modifikasinya.
   - **Daun (Folium)**: Diagram bagian daun lengkap, 4 tipe pertulangan daun, 12 bangun helaian daun, 5 tipe tepi daun, daun tunggal vs majemuk, dan tata letak filotaksis.
   - **Bunga & Buah**: Tipe-tipe perbungaan dan klasifikasi buah.

2. **Visual Trait Picker**:
   - Selector interaktif dengan preview ilustrasi SVG untuk setiap ciri organ tanaman.
   - User-friendly baik di perangkat mobile maupun desktop.

3. **Generator Deskripsi Otomatis**:
   - Deteksi otomatis dugaan kelas **Dikotil vs Monokotil** berdasarkan perpaduan ciri akar dan tulang daun.
   - Dukungan 4 mode format deskripsi:
     - *Analitik + Diagnostik*
     - *Analitik*
     - *Diagnostik*
     - *Naratif*
   - Salin hasil deskripsi dalam 1 klik (*Copy to Clipboard*) dan fitur cetak ramah printer (*Print Friendly*).

4. **Tema & Desain Modern**:
   - Tema *Dark Mode* & *Light Mode* otomatis atau melalui tombol toggle.
   - Tipografi elegan menggunakan font *Bricolage Grotesque* dan *Literata*.
   - Standar aksesibilitas dan *safe-area* untuk smartphone modern.

---

## 📁 Struktur Proyek

```text
plant-morfology/
├── src/
│   ├── app/
│   │   ├── globals.css          # Styling lengkap, variabel CSS tema, dark mode
│   │   ├── layout.tsx           # Root layout, metadata SEO & Google Fonts
│   │   └── page.tsx             # Halaman utama (tab router & theme toggle)
│   ├── components/
│   │   ├── MorphologyMateri.tsx # Komponen materi & diagram SVG
│   │   ├── MorphologyDescriber.tsx # Form generator deskripsi tumbuhan
│   │   └── TraitPicker.tsx      # Komponen pemilih visual berbasis SVG
│   └── data/
│       └── morphologyData.ts    # Model data ciri botani & logika generator
├── public/                      # Aset statis
├── package.json                 # Konfigurasi dependensi Next.js & React
├── tsconfig.json                # Konfigurasi TypeScript
├── next.config.mjs              # Konfigurasi Next.js
├── vercel.json                  # Konfigurasi deployment Vercel
└── README.md
```

---

## 🛠️ Cara Menjalankan di Komputer Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 18.17 atau lebih baru)
- npm, pnpm, atau yarn

### Langkah-langkah
1. Pasang dependensi:
   ```bash
   npm install
   ```

2. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```

3. Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 🌐 Cara Deploy ke Vercel

### Metode 1: Hubungkan Repositori GitHub (Paling Direkomendasikan)
1. Inisialisasi repositori Git dan buat commit:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi aplikasi morfologi tumbuhan dengan next.js"
   ```
2. Buat repositori baru di akun GitHub Anda (misal `plant-morphology`), lalu push:
   ```bash
   git remote add origin https://github.com/USERNAME/plant-morphology.git
   git branch -M main
   git push -u origin main
   ```
3. Buka dashboard [Vercel](https://vercel.com) dan login.
4. Klik tombol **"Add New..."** lalu pilih **"Project"**.
5. Pilih repositori GitHub Anda dan klik **"Import"**.
6. Vercel akan secara otomatis mendeteksi framework **Next.js**:
   - *Framework Preset*: `Next.js`
   - *Build Command*: `next build`
   - *Output Directory*: `.next`
7. Klik **"Deploy"**. Dalam 1–2 menit, web Anda sudah aktif dengan URL gratis `https://plant-morphology.vercel.app`.

### Metode 2: Menggunakan Vercel CLI
1. Pasang Vercel CLI secara global:
   ```bash
   npm i -g vercel
   ```
2. Jalankan perintah deploy di folder proyek:
   ```bash
   vercel
   ```
3. Ikuti panduan prompt di terminal untuk menghubungkan akun Vercel Anda.
4. Untuk deploy ke production:
   ```bash
   vercel --prod
   ```
