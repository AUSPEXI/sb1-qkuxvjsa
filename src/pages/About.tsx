import React from 'react';
import { Bot, Brain, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Pioneering the Future of Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Auspexi, we're revolutionizing how businesses operate through advanced AI automation.
            Our mission is to create a future where human potential is fully realized through seamless collaboration with AI.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Vision to Reality
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by Gwylym, a visionary entrepreneur with a unique perspective on technology and human potential, 
                Auspexi emerged from a deep understanding of how AI can transform business operations. His distinctive ability 
                to see patterns and connections others might miss led to groundbreaking insights in AI automation.
              </p>
              <p className="text-lg text-gray-600">
                Gwylym's journey from tech enthusiast to CEO reflects his unwavering belief in AI's potential to enhance 
                human capabilities rather than replace them. His neurodivergent thinking has proven to be a powerful asset, 
                enabling him to approach problems from unique angles and develop innovative solutions that others might overlook.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'Innovation',
                  description: 'Pushing the boundaries of what\'s possible with AI'
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description: 'Working together with businesses to create perfect solutions'
                },
                {
                  icon: Bot,
                  title: 'Automation',
                  description: 'Streamlining processes for maximum efficiency'
                },
                {
                  icon: Zap,
                  title: 'Excellence',
                  description: 'Delivering outstanding results consistently'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <item.icon className="h-8 w-8 text-blue-500 mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Vision for the Future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Empowering Humanity',
                description: 'We believe AI should enhance human capabilities, not replace them. Our goal is to create a symbiotic relationship between human creativity and AI efficiency.'
              },
              {
                title: 'Accessible Innovation',
                description: 'Making advanced AI technology accessible to businesses of all sizes, ensuring everyone can benefit from the AI revolution.'
              },
              {
                title: 'Sustainable Growth',
                description: 'Creating a future where businesses can grow sustainably through intelligent automation, reducing waste and maximizing human potential.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}