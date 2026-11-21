import { useState } from 'react';
import type { ProductIconKey } from '../types';

interface AppLogoProps {
  id: string;
  name: string;
  logoUrl?: string;
  icon: ProductIconKey;
  isUpcoming?: boolean;
}

/**
 * Renders a crisp squircle app icon for each product.
 * If `logoUrl` is provided in PRODUCTS, displays that image; otherwise renders
 * a bespoke multi-layered SVG app emblem designed for each product.
 */
export function AppLogo({ id, name, logoUrl, icon, isUpcoming = false }: AppLogoProps) {
  const [imgError, setImgError] = useState(false);

  if (logoUrl && !imgError) {
    return (
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-[22px] shadow-[0_12px_28px_rgba(15,61,145,0.28)] ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <img
          src={logoUrl}
          alt={`${name} app icon`}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center overflow-hidden rounded-[22px] transition-all duration-200 group-hover:scale-105 group-active:scale-95 ${
        isUpcoming
          ? 'border border-dashed border-slate-300 dark:border-[#2B4B8A] bg-slate-100/80 dark:bg-[#0B1730]/80 shadow-sm'
          : 'shadow-[0_14px_30px_rgba(15,61,145,0.32)] ring-1 ring-inset ring-white/25'
      }`}
    >
      {id === 'nilvid' || icon === 'video' ? (
        <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="nilvidBg" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1B5CE0" />
              <stop offset="55%" stopColor="#0F3D91" />
              <stop offset="100%" stopColor="#082054" />
            </linearGradient>
            <linearGradient id="nilvidPlay" x1="34" y1="28" x2="68" y2="66" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFA86B" />
              <stop offset="100%" stopColor="#FF8A3D" />
            </linearGradient>
          </defs>
          <rect width="96" height="96" fill="url(#nilvidBg)" />
          {/* Top glossy highlight */}
          <ellipse cx="48" cy="10" rx="44" ry="18" fill="#3FA9F5" fillOpacity="0.24" />
          {/* Film frame brackets */}
          <rect x="18" y="22" width="60" height="52" rx="12" fill="#061638" fillOpacity="0.45" stroke="#3FA9F5" strokeOpacity="0.6" strokeWidth="2" />
          {/* Frame sprocket accents */}
          <rect x="24" y="28" width="6" height="5" rx="1.5" fill="#7CC8FF" fillOpacity="0.7" />
          <rect x="66" y="28" width="6" height="5" rx="1.5" fill="#7CC8FF" fillOpacity="0.7" />
          <rect x="24" y="63" width="6" height="5" rx="1.5" fill="#7CC8FF" fillOpacity="0.7" />
          <rect x="66" y="63" width="6" height="5" rx="1.5" fill="#7CC8FF" fillOpacity="0.7" />
          {/* Sunset orange play button */}
          <path d="M41 36.5C41 34.8 42.9 33.8 44.3 34.7L61.2 45.2C62.5 46 62.5 48 61.2 48.8L44.3 59.3C42.9 60.2 41 59.2 41 57.5V36.5Z" fill="url(#nilvidPlay)" />
          {/* Motion spark accent */}
          <circle cx="67" cy="39" r="3" fill="#3FA9F5" />
        </svg>
      ) : id === 'filemaker-tool' || icon === 'files' ? (
        <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="fileBg" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3FA9F5" />
              <stop offset="52%" stopColor="#1458C2" />
              <stop offset="100%" stopColor="#0A2B6E" />
            </linearGradient>
            <linearGradient id="docSheet" x1="28" y1="20" x2="68" y2="74" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#DCEBFF" />
            </linearGradient>
          </defs>
          <rect width="96" height="96" fill="url(#fileBg)" />
          <ellipse cx="48" cy="8" rx="44" ry="18" fill="#FFFFFF" fillOpacity="0.2" />
          {/* Back sheet shadow */}
          <rect x="24" y="25" width="42" height="50" rx="8" fill="#061942" fillOpacity="0.35" />
          {/* Primary file sheet */}
          <path d="M29 20H54L68 34V69C68 72.3 65.3 75 62 75H29C25.7 75 23 72.3 23 69V26C23 22.7 25.7 20 29 20Z" fill="url(#docSheet)" />
          {/* Folded corner */}
          <path d="M54 20V30C54 32.2 55.8 34 58 34H68L54 20Z" fill="#90CBFF" />
          {/* Structured file lines + accent bar */}
          <rect x="31" y="42" width="16" height="4.5" rx="2.25" fill="#FF8A3D" />
          <rect x="31" y="51" width="29" height="4" rx="2" fill="#0F3D91" fillOpacity="0.75" />
          <rect x="31" y="59" width="23" height="4" rx="2" fill="#3FA9F5" fillOpacity="0.85" />
        </svg>
      ) : id === 'founder-developer' || icon === 'user' ? (
        <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="devBg" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#132F6B" />
              <stop offset="55%" stopColor="#091A42" />
              <stop offset="100%" stopColor="#050E24" />
            </linearGradient>
            <linearGradient id="devGem" x1="28" y1="22" x2="68" y2="72" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#65C3FF" />
              <stop offset="100%" stopColor="#1862DC" />
            </linearGradient>
          </defs>
          <rect width="96" height="96" fill="url(#devBg)" />
          <circle cx="48" cy="48" r="32" fill="#3FA9F5" fillOpacity="0.12" />
          {/* Code brackets + sapphire core */}
          <path d="M33 36L21 48L33 60" stroke="#3FA9F5" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M63 36L75 48L63 60" stroke="#3FA9F5" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Center diamond emblem */}
          <polygon points="48,27 60,48 48,69 36,48" fill="url(#devGem)" stroke="#A5DBFF" strokeWidth="1.5" />
          <circle cx="48" cy="48" r="4.5" fill="#FF8A3D" />
        </svg>
      ) : (
        <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
          <g fill="none" strokeWidth="2.2">
            <polygon
              points="48,22 68,37 60,68 36,68 28,37"
              className="stroke-[#0F3D91]/60 dark:stroke-[#3FA9F5]/70"
              strokeLinejoin="round"
            />
            <line x1="28" y1="37" x2="68" y2="37" className="stroke-[#0F3D91]/40 dark:stroke-[#3FA9F5]/45" />
            <line x1="48" y1="22" x2="48" y2="68" className="stroke-[#0F3D91]/25 dark:stroke-[#3FA9F5]/30" />
          </g>
          <circle cx="66" cy="27" r="4" fill="#FF8A3D" />
        </svg>
      )}
    </div>
  );
}
