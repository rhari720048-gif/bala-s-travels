import React from 'react';
import { Users, ChevronRight } from 'lucide-react';

export const InteractiveCarCard = ({ vehicle, categoryTitle, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="smooth-card-card group relative cursor-pointer bg-slate-50/90 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-brand-red/80 shadow-2xs flex flex-col justify-between"
    >
      {/* SNUG IMAGE CONTAINER WITH NATIVE TRANSPARENT CAR DISPLAY */}
      <div className="relative h-32 sm:h-40 bg-transparent p-2 flex items-center justify-center border-b border-slate-100/60 overflow-hidden">
        
        {/* CAR PHOTO POPPING OUT ON HOVER */}
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="smooth-car-img max-h-28 sm:max-h-34 w-full object-contain transform-gpu"
        />

        {/* PASSENGER CAPACITY BADGE */}
        <span className="absolute top-2 left-2 bg-white px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold text-slate-800 border border-slate-200 flex items-center gap-1 shadow-2xs group-hover:border-brand-red/50 transition-colors z-20">
          <Users className="w-3 h-3 text-brand-red" />
          {vehicle.capacity}
        </span>
      </div>

      {/* VEHICLE TITLE AND SELECTION CHEVRON */}
      <div className="p-3.5 sm:p-4 flex items-center justify-between bg-white">
        <div>
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-brand-red transition-colors line-clamp-1">
            {vehicle.name}
          </h3>
          <span className="text-[10px] text-slate-400 font-medium">Click to inspect →</span>
        </div>

        <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-brand-red group-hover:text-white flex items-center justify-center text-slate-500 transition-colors shadow-2xs group-hover:translate-x-1 transition-transform">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

    </div>
  );
};

export default InteractiveCarCard;
