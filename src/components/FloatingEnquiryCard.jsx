import React, { useState, useMemo } from 'react';
import { MapPin, Navigation, Car, ArrowRight, MessageCircle } from 'lucide-react';
import { formatWhatsAppMessage } from '../utils/whatsapp';
import { fullFleetCategories } from '../data/fleetData';
import { addEnquiry } from '../utils/enquiryStore';

export const FloatingEnquiryCard = ({ className = '' }) => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [error, setError] = useState('');

  const [submitted, setSubmitted] = useState(false);

  // Available car models based on selected category
  const availableModels = useMemo(() => {
    if (!selectedCategory) return [];
    const cat = fullFleetCategories.find(c => c.title === selectedCategory);
    return cat ? cat.vehicles.map(v => v.name) : [];
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    const catTitle = e.target.value;
    setSelectedCategory(catTitle);
    setSelectedModel(''); // Reset model when category changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickup.trim() && !drop.trim()) {
      setError('Please enter pickup or drop location');
      return;
    }
    setError('');
    
    // Save to central enquiry store for Admin Dashboard
    addEnquiry({
      name: 'Quick Route Guest',
      phone: 'Direct WhatsApp',
      pickup: pickup || 'N/A',
      drop: drop || 'N/A',
      category: selectedCategory || 'General',
      model: selectedModel || 'Any Model'
    });
    
    setSubmitted(true);
    setPickup('');
    setDrop('');
    setSelectedCategory('');
    setSelectedModel('');
  };

  return (
    <div className={`bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/90 max-w-[340px] w-full ${className}`}>
      
      {/* CARD TITLE & SUBTITLE (CLEAN WITHOUT UNWANTED STAR ICONS) */}
      <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-100">
        <div className="w-7 h-7 rounded-lg bg-brand-red flex items-center justify-center text-white shadow-xs flex-shrink-0">
          <Navigation className="w-3.5 h-3.5" />
        </div>
        <div>
          <h3 className="text-xs font-black text-slate-900 tracking-tight">
            Quick Route Enquiry
          </h3>
          <p className="text-[10px] font-semibold text-slate-400">Instant WhatsApp Quote</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        
        {/* 1. PICKUP LOCATION */}
        <div className="space-y-1">
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block" />
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
              className="w-full pl-8 pr-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red transition-all shadow-inner"
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
              className="w-full pl-8 pr-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-red transition-all shadow-inner"
            />
          </div>
        </div>

        {/* 3. CAR TYPE / CATEGORY DROPDOWN */}
        <div className="space-y-1">
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 flex items-center gap-1.5">
            <Car className="w-3 h-3 text-slate-500" />
            Car Type (Category)
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer shadow-inner"
            >
              <option value="" disabled>Select Car Type</option>
              {fullFleetCategories.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title}
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

        {/* 4. SPECIFIC CAR MODEL DROPDOWN (CASCADING) */}
        {selectedCategory && (
          <div className="space-y-1 animate-fade-in-up">
            <label className="text-[10px] font-extrabold uppercase tracking-widest text-brand-red flex items-center gap-1.5">
              Select Specific Car Model
            </label>
            <div className="relative">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-2.5 py-2 bg-slate-50 border border-brand-red/40 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer shadow-inner"
              >
                <option value="">Any {selectedCategory} Model</option>
                {availableModels.map((m, idx) => (
                  <option key={idx} value={m}>
                    {m}
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
        )}

        {error && (
          <p className="text-[10px] text-brand-red font-bold">{error}</p>
        )}

        {/* MAIN GET A QUOTE BUTTON */}
        <button
          type="submit"
          className="w-full mt-1.5 bg-brand-red hover:bg-brand-darkRed text-white py-2.5 px-4 rounded-xl font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 group cursor-pointer tracking-wide"
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

      {/* SUBMITTED SUCCESS TICK POPUP MODAL */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-smooth-enter">
          <div className="bg-white rounded-3xl p-6 max-w-xs w-full text-center space-y-3.5 shadow-2xl border border-slate-100 relative">
            
            {/* ANIMATED GREEN TICK CIRCLE */}
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <svg className="w-8 h-8 stroke-emerald-600 fill-none stroke-[3]" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                  className="animate-checkmark"
                />
              </svg>
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-black text-slate-900 tracking-tight">Enquiry Sent!</h4>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Your route details have been logged in our dispatch desk. We will update you shortly!
              </p>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-md"
            >
              OK, Got it
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingEnquiryCard;
