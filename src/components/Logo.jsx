import React from 'react';

export const Logo = ({ variant = 'default', className = '' }) => {
  const isDark = variant === 'dark' || variant === 'white';

  return (
    <div className={`flex items-center cursor-pointer group ${className}`}>
      <div className={`relative flex items-center justify-center shrink-0 ${isDark ? 'bg-white p-1 rounded-lg shadow-sm' : ''}`}>
        <img
          src="/logo.png"
          alt="Bala's Travels Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Logo;
