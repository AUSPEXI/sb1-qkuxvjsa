import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Brain, Users, Calculator, Megaphone, Briefcase, Settings, Monitor, Microscope, Truck, Scale, ShoppingCart, Target, CheckSquare, LineChart } from 'lucide-react';
import { DepartmentNav } from '../components/DepartmentNav';

const departmentContent = {
  'customer-service': {
    title: 'Customer Service',
    icon: Users,
    roles: [
      'Customer Support Representatives',
      'Technical Support Agents',
      'Complaint Resolution Specialists',
      'Chatbot Supervisors'
    ],
    content: `Our AI-powered customer service solutions transform how organisations interact with their customers. By leveraging advanced natural language processing and machine learning algorithms, we enable seamless, 24/7 customer support that maintains the human touch while scaling efficiently.

    Our systems learn from every interaction, continuously improving their ability to understand and resolve customer enquiries. This results in faster response times, higher customer satisfaction, and reduced operational costs.

    We integrate with your existing customer service infrastructure, enhancing rather than replacing your human agents. This hybrid approach ensures that routine queries are handled automatically while complex issues are intelligently routed to the appropriate human specialists.`,
    benefits: [
      'Reduce response time by up to 80% with instant, accurate responses to common queries',
      'Increase customer satisfaction through consistent, 24/7 availability',
      'Lower operational costs while maintaining high-quality service',
      'Scale customer support effortlessly during peak periods'
    ]
  },
  'hr': {
    title: 'Human Resources',
    icon: Users,
    roles: [
      'Recruiters',
      'Onboarding Specialists',
      'Employee Relations Managers',
      'Payroll Specialists',
      'Training Coordinators'
    ],
    content: `Transform your HR operations with our AI-powered solutions that streamline recruitment, onboarding, and employee management processes. Our intelligent systems automate routine tasks while providing valuable insights for strategic decision-making.

    Our AI agents handle everything from CV screening and candidate matching to employee onboarding and training coordination. They learn from your organisation's hiring patterns and success metrics to continuously improve their effectiveness.

    The system integrates seamlessly with your existing HR tools and processes, providing a unified platform for all human resource management needs. This ensures consistency in HR practices while reducing administrative burden.`,
    benefits: [
      'Reduce time-to-hire by 60% with AI-powered candidate screening',
      'Streamline onboarding processes with automated workflows',
      'Improve employee satisfaction with faster HR response times',
      'Ensure compliance with automated policy enforcement'
    ]
  },
  'finance': {
    title: 'Accounting & Finance',
    icon: Calculator,
    roles: [
      'Accountants',
      'Bookkeepers',
      'Financial Analysts',
      'Tax Specialists',
      'Auditors'
    ],
    content: `Revolutionise your financial operations with our AI-powered accounting and finance solutions. Our intelligent systems automate complex calculations, reconciliations, and reporting while maintaining absolute accuracy and compliance.

    Our AI agents handle routine bookkeeping tasks, process invoices, and generate financial reports with unprecedented speed and accuracy. They learn from your organisation's financial patterns to flag anomalies and prevent errors before they occur.

    The system integrates with your existing financial software, creating a seamless workflow that reduces manual intervention while enhancing control and visibility.`,
    benefits: [
      'Reduce accounting errors by 95% through automated reconciliation',
      'Save 40+ hours per month on routine bookkeeping tasks',
      'Enhance compliance with real-time monitoring and reporting',
      'Improve cash flow management with predictive analytics'
    ]
  },
  'marketing': {
    title: 'Marketing & Advertising',
    icon: Megaphone,
    roles: [
      'Digital Marketing Specialists',
      'Content Marketers',
      'SEO Specialists',
      'Social Media Managers',
      'Email Marketing Specialists',
      'Ad Campaign Managers',
      'Brand Strategists'
    ],
    content: `Transform your marketing efforts with our AI-powered solutions that optimise campaign performance and content creation. Our intelligent systems analyse market trends, customer behaviour, and campaign metrics to deliver actionable insights.

    Our AI agents handle content generation, social media management, and campaign optimisation while learning from performance data to continuously improve results. They adapt to your brand voice and marketing objectives to maintain consistency across all channels.

    The system integrates with your existing marketing tools, providing a unified platform for campaign management and analytics.`,
    benefits: [
      'Increase campaign ROI by 40% with AI-optimised targeting',
      'Save 30+ hours per week on content creation and scheduling',
      'Improve engagement rates with personalised content delivery',
      'Enhance brand consistency across all marketing channels'
    ]
  },
  'sales': {
    title: 'Sales',
    icon: Briefcase,
    roles: [
      'Sales Representatives',
      'Account Managers',
      'Business Development Representatives',
      'Sales Operations Specialists',
      'Lead Generation Specialists'
    ],
    content: `Revolutionise your sales processes with our AI-powered sales automation solutions. Our intelligent systems streamline prospecting, lead qualification, and follow-up tasks while providing valuable insights for closing deals.

    Our AI agents handle routine sales tasks, from initial contact to meeting scheduling, allowing your sales team to focus on building relationships and closing deals. The system learns from successful sales patterns to optimise outreach and improve conversion rates.

    We integrate seamlessly with your CRM and sales tools, creating a unified workflow that enhances productivity and sales effectiveness.`,
    benefits: [
      'Increase sales productivity by 35% through automated prospecting',
      'Improve lead qualification accuracy by 50%',
      'Reduce sales cycle length by 25%',
      'Enhance forecast accuracy with AI-driven analytics'
    ]
  },
  'operations': {
    title: 'Operations',
    icon: Settings,
    roles: [
      'Operations Managers',
      'Process Improvement Specialists',
      'Quality Control Managers',
      'Facility Managers',
      'Resource Coordinators'
    ],
    content: `Optimise your operational efficiency with our AI-powered solutions that streamline processes and eliminate bottlenecks. Our intelligent systems analyse workflows, identify inefficiencies, and implement automated solutions for continuous improvement.

    Our AI agents monitor operations in real-time, predicting potential issues before they occur and suggesting optimisation strategies. They adapt to your specific operational requirements while maintaining quality and safety standards.

    The system seamlessly integrates with your existing operational infrastructure, providing comprehensive oversight and control.`,
    benefits: [
      'Reduce operational costs by 30% through process optimisation',
      'Improve resource utilisation by 45%',
      'Minimise downtime with predictive maintenance',
      'Enhance operational visibility with real-time monitoring'
    ]
  },
  'it': {
    title: 'IT & Technology',
    icon: Monitor,
    roles: [
      'IT Support Specialists',
      'System Administrators',
      'Network Engineers',
      'Security Analysts',
      'DevOps Engineers'
    ],
    content: `Transform your IT operations with our AI-powered solutions that enhance system maintenance, security, and support. Our intelligent systems automate routine tasks while providing advanced threat detection and response capabilities.

    Our AI agents handle everything from user support tickets to system monitoring, learning from past incidents to prevent future issues. They maintain system health while ensuring optimal performance and security.

    The system integrates with your existing IT infrastructure, providing a unified platform for management and monitoring.`,
    benefits: [
      'Reduce IT support response time by 70%',
      'Improve system uptime to 99.9%',
      'Enhance security with AI-powered threat detection',
      'Automate routine maintenance tasks'
    ]
  },
  'research': {
    title: 'Research & Development',
    icon: Microscope,
    roles: [
      'Research Scientists',
      'Product Developers',
      'Innovation Managers',
      'Data Analysts',
      'Patent Specialists'
    ],
    content: `Accelerate your R&D processes with our AI-powered solutions that enhance research capabilities and innovation potential. Our intelligent systems analyse vast amounts of data to identify patterns and opportunities that human researchers might miss.

    Our AI agents assist in everything from literature review to experiment design, learning from successful research patterns to suggest promising new directions. They help maintain research integrity while speeding up the discovery process.

    The system integrates with your existing research tools and databases, providing a comprehensive platform for innovation.`,
    benefits: [
      'Reduce research time by 50% with AI-assisted analysis',
      'Improve innovation success rate by 40%',
      'Enhance patent discovery and protection',
      'Accelerate time-to-market for new products'
    ]
  },
  'logistics': {
    title: 'Logistics & Supply Chain',
    icon: Truck,
    roles: [
      'Supply Chain Managers',
      'Logistics Coordinators',
      'Inventory Managers',
      'Fleet Managers',
      'Warehouse Supervisors'
    ],
    content: `Optimise your supply chain operations with our AI-powered solutions that enhance visibility, efficiency, and reliability. Our intelligent systems predict demand patterns, optimise inventory levels, and streamline logistics operations.

    Our AI agents handle everything from route optimisation to inventory management, learning from historical data to improve accuracy and efficiency. They maintain supply chain integrity while reducing costs and improving service levels.

    The system integrates with your existing logistics infrastructure, providing end-to-end visibility and control.`,
    benefits: [
      'Reduce logistics costs by 25% through route optimisation',
      'Improve inventory accuracy to 99.9%',
      'Enhance delivery reliability and speed',
      'Optimise warehouse operations with AI-driven insights'
    ]
  },
  'legal': {
    title: 'Legal & Compliance',
    icon: Scale,
    roles: [
      'Legal Counsels',
      'Compliance Officers',
      'Contract Managers',
      'Risk Analysts',
      'Policy Administrators'
    ],
    content: `Transform your legal operations with our AI-powered solutions that enhance compliance monitoring, contract management, and risk assessment. Our intelligent systems automate routine legal tasks while ensuring regulatory compliance.

    Our AI agents assist in everything from contract review to compliance monitoring, learning from legal precedents to improve accuracy and efficiency. They maintain legal integrity while reducing administrative burden.

    The system integrates with your existing legal tools and databases, providing a comprehensive platform for legal operations.`,
    benefits: [
      'Reduce contract review time by 75%',
      'Improve compliance monitoring accuracy',
      'Enhance risk assessment capabilities',
      'Automate routine legal documentation'
    ]
  },
  'procurement': {
    title: 'Procurement & Purchasing',
    icon: ShoppingCart,
    roles: [
      'Procurement Managers',
      'Purchasing Agents',
      'Vendor Managers',
      'Category Managers',
      'Strategic Sourcing Specialists'
    ],
    content: `Optimise your procurement processes with our AI-powered solutions that enhance vendor management, purchase optimisation, and cost control. Our intelligent systems automate routine purchasing tasks while identifying savings opportunities.

    Our AI agents handle everything from vendor selection to purchase order processing, learning from historical data to improve decision-making. They maintain procurement integrity while reducing costs and improving efficiency.

    The system integrates with your existing procurement tools, providing a unified platform for purchasing operations.`,
    benefits: [
      'Reduce procurement costs by 20% through AI-driven sourcing',
      'Improve vendor performance management',
      'Enhance purchase order accuracy',
      'Optimise inventory levels with predictive analytics'
    ]
  },
  'product': {
    title: 'Product Management',
    icon: Target,
    roles: [
      'Product Managers',
      'Product Owners',
      'Feature Specialists',
      'User Experience Designers',
      'Product Analysts'
    ],
    content: `Transform your product management processes with our AI-powered solutions that enhance feature prioritisation, user feedback analysis, and roadmap planning. Our intelligent systems analyse market trends and user behaviour to inform product decisions.

    Our AI agents assist in everything from feature planning to user feedback analysis, learning from product performance data to improve decision-making. They maintain product quality while accelerating development cycles.

    The system integrates with your existing product management tools, providing a comprehensive platform for product development.`,
    benefits: [
      'Reduce time-to-market by 40% with AI-assisted planning',
      'Improve feature prioritisation accuracy',
      'Enhance user feedback analysis',
      'Optimise product roadmap with predictive analytics'
    ]
  },
  'qa': {
    title: 'Quality Assurance',
    icon: CheckSquare,
    roles: [
      'QA Engineers',
      'Test Automation Specialists',
      'Quality Control Managers',
      'Performance Testers',
      'User Acceptance Testers'
    ],
    content: `Enhance your quality assurance processes with our AI-powered solutions that automate testing, identify potential issues, and ensure product quality. Our intelligent systems learn from past defects to improve testing efficiency.

    Our AI agents handle everything from test case generation to defect prediction, learning from historical data to improve accuracy. They maintain quality standards while reducing testing time and costs.

    The system integrates with your existing QA tools, providing a comprehensive platform for quality management.`,
    benefits: [
      'Reduce testing time by 60% with AI-automated testing',
      'Improve defect detection accuracy',
      'Enhance test coverage and efficiency',
      'Optimise resource allocation with predictive analytics'
    ]
  },
  'business-dev': {
    title: 'Business Development',
    icon: LineChart,
    roles: [
      'Business Development Managers',
      'Strategic Partnership Managers',
      'Market Analysts',
      'Growth Specialists',
      'Opportunity Managers'
    ],
    content: `Transform your business development processes with our AI-powered solutions that enhance opportunity identification, partnership management, and growth planning. Our intelligent systems analyse market trends and competitive landscapes to identify opportunities.

    Our AI agents assist in everything from market analysis to partnership evaluation, learning from successful patterns to improve decision-making. They maintain business growth while optimising resource allocation.

    The system integrates with your existing business development tools, providing a comprehensive platform for growth management.`,
    benefits: [
      'Increase opportunity identification by 45%',
      'Improve partnership success rates',
      'Enhance market analysis accuracy',
      'Optimise growth strategies with AI-driven insights'
    ]
  }
};

export function Solutions() {
  const { departmentId } = useParams();
  const department = departmentId ? departmentContent[departmentId] : null;

  if (department) {
    const Icon = department.icon;
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <DepartmentNav />
          </div>
          
          <div className="flex flex-col">
            {/* Header Section */}
            <div className="flex items-center mb-6">
              <Icon className="h-12 w-12 text-blue-500 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">
                {department.title}
              </h1>
            </div>

            {/* Roles Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Roles Enhanced</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {department.roles.map((role, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Users className="h-5 w-5 flex-shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none mb-8">
              {department.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {department.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <Brain className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Benefit {index + 1}</h3>
                      <p className="text-gray-600">{benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default view when no department is selected
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Solutions for Every Department
          </h1>
          <p className="text-xl text-gray-600">
            Select a department to explore how our AI agents can transform your operations
          </p>
        </div>
        
        <div className="mb-8">
          <DepartmentNav />
        </div>
      </div>
    </div>
  );
}