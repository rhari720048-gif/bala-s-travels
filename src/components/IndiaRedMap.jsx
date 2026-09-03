import React from 'react';
import indiaMapImg from '../assets/india-map-red.png';

export const IndiaRedMap = ({ className = "w-full h-auto max-h-[750px]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* BASE CONTAINER WITH TRANSPARENT BLENDED RED MAP IMAGE */}
      <div className="relative w-full max-w-[720px] flex items-center justify-center">
        <img
          src={indiaMapImg}
          alt="Our Presence Across South India"
          className="w-full h-auto object-contain transform-gpu pointer-events-none"
        />

        {/* INTERACTIVE SVG OVERLAY FOR ACCURATE CITY LOCATION PINS & LABELS */}
        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glowPinImg" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* CHENNAI (HQ) */}
          <g transform="translate(255, 360)">
            <circle cx="0" cy="0" r="11" fill="rgba(217, 35, 45, 0.3)" className="animate-ping" />
            <circle cx="0" cy="0" r="6.5" fill="#FFFFFF" filter="url(#glowPinImg)" />
            <circle cx="0" cy="0" r="4" fill="#D9232D" />
            <rect x="10" y="-12" width="95" height="20" rx="5" fill="#0F172A" opacity="0.95" />
            <text x="15" y="2" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="Outfit, sans-serif">
              Chennai (HQ)
            </text>
          </g>

          {/* BANGALORE */}
          <g transform="translate(210, 340)">
            <circle cx="0" cy="0" r="5.5" fill="#FFFFFF" filter="url(#glowPinImg)" />
            <circle cx="0" cy="0" r="3.5" fill="#D9232D" />
            <rect x="-70" y="-11" width="65" height="18" rx="4" fill="#0F172A" opacity="0.9" />
            <text x="-66" y="1" fill="#FFFFFF" fontSize="9" fontWeight="800" fontFamily="Outfit, sans-serif">
              Bangalore
            </text>
          </g>

          {/* MADURAI */}
          <g transform="translate(225, 420)">
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="3" fill="#D9232D" />
            <text x="8" y="3" fill="#0F172A" fontSize="9.5" fontWeight="800" fontFamily="Outfit, sans-serif">
              Madurai
            </text>
          </g>

          {/* TRICHY */}
          <g transform="translate(235, 390)">
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="3" fill="#D9232D" />
            <text x="8" y="3" fill="#0F172A" fontSize="9.5" fontWeight="800" fontFamily="Outfit, sans-serif">
              Trichy
            </text>
          </g>

          {/* COIMBATORE */}
          <g transform="translate(195, 385)">
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="3" fill="#D9232D" />
            <text x="-70" y="3" fill="#0F172A" fontSize="9" fontWeight="800" fontFamily="Outfit, sans-serif">
              Coimbatore
            </text>
          </g>

          {/* KANYAKUMARI */}
          <g transform="translate(215, 460)">
            <circle cx="0" cy="0" r="6.5" fill="#FFFFFF" filter="url(#glowPinImg)" />
            <circle cx="0" cy="0" r="4" fill="#D9232D" />
            <rect x="-75" y="-10" width="70" height="18" rx="4" fill="#0F172A" opacity="0.9" />
            <text x="-71" y="2" fill="#FFFFFF" fontSize="8.5" fontWeight="800" fontFamily="Outfit, sans-serif">
              Kanyakumari
            </text>
          </g>

          {/* COCHIN */}
          <g transform="translate(185, 425)">
            <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2.5" fill="#D9232D" />
            <text x="-42" y="3" fill="#0F172A" fontSize="9" fontWeight="800" fontFamily="Outfit, sans-serif">
              Cochin
            </text>
          </g>

          {/* HYDERABAD */}
          <g transform="translate(235, 275)">
            <circle cx="0" cy="0" r="5.5" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="3.5" fill="#D9232D" />
            <text x="8" y="3" fill="#0F172A" fontSize="9.5" fontWeight="800" fontFamily="Outfit, sans-serif">
              Hyderabad
            </text>
          </g>

        </svg>
      </div>
    </div>
  );
};

export default IndiaRedMap;
