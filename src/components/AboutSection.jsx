import React from 'react';
import { ShieldCheck, UserCheck, HeartHandshake, Building2, Heart, Award, CheckCircle2, Bus, Car } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Safe & Sanitized',
      desc: 'GPS tracked & sanitized fleet'
    },
    {
      icon: Heart,
      title: '200+ Cars Single Event',
      desc: 'Mega wedding fleet capacity'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      desc: 'Bulk summits & delegate rides'
    }
  ];

  const eventPills = [
    { icon: Heart, text: '200+ Cars Supplied for 1 Event', iconColor: 'text-rose-500' },
    { icon: Building2, text: 'Corporate Summit Logistics', iconColor: 'text-blue-600' },
    { icon: Bus, text: 'Push-back Luxury Coaches', iconColor: 'text-amber-600' },
    { icon: Car, text: 'VIP Groom & Bridal Cabs', iconColor: 'text-brand-red' }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: TEXT & HIGHLIGHTS */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red flex items-center gap-1">
                <Award className="w-4 h-4 text-brand-red" /> ABOUT BALA'S TRAVELS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Travel Made Simple. <br />
                <span className="text-brand-red">Journeys & Events Made Memorable.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Bala's Travels provides reliable pickup & drop transportation across Chennai and South India. From daily city rides to <strong>supplying up to 200+ vehicles for a single mega wedding celebration</strong> and major corporate summits, our team delivers seamless bulk transport logistics.
            </p>

            {/* EVENT EXPERIENCE PILLS */}
            <div className="flex flex-wrap gap-2 pt-1">
              {eventPills.map((pill, idx) => {
                const IconComp = pill.icon;
                return (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-extrabold flex items-center gap-2 shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <IconComp className={`w-3.5 h-3.5 ${pill.iconColor}`} />
                    <span>{pill.text}</span>
                  </span>
                );
              })}
            </div>

            {/* 3 HIGHLIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col items-start gap-2.5 hover:border-brand-red/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-brand-lightRed flex items-center justify-center text-brand-red">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
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
