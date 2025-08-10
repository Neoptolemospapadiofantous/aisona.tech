'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Minus, HelpCircle, X, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default
  const [showToast, setShowToast] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  // Pre-defined particle data to avoid hydration mismatches
  const particleData = [
    { left: 31.4, top: 67.2, delay: 2.1, duration: 4.3 },
    { left: 84.7, top: 15.8, delay: 0.7, duration: 5.1 },
    { left: 18.3, top: 92.5, delay: 3.4, duration: 3.8 },
    { left: 76.1, top: 43.9, delay: 1.5, duration: 4.7 },
    { left: 59.8, top: 28.6, delay: 2.8, duration: 3.5 },
    { left: 42.5, top: 81.3, delay: 0.3, duration: 5.6 },
    { left: 97.2, top: 36.7, delay: 3.1, duration: 4.1 },
    { left: 26.9, top: 74.4, delay: 1.8, duration: 3.9 },
    { left: 63.6, top: 19.1, delay: 2.5, duration: 4.8 },
    { left: 91.4, top: 87.8, delay: 0.9, duration: 5.3 },
    { left: 47.1, top: 52.2, delay: 3.6, duration: 3.6 },
    { left: 12.8, top: 38.9, delay: 1.2, duration: 4.4 },
    { left: 78.5, top: 64.7, delay: 2.9, duration: 5.2 },
    { left: 35.2, top: 23.4, delay: 0.6, duration: 3.7 },
    { left: 89.9, top: 95.1, delay: 3.3, duration: 4.6 },
    { left: 54.6, top: 41.8, delay: 1.7, duration: 5.4 },
    { left: 21.3, top: 76.5, delay: 2.2, duration: 4.2 },
    { left: 67.8, top: 17.2, delay: 0.4, duration: 3.8 },
    { left: 93.5, top: 59.6, delay: 3.8, duration: 5.7 },
    { left: 38.1, top: 84.3, delay: 1.4, duration: 4.9 },
    { left: 72.4, top: 29.8, delay: 2.6, duration: 3.4 },
    { left: 15.7, top: 91.2, delay: 0.8, duration: 4.5 },
    { left: 86.3, top: 47.6, delay: 3.5, duration: 5.8 },
    { left: 49.9, top: 13.9, delay: 1.1, duration: 3.3 },
    { left: 24.6, top: 68.1, delay: 2.3, duration: 4.7 },
    { left: 81.2, top: 35.4, delay: 0.5, duration: 5.1 },
    { left: 58.7, top: 79.7, delay: 3.2, duration: 3.9 },
    { left: 33.4, top: 26.3, delay: 1.6, duration: 4.8 },
    { left: 95.8, top: 83.9, delay: 2.7, duration: 5.5 },
    { left: 41.1, top: 54.6, delay: 0.2, duration: 4.1 }
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

    const section = document.getElementById('faq-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const handleScheduleDemo = () => {
    setShowToast(true);
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const hideToast = () => {
    setShowToast(false);
  };

  const faqs = [
    {
      question: "What AI services does aisona.tech offer for businesses?",
      answer: "We provide comprehensive AI solutions for businesses including automated customer service, intelligent chat agents, business process automation, data analysis and insights, workflow optimization, AI-powered support systems, lead qualification, appointment scheduling, and intelligent business operations support."
    },
    {
      question: "How long does it take to implement an AI solution in our business?",
      answer: "Implementation is remarkably fast - most of our AI solutions can be deployed in just 5 days. We understand the importance of business continuity and provide rapid deployment while ensuring seamless integration with your existing systems and minimal operational disruption."
    },
    {
      question: "Do you provide ongoing support and maintenance for AI systems?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular system updates, performance optimization, and technical support. Our team ensures your AI solutions continue to evolve with your business needs and maintain optimal performance for customer service and operations."
    },
    {
      question: "How do you ensure data security and compliance with regulations?",
      answer: "We implement enterprise-grade security measures with full compliance for GDPR, data protection regulations, and industry-specific privacy requirements. Our systems include audit trails, end-to-end encryption, secure data processing, and comprehensive privacy controls to protect your business and customer data."
    },
    {
      question: "Can your AI solutions integrate with our existing business systems and platforms?",
      answer: "Absolutely. Our AI solutions are designed to seamlessly integrate with popular business platforms including CRM systems (Salesforce, HubSpot), helpdesk platforms (Zendesk, Freshdesk), e-commerce platforms, communication tools (Slack, Microsoft Teams), and custom business applications without disrupting operations."
    },
    {
      question: "What kind of ROI can we expect from AI implementation in our business?",
      answer: "Businesses typically see 50-70% reduction in support ticket volume, 60% improvement in response times, 40% reduction in customer acquisition costs, 30% faster lead qualification, and significant improvements in operational efficiency. We provide detailed ROI projections specific to your industry and business model."
    },
    {
      question: "How do you handle sensitive business and customer data?",
      answer: "We implement enterprise-grade security with end-to-end encryption, secure data processing environments, and strict access controls. All business and customer data handling exceeds industry privacy requirements with comprehensive audit trails, secure communication protocols, and full compliance with data protection regulations."
    }
  ];

  const categories = [
    { name: "Customer Service", count: 3 },
    { name: "Business Operations", count: 2 },
    { name: "Security & Compliance", count: 2 },
    { name: "Technical Integration", count: 1 }
  ];

  return (
    <section 
      id="faq-section" 
      className="relative py-12 sm:py-20 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-30 animate-pulse" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-gray-100 to-blue-100 rounded-full opacity-20 animate-pulse"
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

        {/* Particles - Only render after hydration and hide on mobile for performance */}
        {particlesReady && (
          <div className="hidden sm:block">
            {particleData.map((particle, i) => (
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
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Got Questions?
            </span>
            <br />
            <span className="text-black">We Have Answers</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our AI business automation services, 
            data security and compliance, and how we can help transform your business operations and customer experience.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white border border-blue-200 rounded-full px-3 sm:px-4 py-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:scale-105"
            >
              <span className="text-xs sm:text-sm text-black font-medium">{category.name}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className={`bg-white border border-blue-200 rounded-xl shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                  isOpen ? 'ring-2 ring-blue-300 border-blue-300 shadow-2xl' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-300 rounded-xl min-h-[64px] sm:min-h-[auto]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-black pr-3 sm:pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-blue-600 border-blue-600 rotate-180' : 'hover:bg-blue-200'
                    }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="h-px bg-blue-200 mb-3 sm:mb-4"></div>
                    <p className="text-black leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white border border-blue-200 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Let&apos;s Talk About Your Business Project
            </h3>
            <p className="text-black mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Our AI experts are ready to discuss your specific business automation needs, 
              compliance requirements, and provide personalized recommendations for transforming your operations and customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={handleScheduleDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 min-h-[48px] flex items-center justify-center"
              >
                Schedule Demo
              </button>
              <Link 
                href="/contact"
                className="bg-white border border-blue-300 hover:border-blue-400 text-black hover:text-blue-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-center no-underline min-h-[48px] flex items-center justify-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-sm bg-white border border-blue-300 rounded-lg shadow-2xl p-4 z-50 transition-all duration-300 ease-in-out">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-black mb-1">Ready to see our AI automation in action?</p>
              <p className="text-xs text-black">Chat with our AI agent on the bottom right to schedule your demo</p>
            </div>
            <button 
              onClick={hideToast}
              className="text-black hover:text-blue-700 transition-colors duration-200 p-1 rounded hover:bg-gray-100 min-w-[32px] min-h-[32px] flex items-center justify-center"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQ;