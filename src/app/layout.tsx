import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CookieBanner from '@/app/components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'aisona.tech - AI Business Automation Solutions',
    template: '%s | aisona.tech'
  },
  description: 'Transform your business with AI automation solutions for customer support, lead generation, and ticketing systems.',
  keywords: ['AI automation', 'business automation', 'customer support AI', 'lead generation'],
  authors: [{ name: 'aisona.tech' }],
  creator: 'aisona.tech',
  publisher: 'aisona.tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aisona.tech'),
  openGraph: {
    title: 'aisona.tech - AI Business Automation Solutions',
    description: 'Transform your business with AI automation solutions for customer support, lead generation, and ticketing systems.',
    url: 'https://aisona.tech',
    siteName: 'aisona.tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'aisona.tech - AI Business Automation Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aisona.tech - AI Business Automation Solutions',
    description: 'Transform your business with AI automation solutions for customer support, lead generation, and ticketing systems.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Essential cookies - Session management */}
        <Script
          id="essential-cookies"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Essential session cookie
              if (!document.cookie.includes('session-id')) {
                const sessionId = 'sess_' + Math.random().toString(36).substr(2, 9);
                document.cookie = 'session-id=' + sessionId + '; path=/; secure; samesite=strict';
              }
              
              // Security cookie for CSRF protection
              if (!document.cookie.includes('csrf-token')) {
                const csrfToken = 'csrf_' + Math.random().toString(36).substr(2, 16);
                document.cookie = 'csrf-token=' + csrfToken + '; path=/; secure; samesite=strict';
              }
            `,
          }}
        />
      </head>
      
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        
        {/* Cookie Consent Banner */}
        <CookieBanner />
        
        {/* Voiceflow Chat Widget with cookie consent */}
        <Script
          id="voiceflow-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Check if essential cookies are accepted before loading chat
              function initializeVoiceflow() {
                const cookieConsent = localStorage.getItem('cookie-consent');
                if (cookieConsent) {
                  const consent = JSON.parse(cookieConsent);
                  if (consent.essential) {
                    (function(d, t) {
                        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                        v.onload = function() {
                          window.voiceflow.chat.load({
                            verify: { projectID: '688e8199fc766ed341f5b6a6' },
                            url: 'https://general-runtime.voiceflow.com',
                            versionID: 'production',
                            voice: {
                              url: "https://runtime-api.voiceflow.com"
                            }
                          });
                        }
                        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
                        v.type = "text/javascript"; 
                        s.parentNode.insertBefore(v, s);
                    })(document, 'script');
                  }
                }
              }

              // Initialize immediately if consent already given, otherwise wait for consent
              initializeVoiceflow();
              
              // Listen for cookie consent changes
              window.addEventListener('storage', function(e) {
                if (e.key === 'cookie-consent') {
                  initializeVoiceflow();
                }
              });
            `,
          }}
        />

        {/* Google Analytics - Only load if analytics cookies are accepted */}
        <Script
          id="conditional-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function loadAnalytics() {
                const cookieConsent = localStorage.getItem('cookie-consent');
                if (cookieConsent) {
                  const consent = JSON.parse(cookieConsent);
                  if (consent.analytics) {
                    // Google Analytics 4
                    const script1 = document.createElement('script');
                    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-YOUR-GA4-ID';
                    script1.async = true;
                    document.head.appendChild(script1);

                    const script2 = document.createElement('script');
                    script2.innerHTML = \`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-YOUR-GA4-ID', {
                        cookie_flags: 'secure;samesite=none'
                      });
                    \`;
                    document.head.appendChild(script2);
                  }
                }
              }

              // Load analytics if consent already given
              loadAnalytics();
              
              // Listen for cookie consent changes
              window.addEventListener('storage', function(e) {
                if (e.key === 'cookie-consent') {
                  loadAnalytics();
                }
              });
            `,
          }}
        />

        {/* Marketing pixels - Only load if marketing cookies are accepted */}
        <Script
          id="conditional-marketing"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function loadMarketingPixels() {
                const cookieConsent = localStorage.getItem('cookie-consent');
                if (cookieConsent) {
                  const consent = JSON.parse(cookieConsent);
                  if (consent.marketing) {
                    // Facebook Pixel (example)
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
                    fbq('track', 'PageView');
                  }
                }
              }

              // Load marketing pixels if consent already given
              loadMarketingPixels();
              
              // Listen for cookie consent changes
              window.addEventListener('storage', function(e) {
                if (e.key === 'cookie-consent') {
                  loadMarketingPixels();
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}