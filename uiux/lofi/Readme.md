# TimeWise - Lofi UI/UX Wireframes

## Deskripsi

Folder ini berisi wireframe Lofi UI/UX untuk aplikasi TimeWise - Smart Calendar & Task Manager. Semua halaman dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa framework.

## Struktur File

```
lofi/
├── index.html              # Halaman navigasi utama
├── styles.css              # File CSS shared untuk semua halaman
├── script.js               # File JavaScript shared untuk semua halaman
├── login.html              # Halaman login
├── register.html           # Halaman registrasi
├── dashboard-monthly.html  # Dashboard kalender bulanan
├── dashboard-daily.html    # Dashboard kalender harian
├── add-event.html          # Form tambah event
├── event-detail.html       # Detail event dengan kolaborasi
├── tasks.html              # Manajemen tugas
├── add-task.html           # Form tambah task
├── notifications.html      # Pusat notifikasi
├── settings.html           # Pengaturan aplikasi
├── collaboration.html      # Halaman kolaborasi/berbagi kalender
├── mobile.html             # Tampilan mobile dengan bottom navigation
└── README.md               # Dokumentasi ini
```

## Cara Menggunakan

1. Buka file `index.html` di browser untuk melihat navigasi ke semua halaman
2. Atau buka langsung file HTML yang diinginkan di browser
3. Semua halaman sudah terhubung dengan CSS dan JavaScript yang diperlukan

## Fitur yang Diimplementasikan

### 1. Authentication
- ✅ Login dengan email/password
- ✅ Login dengan OAuth (Google, Microsoft, Apple)
- ✅ Registrasi pengguna baru

### 2. Calendar Views
- ✅ Tampilan kalender bulanan dengan navigasi
- ✅ Tampilan kalender harian dengan timeline
- ✅ Event ditampilkan di kalender
- ✅ Highlight hari ini

### 3. Event Management
- ✅ Form tambah event lengkap
- ✅ Detail event dengan informasi lengkap
- ✅ Reminder dan repeat options
- ✅ Location dan description

### 4. Task Management
- ✅ Daftar tugas dengan filter (All, Pending, In Progress, Completed)
- ✅ Form tambah task
- ✅ Priority dan status task
- ✅ Progress tracking untuk goals

### 5. Collaboration
- ✅ Berbagi kalender dengan pengguna lain
- ✅ Komentar real-time di event
- ✅ Daftar kolaborator dengan role
- ✅ Share link untuk kalender

### 6. Notifications
- ✅ Pusat notifikasi dengan filter
- ✅ Notifikasi event reminder
- ✅ Notifikasi task reminder
- ✅ Notifikasi kolaborasi

### 7. Settings
- ✅ Pengaturan akun
- ✅ Integrasi kalender eksternal (Google, Microsoft, iCloud)
- ✅ Pengaturan tampilan (theme, default view)
- ✅ Pengaturan notifikasi
- ✅ Data & Privacy

### 8. Mobile View
- ✅ Tampilan mobile dengan bottom navigation
- ✅ Responsive design
- ✅ Optimized untuk layar kecil

## Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan CSS Variables dan Flexbox/Grid
- **JavaScript (Vanilla)** - Interaktivitas tanpa framework
- **Font Awesome** - Icons (via CDN)

## Color Scheme

- **Primary**: #3B82F6 (Blue)
- **Secondary**: #8B5CF6 (Purple)
- **Success**: #10B981 (Green)
- **Warning**: #F59E0B (Orange)
- **Error**: #EF4444 (Red)
- **Background**: #F9FAFB (Light Gray)
- **Text**: #1F2937 (Dark Gray)

## Catatan Pengembangan

- Semua form memiliki validasi dasar
- Interaksi JavaScript sudah diimplementasikan untuk demo
- Desain mengikuti prinsip Material Design dan modern UI/UX
- Responsive untuk desktop dan mobile
- Semua halaman dapat diakses melalui navigasi di `index.html`

## Langkah Selanjutnya

Setelah wireframe ini disetujui:
1. Convert ke High-Fidelity mockup dengan Figma/Sketch
2. Buat design system dan component library
3. Implementasi frontend dengan framework (React/React Native)
4. Integrasi dengan backend API
5. User testing dengan prototype interaktif

## Label Commit

```
desain uiux
```

---

**Dibuat untuk**: TimeWise - Smart Calendar & Task Manager  
**Versi**: 1.0 (Lofi Wireframes)  
**Tanggal**: 2024

