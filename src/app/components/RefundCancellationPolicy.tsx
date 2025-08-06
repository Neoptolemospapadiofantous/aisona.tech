import { RefreshCw, Calendar, AlertCircle, XCircle, MessageSquare, Users } from 'lucide-react';

const RefundCancellationPolicy = () => {
  const lastUpdated = "December 1, 2024";

  const cancellationScenarios = [
    {
      scenario: "Monthly Subscription Cancellation",
      icon: Calendar,
      timeframe: "Anytime before next billing",
      eligibility: "No refunds - Service continues until period ends",
      process: "Cancel via account settings or AI chat agent",
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
      process: "Report issues immediately via chat agent",
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

  const cancellationProcess = [
    {
      step: 1,
      title: "Cancel Your Subscription",
      description: "Stop future billing immediately",
      details: [
        "Log into your account dashboard",
        "Navigate to subscription settings and click 'Cancel'",
        "Or contact our AI chat agent for immediate assistance",
        "Cancellation is effective immediately for future billing"
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    const statusMap = {
      "no-refund": "bg-red-100 text-red-700 border-red-200",
      "case-by-case": "bg-blue-100 text-blue-700 border-blue-200"
    };
    return statusMap[status as keyof typeof statusMap] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "no-refund": return XCircle;
      case "case-by-case": return AlertCircle;
      default: return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Cancellation Policy
          </h1>
          
          <div className="text-sm text-gray-600 mb-6">
            <strong>Last Updated:</strong> {lastUpdated}
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple cancellation policy for monthly AI services. 
            Cancel anytime - no refunds, service continues until your paid period ends.
          </p>
        </div>

        {/* Policy Overview */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-2">No Refunds Policy</h3>
              <p className="text-red-700 text-sm leading-relaxed mb-4">
                We operate a strict no-refunds policy. You can cancel your monthly subscription anytime 
                to stop future billing, but no refunds are provided for current or previous billing periods.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-red-900">No Refunds</div>
                  <div className="text-red-700">Ever Available</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-900">Cancel Anytime</div>
                  <div className="text-red-700">Stop Future Billing</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-900">Service Continues</div>
                  <div className="text-red-700">Until Period Ends</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cancellation Scenarios */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Cancellation Options</h2>
          <div className="space-y-6">
            {cancellationScenarios.map((scenario, index) => {
              const StatusIcon = getStatusIcon(scenario.status);
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <scenario.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">{scenario.scenario}</h3>
                        <p className="text-sm text-gray-600">{scenario.timeframe}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-1 ${getStatusColor(scenario.status)}`}>
                      <StatusIcon className="w-4 h-4" />
                      {scenario.eligibility}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{scenario.process}</p>

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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Cancel Your Subscription</h2>
          <div className="space-y-6">
            {cancellationProcess.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">No Refunds Available</h3>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• No refunds for any billing periods</li>
                    <li>• No partial month refunds</li>
                    <li>• No refunds for unused service time</li>
                    <li>• Policy applies to all subscription types</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">What You Get</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Service until end of paid period</li>
                    <li>• Complete data export assistance</li>
                    <li>• 60-day data access after service ends</li>
                    <li>• Zero cancellation fees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-semibold text-black">Need to Cancel Your Subscription?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Our AI chat agent is available 24/7 to help with subscription cancellations 
            or any questions about our cancellation policy.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <p className="text-blue-700 font-medium mb-2">
              💬 Chat with our AI Billing Assistant
            </p>
            <p className="text-sm text-gray-600">
              Get instant help with subscription cancellation, billing questions, 
              or data export before your service ends.
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p><strong>Business Address:</strong> 37 Evagora Palikaridi, Limassol, Cyprus</p>
            <p><strong>Phone:</strong> +357 (97) 888-064</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;