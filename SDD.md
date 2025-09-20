1. Tujuan SDD

Memberikan desain teknis yang lengkap untuk tim pengembang.
Menjadi acuan implementasi arsitektur, modul, API, dan database.
Menjamin sistem sesuai kebutuhan fungsional & non-fungsional di SRS.

2. Arsitektur Sistem

TimeWise menggunakan arsitektur 3-tier:
Presentation Layer (Frontend):
React Native (Android/iOS) untuk mobile.
React.js untuk web dashboard.
Fitur utama: UI event/task, kalender interaktif, form input.

Application Layer (Backend API):
Node.js + Express untuk RESTful API.
Autentikasi JWT + OAuth2 (Google, Microsoft, iCloud).
Pengelolaan event, tugas, kolaborasi, komentar, sinkronisasi API.

Data Layer (Database):
PostgreSQL untuk data relasional (event, tugas, user).
Redis (opsional) untuk caching notifikasi & sinkronisasi real-time.

3. Komponen Utama Sistem

3.1 Modul Autentikasi
Login/Register dengan email atau OAuth2 (Google/Microsoft).
Token JWT untuk sesi aman.
Refresh token untuk sesi panjang.

3.2 Modul Kalender & Event
CRUD event dengan waktu mulai/selesai, lokasi, pengingat.
Kalender bulanan/harian dengan integrasi Google/iCloud.

3.3 Modul Tugas (Task Manager)
CRUD to-do list & tugas.
Progress tracking & prioritas tugas.

3.4 Modul Kolaborasi
Share kalender/event ke user lain.
Komentar real-time di setiap event.

3.5 Modul Notifikasi
Push notification via Firebase Cloud Messaging.
Reminder event/tugas dengan waktu yang bisa diatur.

3.6 Modul Integrasi API
Google Calendar API, Microsoft Graph API, iCloud API.
Auto-sync event & tugas lintas platform.

4. Desain Database

Mengacu pada ERD:

Tabel User: user_id, nama, email, password_hash, role, dll.

Tabel Calendar: calendar_id, user_id, nama_kalender, tema, dll.

Tabel Event: event_id, calendar_id, judul, waktu_mulai, lokasi, dll.

Tabel Task: task_id, calendar_id, judul, deadline, status, dll.

Tabel Comment: comment_id, event_id, user_id, isi_komentar, dll.

Tabel Collaboration: collab_id, calendar_id, user_id, role_collab.

Tabel Notification: notif_id, event_id, task_id, pesan_notif, status_baca.

Tabel Integration: integration_id, user_id, provider, token, dll.

5. Desain Antarmuka (UI/UX)

Halaman Login/Register: Simple, integrasi Google/Microsoft.
Dashboard Kalender: Tampilan bulanan/harian dengan warna event.
Form Event/Tugas: Input cepat dengan pengingat & prioritas.
Kolaborasi: Tampilan komentar & daftar kolaborator.
Notifikasi: Push notif dengan swipe dismiss.

6. Alur Data (Data Flow)

Contoh alur saat user membuat event:
User input data event di frontend.
Data dikirim via REST API ke backend.
Backend menyimpan ke database.
Jika sinkronisasi aktif → update ke Google/Microsoft API.
Event muncul di UI + notifikasi terjadwal via Firebase.

7. API Desain (Contoh)

| Endpoint             | Method | Deskripsi               |
| -------------------- | ------ | ----------------------- |
| `/api/auth/login`    | POST   | Login pengguna          |
| `/api/events`        | GET    | Ambil semua event user  |
| `/api/events`        | POST   | Tambah event baru       |
| `/api/tasks/:id`     | PUT    | Update tugas            |
| `/api/notifications` | GET    | Ambil daftar notifikasi |

Format data: JSON

8. Desain Keamanan

Autentikasi: JWT + OAuth2.
Enkripsi Data: AES-256 untuk data sensitif.
Validasi Input: Backend & frontend.
Rate Limiting: Untuk API publik agar mencegah spam.

9. Persyaratan Performa

Response API < 2 detik.
Skalabilitas hingga 10.000 user aktif bersamaan.
Notifikasi real-time ≤ 1 detik keterlambatan.
