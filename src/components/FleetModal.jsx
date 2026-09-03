import React from 'react';
import { X, Car, MessageCircle, Check } from 'lucide-react';
import { allFleetCategories } from '../data/fleetData';
import { formatWhatsAppMessage } from '../utils/whatsapp';

export const FleetModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleEnquireCategory = (vehicleName, categoryTitle) => {
    const whatsappUrl = formatWhatsAppMessage({
      pickup: '',
      drop: '',
      vehicle: `${vehicleName} (${categoryTitle})`
    });
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in-up">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* MODAL HEADER */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-slate-200 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">BALA'S TRAVELS FLEET COLLECTION</span>
            <h2 className="text-2xl font-black text-slate-900">Explore Complete Vehicle Fleet</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {allFleetCategories.map((cat) => (
            <div key={cat.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Car className="w-5 h-5 text-brand-red" />
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500">{cat.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {cat.vehicles.map((vName, vIdx) => (
                  <div
                    key={vIdx}
                    onClick={() => handleEnquireCategory(vName, cat.title)}
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-brand-red shadow-sm hover:shadow transition-all duration-200 flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-red group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-bold text-slate-800 group-hover:text-brand-red transition-colors">
                        {vName}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-brand-green flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Enquire
                      <MessageCircle className="w-3 h-3 fill-current" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL FOOTER */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>Need custom vehicle arrangements or larger luxury coaches?</p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-xs"
          >
            Close Fleet Overview
          </button>
        </div>

      </div>
    </div>
  );
};

export default FleetModal;
