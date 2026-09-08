import React from 'react';
import { ShieldCheck, UserCheck, HeartHandshake } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Safe & Secure',
      desc: 'Your safety is our priority'
    },
    {
      icon: UserCheck,
      title: 'Professional Drivers',
      desc: 'Experienced and well-trained'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Focused',
      desc: 'Comfort, convenience and care'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: TEXT & HIGHLIGHTS */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                ABOUT BALA'S TRAVELS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Travel Made Simple. <br />
                <span className="text-slate-900">Journeys Made Comfortable.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bala's Travels provides reliable pickup and drop transportation services for customers travelling across Chennai and South India. From city rides to long-distance journeys, we help you travel comfortably with the right vehicle for your journey.
            </p>

            {/* 3 HIGHLIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-start gap-2">
                    <div className="w-9 h-9 rounded-lg bg-brand-lightRed flex items-center justify-center text-brand-red">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE: IMAGE WITH TEMPLE & VEHICLE */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden shadow-elevated group border border-slate-200">
              <img
                src="/images/about-temple.jpg"
                alt="Bala's Travels Vehicle at South Indian Temple Destination"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
            </div>
            {/* Subtle decorative background blur */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
