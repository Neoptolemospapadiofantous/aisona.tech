import type { Metadata } from 'next'
import TermsOfService from '@/app/components/TermsOfService'

export const metadata: Metadata = {
  title: 'Terms of Service - AI Business Automation Legal Terms',
  description: 'aisona.tech terms of service for AI business automation services, user agreements, and legal policies.',
  keywords: ['terms of service', 'legal terms', 'user agreement', 'aisona.tech terms'],
  alternates: {
    canonical: 'https://aisona.tech/terms',
  },
}

export default function TermsPage() {
  return <TermsOfService />
}