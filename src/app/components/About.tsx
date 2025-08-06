'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Headphones, 
  Ticket, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Target, 
  Clock,
  X,
  ArrowRight,
  BarChart3,
  HelpCircle,
  Sparkles
} from 'lucide-react';

const About: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

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

    const section = document.getElementById('about-section');
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
      title: "Customer Support AI",
      description: "24/7 intelligent support that resolves 90% of inquiries instantly"
    },
    {
      icon: TrendingUp,
      title: "Lead Qualification",
      description: "AI-powered lead scoring that increases sales team efficiency by 3x"
    },
    {
      icon: Ticket,
      title: "Process Automation",
      description: "Smart workflow automation that reduces manual tasks by 85%"
    }
  ];

  const missionPoints = [
    {
      icon: Brain,
      title: "Intelligent",
      description: "Our AI solutions learn and adapt to your business needs and customer preferences continuously"
    },
    {
      icon: BarChart3,
      title: "Scalable",
      description: "Handle thousands of interactions simultaneously without compromising quality or performance"
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Designed to enhance human work, not replace it, with seamless handoff capabilities"
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Analyze & Plan",
      description: "We study your current processes, identify automation opportunities, and design custom AI solutions tailored to your specific business needs.",
      timeline: "Day 1-2"
    },
    {
      step: 2,
      title: "Deploy & Integrate",
      description: "Our AI solutions seamlessly integrate with your existing systems, whether it's your CRM, help desk, or communication platforms.",
      timeline: "Day 3-4"
    },
    {
      step: 3,
      title: "Learn & Optimize",
      description: "Your AI solutions continuously learn from interactions, improving their responses and becoming more effective over time through machine learning algorithms.",
      timeline: "Day 5+"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Quick Implementation",
      description: "Get your AI solutions up and running in just 5 days, not weeks or months"
    },
    {
      icon: BarChart3,
      title: "Proven Results",
      description: "Average 67% cost reduction and 97% customer satisfaction rate across all implementations"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our expert team provides ongoing support, monitoring, and optimization services"
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Every AI solution is tailored specifically to your business needs and industry requirements"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full data privacy protection and industry compliance standards"
    },
    {
      icon: Zap,
      title: "Scalable Growth",
      description: "Our solutions grow with your business, handling increased volume seamlessly without performance loss"
    }
  ];

  const companyStats = [
    { number: '5+', label: 'Companies Served' },
    { number: '67%', label: 'Avg Cost Reduction' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '5 Days', label: 'Implementation Time' }
  ];

  return (
    <div id="about-section" className="min-h-screen bg-white relative overflow-hidden">
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
      
      {/* Mission Section */}
      <section className="py-20 px-4 relative z-10 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Our Mission & Core Values
            </h2>
            <p className="text-xl text-black leading-relaxed mb-12 max-w-3xl mx-auto">
              To empower businesses with AI solutions that don&apos;t just automate tasks, but truly understand 
              and enhance customer relationships. We believe AI should amplify human capabilities, 
              not replace human connection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {missionPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl p-6 text-center transition-all duration-500 transform cursor-pointer group hover:shadow-xl hover:border-blue-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:shadow-lg group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-600 mb-3 transition-all duration-300 group-hover:scale-105">
                    {point.title}
                  </h3>
                  
                  <p className="text-black text-sm transition-colors duration-300 group-hover:text-gray-700">
                    {point.description}
                  </p>
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
              How We Make It Happen
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Simple implementation, powerful results in just 5 days with our proven methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {implementationSteps.map((item, index) => (
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
                    {item.step}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                        hoveredStep === index 
                          ? 'text-blue-700' 
                          : 'text-black group-hover:text-blue-700'
                      }`}>
                      {item.title}
                    </h3>
                    <p className="text-black leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={`bg-blue-50 rounded-lg p-4 transition-all duration-500 ${
                    hoveredStep === index 
                      ? 'shadow-lg scale-105 bg-blue-100' 
                      : 'group-hover:shadow-lg group-hover:scale-105'
                  }`}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold text-blue-600 mb-1 transition-all duration-300 ${
                        hoveredStep === index ? 'text-3xl' : 'group-hover:text-3xl'
                      }`}>
                      {item.timeline}
                    </div>
                    <div className="text-sm text-black font-medium transition-colors duration-300 group-hover:text-gray-700">
                      Implementation Timeline
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-blue-600 transition-transform duration-300 inline-block hover:scale-105">
                Why Choose aisona.tech?
              </h3>
              <p className="text-xl text-black max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-700">
                Enterprise-grade solutions with proven results and dedicated support that you can track and measure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white border border-gray-200 rounded-xl p-6 text-center transition-all duration-500 transform cursor-pointer group ${
                      hoveredBenefit === index ? 'scale-105 shadow-2xl border-blue-300' : 'hover:shadow-xl hover:border-blue-200'
                    }`}
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:scale-105 group relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-black transition-all duration-300 group-hover:text-blue-700">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-black mb-8 max-w-2xl mx-auto text-lg transition-colors duration-300 group-hover:text-gray-700">
                  Join over 5 businesses already using our AI solutions to improve customer satisfaction, 
                  reduce costs, and increase revenue. Let&apos;s discuss how we can help your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleScheduleDemo}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    <span>Schedule Demo</span>
                  </button>
                  <Link 
                    href="/services"
                    className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:scale-105 no-underline"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;