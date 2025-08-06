import { Cookie, BarChart3, Target, MessageSquare, Shield } from 'lucide-react';

const CookiePolicy = () => {
  const lastUpdated = "December 1, 2024";

  const cookieCategories = [
    {
      category: "Essential Cookies",
      icon: Shield,
      description: "Necessary for the website to function properly",
      canDisable: false,
      examples: [
        {
          name: "Session ID",
          purpose: "Maintain user session and login state",
          duration: "Session (deleted when browser closes)",
          provider: "aisona.tech"
        },
        {
          name: "CSRF Token",
          purpose: "Prevent cross-site request forgery attacks",
          duration: "Session",
          provider: "aisona.tech"
        },
        {
          name: "Chat State",
          purpose: "Remember chat preferences and conversation state",
          duration: "24 hours",
          provider: "Voiceflow"
        },
        {
          name: "Cookie Consent",
          purpose: "Remember your cookie preferences",
          duration: "1 year",
          provider: "aisona.tech"
        }
      ]
    },
    {
      category: "Analytics Cookies",
      icon: BarChart3,
      description: "Help us understand how visitors use our website",
      canDisable: true,
      examples: [
        {
          name: "Google Analytics (_ga)",
          purpose: "Track website usage and performance metrics",
          duration: "2 years",
          provider: "Google"
        },
        {
          name: "Google Analytics (_ga_*)",
          purpose: "Store and count page views",
          duration: "2 years",
          provider: "Google"
        }
      ]
    },
    {
      category: "Marketing Cookies",
      icon: Target,
      description: "Used to deliver relevant advertisements (optional)",
      canDisable: true,
      examples: [
        {
          name: "Facebook Pixel (_fbp)",
          purpose: "Track conversions and deliver targeted ads",
          duration: "90 days",
          provider: "Meta"
        },
        {
          name: "Facebook Click ID (_fbc)",
          purpose: "Store click ID from Facebook ads",
          duration: "90 days",
          provider: "Meta"
        }
      ]
    }
  ];

  const thirdPartyServices = [
    {
      service: "Google Analytics",
      purpose: "Website analytics and performance tracking",
      dataShared: "Usage statistics, page views, user behavior",
      privacyPolicy: "https://policies.google.com/privacy"
    },
    {
      service: "Voiceflow",
      purpose: "AI chat functionality and conversation management",
      dataShared: "Chat messages, user interactions, session data",
      privacyPolicy: "https://www.voiceflow.com/privacy"
    },
    {
      service: "Facebook Pixel",
      purpose: "Advertising effectiveness and audience building",
      dataShared: "Page visits, conversion events, device information",
      privacyPolicy: "https://www.facebook.com/privacy/policy"
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
            This Cookie Policy explains how aisona.tech uses cookies and similar technologies 
            to provide and improve our AI services.
          </p>
        </div>

        {/* What Are Cookies */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <Cookie className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">What Are Cookies?</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                Cookies are small text files stored on your device when you visit our website. 
                They help us provide a better experience by remembering your preferences and 
                understanding how you use our AI services.
              </p>
                              <p className="text-blue-700 text-sm leading-relaxed">
                <strong>Your Control:</strong> You can control cookie settings through our cookie banner 
                or your browser settings. Essential cookies are required for basic functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Types of Cookies We Use</h2>
          <div className="space-y-8">
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
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    category.canDisable 
                      ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {category.canDisable ? 'Optional' : 'Essential'}
                  </span>
                </div>

                <div className="space-y-4">
                  {category.examples.map((cookie, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium text-black">{cookie.name}</h4>
                          <p className="text-gray-600">{cookie.provider}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-black">Purpose</h4>
                          <p className="text-gray-600">{cookie.purpose}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-black">Duration</h4>
                          <p className="text-gray-600">{cookie.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-black">Provider</h4>
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
          <h2 className="text-2xl font-bold text-black mb-6">Third-Party Services</h2>
          <p className="text-gray-600 mb-6">
            We use third-party services that may set their own cookies. Here&apos;s information about these services:
          </p>
          
          <div className="space-y-4">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-semibold text-black mb-2">{service.service}</h3>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Purpose</h4>
                    <p className="text-sm text-gray-600">{service.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Data Shared</h4>
                    <p className="text-sm text-gray-600">{service.dataShared}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Privacy Policy</h4>
                    <a 
                      href={service.privacyPolicy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 underline"
                    >
                      View Policy
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Managing Your Cookies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Cookie Banner</h3>
              <p className="text-gray-600 text-sm mb-4">
                When you first visit our website, you&apos;ll see our cookie banner where you can:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Accept all cookies</li>
                <li>• Accept essential cookies only</li>
                <li>• Customize your preferences</li>
                <li>• Change settings anytime</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Browser Settings</h3>
              <p className="text-gray-600 text-sm mb-4">
                You can also control cookies through your browser:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Block all cookies</li>
                <li>• Block third-party cookies only</li>
                <li>• Delete existing cookies</li>
                <li>• Receive notifications before cookies are set</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-700 text-sm">
              <strong>Note:</strong> Disabling essential cookies will affect the functionality of our AI chat services. 
              Some features may not work properly without these cookies.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-semibold text-black">Cookie Questions?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Questions about our cookie usage, privacy settings, or want to change your preferences? 
            Our AI chat agent is available 24/7.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI Privacy Assistant
            </p>
            <p className="text-sm text-gray-600">
              Get help with cookie settings, privacy preferences, 
              or any questions about data collection.
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

export default CookiePolicy;