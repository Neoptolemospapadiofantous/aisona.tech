'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Brain, MessageSquare, BarChart3, X, HelpCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [particlesReady, setParticlesReady] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isClosing, setIsClosing] = useState(false);

  const TOAST_DURATION = 6000; // 6 seconds
  
  // Pre-defined particle data to avoid hydration mismatches
  const particleData = [
    { left: 15.5, top: 25.3, delay: 0.5, duration: 4.2 },
    { left: 78.2, top: 65.8, delay: 1.8, duration: 3.7 },
    { left: 33.1, top: 12.4, delay: 2.3, duration: 5.1 },
    { left: 89.7, top: 88.2, delay: 0.9, duration: 3.4 },
    { left: 42.6, top: 45.7, delay: 3.1, duration: 4.8 },
    { left: 67.3, top: 23.9, delay: 1.2, duration: 3.9 },
    { left: 21.8, top: 76.4, delay: 2.7, duration: 4.3 },
    { left: 95.2, top: 34.6, delay: 0.3, duration: 5.2 },
    { left: 8.4, top: 91.1, delay: 2.9, duration: 3.6 },
    { left: 56.7, top: 18.3, delay: 1.6, duration: 4.7 },
    { left: 74.9, top: 67.8, delay: 3.4, duration: 3.8 },
    { left: 29.3, top: 52.1, delay: 0.7, duration: 4.9 },
    { left: 83.6, top: 39.7, delay: 2.1, duration: 3.3 },
    { left: 46.2, top: 84.5, delay: 1.4, duration: 5.6 },
    { left: 12.8, top: 28.9, delay: 3.8, duration: 4.1 },
    { left: 91.4, top: 73.2, delay: 0.1, duration: 3.7 },
    { left: 37.5, top: 16.6, delay: 2.5, duration: 4.4 },
    { left: 64.1, top: 95.8, delay: 1.7, duration: 5.3 },
    { left: 18.7, top: 41.3, delay: 3.2, duration: 3.9 },
    { left: 76.3, top: 58.7, delay: 0.6, duration: 4.6 },
    { left: 52.9, top: 22.4, delay: 2.8, duration: 3.5 },
    { left: 87.1, top: 79.6, delay: 1.3, duration: 4.8 },
    { left: 25.6, top: 47.9, delay: 3.5, duration: 4.2 },
    { left: 68.8, top: 13.7, delay: 0.8, duration: 5.1 },
    { left: 41.4, top: 86.3, delay: 2.4, duration: 3.6 },
    { left: 94.7, top: 31.8, delay: 1.9, duration: 4.7 },
    { left: 16.2, top: 64.2, delay: 3.7, duration: 3.8 },
    { left: 73.5, top: 49.5, delay: 0.4, duration: 4.9 },
    { left: 59.8, top: 17.1, delay: 2.6, duration: 5.4 },
    { left: 35.1, top: 92.4, delay: 1.1, duration: 4.3 }
  ];

  useEffect(() => {
    setIsVisible(true);
    setParticlesReady(true);
    
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
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

  const handleStartTrial = () => {
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

const demoChats = [
  {
    id: 1,
    messages: [
      { type: 'user', text: 'Hi, I need help with my order status' },
      { type: 'ai', text: 'I\'d be happy to help! Could you provide your order number?' },
      { type: 'user', text: 'It\'s #ORD-12345' },
      { type: 'ai', text: 'Perfect! Your order shipped yesterday and arrives Friday. Here\'s your tracking: track.example.com/12345' }
    ],
    position: { top: '12%', left: '5%' }
  },
  {
    id: 2,
    messages: [
      { type: 'user', text: 'New lead: Sarah from TechCorp inquired about enterprise plan' },
      { type: 'ai', text: 'Great! I\'ve scored this as high-priority. TechCorp fits our ideal customer profile.' },
      { type: 'user', text: 'What\'s next?' },
      { type: 'ai', text: 'Demo scheduled for Tuesday. I\'ve sent a personalized follow-up highlighting relevant features.' }
    ],
    position: { top: '35%', right: '2%' }
  },
  {
    id: 3,
    messages: [
      { type: 'user', text: 'I have a billing question about my account' },
      { type: 'ai', text: 'I can help with that. What\'s your billing question?' },
      { type: 'user', text: 'Why was I charged twice?' },
      { type: 'ai', text: 'I see the duplicate charge. I\'ve processed a full refund - it\'ll appear in 3-5 days.' }
    ],
    position: { bottom: '20%', left: '8%' }
  },
  {
    id: 4,
    messages: [
      { type: 'user', text: 'Can you process this invoice approval?' },
      { type: 'ai', text: 'Absolutely! I\'ve reviewed the $2,400 invoice against our rules.' },
      { type: 'user', text: 'Status?' },
      { type: 'ai', text: 'Approved and routed to Finance. Payment scheduled for Friday per 30-day terms.' }
    ],
    position: { top: '50%', right: '8%' }
  }
];

  const features = [
    { icon: Brain, text: 'Advanced AI Models' },
    { icon: MessageSquare, text: 'Natural Conversations' },
    { icon: BarChart3, text: 'Data Analysis' }
  ];

  const stats = [
    { number: '5+', label: 'Companies Served' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '67%', label: 'Cost Reduction' },
    { number: '5 Days', label: 'Implementation' }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-12 sm:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-50 rounded-full opacity-40 blur-3xl"></div>
        </div>

        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-5"
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

        {/* Toast Notification */}
      {showToast && (
        <div 
          className={`fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-50 transition-all duration-500 ease-out transform ${
            isClosing 
              ? 'translate-y-full opacity-0 scale-95' 
              : 'translate-y-0 opacity-100 scale-100'
          }`}
          role="alert"
          aria-live="polite"
        >
          <div 
            className="bg-white backdrop-blur-sm border border-blue-200 rounded-2xl shadow-2xl p-4 sm:p-5 group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 rounded-2xl"></div>
            
            <div className="absolute top-0 left-0 h-1 bg-blue-600 rounded-t-2xl transition-all duration-100 ease-linear"
                 style={{ width: `${progress}%` }}>
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse"></div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 relative z-10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-bold text-black group-hover:text-blue-600 transition-colors duration-200">
                    Ready to get started?
                  </h4>
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 animate-pulse" />
                </div>
                
                <p className="text-xs text-black mb-2 sm:mb-3 leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                  Use our AI agent in the bottom right corner to schedule your personalized demo
                </p>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="text-gray-400 hover:text-black transition-all duration-200 hover:bg-gray-100 rounded-lg p-1 group/close min-w-[32px] min-h-[32px] flex items-center justify-center"
                aria-label="Close notification"
              >
                <X className="w-4 h-4 group-hover/close:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      )}
      
        {/* Demo Chat Windows - Hidden on mobile for space */}
        <div className="hidden xl:block">
          {demoChats.map((chat, index) => (
            <div
              key={chat.id}
              className={`absolute w-80 h-72 transition-all duration-1000 ${
                currentDemo === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={chat.position}
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-2xl h-full flex flex-col overflow-hidden hover:shadow-3xl transition-all duration-300">
                
                {/* Header */}
                <div className="flex-shrink-0 bg-gradient-to-r from-blue-50 to-white border-b border-gray-200 p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                    <span className="text-xs text-black font-medium">AI Assistant • Online</span>
                    <div className="ml-auto flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-2 h-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                  {chat.messages.map((message, msgIndex) => (
                    <div
                      key={msgIndex}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[85%]`}>
                        {message.type === 'ai' && (
                          <div className="w-5 h-5 bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                            <Brain className="w-2 h-2 text-blue-600" />
                          </div>
                        )}
                        <div
                          className={`p-2 rounded-lg text-xs leading-relaxed shadow-lg transform hover:scale-105 transition-transform ${
                            message.type === 'user'
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-sm'
                              : 'bg-gradient-to-r from-gray-50 to-white text-black border border-gray-200 rounded-bl-sm'
                          }`}
                        >
                          {message.text}
                        </div>
                        {message.type === 'user' && (
                          <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                            <span className="text-white text-xs font-semibold">U</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="flex-shrink-0 bg-gradient-to-r from-white to-blue-50 border-t border-gray-200 p-3">
                  {currentDemo === index && (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-full flex items-center justify-center shadow-lg">
                        <Brain className="w-2 h-2 text-blue-600" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">AI is analyzing...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <div className={`transition-all duration-1000 max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-gray-900">with AI Intelligence</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Harness the power of cutting-edge artificial intelligence to automate workflows, 
              generate insights, and accelerate your digital transformation journey.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 sm:px-5 py-2 sm:py-3 hover:bg-blue-50 hover:border-blue-200 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-xs sm:text-sm text-black font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
              <button 
                onClick={handleStartTrial}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg shadow-2xl min-h-[48px] sm:min-h-[56px]"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-3 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-black text-xs sm:text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              ))}
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
    </>
  );
};

export default Hero;