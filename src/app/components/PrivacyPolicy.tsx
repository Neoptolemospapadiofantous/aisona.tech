import { Shield, Lock, Eye, Users, Globe, Calendar, MessageSquare } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "December 1, 2024";
  const effectiveDate = "December 1, 2024";

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>
            aisona.tech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered chat agent services, website, and related services (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>
      )
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Information You Provide Directly</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Account Information:</strong> Name, email address, company information, billing details</li>
              <li><strong>Chat Data:</strong> Messages, queries, and interactions with our AI agents</li>
              <li><strong>Support Communications:</strong> Information provided when contacting our support team</li>
              <li><strong>Configuration Data:</strong> Settings, preferences, and customizations for your AI agents</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Information Collected Automatically</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Usage Data:</strong> How you interact with our Services, features used, time spent</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Log Data:</strong> Server logs, error reports, API calls, response times</li>
              <li><strong>Cookies and Tracking:</strong> See our Cookie Policy for details</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Information from Third Parties</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Integration Data:</strong> Information from connected CRM, helpdesk, or other business systems</li>
              <li><strong>Payment Information:</strong> Billing data from payment processors (we do not store payment card details)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: Users,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Service Provision</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Operate and maintain our AI chat agent services</li>
              <li>• Process and respond to your queries through AI agents</li>
              <li>• Provide customer support and technical assistance</li>
              <li>• Manage your account and billing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Service Improvement</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Analyze usage patterns to improve AI performance</li>
              <li>• Develop new features and functionality</li>
              <li>• Train and optimize our AI models (with anonymized data only)</li>
              <li>• Conduct research and analytics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Legal and Security</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Comply with legal obligations and regulatory requirements</li>
              <li>• Protect against fraud, abuse, and security threats</li>
              <li>• Enforce our Terms of Service</li>
              <li>• Respond to legal requests and court orders</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Security Measures</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Encryption:</strong> Data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
              <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
              <li><strong>Infrastructure:</strong> SOC 2 Type II compliant data centers</li>
              <li><strong>Monitoring:</strong> 24/7 security monitoring and threat detection</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Chat Data Protection</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• All chat conversations are encrypted end-to-end</li>
              <li>• Access limited to authorized personnel for support purposes only</li>
              <li>• Regular security audits and penetration testing</li>
              <li>• Incident response procedures in place</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: Globe,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">GDPR Rights</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700">
              <strong>Exercising Your Rights:</strong> Contact our AI chat agent to exercise any of these rights. 
              We will respond within 30 days and verify your identity as required.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "data-retention",
      title: "Data Retention",
      icon: Calendar,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Retention Periods</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Chat Data:</strong> Retained for the duration of your subscription plus 90 days</li>
              <li><strong>Account Data:</strong> Retained until account deletion plus 30 days for billing</li>
              <li><strong>Log Data:</strong> Retained for 12 months for security and optimization</li>
              <li><strong>Billing Data:</strong> Retained for 7 years to comply with tax regulations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Data Deletion</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• You may request deletion of your data at any time</li>
              <li>• Automated deletion processes remove data after retention periods</li>
              <li>• Some data may be retained in anonymized form for analytics</li>
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
            Privacy Policy
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
            <span><strong>Effective Date:</strong> {effectiveDate}</span>
            <span><strong>Last Updated:</strong> {lastUpdated}</span>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Our Data Usage Commitment</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-3">
                We are committed to protecting your privacy and being transparent about how we handle your data. 
                <strong> We primarily use only publicly available information</strong> (such as content visible on your website) 
                to provide our AI chat services.
              </p>
              <p className="text-blue-700 text-sm leading-relaxed">
                For any non-public data, we strictly comply with all applicable rules, regulations, and laws, 
                ensuring your private information remains protected and is only processed with proper authorization.
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
            <h3 className="text-xl font-semibold text-black">Questions About This Policy?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy, data practices, GDPR rights, 
            or want to exercise your privacy rights, our AI chat agent is available 24/7 to help.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI Privacy Assistant
            </p>
            <p className="text-sm text-gray-600">
              Get instant answers about data collection, privacy rights, GDPR compliance, 
              data deletion requests, or any other privacy-related questions.
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

export default PrivacyPolicy;