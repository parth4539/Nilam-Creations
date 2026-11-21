import { useMemo, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Mail, Search, X } from 'lucide-react';
import type { BrandConfig, ProductCategory, ProductItem } from '../types';
import { AppLogo } from './AppLogos';

interface ProductsSectionProps {
  brand: BrandConfig;
  products: ProductItem[];
}

const FILTER_OPTIONS: { label: string; value: 'All' | ProductCategory }[] = [
  { label: 'All', value: 'All' },
  { label: 'Video', value: 'Video' },
  { label: 'Files', value: 'Files' },
  { label: 'Portfolio', value: 'Portfolio' },
];

const PARTICLES = [
  { top: '14%', left: '10%', size: 'h-2 w-2', delay: '0s' },
  { top: '24%', left: '82%', size: 'h-2.5 w-2.5', delay: '1.2s' },
  { top: '72%', left: '14%', size: 'h-1.5 w-1.5', delay: '2.1s' },
  { top: '78%', left: '88%', size: 'h-2 w-2', delay: '0.8s' },
  { top: '46%', left: '54%', size: 'h-1.5 w-1.5', delay: '1.7s' },
];

export function ProductsSection({ brand, products }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return products.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  const handleReset = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden border-b border-slate-200/80 dark:border-[#162B54] bg-gradient-to-b from-[#EFF5FF] via-[#F8FAFC] to-white dark:from-[#071530] dark:via-[#050C1B] dark:to-[#050C1B]"
    >
      {/* Subtle Animated Sapphire Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-halo absolute -top-36 left-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#3FA9F5]/14 dark:bg-[#0F3D91]/35 blur-[120px]" />
        <div className="animate-pulse-halo absolute -bottom-24 right-1/5 h-[340px] w-[340px] rounded-full bg-[#0F3D91]/10 dark:bg-[#3FA9F5]/14 blur-[110px]" />

        <svg
          className="animate-float-gem absolute top-14 right-[7%] hidden lg:block h-16 w-16 text-[#3FA9F5]/20 dark:text-[#3FA9F5]/15"
          viewBox="0 0 64 64"
          fill="none"
        >
          <polygon points="32,4 58,24 46,60 18,60 6,24" stroke="currentColor" strokeWidth="1.25" />
          <line x1="6" y1="24" x2="58" y2="24" stroke="currentColor" strokeWidth="1" />
        </svg>

        {PARTICLES.map((p, idx) => (
          <span
            key={idx}
            style={{ top: p.top, left: p.left, animationDelay: p.delay }}
            className={`animate-drift-particle absolute ${p.size} rounded-full bg-[#3FA9F5]/55 shadow-[0_0_12px_rgba(63,169,245,0.65)]`}
          />
        ))}
      </div>

      {/* Top Anchor + Compact Hero Header + Interactive App Library */}
      <div id="home" className="relative mx-auto max-w-6xl px-4 pt-7 pb-14 sm:px-6 sm:pt-9 sm:pb-16 lg:px-8 lg:pt-10 lg:pb-20">
        {/* Compact Hero Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-wide text-[#0F3D91] dark:text-[#3FA9F5]">
              {brand.name} <span aria-hidden="true" className="mx-1.5 text-slate-400 dark:text-slate-500">·</span> {brand.tagline}
            </p>
            <h1
              className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              {brand.heroHeadline}
            </h1>
            <p className="mt-2 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {brand.heroSubheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#about"
              className="inline-flex min-h-[40px] items-center justify-center rounded-xl border border-slate-300 dark:border-[#1E3A6E] bg-white/80 dark:bg-[#0B1730]/80 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 transition-colors hover:border-[#3FA9F5] hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
            >
              Our Story
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-xl bg-[#FF8A3D] px-4 py-2 text-xs sm:text-sm font-bold text-[#071329] shadow-[0_8px_22px_rgba(255,138,61,0.28)] transition-all duration-150 hover:bg-[#ff9b57] hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A3D]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>

        {/* Library Toolbar: Filter Tabs + Search */}
        <div className="mt-7 flex flex-col gap-3 border-t border-slate-200/80 dark:border-[#1A315E] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            <span className="text-slate-900 dark:text-white text-sm font-display font-bold">
              Product Library
            </span>
            <span aria-hidden="true">·</span>
            <span>Click any app icon to launch</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div
              role="tablist"
              aria-label="Filter apps by category"
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-[#1B315C] bg-slate-100/80 dark:bg-[#0B1730] p-1"
            >
              {FILTER_OPTIONS.map((option) => {
                const isActive = activeCategory === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(option.value)}
                    className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5] ${
                      isActive
                        ? 'bg-[#0F3D91] text-white shadow-sm dark:bg-[#3FA9F5] dark:text-[#050C1B]'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search apps..."
                aria-label="Search apps"
                className="h-11 w-full sm:w-52 rounded-xl border border-slate-200 dark:border-[#1B315C] bg-white/90 dark:bg-[#0B1730] pl-9 pr-8 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors focus:border-[#3FA9F5] focus:outline-none focus:ring-2 focus:ring-[#3FA9F5]/30"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Interactive App Launcher Grid (borderless app tiles, click directly to open) */}
        {filteredProducts.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 dark:border-[#1B315C] bg-white/70 dark:bg-[#0B1730]/60 p-10 text-center">
            <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              No matching apps found
            </p>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
              Try clearing your search or switching back to all categories.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-5 inline-flex min-h-[40px] items-center justify-center rounded-xl bg-[#0F3D91] dark:bg-[#3FA9F5] px-5 py-2 text-xs font-semibold text-white dark:text-[#050C1B] transition-colors hover:opacity-90 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              const isLive = product.status === 'Live';
              const isExternal = product.url.startsWith('http');

              return (
                <a
                  key={product.id}
                  href={product.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={
                    isExternal
                      ? `Launch ${product.name} in a new tab`
                      : `${product.name} — jump to updates`
                  }
                  className="group flex flex-col items-center text-center rounded-2xl p-5 transition-all duration-200 hover:bg-white/80 dark:hover:bg-[#0B1730]/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
                >
                  {/* Squircle App Icon */}
                  <AppLogo
                    id={product.id}
                    name={product.name}
                    logoUrl={product.logoUrl}
                    icon={product.icon}
                    isUpcoming={!isLive}
                  />

                  {/* App Name + Launch Arrow on Hover */}
                  <div className="mt-4 flex items-center justify-center gap-1.5">
                    <h2 className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#0F3D91] dark:group-hover:text-[#3FA9F5] transition-colors">
                      {product.name}
                    </h2>
                    {isExternal && (
                      <ArrowUpRight
                        className="h-4 w-4 text-[#FF8A3D] opacity-70 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Clean Unboxed Category · Status Line */}
                  <div className="mt-1 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span>{product.category === 'Upcoming' ? 'Workshop' : product.category}</span>
                    <span aria-hidden="true">·</span>
                    <span
                      className={`inline-flex items-center gap-1 font-semibold ${
                        isLive
                          ? 'text-[#0F3D91] dark:text-[#3FA9F5]'
                          : 'text-[#C25E18] dark:text-[#FF8A3D]'
                      }`}
                    >
                      {isLive ? (
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      <span>{product.status}</span>
                    </span>
                  </div>

                  {/* Concise App Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-xs">
                    {product.description}
                  </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
