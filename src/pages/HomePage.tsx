import { ArrowRight, Zap, Shield, Rocket, TrendingUp } from 'lucide-react';

type HomePageProps = {
  onNavigate: (page: string) => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern technologies for maximum performance and scalability',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Enterprise-grade security with end-to-end encryption and compliance',
    },
    {
      icon: Rocket,
      title: 'Cloud Native',
      description: 'Designed for the cloud with automatic scaling and high availability',
    },
    {
      icon: TrendingUp,
      title: 'Analytics Driven',
      description: 'Real-time insights and analytics to help grow your business',
    },
  ];

  const roadmap = [
    {
      quarter: 'Q1 2024',
      title: 'Core Platform Launch & Payments',
      features: ['Basic Inventory Management', 'Secure Payment Gateway Integration (Credit/Debit)', 'User Authentication & Roles'],
      status: 'Completed',
      color: 'green',
    },
    {
      quarter: 'Q2 2024',
      title: 'Advanced Retail Features',
      features: ['Customer Loyalty Program Module', 'Multi-Store Support (Beta)', 'Offline Mode Functionality'],
      status: 'In Progress',
      color: 'blue',
    },
    {
      quarter: 'Q3 2024',
      title: 'Enterprise & API Expansion',
      features: ['Public API for 3rd Party Integrations', 'Advanced Reporting & BI Dashboard', 'Employee Time Clock & Payroll Integration'],
      status: 'Planned',
      color: 'yellow',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              Powering the Future of POS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
              Building the Next Generation{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                POS Platforms
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up-delay">
              FastCode is the creator of a PaaS (Platform as a Service) for powerful, cloud-based Point of Sale (POS) solutions, supporting every type of business. Built by developers, for developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
              <button
                onClick={() => onNavigate('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('join')}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-500 transition-all hover:scale-105"
              >
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose FastCode?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional POS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: POS Roadmap Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              POS Platform Roadmap
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See what we're building next to power the future of commerce for our users and developers.
            </p>
          </div>

          <div className="relative flex flex-col items-start space-y-8 md:space-y-0 md:flex-row md:justify-between">
            {roadmap.map((item, index) => (
              <div key={index} className="flex flex-col items-start md:w-1/3 p-4">
                {/* Status Indicator */}
                <div className={`flex items-center space-x-3 mb-4 text-sm font-semibold 
                  ${item.color === 'green' ? 'text-green-600 dark:text-green-400' : ''}
                  ${item.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                  ${item.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' : ''}`}
                >
                  <span className={`w-3 h-3 rounded-full 
                    ${item.color === 'green' ? 'bg-green-500' : ''}
                    ${item.color === 'blue' ? 'bg-blue-500' : ''}
                    ${item.color === 'yellow' ? 'bg-yellow-500' : ''}`}
                  />
                  <span>{item.status}</span>
                </div>
                
                {/* Quarter and Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.quarter}: {item.title}
                </h3>
                
                {/* Feature List */}
                <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Arrow Separator (Hidden on last item) */}
                {index < roadmap.length - 1 && (
                  <div className="absolute top-1/2 right-0 hidden md:block w-1/4 transform -translate-y-1/2 translate-x-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using FastCode's POS solutions
          </p>
          <button
            onClick={() => onNavigate('projects')}
            className="group px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:scale-105 transition-all flex items-center gap-2 mx-auto"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}