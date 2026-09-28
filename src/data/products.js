/**
 * @file products.js
 * @description Centralized data store for AuraCore Labs products and prototypes.
 * AI FRIENDLY: To add a new product or update details, simply modify/append an item in the array below.
 */

export const products = [
  {
    id: 'sentinel',
    name: 'AuraCore Sentinel',
    subtitle: 'Security & Device Integrity',
    category: 'Security Tools',
    status: 'Public Release',
    statusVariant: 'success', // 'success' | 'info' | 'warning' | 'purple'
    badge: 'v1.0.0 · Windows x64',
    tagline: 'Professional Android malware scanner & device manager — single-file Windows executable.',
    description: 'Solusi pemindaian malware Android berkecepatan tinggi dengan analisis heuristik APK, deteksi adb intrusion, dan manajemen integritas perangkat tanpa instalasi dependensi rumit.',
    highlights: [
      'Single-file portable executable (~20.7 MB)',
      'Real-time ADB connection & permission inspector',
      'Heuristic APK signature & payload detector',
    ],
    techStack: ['Python', 'PySide6', 'ADB', 'Windows x64', 'Security Heuristics'],
    metrics: {
      version: 'v1.0.0',
      size: '20.7 MB',
      os: 'Windows 10/11',
      license: 'MIT Open Source'
    },
    actions: {
      primary: {
        label: 'Download on GitHub',
        url: 'https://github.com/auracorelabs-id/auracore-sentinel/releases',
        isExternal: true,
        type: 'download'
      },
      secondary: {
        label: 'View Repository',
        url: 'https://github.com/auracorelabs-id/auracore-sentinel',
        isExternal: true
      }
    },
    icon: 'shield-check',
    themeColor: '#10b981', // Emerald
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    accentText: 'text-emerald-700'
  },
  {
    id: 'simpanpassword',
    name: 'SimpanPassword',
    subtitle: 'Credential Security & Privacy Vault',
    category: 'Web Applications',
    status: 'Live Web App',
    statusVariant: 'info',
    badge: 'Production Live',
    tagline: 'Perlindungan privasi dan manajemen kredensial terenkripsi di ujung jari Anda.',
    description: 'Vault penyimpanan kata sandi modern dengan enkripsi client-side end-to-end berstandar tinggi. Data sensitif dienkripsi langsung di browser sebelum disimpan.',
    highlights: [
      'Client-side zero-knowledge architecture',
      'Instant password generator & strength meter',
      'Clean modern interface dengan responsivitas mobile',
    ],
    techStack: ['Web Crypto API', 'Tailwind CSS', 'Vite', 'Cloudflare Pages'],
    metrics: {
      encryption: 'AES-GCM 256-bit',
      access: 'Web & PWA Ready',
      privacy: 'Zero-Knowledge',
      uptime: '99.9%'
    },
    actions: {
      primary: {
        label: 'Buka Web App',
        url: 'https://simpanpassword.my.id',
        isExternal: true,
        type: 'launch'
      },
      secondary: {
        label: 'Dokumentasi Privasi',
        url: '#privacy-vault',
        isExternal: false
      }
    },
    icon: 'key',
    themeColor: '#0284c7', // Cyan
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-200',
    accentText: 'text-sky-700'
  },
  {
    id: 'health',
    name: 'AuraCore Health',
    subtitle: 'Hospital Information & Smart Workflow',
    category: 'Health Tech',
    status: 'Internal Prototype',
    statusVariant: 'warning',
    badge: 'Private Alpha',
    tagline: 'Transformasi digital untuk manajemen kesehatan yang lebih cerdas dan terintegrasi.',
    description: 'Sistem manajemen operasional rumah sakit cerdas berbasis analitik data pasien, penjadwalan terpadu, rekam medis elektronik terstandarisasi, dan optimasi alur kerja klinis.',
    highlights: [
      'Manajemen antrean & rekam medis cerdas terpadu',
      'Prediksi utilisasi kapasitas ruangan & logistik farmasi',
      'Antarmuka dokter & tenaga medis yang ergonomis',
    ],
    techStack: ['Node.js', 'PostgreSQL', 'HL7/FHIR Protocol', 'Tailwind', 'REST/GraphQL'],
    metrics: {
      stage: 'Phase 1 Core Pilot',
      deployment: 'On-Prem / Private Cloud',
      compliance: 'HIPAA/Permenkes Aligned'
    },
    actions: {
      primary: {
        label: 'Request Access / Demo',
        url: '#request-prototype',
        isExternal: false,
        type: 'modal'
      },
      secondary: {
        label: 'Whitepaper Ringkas',
        url: '#health-whitepaper',
        isExternal: false
      }
    },
    icon: 'heart-pulse',
    themeColor: '#4f46e5', // Indigo
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-200',
    accentText: 'text-indigo-700'
  },
  {
    id: 'ai-analytics',
    name: 'AI Health Analytics',
    subtitle: 'Predictive Medical & Bioscience ML',
    category: 'AI Research',
    status: 'In R&D Lab',
    statusVariant: 'purple',
    badge: 'Research Pipeline',
    tagline: 'Eksperimen model inferensi AI untuk deteksi anomali klinis dan analisis prediktif kesehatan.',
    description: 'Riset lanjutan kolaborasi kreativitas manusia dan model machine learning untuk menganalisis data biomedis, tren epidemiologis, dan biomarker kesehatan secara presisi.',
    highlights: [
      'Pipeline pemrosesan data biomedis multimodal',
      'Inference engine ringan untuk integrasi edge hospital',
      'Eksperimen interpretability & explainable AI (XAI)',
    ],
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Pandas/NumPy', 'Docker'],
    metrics: {
      roadmap: 'Q4 2026 Target',
      focus: 'Predictive Diagnostics',
      partner: 'Open Research'
    },
    actions: {
      primary: {
        label: 'Gabung Riset / Waitlist',
        url: '#request-prototype',
        isExternal: false,
        type: 'modal'
      },
      secondary: {
        label: 'Lab Notes',
        url: '#lab-notes',
        isExternal: false
      }
    },
    icon: 'sparkles',
    themeColor: '#7c3aed', // Purple
    accentBg: 'bg-purple-50',
    accentBorder: 'border-purple-200',
    accentText: 'text-purple-700'
  },
  {
    id: 'blinenote',
    name: 'BLineNote',
    subtitle: 'AI Voice & Client-Side Encrypted Notes',
    category: 'AI & Productivity',
    status: 'Live Web App',
    statusVariant: 'amber',
    badge: 'Production Live · Web Speech AI',
    tagline: 'Rekam, transkripsikan, dan kelola ide Anda dengan teknologi suara serta proteksi enkripsi sisi klien.',
    description: 'Ruang catatan digital modern yang menggabungkan transkripsi suara real-time berbasis Web Speech AI dengan perlindungan data lokal (Client-Side AES-GCM-256, 2FA Google Authenticator/Authy, dan backup mandiri).',
    highlights: [
      'Real-time voice-to-text recording & speech synthesis',
      'Client-side AES-GCM-256 encrypted note protection',
      'Two-Factor Authentication (2FA / TOTP) & local backup',
    ],
    techStack: ['Web Speech API', 'Web Audio API', 'Web Crypto AES-256', '2FA / TOTP', 'Tailwind CSS'],
    metrics: {
      transcription: 'Web Speech AI (id-ID)',
      encryption: 'Client-Side AES-GCM-256',
      auth: '2FA Authenticator Support',
      platform: 'Web & Desktop Ready'
    },
    actions: {
      primary: {
        label: 'Buka BLineNote',
        url: 'https://blinenote.vercel.app',
        isExternal: true,
        type: 'launch'
      },
      secondary: {
        label: 'Detail Spesifikasi',
        url: '#product-blinenote',
        isExternal: false
      }
    },
    icon: 'microphone',
    themeColor: '#f59e0b', // Amber
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    accentText: 'text-amber-700'
  },
  {
    id: 'itsupport',
    name: 'IT Support & Security Center',
    subtitle: 'Enterprise System Repair & Field Toolkit',
    category: 'Enterprise Desktop Utility',
    status: 'Public Release',
    statusVariant: 'success',
    badge: 'v3.2.0 · .NET 8 & CLI',
    tagline: 'All-in-One Field Toolkit & Enterprise System Repair Suite — 86 modul perbaikan sistem mandiri.',
    description: 'Suite perkakas teknisi IT enterprise dan sistem diagnosa komprehensif dengan antarmuka ganda (C# .NET 8 WinForms GUI & Zero-Dependency CLI). Menyediakan 86 utilitas otomasi hardware audit, spooler printer, air-gap karantina jaringan ransomware, perbaikan Active Directory/RDP, perbaikan WMI, dan generator laporan servis HTML.',
    highlights: [
      '86 Modul Perbaikan & Diagnosa Mandiri (Dual GUI .NET 8 & CLI Batch)',
      'Karantina Jaringan Darurat 1-Detik (Ransomware Air-Gap) & Audit Lisensi',
      'Pembersih Antrean Printer, Reset Spooler, & Otomasi WMI/DISM Repair',
      'Generator Berita Acara & Laporan Servis Teknis Format HTML Otomatis'
    ],
    techStack: ['C# .NET 8', 'WinForms', 'Windows Batch', 'PowerShell', 'WMI/CIM', 'Nmap Engine'],
    metrics: {
      tools: '86 Integrated Modules',
      architecture: 'Dual GUI & CLI Engine',
      packaging: 'Single-File Portable',
      compatibility: 'Windows 10/11 x64'
    },
    actions: {
      primary: {
        label: 'Download v3.2.0 (.exe)',
        url: 'https://github.com/protontekno-bit/ITSUPPORT_CENTER/releases/download/v3.2.0/ITSupportCenter.exe',
        isExternal: true,
        type: 'download'
      },
      secondary: {
        label: 'GitHub Repository',
        url: 'https://github.com/protontekno-bit/ITSUPPORT_CENTER',
        isExternal: true
      },
      portable: {
        label: 'Download Portable (.zip)',
        url: 'https://github.com/protontekno-bit/ITSUPPORT_CENTER/releases/download/v3.2.0/ITSupportCenter-v3.2.0-Portable.zip',
        isExternal: true
      }
    },
    repoUrl: 'https://github.com/protontekno-bit/ITSUPPORT_CENTER',
    downloadUrl: 'https://github.com/protontekno-bit/ITSUPPORT_CENTER/releases/download/v3.2.0/ITSupportCenter.exe',
    downloadPortableUrl: 'https://github.com/protontekno-bit/ITSUPPORT_CENTER/releases/download/v3.2.0/ITSupportCenter-v3.2.0-Portable.zip',
    releasesUrl: 'https://github.com/protontekno-bit/ITSUPPORT_CENTER/releases',
    screenshot: '/screenshots/itsupport-center.png',
    icon: 'wrench-screwdriver',
    themeColor: '#0f766e', // Teal
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-200',
    accentText: 'text-teal-700'
  }
];
