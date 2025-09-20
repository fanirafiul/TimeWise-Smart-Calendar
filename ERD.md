# ERD untuk TimeWise - Smart Calendar & Task Manager

## Entitas dan Atribut

### 1. USERS

- user_id (PK)
- name
- email
- password
- role

### 2. CALENDAR

- calendar_id (PK)
- user_id (FK → USERS.user_id)
- title
- created_at
- updated_at

### 3. EVENTS

- event_id (PK)
- calendar_id (FK → CALENDAR.calendar_id)
- title
- description
- start_time
- end_time
- reminder_time
- is_recurring
- location

### 4. COMMENTS

- comment_id (PK)
- event_id (FK → EVENTS.event_id)
- user_id (FK → USERS.user_id)
- text
- created_at

## Relasi Antar Tabel

1. USERS (1) → CALENDAR (N)
2. CALENDAR (1) → EVENTS (N)
3. EVENTS (1) → COMMENTS (N)

---

1. Tujuan ERD

Mendeskripsikan entitas utama dalam aplikasi TimeWise.
Menunjukkan bagaimana entitas saling berhubungan.
Menjadi dasar perancangan database relasional atau NoSQL.

2. Entitas Utama

Berikut entitas yang dibutuhkan:

User
Menyimpan informasi pengguna aplikasi.
Atribut: user_id, nama, email, password_hash, foto_profile, role, created_at, updated_at

Calendar
Kalender yang dimiliki atau dibagikan oleh user.
Atribut: calendar_id, user_id, nama_kalender, deskripsi, warna_tema, created_at, updated_at

Event
Jadwal/event yang disimpan dalam kalender.
Atribut: event_id, calendar_id, judul_event, deskripsi, lokasi, waktu_mulai, waktu_selesai, pengingat, status_event, created_at, updated_at

Task
To-do list atau tugas yang terkait dengan kalender atau event.
Atribut: task_id, calendar_id, judul_task, deskripsi, deadline, status_task, priority, created_at, updated_at

Collaboration
Menyimpan informasi kolaborator pada suatu kalender/event.
Atribut: collab_id, calendar_id, user_id, role_collab, akses_mulai, akses_selesai

Notification
Menyimpan data notifikasi dan pengingat event/task.
Atribut: notif_id, user_id, event_id, task_id, pesan_notif, waktu_kirim, status_baca

Comment
Komentar pada event untuk diskusi real-time.
Atribut: comment_id, event_id, user_id, isi_komentar, waktu_komentar

Integration
Data integrasi dengan layanan lain (Google, Microsoft, iCloud).
Atribut: integration_id, user_id, provider, token, sync_status, last_sync

3. Hubungan Antar Entitas

User → Calendar:
Satu user dapat memiliki banyak kalender (1:N).

Calendar → Event:
Satu kalender dapat memiliki banyak event (1:N).

Calendar → Task:
Satu kalender dapat memiliki banyak tugas (1:N).

Calendar → Collaboration → User:
Banyak user bisa berkolaborasi pada satu kalender (M:N melalui Collaboration).

Event → Comment → User:
Banyak user bisa berkomentar pada banyak event (M:N melalui Comment).

Event/Task → Notification:
Satu event/task dapat memiliki banyak notifikasi (1:N).

User → Integration:
Satu user bisa memiliki beberapa integrasi layanan (1:N).

4. Skema ERD (Secara Teks)

   User (user_id PK)
   1 --- N Calendar (calendar_id PK, user_id FK)

   1 --- N Event (event_id PK, calendar_id FK)

   1 --- N Task (task_id PK, calendar_id FK)

   1 --- N Collaboration (collab_id PK, calendar_id FK, user_id FK)

   1 --- N Comment (comment_id PK, event_id FK, user_id FK)

   1 --- N Notification (notif_id PK, event_id FK, task_id FK, user_id FK)

   1 --- N Integration (integration_id PK, user_id FK)

5. Visualisasi ERD

Secara visual, nanti kita bisa menggambar diagram seperti ini:

Kotak → Entitas.

Garis → Relasi antar entitas.

Notasi → 1:N, M:N untuk menggambarkan kardinalitas.

Contoh relasi:

User —< Calendar —< Event

Calendar —< Task

Calendar —< Collaboration >— User

Event —< Comment >— User

6. Implementasi Database

RDBMS: PostgreSQL → cocok untuk data relasional & transaksi kompleks.
NoSQL: MongoDB → cocok jika butuh fleksibilitas & skalabilitas tinggi.
Tabel dapat dinormalisasi hingga 3NF untuk mencegah redundansi data.
