import React from 'react';

const services = [
  {
    id: 1,
    title: 'Corporate Mobility Solutions',
    image: '/images/services/corporate-mobility.jpg',
  },
  {
    id: 2,
    title: 'VIP Mobility',
    image: '/images/services/vip-mobility.jpg',
  },
  {
    id: 3,
    title: 'Airport Transfers',
    image: '/images/services/airport-transfers.jpg',
  },
  {
    id: 4,
    title: 'Wedding & other events',
    image: '/images/services/wedding-events.jpg',
  },
  {
    id: 5,
    title: 'Leisure',
    image: '/images/services/leisure-travel.jpg',
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* TITLE */}
              <div className="bg-[#f0f0f0] p-3 border-t border-white">
                <h3 className="text-sm font-medium text-slate-700 leading-snug">
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
