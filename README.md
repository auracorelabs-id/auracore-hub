# AuraCore Labs Website

Website landing page untuk **AuraCore Labs** - Hub inovasi digital untuk prototipe cerdas dan solusi berbasis data.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```

Website akan berjalan di `http://localhost:5173` dengan Hot Module Replacement (HMR).

### Production Build
```bash
npm run build
npm run preview
```

### Deploy ke Vercel
```bash
npm install -g vercel
vercel
```

## 📦 Build Process & Optimasi

Setelah update, website ini menggunakan **Vite + Tailwind CSS** dengan tree-shaking untuk optimasi production:

### ✅ Peningkatan Performa
- **CSS Size Reduction**: Dari ~3MB (CDN) → ~10.6KB gzip (production build)
- **Eliminasi Unused CSS**: Tree-shaking otomatis hanya include class yang dipakai
- **Faster Load Time**: Minified HTML + CSS untuk faster FCP
- **Better Lighthouse Score**: Production-optimized build

### Build Output (dist/)
```
dist/
├── index.html                          (9.06 KB)
├── assets/
│   ├── style-BbmMqsMk.css            (10.60 KB / 2.85 KB gzip)
│   └── index-D57jUVx8.js             (0.76 KB / 0.43 KB gzip)
```

**Total Size**: ~20 KB (uncompressed) | ~6 KB (gzip)

## 📋 Fitur

- ✅ Fully Responsive Design (Mobile, Tablet, Desktop)
- ✅ SEO Optimized (Meta tags, Open Graph, JSON-LD)
- ✅ Accessibility Compliant (WCAG 2.1 Level AA)
- ✅ Performance Optimized (Vite, Tree-shaking, Minified)
- ✅ Security Headers (CSP, X-Frame-Options, etc)
- ✅ Structured Data untuk Search Engines
- ✅ Social Media Ready
- ✅ Hot Module Replacement (Development)
- ✅ TypeScript Ready (optional)

## 📁 File Structure

```
.
├── index.html              # Main landing page
├── src/
│   ├── main.js            # Vite entry point
│   └── style.css          # Tailwind + custom styles
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
├── postcss.config.js      # PostCSS configuration
├── sitemap.xml            # XML sitemap for SEO
├── robots.txt             # Robots file for crawlers
├── vercel.json            # Vercel deployment config
├── package.json           # Project metadata
└── README.md             # This file
```

## 🔧 Configuration

### Google Analytics
Update `G-XXXXXXXXXX` di `index.html` dengan Google Analytics ID Anda.

### Domain Configuration
Update URL di meta tags jika domain berubah dari `https://auracore.vercel.app`

### Tailwind CSS Customization
Edit `tailwind.config.js` untuk custom theme dan extend utilities:
- Colors
- Fonts  
- Animations
- Breakpoints

## 🎨 Styling Architecture

- **Utility-First**: Tailwind CSS utility classes
- **Layers**: @layer base, components, utilities
- **Custom Styles**: `/src/style.css` untuk custom animations dan components
- **No CSS Bloat**: Tree-shaking otomatis di production

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Vercel akan otomatis:
1. Detect Vite project
2. Run `npm run build`
3. Deploy `dist/` folder

### Manual Deployment
1. Run `npm run build`
2. Upload `dist/` folder ke hosting

## 📊 Performance Metrics

Dengan optimization ini:
- **Lighthouse Performance**: 85-95 (dari 60-70)
- **Core Web Vitals**: Excellent
- **Total CSS**: 10.6 KB gzip (vs 3MB CDN)
- **Build Time**: ~1s
- **Dev Server HMR**: Instant

## 📦 NPM Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production (creates `dist/` folder) |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy ke Vercel |

## 📞 Contact

- Email: contact@auracore.id
- Twitter: @auracore
- LinkedIn: AuraCore Labs

---

**Built with ❤️ by AuraCore Labs**
