# 🤖 AuraCore Labs — AI & Developer Architecture Guide

Panduan ini disusun khusus untuk **asisten AI coding** (Antigravity, Claude, GPT, dll.) dan pengembang manusia untuk memudahkan pemeliharaan, penambahan fitur, dan ekstensi proyek website AuraCore Labs.

---

## 1. Filosofi & Prinsip Arsitektur

Website ini mengadopsi pola **Data-Driven & Modular Architecture**:
* **Pemisahan Data & Tampilan**: Konten (produk, roadmap, link sosial) **TIDAK** ditulis secara hardcoded di dalam HTML. Semua konten tersimpan rapi di direktori `src/data/`.
* **Zero UI Break Risk**: Ketika pengguna meminta AI untuk *"tambahkan produk baru"*, AI cukup menyisipkan 1 objek JavaScript di `src/data/products.js`. Tampilan UI akan otomatis me-render tab baru, kartu detail, dan tautan tanpa menyentuh markup kompleks.
* **Tema Visual**: *Clean Light Tech* (terinspirasi dari platform enterprise cloud seperti GDMS Cloud) menggunakan Tailwind CSS v3.x dengan semantic design tokens.

---

## 2. Struktur Direktori Proyek

```
d:/AURACORE/website/
├── STANDARDS.md            # 🏛️ Kebijakan resmi tata kelola & deployment
├── AI_GUIDE.md             # 📌 Panduan arsitektur ramah AI ini
├── index.html              # Shell semantik HTML5 bersih (mount root #app)
├── tailwind.config.js      # Definisi token warna & shadow Clean Light Tech
├── vite.config.js          # Konfigurasi build Vite & Terser minification
├── scripts/
│   └── validate-standards.js # 🚦 Gerbang validasi otomatis sebelum deploy
├── src/
│   ├── core/               # ⚙️ RUNTIME ENGINE (Decoupled & Event-Driven)
│   │   ├── router.js       # Hash-based SPA Router (Decoupled)
│   │   └── store.js        # Reactive central state store (Pub/Sub)
│   ├── schemas/            # 📜 DATA CONTRACTS & VALIDATORS
│   │   └── productSchema.js# Schema rules validator untuk CI/CD & AI
│   ├── data/               # 📦 DATA LAYER (Single Source of Truth)
│   │   ├── products.js     # Katalog produk, status, badge, highlight, tech stack
│   │   ├── navigation.js   # Menu navbar, social media, status badges
│   │   └── labRoadmap.js   # Metrik telemetri & milestone roadmap
│   ├── components/         # 🧩 MODULAR UI COMPONENTS
│   │   ├── Navbar.js       # Topbar enterprise + mega-menu popover
│   │   ├── HeroShowcase.js # Katalog ikhtisar ringkas prototipe beranda
│   │   ├── ProductDetail.js# Halaman detail spesifikasi universal produk
│   │   ├── BLineNoteDetail.js # Detail deep-dive khusus BLineNote
│   │   ├── ActionConsole.js# Panel interaktif form & roadmap radar
│   │   ├── TechEcosystemGraphic.js # 3D Isometric SVG canvas
│   │   └── Footer.js       # Footer legal & social links
│   ├── utils/              # 🛠️ UTILITIES
│   │   └── toast.js        # Floating UI toast notification service
│   ├── style.css           # Tailwind base, typography & utility styling
│   └── main.js             # Minimalist app entry point & orchestrator
```

---

## 3. Cara Menambahkan Produk Baru (Panduan AI)

Buka [`src/data/products.js`](file:///d:/AURACORE/website/src/data/products.js) dan tambahkan objek baru ke dalam array `products`:

```javascript
{
  id: 'nama-id-unik',
  name: 'Nama Produk',
  subtitle: 'Sub-kategori atau Fokus',
  category: 'Kategori (cth: AI Research / Security / Health Tech)',
  status: 'Public Release | Live Web App | Internal Prototype | In R&D Lab',
  statusVariant: 'success | info | warning | purple',
  badge: 'v1.0.0 · Platform',
  tagline: 'Satu kalimat ringkasan nilai produk.',
  description: 'Deskripsi lengkap 1-2 paragraf mengenai kapabilitas dan arsitektur produk.',
  highlights: [
    'Poin keunggulan 1',
    'Poin keunggulan 2',
    'Poin keunggulan 3'
  ],
  techStack: ['Python', 'PyTorch', 'FastAPI'],
  metrics: {
    versi: 'v1.0',
    keamanan: 'Enkripsi Penuh'
  },
  actions: {
    primary: {
      label: 'Download / Buka App',
      url: 'https://...',
      isExternal: true, // true untuk tab baru, false untuk trigger modal/console
      type: 'launch'    // 'download' | 'launch' | 'modal'
    }
  },
  icon: 'shield-check',
  themeColor: '#10b981',
  accentBg: 'bg-emerald-50',
  accentBorder: 'border-emerald-200',
  accentText: 'text-emerald-700'
}
```

---

## 4. Cara Menambahkan Milestone atau Telemetri Baru

Buka [`src/data/labRoadmap.js`](file:///d:/AURACORE/website/src/data/labRoadmap.js):
* **Telemetri**: Tambahkan objek `{ label: '...', value: '...', trend: '...' }` pada array `telemetry`.
* **Milestone**: Tambahkan objek `{ quarter: 'Q1 2027', title: '...', desc: '...', status: 'upcoming | in-progress | completed' }` pada array `timeline`.

---

## 5. Konvensi Styling (Clean Light Tech)

Gunakan utility semantic class yang telah terkonfigurasi di [`tailwind.config.js`](file:///d:/AURACORE/website/tailwind.config.js):

| Kategori | Nama Kelas Tailwind |
| :--- | :--- |
| **Surface/Card** | `bg-surface-page` (`#f8fafc`), `bg-surface-card` (`#ffffff`), `glass-card` |
| **Teks** | `text-content-main` (`#0f172a`), `text-content-body` (`#334155`), `text-content-muted` (`#64748b`) |
| **Warna Brand** | `bg-brand-blue` (`#2563eb`), `text-brand-cyan` (`#0284c7`), `text-brand-purple` (`#7c3aed`) |
| **Bentuk Kontrol** | `pill-input` (input form melengkung penuh), `pill-btn-primary`, `pill-btn-secondary` |
| **Bayangan** | `shadow-soft-sm`, `shadow-soft-md`, `shadow-soft-xl`, `shadow-pill` |

---

## 6. Build & Deployment Commands

```bash
# Menjalankan server development lokal
npm run dev

# Membangun bundle produksi teroptimasi
npm run build

# Meninjau bundle produksi lokal
npm run preview

# Deploy ke Vercel
vercel
```
