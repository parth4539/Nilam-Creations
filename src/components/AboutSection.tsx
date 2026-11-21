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
      className="py-12 sm:py-16 bg-white dark:bg-[#050C1B]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-slate-200 dark:border-[#1B315C] bg-[#F4F7FC] dark:bg-[#0B1730] p-3">
                <BrandLogo
                  logoPath={brand.logoPath}
                  alt="Nilam Creations sapphire emblem"
                  className="h-full w-full"
                />
              </div>

              <div className="max-w-2xl">
                <p className="text-xs font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
                  About {brand.name}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Named after the sapphire, built for clarity
                </h2>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  <strong className="font-semibold text-slate-900 dark:text-white">Nilam</strong> is our family name and means{' '}
                  <em className="not-italic font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
                    sapphire
                  </em>
                  —a gem known for deep clarity and strength. We build focused, browser-first tools so everyday creative and file workflows stay effortless.
                </p>
              </div>
            </div>

            <a
              href={brand.founderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-slate-300 dark:border-[#254580] bg-slate-50 dark:bg-[#0B1730] px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 transition-colors hover:border-[#3FA9F5] hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
            >
              <span>Founder: {brand.founderName}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
