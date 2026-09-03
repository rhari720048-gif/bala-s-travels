import React from 'react';
import { MapPin, Car, MessageCircle } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Locations',
      description: 'Tell us your pickup and drop destination.',
      icon: MapPin
    },
    {
      number: '02',
      title: 'Choose Your Vehicle',
      description: 'Select the vehicle that suits your journey.',
      icon: Car
    },
    {
      number: '03',
      title: 'Confirm on WhatsApp',
      description: 'Our team will contact you and help arrange your ride.',
      icon: MessageCircle
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple Steps for a Comfortable Journey
          </h2>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-card flex flex-col items-center text-center space-y-4 group hover:shadow-elevated transition-all duration-300"
              >
                {/* ICON WITH STEP NUMBER BADGE */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-brand-lightRed flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-9 h-9 stroke-[1.75]" />
                  </div>
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-extrabold px-2.5 py-1 rounded-full shadow">
                    {step.number}
                  </span>
                </div>

                {/* TEXT */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* DOTTED CONNECTOR FOR DESKTOP */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <div className="w-8 border-t-2 border-dashed border-brand-red/40" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
