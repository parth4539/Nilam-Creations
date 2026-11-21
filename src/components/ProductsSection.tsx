import { useMemo, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Search, X } from 'lucide-react';
import type { BrandConfig, ProductCategory, ProductItem } from '../types';
import { AppLogo } from './AppLogos';

interface ProductsSectionProps {
  brand: BrandConfig;
  products: ProductItem[];
}

type FilterTab = 'All' | ProductCategory;

const FILTER_OPTIONS: { label: string; value: FilterTab }[] = [
  { label: 'All', value: 'All' },
  { label: 'Video', value: 'Video' },
  { label: 'Files', value: 'Files' },
  { label: 'Portfolio', value: 'Portfolio' },
];

export function ProductsSection({ brand, products }: ProductsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return products.filter((item) => {
      const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
      const matchesSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [products, activeFilter, searchQuery]);

  const handleReset = () => {
    setActiveFilter('All');
    setSearchQuery('');
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden border-b border-slate-200/80 dark:border-[#162B54] bg-gradient-to-b from-[#F1F6FF] via-[#F8FAFC] to-white dark:from-[#07142E] dark:via-[#050C1B] dark:to-[#050C1B]"
    >
      {/* Subtle Sapphire Ambient Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-halo absolute -top-40 left-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#3FA9F5]/12 dark:bg-[#0F3D91]/30 blur-[120px]" />
      </div>

      <div id="home" className="relative mx-auto max-w-6xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-14 lg:px-8">
        {/* Minimal Hub Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
              {brand.name} · {brand.tagline}
            </p>
            <h1 className="mt-1 font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {brand.heroHeadline}
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {brand.heroSubheadline} Click any app below to launch.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools..."
              aria-label="Search tools"
              className="h-10 w-full rounded-xl border border-slate-200 dark:border-[#1B315C] bg-white/90 dark:bg-[#0B1730] pl-9 pr-8 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors focus:border-[#3FA9F5] focus:outline-none focus:ring-2 focus:ring-[#3FA9F5]/30"
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

        {/* Clean Category Filter Strip */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 dark:border-[#162B54] pb-4">
          <div
            role="tablist"
            aria-label="Filter apps by category"
            className="flex flex-wrap items-center gap-1.5"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option.value)}
                  className={`min-h-[34px] rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5] ${
                    isActive
                      ? 'bg-[#0F3D91] text-white dark:bg-[#3FA9F5] dark:text-[#050C1B]'
                      : 'bg-slate-100/80 dark:bg-[#0B1730] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-medium tabular-nums text-slate-500 dark:text-slate-400">
            Showing {filteredProducts.length} of {products.length}
          </span>
        </div>

        {/* Clickable Live Apps Grid */}
        {filteredProducts.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 dark:border-[#1B315C] bg-white/70 dark:bg-[#0B1730]/60 p-8 text-center">
            <p className="font-display text-base font-semibold text-slate-900 dark:text-white">
              No matching apps found
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Try clearing your search or switching back to all tools.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 inline-flex min-h-[38px] items-center justify-center rounded-xl bg-[#0F3D91] dark:bg-[#3FA9F5] px-4 py-2 text-xs font-semibold text-white dark:text-[#050C1B] transition-opacity hover:opacity-90 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const isExternal = product.url.startsWith('http');

              return (
                <a
                  key={product.id}
                  href={product.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={`Open ${product.name}`}
                  className="group flex items-start gap-4 rounded-2xl border border-transparent hover:border-slate-200/90 dark:hover:border-[#1F3A70] bg-transparent hover:bg-white/90 dark:hover:bg-[#0B1730]/90 p-3.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
                >
                  <AppLogo
                    id={product.id}
                    name={product.name}
                    logoUrl={product.logoUrl}
                    icon={product.icon}
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="truncate font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0F3D91] dark:group-hover:text-[#3FA9F5] transition-colors">
                        {product.name}
                      </h2>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-[#FF8A3D] opacity-75 transition-transform duration-150 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <span>{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
                        <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                        <span>{product.status}</span>
                      </span>
                    </div>

                    <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm leading-snug text-slate-600 dark:text-slate-300">
                      {product.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
