# 🏛️ Standar Arsitektur Ramah AI & Kebijakan Deployment AuraCore Labs

Dokumen ini adalah **kebijakan resmi tata kelola kode (Architecture & Deployment Governance)** untuk website dan aplikasi AuraCore Labs. Setiap pengembang manusia maupun agen AI **wajib** mematuhi standar ini sebelum melakukan penambahan kode atau *deployment* ke server produksi.

---

## 📌 1. Prinsip Utama: Arsitektur Ramah AI (*AI-Friendly Standard*)

Agar basis kode mudah dipahami, dirawat (*maintain*), dan dikembangkan oleh AI tanpa menimbulkan *side-effect* atau regresi:

### A. Strict Separation of Concerns (Pemisahan Tanggung Jawab)
* **Data Layer (`src/data/`)**: Seluruh data dinamis (produk, navigasi, metrik roadmap) disimpan secara deklaratif di `src/data/` dan bertindak sebagai *Single Source of Truth*. Tidak boleh melakukan *hardcoding* konten teks produk langsung di dalam markup HTML komponen.
* **Schema Contract (`src/schemas/`)**: Setiap penambahan produk harus mematuhi skema ketat di `src/schemas/productSchema.js`.
* **State Management (`src/core/store.js`)**: State aplikasi terisolasi dalam *reactive store* dengan pola *publish-subscribe*. Komponen tidak boleh memutasi state secara liar (*no global variable pollution*).
* **Decoupled Router (`src/core/router.js`)**: Routing berbasis hash URL terpisah secara independen dari fungsi render DOM.
* **Component Layer (`src/components/`)**: Komponen bersifat murni (*pure render functions*). Fungsi render hanya menerima data/state sebagai argumen dan mengembalikan string HTML semantik.
* **Service & Utilities (`src/utils/`)**: Modul fungsi utilitas umum (seperti `toast.js`) tidak boleh bercampur di `main.js`.

---

## 🔒 2. Kebijakan Keamanan & Kepatuhan Publikasi (*Security Policy*)

1. **Aturan Repositori Privat**:
   * Tautan repositori GitHub privat (termasuk repositori BLineNote) **DILARANG KERAS** dicantumkan di kode sumber publik, markup antarmuka, ataupun metadata aplikasi.
2. **Aturan Enkripsi & Anti-Information Leakage**:
   * Jangan pernah mencantumkan rumus penurunan kunci (*cryptographic key-derivation formulas*), string *salt* internal, atau skema basis data mentah di halaman publik.
   * Gunakan terminologi profesional dan teruji (*"Client-Side Data Protection via AES-GCM-256"*) alih-alih klaim absolut yang dapat memicu serangan pengujian celah (*over-promising*).
3. **Penyaringan XSS & Sanitasi Konten**:
   * Setiap masukan rich-text atau HTML dinamis wajib melalui sanitasi menggunakan engine DOMPurify sebelum dirender ke DOM.

---

## 🚦 3. Aturan Deployment Wajib (*Deployment Gatekeeper*)

Setiap proses *build* dan *deploy* **DIKUNCI SECARA OTOMATIS** oleh script verifikasi pre-deployment:

```bash
# Perintah Build Resmi (Otomatis Menjalankan Validasi)
npm run build

# Perintah Deploy Resmi (Otomatis Menjalankan Validasi + Build + Deploy)
npm run deploy
```

### Script Gerbang Validasi (`scripts/validate-standards.js`):
Sebelum Vite melakukan *bundling* atau Vercel mempublikasikan rilis:
1. **Verifikasi Skema Produk**: Memeriksa bahwa setiap produk di `src/data/products.js` memiliki seluruh field wajib (`id`, `name`, `badge`, `category`, `highlights`, `actions`, dll.). Jika ada field yang terlewat, proses deploy langsung **dibatalkan (Exit Code 1)**.
2. **Audit Keamanan Berkas Sumber**: Memindai seluruh berkas JavaScript dan HTML untuk mendeteksi apakah ada kebocoran kunci rahasia (*secret leak*), salt internal, atau tautan repositori yang dilarang. Jika terdeteksi, deploy **diblokir seketika**.

---

## 🛠️ 4. Panduan Menambahkan Produk Baru (Checklist AI & Pengembang)

Saat diminta menambahkan produk atau prototipe baru:
1. Buka [`src/data/products.js`](src/data/products.js).
2. Tambahkan objek produk baru yang mematuhi kontrak di [`src/schemas/productSchema.js`](src/schemas/productSchema.js).
3. Jalankan validasi lokal:
   ```bash
   npm run validate
   ```
4. Pastikan hasil pengujian menyatakan `✅ All products adhere strictly to schema standards` dan `🎉 [STANDARDS PASSED]`.
5. Uji tampilan di browser lokal (`npm run dev`).
6. Lakukan build produksi (`npm run build`).
