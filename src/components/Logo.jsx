import React from 'react';

export const Logo = ({ variant = 'default', className = '' }) => {
  const isDark = variant === 'dark' || variant === 'white';

  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className={`relative flex items-center justify-center shrink-0 ${isDark ? 'bg-white p-1.5 rounded-xl shadow-sm' : ''}`}>
        <img
          src="/logo.png"
          alt="Bala's Travels Logo"
          className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className={`text-xl sm:text-2xl font-black tracking-tight leading-none ${isDark ? 'text-slate-900' : 'text-brand-red'}`}>
          BALA'S TRAVELS
        </span>
        <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1 ${isDark ? 'text-slate-600' : 'text-slate-500'}`}>
          Premium Mobility
        </span>
      </div>
    </div>
  );
};

export default Logo;
