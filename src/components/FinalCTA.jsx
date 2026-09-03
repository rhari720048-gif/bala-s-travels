import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openGeneralWhatsApp } from '../utils/whatsapp';

export const FinalCTA = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 p-8 sm:p-12 lg:p-16 border border-slate-800">
        
        {/* BACKGROUND IMAGE & OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Bala's Travels Outstation Highway"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              READY TO TRAVEL?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal">
              Share your pickup and drop location with us and let's plan your ride.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => openGeneralWhatsApp("Hi Bala's Travels, I would like to start planning my pickup & drop journey across South India.")}
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
