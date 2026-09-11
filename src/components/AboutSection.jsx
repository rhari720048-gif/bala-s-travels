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
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden scroll-mt-28">
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

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Welcome to <strong className="text-slate-900 font-bold">Bala Travels</strong>, your trusted partner for safe, comfortable, and reliable transportation services. We specialize in turning every journey into a seamless experience, whether you are traveling locally or heading out of town.
              </p>
              <p>
                Over the years, we have proudly served countless clients with a diverse range of specialized transportation and event solutions. Our core services include:
              </p>
              
              <ul className="space-y-2 mt-2">
                <li className="flex gap-2">
                  <span className="text-brand-red font-bold mt-0.5">•</span>
                  <span><strong className="text-slate-900 font-bold">Airport Transfers & Local Packages:</strong> Prompt and dependable airport pickup and drop services, alongside customized local sightseeing packages tailored to your schedule.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red font-bold mt-0.5">•</span>
                  <span><strong className="text-slate-900 font-bold">Outstation Travels:</strong> Comfortable outstation trips designed to make long-distance travel relaxing and stress-free.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red font-bold mt-0.5">•</span>
                  <span><strong className="text-slate-900 font-bold">Wedding Events:</strong> Dedicated, premium transportation arrangements for weddings, ensuring your family and guests arrive in comfort and style.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red font-bold mt-0.5">•</span>
                  <span><strong className="text-slate-900 font-bold">Corporate Events:</strong> Professional and punctual fleet solutions managed efficiently for corporate clients, business meets, and executive transport.</span>
                </li>
              </ul>

              <p className="pt-2">
                With a well-maintained fleet ranging from comfortable Sedans and spacious SUVs to Tempo Travellers, Mini Buses, and Luxury vehicles, we are fully equipped to handle groups of any size. Customer satisfaction, safety, and punctuality are at the heart of everything we do. Choose Bala Travels for your next journey and experience travel at its best!
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: IMAGE WITH TEMPLE & VEHICLE */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden shadow-elevated group border border-slate-200">
              <img
                src="/images/about-fleet.png"
                alt="Bala's Travels Complete Fleet Lineup"
                className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
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
