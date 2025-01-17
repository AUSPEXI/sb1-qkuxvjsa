import React from 'react';
import { Link } from 'react-router-dom';
import { EyeOfHorus } from './EyeOfHorus';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <EyeOfHorus className="h-12 w-12" />
              <span className="font-bold text-2xl tracking-wider">AUSPEXI</span>
            </Link>
            <p className="text-sm text-gray-400">
              Revolutionising business automation through advanced AI agents.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/workflow-analyzer" className="text-gray-400 hover:text-blue-500">
                  Workflow Analyzer
                </Link>
              </li>
              <li>
                <Link to="/solutions/business-automation" className="text-gray-400 hover:text-blue-500">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions/integrations" className="text-gray-400 hover:text-blue-500">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-blue-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Auspexi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}