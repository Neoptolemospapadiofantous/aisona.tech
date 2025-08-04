import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle, Key, Globe, Monitor, FileText, MessageSquare } from 'lucide-react';

const SecurityPolicy = () => {
  const lastUpdated = "December 1, 2024";

  const securityFrameworks = [
    {
      framework: "SOC 2 Type II",
      icon: Shield,
      description: "Annual third-party audits ensuring enterprise-grade security controls",
      status: "Certified",
      color: "green"
    },
    {
      framework: "ISO 27001",
      icon: FileText,
      description: "International standard for information security management systems",
      status: "Certified",
      color: "green"
    },
    {
      framework: "GDPR Compliance",
      icon: Globe,
      description: "Full compliance with European data protection regulations",
      status: "Compliant",
      color: "blue"
    },
    {
      framework: "HIPAA Ready",
      icon: Lock,
      description: "Healthcare data protection standards for medical AI applications",
      status: "Ready",
      color: "purple"
    }
  ];

  const securityMeasures = [
    {
      category: "Data Protection",
      icon: Lock,
      measures: [
        {
          name: "End-to-End Encryption",
          description: "AES-256 encryption for data at rest, TLS 1.3 for data in transit",
          implementation: "All customer data encrypted with unique keys"
        },
        {
          name: "Data Isolation",
          description: "Customer data logically separated using multi-tenant architecture",
          implementation: "Database-level isolation with role-based access controls"
        },
        {
          name: "Backup & Recovery",
          description: "Automated daily backups with point-in-time recovery",
          implementation: "99.99% data durability with cross-region replication"
        },
        {
          name: "Data Retention",
          description: "Automated data lifecycle management and secure deletion",
          implementation: "Cryptographic erasure and certified data destruction"
        }
      ]
    },
    {
      category: "Access Security",
      icon: Key,
      measures: [
        {
          name: "Multi-Factor Authentication",
          description: "Required for all user accounts and administrative access",
          implementation: "TOTP, SMS, and hardware token support"
        },
        {
          name: "Role-Based Access Control",
          description: "Principle of least privilege with granular permissions",
          implementation: "Dynamic role assignment with regular access reviews"
        },
        {
          name: "Single Sign-On (SSO)",
          description: "Enterprise SSO integration with SAML 2.0 and OAuth 2.0",
          implementation: "Supports major identity providers (Okta, Azure AD, etc.)"
        },
        {
          name: "Session Management",
          description: "Secure session handling with automatic timeout",
          implementation: "Token-based authentication with refresh mechanisms"
        }
      ]
    },
    {
      category: "Infrastructure Security",
      icon: Server,
      measures: [
        {
          name: "Cloud Security",
          description: "Enterprise-grade cloud infrastructure with 99.99% uptime SLA",
          implementation: "AWS/Google Cloud with shared responsibility model"
        },
        {
          name: "Network Security",
          description: "Advanced firewall rules and network segmentation",
          implementation: "VPC isolation, DDoS protection, and traffic monitoring"
        },
        {
          name: "Container Security",
          description: "Secure containerization with image scanning",
          implementation: "Kubernetes with security policies and runtime protection"
        },
        {
          name: "API Security",
          description: "Rate limiting, authentication, and input validation",
          implementation: "API gateways with threat detection and monitoring"
        }
      ]
    },
    {
      category: "Monitoring & Detection",
      icon: Monitor,
      measures: [
        {
          name: "24/7 Security Monitoring",
          description: "Continuous threat detection and incident response",
          implementation: "SIEM integration with automated alerting"
        },
        {
          name: "Vulnerability Management",
          description: "Regular security assessments and penetration testing",
          implementation: "Quarterly assessments by certified security firms"
        },
        {
          name: "Audit Logging",
          description: "Comprehensive logging of all system activities",
          implementation: "Immutable logs with 12-month retention"
        },
        {
          name: "Incident Response",
          description: "Documented procedures for security incident handling",
          implementation: "24-hour response team with escalation protocols"
        }
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: "Data Encryption",
      requirements: ["AES-256 encryption at rest", "TLS 1.3 for data in transit", "Key management with HSM"],
      status: "Implemented"
    },
    {
      standard: "Access Controls",
      requirements: ["Multi-factor authentication", "Role-based permissions", "Regular access reviews"],
      status: "Implemented"
    },
    {
      standard: "Audit & Monitoring",
      requirements: ["Comprehensive audit logs", "Real-time monitoring", "Incident response procedures"],
      status: "Implemented"
    },
    {
      standard: "Data Governance",
      requirements: ["Data classification", "Retention policies", "Secure deletion procedures"],
      status: "Implemented"
    }
  ];

  const getStatusColor = (status: string) => {
    const colorMap = {
      "Certified": "bg-green-100 text-green-700 border-green-200",
      "Compliant": "bg-blue-100 text-blue-700 border-blue-200",
      "Ready": "bg-purple-100 text-purple-700 border-purple-200",
      "Implemented": "bg-green-100 text-green-700 border-green-200"
    };
    return colorMap[status as keyof typeof colorMap] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Security & Compliance
          </h1>
          
          <div className="text-sm text-gray-600 mb-6">
            <strong>Last Updated:</strong> {lastUpdated}
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security measures protecting your data and ensuring compliance with industry standards.
          </p>
        </div>

        {/* Security Commitment */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Our Security Commitment & Data Handling</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                Security is fundamental to everything we do. We implement defense-in-depth strategies, 
                maintain industry certifications, and continuously monitor for threats to protect your data and privacy.
              </p>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                <strong>Responsible Data Usage:</strong> Our AI services primarily use publicly available data 
                (such as website content and public information). For any private or sensitive data, 
                we maintain the highest security standards and full compliance with all applicable regulations.
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">99.99%</div>
                  <div className="text-blue-700">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">24/7</div>
                  <div className="text-blue-700">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">SOC 2</div>
                  <div className="text-blue-700">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-900">Zero</div>
                  <div className="text-blue-700">Data Breaches</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Frameworks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Security Frameworks & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {securityFrameworks.map((framework, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <framework.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">{framework.framework}</h3>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(framework.status)}`}>
                    {framework.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{framework.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Comprehensive Security Measures</h2>
          <div className="space-y-8">
            {securityMeasures.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.measures.map((measure, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-black mb-2">{measure.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{measure.description}</p>
                      <div className="text-xs text-blue-600 bg-blue-50 rounded px-2 py-1">
                        {measure.implementation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Compliance Standards</h2>
          <div className="space-y-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-black">{standard.standard}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(standard.status)}`}>
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    {standard.status}
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {standard.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Incident Response Procedures</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">24/7 Incident Response</h3>
                <p className="text-red-700 text-sm">
                  Our security team maintains round-the-clock monitoring with documented procedures 
                  for rapid response to any security incidents or threats.
                </p>
              </div>
            </div>
          </div>


        </section>

        {/* Responsible Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Responsible Disclosure</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Security Research & Bug Bounty</h3>
                <p className="text-gray-600 mb-4">
                  We welcome security researchers to help us maintain the highest security standards. 
                  If you discover a security vulnerability, please report it responsibly.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Reporting Process:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Contact our AI chat agent for security reporting</li>
                      <li>• Include detailed vulnerability description</li>
                      <li>• Provide steps to reproduce</li>
                      <li>• Allow reasonable time for response</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Our Commitment:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Acknowledge receipt within 24 hours</li>
                      <li>• Provide regular status updates</li>
                      <li>• Credit researchers (if desired)</li>
                      <li>• No legal action for good faith research</li>
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
            <h3 className="text-xl font-semibold text-black">Security Questions or Concerns?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Our AI-powered chat agent is available 24/7 to address any questions about our security measures, 
            report security issues, or handle any security-related concerns.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI Security Assistant
            </p>
            <p className="text-sm text-gray-600">
              Whether you need information about our security practices, want to report a vulnerability, 
              or have compliance questions - our intelligent chat agent can help you immediately.
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

export default SecurityPolicy;