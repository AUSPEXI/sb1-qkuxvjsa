import React from 'react';
import { ArrowRight, Bot, Shield, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Future of Work is <span className="text-blue-500">Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your organisation with AI agents that automate and optimise your operations.
              We don't just promise automation - we deliver it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Auspexi?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our AI agents are revolutionising how businesses operate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Bot className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven</h3>
              <p className="text-gray-600">
                We use our own AI agents to run our business, proving their effectiveness.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom</h3>
              <p className="text-gray-600">
                Tailored AI solutions designed specifically for your business needs.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <Bot className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Evolving</h3>
              <p className="text-gray-600">
                Our AI agents learn and improve over time, becoming more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* ... */}
    </div>
  );
}