# 🚀 ReactJS + TypeScript Learning Journey

Repository ini adalah jurnal dan rekam jejak digital proses banting stir dari ekosistem **Android** menjadi **Frontend Web Developer**. Di sini saya melacak progress harian selama 4 minggu intensif menggunakan ekosistem modern React (Vite, TypeScript, Tailwind).

## 🛠️ Target Proyek

Kurikulum ini dibagi menjadi dua fase proyek untuk memastikan transisi _mental model_ yang mulus:

1. **Fase Pemanasan (Minggu 2): Web-based Mini Game**
   - Game ketangkasan sederhana (klik/tap) bergaya lokal untuk melatih manipulasi DOM, manajemen State lokal, dan siklus render (Lifecycle).
2. **Fase Capstone (Minggu 4): FinTrack Pro**
   - Aplikasi _Personal Finance & Crypto Tracker_ skala produksi.
   - **Tech Stack:** React Query (Data Fetching), Zustand (Global State), React Router (Navigasi), React Hook Form + Zod (Validasi).

---

## 📅 Roadmap & Progress Tracker

### 📦 MINGGU 1: Setup Environment, TypeScript & Dasar UI

_Target: Menyiapkan alat kerja, memahami DOM Web, dan transisi ke TypeScript._

- [ ] **Hari 1: Environment & Scaffolding**
  - [ ] Instalasi NVM & Node.js.
  - [ ] Init project baru: `npm create vite@latest fintrack-pro -- --template react-ts`.
- [ ] **Hari 2: HTML Semantic & CSS Modern**
  - [ ] Mempelajari tag HTML5 (`<main>`, `<section>`, dll).
  - [ ] Menguasai **CSS Flexbox** dan **CSS Grid** (padanan Compose Layout).
- [ ] **Hari 3: TypeScript Dasar**
  - [ ] Deklarasi tipe data dan pembuatan `interface` / `type`.
- [ ] **Hari 4: TypeScript Lanjutan**
  - [ ] Penggunaan _Generics_ dan _Utility Types_ (`Omit`, `Pick`).
- [ ] **Hari 5: Anatomi Komponen & TSX**
  - [ ] Membuat functional component pertama.
  - [ ] Memahami cara kerja JSX/TSX mengolah UI.
- [ ] **Hari 6: Props & Type-Safety**
  - [ ] Mengirim data dari _Parent_ ke _Child_.
  - [ ] Mengunci tipe data Props menggunakan TypeScript Interface.
- [ ] **Hari 7: Evaluasi & Refaktor**
  - [ ] Merapikan folder dan memisahkan komponen statis.

---

### 🎮 MINGGU 2: Core React & Eksekusi Mini Game

_Target: Membuat UI interaktif dengan State & Tailwind, diakhiri dengan rilis Mini Game._

- [ ] **Hari 8: State Management Lokal**
  - [ ] Memahami `useState` (padanan `mutableStateOf`).
  - [ ] Praktik: Mengubah angka skor saat tombol diklik.
- [ ] **Hari 9: Integrasi Tailwind CSS**
  - [ ] Konfigurasi Tailwind di proyek Vite.
  - [ ] _Styling_ elemen secara _utility-first_ tanpa file CSS eksternal.
- [ ] **Hari 10: Side Effects (`useEffect`)**
  - [ ] Memahami siklus komponen dan _Dependency Array_.
  - [ ] Praktik: Membuat _countdown timer_ untuk game.
- [ ] **Hari 11: Lifecycle Cleanup & Event Handling**
  - [ ] Membersihkan interval di dalam `useEffect`.
  - [ ] Menangani berbagai _event_ interaksi pengguna (onClick, onPointerDown).
- [ ] **Hari 12: Custom Hooks**
  - [ ] Mengekstrak logika _timer_ atau penghitung skor ke dalam _hook_ terpisah (misal: `useGameTimer`).
- [ ] **Hari 13: Pembuatan Mini Game (Part 1)**
  - [ ] Menyusun aset UI, merangkai komponen, dan mengaitkan logika _state_ permainan.
- [ ] **Hari 14: Pembuatan Mini Game (Part 2) & Deployment**
  - [ ] _Finishing_, tes _build_ lokal, dan _deploy_ game pertama ke Vercel/Netlify.

---

### 🌐 MINGGU 3: Navigasi, Integrasi API & Arsitektur

_Target: Memasuki ranah produksi. Mengambil data dari server dan memisahkan layer aplikasi._

- [ ] **Hari 15: React Router DOM**
  - [ ] Membuat navigasi _multi-page_ (Dashboard, Transaksi, Crypto Watchlist).
- [ ] **Hari 16: Dynamic Routing**
  - [ ] Membaca parameter URL (`useParams`) untuk detail item.
- [ ] **Hari 17: Data Fetching (Axios)**
  - [ ] Setup Axios instance dan memanggil API publik (CoinGecko/JSONPlaceholder).
- [ ] **Hari 18: React Query (TanStack Query)**
  - [ ] Mengotomatisasi _caching_, _loading_, dan _error state_ saat mengambil data API.
- [ ] **Hari 19: Global State (Zustand)**
  - [ ] Mengelola status _User Login_ atau _Theme_ secara global sebagai pengganti ViewModel.
- [ ] **Hari 20: Clean Architecture Web**
  - [ ] Menyusun ulang struktur folder: `components/`, `pages/`, `services/`, `store/`.
- [ ] **Hari 21: Setup Proyek FinTrack Pro**
  - [ ] Inisialisasi _repository_ baru atau _branch_ baru khusus untuk FinTrack Pro dan merangkai _scaffolding_ awal.

---

### 🚀 MINGGU 4: FinTrack Pro & Finalisasi

_Target: Menyelesaikan aplikasi skala produksi dengan penanganan error yang baik._

- [ ] **Hari 22: Integrasi UI FinTrack Pro**
  - [ ] Menyusun layout Dashboard dan tabel riwayat transaksi menggunakan Tailwind.
- [ ] **Hari 23: Validasi Form Lanjutan**
  - [ ] Menggunakan `react-hook-form` + `zod` untuk form tambah transaksi.
- [ ] **Hari 24: Integrasi Zustand & React Query**
  - [ ] Menghubungkan form dengan _global state_ keuangan dan menempelkan _widget_ harga Crypto real-time.
- [ ] **Hari 25: Optimasi Kinerja UI**
  - [ ] Mempelajari pencegahan render ulang yang tidak perlu dengan `useMemo` / `useCallback`.
- [ ] **Hari 26: Environment Variables & Error Boundary**
  - [ ] Menyembunyikan API key di `.env` dan menangani layar _crash_ agar tetap elegan.
- [ ] **Hari 27: Build & Testing**
  - [ ] Uji coba fungsional menyeluruh dan menjalankan kompilasi TypeScript (`npm run build`).
- [ ] **Hari 28: Capstone Deployment!**
  - [ ] _Deploy_ FinTrack Pro ke Vercel/Netlify, lengkapi README proyek, dan bagikan tautannya.

---

## 📝 Catatan Belajar Harian

_(Area untuk mencatat perbedaan paradigma Android Native vs React)_

- _Hari 1:_ ...
