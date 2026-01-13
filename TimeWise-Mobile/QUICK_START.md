# 🚀 Quick Start Guide

## Install & Run (5 Menit)

### 1. Install Dependencies
```bash
cd TimeWise-Mobile
npm install
```

### 2. Start App
```bash
npm start
```

### 3. Test di Device
- **Android**: Install Expo Go dari Play Store, scan QR code
- **iOS**: Install Expo Go dari App Store, scan QR code dengan Camera app
- **Web**: Tekan `w` di terminal

## 📱 Build APK untuk Install

### Cara 1: EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Build APK
eas build --platform android --profile preview
```

### Cara 2: Expo Build (Legacy)
```bash
expo build:android -t apk
```

## ✅ Testing Checklist

- [ ] Login berhasil
- [ ] Navigasi ke semua tab
- [ ] Tambah event
- [ ] Tambah task
- [ ] Toggle task completed
- [ ] Lihat notifikasi
- [ ] Akses settings

## 🐛 Troubleshooting

**Error: Module not found**
```bash
rm -rf node_modules
npm install
npm start -- --clear
```

**Expo Go tidak connect**
```bash
expo start --tunnel
```

## 📞 Support

Lihat README.md untuk dokumentasi lengkap.

