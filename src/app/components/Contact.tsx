'use client'

import { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight,
  Zap,
  Globe,
  Users,
  Headphones,
  X,
  HelpCircle,
  Sparkles,
  Shield,
  Award
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isClosing, setIsClosing] = useState(false);

  const TOAST_DURATION = 6000;

  useEffect(() => {
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

  useEffect(() => {
    if (showToast && !isClosing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            handleClose();
            return 0;
          }
          return prev - (100 / (TOAST_DURATION / 100));
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [showToast, isClosing]);

  const handleScheduleDemo = () => {
    setShowToast(true);
    setProgress(100);
    setIsClosing(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowToast(false);
      setIsClosing(false);
      setProgress(100);
    }, 300);
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat Demo",
      description: "Book a personalized 15-minute demo with our AI specialist",
      action: "Schedule Demo",
      highlight: true
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed information about our enterprise solutions",
      action: "support@aisona.tech",
      href: "mailto:support@aisona.tech"
    },
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Speak directly with our automation experts",
      action: "+357 (97) 888-064",
      href: "tel:+35797888064"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM CET", available: true },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM CET", available: true },
    { day: "Sunday", hours: "Closed", available: false },
    { day: "AI Chat Agent", hours: "Available 24/7", available: true, highlight: true }
  ];

  const whyChooseUs = [
    {
      icon: ArrowRight,
      title: "5-Day Implementation",
      description: "Get your AI solution deployed and running in just 5 business days"
    },
    {
      icon: Headphones,
      title: "24/7 AI Support",
      description: "Our intelligent chat agent provides instant support around the clock"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated AI specialists and customer success managers"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving 5+ businesses worldwide with local expertise"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and full compliance with industry standards"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Average 67% cost reduction and 97% customer satisfaction rate"
    }
  ];

  const trustSignals = [
    { label: "Companies Served", value: "5+" },
    { label: "Cost Reduction", value: "67%" },
    { label: "Customer Satisfaction", value: "97%" },
    { label: "Implementation Time", value: "5 Days" }
  ];

  return (
    <section 
      id="contact-section"
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-3xl"></div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div 
          className={`fixed bottom-6 left-6 right-6 md:left-6 md:right-auto md:max-w-sm z-50 transition-all duration-500 ease-out transform ${
            isClosing 
              ? 'translate-y-full opacity-0 scale-95' 
              : 'translate-y-0 opacity-100 scale-100'
          }`}
          role="alert"
          aria-live="polite"
        >
          <div 
            className="bg-white backdrop-blur-sm border border-blue-200 rounded-2xl shadow-2xl p-5 group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 rounded-2xl"></div>
            
            <div className="absolute top-0 left-0 h-1 bg-blue-600 rounded-t-2xl transition-all duration-100 ease-linear"
                 style={{ width: `${progress}%` }}>
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse"></div>
            </div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-bold text-black group-hover:text-blue-600 transition-colors duration-200">
                    Ready to get started?
                  </h4>
                  <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                </div>
                
                <p className="text-xs text-black mb-3 leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                  Use our AI agent in the bottom right corner to schedule your personalized demo
                </p>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="text-gray-400 hover:text-black transition-all duration-200 hover:bg-gray-100 rounded-lg p-1 group/close"
                aria-label="Close notification"
              >
                <X className="w-4 h-4 group-hover/close:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12 pt-32 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Get Started Today
          </h1>
          
          <p className="text-lg text-black max-w-2xl mx-auto leading-relaxed mb-8">
            Book a 15-minute demo to see how our AI platform can reduce your operational costs by 67%. 
            Our team will analyze your current processes and show you personalized automation opportunities.
          </p>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="text-2xl font-bold text-blue-600 mb-1">{signal.value}</div>
                <div className="text-sm text-black">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chat Agent Highlight */}
        <div className={`mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white border border-blue-200 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto transition-all duration-500 hover:shadow-3xl hover:scale-105 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-black transition-all duration-300 group-hover:text-blue-700">
                  Instant AI Support Available
                </h2>
              </div>
              <p className="text-black mb-6 max-w-2xl mx-auto transition-colors duration-300 group-hover:text-gray-700">
                Our AI-powered chat agent is available 24/7 to answer questions about our services, 
                pricing, technical requirements, and help you get started immediately.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-blue-600 font-medium flex items-center justify-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse block"></span>
                  💬 Look for the chat widget on the bottom right of any page
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:scale-105 group relative overflow-hidden ${
                method.highlight 
                  ? 'bg-blue-50 border-blue-200 shadow-lg' 
                  : 'bg-white border-gray-200 hover:border-blue-200'
              }`}
              onMouseEnter={() => setHoveredMethod(index)}
              onMouseLeave={() => setHoveredMethod(null)}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                method.highlight 
                  ? 'bg-blue-600 shadow-lg' 
                  : 'bg-blue-100 group-hover:bg-blue-200'
              } ${hoveredMethod === index ? 'scale-110 shadow-xl' : ''}`}>
                <method.icon className={`w-6 h-6 ${
                  method.highlight ? 'text-white' : 'text-blue-600'
                }`} />
              </div>
              
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {method.title}
              </h3>
              <p className="text-black text-sm mb-4 leading-relaxed">
                {method.description}
              </p>
              
              {method.href ? (
                <a
                  href={method.href}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-300 inline-flex items-center gap-2 group/link"
                >
                  {method.action}
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              ) : (
                <button 
                  onClick={handleScheduleDemo}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-sm transition-all duration-300 w-full shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  {method.action}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Business Information */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                Business Hours
              </h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className={`flex justify-between items-center py-3 px-4 rounded-lg transition-all duration-300 ${
                    schedule.highlight 
                      ? 'bg-blue-50 border border-blue-200' 
                      : 'hover:bg-gray-50'
                  }`}>
                    <span className="text-black font-medium">{schedule.day}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        schedule.highlight 
                          ? 'text-blue-600' 
                          : schedule.available 
                            ? 'text-green-600' 
                            : 'text-gray-500'
                      }`}>
                        {schedule.hours}
                      </span>
                      {schedule.available && (
                        <div className={`w-2 h-2 rounded-full ${
                          schedule.highlight ? 'bg-blue-500' : 'bg-green-500'
                        } animate-pulse`}></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                Why Choose aisona.tech?
              </h3>
              <div className="grid gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-1 transition-colors duration-300 group-hover:text-blue-700">
                        {item.title}
                      </h4>
                      <p className="text-sm text-black leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;