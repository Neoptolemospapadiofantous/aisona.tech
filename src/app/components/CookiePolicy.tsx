import React from 'react';
import { Cookie, MessageSquare, Shield, ExternalLink } from 'lucide-react';

// Type definitions
interface CookieExample {
  name: string;
  purpose: string;
  duration: string;
  provider: string;
}

interface CookieCategory {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  canDisable: boolean;
  examples: CookieExample[];
}

interface ThirdPartyService {
  service: string;
  purpose: string;
  dataShared: string;
  privacyPolicy: string;
}

const CookiePolicy: React.FC = () => {
  const lastUpdated = "December 1, 2024";

  // Only the cookies you actually use
  const cookieCategories: CookieCategory[] = [
    {
      category: "Essential Cookies",
      icon: Shield,
      description: "Required for basic website and chat functionality",
      canDisable: false,
      examples: [
        {
          name: "Cookie Consent",
          purpose: "Remember your cookie preferences and consent choices",
          duration: "1 year",
          provider: "aisona.tech"
        }
      ]
    },
    {
      category: "Chat Functionality",
      icon: MessageSquare,
      description: "Enable AI chat features on our website",
      canDisable: true,
      examples: [
        {
          name: "Voiceflow Session",
          purpose: "Maintain chat conversation state and user interactions",
          duration: "Session (until chat ends)",
          provider: "Voiceflow"
        },
        {
          name: "Chat Preferences",
          purpose: "Remember chat settings and conversation history during your visit",
          duration: "24 hours",
          provider: "Voiceflow"
        }
      ]
    }
  ];

  // Only third-party services you actually use
  const thirdPartyServices: ThirdPartyService[] = [
    {
      service: "Voiceflow",
      purpose: "Powers the AI chat widget on our landing page",
      dataShared: "Chat messages, conversation flow, basic usage analytics",
      privacyPolicy: "https://www.voiceflow.com/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Cookie Policy
          </h1>
          
          <div className="text-sm text-gray-600 mb-6">
            <strong>Last Updated:</strong> {lastUpdated}
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This Cookie Policy explains how our landing page uses cookies to remember your preferences 
            and enable our AI chat functionality.
          </p>
        </div>

        {/* Scope Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Landing Page Only</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                This policy covers cookies used on our marketing website (aisona.tech) only. 
                Our main AI application may have separate cookie practices - please check within 
                the application for service-specific information.
              </p>
              <p className="text-blue-700 text-sm leading-relaxed">
                <strong>What we use cookies for:</strong> Remembering your cookie preferences and 
                enabling our AI chat widget functionality.
              </p>
            </div>
          </div>
        </div>

        {/* What Are Cookies */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <Cookie className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What Are Cookies?</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Cookies are small text files stored on your device when you visit our website. 
                We use very few cookies - mainly to remember if you&apos;ve accepted this cookie notice 
                and to make our chat widget work properly.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Your Control:</strong> You can disable cookies through your browser settings, 
                though this may affect the chat functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Cookies We Use</h2>
          <div className="space-y-6">
            {cookieCategories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">{category.category}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    category.canDisable 
                      ? 'bg-green-100 text-green-700 border-green-200' 
                      : 'bg-red-100 text-red-700 border-red-200'
                  }`}>
                    {category.canDisable ? 'Optional' : 'Required'}
                  </span>
                </div>

                <div className="space-y-4">
                  {category.examples.map((cookie, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium text-black mb-1">Cookie</h4>
                          <p className="text-gray-600 font-mono text-xs">{cookie.name}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-black mb-1">Purpose</h4>
                          <p className="text-gray-600">{cookie.purpose}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-black mb-1">Duration</h4>
                          <p className="text-gray-600">{cookie.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-black mb-1">Set By</h4>
                          <p className="text-gray-600">{cookie.provider}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Third Party Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Third-Party Service</h2>
          <p className="text-gray-600 mb-6">
            We use one third-party service that may set cookies to enable chat functionality:
          </p>
          
          <div className="space-y-4">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                      <h3 className="font-semibold text-black text-lg">{service.service}</h3>
                    </div>
                    <a 
                      href={service.privacyPolicy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 underline"
                    >
                      Privacy Policy <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">What it does</h4>
                      <p className="text-sm text-gray-600">{service.purpose}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Data handled</h4>
                      <p className="text-sm text-gray-600">{service.dataShared}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Managing Cookies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-black">Cookie Banner</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                When you first visit our site, you can choose:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                  Accept all (consent + chat functionality)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                  Essential only (consent only, no chat)
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-gray-600" />
                <h3 className="font-semibold text-black">Browser Settings</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                You can also control cookies in your browser:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  Block all cookies
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  Block third-party cookies
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  Clear existing cookies
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-900 mb-2">Impact of Blocking Cookies</h4>
                <p className="text-yellow-700 text-sm">
                  If you block cookies, our AI chat widget may not work properly or remember your conversation. 
                  The website itself will still function normally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cookie className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-semibold text-black">Questions About Cookies?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Have questions about our simple cookie usage or want to change your preferences?
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
            <p className="text-blue-700 font-medium mb-2">
              💬 Use our AI chat (if cookies enabled)
            </p>
            <p className="text-sm text-gray-600">
              Ask questions about our cookie policy or privacy practices directly through our chat widget.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p><strong>Business Address:</strong> 37 Evagora Palikaridi, Limassol, Cyprus</p>
            <p><strong>Phone:</strong> +357 (97) 888-064</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;