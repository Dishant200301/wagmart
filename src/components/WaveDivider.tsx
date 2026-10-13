import React from 'react';

export const WaveDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="#ECE4DB"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,45 C 180,10 320,75 520,70 C 720,65 860,15 1060,25 C 1220,32 1340,65 1440,45 L 1440,100 L 0,100 Z" />
      </svg>
    </div>
  );
};
