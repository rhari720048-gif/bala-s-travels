import React, { useState, useMemo } from 'react';
import { MapPin, Navigation, Car, ArrowRight, MessageCircle } from 'lucide-react';
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
      
      {/* CARD TITLE & SUBTITLE */}
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

      {submitted ? (
        <div className="py-4 text-center space-y-3 animate-smooth-enter">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <svg className="w-7 h-7 stroke-emerald-600 fill-none stroke-[3]" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                className="animate-checkmark"
              />
            </svg>
          </div>

          <div className="space-y-1">
            <h4 className="text-base font-black text-slate-900 tracking-tight">Enquiry Sent!</h4>
            <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
              Your travel details have been logged and sent to our dispatch desk. We will update you shortly!
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full py-2 bg-brand-red hover:bg-brand-darkRed text-white text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-xs"
          >
            + New Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5">
          
          {/* PICKUP LOCATION INPUT */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-red shrink-0" />
              <span>Pickup Location *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Chennai Airport, Central Railway..."
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
            />
          </div>

          {/* DROP DESTINATION INPUT */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
              <Navigation className="w-3 h-3 text-brand-red shrink-0" />
              <span>Drop Destination *</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Pondicherry, Madurai, Ooty..."
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
            />
          </div>

          {/* CAR TYPE CATEGORY SELECTOR */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
              <Car className="w-3 h-3 text-slate-500 shrink-0" />
              <span>Select Car Type (Category)</span>
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none text-xs transition-colors appearance-none cursor-pointer"
              >
                <option value="">Choose Category (e.g. Sedan, SUV)</option>
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

          {/* SPECIFIC CAR MODEL SELECTOR */}
          {selectedCategory && availableModels.length > 0 && (
            <div className="space-y-1 animate-smooth-enter">
              <label className="text-[11px] font-extrabold text-slate-700 block">
                Select Specific Car Model
              </label>
              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none text-xs transition-colors appearance-none cursor-pointer"
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
      )}
    </div>
  );
};

export default FloatingEnquiryCard;
