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
            By accessing or using aisona.tech&apos;s AI-powered business automation services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use our Services.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and aisona.tech (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
          </p>
        </div>
      )
    },
    {
      id: "services",
      title: "Our Services",
      icon: Users,
      content: (
        <div className="space-y-6">
          <p>
            aisona.tech provides AI-powered business automation services designed to enhance operations, customer service, and business processes.
          </p>
          
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Services Include:</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>AI Customer Support:</strong> Intelligent chat agents for automated customer service and support</li>
              <li><strong>Lead Generation:</strong> AI-powered lead qualification and nurturing systems</li>
              <li><strong>Smart Ticketing:</strong> Automated ticket management and routing systems</li>
              <li><strong>Process Automation:</strong> Workflow automation and business process optimization</li>
              <li><strong>System Integration:</strong> API access and integration with existing business systems</li>
              <li><strong>Analytics:</strong> Performance metrics and business intelligence reporting</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700">
              <strong>Service Availability:</strong> We maintain 99.9% uptime SLA with 24/7 monitoring. 
              Scheduled maintenance communicated 72 hours in advance.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use",
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Permitted Uses</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Use Services for legitimate business operations</li>
              <li>• Integrate with existing business systems</li>
              <li>• Process business data in compliance with applicable laws</li>
              <li>• Automate customer service and business processes</li>
              <li>• Access APIs within rate limits</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Prohibited Uses</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Illegal activities or regulatory violations</li>
              <li>• Reverse engineering or hacking attempts</li>
              <li>• Exceeding API rate limits</li>
              <li>• Sending spam or unauthorized communications</li>
              <li>• Interfering with system operations</li>
              <li>• Violating privacy regulations</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-700 font-semibold mb-1">Compliance Violations</p>
                <p className="text-red-600 text-sm">
                  Violations may result in immediate account suspension without refund.
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
            <h4 className="text-lg font-semibold text-black mb-3">Payment Methods</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Credit/Debit Cards:</strong> Processed securely through Stripe</li>
              <li><strong>PayPal:</strong> Available for subscription payments</li>
              <li><strong>JCCSmart:</strong> Local payment processing option</li>
              <li><strong>Wire Transfer:</strong> Available for enterprise accounts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Billing Terms</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Monthly or annual billing cycles available</li>
              <li>• Payment due upon subscription or renewal</li>
              <li>• Automatic renewal unless cancelled</li>
              <li>• 48-hour grace period for failed payments</li>
              <li>• All prices exclude applicable taxes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Refunds</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• 30-day money-back guarantee for new subscriptions</li>
              <li>• Pro-rated refunds for annual plans (first 30 days)</li>
              <li>• No refunds for partial billing periods</li>
              <li>• Refund requests via AI chat agent</li>
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
            <h4 className="text-lg font-semibold text-black mb-3">Your Data Rights</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Ownership:</strong> You retain ownership of all business data</li>
              <li><strong>Control:</strong> You control data usage and can request deletion</li>
              <li><strong>Security:</strong> Enterprise-grade protection measures</li>
              <li><strong>Privacy:</strong> Processing per our Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Our Data Use</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Process data to provide automation services</li>
              <li>• Use conversation data to improve AI performance</li>
              <li>• Generate analytics for service optimization</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700">
              <strong>Data Compliance:</strong> We maintain full compliance with GDPR and applicable data protection laws.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "limitations",
      title: "Limitations",
      icon: AlertTriangle,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Service Limitations</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>AI Accuracy:</strong> AI responses may not always be 100% accurate</li>
              <li><strong>Dependencies:</strong> Service quality depends on internet connectivity</li>
              <li><strong>Capacity:</strong> Usage limits based on subscription plan</li>
              <li><strong>Integration:</strong> Dependent on third-party API availability</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Disclaimers</h4>
            <p className="text-gray-600 mb-4">
              SERVICES PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES. WE DO NOT WARRANT 
              UNINTERRUPTED SERVICE OR ERROR-FREE OPERATIONS.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Liability Limitation</h4>
            <p className="text-gray-600">
              OUR LIABILITY IS LIMITED TO THE AMOUNT PAID FOR SERVICES IN THE PRECEDING 12 MONTHS.
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
            <h4 className="text-lg font-semibold text-black mb-3">By You</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Cancel subscription anytime via account settings</li>
              <li>• Service continues until end of billing period</li>
              <li>• Data export available for 60 days</li>
              <li>• No refunds for partial periods</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">By Us</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Immediate termination for violations</li>
              <li>• 30-day notice for termination without cause</li>
              <li>• Suspension for non-payment</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Effect of Termination</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Immediate service access termination</li>
              <li>• Data deletion after 60-day grace period</li>
              <li>• Outstanding payments remain due</li>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
            <span><strong>Effective Date:</strong> {effectiveDate}</span>
            <span><strong>Last Updated:</strong> {lastUpdated}</span>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Legal Agreement</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                These Terms constitute a legal agreement for AI business automation services. 
                Please read carefully before using our Services.
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
            Questions about these Terms, billing, or legal matters? 
            Our AI chat agent is available 24/7 to assist you.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI Legal Assistant
            </p>
            <p className="text-sm text-gray-600">
              Get instant answers about terms, billing, refunds, 
              or any legal questions related to our services.
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