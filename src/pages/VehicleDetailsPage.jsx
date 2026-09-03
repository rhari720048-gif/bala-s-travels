import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MessageCircle, Phone, CheckCircle2, ShieldCheck, 
  Users, Luggage, Sparkles, Check, ChevronRight
} from 'lucide-react';
import { formatWhatsAppMessage, PHONE_NUMBER } from '../utils/whatsapp';
import { fullFleetCategories } from '../data/fleetData';

export const VehicleDetailsPage = ({ vehicle, categoryTitle = 'Vehicle', onBackToFleet, onSelectVehicle }) => {
  if (!vehicle) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <p className="text-sm text-slate-300">Vehicle details unavailable.</p>
          <button
            onClick={onBackToFleet}
            className="px-4 py-2 bg-brand-red text-white text-xs font-bold rounded-xl"
          >
            Back to Fleet
          </button>
        </div>
      </div>
    );
  }

  const safeName = vehicle.name || 'Bala\'s Travels Vehicle';
  const safeImage = vehicle.image || '/images/crysta.png';
  const safeCapacity = vehicle.capacity || '4-7 Passengers';
  const safeCatTitle = categoryTitle || 'Vehicle';

  // Find other vehicles in the same category for "Similar Vehicles" section safely
  const currentCategory = (fullFleetCategories && fullFleetCategories.length > 0)
    ? (fullFleetCategories.find(c => c && c.title === safeCatTitle) || fullFleetCategories[0])
    : null;

  const similarVehicles = (currentCategory && Array.isArray(currentCategory.vehicles))
    ? currentCategory.vehicles.filter(v => v && v.name !== safeName).slice(0, 4)
    : [];

  const handleDirectWhatsApp = () => {
    const customMessage = formatWhatsAppMessage({
      pickup: '',
      drop: '',
      vehicle: `${safeName} (${safeCatTitle})`
    });

    window.open(customMessage, '_blank');
  };

  return (
    <div key={safeName} className="min-h-screen bg-slate-50 text-slate-900 animate-smooth-enter">
      
      {/* BREADCRUMB & BACK HEADER WITH GRADIENT ACCENT */}
      <section className="bg-slate-950 text-white pt-24 pb-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={onBackToFleet}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-brand-red hover:text-white text-white text-xs font-bold transition-all duration-200 border border-white/20 cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Fleet</span>
            </button>

            <span className="text-xs text-slate-500">/</span>
            <span className="text-xs text-slate-300 font-semibold">{safeCatTitle}</span>
            <span className="text-xs text-slate-500">/</span>
            <span className="text-xs font-bold text-brand-red">{safeName}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <motion.h1 
                key={`title-${safeName}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white"
              >
                {safeName}
              </motion.h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Premium {safeCatTitle} vehicle available for local city rides, outstation tours, and airport transfers across South India.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="bg-brand-red text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                {safeCatTitle}
              </span>
              <span className="bg-slate-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-700 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-brand-red" />
                {safeCapacity}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN VEHICLE DETAILS SHOWCASE SECTION */}
      <section id="vehicle-showcase-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: SPECIFICATIONS & QUALITY PROMISE */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            
            {/* KEY VEHICLE SPECIFICATIONS BOX */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-brand-red flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> VEHICLE SPECS & COMFORT
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                  Features & Comfort Specifications
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-brand-red/40 transition-all duration-200 space-y-1 group">
                  <div className="flex items-center gap-1.5 text-brand-red group-hover:scale-105 transition-transform origin-left">
                    <Users className="w-4 h-4" />
                    <span className="font-bold uppercase text-[10px] text-slate-500">Seating</span>
                  </div>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm block">{safeCapacity}</span>
                </div>

                <div className="p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-500/40 transition-all duration-200 space-y-1 group">
                  <div className="flex items-center gap-1.5 text-emerald-600 group-hover:scale-105 transition-transform origin-left">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-bold uppercase text-[10px] text-slate-500">AC System</span>
                  </div>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm block">Dual Climate AC</span>
                </div>

                <div className="p-3.5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-indigo-500/40 transition-all duration-200 space-y-1 group">
                  <div className="flex items-center gap-1.5 text-indigo-600 group-hover:scale-105 transition-transform origin-left">
                    <Luggage className="w-4 h-4" />
                    <span className="font-bold uppercase text-[10px] text-slate-500">Luggage</span>
                  </div>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm block">Spacious Boot</span>
                </div>
              </div>

              {/* SUITABLE JOURNEY TYPES */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-slate-700 block">Recommended Trip Types:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Outstation Journeys', 'Local City Rental', 'Airport Transfers', 'Wedding & Events'].map((tag, idx) => (
                    <span key={idx} className="bg-slate-100 hover:bg-brand-red/10 hover:text-brand-red text-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/70 font-semibold flex items-center gap-1.5 text-xs transition-all duration-200 cursor-default">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* TRUST GUARANTEE LIST */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3 text-xs">
              <span className="font-extrabold text-slate-900 uppercase tracking-wider block text-xs sm:text-sm">Bala's Travels Quality Promise:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-xs">
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">100% Sanitized & Clean Interiors</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Experienced Uniformed Driver</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">On-Time Pickup Guarantee</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Transparent Outstation Billing</span>
                </div>
              </div>
            </div>

          </div>


          {/* RIGHT SIDE: LARGE VEHICLE PHOTO SHOWCASE WITH 60FPS SPRING POP ANIMATION */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-md sticky top-24 space-y-4">
              
              {/* LARGE STUDIO PHOTO CONTAINER */}
              <div className="relative h-64 sm:h-80 md:h-96 bg-transparent rounded-2xl p-4 flex items-center justify-center overflow-hidden group">
                
                <motion.img
                  key={safeName}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={safeImage}
                  alt={safeName}
                  className="max-h-60 sm:max-h-76 md:max-h-88 w-full object-contain filter drop-shadow-md z-10 transform-gpu"
                />
                
                <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-[11px] font-extrabold text-slate-800 border border-slate-200 flex items-center gap-1.5 shadow-2xs z-20">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Vehicle
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleDirectWhatsApp}
                  className="py-3.5 px-4 rounded-xl bg-brand-green hover:bg-brand-darkGreen text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </button>

                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>Call Us Now</span>
                </a>
              </div>

            </div>
          </div>

        </div>


        {/* SIMILAR VEHICLES IN THIS CATEGORY */}
        {similarVehicles.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider">EXPLORE MORE</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Other Vehicles in {safeCatTitle}
                </h3>
              </div>

              <button
                onClick={onBackToFleet}
                className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
              >
                <span>View Full Fleet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* INTERACTIVE CARDS GRID WITH INSTANT RESPONSE */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {similarVehicles.map((simV, sIdx) => {
                if (!simV) return null;
                return (
                  <div
                    key={simV.name || sIdx}
                    onClick={() => {
                      if (onSelectVehicle) onSelectVehicle(simV, safeCatTitle, true);
                    }}
                    className="smooth-card-card bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-brand-red shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group p-3 space-y-2.5"
                  >
                    <div className="h-24 sm:h-28 bg-transparent rounded-xl p-1 flex items-center justify-center overflow-hidden">
                      <img
                        src={simV.image || '/images/crysta.png'}
                        alt={simV.name || 'Car'}
                        className="smooth-car-img max-h-20 sm:max-h-24 w-full object-contain"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-red transition-colors line-clamp-1">
                          {simV.name}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-semibold">{simV.capacity || '4 Passengers'}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </section>

    </div>
  );
};

export default VehicleDetailsPage;
