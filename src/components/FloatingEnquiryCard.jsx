import React, { useState } from 'react';
import { MapPin, Navigation, Car, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { formatWhatsAppMessage } from '../utils/whatsapp';

export const FloatingEnquiryCard = ({ className = '' }) => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [vehicle, setVehicle] = useState('Select vehicle type');
  const [error, setError] = useState('');

  const vehicleOptions = [
    'Sedan',
    'Hatchback / Compact',
    'SUV / Mini SUV',
    'Traveller / Coach',
    'Luxury Vehicle',
    'Not Sure'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickup.trim() && !drop.trim()) {
      setError('Please enter pickup or drop location');
      return;
    }
    setError('');
    
    const whatsappUrl = formatWhatsAppMessage({
      pickup,
      drop,
      vehicle: vehicle === 'Select vehicle type' ? 'Not Sure' : vehicle
    });
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/90 max-w-[320px] w-full ${className}`}>
      
      {/* CARD TITLE & SUBTITLE */}
      <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-100">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
          <Navigation className="w-3.5 h-3.5" />
        </div>
        <div>
          <h3 className="text-xs font-black text-slate-900 tracking-tight flex items-center gap-1">
            Quick Route Enquiry
            <Sparkles className="w-3 h-3 text-amber-500" />
          </h3>
          <p className="text-[10px] font-semibold text-slate-400">Instant WhatsApp Quote</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        
        {/* 1. PICKUP LOCATION */}
        <div className="space-y-1">
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block shadow-xs" />
            Pickup Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
            </div>
            <input
              type="text"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter pickup location"
              className="w-full pl-8 pr-2.5 py-2 bg-slate-50/80 border border-slate-200/90 rounded-xl text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all shadow-inner"
            />
          </div>
        </div>

        {/* 2. DROP LOCATION */}
        <div className="space-y-1">
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
            Drop Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
              <Navigation className="w-3.5 h-3.5 text-slate-500" />
            </div>
            <input
              type="text"
              value={drop}
              onChange={(e) => {
                setDrop(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter drop location"
              className="w-full pl-8 pr-2.5 py-2 bg-slate-50/80 border border-slate-200/90 rounded-xl text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all shadow-inner"
            />
          </div>
        </div>

        {/* 3. VEHICLE PREFERENCE */}
        <div className="space-y-1">
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 flex items-center gap-1.5">
            <Car className="w-3 h-3 text-slate-500" />
            Vehicle Preference
          </label>
          <div className="relative">
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full px-2.5 py-2 bg-slate-50/80 border border-slate-200/90 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all appearance-none cursor-pointer shadow-inner"
            >
              <option value="Select vehicle type" disabled>
                Select vehicle type
              </option>
              {vehicleOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-[10px] text-brand-red font-bold animate-fade-in-up">{error}</p>
        )}

        {/* MAIN GET A QUOTE BUTTON */}
        <button
          type="submit"
          className="w-full mt-1.5 bg-gradient-to-r from-brand-red to-red-600 hover:from-brand-darkRed hover:to-red-700 text-white py-2.5 px-4 rounded-xl font-extrabold text-xs shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5 group cursor-pointer tracking-wide"
        >
          <span>Get a Quote</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        {/* SUBTLE FOOTER NOTE */}
        <div className="text-center pt-1">
          <p className="text-[10px] font-medium text-slate-500 flex items-center justify-center gap-1">
            <MessageCircle className="w-3 h-3 text-brand-green fill-current" />
            <span>We will contact you on WhatsApp</span>
          </p>
        </div>

      </form>
    </div>
  );
};

export default FloatingEnquiryCard;
