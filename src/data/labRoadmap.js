/**
 * @file labRoadmap.js
 * @description Build-in-Public metrics, telemetry, and development roadmap.
 */

export const labRoadmap = {
  activeMilestone: 'Q3-Q4 2026 Innovation Cycle',
  summary: 'Membangun ekosistem prototipe cerdas berbasis AI dengan transparansi penuh untuk developer & mitra.',
  telemetry: [
    { label: 'Active Projects', value: '4 Prototypes', trend: '+1 in Q3' },
    { label: 'Security Tools', value: '1 Production', trend: 'Windows x64' },
    { label: 'Cloud Architecture', value: '99.9% Uptime', trend: 'Global CDN' },
    { label: 'Open Source', value: 'MIT Licensed', trend: 'Public Repo' }
  ],
  timeline: [
    {
      quarter: 'Q1 2026',
      title: 'AuraCore Sentinel v1.0.0 Release',
      desc: 'Peluncuran pemindai malware Android portabel single-file di GitHub Releases.',
      status: 'completed'
    },
    {
      quarter: 'Q2 2026',
      title: 'SimpanPassword Cloud Hardening',
      desc: 'Integrasi zero-knowledge client crypto dan audit performa web application.',
      status: 'completed'
    },
    {
      quarter: 'Q3 2026',
      title: 'AuraCore Health Core Alpha',
      desc: 'Pengujian arsitektur modul sistem antrean dan rekam medis elektronik rumah sakit.',
      status: 'in-progress'
    },
    {
      quarter: 'Q4 2026',
      title: 'AI Health Analytics Pipeline',
      desc: 'Eksperimen model inferensi machine learning untuk deteksi dini data kesehatan.',
      status: 'upcoming'
    }
  ]
};
