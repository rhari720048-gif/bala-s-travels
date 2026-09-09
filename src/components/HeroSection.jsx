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
          src="/images/hero-bg.jpg"
          alt="Bala's Travels Highway Journey"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08]"
        />
        {/* Sleek edge gradients to enhance white Range Rover in center while ensuring 100% readable text on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT (6 cols - Pushed Far Left with Premium Typography) */}
          <div className="lg:col-span-6 space-y-6 text-white text-left max-w-lg">
            
            {/* BRAND BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-extrabold tracking-[0.2em] uppercase text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              BALA'S TRAVELS
            </div>

            {/* STYLISH MAIN HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
              <span className="block font-black text-white drop-shadow-md">
                Your Journey.
              </span>
              <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-rose-500 drop-shadow-sm">
                Our Responsibility.
              </span>
            </h1>

            {/* STYLISH SUBHEADING */}
            <p className="text-base sm:text-lg font-bold text-slate-100 tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-red flex-shrink-0" />
              <span>Reliable Pickup & Drop Services Across South India</span>
            </p>

            {/* SPECIAL OFFERS HIGHLIGHT CARD */}
            <div className="bg-white/10 backdrop-blur-md border border-brand-red/40 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_8px_rgba(217,35,45,0.8)]" />
                <h3 className="text-xs font-black text-white uppercase tracking-widest drop-shadow-sm">Special Pickup Rates</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950/60 rounded-lg p-3 border border-white/10 transform transition-transform hover:-translate-y-1">
                  <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wider mb-1">Small Cars</p>
                  <p className="text-brand-red font-black text-xl drop-shadow-sm">₹700 <span className="text-[11px] text-slate-400 font-semibold tracking-normal">/ 20 km</span></p>
                </div>
                <div className="bg-slate-950/60 rounded-lg p-3 border border-white/10 transform transition-transform hover:-translate-y-1">
                  <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wider mb-1">Big Cars</p>
                  <p className="text-brand-red font-black text-xl drop-shadow-sm">₹1000 <span className="text-[11px] text-slate-400 font-semibold tracking-normal">/ 20 km</span></p>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-normal">
              Share your pickup and drop location with us, and our team will help you plan a comfortable journey with the right vehicle.
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => openGeneralWhatsApp()}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-brand-red to-red-600 hover:from-brand-darkRed hover:to-red-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire on WhatsApp</span>
              </button>

              <a
                href="#fleet"
                onClick={(e) => {
                  e.preventDefault();
                  if (onExploreFleet) onExploreFleet();
                  document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-slate-900 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 tracking-wide border border-white"
              >
                <Compass className="w-4 h-4 text-brand-red" />
                <span>Explore Our Fleet</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE FLOATING ENQUIRY CARD (6 cols - Far Right) */}
          <div className="lg:col-span-6 w-full flex justify-end">
            <FloatingEnquiryCard />
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
