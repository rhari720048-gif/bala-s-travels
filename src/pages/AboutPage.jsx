import React from 'react';
import { 
  ArrowLeft, ShieldCheck, UserCheck, HeartHandshake, MapPin, 
  Car, Clock, CheckCircle2, MessageCircle, Phone, Award, Sparkles 
} from 'lucide-react';
import { openGeneralWhatsApp, PHONE_NUMBER } from '../utils/whatsapp';

export const AboutPage = ({ onBackToHome, onExploreFleet }) => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Safety First',
      desc: 'All vehicles are regularly sanitized, inspected, and equipped with GPS tracking.'
    },
    {
      icon: UserCheck,
      title: 'Professional Chauffeurs',
      desc: 'Courteous, verified drivers with extensive route knowledge across South India.'
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Pricing',
      desc: 'Clear toll and kilometer estimates with zero surprise charges.'
    },
    {
      icon: Clock,
      title: '24/7 Doorstep Service',
      desc: 'Round-the-clock dispatch and active customer assistance whenever you need us.'
    }
  ];

  const keyStats = [
    { label: 'Years of Service', value: '10+' },
    { label: 'Happy Journeys', value: '15,000+' },
    { label: 'South India Cities', value: '25+' },
    { label: 'Verified Fleet Vehicles', value: '38+' }
  ];

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 pt-20 pb-16 relative">
      
      {/* TOP BACK TO HOME NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-brand-red hover:text-white text-slate-800 text-xs font-bold transition-all border border-slate-200/90 shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* PAGE HERO HEADER */}
      <section className="pt-6 pb-10 text-center max-w-4xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-center">
          <span className="text-xs sm:text-sm font-black text-brand-red flex items-center gap-1.5 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-current" /> About Bala's Travels
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Your Trusted Transport Partner <br />
          <span className="text-brand-red">Across South India</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Headquartered in Chennai, Bala's Travels has been providing safe, comfortable, and punctual pickup & drop transportation services for families, corporate teams, and outstation travelers.
        </p>
      </section>

      {/* KEY STATS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1 p-3 border-r last:border-r-0 border-slate-800">
              <span className="text-2xl sm:text-4xl font-black text-brand-red block">{stat.value}</span>
              <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN DETAILED STORY & DESTINATION VISUAL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: DETAILED STORY CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red">
                OUR STORY & MISSION
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                Reliable Rides for Every Journey & Destination
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <p>
                Founded with a vision to make regional travel transparent and stress-free, <strong>Bala's Travels</strong> has grown into one of Chennai's most trusted outstation taxi and doorstep pickup services.
              </p>

              <p>
                Whether you need a early morning airport pickup in Chennai, a family pilgrimage to Rameshwaram and Kanyakumari, a business travel connection between Bangalore and Chennai, or a weekend getaway to Ooty and Kodaikanal, our team ensures every kilometer of your journey is smooth and pleasant.
              </p>

              <p>
                Our well-maintained fleet spans from budget-friendly hatchbacks and executive sedans (Hyundai Verna, Honda City) to spacious family SUVs (Toyota Innova Crysta, Kia Seltos) and luxury group coaches (Tempo Travellers, Push-back Luxury Coaches).
              </p>
            </div>

            {/* LIST OF ADVANTAGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Doorstep Pickup & Drop',
                'Inter-State Toll & Permit Guidance',
                'Clean & Sanitized Interiors',
                '24/7 Active Customer Helpline',
                'Custom Outstation Tour Packages',
                'Instant WhatsApp Booking Support'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openGeneralWhatsApp()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire via WhatsApp</span>
              </button>

              {onExploreFleet && (
                <button
                  onClick={onExploreFleet}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs border border-slate-300 transition-all cursor-pointer"
                >
                  <Car className="w-4 h-4 text-brand-red" />
                  <span>Explore Fleet Collection</span>
                </button>
              )}
            </div>

          </div>

          {/* RIGHT SIDE: IMAGE FEATURE */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
              <img
                src="/images/about-temple.jpg"
                alt="Bala's Travels Journey across Temple & Cultural Destinations in South India"
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES / HIGHLIGHTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">WHY CHOOSE US</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Why Customers Trust Bala's Travels</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-lightRed flex items-center justify-center text-brand-red">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
