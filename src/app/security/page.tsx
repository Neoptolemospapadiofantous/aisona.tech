import type { Metadata } from 'next'
import SecurityPolicy from '@/app/components/SecurityPolicy'

export const metadata: Metadata = {
  title: 'Security Policy - Enterprise-Grade Data Protection',
  description: 'aisona.tech security measures, SOC 2 compliance, encryption standards, and data protection protocols for business automation services.',
  keywords: ['security policy', 'data security', 'SOC 2 compliance', 'encryption', 'enterprise security'],
  alternates: {
    canonical: 'https://aisona.tech/security',
  },
}

export default function SecurityPage() {
  return <SecurityPolicy />
}