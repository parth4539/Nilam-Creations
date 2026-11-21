/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ProductsSection } from './components/ProductsSection';
import { WhySection } from './components/WhySection';
import type { BrandConfig, ContactConfig, FeatureItem, ProductItem } from './types';

/* ============================================================================
   1. BRAND CONFIGURATION — Edit your brand name, tagline, logo path & copy
   ============================================================================ */
const BRAND_CONFIG: BrandConfig = {
  name: 'Nilam Creations',
  tagline: 'The Digital Hub',
  // Replace this path anytime with your own logo file inside /public
  logoPath: '/assets/aistudio/image_e51d730a.png',
  heroHeadline: 'All Tools & Apps',
  heroSubheadline: 'Simple, fast browser tools built with care.',
  founderName: 'Parth Prajapati',
  founderUrl: 'https://parth-prajapati4539.netlify.app/',
};

/* ============================================================================
   2. PRODUCT LIST — Add, edit, or reorder apps here in one place.
      Change status to 'Live' and add your URL whenever a workshop tool launches.
      Optional `logoUrl`: point to a custom icon inside /public (e.g. '/logos/nilvid.png').
   ============================================================================ */
const PRODUCTS: ProductItem[] = [
  {
    id: 'nilvid',
    name: 'Nilvid Studio',
    category: 'Video',
    description: 'Turn photos into animated videos with themes, transitions, and music.',
    status: 'Live',
    url: 'https://nilvid.netlify.app/#studio',
    icon: 'video',
  },
  {
    id: 'filemaker-tool',
    name: 'FileMaker Tool',
    category: 'Files',
    description: 'Create, organize, and export clean project files without server uploads.',
    status: 'Live',
    url: 'https://filemaker-tool.netlify.app/',
    icon: 'files',
  },
  {
    id: 'founder-developer',
    name: 'Founder & Developer',
    category: 'Portfolio',
    description: 'Parth Prajapati’s engineering portfolio, builds, and web experiments.',
    status: 'Live',
    url: 'https://parth-prajapati4539.netlify.app/',
    icon: 'user',
  },
];

/* ============================================================================
   3. WHY NILAM CREATIONS — 4 core value pillars
   ============================================================================ */
const WHY_NILAM_FEATURES: FeatureItem[] = [
  {
    number: '01.',
    title: 'Free to Use',
    description: 'Open browser tools with core features available right away.',
    icon: 'gift',
  },
  {
    number: '02.',
    title: 'Fast in the Browser',
    description: 'Lightweight apps that open instantly with zero installations.',
    icon: 'zap',
  },
  {
    number: '03.',
    title: 'Privacy-Friendly',
    description: 'Files and media stay on your device whenever possible.',
    icon: 'shield',
  },
  {
    number: '04.',
    title: 'Made in India',
    description: 'Crafted in India with clean engineering for users everywhere.',
    icon: 'globe',
  },
];

/* ============================================================================
   4. CONTACT & SOCIAL LINKS — Update email and social profiles
   ============================================================================ */
const CONTACT_CONFIG: ContactConfig = {
  email: 'parthprajapati1509@gmail.com',
  socials: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/parth_4539/',
      handle: '@parth_4539',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@A-X1-4539',
      handle: '@A-X1-4539',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/parth-prajapati4539/',
      handle: 'parth-prajapati4539',
    },
  ],
};

/* ============================================================================
   MAIN APPLICATION
   ============================================================================ */
export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      return localStorage.getItem('nilam-theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('nilam-theme', theme);
    } catch {
      // Ignore storage restrictions
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-clip bg-gradient-to-b from-[#F1F6FF] via-[#F7FAFF] to-[#EFF4FC] text-slate-900 dark:from-[#07142E] dark:via-[#050C1B] dark:to-[#040916] dark:text-slate-100 transition-colors duration-200">
      {/* Subtle continuous ambient sapphire glow across the whole page */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-pulse-halo absolute -top-40 left-1/3 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#3FA9F5]/12 dark:bg-[#0F3D91]/28 blur-[130px]" />
        <div className="animate-pulse-halo absolute top-[55%] right-[10%] h-[380px] w-[380px] rounded-full bg-[#0F3D91]/8 dark:bg-[#3FA9F5]/10 blur-[130px]" />
      </div>

      <Navbar brand={BRAND_CONFIG} theme={theme} onToggleTheme={handleToggleTheme} />

      <main className="relative flex-1">
        <ProductsSection brand={BRAND_CONFIG} products={PRODUCTS} />
        <WhySection features={WHY_NILAM_FEATURES} />
        <AboutSection brand={BRAND_CONFIG} />
        <ContactSection contact={CONTACT_CONFIG} />
      </main>

      <div className="relative">
        <Footer brand={BRAND_CONFIG} />
      </div>
    </div>
  );
}
