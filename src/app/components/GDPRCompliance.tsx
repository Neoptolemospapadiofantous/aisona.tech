import { Shield, Users, Eye, Lock, FileText, Globe, Download, Trash2, Edit3, AlertCircle, MessageSquare } from 'lucide-react';

const GDPRCompliance = () => {
  const lastUpdated = "December 1, 2024";

  const gdprPrinciples = [
    {
      principle: "Lawfulness and Transparency",
      icon: Shield,
      description: "We process personal data lawfully, fairly, and transparently.",
      implementation: [
        "Clear privacy notices and consent mechanisms",
        "Transparent data processing purposes",
        "Legal basis identified for each activity",
        "Regular compliance audits"
      ]
    },
    {
      principle: "Purpose Limitation",
      icon: Eye,
      description: "Data collected only for specified, legitimate purposes.",
      implementation: [
        "Data used only for AI service delivery",
        "Clear communication of data use",
        "No incompatible further processing",
        "Regular purpose reviews"
      ]
    },
    {
      principle: "Data Minimization",
      icon: Users,
      description: "Only minimum necessary data collected and processed.",
      implementation: [
        "Collection limited to service requirements",
        "Regular data audits",
        "Automated retention policies",
        "Privacy by design architecture"
      ]
    },
    {
      principle: "Data Accuracy",
      icon: Edit3,
      description: "Personal data kept accurate and up to date.",
      implementation: [
        "User account self-service updates",
        "Data quality validation",
        "Prompt error corrections",
        "Regular accuracy reviews"
      ]
    },
    {
      principle: "Storage Limitation",
      icon: FileText,
      description: "Data kept only as long as necessary.",
      implementation: [
        "Automated retention schedules",
        "Regular deletion of expired data",
        "Clear retention periods",
        "Secure destruction procedures"
      ]
    },
    {
      principle: "Security",
      icon: Lock,
      description: "Appropriate technical and organizational security measures.",
      implementation: [
        "End-to-end encryption",
        "Advanced access controls",
        "Security testing and assessments",
        "Incident response procedures"
      ]
    }
  ];

  const dataSubjectRights = [
    {
      right: "Right of Access",
      icon: Eye,
      description: "Request a copy of your personal data",
      process: "Submit request via AI chat agent",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Rectification",
      icon: Edit3,
      description: "Correct inaccurate or incomplete data",
      process: "Update through account or chat agent",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Erasure",
      icon: Trash2,
      description: "Request deletion of your data",
      process: "Submit deletion request via chat agent",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Data Portability",
      icon: Download,
      description: "Receive data in structured format",
      process: "Request export through chat agent",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Restrict Processing",
      icon: Lock,
      description: "Limit how we process your data",
      process: "Submit restriction request via chat agent",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Object",
      icon: Shield,
      description: "Object to processing based on legitimate interests",
      process: "Submit objection via chat agent",
      timeframe: "Within 30 days",
      fee: "Free"
    }
  ];

  const legalBases = [
    {
      basis: "Contract Performance",
      description: "Processing necessary to provide AI services",
      examples: ["Account management", "Service delivery", "Technical support", "Billing"]
    },
    {
      basis: "Legitimate Interests",
      description: "Processing for legitimate business interests",
      examples: ["Service improvement", "Security monitoring", "Analytics", "Fraud prevention"]
    },
    {
      basis: "Legal Compliance",
      description: "Processing required by law",
      examples: ["Tax obligations", "Regulatory reporting", "Legal requests", "Audit requirements"]
    },
    {
      basis: "Consent",
      description: "Processing based on explicit consent",
      examples: ["Marketing communications", "Optional features", "Research participation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            GDPR Compliance
          </h1>
          
          <div className="text-sm text-gray-600 mb-6">
            <strong>Last Updated:</strong> {lastUpdated}
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            aisona.tech is committed to full compliance with GDPR and protecting 
            the privacy rights of all individuals in the European Union.
          </p>
        </div>

        {/* GDPR Overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Our GDPR Commitment</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                We have implemented comprehensive measures to ensure full compliance with GDPR 
                for all personal data processing activities related to our AI services.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">100%</div>
                  <div className="text-blue-700">GDPR Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">30 Days</div>
                  <div className="text-blue-700">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">24/7</div>
                  <div className="text-blue-700">Data Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GDPR Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">GDPR Principles</h2>
          <div className="space-y-6">
            {gdprPrinciples.map((principle, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-2">{principle.principle}</h3>
                    <p className="text-gray-600 mb-4">{principle.description}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Implementation:</h4>
                      <ul className="space-y-1">
                        {principle.implementation.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Subject Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Your Rights Under GDPR</h2>
          <p className="text-gray-600 mb-6">
            As a data subject, you have specific rights regarding your personal data:
          </p>
          
          <div className="grid gap-4">
            {dataSubjectRights.map((right, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <right.icon className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-black">{right.right}</h3>
                      <p className="text-sm text-gray-600">{right.description}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {right.fee}
                  </span>
                </div>
                
                <div className="mt-3 grid md:grid-cols-2 gap-4 text-xs text-gray-600">
                  <div>
                    <strong>Process:</strong> {right.process}
                  </div>
                  <div>
                    <strong>Timeframe:</strong> {right.timeframe}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Exercise Your Rights</h4>
                <p className="text-blue-700 text-sm">
                  To exercise any rights, chat with our AI assistant 24/7. 
                  We verify identity and respond within 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Legal Basis for Processing</h2>
          <p className="text-gray-600 mb-6">
            Under GDPR, we must have a legal basis for processing personal data:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {legalBases.map((basis, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-black mb-2">{basis.basis}</h3>
                <p className="text-gray-600 mb-4">{basis.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {basis.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Transfers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">International Data Transfers</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-600 mb-4">
              Our services may require transferring data outside the EEA. We ensure adequate protection through:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-black mb-3">Safeguards:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Standard Contractual Clauses</li>
                  <li>• Adequacy decisions</li>
                  <li>• Technical measures</li>
                  <li>• Regular monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-3">Recipients:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud providers</li>
                  <li>• Payment processors</li>
                  <li>• Analytics services</li>
                  <li>• Support tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Breach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Data Breach Response</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Our Response Process</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">Detection</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• 24/7 monitoring</li>
                      <li>• Immediate assessment</li>
                      <li>• Risk evaluation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">Notification</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• Authority within 72 hours</li>
                      <li>• Affected individuals if high risk</li>
                      <li>• Clear communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">Recovery</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• Immediate containment</li>
                      <li>• System recovery</li>
                      <li>• Preventive measures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-semibold text-black">GDPR Questions?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            For GDPR-related questions, data requests, or to exercise privacy rights, 
            our AI chat agent is available 24/7.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI GDPR Assistant
            </p>
            <p className="text-sm text-gray-600">
              Get instant help with data requests, GDPR questions, 
              deletion requests, or privacy concerns.
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

export default GDPRCompliance;