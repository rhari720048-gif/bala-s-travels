import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { openGeneralWhatsApp, PHONE_NUMBER } from '../utils/whatsapp';

export const Navbar = ({ activeSection = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(activeSection);

  // Sync selected tab with active section from scroll
  useEffect(() => {
    setSelectedTab(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'fleet', label: 'Fleet', href: '#fleet' },
    { id: 'acting-drivers', label: 'Acting Drivers', href: '#acting-drivers' },
    { id: 'locations', label: 'Locations', href: '#locations' },
    { id: 'blogs', label: 'Blogs', href: '#blogs' },
    { id: 'customers', label: 'Customers', href: '#customers' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (id, href) => {
    setSelectedTab(id); // INSTANT 0MS STATE UPDATE ON CLICK
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
    // Only scroll into view for home sections, NOT for standalone pages
    if (id !== 'fleet' && id !== 'acting-drivers' && id !== 'locations' && id !== 'about' && id !== 'blogs') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
    }`}>
      
      {/* SCROLLING ANNOUNCEMENT BAR */}
      <div className="bg-brand-red text-white py-2 sm:py-2.5 overflow-hidden flex items-center shrink-0">
        <div className="whitespace-nowrap animate-marquee text-xs sm:text-sm font-black tracking-wide w-full inline-block uppercase">
          <span className="mx-4 sm:mx-10">🔥 SPECIAL OFFER: Airport Pickup & Drop at Low Cost! Sedan: ₹750 (20 km) | SUVs: ₹1000 (20 km) | 24/7 Acting Drivers Available in Chennai</span>
          <span className="mx-4 sm:mx-10">🔥 SPECIAL OFFER: Airport Pickup & Drop at Low Cost! Sedan: ₹750 (20 km) | SUVs: ₹1000 (20 km) | 24/7 Acting Drivers Available in Chennai</span>
        </div>
      </div>

      <div className={`transition-all duration-300 w-full ${isScrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'} px-4 sm:px-8 lg:px-12`}>
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* LOGO */}
          <div onClick={() => handleNavClick('home', '#home')} className="shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* DESKTOP NAV LINKS WITH INSTANT SNAPPY INDICATOR GLIDER */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navLinks.map((link) => {
              const isActive = selectedTab === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.href);
                  }}
                  className={`text-[13px] xl:text-[15px] font-bold transition-colors duration-150 relative py-1 px-1 ${
                    isActive
                      ? 'text-brand-red font-black'
                      : 'text-slate-700 hover:text-brand-red'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTION: EMAIL & WHATSAPP ENQUIRY BUTTON */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href="mailto:balastravels2023@gmail.com" className="hidden xl:flex text-[11px] xl:text-xs font-bold text-slate-600 hover:text-brand-red items-center gap-1.5 transition-colors">
              <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              balastravels2023@gmail.com
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('enquiry', '#home');
              }}
              className="inline-flex items-center gap-1.5 xl:gap-2 bg-brand-green hover:bg-brand-darkGreen text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl text-[11px] xl:text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('enquiry', '#home');
              }}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-brand-green text-white shadow-2xs cursor-pointer"
              aria-label="WhatsApp Enquiry"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in-up">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = selectedTab === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.href);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-lightRed text-brand-red font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a href="tel:+919940099347" className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200">
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>Call: 99400 99347</span>
            </a>
            <a href="tel:+919444705044" className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200">
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>Call: 94447 05044</span>
            </a>
            <a href="tel:+917401441442" className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200">
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>Call: 74014 41442</span>
            </a>
            <a href="mailto:balastravels2023@gmail.com" className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200">
              <svg className="w-3.5 h-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>balastravels2023@gmail.com</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('enquiry', '#home');
              }}
              className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-darkGreen text-white py-3 rounded-lg text-xs font-bold shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Enquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
