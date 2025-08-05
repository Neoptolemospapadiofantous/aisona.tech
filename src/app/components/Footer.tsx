import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "GDPR Compliance", href: "/gdpr" },
        { name: "Security", href: "/security" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, text: "support@aisona.tech", href: "mailto:support@aisona.tech", external: true },
    { icon: Phone, text: "+357 (97) 888-064", href: "tel:+35797888064", external: true },
    { icon: MapPin, text: "Limassol, Cyprus", href: "https://www.google.com/maps/place/Limassol,+Cyprus/@34.6980579,32.9658279,12.49z/data=!4m6!3m5!1s0x14e73316ac02f49d:0xdaa97f957025b012!8m2!3d34.6786322!4d33.0413055!16zL20vMGZ0MDg?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D", external: true }
  ];

  const trustBadges = [
    { name: "SOC 2 Compliant", description: "Enterprise security standards" },
    { name: "GDPR Ready", description: "Privacy regulation compliant" },
    { name: "99.9% Uptime", description: "Reliable service guarantee" },
    { name: "24/7 Support", description: "Always here to help" }
  ];

  const legalLinks = [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Trust Badges Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="grid md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-200 flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-black mb-1">{badge.name}</h4>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                </div>
                <span className="text-2xl font-bold text-black">
                  aisona.tech
                </span>
              </Link>

              <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                Empowering businesses with cutting-edge AI technology. Transform your operations 
                with our comprehensive suite of artificial intelligence services and solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                        <IconComponent className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <span className="font-medium">{contact.text}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-black font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Contact Section */}
        <div className="py-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-black">Need Help? Chat with Our AI Assistant</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our AI-powered chat agent is available 24/7 to answer questions about our services, 
              pricing, technical support, legal matters, and more.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-blue-700 font-medium text-sm">
                💬 Get instant answers to all your questions - no waiting for email responses!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {currentYear} aisona.tech. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;