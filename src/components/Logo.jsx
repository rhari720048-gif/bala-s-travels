import React from 'react';

export const Logo = ({ variant = 'default', className = '' }) => {
  const isDark = variant === 'dark' || variant === 'white';

  return (
    <div className={`flex items-center cursor-pointer group ${className}`}>
      <div className={`relative flex items-center justify-center shrink-0 ${isDark ? 'bg-white p-1.5 rounded-xl shadow-sm' : ''}`}>
        <img
          src="/logo.png"
          alt="Bala's Travels Logo"
          className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Logo;
