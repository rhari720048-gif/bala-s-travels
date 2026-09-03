import React from 'react';

export const Logo = ({ variant = 'default', className = '' }) => {
  const isDark = variant === 'dark' || variant === 'white';
  const textColor = isDark ? 'text-white' : 'text-slate-900';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 cursor-pointer group ${className}`}>
      {/* Official Car Front Graphic Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/images/logo-car.png"
          alt="Bala's Travels Icon"
          className={`h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
            isDark ? 'filter brightness-0 invert' : ''
          }`}
        />
      </div>

      {/* Brand Text Next to Logo Icon */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className={`font-black text-base sm:text-xl tracking-wider uppercase font-sans ${textColor}`}>
            BALA'S
          </span>
          <span className="bg-brand-red text-white text-[9px] sm:text-xs font-extrabold tracking-wider px-1.5 py-0.5 rounded uppercase shadow-2xs shrink-0">
            TRAVELS
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
