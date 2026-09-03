import React from 'react';
import { Car, MapPin, ShieldCheck, MessageSquare } from 'lucide-react';

export const TrustFeatures = () => {
  const features = [
    {
      icon: Car,
      title: 'Comfortable Vehicles',
      description: 'Well-maintained vehicles for a smooth journey.'
    },
    {
      icon: MapPin,
      title: 'South India Coverage',
      description: 'Pickup & drop services across South India.'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Pickup & Drop',
      description: 'Punctual, safe and dependable service.'
    },
    {
      icon: MessageSquare,
      title: 'Quick WhatsApp Support',
      description: 'Instant response and personal support.'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-elevated border border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-lightRed flex-shrink-0 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900 leading-tight">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
