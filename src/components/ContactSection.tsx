import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import type { ContactConfig } from '../types';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  contact: ContactConfig;
}

function SocialIcon({ name }: { name: 'Instagram' | 'YouTube' | 'LinkedIn' }) {
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  if (name === 'YouTube') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3v6Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200/80 dark:border-[#162B54] bg-[#F4F7FC] dark:bg-[#071124] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
              Get in Touch
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
              style={{ textWrap: 'balance' }}
            >
              Feedback, ideas, or collaborations
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Have a feature suggestion for Nilvid or FileMaker Tool, or want to build something together? Reach out directly via email or follow along on our channels.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
          {/* Email Card */}
          <Reveal delay={0.04} className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1B315C] bg-white dark:bg-[#0B1730] p-6 sm:p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F3D91]/10 dark:bg-[#3FA9F5]/12 text-[#0F3D91] dark:text-[#3FA9F5]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
                  Email Us
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                  Best for product feedback, bug reports, and partnership inquiries.
                </p>
                <p className="mt-3 text-sm font-semibold text-[#0F3D91] dark:text-[#3FA9F5] break-all">
                  {contact.email}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contact.email}?subject=Hello%20Nilam%20Creations`}
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[#FF8A3D] px-5 py-2.5 text-xs font-bold text-[#071329] transition-colors hover:bg-[#ff9b57] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A3D]"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-[#1E3A6E] bg-slate-50 dark:bg-[#071226] px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-[#3FA9F5] hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Social Links Card */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1B315C] bg-white dark:bg-[#0B1730] p-6 sm:p-7">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Follow Nilam Creations
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
                  Stay updated on new launches, tutorials, and tool releases.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} (${social.handle})`}
                    className="flex min-h-[44px] items-center justify-between rounded-xl border border-slate-200 dark:border-[#1E3A6E] bg-slate-50 dark:bg-[#071226] px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-[#3FA9F5] hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
                  >
                    <span className="flex items-center gap-3">
                      <SocialIcon name={social.name} />
                      <span>{social.name}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-60" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
