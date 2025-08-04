import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'FAQ - AI Business Automation Questions & Answers',
  description: 'Get answers to frequently asked questions about aisona.tech\'s AI business automation services, implementation timeline, security, GDPR compliance, and pricing.',
  keywords: ['AI automation FAQ', 'business automation questions', 'AI implementation help', 'AI security', 'GDPR compliance'],
  openGraph: {
    title: 'FAQ - AI Business Automation Questions & Answers',
    description: 'Get answers to frequently asked questions about aisona.tech\'s AI business automation services.',
    url: 'https://aisona.tech/faq',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'aisona.tech FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - AI Business Automation Questions & Answers',
    description: 'Get answers to frequently asked questions about aisona.tech\'s AI business automation services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aisona.tech/faq',
  },
}

export default function FAQPage() {
  return <FAQ />
}