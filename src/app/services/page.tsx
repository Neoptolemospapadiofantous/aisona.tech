import type { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'AI Services - Customer Support, Lead Generation & Smart Ticketing',
  description: 'Comprehensive AI services for businesses: 24/7 customer support agents, intelligent lead generation systems, and automated ticketing solutions. 90% faster resolution times guaranteed.',
  keywords: ['AI customer support', 'AI lead generation', 'smart ticketing system', 'business automation services', 'AI chat agents'],
  openGraph: {
    title: 'AI Services - Customer Support, Lead Generation & Smart Ticketing',
    description: 'Comprehensive AI services for businesses: 24/7 customer support agents, intelligent lead generation systems, and automated ticketing solutions.',
    url: 'https://aisona.tech/services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'aisona.tech AI Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services - Customer Support, Lead Generation & Smart Ticketing',
    description: 'Comprehensive AI services for businesses: 24/7 customer support agents, intelligent lead generation systems, and automated ticketing solutions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aisona.tech/services',
  },
}

export default function ServicesPage() {
  return <Services />
}