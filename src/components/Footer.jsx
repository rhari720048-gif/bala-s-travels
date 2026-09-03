import React from 'react';
import { MapPin, Phone, MessageCircle, ChevronRight, Share2, Globe } from 'lucide-react';
import Logo from './Logo';
import { openGeneralWhatsApp, PHONE_NUMBER } from '../utils/whatsapp';

export const Footer = ({ onNavigate }) => {
  const quickLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'fleet', label: 'Fleet', href: '#fleet' },
    { id: 'locations', label: 'Locations', href: '#locations' },
    { id: 'customers', label: 'Customers', href: '#customers' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Pickup & Drop Service',
    'One Way Trips',
    'Round Trips',
    'Outstation Travel',
    'Airport Transfers'
  ];

  const handleLinkClick = (id, href) => {
    if (onNavigate) onNavigate(id);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* COLUMN 1: BRAND INFO & SOCIALS */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="white" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Reliable pickup and drop transportation services across South India. Your journey, our responsibility.
            </p>

            {/* SOCIAL MEDIA ICONS (INLINE SVG) */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => openGeneralWhatsApp()}
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-green hover:border-brand-green transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </button>

              {/* Facebook Inline SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram Inline SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id, link.href);
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-brand-red transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OUR SERVICES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {services.map((service, sIdx) => (
                <li key={sIdx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Ashok Nagar, Jawahar Nagar, West Jafferkhanpet, Chennai, Tamil Nadu – 600083
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white font-semibold transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <button
              onClick={() => openGeneralWhatsApp()}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-darkGreen text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </button>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Bala's Travels. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
