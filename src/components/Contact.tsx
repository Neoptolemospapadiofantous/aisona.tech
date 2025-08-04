'use client'

import { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Zap,
  Globe,
  Users,
  HeadphonesIcon,
  X,
  HelpCircle
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMethod, setHoveredMethod] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  // Pre-defined particle data to avoid hydration mismatches
  const particleData = [
    { left: 13.7, top: 62.4, delay: 1.8, duration: 4.6 },
    { left: 78.9, top: 29.1, delay: 2.3, duration: 5.2 },
    { left: 45.2, top: 87.6, delay: 0.7, duration: 3.9 },
    { left: 91.6, top: 41.8, delay: 3.1, duration: 4.3 },
    { left: 27.3, top: 16.5, delay: 1.4, duration: 5.7 },
    { left: 64.8, top: 73.2, delay: 2.9, duration: 3.6 },
    { left: 38.1, top: 52.9, delay: 0.5, duration: 4.8 },
    { left: 82.4, top: 18.7, delay: 3.6, duration: 5.1 },
    { left: 56.7, top: 94.3, delay: 1.2, duration: 4.2 },
    { left: 19.9, top: 37.6, delay: 2.7, duration: 3.8 },
    { left: 73.5, top: 81.4, delay: 0.9, duration: 5.4 },
    { left: 42.8, top: 24.1, delay: 3.3, duration: 4.7 },
    { left: 87.1, top: 69.8, delay: 1.6, duration: 3.5 },
    { left: 31.4, top: 46.3, delay: 2.5, duration: 5.8 },
    { left: 95.2, top: 12.7, delay: 0.3, duration: 4.1 },
    { left: 68.6, top: 85.9, delay: 3.8, duration: 5.3 },
    { left: 14.3, top: 58.2, delay: 1.1, duration: 4.4 },
    { left: 79.7, top: 33.5, delay: 2.8, duration: 3.7 },
    { left: 51.9, top: 91.6, delay: 0.6, duration: 5.6 },
    { left: 25.6, top: 75.1, delay: 3.4, duration: 4.9 },
    { left: 84.3, top: 19.8, delay: 1.9, duration: 3.3 },
    { left: 47.1, top: 64.7, delay: 2.1, duration: 5.2 },
    { left: 92.8, top: 42.4, delay: 0.8, duration: 4.5 },
    { left: 36.5, top: 88.1, delay: 3.7, duration: 3.9 },
    { left: 71.2, top: 27.9, delay: 1.5, duration: 4.8 },
    { left: 18.7, top: 96.3, delay: 2.6, duration: 5.5 },
    { left: 63.4, top: 35.6, delay: 0.4, duration: 4.2 },
    { left: 89.1, top: 78.8, delay: 3.2, duration: 3.4 },
    { left: 52.8, top: 21.3, delay: 1.7, duration: 5.1 },
    { left: 29.5, top: 67.4, delay: 2.4, duration: 4.6 }
  ];

  useEffect(() => {
    setParticlesReady(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleScheduleDemo = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const hideToast = () => {
    setShowToast(false);
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "AI Chat Agent",
      description: "Get instant answers 24/7",
      action: "Chat with our AI assistant available on every page",
      highlight: true,
      available: "Available 24/7",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Comprehensive assistance for all inquiries",
      action: "support@aisona.tech",
      href: "mailto:support@aisona.tech",
      available: "Response within 24 hours",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct line for urgent matters",
      action: "+357 (97) 888-064",
      href: "tel:+35797888064",
      available: "Mon-Fri, 9AM-6PM CET",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: MapPin,
      title: "Our Location",
      description: "Visit us in Limassol, Cyprus",
      action: "37 Evagora Palikaridi, Limassol, Cyprus",
      href: "https://www.google.com/maps/place/Limassol,+Cyprus/@34.6980579,32.9658279,12.49z",
      available: "By appointment only",
      gradient: "from-blue-700 to-blue-800"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM CET" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM CET" },
    { day: "Sunday", hours: "Closed" },
    { day: "AI Chat Agent", hours: "Available 24/7" }
  ];

  const whyChooseUs = [
    {
      icon: ArrowRight,
      title: "5-Day Implementation",
      description: "Get your AI solution up and running in just 5 days"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 AI Support",
      description: "Our AI agent never sleeps, always ready to help"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated AI specialists for your success"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving businesses worldwide with local expertise"
    }
  ];

  return (
    <section 
      id="contact-section"
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Background Elements - Matching Services */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-30 animate-pulse" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-100 to-blue-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: '4s' }}
        />

        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Particles - Only render after hydration */}
        {particlesReady && particleData.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70 animate-bounce"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 pt-32 relative z-10">
        {/* Header - Enhanced */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
              Get in Touch
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Our team of experts is standing by to answer questions, 
            provide demos, and help you get started with intelligent automation solutions.
          </p>
        </div>

        {/* AI Chat Agent Highlight - Enhanced */}
        <div className={`mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto transition-all duration-500 hover:shadow-3xl hover:scale-105 group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-black transition-all duration-300 group-hover:text-blue-700">
                  Instant Support Available
                </h2>
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto transition-colors duration-300 group-hover:text-gray-700">
                Our AI-powered chat agent is available 24/7 to answer questions about our services, 
                pricing, technical requirements, and help you get started immediately.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                <div className="text-blue-600 font-medium flex items-center justify-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse block"></span>
                  💬 Look for the chat widget on the bottom right of any page
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid - Enhanced */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl border transition-all duration-700 transform cursor-pointer relative overflow-hidden ${
                hoveredMethod === index
                  ? 'bg-white border-blue-300 border-2 shadow-2xl scale-105'
                  : 'bg-white border-gray-200 hover:shadow-2xl hover:border-blue-200 hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredMethod(index)}
              onMouseLeave={() => setHoveredMethod(null)}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.gradient} flex items-center justify-center mb-4 shadow-2xl transition-all duration-500 ${
                  hoveredMethod === index ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                <method.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className={`text-lg font-semibold mb-2 transition-all duration-500 ${
                  hoveredMethod === index 
                    ? 'text-blue-700' 
                    : 'text-black group-hover:text-blue-700'
                }`}>
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 transition-colors duration-300 group-hover:text-gray-700">
                {method.description}
              </p>
              
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm block mb-3 break-all transition-colors duration-300"
                >
                  {method.action}
                </a>
              ) : (
                <p className="text-blue-600 font-medium text-sm mb-3">{method.action}</p>
              )}
              
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {method.available}
              </div>
            </div>
          ))}
        </div>

        {/* Business Information - Enhanced */}
        <div className="max-w-4xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className={`text-sm ${schedule.day === 'AI Chat Agent' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us - Enhanced */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Why Choose aisona.tech?
              </h3>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                      <item.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-black transition-colors duration-300 group-hover:text-blue-700">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Matching Services */}
        <div className={`text-center mt-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
             style={{ animationDelay: '1s' }}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto transition-all duration-500 hover:shadow-3xl hover:scale-105 group relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-black transition-all duration-300 group-hover:text-blue-700">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg transition-colors duration-300 group-hover:text-gray-700">
                Join over 1,000+ businesses already using our AI solutions. Let&apos;s discuss how we can help transform your operations and customer experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleScheduleDemo}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                >
                  <MessageSquare className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Schedule Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-4 bg-white border border-blue-300 rounded-lg shadow-2xl p-4 max-w-sm z-50 transition-all duration-300 ease-in-out">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <HelpCircle className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-black mb-1">Ready to get started?</p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-black">Talk to our agent on the bottom right to schedule your demo</p>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center animate-bounce ml-2">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            <button 
              onClick={hideToast}
              className="text-black hover:text-blue-700 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;