import React from 'react';

export function Privacy() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Auspexi ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
            This privacy policy explains how we collect, use, and protect your information when you use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Company details</li>
            <li>Communication preferences</li>
            <li>Service usage data</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Analyzing and optimizing our AI agents</li>
            <li>Ensuring security and preventing fraud</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data.
            Our AI agents are designed with security-first principles and operate within strict data protection guidelines.
          </p>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Professional advisers</li>
            <li>Law enforcement when required by law</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>
            For any privacy-related questions or concerns, please contact us at:
            privacy@auspexi.com
          </p>
        </div>
      </div>
    </div>
  );
}