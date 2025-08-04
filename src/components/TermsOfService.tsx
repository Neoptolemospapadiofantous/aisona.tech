import { FileText, Scale, Shield, AlertTriangle, CreditCard, Users, MessageSquare } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "December 1, 2024";
  const effectiveDate = "December 1, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            By accessing or using aisona.tech's AI-powered business automation services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and aisona.tech ("Company," "we," "our," or "us"). Your use of our Services signifies your acceptance of these Terms.
          </p>
        </div>
      )
    },
    {
      id: "description",
      title: "Description of Services",
      icon: Users,
      content: (
        <div className="space-y-6">
          <p>
            aisona.tech provides AI-powered business automation services designed to enhance customer service, streamline operations, and optimize business processes for companies across various industries.
          </p>
          
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Our Business Automation Services Include:</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Customer Support AI:</strong> Intelligent chat agents for automated customer service, inquiry handling, and technical support</li>
              <li><strong>Business Operations Support:</strong> AI-powered workflow automation and process optimization assistance</li>
              <li><strong>Data Analysis & Insights:</strong> Automated data processing, reporting, and business intelligence</li>
              <li><strong>Service Integration:</strong> AI-assisted integration with CRM, helpdesk, and business management systems</li>
              <li><strong>System Integration:</strong> API access and integration with existing business systems and workflows</li>
              <li><strong>Analytics and Reporting:</strong> Performance metrics, operational optimization, and customer satisfaction insights</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700">
              <strong>Service Availability:</strong> We strive to maintain 99.9% uptime to ensure continuous business operations support. Scheduled maintenance will be communicated in advance with 72-hour notice minimum.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use Policy",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Permitted Uses</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Use Services for legitimate business purposes and operations</li>
              <li>• Integrate with your existing business infrastructure and support systems</li>
              <li>• Access and use provided APIs within rate limits for business operations</li>
              <li>• Process business data in compliance with applicable laws and regulations</li>
              <li>• Automate customer service, business processes, and operational workflows</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Prohibited Uses</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Use Services for illegal activities or regulatory violations</li>
              <li>• Attempt to reverse engineer, decompile, or hack our Services</li>
              <li>• Exceed API rate limits or attempt to circumvent usage restrictions</li>
              <li>• Use Services to send unauthorized communications, spam, or unsolicited messages</li>
              <li>• Violate applicable laws, regulations, or privacy requirements</li>
              <li>• Interfere with normal business operations or system infrastructure</li>
              <li>• Process customer data in violation of privacy regulations or laws</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-700 font-semibold mb-1">Compliance Violations</p>
                <p className="text-red-600 text-sm">
                  Violation of applicable regulations or these terms may result in immediate suspension or termination of your account without refund, and may be reported to relevant authorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "payment-billing",
      title: "Payment and Billing",
      icon: CreditCard,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Subscription Plans</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Monthly Billing:</strong> Charges processed monthly in advance</li>
              <li><strong>Annual Billing:</strong> Charges processed annually with potential discounts</li>
              <li><strong>Usage-Based:</strong> Additional charges for usage beyond plan limits (API calls, customer interactions)</li>
              <li><strong>Enterprise Business:</strong> Custom pricing for large organizations and enterprises</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Payment Terms</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Payment due upon subscription or renewal</li>
              <li>• Accepted payment methods: Credit cards, ACH transfers, wire transfers</li>
              <li>• Automatic renewal unless cancelled before billing cycle</li>
              <li>• Late payments may result in service suspension (with 48-hour grace period for business operations)</li>
              <li>• All prices exclude applicable taxes and fees unless stated otherwise</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Refund Policy</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• 30-day money-back guarantee for new business subscriptions</li>
              <li>• Pro-rated refunds for annual plans cancelled within first 30 days</li>
              <li>• No refunds for partial months or usage-based charges</li>
              <li>• Refund requests can be submitted through our AI chat agent</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "data-privacy",
      title: "Data and Privacy",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Your Business Data Rights</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Ownership:</strong> You retain ownership of all business and customer data you input into our Services</li>
              <li><strong>Data Protection:</strong> All sensitive business information is handled with strict compliance to applicable regulations</li>
              <li><strong>Control:</strong> You control how your business data is used and can request deletion</li>
              <li><strong>Privacy:</strong> We process data according to our Privacy Policy and applicable regulations</li>
              <li><strong>Security:</strong> Enterprise-grade security measures protect your business and customer data</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Our Data Use for Business Services</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Process business data to provide automation and support services</li>
              <li>• Anonymized data may be used for AI model training (no personal or sensitive data)</li>
              <li>• Aggregate analytics to improve business service performance</li>
              <li>• Comply with applicable regulations and legal obligations</li>
              <li>• Generate reports for business optimization and customer service improvement</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700">
              <strong>Data Compliance:</strong> We are fully compliant with GDPR, applicable data protection laws, and industry-specific privacy standards. We maintain strict compliance with all applicable business regulations and privacy requirements. See our Privacy Policy and Compliance pages for details.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "limitations",
      title: "Limitations and Disclaimers",
      icon: AlertTriangle,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Service Limitations</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>AI Accuracy:</strong> AI responses for business support may not always be 100% accurate; human oversight recommended for critical business decisions</li>
              <li><strong>System Dependencies:</strong> Service quality may be affected by internet connectivity and system conditions</li>
              <li><strong>Capacity:</strong> Usage limits apply based on your subscription plan and may vary during peak traffic periods</li>
              <li><strong>Third-Party Integration:</strong> Integration availability depends on third-party APIs and system compatibility</li>
              <li><strong>Regulatory Changes:</strong> Services may be modified to comply with changing business regulations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Disclaimer of Warranties</h4>
            <p className="text-gray-600 mb-4">
              THE BUSINESS AUTOMATION SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT 
              UNINTERRUPTED SERVICE OR ERROR-FREE OPERATIONS.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Limitation of Liability</h4>
            <p className="text-gray-600">
              IN NO EVENT SHALL AISONA.TECH BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, 
              BUSINESS SERVICE INTERRUPTION, SYSTEM DOWNTIME, DATA LOSS, OR OTHER 
              INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "termination",
      title: "Termination",
      icon: Scale,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Termination by You</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Cancel your subscription at any time through your account settings</li>
              <li>• Service continues until the end of your current billing period</li>
              <li>• Data export available for 60 days after cancellation</li>
              <li>• No refunds for partial billing periods</li>
              <li>• 30-day notice recommended for large enterprise deployments</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Termination by Us</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Immediate termination for violation of applicable regulations or these Terms</li>
              <li>• 30-day notice for termination without cause (60 days for enterprise clients)</li>
              <li>• Suspension for non-payment until resolved (48-hour grace period for critical business operations)</li>
              <li>• Right to refuse service for regulatory compliance reasons</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Effect of Termination</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Immediate cessation of AI service access</li>
              <li>• Customer and business data deletion after 60-day grace period</li>
              <li>• Outstanding payments remain due</li>
              <li>• Survival of applicable Terms sections and regulatory obligations</li>
              <li>• Assistance with service migration for business continuity (additional fees may apply)</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            AI-Powered Business Automation Services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
            <span><strong>Effective Date:</strong> {effectiveDate}</span>
            <span><strong>Last Updated:</strong> {lastUpdated}</span>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Legal Agreement & Business Compliance</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-3">
                These Terms of Service constitute a legal agreement between you and aisona.tech for AI business automation services. 
                Please read them carefully before using our Services.
              </p>
              <p className="text-blue-700 text-sm leading-relaxed">
                <strong>Business Data Policy:</strong> Our AI services are designed for businesses across various industries 
                and comply with applicable data protection regulations and industry-specific privacy standards. 
                We maintain strict compliance with all applicable business laws and regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-black mb-4">Table of Contents</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm py-1 transition-colors"
              >
                <section.icon className="w-4 h-4" />
                {index + 1}. {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-black">
                  {index + 1}. {section.title}
                </h2>
              </div>
              <div className="prose max-w-none">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-semibold text-black">Questions About These Terms?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, compliance matters, 
            billing inquiries, or legal questions, our AI chat agent is available 24/7 to assist you.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI Legal & Support Assistant
            </p>
            <p className="text-sm text-gray-600">
              Get instant answers about terms, billing, refunds, compliance requirements, 
              or any other legal questions related to our services.
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p><strong>Business Address:</strong> 37 Evagora Palikaridi, Limassol, Cyprus</p>
            <p><strong>Phone:</strong> +357 (97) 888-064</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;