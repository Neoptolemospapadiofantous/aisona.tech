import type { Metadata } from 'next'
import CookiePolicy from '@/app/components/CookiePolicy'

export const metadata: Metadata = {
  title: 'Cookie Policy - How aisona.tech Uses Cookies & Tracking',
  description: 'Learn how aisona.tech uses cookies and similar technologies to provide and improve our AI business automation services. Manage your cookie preferences.',
  keywords: ['cookie policy', 'cookies', 'tracking', 'privacy', 'AI services', 'data collection', 'GDPR', 'cookie consent'],
  openGraph: {
    title: 'Cookie Policy - How aisona.tech Uses Cookies & Tracking',
    description: 'Learn how aisona.tech uses cookies and similar technologies to provide and improve our AI business automation services.',
    url: 'https://aisona.tech/cookie',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'aisona.tech Cookie Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy - How aisona.tech Uses Cookies & Tracking',
    description: 'Learn how aisona.tech uses cookies and similar technologies to provide and improve our AI business automation services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aisona.tech/cookie',
  },
}

export default function CookiePolicyPage() {
  return <CookiePolicy />
}