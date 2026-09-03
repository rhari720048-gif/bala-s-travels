import React from 'react';
import { Quote, User, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonials = () => {
  return (
    <section id="customers" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            WHAT OUR CUSTOMERS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Many Happy Customers
          </h2>
        </div>

        {/* 3 TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              {/* QUOTE ICON */}
              <div className="text-slate-300">
                <Quote className="w-8 h-8 fill-slate-100 rotate-180" />
              </div>

              {/* QUOTE TEXT */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal flex-1">
                "{item.quote}"
              </p>

              {/* RATING STARS */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* AUTHOR INFO */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.author}</h4>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* PAGINATION DOTS DECORATION */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-6 h-2.5 rounded-full bg-brand-red" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
