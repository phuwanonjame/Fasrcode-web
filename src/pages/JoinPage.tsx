import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

type JoinPageProps = {
  onNavigate: (page: string) => void;
};

export function JoinPage({ onNavigate }: JoinPageProps) {
  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build scalable cloud-based POS solutions using React, Node.js, and PostgreSQL',
      // UPDATED EXPERIENCE: 1-2 Years
      requirements: ['1-2 years experience', 'React & Node.js expertise', 'Cloud architecture knowledge'],
    },
    {
      title: 'Backend Engineer',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Design and implement robust APIs for our payment processing systems',
      // UPDATED EXPERIENCE: 1-2 Years
      requirements: ['1-2 years experience', 'Node.js or Python', 'API design expertise'],
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Operations',
      description: 'Manage cloud infrastructure and deployment pipelines for our POS platform',
      // UPDATED EXPERIENCE: 1-2 Years
      requirements: ['1-2 years experience with AWS/GCP', 'CI/CD experience', 'Docker & Kubernetes'],
    },
    {
      title: 'Product Designer',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      department: 'Design',
      description: 'Create beautiful, intuitive interfaces for our suite of POS products',
      // UPDATED EXPERIENCE: 1-2 Years (implied by required skills)
      requirements: ['1-2 years UI/UX portfolio experience', 'Figma proficiency', 'Design system experience'],
    },
    // NEW: IT Support
    {
      title: 'IT Support Specialist',
      location: 'Remote / Local Hub',
      type: 'Full-time',
      department: 'Operations',
      description: 'Provide technical assistance and resolve hardware/software issues for staff.',
      // UPDATED EXPERIENCE: 1-2 Years
      requirements: ['1-2 years IT support experience', 'Troubleshooting skills', 'Helpdesk ticketing'],
    },
    // NEW: Sales Architect (SA)
    {
      title: 'Sales Architect (SA)',
      location: 'Remote / Major US City',
      type: 'Full-time',
      department: 'Sales',
      description: 'Serve as the technical expert to help close enterprise deals and architect custom solutions.',
      // UPDATED EXPERIENCE: 1-2 Years
      requirements: ['1-2 years in solutions architect role', 'Deep product knowledge', 'Strong client communication'],
    },
    // NEW: Business Analyst (BA)
    {
      title: 'Business Analyst',
      location: 'Remote',
      type: 'Full-time',
      department: 'Product',
      description: 'Analyze business processes and gather requirements to inform product development decisions.',
      // UPDATED EXPERIENCE: 1-2 Years
      requirements: ['1-2 years BA experience', 'Requirements documentation (e.g., user stories)', 'Experience with Agile'],
    },
    // NEW: Network Engineer
    {
      title: 'Network Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Operations',
      description: 'Design, implement, and manage secure and reliable network infrastructure.',
      // UPDATED EXPERIENCE: 1-2 Years
      requirements: ['1-2 years network engineering experience', 'Routing/Switching expertise', 'Cloud networking'],
    },
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health benefits',
    'Flexible remote work',
    'Unlimited PTO',
    'Learning & development budget',
    'Latest tech equipment',
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the FastCode Team
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Help us build the future of POS technology and work with cutting-edge cloud solutions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work at FastCode?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're a team of passionate developers building next-generation POS platforms. Join us to work on challenging problems, use modern technologies, and make a real impact on businesses worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Open Positions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {openPositions.length} positions available
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </div>
                    </div>
                  </div>
                  <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {position.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {position.requirements.map((req, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Don't see a position that fits? We're always looking for talented people.
            </p>
            <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-500 transition-all">
              Send us your resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
