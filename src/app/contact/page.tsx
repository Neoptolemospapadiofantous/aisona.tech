import type { Metadata } from 'next'
import Contact from '@/app/components/Contact'

export const metadata: Metadata = {
  title: 'Contact aisona.tech - AI Business Automation Consultation',
  description: 'Contact aisona.tech for AI business automation consultations. 24/7 AI chat support, phone +357-97-888-064, email support, and office visits in Limassol, Cyprus.',
  keywords: ['contact aisona.tech', 'AI consultation', 'business automation support', 'AI chat support', 'Limassol Cyprus'],
  openGraph: {
    title: 'Contact aisona.tech - AI Business Automation Consultation',
    description: 'Contact aisona.tech for AI business automation consultations. 24/7 AI chat support and office visits in Limassol, Cyprus.',
    url: 'https://aisona.tech/contact',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact aisona.tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact aisona.tech - AI Business Automation Consultation',
    description: 'Contact aisona.tech for AI business automation consultations. 24/7 AI chat support and office visits in Limassol, Cyprus.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aisona.tech/contact',
  },
}

export default function ContactPage() {
  return <Contact />
}