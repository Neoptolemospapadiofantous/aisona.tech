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
            aisona.tech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered business automation services, website, and related services (collectively, the &quot;Services&quot;).
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
              <li><strong>Account Information:</strong> Company name, email address, billing details, contact information</li>
              <li><strong>Chat Conversations:</strong> Messages, queries, and interactions with our AI agents through Voiceflow</li>
              <li><strong>Business Data:</strong> Information you share for AI training and customization</li>
              <li><strong>Support Communications:</strong> Information provided when contacting our support team</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Information Collected Automatically</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Usage Data:</strong> How you interact with our Services, features used, session duration</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
              <li><strong>Chat Analytics:</strong> Conversation metrics, response times, interaction patterns</li>
              <li><strong>Cookies:</strong> See our Cookie Policy for detailed information</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Payment Information</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Payment Processing:</strong> Billing data processed through Stripe, PayPal, and JCCSmart</li>
              <li><strong>Transaction Records:</strong> Payment history, invoices, and billing preferences</li>
              <li>Note: We do not store credit card details directly</li>
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
              <li>• Operate and maintain AI automation services</li>
              <li>• Process chat conversations and provide AI responses</li>
              <li>• Deliver customer support and technical assistance</li>
              <li>• Process payments and manage billing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Service Improvement</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Analyze usage patterns to improve AI performance</li>
              <li>• Train and optimize AI models using conversation data</li>
              <li>• Develop new features and functionality</li>
              <li>• Conduct analytics and performance monitoring</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Legal and Security</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Comply with legal obligations</li>
              <li>• Protect against fraud and security threats</li>
              <li>• Enforce our Terms of Service</li>
              <li>• Respond to legal requests</li>
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
              <li><strong>Encryption:</strong> All data encrypted in transit and at rest</li>
              <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
              <li><strong>Infrastructure:</strong> SOC 2 Type II compliant hosting</li>
              <li><strong>Monitoring:</strong> 24/7 security monitoring and threat detection</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Voiceflow Integration Security</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Secure API connections for chat data</li>
              <li>• Encrypted conversation storage</li>
              <li>• Regular security audits</li>
              <li>• Access limited to authorized personnel only</li>
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
            <h4 className="text-lg font-semibold text-black mb-3">Data Protection Rights</h4>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
              <li><strong>Deletion:</strong> Request removal of your data</li>
              <li><strong>Portability:</strong> Receive data in structured format</li>
              <li><strong>Restriction:</strong> Limit data processing</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700">
              <strong>Exercise Your Rights:</strong> Contact our AI chat agent to make any data requests. 
              We respond within 30 days and verify identity as required.
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
              <li><strong>Chat Data:</strong> Stored during subscription plus 90 days</li>
              <li><strong>Account Data:</strong> Kept until deletion plus 30 days</li>
              <li><strong>Analytics Data:</strong> Retained for 12 months</li>
              <li><strong>Payment Records:</strong> 7 years for tax compliance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Data Deletion</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Request deletion anytime through our chat agent</li>
              <li>• Automatic deletion after retention periods</li>
              <li>• Some data may be anonymized for analytics</li>
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
            <h3 className="text-xl font-semibold text-black">Privacy Questions?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Questions about this Privacy Policy or want to exercise your privacy rights? 
            Our AI chat agent is available 24/7 to help.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI Privacy Assistant
            </p>
            <p className="text-sm text-gray-600">
              Get instant answers about data collection, privacy rights, 
              deletion requests, or any privacy-related questions.
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