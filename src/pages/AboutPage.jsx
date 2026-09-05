import React from 'react';
import { 
  ArrowLeft, ShieldCheck, UserCheck, HeartHandshake, MapPin, 
  Car, Clock, CheckCircle2, MessageCircle, Phone, Award, Sparkles,
  Building2, Heart, Bus, Users, PartyPopper, CalendarCheck, Star
} from 'lucide-react';
import { openGeneralWhatsApp, PHONE_NUMBER } from '../utils/whatsapp';

export const AboutPage = ({ onBackToHome, onExploreFleet }) => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Safety First',
      desc: 'All vehicles are regularly sanitized, inspected, and equipped with live GPS tracking.'
    },
    {
      icon: UserCheck,
      title: 'Verified Chauffeurs',
      desc: 'Courteous, uniformed drivers with deep route expertise across South India.'
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Tariffs',
      desc: 'Clear toll and kilometer estimates with zero hidden costs or surprise charges.'
    },
    {
      icon: Clock,
      title: '24/7 Dispatch Control',
      desc: 'Round-the-clock dispatch desk and instant customer assistance for smooth travels.'
    }
  ];

  const keyStats = [
    { label: 'Years of Excellence', value: '10+' },
    { label: 'Happy Journeys', value: '15,000+' },
    { label: 'Happy Customers', value: '3000+' },
    { label: 'Cars in Single Event', value: '200+' }
  ];

  const eventSpecialties = [
    {
      icon: Heart,
      title: 'Mega Wedding Fleets (200+ Cars Supplied)',
      badge: 'Single Event Capacity: 200+ Cars',
      color: 'bg-rose-50 border-rose-200 text-rose-700',
      iconBg: 'bg-rose-100 text-rose-600',
      desc: 'We have supplied over 200+ cars for a single mega wedding event! Complete marriage transport logistics — from luxury groom entry cars and bridal sedans to 200+ guest shuttle vehicles.'
    },
    {
      icon: Building2,
      title: 'Corporate Events & Summits',
      badge: 'Corporate Logistics',
      color: 'bg-blue-50 border-blue-200 text-blue-700',
      iconBg: 'bg-blue-100 text-blue-600',
      desc: 'Seamless delegate shuttles, tech conference transport, airport guest pickups, and multi-vehicle fleets for major corporate summits and conventions.'
    },
    {
      icon: Bus,
      title: 'Bulk Fleet & Luxury Coaches',
      badge: 'Group Travel',
      color: 'bg-amber-50 border-amber-200 text-amber-700',
      iconBg: 'bg-amber-100 text-amber-600',
      desc: 'Spacious Push-back Luxury Coaches and Tempo Travellers ideal for large tour groups, family reunions, and festival trips.'
    },
    {
      icon: MapPin,
      title: 'Outstation & Temple Circuits',
      badge: 'South India Tours',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      iconBg: 'bg-emerald-100 text-emerald-600',
      desc: 'Customized itineraries across Tamil Nadu, Bangalore, Mysore, Kerala, and Andhra Pradesh with experienced outstation drivers.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-900 pt-20 pb-16 relative">
      
      {/* TOP BACK NAVIGATION */}
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
          <span className="text-xs sm:text-sm font-black text-brand-red flex items-center gap-1.5 uppercase tracking-wider bg-brand-lightRed px-3.5 py-1 rounded-full border border-brand-red/10">
            <Sparkles className="w-4 h-4" /> About Bala's Travels
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Your Trusted Transport Partner <br />
          <span className="text-brand-red">For Daily Rides, Weddings & Corporate Logistics</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Headquartered in Chennai, Bala's Travels specializes in doorstep pickup & drop, outstation family tours, corporate event fleets, and supplying up to 200+ cars for single mega wedding celebrations across South India.
        </p>
      </section>

      {/* KEY STATS COUNTER GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1 p-3 border-r last:border-r-0 border-slate-800">
              <span className="text-2xl sm:text-4xl font-black text-brand-red block">{stat.value}</span>
              <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN DETAILED STORY & IMAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: DETAILED STORY CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red flex items-center gap-1">
                <Award className="w-4 h-4" /> OUR STORY & EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                From Personal Rides to Mega Event Fleet Logistics
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <p>
                Founded with a mission to deliver safe, transparent, and hassle-free travel, <strong>Bala's Travels</strong> has grown from a local cab service into a full-scale transport partner across South India.
              </p>

              <p>
                We have proven capability in large-scale event logistics — <strong>supplying over 200+ cars for a single mega wedding event</strong>. From managing luxury groom entry cars to coordinating a massive 200+ vehicle convoy for guest arrivals and departures, our team handles complex event transport seamlessly.
              </p>

              <p>
                Our modern fleet includes clean Hatchbacks, executive Sedans (Hyundai Verna, Honda City), spacious family SUVs (Toyota Innova Crysta, Kia Carens), and heavy passenger vehicles (Tempo Travellers & Push-back Luxury Buses).
              </p>
            </div>

            {/* LIST OF ADVANTAGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                '200+ Cars in a Single Wedding Event',
                'Corporate Summit Fleet Rentals',
                'Doorstep Pickup & Drop',
                'Inter-State Permits & Toll Setup',
                'Clean & Sanitized Interiors',
                '24/7 Dedicated Event Coordinators'
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
                onClick={() => openGeneralWhatsApp("Hi Bala's Travels, I would like to inquire about event fleet rentals (Weddings / Corporate / Outstation).")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire Event Fleet via WhatsApp</span>
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
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2 relative group">
              <img
                src="/images/about-temple.jpg"
                alt="Bala's Travels Journey across Temple & Cultural Destinations in South India"
                className="w-full h-[420px] sm:h-[500px] object-cover rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />

            </div>
          </div>

        </div>
      </section>

      {/* SPECIAL EVENT & CORPORATE FLEET SECTION (CUTE & STRUCTURED CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red bg-brand-lightRed px-3 py-1 rounded-full">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Mega Event Capacity, Weddings & Corporate Logistics
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            From single-vehicle luxury rides to supplying 200+ cars for a single mega wedding, we deliver precision and comfort every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventSpecialties.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-slate-700">
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" /> Dedicated Transport Coordinators
                  </span>
                  <button 
                    onClick={() => openGeneralWhatsApp(`Hi Bala's Travels, I want to inquire about ${item.title}`)}
                    className="text-brand-red hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Enquire Now →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DEDICATED EVENT BOOKING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red text-xs font-extrabold border border-brand-red/30">
              <CalendarCheck className="w-3.5 h-3.5" /> 200+ Cars Single Event Capacity
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Planning a Grand Wedding or Corporate Summit? <br />
              <span className="text-brand-red">We Can Supply 200+ Vehicles for Your Event!</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We provide dedicated transport coordinators, route planning, driver briefing, and a massive fleet of luxury sedans, SUVs, and push-back coaches for seamless event guest transportation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 shrink-0">
            <button
              onClick={() => openGeneralWhatsApp("Hi Bala's Travels, I have a Mega Event requiring bulk car supply (up to 200+ cars). Please share fleet packages.")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-red hover:bg-brand-darkRed text-white font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Get Event Quote on WhatsApp</span>
            </button>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>Call Helpline</span>
            </a>
          </div>

          {/* Subtle Background Glow */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* CORE VALUES / WHY CHOOSE US GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-brand-red">WHY CHOOSE US</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Why Customers Trust Bala's Travels</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3 hover:border-brand-red/40 transition-colors">
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
