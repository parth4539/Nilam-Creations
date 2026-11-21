import { Gift, Globe, ShieldCheck, Zap } from 'lucide-react';
import type { FeatureItem } from '../types';
import { Reveal } from './Reveal';

interface WhySectionProps {
  features: FeatureItem[];
}

function FeatureIcon({ icon }: { icon: FeatureItem['icon'] }) {
  const cls = 'h-5 w-5';
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
      className="border-y border-slate-200/80 dark:border-[#162B54] bg-[#F4F7FC] dark:bg-[#071124] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
              Built With Purpose
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
              style={{ textWrap: 'balance' }}
            >
              Why Nilam Creations
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Four core principles guide every tool we ship—keeping software fast, respectful, and effortless to use.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <Reveal key={item.number} delay={idx * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1B315C] bg-white dark:bg-[#0B1730] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3FA9F5]/50">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold tabular-nums text-[#0F3D91] dark:text-[#3FA9F5]">
                      {item.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F3D91]/10 dark:bg-[#3FA9F5]/12 text-[#0F3D91] dark:text-[#3FA9F5]">
                      <FeatureIcon icon={item.icon} />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
