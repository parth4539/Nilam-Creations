import { Gift, Globe, ShieldCheck, Zap } from 'lucide-react';
import type { FeatureItem } from '../types';
import { Reveal } from './Reveal';

interface WhySectionProps {
  features: FeatureItem[];
}

function FeatureIcon({ icon }: { icon: FeatureItem['icon'] }) {
  const cls = 'h-4 w-4';
  switch (icon) {
    case 'gift':
      return <Gift className={cls} aria-hidden="true" />;
    case 'zap':
      return <Zap className={cls} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={cls} aria-hidden="true" />;
    case 'globe':
    default:
      return <Globe className={cls} aria-hidden="true" />;
  }
}

export function WhySection({ features }: WhySectionProps) {
  return (
    <section
      id="why"
      className="border-b border-slate-200/80 dark:border-[#162B54] bg-[#F4F7FC] dark:bg-[#071124] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
                Why Nilam Creations
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Built to be simple, fast, and respectful
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <Reveal key={item.number} delay={idx * 0.04}>
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5 text-[#0F3D91] dark:text-[#3FA9F5]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F3D91]/10 dark:bg-[#3FA9F5]/12">
                    <FeatureIcon icon={item.icon} />
                  </div>
                  <span className="font-display text-xs font-bold tabular-nums">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
