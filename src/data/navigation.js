/**
 * @file navigation.js
 * @description Centralized navigation data and social links for AuraCore Labs.
 */

export const navigation = {
  brand: {
    name: 'AuraCore Labs',
    tagline: 'Digital Innovation Hub',
    logoUrl: 'https://res.cloudinary.com/dnbahfdbd/image/upload/v1769952310/auracore_logo.png',
    faviconUrl: 'https://res.cloudinary.com/dnbahfdbd/image/upload/v1769954186/logo2_womokl.png',
    homeUrl: '/',
  },
  menuItems: [
    {
      id: 'products-dropdown',
      label: 'Products & Tools',
      type: 'dropdown',
      children: [
        {
          name: 'AuraCore Sentinel',
          tag: 'Windows x64 Executable',
          desc: 'Android malware scanner & ADB integrity manager',
          url: '#sentinel',
          iconColor: '#10b981',
          badge: 'v1.0.0'
        },
        {
          name: 'SimpanPassword',
          tag: 'Web Vault',
          desc: 'Zero-knowledge client-side credential manager',
          url: '#simpanpassword',
          iconColor: '#0284c7',
          badge: 'Live'
        },
        {
          name: 'BLineNote',
          tag: 'AI Voice & E2EE Notes',
          desc: 'Catatan suara cerdas berbantu Gemini AI & proteksi 2FA',
          url: '#blinenote',
          iconColor: '#f59e0b',
          badge: 'Live'
        },
        {
          name: 'AuraCore Health',
          tag: 'Healthcare System',
          desc: 'Transformasi digital & manajemen sistem RS cerdas',
          url: '#health',
          iconColor: '#4f46e5',
          badge: 'Prototype'
        }
      ]
    },
    {
      id: 'ai-research',
      label: 'AI & Labs',
      type: 'link',
      url: '#ai-analytics'
    },
    {
      id: 'roadmap-link',
      label: 'Build in Public',
      type: 'link',
      url: '#radar'
    }
  ],
  ctaButtons: [
    {
      label: 'GitHub Releases',
      url: 'https://github.com/auracorelabs-id',
      variant: 'secondary',
      isExternal: true
    },
    {
      label: 'Request Access',
      url: '#request-prototype',
      variant: 'primary',
      isExternal: false
    }
  ],
  contact: {
    whatsapp: '+6282256657700',
    whatsappFormatted: '+62 822-5665-7700',
    whatsappUrl: 'https://wa.me/6282256657700',
    email: 'auracore.labs@gmail.com',
    emailUrl: 'mailto:auracore.labs@gmail.com',
  },
  socialLinks: [
    { name: 'WhatsApp', url: 'https://wa.me/6282256657700' },
    { name: 'Email', url: 'mailto:auracore.labs@gmail.com' },
    { name: 'X / Twitter', url: 'https://x.com/AuraCore9593' },
    { name: 'Instagram', url: 'https://www.instagram.com/auracore.id/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@auracore.id' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/auracore' }
  ],
  legalLinks: [
    { name: 'Privacy Policy', url: '#privacy-policy' },
    { name: 'Terms of Service', url: '#terms-of-service' },
    { name: 'Security Architecture', url: '#security' }
  ]
};
