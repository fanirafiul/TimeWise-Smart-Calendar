1. Pendahuluan

1.1 Tujuan

Dokumen SRS ini bertujuan untuk memberikan spesifikasi lengkap aplikasi TimeWise, mencakup:
Kebutuhan fungsional & non-fungsional
Arsitektur sistem & integrasi API
Persyaratan perangkat keras & perangkat lunak

1.2 Ruang Lingkup

TimeWise adalah aplikasi kalender pintar yang dilengkapi:

Manajemen Event & Tugas → CRUD event, task, deadline, pengingat.

Sinkronisasi Cloud → Integrasi Google Calendar, iCloud, Microsoft Graph.

Kolaborasi Real-Time → Berbagi event & komentar langsung.

Notifikasi & Pengingat → Push notification via Firebase.

Mode Offline → Data tetap dapat diakses tanpa internet.

Integrasi AI (versi lanjut) → Penjadwalan otomatis & analitik produktivitas.

1.3 Definisi & Singkatan
| Istilah | Definisi |
| ------- | ----------------------------------------------------- |
| CRUD | Create, Read, Update, Delete |
| API | Application Programming Interface |
| OAuth2 | Protokol autentikasi untuk login pihak ketiga |
| MVP | Minimum Viable Product – Versi awal dengan fitur inti |
| DAU | Daily Active User |

1.4 Referensi

Google Calendar API Docs
Microsoft Graph API Docs
Firebase Cloud Messaging Docs
ISO/IEC 25010:2011 Software Quality Standards

2. Deskripsi Umum

2.1 Perspektif Sistem

Aplikasi terdiri dari:
Frontend: React Native (Mobile) & React.js (Web).
Backend: Node.js + Express.
Database: PostgreSQL / MongoDB.
Integrasi: Google Calendar, Microsoft Graph, iCloud API.

2.2 Fungsi Utama

Autentikasi → Login via Google, Microsoft, atau Email.

Manajemen Event & Tugas → CRUD, pengingat, prioritas.

Kolaborasi → Share event, komentar real-time.

Notifikasi → Push via Firebase Cloud Messaging.

Integrasi Kalender Eksternal → Google, iCloud, Microsoft Graph.

2.3 Karakteristik Pengguna

Pemula: Mahasiswa, pengguna pribadi.
Menengah: Profesional, pekerja kantoran.
Lanjut: Tim proyek & kolaborasi lintas platform.

2.4 Batasan

API pihak ketiga mungkin memiliki limitasi kuota.
Koneksi internet diperlukan untuk sinkronisasi real-time.
Data harus terenkripsi (AES-256) untuk keamanan.

3. Kebutuhan Fungsional

| Kode  | Fitur                  | Deskripsi                                                 |
| ----- | ---------------------- | --------------------------------------------------------- |
| FR-01 | Manajemen Event        | Tambah, ubah, hapus event, termasuk pengingat dan lokasi. |
| FR-02 | Manajemen Tugas        | CRUD task dengan prioritas & deadline.                    |
| FR-03 | Notifikasi & Reminder  | Push notification event & task mendatang.                 |
| FR-04 | Kolaborasi Real-Time   | Share kalender & komentar di event.                       |
| FR-05 | Sinkronisasi Kalender  | Integrasi Google, Microsoft, iCloud.                      |
| FR-06 | Mode Offline           | Akses data tanpa internet, auto-sync saat online.         |
| FR-07 | Personalisasi Tampilan | Tema gelap/terang, warna event custom.                    |

4. Kebutuhan Non-Fungsional

| Kode   | Kategori     | Deskripsi                                         |
| ------ | ------------ | ------------------------------------------------- |
| NFR-01 | Performa     | Respon < 2 detik untuk operasi CRUD.              |
| NFR-02 | Keamanan     | Data terenkripsi, autentikasi JWT + OAuth2.       |
| NFR-03 | Skalabilitas | Minimal 10.000 pengguna aktif bersamaan.          |
| NFR-04 | Portabilitas | Dukung Android, iOS, Web.                         |
| NFR-05 | Keandalan    | Uptime server minimal 99,9%.                      |
| NFR-06 | UX/UI        | Desain minimalis, mudah dipahami pengguna pemula. |

5. Antarmuka Sistem

Antarmuka Pengguna → React Native (mobile), React.js (web).

Antarmuka API → RESTful API, JSON format.

Antarmuka Integrasi → Google Calendar API, Microsoft Graph API, iCloud API.

6. Persyaratan Perangkat

Client: Android ≥ 10, iOS ≥ 13, browser modern.

Server: Node.js v18, Database PostgreSQL 14/MongoDB 5, RAM ≥ 4 GB.

7. Diagram Use Case

Use case utama:

Login/Registrasi

Manajemen Event & Tugas

Kolaborasi &

Notifikasi &

Sinkronisasi Kalender Eksternal
