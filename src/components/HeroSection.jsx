import React from 'react';
import { MessageCircle, Compass, ShieldCheck } from 'lucide-react';
import FloatingEnquiryCard from './FloatingEnquiryCard';
import { openGeneralWhatsApp } from '../utils/whatsapp';

export const HeroSection = ({ onExploreFleet }) => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[85vh] pt-40 pb-24 lg:pt-48 lg:pb-32 flex items-center overflow-hidden bg-slate-950 scroll-mt-28">
      
      {/* BACKGROUND IMAGE & CINEMATIC OVERLAY */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <img
          src="/images/fleet/traveller/background-buses.jpg"
          alt="Bala's Travels Fleet"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.10]"
        />
        {/* Sleek edge gradients to enhance the background while ensuring 100% readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* CENTERED HERO CONTENT */}
          <div className="space-y-6 text-white max-w-4xl flex flex-col items-center">
            
            {/* BRAND BADGE WITH SMALL LOGO */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-extrabold tracking-[0.2em] uppercase text-white shadow-sm animate-smooth-enter mt-8 lg:mt-4">
              <img src="/logo.png" alt="Icon" className="h-4 w-auto object-contain drop-shadow-sm" />
              BALA'S TRAVELS
            </div>

            {/* STYLISH MAIN HEADING */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.3] flex flex-col items-center justify-center gap-y-2">
              <span className="font-black text-white drop-shadow-md text-2xl sm:text-3xl lg:text-4xl">
                Over 10 Years of Leadership in Crafting
              </span>
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-brand-red to-rose-500 drop-shadow-sm text-center">
                The Finest Chauffeur-Driven Experiences.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-semibold tracking-wide pt-4 text-center">
              Luxury, Punctuality & Professionalism — The Balas Standard Since Over a Decade.
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openGeneralWhatsApp("Hi Bala's Travels, I would like to book a chauffeur.")}
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 tracking-wide cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book Your Chauffeur</span>
              </button>
              
              <a
                href="#fleet"
                onClick={(e) => {
                  e.preventDefault();
                  if (onExploreFleet) onExploreFleet();
                  document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 tracking-wide cursor-pointer"
              >
                <Compass className="w-5 h-5 text-white" />
                <span>Explore Fleet</span>
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
