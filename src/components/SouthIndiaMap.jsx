import React from 'react';

export const SouthIndiaMap = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[340px] h-[300px] flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 340 300"
        className="w-full h-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#D9232D" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* 
          ACCURATE GEOGRAPHICAL SILHOUETTE OF SOUTH INDIA PENINSULA
          Includes:
          - Eastern Coastline (Andhra Pradesh -> Chennai -> Pondicherry -> Nagapattinam -> Kanyakumari)
          - Southern Tip (Kanyakumari / Cape Comorin)
          - Western Coastline (Kerala / Malabar Coast -> Mangaluru -> Goa)
          - Northern Boundary (Deccan Plateau / Karnataka & Andhra border)
        */}
        <path
          d="M 60 40 
             C 100 35, 180 30, 270 45 
             C 285 70, 275 100, 265 120 
             C 255 140, 248 160, 235 185 
             C 220 210, 205 235, 190 255 
             C 185 262, 178 268, 172 268 
             C 168 268, 162 258, 155 242 
             C 145 220, 135 190, 120 165 
             C 105 140, 85 110, 72 80 
             C 65 65, 58 50, 60 40 Z"
          fill="url(#mapGradient)"
          stroke="#CBD5E1"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Sri Lanka Outline Graphic */}
        <path
          d="M 235 245 C 242 240, 248 248, 244 256 C 240 262, 232 258, 235 245 Z"
          fill="#E2E8F0"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />

        {/* State Border Divider Dotted Lines */}
        {/* TN - Kerala Border */}
        <path d="M 172 268 C 160 210, 140 180, 120 165" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
        {/* TN - Karnataka Border */}
        <path d="M 120 165 C 160 140, 190 130, 235 125" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
        {/* TN - Andhra Border */}
        <path d="M 235 125 C 250 110, 260 100, 270 90" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />

        {/* RED DOTTED CONNECTING TRAVEL ROUTES (FROM CHENNAI HUB) */}
        {/* Chennai (260, 110) -> Bengaluru (175, 130) */}
        <path d="M 260 110 Q 215 115, 175 130" stroke="#D9232D" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
        {/* Chennai (260, 110) -> Pondicherry (248, 148) */}
        <path d="M 260 110 Q 256 130, 248 148" stroke="#D9232D" strokeWidth="2" strokeDasharray="4 4" />
        {/* Chennai (260, 110) -> Coimbatore (145, 185) */}
        <path d="M 260 110 Q 200 150, 145 185" stroke="#D9232D" strokeWidth="2" strokeDasharray="4 4" />
        {/* Chennai (260, 110) -> Madurai (195, 210) */}
        <path d="M 260 110 Q 230 165, 195 210" stroke="#D9232D" strokeWidth="2" strokeDasharray="4 4" />
        {/* Chennai (260, 110) -> Kochi / Ernakulam (135, 205) */}
        <path d="M 260 110 Q 185 170, 135 205" stroke="#D9232D" strokeWidth="2" strokeDasharray="4 4" />

        {/* LOCATION PINS WITH PULSE GLOW */}

        {/* 1. CHENNAI HUB (260, 110) */}
        <g transform="translate(260, 110)" filter="url(#pinShadow)">
          <circle r="12" fill="rgba(217, 35, 45, 0.25)" className="animate-ping" />
          <path d="M0 -12 C-5 -12 -9 -8 -9 -3 C-9 4 0 12 0 12 C0 12 9 4 9 -3 C9 -8 5 -12 0 -12 Z" fill="#D9232D" />
          <circle cy="-3" r="3" fill="#FFFFFF" />
        </g>

        {/* 2. BENGALURU (175, 130) */}
        <g transform="translate(175, 130)">
          <path d="M0 -10 C-4 -10 -7 -7 -7 -2 C-7 3 0 10 0 10 C0 10 7 3 7 -2 C7 -7 4 -10 0 -10 Z" fill="#D9232D" />
          <circle cy="-2" r="2.5" fill="#FFFFFF" />
        </g>

        {/* 3. PONDICHERRY (248, 148) */}
        <g transform="translate(248, 148)">
          <path d="M0 -10 C-4 -10 -7 -7 -7 -2 C-7 3 0 10 0 10 C0 10 7 3 7 -2 C7 -7 4 -10 0 -10 Z" fill="#D9232D" />
          <circle cy="-2" r="2.5" fill="#FFFFFF" />
        </g>

        {/* 4. COIMBATORE (145, 185) */}
        <g transform="translate(145, 185)">
          <path d="M0 -10 C-4 -10 -7 -7 -7 -2 C-7 3 0 10 0 10 C0 10 7 3 7 -2 C7 -7 4 -10 0 -10 Z" fill="#D9232D" />
          <circle cy="-2" r="2.5" fill="#FFFFFF" />
        </g>

        {/* 5. MADURAI (195, 210) */}
        <g transform="translate(195, 210)">
          <path d="M0 -10 C-4 -10 -7 -7 -7 -2 C-7 3 0 10 0 10 C0 10 7 3 7 -2 C7 -7 4 -10 0 -10 Z" fill="#D9232D" />
          <circle cy="-2" r="2.5" fill="#FFFFFF" />
        </g>

        {/* 6. KOCHI (135, 205) */}
        <g transform="translate(135, 205)">
          <path d="M0 -10 C-4 -10 -7 -7 -7 -2 C-7 3 0 10 0 10 C0 10 7 3 7 -2 C7 -7 4 -10 0 -10 Z" fill="#D9232D" />
          <circle cy="-2" r="2.5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};

export default SouthIndiaMap;
