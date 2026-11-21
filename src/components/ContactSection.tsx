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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  if (name === 'YouTube') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3v6Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
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
      className="border-t border-slate-200/80 dark:border-[#162B54] bg-[#F4F7FC] dark:bg-[#071124] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold text-[#0F3D91] dark:text-[#3FA9F5]">
                Contact
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Questions, feedback, or tool ideas
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Reach out directly at{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-[#0F3D91] dark:text-[#3FA9F5] hover:underline"
                >
                  {contact.email}
                </a>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${contact.email}?subject=Hello%20Nilam%20Creations`}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl bg-[#FF8A3D] px-4 py-2 text-xs font-bold text-[#071329] transition-colors hover:bg-[#ff9b57] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A3D]"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Email Us</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-slate-200 dark:border-[#1E3A6E] bg-white dark:bg-[#0B1730] px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-[#3FA9F5] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} (${social.handle})`}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-slate-200 dark:border-[#1E3A6E] bg-white dark:bg-[#0B1730] px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-[#3FA9F5] hover:text-[#0F3D91] dark:hover:text-[#3FA9F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA9F5]"
                >
                  <SocialIcon name={social.name} />
                  <span>{social.name}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
