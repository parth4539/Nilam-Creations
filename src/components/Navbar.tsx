import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import type { BrandConfig } from '../types';

interface NavbarProps {
  brand: BrandConfig;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function BrandLogo({
  logoPath,
  alt,
  className = 'w-9 h-9',
}: {
  logoPath: string;
  alt: string;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <defs>
          <linearGradient id="sapphireGrad" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3FA9F5" />
            <stop offset="55%" stopColor="#0F3D91" />
            <stop offset="100%" stopColor="#1E56C5" />
          </linearGradient>
        </defs>
        <polygon
          points="32,4 58,22 48,58 16,58 6,22"
          fill="url(#sapphireGrad)"
          stroke="#7CC8FF"
          strokeWidth="2"
        />
        <polygon points="32,4 44,22 32,36 20,22" fill="#3FA9F5" fillOpacity="0.45" />
      </svg>
    );
  }

  return (
    <img
      src={logoPath}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className={`object-contain select-none ${className}`}
    />
  );
}

export function Navbar({ brand, theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-[#1A315E]/80 bg-white/85 dark:bg-[#050C1B]/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark + Sapphire Logo */}
        <a
          href="#home"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
        >
          <BrandLogo
            logoPath={brand.logoPath}
            alt={`${brand.name} logo`}
            className="h-9 w-9 drop-shadow-[0_0_10px_rgba(63,169,245,0.35)]"
          />
          <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0">
            {brand.name}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#3FA9F5] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-[#1E3A6E] bg-slate-100/80 dark:bg-[#0B1730] px-3.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors duration-150 hover:border-[#3FA9F5]/60 hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-4 w-4 text-[#FF8A3D]" aria-hidden="true" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 text-[#0F3D91]" aria-hidden="true" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-xl border border-slate-200 dark:border-[#1E3A6E] bg-slate-100/80 dark:bg-[#0B1730] text-slate-700 dark:text-slate-200 transition-colors hover:border-[#3FA9F5]/60 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-slate-200 dark:border-[#1A315E] bg-white dark:bg-[#071126] px-4 py-3"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-[#0F2147] hover:text-[#0F3D91] dark:hover:text-[#3FA9F5]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
