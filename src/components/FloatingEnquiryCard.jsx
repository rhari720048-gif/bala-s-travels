import React, { useState, useMemo } from 'react';
import { MapPin, Navigation, Car, ArrowRight, MessageCircle, User, Phone, Clock } from 'lucide-react';
import { getAllFleetCategories } from '../utils/vehicleStore';
import { addEnquiry } from '../utils/enquiryStore';
import { formatWhatsAppMessage } from '../utils/whatsapp';

export const FloatingEnquiryCard = ({ className = '' }) => {
  const fullFleetCategories = useMemo(() => getAllFleetCategories(), []);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [hours, setHours] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || (!pickup.trim() && !drop.trim() && !hours.trim())) {
      setError('Please fill in Name, Mobile and at least Pickup/Drop or Hours');
      return;
    }
    setError('');
    
    // Save to central enquiry store for Admin Dashboard
    addEnquiry({
      name: name,
      phone: phone,
      pickup: pickup || 'N/A',
      drop: drop || 'N/A',
      category: selectedCategory || 'Any',
      model: hours ? `${hours} Hours` : 'N/A'
    });

    const waUrl = formatWhatsAppMessage({
      name,
      phone,
      pickup,
      drop,
      hours,
      vehicle: selectedCategory
    });
    window.open(waUrl, '_blank');
    
    setSubmitted(true);
    setName('');
    setPhone('');
    setPickup('');
    setDrop('');
    setHours('');
    setSelectedCategory('');
  };

  return (
    <div className={`bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/90 max-w-[340px] w-full ${className}`}>
      
      {/* CARD TITLE & SUBTITLE */}
      <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-100">
        <div className="w-7 h-7 rounded-lg bg-brand-green flex items-center justify-center text-white shadow-xs flex-shrink-0">
          <MessageCircle className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-xs font-black text-slate-900 tracking-tight">
            WhatsApp Enquiry
          </h3>
          <p className="text-[10px] font-semibold text-slate-400">Instant Booking & Quote</p>
        </div>
      </div>

      {submitted ? (
        <div className="py-4 text-center space-y-3 animate-smooth-enter">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <svg className="w-7 h-7 stroke-emerald-600 fill-none stroke-[3]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" className="animate-checkmark" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-black text-slate-900 tracking-tight">Opening WhatsApp!</h4>
            <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
              Your details have been passed to WhatsApp. Please hit send to connect with us!
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full py-2 bg-brand-green hover:bg-brand-darkGreen text-white text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-xs"
          >
            + New Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5">
          
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
                <User className="w-3 h-3 text-brand-green shrink-0" />
                <span>Name *</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-green focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
                <Phone className="w-3 h-3 text-brand-green shrink-0" />
                <span>Mobile *</span>
              </label>
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-green focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-green shrink-0" />
              <span>Pickup Location</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Chennai Airport, Central..."
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-green focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
                <Navigation className="w-3 h-3 text-brand-green shrink-0" />
                <span>Drop Location</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Pondicherry"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-green focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
                <Clock className="w-3 h-3 text-brand-green shrink-0" />
                <span>Duration</span>
              </label>
              <input
                type="number"
                placeholder="e.g. 5 Hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-green focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
              <Car className="w-3 h-3 text-slate-500 shrink-0" />
              <span>Vehicle Preference (e.g. Innova Crysta)</span>
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-green focus:bg-white focus:outline-none text-xs transition-colors appearance-none cursor-pointer"
              >
                <option value="">Any Vehicle</option>
                {fullFleetCategories.map((cat) => (
                  <optgroup key={cat.id} label={cat.title}>
                    {cat.vehicles.map((v, i) => (
                      <option key={i} value={v.name}>{v.name}</option>
                    ))}
                  </optgroup>
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
            <p className="text-[10px] text-brand-red font-bold">{error}</p>
          )}

          <button
            type="submit"
            className="w-full mt-1.5 bg-brand-green hover:bg-brand-darkGreen text-white py-2.5 px-4 rounded-xl font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 group cursor-pointer tracking-wide"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send on WhatsApp</span>
            <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </form>
      )}
    </div>
  );
};

export default FloatingEnquiryCard;
