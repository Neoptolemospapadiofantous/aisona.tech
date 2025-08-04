import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About aisona.tech - AI Business Automation Experts',
  description: 'Learn about aisona.tech\'s mission to revolutionize business operations with intelligent AI solutions. Discover how we help businesses automate customer support, lead generation, and ticketing systems in just 5 days.',
  keywords: ['AI automation', 'business automation', 'customer support AI', 'lead generation AI', 'about aisona.tech', 'AI experts'],
  openGraph: {
    title: 'About aisona.tech - AI Business Automation Experts',
    description: 'Learn about aisona.tech\'s mission to revolutionize business operations with intelligent AI solutions.',
    url: 'https://aisona.tech/about',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About aisona.tech - AI Business Automation Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About aisona.tech - AI Business Automation Experts',
    description: 'Learn about aisona.tech\'s mission to revolutionize business operations with intelligent AI solutions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aisona.tech/about',
  },
}

export default function AboutPage() {
  return <About />
}