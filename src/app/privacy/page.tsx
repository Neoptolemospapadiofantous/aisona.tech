import type { Metadata } from 'next'
import PrivacyPolicy from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & GDPR Compliance',
  description: 'aisona.tech privacy policy detailing how we collect, use, and protect your data. Full GDPR compliance and transparent data practices.',
  keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'data privacy', 'aisona.tech privacy'],
  alternates: {
    canonical: 'https://aisona.tech/privacy',
  },
}

export default function PrivacyPage() {
  return <PrivacyPolicy />
}