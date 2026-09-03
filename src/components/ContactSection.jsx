import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MessageCircle, MapPin, Clock, 
  Send, ShieldCheck, Car, CheckCircle2
} from 'lucide-react';
import { formatWhatsAppMessage, openGeneralWhatsApp, PHONE_NUMBER } from '../utils/whatsapp';
import { fullFleetCategories } from '../data/fleetData';
import { addEnquiry } from '../utils/enquiryStore';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    category: '',
    model: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Available models based on selected category
  const availableModels = useMemo(() => {
    if (!formData.category) return [];
    const cat = fullFleetCategories.find(c => c.title === formData.category);
    return cat ? cat.vehicles.map(v => v.name) : [];
  }, [formData.category]);

  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      category: e.target.value,
      model: '' // Reset model when category changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to central enquiry store for Admin Dashboard
    addEnquiry({
      name: formData.name || 'Travel Guest',
      phone: formData.phone || 'N/A',
      pickup: formData.pickup || 'N/A',
      drop: formData.drop || 'N/A',
      date: formData.date || new Date().toISOString().split('T')[0],
      category: formData.category || 'General',
      model: formData.model || 'Any Model'
    });
    
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      pickup: '',
      drop: '',
      date: '',
      category: '',
      model: ''
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">
            RESERVATIONS & 24/7 SUPPORT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Plan Your Journey With Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Direct booking assistance, tariff quotes, and vehicle reservations across South India.
          </p>
        </div>

        {/* UNIFIED ARCHITECTURAL DUAL PANEL CONTAINER */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT SIDE: SLATE-900 PREMIUM BRAND PANEL */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between relative space-y-8">
            
            <div className="space-y-6">
              <div className="w-12 h-1.5 bg-brand-red rounded-full" />
              
              <div className="space-y-2">
                <h3 className="text-2xl font-black tracking-tight text-white">
                  Bala's Travels Booking Desk
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Our team is available 24 hours a day to help you select the right vehicle, calculate route tariffs, and arrange doorstep pickup.
                </p>
              </div>

              {/* 3 CLEAN INFORMATION ROWS */}
              <div className="space-y-5 pt-2 text-xs">
                
                {/* CALL DESK */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-brand-red text-white rounded-2xl shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Call 24/7 Direct</span>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-base font-black text-white hover:text-red-400 transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                {/* WHATSAPP DESK */}
                <div 
                  onClick={() => openGeneralWhatsApp()}
                  className="flex items-start gap-3.5 cursor-pointer group"
                >
                  <div className="p-3 bg-emerald-600 text-white rounded-2xl shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Instant Support</span>
                    <span className="text-base font-black text-white group-hover:text-emerald-400 transition-colors">
                      WhatsApp Booking Desk
                    </span>
                  </div>
                </div>

                {/* CHENNAI HQ */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-slate-800 text-slate-300 rounded-2xl shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Main Operations Hub</span>
                    <p className="text-xs font-semibold text-slate-200 leading-relaxed mt-0.5">
                      Ashok Nagar, West Jafferkhanpet, Chennai, Tamil Nadu – 600083
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* BOTTOM OPERATING STATUS */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                24/7 Active Operations Desk
              </span>
              <span className="text-[10px] text-slate-400 font-medium">TN • KA • KL • AP • TS</span>
            </div>

          </div>


          {/* RIGHT SIDE: PRISTINE BOOKING FORM OR SUCCESS CARD */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-white flex flex-col justify-center">
            
            {submitted ? (
              <div className="py-10 px-4 text-center space-y-5 animate-smooth-enter">
                
                {/* ANIMATED GREEN TICK CIRCLE */}
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <svg className="w-10 h-10 stroke-emerald-600 fill-none stroke-[3]" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                      className="animate-checkmark"
                    />
                  </svg>
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Form Submitted Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                    Thank you for choosing Bala's Travels! Your journey requirements have been sent to our 24/7 dispatch desk. We will contact you shortly on WhatsApp / Phone.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 bg-brand-red hover:bg-brand-darkRed text-white text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <span>+ Send Another Enquiry</span>
                </button>

              </div>
            ) : (
              <>
                <div className="border-b border-slate-100 pb-4 mb-6 space-y-1">
                  <span className="text-xs font-extrabold text-brand-red uppercase tracking-wider">ONLINE BOOKING ENQUIRY</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Send Travel Details
                  </h3>
                  <p className="text-xs text-slate-500">Fill in your journey requirements for instant response on WhatsApp.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  {/* NAME & PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold block">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold block">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* PICKUP & DROP */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold block">Pickup Location / City *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chennai, Madurai, Trichy"
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold block">Drop Destination *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rameshwaram, Kanyakumari, Ooty"
                        value={formData.drop}
                        onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none placeholder-slate-400 text-xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* CAR TYPE CATEGORY & SPECIFIC MODEL CASCADING DROPDOWNS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-brand-red" />
                        Car Type (Category) *
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.category}
                          onChange={handleCategoryChange}
                          className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none text-xs transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select Car Type Category</option>
                          {fullFleetCategories.map((cat) => (
                            <option key={cat.id} value={cat.title}>
                              {cat.title}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-700 font-bold block">
                        Select Specific Car Model
                      </label>
                      <div className="relative">
                        <select
                          disabled={!formData.category}
                          value={formData.model}
                          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none text-xs transition-colors appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="">
                            {formData.category ? `Any ${formData.category} Model` : 'First Select Car Type'}
                          </option>
                          {availableModels.map((m, idx) => (
                            <option key={idx} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TRAVEL DATE */}
                  <div className="space-y-1">
                    <label className="text-slate-700 font-bold block">Travel Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 text-slate-900 rounded-xl border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none text-xs transition-colors"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-red hover:bg-brand-darkRed text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Travel Enquiry</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Your information is 100% confidential. Direct operator response.
                  </p>

                </form>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
