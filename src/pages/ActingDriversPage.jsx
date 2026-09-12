import React from 'react';
import { ArrowLeft, MapPin, User, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { openActingDriverWhatsApp } from '../utils/whatsapp';
import { useSEO } from '../utils/useSEO';
import { actingDriversData } from '../data/actingDriversData';

export const ActingDriversPage = ({ onBackToHome }) => {
  useSEO({
    title: "Professional Acting Drivers in Chennai | Call Drivers | Bala's Travels",
    description: "Hire reliable, background-verified acting drivers and call drivers in Chennai, Coimbatore, and Tamil Nadu for outstation trips, local errands, and night driving.",
    keywords: "Balas Travels acting drivers, best travels in Ashok Nagar Chennai, acting drivers Chennai, call drivers Tamil Nadu, hire driver for outstation, temporary drivers Coimbatore, experienced drivers for rent"
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 animate-smooth-enter">
      {/* HEADER SECTION */}
      <section className="bg-slate-950 text-white pt-32 lg:pt-40 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Acting Drivers <span className="text-brand-red">in Chennai</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
            Professional, background-verified, and experienced acting drivers available 24/7 for all your travel needs. Whether it's city commuting or outstation trips, we have you covered.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-full border border-white/5">
              <Clock className="w-4 h-4 text-brand-red" />
              24/7 Available
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-full border border-white/5">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              Verified Drivers
            </div>
          </div>
        </div>
      </section>

      {/* DRIVERS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actingDriversData.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 flex flex-col smooth-card-card group">
              <div className="h-48 relative overflow-hidden bg-slate-200">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 smooth-car-img"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                  {service.badge}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-brand-red" />
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">{service.title}</h3>
                </div>
                
                <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4 flex-1">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-slate-100">
                  <div className="text-sm font-black text-slate-900">{service.price}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Chennai
                  </div>
                </div>
                
                <button
                  onClick={() => openActingDriverWhatsApp(service.title)}
                  className="w-full bg-brand-green hover:bg-brand-darkGreen text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Book on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ActingDriversPage;
