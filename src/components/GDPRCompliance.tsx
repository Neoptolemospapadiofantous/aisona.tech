import { Shield, Users, Eye, Lock, FileText, Globe, Download, Trash2, Edit3, AlertCircle, MessageSquare } from 'lucide-react';

const GDPRCompliance = () => {
  const lastUpdated = "December 1, 2024";

  const gdprPrinciples = [
    {
      principle: "Lawfulness, Fairness, and Transparency",
      icon: Shield,
      description: "We process personal data lawfully, fairly, and in a transparent manner.",
      implementation: [
        "Clear privacy notices and consent mechanisms",
        "Transparent data processing purposes",
        "Legal basis clearly identified for each processing activity",
        "Regular compliance audits and assessments"
      ]
    },
    {
      principle: "Purpose Limitation",
      icon: Eye,
      description: "Personal data is collected for specified, explicit, and legitimate purposes.",
      implementation: [
        "Data collected only for stated AI service purposes",
        "No further processing incompatible with original purpose",
        "Clear communication of data use in privacy notices",
        "Regular review of processing purposes"
      ]
    },
    {
      principle: "Data Minimization",
      icon: Users,
      description: "We collect and process only the minimum data necessary for our purposes.",
      implementation: [
        "Data collection limited to service requirements",
        "Regular data audits to eliminate unnecessary data",
        "Automated data retention and deletion policies",
        "Privacy by design in system architecture"
      ]
    },
    {
      principle: "Accuracy",
      icon: Edit3,
      description: "Personal data is kept accurate and up to date.",
      implementation: [
        "Mechanisms for data subjects to update information",
        "Regular data quality checks and validation",
        "Prompt correction of inaccurate data",
        "User account self-service data management"
      ]
    },
    {
      principle: "Storage Limitation",
      icon: FileText,
      description: "Data is kept only as long as necessary for the processing purposes.",
      implementation: [
        "Automated data retention schedules",
        "Regular deletion of expired data",
        "Clear retention periods for different data types",
        "Secure data destruction procedures"
      ]
    },
    {
      principle: "Integrity and Confidentiality",
      icon: Lock,
      description: "Data is processed securely with appropriate technical and organizational measures.",
      implementation: [
        "End-to-end encryption for all data transmission",
        "Advanced access controls and authentication",
        "Regular security testing and vulnerability assessments",
        "Incident response and breach notification procedures"
      ]
    }
  ];

  const dataSubjectRights = [
    {
      right: "Right of Access",
      icon: Eye,
      description: "Request a copy of your personal data we hold",
      process: "Submit request via our AI chat agent",
      timeframe: "Within 30 days",
      fee: "Free (additional copies may incur reasonable fees)"
    },
    {
      right: "Right to Rectification",
      icon: Edit3,
      description: "Correct inaccurate or incomplete personal data",
      process: "Update through account settings or chat agent",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Erasure",
      icon: Trash2,
      description: "Request deletion of your personal data",
      process: "Submit deletion request via chat agent with verification",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Data Portability",
      icon: Download,
      description: "Receive your data in a structured, machine-readable format",
      process: "Request data export through chat agent",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Restrict Processing",
      icon: Lock,
      description: "Limit how we process your personal data",
      process: "Submit restriction request via chat agent with justification",
      timeframe: "Within 30 days",
      fee: "Free"
    },
    {
      right: "Right to Object",
      icon: Shield,
      description: "Object to processing based on legitimate interests",
      process: "Submit objection via chat agent with reasons",
      timeframe: "Within 30 days",
      fee: "Free"
    }
  ];

  const legalBases = [
    {
      basis: "Contract Performance",
      description: "Processing necessary to provide our AI chat services",
      examples: ["Account management", "Service delivery", "Technical support", "Billing and payments"]
    },
    {
      basis: "Legitimate Interests",
      description: "Processing necessary for our legitimate business interests",
      examples: ["Service improvement", "Security monitoring", "Fraud prevention", "Analytics"]
    },
    {
      basis: "Legal Compliance",
      description: "Processing required by applicable laws and regulations",
      examples: ["Tax obligations", "Regulatory reporting", "Law enforcement requests", "Audit requirements"]
    },
    {
      basis: "Consent",
      description: "Processing based on your explicit consent",
      examples: ["Marketing communications", "Optional analytics", "Third-party integrations", "Research participation"]
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
            aisona.tech is committed to full compliance with the General Data Protection Regulation (GDPR) 
            and protecting the privacy rights of all individuals in the European Union.
          </p>
        </div>

        {/* GDPR Overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Our GDPR Commitment & Data Sources</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that 
                applies to organizations processing personal data of EU residents. We have implemented 
                comprehensive measures to ensure full compliance.
              </p>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                <strong>Data Source Policy:</strong> Our AI services primarily utilize publicly available information 
                (such as content on your website or public databases). For any private or personal data, 
                we maintain strict compliance with GDPR and all applicable data protection laws.
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
          <h2 className="text-2xl font-bold text-black mb-6">GDPR Principles We Follow</h2>
          <div className="space-y-6">
            {gdprPrinciples.map((principle, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-2">{principle.principle}</h3>
                    <p className="text-gray-600 mb-4">{principle.description}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Our Implementation:</h4>
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
            As a data subject, you have specific rights regarding your personal data. We make it easy for you to exercise these rights:
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
                <h4 className="font-semibold text-blue-900 mb-1">How to Exercise Your Rights</h4>
                <p className="text-blue-700 text-sm">
                  To exercise any of these rights, simply chat with our AI assistant available 24/7 on our website. 
                  We will verify your identity and respond within 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Legal Basis for Processing</h2>
          <p className="text-gray-600 mb-6">
            Under GDPR, we must have a legal basis for processing your personal data. Here are the legal bases we rely on:
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
              Our services operate globally, which may require transferring your personal data outside the EEA. 
              We ensure adequate protection through:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-black mb-3">Safeguards We Use:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Standard Contractual Clauses (SCCs)</li>
                  <li>• Adequacy decisions by the European Commission</li>
                  <li>• Additional technical and organizational measures</li>
                  <li>• Regular compliance monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-3">Transfer Recipients:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud service providers (AWS, Google Cloud)</li>
                  <li>• Customer support tools</li>
                  <li>• Analytics services</li>
                  <li>• Payment processors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Breach Procedures */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Data Breach Procedures</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Our Breach Response Process</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">Detection & Assessment</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• 24/7 monitoring systems</li>
                      <li>• Immediate incident assessment</li>
                      <li>• Risk evaluation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">Notification</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• Supervisory authority within 72 hours</li>
                      <li>• Data subjects if high risk</li>
                      <li>• Clear, transparent communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-900 mb-2">Response & Recovery</h4>
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
            <h3 className="text-xl font-semibold text-black">GDPR Questions or Requests?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            For any GDPR-related questions, data subject requests, or to exercise your privacy rights, 
            our AI chat agent is available 24/7 to assist you immediately.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI GDPR & Privacy Assistant
            </p>
            <p className="text-sm text-gray-600">
              Get instant help with data access requests, deletion requests, GDPR compliance questions, 
              data portability, or any other privacy-related concerns.
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p><strong>Supervisory Authority:</strong> Irish Data Protection Commission (DPC)</p>
            <p><strong>Business Address:</strong> 37 Evagora Palikaridi, Limassol, Cyprus</p>
            <p><strong>Phone:</strong> +357 (97) 888-064</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPRCompliance;