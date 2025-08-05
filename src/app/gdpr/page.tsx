import type { Metadata } from 'next'
import GDPRCompliance from '@/app/components/GDPRCompliance'

export const metadata: Metadata = {
  title: 'GDPR Compliance - Data Protection Rights & Procedures',
  description: 'aisona.tech GDPR compliance information, data subject rights, and data protection procedures for EU residents.',
  keywords: ['GDPR compliance', 'data protection rights', 'EU data privacy', 'data subject rights'],
  alternates: {
    canonical: 'https://aisona.tech/gdpr',
  },
}

export default function GDPRPage() {
  return <GDPRCompliance />
}