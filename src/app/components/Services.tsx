'use client'

import { useState, useEffect } from 'react';
import { 
  Headphones, 
  Ticket, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Users,
  Target,
  Bot,
  BarChart3,
  X,
  HelpCircle,
  Sparkles,
  Zap,
  Shield,
  Brain
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isClosing, setIsClosing] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  const TOAST_DURATION = 6000; // 6 seconds

  // Pre-defined particle data to avoid hydration mismatches
  const particleData = [
    { left: 23.1, top: 45.2, delay: 1.2, duration: 4.5 },
    { left: 67.8, top: 19.6, delay: 2.8, duration: 3.9 },
    { left: 41.5, top: 78.3, delay: 0.5, duration: 5.2 },
    { left: 89.2, top: 32.7, delay: 3.1, duration: 4.1 },
    { left: 12.6, top: 84.9, delay: 1.7, duration: 3.6 },
    { left: 76.4, top: 56.1, delay: 2.3, duration: 4.8 },
    { left: 34.7, top: 11.4, delay: 0.9, duration: 5.7 },
    { left: 91.8, top: 73.2, delay: 3.5, duration: 3.3 },
    { left: 58.3, top: 28.6, delay: 1.1, duration: 4.6 },
    { left: 19.9, top: 95.8, delay: 2.9, duration: 3.8 },
    { left: 83.1, top: 47.5, delay: 0.3, duration: 5.1 },
    { left: 46.2, top: 16.7, delay: 3.7, duration: 4.2 },
    { left: 72.6, top: 89.1, delay: 1.4, duration: 3.5 },
    { left: 25.8, top: 63.4, delay: 2.6, duration: 4.9 },
    { left: 94.3, top: 21.9, delay: 0.8, duration: 5.4 },
    { left: 37.1, top: 76.8, delay: 3.2, duration: 3.7 },
    { left: 68.9, top: 42.3, delay: 1.6, duration: 4.3 },
    { left: 15.4, top: 87.6, delay: 2.1, duration: 5.8 },
    { left: 79.7, top: 13.2, delay: 0.7, duration: 4.4 },
    { left: 52.5, top: 69.7, delay: 3.4, duration: 3.9 }
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

    const section = document.getElementById('services-section');
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

  const handleToastClick = () => {
    console.log('Opening chat widget...');
    handleClose();
  };

  const services = [
    {
      icon: Headphones,
      title: "AI Customer Support",
      description: "Transform your customer service with intelligent AI agents that provide instant, personalized support 24/7, reducing response times and increasing satisfaction.",
      features: [
        "24/7 intelligent customer assistance",
        "Multi-language support capabilities",
        "Seamless human handoff when needed",
        "Real-time sentiment analysis",
        "Knowledge base integration",
        "Custom personality and brand voice training"
      ],
      stats: {
        primary: "90%",
        secondary: "Faster Resolution"
      }
    },
    {
      icon: Ticket,
      title: "Smart Ticketing System",
      description: "Streamline your operations with AI-powered ticket management that automatically categorizes, prioritizes, and routes issues to the right team members.",
      features: [
        "Automatic ticket categorization",
        "Intelligent priority assignment",
        "Smart routing to specialists",
        "SLA tracking and alerts",
        "Duplicate detection and merging",
        "Advanced analytics dashboard"
      ],
      stats: {
        primary: "75%",
        secondary: "Efficiency Gain"
      }
    },
    {
      icon: TrendingUp,
      title: "AI Lead Generation",
      description: "Supercharge your sales pipeline with AI-driven lead qualification and nurturing that identifies high-value prospects and converts them into customers.",
      features: [
        "Intelligent lead scoring",
        "Automated lead qualification",
        "Personalized nurturing campaigns",
        "Behavioral analysis insights",
        "CRM integration and sync",
        "Conversion optimization"
      ],
      stats: {
        primary: "3x",
        secondary: "More Qualified Leads"
      }
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate complex business workflows and processes with intelligent AI that handles repetitive tasks, approvals, and data processing with precision.",
      features: [
        "Smart workflow automation",
        "Intelligent document processing",
        "Automated approval chains",
        "Data validation and entry",
        "Integration with existing tools",
        "Custom business rule implementation"
      ],
      stats: {
        primary: "85%",
        secondary: "Task Reduction"
      }
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "We conduct a comprehensive analysis of your current customer service processes, pain points, and automation opportunities to design the perfect AI solution.",
      timeline: "Day 1-2",
      deliverables: ["Process audit", "Requirements analysis", "Custom AI strategy"]
    },
    {
      step: 2,
      title: "Setup & Integration",
      description: "Our expert team deploys and configures your AI systems, integrating seamlessly with your existing CRM, helpdesk, and communication platforms.",
      timeline: "Day 3-4", 
      deliverables: ["System deployment", "Platform integration", "Initial testing"]
    },
    {
      step: 3,
      title: "Training & Optimization",
      description: "We train your AI agents on your specific business data, optimize performance, and ensure your team is fully prepared to leverage the new capabilities.",
      timeline: "Day 5+",
      deliverables: ["AI training", "Performance optimization", "Team enablement"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Instant Response Times",
      description: "Provide immediate support to customers without delays, ensuring satisfaction and retention",
      stat: "< 5 seconds",
      detail: "Average response time"
    },
    {
      icon: Users,
      title: "Higher Customer Satisfaction",
      description: "Deliver consistent, personalized experiences that exceed customer expectations",
      stat: "97%",
      detail: "Customer satisfaction rate"
    },
    {
      icon: Target,
      title: "Better Lead Quality",
      description: "Focus your sales team on the most promising prospects with intelligent qualification",
      stat: "5x",
      detail: "Higher conversion rates"
    },
    {
      icon: BarChart3,
      title: "Operational Efficiency",
      description: "Automate routine tasks and optimize workflows to reduce costs significantly",
      stat: "67%",
      detail: "Cost reduction"
    }
  ];

  const trustIndicators = [
    { number: '5+', label: 'Businesses Served' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '5 Days', label: 'Implementation' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div id="services-section" className="min-h-screen bg-white relative overflow-hidden">
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
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10 pt-32">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            AI Services That Transform Your Business
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto leading-relaxed mb-8">
            Comprehensive AI solutions designed for modern businesses. From customer support to lead generation, 
            we deliver enterprise-grade automation that drives real results in just 5 days.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">{indicator.number}</div>
                <div className="text-sm text-black">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our AI Solutions Portfolio
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Powerful AI services that integrate seamlessly with your existing systems, 
              delivering measurable improvements in efficiency and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl border transition-all duration-700 transform cursor-pointer relative overflow-hidden ${
                    activeService === index
                      ? 'bg-white border-blue-300 border-2 shadow-2xl scale-105'
                      : 'bg-white border-gray-200 hover:shadow-2xl hover:border-blue-200 hover:scale-105'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl transition-all duration-500 ${
                        activeService === index ? 'scale-110' : 'group-hover:scale-110'
                      }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                          activeService === index 
                            ? 'text-blue-700' 
                            : 'text-black group-hover:text-blue-700'
                        }`}>
                        {service.title}
                      </h3>
                      <p className="text-black leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className={`bg-blue-50 rounded-lg p-4 mb-6 transition-all duration-500 ${
                      activeService === index 
                        ? 'shadow-lg scale-105 bg-blue-100' 
                        : 'group-hover:shadow-lg group-hover:scale-105'
                    }`}>
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-blue-600 mb-1 transition-all duration-300 ${
                          activeService === index ? 'text-3xl' : 'group-hover:text-3xl'
                        }`}>
                        {service.stats.primary}
                      </div>
                      <div className="text-sm text-black font-medium transition-colors duration-300 group-hover:text-gray-700">
                        {service.stats.secondary}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2 hover:bg-gray-50/80 hover:rounded-lg hover:p-2 hover:-m-2"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-black font-medium text-sm transition-colors duration-300 hover:text-gray-900">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              From initial consultation to full deployment, we ensure a smooth transition 
              to AI-powered operations in just 5 days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {implementationSteps.map((step, index) => (
              <div 
                key={index}
                className={`group p-8 rounded-2xl border transition-all duration-700 transform cursor-pointer relative overflow-hidden ${
                  hoveredStep === index
                    ? 'bg-white border-blue-300 border-2 shadow-2xl scale-105'
                    : 'bg-white border-gray-200 hover:shadow-2xl hover:border-blue-200 hover:scale-105'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-2xl transition-all duration-500 ${
                      hoveredStep === index ? 'scale-110' : 'group-hover:scale-110'
                    }`}>
                    {step.step}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                        hoveredStep === index 
                          ? 'text-blue-700' 
                          : 'text-black group-hover:text-blue-700'
                      }`}>
                      {step.title}
                    </h3>
                    <p className="text-black leading-relaxed transition-colors duration-300 group-hover:text-gray-700 mb-4">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className={`bg-blue-50 rounded-lg p-4 mb-4 transition-all duration-500 ${
                    hoveredStep === index 
                      ? 'shadow-lg scale-105 bg-blue-100' 
                      : 'group-hover:shadow-lg group-hover:scale-105'
                  }`}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold text-blue-600 mb-1 transition-all duration-300 ${
                        hoveredStep === index ? 'text-3xl' : 'group-hover:text-3xl'
                      }`}>
                      {step.timeline}
                    </div>
                    <div className="text-sm text-black font-medium transition-colors duration-300 group-hover:text-gray-700">
                      Implementation Timeline
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Deliverables:</h4>
                  {step.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
               style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-blue-600 transition-transform duration-300 inline-block hover:scale-105">
                Measurable Business Impact
              </h3>
              <p className="text-xl text-black max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-700">
                Our AI solutions deliver concrete results that you can track and measure from day one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white border border-gray-200 rounded-xl p-6 text-center transition-all duration-500 transform cursor-pointer group ${
                      hoveredBenefit === index ? 'scale-105 shadow-2xl border-blue-300' : 'hover:shadow-xl hover:border-blue-200'
                    }`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                        hoveredBenefit === index 
                          ? 'bg-blue-200 shadow-xl scale-110' 
                          : 'group-hover:shadow-lg group-hover:scale-110'
                      }`}>
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <div className={`text-3xl font-bold text-blue-600 mb-1 transition-all duration-300 ${
                        hoveredBenefit === index ? 'text-4xl' : 'group-hover:text-4xl'
                      }`}>
                      {benefit.stat}
                    </div>
                    
                    <div className="text-xs text-gray-500 mb-3 transition-colors duration-300 group-hover:text-gray-600">
                      {benefit.detail}
                    </div>
                    
                    <h4 className={`font-semibold text-black mb-2 transition-all duration-300 ${
                        hoveredBenefit === index ? 'text-blue-700 scale-105' : 'group-hover:text-blue-700 group-hover:scale-105'
                      }`}>
                      {benefit.title}
                    </h4>
                    
                    <p className="text-black text-sm transition-colors duration-300 group-hover:text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:scale-105 group relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-black transition-all duration-300 group-hover:text-blue-700">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-black mb-8 max-w-2xl mx-auto text-lg transition-colors duration-300 group-hover:text-gray-700">
                  Join over 5+ businesses already using our AI solutions to improve customer satisfaction, 
                  reduce costs, and increase revenue. Let&apos;s discuss how we can help your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleScheduleDemo}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <Bot className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Schedule Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(100%) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;