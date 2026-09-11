import React from 'react';

const services = [
  {
    id: 1,
    title: 'Airport Pickup & Drop',
    image: '/images/services/airport-pickup.png',
  },
  {
    id: 2,
    title: 'Railway pickup & drop',
    image: '/images/services/railway-pickup.png',
  },
  {
    id: 3,
    title: 'One Way Trips',
    image: '/images/services/outstation-travel.png',
  },
  {
    id: 4,
    title: 'Round Trips',
    image: '/images/services/round-trips.jpg',
  },
  {
    id: 5,
    title: 'Outstation Travel',
    image: '/images/services/temples-collage.jpg',
  },
  {
    id: 6,
    title: 'Wedding Events',
    image: '/images/services/wedding-events.jpg',
  },
  {
    id: 7,
    title: 'Corporate Mobility & Event Solution',
    image: '/images/services/corporate-events.jpg',
  },
  {
    id: 8,
    title: 'VIP Mobility',
    image: '/images/services/vip-mobility.png',
  }
];

export const OurServices = () => {
  return (
    <section id="services" className="py-12 bg-[#f8f9fa] relative scroll-mt-28 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-800 tracking-wide" style={{ fontFamily: 'Times New Roman, serif' }}>
            Our Services
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 justify-center">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-64 md:h-72"
            >
              {/* IMAGE */}
              <div className="flex-1 w-full relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* TITLE */}
              <div className="bg-[#f0f0f0] p-4 border-t border-white text-center">
                <h3 className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
