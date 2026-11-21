import { ArrowUpRight } from 'lucide-react';
import type { BrandConfig } from '../types';
import { BrandLogo } from './Navbar';
import { Reveal } from './Reveal';

interface AboutSectionProps {
  brand: BrandConfig;
}

export function AboutSection({ brand }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#050C1B]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Story Column */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="text-sm font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
                Our Story
              </p>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
                style={{ textWrap: 'balance' }}
              >
                Named after the sapphire, crafted for everyday clarity
              </h2>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-white">Nilam</strong> is
                  more than a brand name—it carries our family name and means{' '}
                  <em className="not-italic font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
                    sapphire
                  </em>
                  . In nature, a sapphire is prized for its deep blue clarity, lasting strength, and clean facets.
                </p>
                <p>
                  That same spirit shapes every product under Nilam Creations. Instead of bloated dashboards or subscription walls, we focus on practical, single-purpose web tools—like turning photos into videos with Nilvid or organizing files effortlessly—so anyone can get things done quickly right inside their browser.
                </p>
              </div>
            </div>

            {/* Sapphire Brand Emblem & Founder Card */}
            <div className="lg:col-span-5 flex">
              <div className="relative flex w-full flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1B315C] bg-gradient-to-br from-[#F3F7FF] to-white dark:from-[#0D1E42] dark:to-[#09142B] p-7 sm:p-8">
                <div className="flex flex-col items-center text-center py-2">
                  <BrandLogo
                    logoPath={brand.logoPath}
                    alt="Nilam Creations sapphire emblem"
                    className="animate-float-gem h-28 w-28 drop-shadow-[0_12px_26px_rgba(63,169,245,0.35)]"
                  />
                  <blockquote className="mt-5 font-display text-lg sm:text-xl font-semibold leading-snug text-slate-900 dark:text-white">
                    “Build digital tools that feel effortless on the first click, respect user privacy, and remain genuinely useful.”
                  </blockquote>
                </div>

                <div className="mt-6 border-t border-slate-200/80 dark:border-[#1D3566] pt-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {brand.founderName}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Founder & Developer · Made in India
                    </p>
                  </div>

                  <a
                    href={brand.founderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-slate-300 dark:border-[#254580] bg-white dark:bg-[#0B1730] px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 transition-colors hover:border-[#3FA9F5] hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
                  >
                    <span>Portfolio</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
