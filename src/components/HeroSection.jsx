import React from 'react';
import { MessageCircle, Compass, ShieldCheck } from 'lucide-react';
import FloatingEnquiryCard from './FloatingEnquiryCard';
import { openGeneralWhatsApp } from '../utils/whatsapp';

export const HeroSection = ({ onExploreFleet }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[85vh] pt-28 pb-16 lg:py-24 flex items-center overflow-hidden bg-slate-950">
      
      {/* BACKGROUND IMAGE & CINEMATIC OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7b/2016_Toyota_Innova_Crysta_2.4_V.jpg"
          alt="Bala's Travels SUV Journey - Innova Crysta"
          className="w-full h-full object-cover object-center filter brightness-[0.60] contrast-[1.20]"
        />
        {/* Sleek edge gradients to enhance the background while ensuring 100% readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* CENTERED HERO CONTENT */}
          <div className="space-y-6 text-white max-w-3xl flex flex-col items-center">
            
            {/* BRAND BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-extrabold tracking-[0.2em] uppercase text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              BALA'S TRAVELS
            </div>

            {/* STYLISH MAIN HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.08]">
              <span className="block font-black text-white drop-shadow-md">
                Your Journey.
              </span>
              <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-rose-500 drop-shadow-sm">
                Our Responsibility.
              </span>
            </h1>

            {/* STYLISH SUBHEADING */}
            <p className="text-base sm:text-lg font-bold text-slate-100 tracking-wide flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-red flex-shrink-0" />
              <span>Reliable Pickup & Drop Services Across South India</span>
            </p>

            {/* SPECIAL OFFERS HIGHLIGHT - Minimalist Version */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 pt-2 pb-3 justify-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-12 bg-brand-red rounded-full shadow-[0_0_12px_rgba(217,35,45,0.9)]" />
                <div className="text-left">
                  <p className="text-xs text-brand-red font-black uppercase tracking-widest leading-none mb-2">Airport (Sedan)</p>
                  <p className="text-white font-black text-2xl sm:text-3xl leading-none drop-shadow-md">₹700 <span className="text-sm text-slate-300 font-bold">/ 20km</span></p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-12 bg-brand-red rounded-full shadow-[0_0_12px_rgba(217,35,45,0.9)]" />
                <div className="text-left">
                  <p className="text-xs text-brand-red font-black uppercase tracking-widest leading-none mb-2">Airport (SUVs)</p>
                  <p className="text-white font-black text-2xl sm:text-3xl leading-none drop-shadow-md">₹1000 <span className="text-sm text-slate-300 font-bold">/ 20km</span></p>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-normal">
              Share your pickup and drop location with us, and our team will help you plan a comfortable journey with the right vehicle.
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#fleet"
                onClick={(e) => {
                  e.preventDefault();
                  if (onExploreFleet) onExploreFleet();
                  document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-red to-red-600 hover:from-brand-darkRed hover:to-red-700 text-white px-8 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 tracking-wide"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>Explore Our Fleet</span>
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
