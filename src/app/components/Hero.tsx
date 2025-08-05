'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Brain, MessageSquare, BarChart3 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [particlesReady, setParticlesReady] = useState(false);
  
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
    // Set particles ready after component mounts to avoid hydration issues
    setParticlesReady(true);
    
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const demoChats = [
    {
      id: 1,
      messages: [
        { type: 'user', text: 'Our Q3 revenue was $2.3M but customer churn increased 15%. What should we focus on?' },
        { type: 'ai', text: 'Based on the revenue growth vs. churn trend, I recommend prioritizing customer success initiatives. The data suggests you\'re acquiring customers faster than you\'re losing them, but improving retention could boost your growth rate by an estimated 23-30%.' },
        { type: 'user', text: 'What specific actions would have the biggest impact?' },
        { type: 'ai', text: 'Focus on accounts with $50K+ ARR first - they represent 60% of your churn risk but only 12% of your customer base. I can create a retention playbook for your CS team.' },
        { type: 'user', text: 'Can you draft that playbook for me?' },
        { type: 'ai', text: 'Absolutely! I\'ll create a comprehensive retention playbook targeting high-value accounts. It will include early warning indicators, intervention strategies, and success metrics to help your team proactively address churn risks.' }
      ],
      position: { top: '12%', left: '5%' }
    },
    {
      id: 2,
      messages: [
        { type: 'user', text: 'I need to write a follow-up email to a client who went silent after our pricing discussion' },
        { type: 'ai', text: 'I\'ll help you craft a thoughtful follow-up. What was their main concern during the pricing discussion?' },
        { type: 'user', text: 'They felt our enterprise plan was too expensive compared to competitors' },
        { type: 'ai', text: 'Here\'s a strategic approach: acknowledge their concern, provide value-focused context, and offer a consultation to discuss ROI. Would you like me to draft something that addresses their price sensitivity while reinforcing your unique value proposition?' },
        { type: 'user', text: 'Yes, please draft that email' },
        { type: 'ai', text: 'Perfect! I\'ll create an email that opens with empathy, presents a value-based framework for comparison, and includes a soft call-to-action for a ROI discussion. This approach often re-engages price-sensitive prospects by shifting focus from cost to value.' }
      ],
      position: { top: '35%', right: '2%' }
    },
    {
      id: 3,
      messages: [
        { type: 'user', text: 'This React component is causing memory leaks. Can you help debug it?' },
        { type: 'ai', text: 'I\'d be happy to help! Can you share the component code? Memory leaks in React usually stem from uncleared intervals, event listeners, or useEffect cleanup issues.' },
        { type: 'user', text: 'It\'s a dashboard component with real-time data updates every 2 seconds' },
        { type: 'ai', text: 'Ah, likely an interval or WebSocket connection that\'s not being cleaned up when the component unmounts. Make sure you\'re returning a cleanup function from your useEffect that clears the interval or closes the connection.' },
        { type: 'user', text: 'Here\'s the component code...' },
        { type: 'ai', text: 'I can see the issue! You\'re missing the cleanup function in your useEffect. Add a return statement that calls clearInterval(intervalId) to prevent the memory leak. I\'ll also suggest some optimization patterns for better performance.' }
      ],
      position: { bottom: '20%', left: '8%' }
    },
    {
      id: 4,
      messages: [
        { type: 'user', text: 'Can you analyze the sentiment of our latest product launch feedback?' },
        { type: 'ai', text: 'I\'ve processed 847 customer responses. Overall sentiment is 72% positive, 18% neutral, 10% negative. The main positive themes are "intuitive interface" and "faster workflow". Concerns center around "learning curve" and "missing integrations".' },
        { type: 'user', text: 'What should our product team prioritize?' },
        { type: 'ai', text: 'I recommend creating onboarding tutorials to address the learning curve (mentioned in 65% of negative feedback) and prioritizing Slack/Teams integrations (requested by 38% of users). These changes could potentially shift sentiment from 72% to 85% positive.' },
        { type: 'user', text: 'Can you create a detailed action plan?' },
        { type: 'ai', text: 'Certainly! I\'ll create a prioritized roadmap with timeline estimates, resource requirements, and expected impact metrics. This will help your product team focus on the highest-value improvements first.' }
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
    { number: '10K+', label: 'API Calls Daily' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '5', label: 'Countries Served' },
    { number: '50ms', label: 'Avg Response Time' }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-30 animate-pulse"
          />
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

        {/* Fixed Header/Footer Demo Chat Windows */}
        {demoChats.map((chat, index) => (
          <div
            key={chat.id}
            className={`absolute w-96 h-80 transition-all duration-1000 ${
              currentDemo === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } hidden xl:block`}
            style={chat.position}
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-2xl h-full flex flex-col overflow-hidden">
              
              {/* Fixed Header */}
              <div className="flex-shrink-0 bg-gradient-to-r from-blue-50 to-white border-b border-gray-200 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-xs text-gray-600 font-medium">AI Assistant • Online</span>
                  <div className="ml-auto flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-3 h-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Scrollable Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chat.messages.map((message, msgIndex) => (
                  <div
                    key={msgIndex}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[85%]`}>
                      {message.type === 'ai' && (
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <Brain className="w-3 h-3 text-blue-600" />
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-lg text-sm leading-relaxed shadow-lg transform hover:scale-105 transition-transform ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-sm'
                            : 'bg-gradient-to-r from-gray-50 to-white text-gray-700 border border-gray-200 rounded-bl-sm'
                        }`}
                      >
                        {message.text}
                      </div>
                      {message.type === 'user' && (
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <span className="text-white text-xs font-semibold">U</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Fixed Footer */}
              <div className="flex-shrink-0 bg-gradient-to-r from-white to-blue-50 border-t border-gray-200 p-4">
                {currentDemo === index && (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-full flex items-center justify-center shadow-lg">
                      <Brain className="w-3 h-3 text-blue-600" />
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
                    <div className="ml-auto">
                      <button className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        Send message
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <div className={`transition-all duration-1000 max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-black">with AI Intelligence</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Harness the power of cutting-edge artificial intelligence to automate workflows, 
              generate insights, and accelerate your digital transformation journey.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 hover:bg-blue-50 hover:border-blue-200 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <feature.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 text-lg shadow-2xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 text-lg shadow-xl">
                <Zap className="w-5 h-5" />
                View Live Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;