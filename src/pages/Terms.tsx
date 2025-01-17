import React from 'react';

export function Terms() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using Auspexi's services, you agree to be bound by these Terms of Service
            and all applicable laws and regulations.
          </p>

          <h2>2. Services</h2>
          <p>
            Auspexi provides AI automation services for businesses. Our AI agents are designed to
            enhance and optimize various business processes. We reserve the right to modify or
            discontinue any service at any time.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Maintain the security of your account</li>
            <li>Use services in compliance with applicable laws</li>
            <li>Not interfere with service operations</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All rights, title, and interest in and to the services, including all intellectual
            property rights, are and will remain the exclusive property of Auspexi.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            Service fees are billed according to the pricing plan selected. All fees are
            non-refundable unless otherwise specified in writing.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Auspexi shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages resulting from your use of our services.
          </p>

          <h2>7. Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately, without prior
            notice or liability, for any reason whatsoever.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any
            material changes via email or through our services.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            For any questions about these Terms, please contact us at:
            legal@auspexi.com
          </p>
        </div>
      </div>
    </div>
  );
}