import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Apex Synex Logo"
    >
      <defs>
        <linearGradient id="synexGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D0A9FF" />
          <stop offset="100%" stopColor="#A3D8FF" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* The Ascendant Pulse paths */}
      <g stroke="url(#synexGradient)" strokeWidth="7" strokeLinecap="round">
        {/* Left path */}
        <path d="M 40 90 C 40 70, 45 40, 50 22" />
        {/* Right path, a mirror */}
        <path d="M 60 90 C 60 70, 55 40, 50 22" />
      </g>
      
      {/* The Glowing Pulse at the Apex */}
      <g>
        <circle cx="50" cy="16" r="8" fill="#A8E1A3" filter="url(#glow)" />
      </g>
    </svg>
  );
};