import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MessageCircle, MapPin, Clock, 
  Send, Sparkles, ShieldCheck, CheckCircle2, Headphones, ChevronRight
} from 'lucide-react';
import { formatWhatsAppMessage, openGeneralWhatsApp, PHONE_NUMBER } from '../utils/whatsapp';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = formatWhatsAppMessage({
      name: formData.name,
      phone: formData.phone,
      pickup: formData.pickup,
      drop: formData.drop,
      date: formData.date,
      vehicle: 'Custom Travel Enquiry'
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
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> 24/7 SUPPORT & RESERVATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact Bala's Travels Today
          </h2>
          <p className="text-sm text-slate-600">
            Have questions or need an instant fare estimate? Call us directly, chat on WhatsApp, or send your travel details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: INTERACTIVE LIGHT-THEMED CARDS WITH HOVER ANIMATIONS */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* DIRECT PHONE CARD */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-red/60 transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-lightRed text-brand-red rounded-2xl border border-brand-red/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-extrabold uppercase block">Call Us 24/7</span>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-lg font-black text-slate-900 group-hover:text-brand-red transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-brand-red group-hover:text-white text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-500">Direct booking desk & instant call assistance across South India.</p>
            </motion.div>

            {/* WHATSAPP CARD */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => openGeneralWhatsApp()}
              className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-green/60 transition-all duration-300 space-y-3 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 text-brand-green rounded-2xl border border-brand-green/20 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-extrabold uppercase block">Instant WhatsApp Chat</span>
                    <span className="text-lg font-black text-slate-900 group-hover:text-brand-green transition-colors">
                      WhatsApp Desk
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-emerald-50 group-hover:bg-brand-green group-hover:text-white text-brand-green flex items-center justify-center transition-colors shadow-2xs">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-slate-500">Get custom tariff quotes and vehicle photos directly on WhatsApp.</p>
            </motion.div>

            {/* ADDRESS & HOURS CARD */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="p-3 bg-slate-100 text-slate-700 rounded-2xl border border-slate-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-extrabold uppercase block">Headquarters & Network</span>
                  <span className="text-sm font-extrabold text-slate-900 block">Bala's Travels Main Hub</span>
                  <span className="text-xs text-slate-500 leading-relaxed block mt-1">
                    Chennai & Pan-South India Operations Desk (Serving Tamil Nadu, Karnataka, Kerala, Andhra Pradesh & Telangana)
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Clock className="w-4 h-4 text-emerald-600" /> Operating 24 Hours / 365 Days
                </span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-extrabold border border-emerald-200">
                  ONLINE NOW
                </span>
              </div>
            </motion.div>

          </div>


          {/* RIGHT SIDE: LIGHT THEMED ENQUIRY FORM */}
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
