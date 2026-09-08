import React, { useState } from 'react';
import { Quote, User, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section id="customers" className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            WHAT OUR CUSTOMERS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Many Happy Customers
          </h2>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative max-w-4xl mx-auto">
          {/* LEFT ARROW */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-12 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-brand-red hover:scale-110 transition-all focus:outline-none cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* SLIDER CONTENT */}
          <div className="overflow-hidden px-2 py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((item) => (
                <div key={item.id} className="w-full shrink-0 px-2 sm:px-4">
                  <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 min-h-[250px] sm:min-h-[280px]">
                    <div className="text-slate-200 flex justify-between items-start">
                      <Quote className="w-10 h-10 fill-slate-100 rotate-180" />
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-medium">
                      "{item.quote}"
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-brand-lightRed border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900">{item.author}</h4>
                        <p className="text-sm text-slate-500">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-12 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg border border-slate-200 text-slate-600 hover:text-brand-red hover:scale-110 transition-all focus:outline-none cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* PROGRESS INDICATOR */}
        <div className="text-center mt-8">
          <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm inline-block">
            Review {currentIndex + 1} of {testimonialsData.length}
          </span>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
