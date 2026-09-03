import React from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';
import IndiaRedMap from '../components/IndiaRedMap';
import indiaMapImg from '../assets/india-map-red.png';

export const LocationsPage = ({ onBackToHome }) => {
  const stateData = [
    {
      id: 'TN',
      name: 'TAMIL NADU',
      badge: 'HQ & Core Network',
      cities: [
        'Chennai (HQ)', 'Coimbatore', 'Madurai', 'Kanyakumari', 
        'Trichy (Tiruchirappalli)', 'Ooty & Kodaikanal', 'Tanjore (Thanjavur)', 
        'Rameshwaram', 'Tirunelveli', 'Salem & Erode', 'Kumbakonam', 
        'Vellore & Theni', 'Tuticorin', 'Nagercoil'
      ]
    },
    {
      id: 'KA',
      name: 'KARNATAKA',
      badge: 'IT & Cultural Hubs',
      cities: [
        'Bengaluru (Bangalore)', 'Mysuru (Mysore)', 'Mangalore', 
        'Belgaum', 'Hubli-Dharwad', 'Chikmagalur', 'Coorg (Madikeri)'
      ]
    },
    {
      id: 'KL',
      name: 'KERALA',
      badge: 'Coastal & Hill Resorts',
      cities: [
        'Kochi (Cochin)', 'Thiruvananthapuram', 'Kozhikode (Calicut)', 
        'Alleppey & Thrissur', 'Palakkad', 'Munnar', 'Wayanad'
      ]
    },
    {
      id: 'AP',
      name: 'ANDHRA PRADESH',
      badge: 'Coastal & Temple Cities',
      cities: [
        'Visakhapatnam', 'Vijayawada', 'Tirupati', 
        'Rajahmundry & Guntur', 'Nellore', 'Kakinada'
      ]
    },
    {
      id: 'TS',
      name: 'TELANGANA',
      badge: 'Capital & Heritage Hubs',
      cities: [
        'Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 pt-20 pb-16 relative overflow-hidden">
      
      {/* TOP LEFT BACK TO HOME BUTTON */}
      {onBackToHome && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-brand-red hover:text-white text-slate-800 text-xs font-bold transition-all border border-slate-200/90 shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>
      )}

      {/* CENTERED HEADER SECTION */}
      <section className="pt-2 pb-6 text-center max-w-4xl mx-auto px-4 space-y-2 relative z-10">
        
        <div className="flex items-center justify-center">
          <span className="text-xs sm:text-sm font-extrabold text-brand-red flex items-center justify-center gap-1.5 uppercase tracking-wider">
            <MapPin className="w-4 h-4 fill-current" /> Complete South India Coverage
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Our Presence <span className="text-brand-red">Across South India</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From Bangalore and Chennai to Kanyakumari at the southern tip, we provide reliable outstation, local city rentals, and airport transport services across all 5 South Indian states.
        </p>

      </section>

      {/* MAIN DUAL PANEL (CLEAN COMPACT TEXT LAYOUT + VERY LARGE PROMINENT MAP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDE: COMPACT TEXT LOCATION LISTING WITH MAP WATERMARK BACKDROP */}
          <div className="lg:col-span-5 relative py-2 px-1">
            
            {/* WATERMARK BACKGROUND LAYER */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center scale-125 overflow-hidden">
              <img
                src={indiaMapImg}
                alt="Map Watermark"
                className="w-full h-full object-contain pointer-events-none transform-gpu"
              />
            </div>

            {/* DIRECT TEXT STATE & COMPACT CITY LISTING (NO CARDS, SMALLER TEXT) */}
            <div className="relative z-10 space-y-6">
              {stateData.map((st) => (
                <div key={st.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-brand-red font-black tracking-wider uppercase text-xs sm:text-sm">
                      <MapPin className="w-3.5 h-3.5 fill-current" />
                      <span>{st.name}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-full">
                      {st.badge}
                    </span>
                  </div>

                  {/* COMPACT CITY NAMES TEXT LISTING */}
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px] text-slate-700 font-semibold pl-1">
                    {st.cities.map((city, idx) => (
                      <li key={idx} className="hover:text-brand-red cursor-pointer transition-colors flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                        <span className="truncate">{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE: VERY LARGE & PROMINENT MAP OF SOUTH INDIA */}
          <div className="lg:col-span-7 sticky top-20 flex items-center justify-center p-0">
            <IndiaRedMap className="w-full max-w-4xl max-h-[820px] scale-105" />
          </div>

        </div>

      </section>

    </div>
  );
};

export default LocationsPage;
