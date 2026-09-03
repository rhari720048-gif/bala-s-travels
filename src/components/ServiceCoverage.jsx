import React from 'react';
import { MapPin } from 'lucide-react';
import TamilNaduMap from './TamilNaduMap';

export const ServiceCoverage = ({ onViewLocations }) => {
  return (
    <section id="locations" className="py-20 lg:py-24 bg-slate-50/80 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      
      {/* CENTERED HEADER SECTION */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-3 relative z-10 mb-12">
        <span className="text-xs sm:text-sm font-extrabold text-brand-red flex items-center justify-center gap-1.5 uppercase tracking-wider">
          <MapPin className="w-4 h-4 fill-current" /> Primary Region Focus
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Our Hubs & <span className="text-brand-red">Tamil Nadu Network</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Headquartered in Chennai, we provide reliable outstation cabs, doorstep pickups, and local city rentals across Tamil Nadu & major South Indian corridors.
        </p>
      </div>

      {/* MAIN DUAL PANEL - CLEAN DIRECT WEBSITE LAYOUT (NO CARDS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE: CLEAN TEXT LOCATION LISTING (NO BOX CARDS) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-brand-red font-black tracking-wider uppercase text-xs sm:text-sm">
              <MapPin className="w-4 h-4 fill-current" />
              <span>TAMIL NADU & KEY CONNECTING HUBS</span>
            </div>

            {/* CLEAN 2-COLUMN CITIES LISTING */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 font-bold pt-2">
              {[
                'Chennai (HQ)', 'Coimbatore', 'Madurai', 
                'Trichy (Tiruchirappalli)', 'Kanyakumari', 'Ooty & Kodaikanal', 
                'Salem & Erode', 'Pondicherry', 'Rameshwaram', 'Tanjore'
              ].map((city, idx) => (
                <div key={idx} className="flex items-center gap-2.5 hover:text-brand-red transition-colors py-1">
                  <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: TAMIL NADU VECTOR MAP GRAPHIC BLENDED SEAMLESSLY */}
          <div className="lg:col-span-6 flex items-center justify-center p-2">
            <TamilNaduMap className="w-full max-w-xl" />
          </div>

        </div>
      </div>

    </section>
  );
};

export default ServiceCoverage;
