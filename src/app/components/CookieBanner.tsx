'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import Link from 'next/link';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
      
      // Load analytics if consented
      if (savedPreferences.analytics) {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Google Analytics 4
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-YOUR-GA4-ID';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YOUR-GA4-ID');
    `;
    document.head.appendChild(script2);
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    loadGoogleAnalytics();
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'essential') return; // Cannot disable essential cookies
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Banner */}
      <div className="relative bg-white rounded-lg shadow-xl border border-gray-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {!showPreferences ? (
          // Main Cookie Banner
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  We use cookies to enhance your experience, analyze site usage, and provide 
                  our AI chat services. Essential cookies are required for basic functionality. 
                  You can customize your preferences or accept all cookies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-sm transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Accept All Cookies
                  </button>
                  <button
                    onClick={handleAcceptEssential}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium text-sm transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="hidden sm:inline">Customize</span>
                    <span className="sm:hidden">Settings</span>
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 mt-3">
                  Learn more in our{' '}
                  <Link href="/cookie-policy" className="text-blue-600 hover:underline">
                    Cookie Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Cookie Preferences
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg font-semibold text-black">Cookie Preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {/* Essential Cookies */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg gap-3">
                <div className="flex-1">
                  <h4 className="font-medium text-black">Essential Cookies</h4>
                  <p className="text-sm text-gray-600">Required for basic website functionality</p>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-sm text-gray-500 mr-2">Always On</span>
                  <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg gap-3">
                <div className="flex-1">
                  <h4 className="font-medium text-black">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand how visitors use our site</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Marketing Cookies */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg gap-3">
                <div className="flex-1">
                  <h4 className="font-medium text-black">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">Used to deliver relevant advertisements</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
              <button
                onClick={handleSavePreferences}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-sm transition-colors flex-1 min-h-[44px] flex items-center justify-center"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg font-medium text-sm transition-colors min-h-[44px] flex items-center justify-center"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;