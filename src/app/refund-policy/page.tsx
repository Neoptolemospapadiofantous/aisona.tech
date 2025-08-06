import type { Metadata } from 'next'
import RefundCancellationPolicy from '@/app/components/RefundCancellationPolicy'

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy - Monthly AI Services | aisona.tech',
  description: '30-day money-back guarantee for monthly AI subscriptions. Simple cancellation policy with no fees. Cancel anytime - service continues until month end.',
  keywords: ['monthly subscription refund', 'AI services cancellation', 'money back guarantee', 'monthly billing policy', 'cancel AI subscription', 'refund process', 'recurring billing'],
  openGraph: {
    title: 'Refund & Cancellation Policy - Monthly AI Services | aisona.tech',
    description: '30-day money-back guarantee for monthly AI subscriptions. Cancel anytime with no fees.',
    url: 'https://aisona.tech/refund-policy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'aisona.tech Monthly Refund & Cancellation Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund & Cancellation Policy - Monthly AI Services | aisona.tech',
    description: '30-day money-back guarantee for monthly AI subscriptions. Cancel anytime with no fees.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aisona.tech/refund-policy',
  },
}

export default function RefundPolicyPage() {
  return <RefundCancellationPolicy />
}