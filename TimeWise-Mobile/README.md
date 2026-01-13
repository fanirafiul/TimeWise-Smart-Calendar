# TimeWise Mobile App

Aplikasi mobile TimeWise - Smart Calendar & Task Manager menggunakan React Native dengan Expo.

## 📱 Fitur

- ✅ Login & Register dengan OAuth
- ✅ Dashboard dengan kalender dan task
- ✅ Kalender bulanan dan harian
- ✅ Manajemen Event (CRUD)
- ✅ Manajemen Task (CRUD)
- ✅ Notifikasi
- ✅ Settings & Integrations
- ✅ Bottom Tab Navigation

## 🚀 Quick Start

### Prerequisites

1. **Node.js** (v16 atau lebih baru)
   - Download: https://nodejs.org/

2. **Expo CLI** (install global)
   ```bash
   npm install -g expo-cli
   ```

3. **Expo Go App** (untuk testing di device)
   - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

### Installation

1. **Install Dependencies**
   ```bash
   cd TimeWise-Mobile
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   atau
   ```bash
   expo start
   ```

3. **Scan QR Code**
   - Buka Expo Go app di smartphone
   - Scan QR code yang muncul di terminal/browser
   - Aplikasi akan langsung terbuka di device

## 📲 Testing di Device

### Android

1. Install **Expo Go** dari Play Store
2. Jalankan `npm start`
3. Scan QR code dengan Expo Go app
4. Atau ketik `a` di terminal untuk buka di Android emulator

### iOS

1. Install **Expo Go** dari App Store
2. Jalankan `npm start`
3. Scan QR code dengan Camera app (iOS 11+)
4. Atau ketik `i` di terminal untuk buka di iOS simulator

### Web Browser

```bash
npm run web
```

## 🔨 Build untuk Production

### Android APK

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Login ke Expo**
   ```bash
   eas login
   ```

3. **Configure Build**
   ```bash
   eas build:configure
   ```

4. **Build APK**
   ```bash
   eas build --platform android --profile preview
   ```

5. **Download APK**
   - Link download akan dikirim via email
   - Atau cek di: https://expo.dev/accounts/[username]/projects/timewise-mobile/builds

### Android App Bundle (AAB) untuk Play Store

```bash
eas build --platform android --profile production
```

### iOS IPA

```bash
eas build --platform ios --profile production
```

## 📦 Install APK di Android

1. **Download APK** dari build yang sudah selesai
2. **Enable Unknown Sources** di Android Settings
   - Settings → Security → Unknown Sources (enable)
3. **Install APK**
   - Buka file APK yang sudah didownload
   - Klik "Install"
   - Tunggu hingga selesai
4. **Buka Aplikasi**
   - Icon TimeWise akan muncul di launcher
   - Klik untuk membuka aplikasi

## 🏗️ Struktur Project

```
TimeWise-Mobile/
├── App.js                 # Entry point aplikasi
├── app.json               # Expo configuration
├── package.json           # Dependencies
├── babel.config.js        # Babel configuration
├── src/
│   └── screens/
│       ├── LoginScreen.js
│       ├── RegisterScreen.js
│       ├── DashboardScreen.js
│       ├── CalendarScreen.js
│       ├── AddEventScreen.js
│       ├── EventDetailScreen.js
│       ├── TasksScreen.js
│       ├── AddTaskScreen.js
│       ├── NotificationsScreen.js
│       └── SettingsScreen.js
└── assets/                # Images, icons, fonts
```

## 🛠️ Development Commands

```bash
# Start development server
npm start

# Start dengan clear cache
npm start -- --clear

# Run di Android
npm run android

# Run di iOS
npm run ios

# Run di Web
npm run web

# Build Android APK
npm run build:android

# Build iOS IPA
npm run build:ios
```

## 📱 Testing Checklist

- [ ] Login dengan email/password
- [ ] Register akun baru
- [ ] Navigasi ke semua screen
- [ ] Tambah event baru
- [ ] Lihat detail event
- [ ] Tambah task baru
- [ ] Toggle task completed
- [ ] Lihat notifikasi
- [ ] Akses settings
- [ ] Bottom tab navigation berfungsi

## 🔧 Troubleshooting

### Error: "Unable to resolve module"

```bash
# Clear cache dan reinstall
rm -rf node_modules
npm install
npm start -- --clear
```

### Error: "Expo Go not connecting"

1. Pastikan device dan komputer dalam WiFi yang sama
2. Coba gunakan tunnel mode:
   ```bash
   expo start --tunnel
   ```

### Error: "Build failed"

1. Pastikan semua dependencies terinstall
2. Update Expo SDK jika perlu
3. Cek error log di terminal

## 📝 Notes

- Aplikasi menggunakan Expo SDK 49
- React Native 0.72.6
- Navigation menggunakan React Navigation v6
- Icons menggunakan Expo Vector Icons

## 🔐 Environment Variables (Optional)

Buat file `.env` untuk konfigurasi:

```
EXPO_PUBLIC_API_URL=https://api.timewise.com
EXPO_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

## 📄 License

This project is part of academic coursework.

---

**Author**: Fani Rafiul Maarif  
**NIM**: 231240001461

