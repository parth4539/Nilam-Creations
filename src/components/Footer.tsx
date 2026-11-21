import type { BrandConfig } from '../types';
import { BrandLogo } from './Navbar';

interface FooterProps {
  brand: BrandConfig;
}

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Nilam', href: '#why' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Footer({ brand }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 dark:border-[#162B54] bg-white dark:bg-[#040915]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Logo + Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
          >
            <BrandLogo
              logoPath={brand.logoPath}
              alt={`${brand.name} logo`}
              className="h-8 w-8"
            />
            <div>
              <span className="block font-display text-base font-bold tracking-tight text-slate-900 dark:text-white">
                {brand.name}
              </span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">
                {brand.tagline}
              </span>
            </div>
          </a>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-slate-400">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-200/80 dark:border-[#14254A] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <p>Built with care in India.</p>
        </div>
      </div>
    </footer>
  );
}
