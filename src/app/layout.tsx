import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'aisona.tech - AI Business Automation Solutions',
    template: '%s | aisona.tech'
  },
  description: 'Transform your business with AI automation solutions for customer support, lead generation, and ticketing systems.',
  keywords: ['AI automation', 'business automation', 'customer support AI', 'lead generation'],
  authors: [{ name: 'aisona.tech' }],
  creator: 'aisona.tech',
  publisher: 'aisona.tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aisona.tech'),
  openGraph: {
    title: 'aisona.tech - AI Business Automation Solutions',
    description: 'Transform your business with AI automation solutions for customer support, lead generation, and ticketing systems.',
    url: 'https://aisona.tech',
    siteName: 'aisona.tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'aisona.tech - AI Business Automation Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aisona.tech - AI Business Automation Solutions',
    description: 'Transform your business with AI automation solutions for customer support, lead generation, and ticketing systems.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}