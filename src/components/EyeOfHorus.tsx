import React from 'react';

export function EyeOfHorus({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* SVG container with viewBox to ensure proper scaling */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* 1/2 - Main eye body */}
        <path
          d="M 20,50 C 20,30 40,25 50,25 C 60,25 80,30 80,50"
          className="text-blue-500 fill-none stroke-current stroke-[8] hover:text-blue-400 transition-colors"
          data-fraction="1/2"
        />
        
        {/* 1/4 - Eyebrow */}
        <path
          d="M 25,45 C 35,35 65,35 75,45"
          className="text-blue-600 fill-none stroke-current stroke-[6] hover:text-blue-500 transition-colors"
          data-fraction="1/4"
        />
        
        {/* 1/8 - Vertical mark */}
        <path
          d="M 50,25 L 50,45"
          className="text-blue-700 fill-none stroke-current stroke-[4] hover:text-blue-600 transition-colors"
          data-fraction="1/8"
        />
        
        {/* 1/16 - Right curve */}
        <path
          d="M 50,50 C 55,50 70,48 75,45"
          className="text-blue-800 fill-none stroke-current stroke-[3] hover:text-blue-700 transition-colors"
          data-fraction="1/16"
        />
        
        {/* 1/32 - Left curve */}
        <path
          d="M 25,45 C 30,48 45,50 50,50"
          className="text-blue-900 fill-none stroke-current stroke-[2] hover:text-blue-800 transition-colors"
          data-fraction="1/32"
        />
        
        {/* 1/64 - Bottom flourish */}
        <path
          d="M 45,50 L 55,50"
          className="text-indigo-900 fill-none stroke-current stroke-[1] hover:text-blue-900 transition-colors"
          data-fraction="1/64"
        />
        
        {/* Animate pulse effect */}
        <circle
          cx="50"
          cy="50"
          r="40"
          className="text-blue-500/20 fill-current animate-pulse"
        />
      </svg>
    </div>
  );
}