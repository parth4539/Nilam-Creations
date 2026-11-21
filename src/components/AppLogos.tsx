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
 * Renders a crisp 56x56 squircle app icon for each tool in the hub.
 * Supports custom `logoUrl` images from /public or falls back to bespoke SVG app logos.
 */
export function AppLogo({ name, logoUrl, icon, isUpcoming = false }: AppLogoProps) {
  const [imgError, setImgError] = useState(false);

  if (logoUrl && !imgError) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[15px] shadow-[0_8px_18px_rgba(15,61,145,0.22)] ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-105">
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
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[15px] transition-transform duration-200 group-hover:scale-105 ${
        isUpcoming
          ? 'opacity-85 shadow-[0_6px_14px_rgba(15,61,145,0.14)] ring-1 ring-inset ring-white/15'
          : 'shadow-[0_10px_22px_rgba(15,61,145,0.28)] ring-1 ring-inset ring-white/25'
      }`}
    >
      {icon === 'video' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="appNilvid" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1D63EB" />
              <stop offset="100%" stopColor="#081E4F" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" fill="url(#appNilvid)" />
          <rect x="12" y="15" width="40" height="34" rx="8" fill="#061436" fillOpacity="0.5" stroke="#3FA9F5" strokeWidth="1.6" />
          <path d="M27 24.5C27 23.3 28.3 22.6 29.3 23.2L41.2 30.7C42.1 31.3 42.1 32.7 41.2 33.3L29.3 40.8C28.3 41.4 27 40.7 27 39.5V24.5Z" fill="#FF8A3D" />
        </svg>
      )}

      {icon === 'files' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="appFileMaker" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3FA9F5" />
              <stop offset="100%" stopColor="#0D3A8C" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" fill="url(#appFileMaker)" />
          <path d="M20 13H36L46 23V47C46 49.2 44.2 51 42 51H20C17.8 51 16 49.2 16 47V17C16 14.8 17.8 13 20 13Z" fill="#FFFFFF" />
          <path d="M36 13V20C36 21.7 37.3 23 39 23H46L36 13Z" fill="#9BD3FF" />
          <rect x="22" y="29" width="11" height="3.2" rx="1.6" fill="#FF8A3D" />
          <rect x="22" y="35" width="18" height="3" rx="1.5" fill="#0F3D91" fillOpacity="0.75" />
          <rect x="22" y="41" width="14" height="3" rx="1.5" fill="#3FA9F5" />
        </svg>
      )}

      {icon === 'user' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="appFounder" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#143273" />
              <stop offset="100%" stopColor="#050E24" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" fill="url(#appFounder)" />
          <path d="M21 24L13 32L21 40" stroke="#3FA9F5" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M43 24L51 32L43 40" stroke="#3FA9F5" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <polygon points="32,17 40,32 32,47 24,32" fill="#2A7BFF" stroke="#A8DDFF" strokeWidth="1.2" />
          <circle cx="32" cy="32" r="3" fill="#FF8A3D" />
        </svg>
      )}

      {icon === 'image' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <linearGradient id="appImg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F4BB8" />
            <stop offset="100%" stopColor="#072259" />
          </linearGradient>
          <rect width="64" height="64" fill="url(#appImg)" />
          <rect x="14" y="16" width="36" height="32" rx="7" fill="#07173B" stroke="#3FA9F5" strokeWidth="1.8" />
          <circle cx="24" cy="26" r="3.5" fill="#FF8A3D" />
          <path d="M18 43L28 32L35 39L41 34L47 43H18Z" fill="#3FA9F5" fillOpacity="0.85" />
        </svg>
      )}

      {icon === 'pdf' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <linearGradient id="appPdf" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1A428A" />
            <stop offset="100%" stopColor="#081B42" />
          </linearGradient>
          <rect width="64" height="64" fill="url(#appPdf)" />
          <rect x="17" y="14" width="22" height="28" rx="4" fill="#3FA9F5" fillOpacity="0.35" stroke="#7CC8FF" strokeWidth="1.4" />
          <rect x="25" y="22" width="22" height="28" rx="4" fill="#FFFFFF" />
          <rect x="29" y="30" width="14" height="3" rx="1.5" fill="#FF8A3D" />
          <rect x="29" y="36" width="11" height="3" rx="1.5" fill="#0F3D91" />
        </svg>
      )}

      {icon === 'qr' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <linearGradient id="appQr" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1B55BF" />
            <stop offset="100%" stopColor="#091D4A" />
          </linearGradient>
          <rect width="64" height="64" fill="url(#appQr)" />
          <rect x="15" y="15" width="14" height="14" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          <rect x="35" y="15" width="14" height="14" rx="3" fill="none" stroke="#3FA9F5" strokeWidth="2.5" />
          <rect x="15" y="35" width="14" height="14" rx="3" fill="none" stroke="#3FA9F5" strokeWidth="2.5" />
          <rect x="35" y="35" width="6" height="6" rx="1.5" fill="#FF8A3D" />
          <rect x="43" y="43" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        </svg>
      )}

      {icon === 'palette' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <linearGradient id="appPal" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2054B8" />
            <stop offset="100%" stopColor="#081A45" />
          </linearGradient>
          <rect width="64" height="64" fill="url(#appPal)" />
          <circle cx="25" cy="26" r="7" fill="#3FA9F5" />
          <circle cx="39" cy="26" r="7" fill="#FF8A3D" />
          <circle cx="32" cy="39" r="7" fill="#FFFFFF" fillOpacity="0.92" />
        </svg>
      )}

      {icon === 'notes' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <linearGradient id="appNotes" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#164094" />
            <stop offset="100%" stopColor="#07183D" />
          </linearGradient>
          <rect width="64" height="64" fill="url(#appNotes)" />
          <rect x="16" y="15" width="32" height="34" rx="6" fill="#0B2252" stroke="#3FA9F5" strokeWidth="1.6" />
          <rect x="22" y="23" width="20" height="3.2" rx="1.6" fill="#FF8A3D" />
          <rect x="22" y="30" width="16" height="3" rx="1.5" fill="#DCEBFF" />
          <rect x="22" y="37" width="12" height="3" rx="1.5" fill="#7CC8FF" />
        </svg>
      )}

      {icon === 'screen' && (
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <linearGradient id="appScreen" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1747A3" />
            <stop offset="100%" stopColor="#061436" />
          </linearGradient>
          <rect width="64" height="64" fill="url(#appScreen)" />
          <rect x="13" y="17" width="38" height="26" rx="5" fill="#071940" stroke="#3FA9F5" strokeWidth="1.8" />
          <circle cx="32" cy="30" r="6" fill="#FF8A3D" />
          <rect x="25" y="47" width="14" height="3" rx="1.5" fill="#7CC8FF" />
        </svg>
      )}
    </div>
  );
}
