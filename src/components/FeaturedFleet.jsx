import React from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredVehicles } from '../data/fleetData';
import { InteractiveCarCard } from './InteractiveCarCard';

export const FeaturedFleet = ({ onViewAllFleet, onSelectVehicle }) => {
  const getVehicleImage = (id) => {
    if (id === 'sedan') return '/images/verna.png';
    if (id === 'suv') return '/images/seltos.png';
    return '/images/crysta.png';
  };

  return (
    <section id="fleet" className="py-20 lg:py-24 bg-slate-100/60 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-red">
            OUR FLEET
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Choose the Right Ride for Your Journey
          </h2>
          <p className="text-sm text-slate-600">
            From comfortable city sedans to spacious luxury SUVs and large group coaches
          </p>
        </div>

        {/* 3 FEATURED INTERACTIVE VEHICLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVehicles.map((vehicle) => {
            const formattedVehicle = {
              name: vehicle.name,
              capacity: vehicle.capacity,
              image: getVehicleImage(vehicle.id),
              description: vehicle.description
            };

            return (
              <InteractiveCarCard
                key={vehicle.id}
                vehicle={formattedVehicle}
                categoryTitle={vehicle.category || 'Featured'}
                onClick={() => {
                  if (onSelectVehicle) {
                    onSelectVehicle(formattedVehicle, vehicle.category || 'Featured');
                  } else if (onViewAllFleet) {
                    onViewAllFleet();
                  }
                }}
              />
            );
          })}
        </div>

        {/* VIEW ALL FLEET BUTTON */}
        <div className="text-center pt-2">
          <button
            onClick={() => {
              if (onViewAllFleet) onViewAllFleet();
            }}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>View All Fleet Categories</span>
            <ArrowRight className="w-4 h-4 text-brand-red" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedFleet;
