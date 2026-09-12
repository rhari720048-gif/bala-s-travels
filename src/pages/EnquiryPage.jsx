import React from 'react';
import { ArrowLeft } from 'lucide-react';
import FloatingEnquiryCard from '../components/FloatingEnquiryCard';
import { useSEO } from '../utils/useSEO';

export const EnquiryPage = ({ onBackToHome }) => {
  useSEO({
    title: "Contact & Enquiry | Book Your Cab Now | Bala's Travels",
    description: "Contact Bala's Travels to book drop taxis, outstation cabs, and airport transfers. Get an instant quote via WhatsApp or phone call for your travel needs.",
    keywords: "contact Balas Travels, best travels in Ashok Nagar Chennai, cab booking Chennai, outstation taxi quote, drop taxi enquiry, rent a car contact, book Innova Chennai, Tirupur taxi contact"
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16 relative flex flex-col items-center">
      
      {/* TOP BACK TO HOME NAVIGATION */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-brand-red hover:text-white text-slate-800 text-xs font-bold transition-all border border-slate-200/90 shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
          BOOK YOUR RIDE
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Instant WhatsApp Enquiry
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Fill out the form below to share your travel requirements with us directly on WhatsApp. Our team will reply instantly with the best quote!
        </p>
      </div>

      <div className="w-full px-4 flex justify-center pb-12">
        <FloatingEnquiryCard />
      </div>

    </div>
  );
};

export default EnquiryPage;
