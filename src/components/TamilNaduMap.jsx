import React from 'react';
import indiaMapImg from '../assets/india-map-red.png';

export const TamilNaduMap = ({ className = "w-full h-auto max-h-[480px]" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* SEAMLESS FLOATING MAP CONTAINER - NO WHITE CARD BOX */}
      <div className="relative w-full max-w-[480px]">
        
        {/* MAP IMAGE BLENDED SEAMLESSLY WITH SITE BACKGROUND */}
        <div className="relative">
          <img
            src={indiaMapImg}
            alt="Tamil Nadu & South India Presence"
            className="w-full h-auto object-contain transform-gpu pointer-events-none"
          />

          {/* INTERACTIVE PIN OVERLAYS ON THE MAP */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glowPinTN2" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* CHENNAI HQ PIN */}
            <g transform="translate(255, 360)">
              <circle cx="0" cy="0" r="12" fill="rgba(217, 35, 45, 0.3)" className="animate-ping" />
              <circle cx="0" cy="0" r="7" fill="#FFFFFF" filter="url(#glowPinTN2)" />
              <circle cx="0" cy="0" r="4" fill="#D9232D" />
              <rect x="10" y="-12" width="90" height="20" rx="5" fill="#0F172A" />
              <text x="16" y="2" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="Outfit, sans-serif">
                CHENNAI (HQ)
              </text>
            </g>

            {/* BENGALURU */}
            <g transform="translate(210, 340)">
              <circle cx="0" cy="0" r="5" fill="#FFFFFF" filter="url(#glowPinTN2)" />
              <circle cx="0" cy="0" r="3" fill="#D9232D" />
              <rect x="-65" y="-10" width="60" height="16" rx="4" fill="#0F172A" opacity="0.9" />
              <text x="-61" y="1" fill="#FFFFFF" fontSize="8.5" fontWeight="800" fontFamily="Outfit, sans-serif">
                Bengaluru
              </text>
            </g>

            {/* COIMBATORE & OOTY */}
            <g transform="translate(195, 385)">
              <circle cx="0" cy="0" r="5" fill="#FFFFFF" filter="url(#glowPinTN2)" />
              <circle cx="0" cy="0" r="3" fill="#D9232D" />
              <text x="-75" y="3" fill="#0F172A" fontSize="8.5" fontWeight="800" fontFamily="Outfit, sans-serif">
                Coimbatore & Ooty
              </text>
            </g>

            {/* TRICHY */}
            <g transform="translate(235, 390)">
              <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
              <circle cx="0" cy="0" r="3" fill="#D9232D" />
              <text x="8" y="3" fill="#0F172A" fontSize="8.5" fontWeight="800" fontFamily="Outfit, sans-serif">
                Trichy
              </text>
            </g>

            {/* MADURAI */}
            <g transform="translate(225, 420)">
              <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
              <circle cx="0" cy="0" r="3" fill="#D9232D" />
              <text x="8" y="3" fill="#0F172A" fontSize="8.5" fontWeight="800" fontFamily="Outfit, sans-serif">
                Madurai
              </text>
            </g>

            {/* KANYAKUMARI */}
            <g transform="translate(215, 460)">
              <circle cx="0" cy="0" r="6" fill="#FFFFFF" filter="url(#glowPinTN2)" />
              <circle cx="0" cy="0" r="3.5" fill="#D9232D" />
              <rect x="-70" y="-9" width="65" height="16" rx="4" fill="#0F172A" opacity="0.9" />
              <text x="-66" y="2" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="Outfit, sans-serif">
                Kanyakumari
              </text>
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
};

export default TamilNaduMap;
