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
    { id: 'fleet', label: 'Fleet', href: '#fleet' },
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
    if (id !== 'fleet' && id !== 'locations' && id !== 'about' && id !== 'blogs') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3' 
        : 'bg-white/90 backdrop-blur-sm py-3 sm:py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* LOGO */}
          <div onClick={() => handleNavClick('home', '#home')} className="shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* DESKTOP NAV LINKS WITH INSTANT SNAPPY INDICATOR GLIDER */}
          <nav className="hidden md:flex items-center space-x-8">
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
                  className={`text-sm font-semibold transition-colors duration-150 relative py-1 ${
                    isActive
                      ? 'text-brand-red font-bold'
                      : 'text-slate-700 hover:text-brand-red'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTION: WHATSAPP ENQUIRY BUTTON */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => openGeneralWhatsApp()}
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-darkGreen text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Enquiry</span>
            </button>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => openGeneralWhatsApp()}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-brand-green text-white shadow-2xs"
              aria-label="WhatsApp"
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
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} 
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>Call: {PHONE_NUMBER}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openGeneralWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-darkGreen text-white py-3 rounded-lg text-xs font-bold shadow-md"
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
