'use client'

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  path: string;
  description?: string;
  children?: NavItem[];
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  const TOAST_DURATION = 6000;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Toast timer effect
  useEffect(() => {
    if (showToast && !isClosing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            handleCloseToast();
            return 0;
          }
          return prev - (100 / (TOAST_DURATION / 100));
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [showToast, isClosing]);

  const isActive = (path: string) => pathname === path;

  const navItems: NavItem[] = [
    { 
      name: 'Services', 
      path: '/services',
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleBookDemo = () => {
    setShowToast(true);
    setProgress(100);
    setIsClosing(false);
  };

  const handleCloseToast = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowToast(false);
      setIsClosing(false);
      setProgress(100);
    }, 300);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src="/logo.png" 
                  alt="aisona.tech logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        item.children.some(child => isActive(child.path))
                          ? 'text-blue-700 bg-blue-50 border border-blue-200'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-blue-700 bg-blue-50 border border-blue-200'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.children && (
                    <div 
                      className={`absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-200 ${
                        activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">{child.name}</div>
                            {child.description && (
                              <div className="text-sm text-gray-500 mt-1">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={handleBookDemo}
                className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm min-h-[40px]"
              >
                Book Demo
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-gray-600 hover:text-black focus:outline-none focus:text-black p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ${
            isOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}>
            <nav className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 min-h-[48px] ${
                          item.children.some(child => isActive(child.path))
                            ? 'text-blue-700 bg-blue-50 border border-blue-200'
                            : 'text-gray-600 hover:text-black hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      <div className={`ml-4 mt-1 space-y-1 transition-all duration-200 ${
                        activeDropdown === item.name ? 'block' : 'hidden'
                      }`}>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className={`block px-3 py-2 rounded-lg text-sm transition-all duration-300 min-h-[44px] flex items-center ${
                              isActive(child.path)
                                ? 'text-blue-700 bg-blue-50'
                                : 'text-gray-600 hover:text-black hover:bg-gray-50'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 min-h-[48px] flex items-center ${
                        isActive(item.path)
                          ? 'text-blue-700 bg-blue-50 border border-blue-200'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleBookDemo}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg min-h-[48px]"
                >
                  Book Demo
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
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
                  handleCloseToast();
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
    </>
  );
}