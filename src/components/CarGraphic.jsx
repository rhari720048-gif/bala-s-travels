import React from 'react';

export const CarGraphic = ({ type = 'sedan', className = '' }) => {
  if (type === 'sedan') {
    return (
      <svg viewBox="0 0 500 240" className={`w-full h-auto drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sedanBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="sedanGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="chrome" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <filter id="carShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Car Ground Shadow */}
        <ellipse cx="250" cy="205" rx="200" ry="14" fill="rgba(15, 23, 42, 0.12)" />

        {/* Car Main Body Group */}
        <g filter="url(#carShadow)">
          {/* Main Chassis Silhouette */}
          <path
            d="M 50 165 
               C 45 160, 42 145, 60 135 
               C 85 120, 130 115, 175 80 
               C 210 52, 310 48, 365 75 
               C 400 92, 435 110, 455 130 
               C 470 145, 465 165, 450 168 
               L 50 168 Z"
            fill="url(#sedanBody)"
            stroke="#CBD5E1"
            strokeWidth="2"
          />

          {/* Roof & Pillars */}
          <path
            d="M 165 92 
               C 200 60, 310 56, 355 82 
               L 395 115 
               L 135 115 Z"
            fill="url(#sedanGlass)"
          />

          {/* Side Windows Divider */}
          <line x1="250" y1="62" x2="250" y2="115" stroke="#64748B" strokeWidth="4" />

          {/* Window Chrome Trim */}
          <path
            d="M 155 94 C 195 62, 305 58, 352 82 L 392 115 L 140 115 Z"
            fill="none"
            stroke="url(#chrome)"
            strokeWidth="2.5"
          />

          {/* Headlights & Tail Lights */}
          <path d="M 445 135 C 460 138, 462 148, 442 152 Z" fill="#38BDF8" />
          <path d="M 55 140 C 45 142, 45 150, 58 152 Z" fill="#EF4444" />

          {/* Door Handles & Body Character Line */}
          <path d="M 90 132 C 180 130, 320 130, 430 138" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <rect x="210" y="132" width="22" height="4" rx="2" fill="url(#chrome)" />
          <rect x="300" y="132" width="22" height="4" rx="2" fill="url(#chrome)" />

          {/* Front & Rear Bumpers */}
          <path d="M 430 152 L 452 152 C 458 155, 455 168, 445 168 Z" fill="#E2E8F0" />
          <path d="M 50 168 C 42 165, 44 152, 55 152 Z" fill="#E2E8F0" />

          {/* Wheel Arch 1 (Front) */}
          <path d="M 345 168 A 36 36 0 0 0 417 168 Z" fill="#0F172A" />
          {/* Wheel Arch 2 (Rear) */}
          <path d="M 95 168 A 36 36 0 0 0 167 168 Z" fill="#0F172A" />

          {/* Front Wheel */}
          <circle cx="381" cy="168" r="30" fill="#1E293B" stroke="#64748B" strokeWidth="4" />
          <circle cx="381" cy="168" r="20" fill="url(#chrome)" />
          <circle cx="381" cy="168" r="8" fill="#D9232D" />

          {/* Rear Wheel */}
          <circle cx="131" cy="168" r="30" fill="#1E293B" stroke="#64748B" strokeWidth="4" />
          <circle cx="131" cy="168" r="20" fill="url(#chrome)" />
          <circle cx="131" cy="168" r="8" fill="#D9232D" />
        </g>
      </svg>
    );
  }

  if (type === 'suv') {
    return (
      <svg viewBox="0 0 500 240" className={`w-full h-auto drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="suvBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="suvGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="chromeSUV" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
          <filter id="suvShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* SUV Ground Shadow */}
        <ellipse cx="250" cy="205" rx="210" ry="16" fill="rgba(15, 23, 42, 0.15)" />

        {/* SUV Main Body Group */}
        <g filter="url(#suvShadow)">
          {/* Roof Rack */}
          <rect x="140" y="38" width="220" height="5" rx="2.5" fill="url(#chromeSUV)" />
          <rect x="175" y="43" width="8" height="8" fill="#334155" />
          <rect x="325" y="43" width="8" height="8" fill="#334155" />

          {/* Tall SUV Body Silhouette */}
          <path
            d="M 45 162 
               C 40 155, 38 130, 52 110 
               C 65 92, 125 55, 160 48 
               C 210 44, 340 45, 385 70 
               C 420 90, 455 115, 465 132 
               C 475 148, 470 165, 455 168 
               L 45 168 Z"
            fill="url(#suvBody)"
            stroke="#CBD5E1"
            strokeWidth="2"
          />

          {/* SUV Panoramic Windows */}
          <path
            d="M 152 56 
               C 200 52, 335 52, 375 75 
               L 420 110 
               L 115 110 Z"
            fill="url(#suvGlass)"
          />

          {/* Window Dividers (A, B, C Pillars) */}
          <line x1="225" y1="54" x2="225" y2="110" stroke="#475569" strokeWidth="5" />
          <line x1="315" y1="54" x2="315" y2="110" stroke="#475569" strokeWidth="5" />

          {/* Front Grille & Headlight Accent */}
          <path d="M 450 125 C 465 130, 468 142, 450 148 Z" fill="#38BDF8" />
          <path d="M 48 128 C 38 132, 40 145, 52 148 Z" fill="#EF4444" />

          {/* SUV Body Cladding & Crease Lines */}
          <path d="M 75 125 C 180 122, 320 122, 445 128" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 45 160 L 460 160" stroke="#475569" strokeWidth="4" />

          {/* Door Handles */}
          <rect x="180" y="124" width="24" height="5" rx="2.5" fill="url(#chromeSUV)" />
          <rect x="270" y="124" width="24" height="5" rx="2.5" fill="url(#chromeSUV)" />

          {/* Rugged Wheel Arches (Front & Rear) */}
          <path d="M 335 168 A 42 42 0 0 0 419 168 Z" fill="#0F172A" />
          <path d="M 85 168 A 42 42 0 0 0 169 168 Z" fill="#0F172A" />

          {/* Large SUV Alloy Wheels */}
          <circle cx="377" cy="168" r="33" fill="#1E293B" stroke="#475569" strokeWidth="5" />
          <circle cx="377" cy="168" r="22" fill="url(#chromeSUV)" />
          <circle cx="377" cy="168" r="9" fill="#D9232D" />

          <circle cx="127" cy="168" r="33" fill="#1E293B" stroke="#475569" strokeWidth="5" />
          <circle cx="127" cy="168" r="22" fill="url(#chromeSUV)" />
          <circle cx="127" cy="168" r="9" fill="#D9232D" />
        </g>
      </svg>
    );
  }

  // Premium MPV / Large Vehicle (Toyota Innova Crysta style)
  return (
    <svg viewBox="0 0 500 240" className={`w-full h-auto drop-shadow-md ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mpvBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="mpvGlass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="chromeMPV" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <filter id="mpvShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* MPV Ground Shadow */}
      <ellipse cx="250" cy="205" rx="220" ry="16" fill="rgba(15, 23, 42, 0.14)" />

      {/* MPV Main Body Group */}
      <g filter="url(#mpvShadow)">
        {/* Long Spacious Body Silhouette */}
        <path
          d="M 40 165 
             C 38 140, 40 105, 55 90 
             C 70 75, 140 46, 175 44 
             C 230 42, 380 44, 415 65 
             C 445 80, 470 115, 475 135 
             C 480 152, 472 165, 455 168 
             L 40 168 Z"
          fill="url(#mpvBody)"
          stroke="#CBD5E1"
          strokeWidth="2"
        />

        {/* Large Extended Glass Area */}
        <path
          d="M 165 48 
             C 220 46, 375 46, 405 68 
             L 440 108 
             L 105 108 Z"
          fill="url(#mpvGlass)"
        />

        {/* 3 Passenger Row Window Pillars */}
        <line x1="195" y1="48" x2="195" y2="108" stroke="#475569" strokeWidth="4" />
        <line x1="285" y1="48" x2="285" y2="108" stroke="#475569" strokeWidth="4" />
        <line x1="365" y1="48" x2="365" y2="108" stroke="#475569" strokeWidth="4" />

        {/* Front Chrome Grille & Headlights */}
        <path d="M 460 120 C 472 125, 474 138, 455 144 Z" fill="#38BDF8" />
        <path d="M 42 125 C 34 130, 35 142, 48 144 Z" fill="#EF4444" />

        {/* Side Moulding & Sliding Door Line */}
        <path d="M 65 124 C 180 120, 330 120, 450 126" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="285" y1="108" x2="285" y2="162" stroke="#CBD5E1" strokeWidth="2" />

        {/* Handles */}
        <rect x="210" y="122" width="22" height="5" rx="2.5" fill="url(#chromeMPV)" />
        <rect x="295" y="122" width="22" height="5" rx="2.5" fill="url(#chromeMPV)" />

        {/* Wheel Arches */}
        <path d="M 345 168 A 38 38 0 0 0 421 168 Z" fill="#0F172A" />
        <path d="M 85 168 A 38 38 0 0 0 161 168 Z" fill="#0F172A" />

        {/* Premium Multi-Spoke Wheels */}
        <circle cx="383" cy="168" r="31" fill="#1E293B" stroke="#475569" strokeWidth="4" />
        <circle cx="383" cy="168" r="21" fill="url(#chromeMPV)" />
        <circle cx="383" cy="168" r="8" fill="#D9232D" />

        <circle cx="123" cy="168" r="31" fill="#1E293B" stroke="#475569" strokeWidth="4" />
        <circle cx="123" cy="168" r="21" fill="url(#chromeMPV)" />
        <circle cx="123" cy="168" r="8" fill="#D9232D" />
      </g>
    </svg>
  );
};

export default CarGraphic;
