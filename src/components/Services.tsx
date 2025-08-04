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
  HelpCircle
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

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
    { left: 52.5, top: 69.7, delay: 3.4, duration: 3.9 },
    { left: 28.2, top: 38.1, delay: 1.8, duration: 4.7 },
    { left: 86.6, top: 82.4, delay: 2.5, duration: 5.3 },
    { left: 43.9, top: 24.8, delay: 0.4, duration: 3.8 },
    { left: 71.3, top: 91.5, delay: 3.6, duration: 4.1 },
    { left: 17.7, top: 59.2, delay: 1.3, duration: 5.6 },
    { left: 95.1, top: 35.6, delay: 2.7, duration: 3.4 },
    { left: 39.4, top: 77.9, delay: 0.6, duration: 4.8 },
    { left: 64.8, top: 18.5, delay: 3.3, duration: 5.2 },
    { left: 22.6, top: 93.1, delay: 1.9, duration: 3.6 },
    { left: 88.4, top: 51.7, delay: 2.4, duration: 4.5 }
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

  const handleScheduleDemo = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const hideToast = () => {
    setShowToast(false);
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
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Instant Response Times",
      description: "Provide immediate support to customers without delays",
      stat: "< 5 seconds",
      detail: "Average response time"
    },
    {
      icon: Users,
      title: "Higher Customer Satisfaction",
      description: "Deliver consistent, personalized experiences",
      stat: "97%",
      detail: "Customer satisfaction rate"
    },
    {
      icon: Target,
      title: "Better Lead Quality",
      description: "Focus your sales team on the most promising prospects",
      stat: "5x",
      detail: "Higher conversion rates"
    },
    {
      icon: BarChart3,
      title: "Operational Efficiency",
      description: "Automate routine tasks and optimize workflows",
      stat: "60%",
      detail: "Cost reduction"
    }
  ];

  return (
    <section 
      id="services-section" 
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-30 animate-pulse" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-100 to-blue-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: '4s' }}
        />

        {/* Grid Background */}
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
              Revolutionize Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Customer Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform how you interact with customers, manage support requests, and generate leads 
            with our intelligent AI-powered platform designed for modern businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
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
                    <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6 transition-all duration-500 ${
                    activeService === index 
                      ? 'shadow-lg scale-105 bg-gradient-to-r from-blue-100 to-purple-100' 
                      : 'group-hover:shadow-lg group-hover:scale-105'
                  }`}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold text-blue-600 mb-1 transition-all duration-300 ${
                        activeService === index ? 'text-3xl' : 'group-hover:text-3xl'
                      }`}>
                      {service.stats.primary}
                    </div>
                    <div className="text-sm text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-700">
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
                      <span className="text-gray-700 font-medium text-sm transition-colors duration-300 hover:text-gray-900">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>


              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
             style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-blue-600 transition-transform duration-300 inline-block hover:scale-105">
              Measurable Business Impact
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-700">
              Our AI solutions deliver concrete results that you can track and measure from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl p-6 text-center transition-all duration-500 transform cursor-pointer group relative ${
                    hoveredBenefit === index ? 'scale-105 shadow-2xl border-blue-300' : 'hover:shadow-xl hover:border-blue-200'
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                      hoveredBenefit === index 
                        ? 'bg-gradient-to-r from-blue-200 to-purple-200 shadow-xl scale-110' 
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
                  
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
             style={{ animationDelay: '1s' }}>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto transition-all duration-500 hover:shadow-3xl hover:scale-105 group relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-black transition-all duration-300 group-hover:text-blue-700">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg transition-colors duration-300 group-hover:text-gray-700">
                Join over 1,000+ businesses already using our AI solutions to improve customer satisfaction, 
                reduce costs, and increase revenue. Let's discuss how we can help your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleScheduleDemo}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                >
                  <Bot className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Schedule Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-4 bg-white border border-blue-300 rounded-lg shadow-2xl p-4 max-w-sm z-50 transition-all duration-300 ease-in-out">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <HelpCircle className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-black mb-1">Ready to see our AI in action?</p>
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

export default Services;