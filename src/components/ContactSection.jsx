import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MessageCircle, MapPin, Clock, 
  Send, ShieldCheck, Car
} from 'lucide-react';
import { formatWhatsAppMessage, openGeneralWhatsApp, PHONE_NUMBER } from '../utils/whatsapp';
import { fullFleetCategories } from '../data/fleetData';

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
    
    let vehicleText = 'Custom Travel Enquiry';
    if (formData.category && formData.model) {
      vehicleText = `${formData.model} (${formData.category})`;
    } else if (formData.category) {
      vehicleText = formData.category;
    }

    const whatsappUrl = formatWhatsAppMessage({
      name: formData.name,
      phone: formData.phone,
      pickup: formData.pickup,
      drop: formData.drop,
      date: formData.date,
      vehicle: vehicleText
    });
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 300);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50/90 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* LIGHT BACKDROP AMBIENT GLOW */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* HEADER (CLEAN WITHOUT UNWANTED STAR ICONS) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">
            24/7 SUPPORT & RESERVATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact Bala's Travels Today
          </h2>
          <p className="text-sm text-slate-600">
            Have questions or need an instant fare estimate? Call us directly, chat on WhatsApp, or send your travel details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: DIRECT CLEAN CONTACT INFO LISTING (NO BOX CARDS) */}
          <div className="lg:col-span-5 space-y-8 py-2">
            
            {/* DIRECT PHONE DISPLAY */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-brand-lightRed text-brand-red rounded-2xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-extrabold uppercase block">Call Us 24/7</span>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-xl font-black text-slate-900 hover:text-brand-red transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-600 pl-14">Direct booking desk & instant call assistance across South India.</p>
            </div>

            {/* WHATSAPP DISPLAY */}
            <div 
              onClick={() => openGeneralWhatsApp()}
              className="space-y-2 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 text-brand-green rounded-2xl shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-extrabold uppercase block">Instant WhatsApp Chat</span>
                  <span className="text-xl font-black text-slate-900 group-hover:text-brand-green transition-colors">
                    WhatsApp Support Desk
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 pl-14">Get custom tariff quotes and vehicle photos directly on WhatsApp.</p>
            </div>

            {/* HEADQUARTERS & NETWORK DISPLAY */}
            <div className="space-y-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-slate-100 text-slate-700 rounded-2xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 font-extrabold uppercase block">Headquarters & Network</span>
                  <span className="text-base font-extrabold text-slate-900 block">Bala's Travels Main Hub</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ashok Nagar, Jawahar Nagar, West Jafferkhanpet, Chennai, Tamil Nadu – 600083
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Serving Tamil Nadu, Karnataka, Kerala, Andhra Pradesh & Telangana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold pl-14">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Operating 24 Hours / 365 Days</span>
              </div>
            </div>

          </div>


          {/* RIGHT SIDE: REDESIGNED CLEAN FORM WITH CASCADING CAR TYPE & MODEL SELECTORS */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg space-y-6"
            >
              
              <div className="border-b border-slate-100 pb-4 space-y-1">
                <span className="text-xs font-extrabold text-brand-red uppercase tracking-wider">ONLINE BOOKING ENQUIRY</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Send Your Travel Details
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

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 bg-brand-red hover:bg-brand-darkRed text-white font-extrabold text-xs rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitted ? 'Opening WhatsApp...' : 'Submit & Enquire via WhatsApp'}</span>
                </motion.button>

                <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Your information is 100% confidential. No spam guaranteed.
                </p>

              </form>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
