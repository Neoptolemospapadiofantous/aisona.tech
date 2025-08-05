import type { Metadata } from 'next'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import FAQ from '@/app/components/FAQ'

export const metadata: Metadata = {
  title: 'AI Business Automation Solutions - Customer Support & Lead Generation',
  description: 'Transform your business with aisona.tech\'s AI solutions. 24/7 customer support, intelligent lead generation, and smart ticketing systems. Get started in just 5 days with 99.9% uptime SLA.',
  keywords: ['AI business automation', 'AI customer support', 'AI lead generation', 'business AI solutions', 'automated customer service'],
  openGraph: {
    title: 'AI Business Automation Solutions - Customer Support & Lead Generation',
    description: 'Transform your business with aisona.tech\'s AI solutions. 24/7 customer support, intelligent lead generation, and smart ticketing systems.',
    url: 'https://aisona.tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'aisona.tech AI Business Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Automation Solutions - Customer Support & Lead Generation',
    description: 'Transform your business with aisona.tech\'s AI solutions. 24/7 customer support, intelligent lead generation, and smart ticketing systems.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aisona.tech',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FAQ />
    </>
  )
}