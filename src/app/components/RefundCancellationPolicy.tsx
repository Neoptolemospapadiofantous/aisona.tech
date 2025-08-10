import React from 'react';
import { RefreshCw, Calendar, AlertCircle, XCircle, MessageSquare } from 'lucide-react';

// Type definitions
type ScenarioStatus = 'no-refund' | 'case-by-case';

interface CancellationScenario {
  scenario: string;
  icon: React.ComponentType<{ className?: string }>;
  timeframe: string;
  eligibility: string;
  process: string;
  conditions: string[];
  status: ScenarioStatus;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  isAvailable?: boolean; // Track which options actually work
}

// Status styling helper
const getStatusStyling = (status: ScenarioStatus) => {
  const statusMap: Record<ScenarioStatus, { class: string; icon: React.ComponentType<{ className?: string }> }> = {
    'no-refund': { class: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
    'case-by-case': { class: "bg-blue-100 text-blue-700 border-blue-200", icon: AlertCircle }
  };
  return statusMap[status];
};

// Alert component for better UX
const AlertBox: React.FC<{ 
  type: 'warning' | 'info' | 'error'; 
  title: string; 
  children: React.ReactNode;
  className?: string;
}> = ({ type, title, children, className = '' }) => {
  const typeStyles = {
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    info: "bg-blue-50 border-blue-200 text-blue-900", 
    error: "bg-red-50 border-red-200 text-red-900"
  };

  const icons = {
    warning: AlertCircle,
    info: AlertCircle,
    error: XCircle
  };

  const Icon = icons[type];
  
  return (
    <div className={`border rounded-lg p-4 sm:p-6 ${typeStyles[type]} ${className}`}>
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold mb-2">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

const RefundCancellationPolicy: React.FC = () => {
  const lastUpdated = "December 1, 2024";

  // If everything really goes through support, be honest about it
  const SUPPORT_ONLY_MODE = true; // Toggle this based on your reality

  const cancellationScenarios: CancellationScenario[] = [
    {
      scenario: "Monthly Subscription Cancellation",
      icon: Calendar,
      timeframe: "Anytime before next billing",
      eligibility: "No refunds - Service continues until period ends",
      process: SUPPORT_ONLY_MODE ? "Contact customer support to cancel" : "Cancel via customer support or account dashboard",
      conditions: [
        "Cancel anytime before next monthly billing cycle",
        "Service continues until current paid month ends", 
        "No refunds for current or past billing periods",
        "Future monthly charges will be stopped immediately"
      ],
      status: "no-refund"
    },
    {
      scenario: "Service Issues/Downtime",
      icon: AlertCircle,
      timeframe: "Case by case",
      eligibility: "Service credits may be considered",
      process: "Report issues immediately via customer support",
      conditions: [
        "Must report within 48 hours of issue",
        "Significant service interruption documented",
        "Service credits at our discretion only",
        "No monetary refunds available"
      ],
      status: "case-by-case"
    },
    {
      scenario: "Billing Disputes", 
      icon: RefreshCw,
      timeframe: "Within 30 days",
      eligibility: "Dispute resolution only",
      process: "Contact support with billing details",
      conditions: [
        "Technical billing errors only",
        "Must provide documentation of error", 
        "Resolution may include service credits",
        "No cash refunds available"
      ],
      status: "case-by-case"
    }
  ];

  const cancellationProcess: ProcessStep[] = [
    {
      step: 1,
      title: "Cancel Your Subscription",
      description: "Stop future billing immediately",
      details: SUPPORT_ONLY_MODE ? [
        "Contact our customer support team",
        "Provide your account information for verification",
        "Request subscription cancellation",
        "Receive immediate confirmation of cancellation"
      ] : [
        "Log into your account dashboard",
        "Navigate to subscription settings and click 'Cancel'", 
        "Or contact our customer support for assistance",
        "Cancellation is effective immediately for future billing"
      ],
      isAvailable: true
    },
    {
      step: 2,
      title: "Confirmation & Service Continuation", 
      description: "Your service continues until period ends",
      details: [
        "Email confirmation sent immediately",
        "Service continues until end of current paid month",
        "No future charges will occur",
        "Data export instructions provided"
      ],
      isAvailable: true
    },
    {
      step: 3,
      title: "Use Remaining Service Time",
      description: "Full access until your paid period expires", 
      details: [
        "Continue using all features until month-end",
        "No service interruption during paid period",
        "Download your data and configurations before expiry",
        "Migration support available if needed"
      ],
      isAvailable: true
    },
    {
      step: 4,
      title: "Account Closure",
      description: "Account deactivated at period end",
      details: [
        "Service access ends at last day of paid month",
        "60-day grace period for data export", 
        "All data securely deleted after grace period",
        "Reactivation possible by starting new subscription"
      ],
      isAvailable: true
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black">
            Cancellation Policy
          </h1>
          
          <div className="text-sm text-gray-600 mb-4 sm:mb-6">
            <strong>Last Updated:</strong> {lastUpdated}
          </div>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Simple cancellation policy for monthly AI services. 
            Cancel anytime - no refunds, service continues until your paid period ends.
          </p>
        </div>

        {/* Honest messaging if support-only */}
        {SUPPORT_ONLY_MODE && (
          <AlertBox type="info" title="Cancellation Process" className="mb-6 sm:mb-8">
            <p className="text-sm leading-relaxed">
              Currently, all subscription cancellations are processed through our customer support team 
              to ensure proper account handling and data preservation. While we&apos;re working on self-service 
              options, our support team provides immediate assistance and confirmation.
            </p>
          </AlertBox>
        )}

        {/* No Refunds Policy */}
        <AlertBox type="error" title="No Refunds Policy" className="mb-8 sm:mb-12">
          <p className="text-sm leading-relaxed mb-3 sm:mb-4">
            We operate a strict no-refunds policy. You can cancel your monthly subscription anytime 
            to stop future billing, but no refunds are provided for current or previous billing periods.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
            <div className="text-center">
              <div className="text-lg font-bold">No Refunds</div>
              <div className="opacity-75 text-xs">Ever Available</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">Cancel Anytime</div>
              <div className="opacity-75 text-xs">Stop Future Billing</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">Service Continues</div>
              <div className="opacity-75 text-xs">Until Period Ends</div>
            </div>
          </div>
        </AlertBox>

        {/* Cancellation Scenarios */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Cancellation Options</h2>
          <div className="space-y-4 sm:space-y-6">
            {cancellationScenarios.map((scenario, index) => {
              const styling = getStatusStyling(scenario.status);
              const StatusIcon = styling.icon;
              
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <scenario.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black">{scenario.scenario}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{scenario.timeframe}</p>
                      </div>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border flex items-center gap-1 ${styling.class}`}>
                      <StatusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{scenario.eligibility}</span>
                      <span className="sm:hidden">{scenario.eligibility.split(' ')[0]}</span>
                    </span>
                  </div>

                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{scenario.process}</p>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Details:</h4>
                    <ul className="space-y-1">
                      {scenario.conditions.map((condition, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cancellation Process */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">How to Cancel Your Subscription</h2>
          <div className="space-y-4 sm:space-y-6">
            {cancellationProcess.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-black mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Important Information</h2>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            <AlertBox type="error" title="No Refunds Available">
              <ul className="text-sm space-y-1">
                <li>• No refunds for any billing periods</li>
                <li>• No partial month refunds</li>
                <li>• No refunds for unused service time</li>
                <li>• Policy applies to all subscription types</li>
              </ul>
            </AlertBox>

            <AlertBox type="info" title="What You Get">
              <ul className="text-sm space-y-1">
                <li>• Service until end of paid period</li>
                <li>• Complete data export assistance</li>
                <li>• 60-day data access after service ends</li>
                <li>• Zero cancellation fees</li>
              </ul>
            </AlertBox>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-6 sm:p-8 text-center border border-blue-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <h3 className="text-lg sm:text-xl font-semibold text-black">Need to Cancel Your Subscription?</h3>
          </div>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            {SUPPORT_ONLY_MODE 
              ? "Contact our customer support team for immediate assistance with subscription cancellation."
              : "Our AI chat agent is available 24/7 to help with subscription cancellations or any questions about our cancellation policy."
            }
          </p>
          <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2 text-sm sm:text-base">
              💬 {SUPPORT_ONLY_MODE ? "Contact Customer Support" : "Chat with our AI Billing Assistant"}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Get instant help with subscription cancellation, billing questions, 
              or data export before your service ends.
            </p>
          </div>
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
            <p><strong>Business Address:</strong> 37 Evagora Palikaridi, Limassol, Cyprus</p>
            <p><strong>Phone:</strong> +357 (97) 888-064</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;