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
  HelpCircle
} from 'lucide-react';

const About: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  // Pre-defined particle data to avoid hydration mismatches
  const particleData = [
    { left: 44.2, top: 71.8, delay: 1.3, duration: 4.2 },
    { left: 82.6, top: 26.4, delay: 2.7, duration: 5.1 },
    { left: 19.8, top: 89.3, delay: 0.8, duration: 3.7 },
    { left: 67.1, top: 45.9, delay: 3.4, duration: 4.6 },
    { left: 35.5, top: 12.7, delay: 1.9, duration: 5.8 },
    { left: 91.3, top: 78.2, delay: 2.1, duration: 3.9 },
    { left: 58.7, top: 33.6, delay: 0.5, duration: 4.8 },
    { left: 23.9, top: 84.1, delay: 3.8, duration: 5.3 },
    { left: 76.4, top: 18.5, delay: 1.6, duration: 4.1 },
    { left: 49.1, top: 92.7, delay: 2.9, duration: 3.5 },
    { left: 87.3, top: 54.2, delay: 0.4, duration: 4.9 },
    { left: 31.8, top: 67.6, delay: 3.1, duration: 5.6 },
    { left: 74.5, top: 29.3, delay: 1.7, duration: 3.8 },
    { left: 18.2, top: 95.1, delay: 2.5, duration: 4.3 },
    { left: 63.9, top: 41.7, delay: 0.9, duration: 5.2 },
    { left: 46.6, top: 83.4, delay: 3.6, duration: 4.7 },
    { left: 92.1, top: 15.8, delay: 1.1, duration: 3.6 },
    { left: 29.7, top: 76.9, delay: 2.3, duration: 5.4 },
    { left: 71.4, top: 52.1, delay: 0.7, duration: 4.5 },
    { left: 15.9, top: 38.6, delay: 3.9, duration: 5.7 },
    { left: 84.8, top: 91.3, delay: 1.4, duration: 3.3 },
    { left: 52.3, top: 24.7, delay: 2.8, duration: 4.8 },
    { left: 37.1, top: 69.5, delay: 0.6, duration: 5.1 },
    { left: 79.6, top: 47.2, delay: 3.5, duration: 4.4 },
    { left: 26.4, top: 85.9, delay: 1.8, duration: 3.9 },
    { left: 95.7, top: 31.1, delay: 2.6, duration: 5.3 },
    { left: 41.9, top: 74.8, delay: 0.3, duration: 4.1 },
    { left: 68.2, top: 19.4, delay: 3.2, duration: 4.6 },
    { left: 33.6, top: 96.7, delay: 1.5, duration: 5.8 },
    { left: 86.1, top: 43.3, delay: 2.4, duration: 3.7 }
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

    const section = document.getElementById('about-section');
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

  const services = [
    {
      icon: Headphones,
      title: "AI Customer Support",
      description: "24/7 AI-powered customer support that provides instant, accurate responses, escalates complex issues to humans when needed, and learns from every interaction to improve over time.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "AI Lead Generation",
      description: "Smart lead qualification and nurturing systems that engage prospects, identify high-value opportunities, and guide potential customers through your sales funnel with precision.",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Ticket,
      title: "Smart Ticketing System",
      description: "Automated ticket routing, priority classification, and resolution tracking that ensures no customer inquiry falls through the cracks while maintaining high service standards.",
      gradient: "from-blue-400 to-blue-500"
    }
  ];

  const missionPoints = [
    {
      icon: Brain,
      title: "Intelligent",
      description: "Our AI solutions learn and adapt to your business needs and customer preferences continuously",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Scalable",
      description: "Handle thousands of interactions simultaneously without compromising quality or performance",
      color: "blue"
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Designed to enhance human work, not replace it, with seamless handoff capabilities",
      color: "blue"
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
      description: "Average 99% faster response time and 97% customer satisfaction rate across all implementations"
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

  return (
    <div id="about-section" className="min-h-screen bg-white relative overflow-hidden">
      {/* Advanced Background Elements - Matching Services */}
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

      {/* Enhanced Toast Notification */}
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
      
      {/* Hero Section - Matching Services Style */}
      <section className="py-20 px-4 relative z-10 pt-32">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              aisona.tech
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Revolutionizing Business Operations with Intelligent AI Agent Solutions that transform 
            how businesses handle customer interactions, generate leads, and manage support operations.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our cutting-edge technology automates complex workflows while maintaining the human touch your customers expect.
          </p>
        </div>
      </section>

      {/* What We Do Section - Enhanced like Services */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                What We
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Build & Deliver
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade AI solutions that work around the clock for your business, 
              delivering measurable results from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl border transition-all duration-700 transform cursor-pointer relative overflow-hidden ${
                    hoveredService === index
                      ? 'bg-white border-blue-300 border-2 shadow-2xl scale-105'
                      : 'bg-white border-gray-200 hover:shadow-2xl hover:border-blue-200 hover:scale-105'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-2xl transition-all duration-500 ${
                        hoveredService === index ? 'scale-110' : 'group-hover:scale-110'
                      }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                          hoveredService === index 
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

                  {/* Key Benefits */}
                  <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6 transition-all duration-500 ${
                      hoveredService === index 
                        ? 'shadow-lg scale-105 bg-gradient-to-r from-blue-100 to-purple-100' 
                        : 'group-hover:shadow-lg group-hover:scale-105'
                    }`}>
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-blue-600 mb-1 transition-all duration-300 ${
                          hoveredService === index ? 'text-3xl' : 'group-hover:text-3xl'
                        }`}>
                        24/7
                      </div>
                      <div className="text-sm text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-700">
                        Always Available
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-3">
                    {[
                      "Instant response capabilities",
                      "Seamless integration support", 
                      "Continuous learning & improvement"
                    ].map((feature, featureIndex) => (
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
        </div>
      </section>

      {/* Mission Section - Enhanced Benefits Style */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Our Mission &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
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
                  className={`bg-white border border-gray-200 rounded-xl p-6 text-center transition-all duration-500 transform cursor-pointer group relative ${
                    hoveredBenefit === index ? 'scale-105 shadow-2xl border-blue-300' : 'hover:shadow-xl hover:border-blue-200'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
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
                  
                  <h3 className={`text-xl font-bold text-blue-600 mb-3 transition-all duration-300 ${
                      hoveredBenefit === index ? 'scale-105' : 'group-hover:scale-105'
                    }`}>
                    {point.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section - Enhanced */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                How We
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Make It Happen
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple implementation, powerful results in just 5 days with our proven methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Analyze & Plan",
                description: "We study your current processes, identify automation opportunities, and design custom AI solutions tailored to your specific business needs.",
                stat: "Day 1-2"
              },
              {
                step: 2,
                title: "Deploy & Integrate",
                description: "Our AI solutions seamlessly integrate with your existing systems, whether it's your CRM, help desk, or communication platforms.",
                stat: "Day 3-4"
              },
              {
                step: 3,
                title: "Learn & Optimize",
                description: "Your AI solutions continuously learn from interactions, improving their responses and becoming more effective over time through machine learning algorithms.",
                stat: "Day 5+"
              }
            ].map((item, index) => (
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
                {/* Header */}
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
                    <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-500 ${
                    hoveredStep === index 
                      ? 'shadow-lg scale-105 bg-gradient-to-r from-blue-100 to-purple-100' 
                      : 'group-hover:shadow-lg group-hover:scale-105'
                  }`}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold text-blue-600 mb-1 transition-all duration-300 ${
                        hoveredStep === index ? 'text-3xl' : 'group-hover:text-3xl'
                      }`}>
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-700">
                      Implementation Timeline
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced Benefits Style */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
               style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-blue-600 transition-transform duration-300 inline-block hover:scale-105">
                Why Choose aisona.tech?
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-700">
                Enterprise-grade solutions with proven results and dedicated support that you can track and measure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Enhanced CTA Section - Matching Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:scale-105 group relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-black transition-all duration-300 group-hover:text-blue-700">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg transition-colors duration-300 group-hover:text-gray-700">
                  Join over 1,000+ businesses already using our AI solutions to improve customer satisfaction, 
                  reduce costs, and increase revenue. Let&apos;s discuss how we can help your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleScheduleDemo}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <Users className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Schedule Demo</span>
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