import React from 'react';

export const Logo = ({ variant = 'default', className = '' }) => {
  const isWhite = variant === 'white';
  const isDarkBg = variant === 'dark' || variant === 'white';

  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className={`relative flex items-center justify-center shrink-0 ${isDarkBg ? 'bg-white p-1.5 rounded-xl shadow-sm' : ''}`}>
        <img
          src="/logo.png"
          alt="Bala's Travels Logo"
          className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className={`text-2xl sm:text-3xl font-black tracking-tight leading-none ${isWhite ? 'text-white' : (variant === 'dark' ? 'text-slate-900' : 'text-brand-red')}`}>
          BALA'S TRAVELS
        </span>
        <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest mt-1 ${isWhite ? 'text-slate-300' : (variant === 'dark' ? 'text-slate-600' : 'text-slate-500')}`}>
          Premium Mobility
        </span>
      </div>
    </div>
  );
};

export default Logo;
