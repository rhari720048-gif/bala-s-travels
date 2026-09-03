import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, ArrowLeft, Users, Crown, Compass, 
  ShieldCheck, Sparkles, Bus, Search, ChevronRight
} from 'lucide-react';
import { fullFleetCategories } from '../data/fleetData';
import { InteractiveCarCard } from '../components/InteractiveCarCard';

export const FleetPage = ({ onBackToHome, onSelectVehicle }) => {
  const [selectedCatId, setSelectedCatId] = useState('all');
  const [seaterFilter, setSeaterFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Active categories list
  const filteredCategories = useMemo(() => {
    let list = fullFleetCategories;
    if (selectedCatId !== 'all') {
      list = list.filter(c => c.id === selectedCatId);
    }
    return list;
  }, [selectedCatId]);

  const getCategoryIcon = (id, active) => {
    const iconClass = `w-4 h-4 transition-colors ${active ? 'text-white' : 'text-brand-red'}`;
    switch (id) {
      case 'sedan':
        return <Car className={iconClass} />;
      case 'luxury':
        return <Crown className={`w-4 h-4 ${active ? 'text-amber-300' : 'text-amber-500'}`} />;
      case 'hatchback':
        return <Compass className={`w-4 h-4 ${active ? 'text-emerald-200' : 'text-emerald-600'}`} />;
      case 'suv':
        return <ShieldCheck className={`w-4 h-4 ${active ? 'text-indigo-200' : 'text-indigo-600'}`} />;
      case 'traveller':
        return <Bus className={`w-4 h-4 ${active ? 'text-purple-200' : 'text-purple-600'}`} />;
      default:
        return <Car className={iconClass} />;
    }
  };

  const handleCardClick = (vehicle, categoryTitle) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicle, categoryTitle);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/90 text-slate-900">
      
      {/* HEADER HERO BANNER WITH ANIMATED PARTICLES & GLOW */}
      <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        
        {/* ANIMATED AMBIENT GLOW BACKDROP */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Bala's Travels Fleet"
            className="w-full h-full object-cover filter brightness-[0.18] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-red/20 rounded-full filter blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05, x: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-brand-red hover:text-white text-white text-xs font-bold transition-all border border-white/20 cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-1.5"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Bala's Travels Showroom
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Tap any vehicle below for 3D inspection, features, passenger capacity, and instant WhatsApp booking.
            </p>
          </motion.div>

          {/* SEARCH BAR & ANIMATED FLUID TAB GLIDER */}
          <div className="pt-2 space-y-4">
            
            {/* SEARCH INPUT WITH GLOW */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search car (e.g. Innova, Verna, Seltos, Ciaz)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-900/90 text-white text-xs rounded-2xl border border-slate-700 focus:border-brand-red focus:outline-none placeholder-slate-500 transition-all shadow-inner"
              />
              <Search className="absolute left-3 top-3 w-3.5 h-3.5 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* FLUID ANIMATED CATEGORY GLIDER TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none relative">
              
              {/* ALL VEHICLES TAB */}
              <button
                onClick={() => setSelectedCatId('all')}
                className="relative px-4 py-2 rounded-2xl text-xs font-extrabold transition-colors shrink-0 cursor-pointer z-10"
              >
                {selectedCatId === 'all' && (
                  <motion.div
                    layoutId="activeCategoryGlider"
                    className="absolute inset-0 bg-brand-red rounded-2xl shadow-md z-[-1]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={selectedCatId === 'all' ? 'text-white' : 'text-slate-300'}>
                  All Vehicles ({fullFleetCategories.reduce((acc, c) => acc + c.vehicles.length, 0)})
                </span>
              </button>

              {/* CATEGORY TABS WITH SPRING CAPSULE */}
              {fullFleetCategories.map((cat) => {
                const isActive = selectedCatId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCatId(cat.id)}
                    className="relative px-4 py-2 rounded-2xl text-xs font-extrabold transition-colors shrink-0 cursor-pointer flex items-center gap-1.5 z-10"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryGlider"
                        className="absolute inset-0 bg-brand-red rounded-2xl shadow-md z-[-1]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {getCategoryIcon(cat.id, isActive)}
                    <span className={isActive ? 'text-white' : 'text-slate-300'}>
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* MAIN FLEET CONTENT: ANIMATED CATEGORY CARDS STAGGERED GRID */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        <AnimatePresence mode="wait">
          {filteredCategories.map((cat) => {
            let vehicles = cat.vehicles;

            if (seaterFilter !== 'all') {
              vehicles = vehicles.filter(v => {
                if (seaterFilter === '4') return v.capacity.includes('4');
                if (seaterFilter === '5') return v.capacity.includes('5');
                if (seaterFilter === '7') return v.capacity.includes('7') || v.capacity.includes('6');
                if (seaterFilter === '12+') return v.capacity.includes('12') || v.capacity.includes('35') || v.capacity.includes('45');
                return true;
              });
            }

            if (searchQuery.trim() !== '') {
              const q = searchQuery.toLowerCase();
              vehicles = vehicles.filter(v => v.name.toLowerCase().includes(q));
            }

            if (vehicles.length === 0 && (searchQuery || seaterFilter !== 'all')) {
              return null;
            }

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                id={cat.id}
                className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm space-y-5"
              >
                {/* CATEGORY HEADER BOX */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-100 rounded-2xl border border-slate-200/60 shrink-0">
                      {getCategoryIcon(cat.id, false)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                          {cat.title}
                        </h2>
                        <span className="bg-brand-lightRed text-brand-red text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {cat.badge}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 hidden sm:block mt-0.5">{cat.description}</p>
                    </div>
                  </div>

                  <div className="text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-2xl shrink-0 border border-slate-200/60 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-brand-red" />
                    <span>{vehicles.length} Models</span>
                  </div>
                </div>

                {/* 3D TILT INTERACTIVE CARDS GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
                  {vehicles.map((v, vIdx) => (
                    <InteractiveCarCard
                      key={v.name || vIdx}
                      vehicle={v}
                      categoryTitle={cat.title}
                      onClick={() => handleCardClick(v, cat.title)}
                    />
                  ))}
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      {/* FOOTER CTA */}
      <section className="py-12 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-lg sm:text-2xl font-bold">Looking for Custom Fleet Arrangements?</h3>
          <p className="text-xs text-slate-300">
            We provide custom vehicle packages and large push-back luxury coaches for corporate events, outstation tours, and family trips across South India.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onBackToHome()}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-darkRed text-white px-6 py-3 rounded-2xl font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Landing Page</span>
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default FleetPage;
