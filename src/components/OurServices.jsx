import React from 'react';

const services = [
  {
    id: 1,
    title: 'Airport Pickup & Drop',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Railway pickup & drop',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'One Way Trips',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Round Trips',
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Outstation Travel',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Wedding Events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 7,
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800',
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
