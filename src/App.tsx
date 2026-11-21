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
   1. BRAND CONFIGURATION — Edit your brand name, tagline, logo path & hero copy
   ============================================================================ */
const BRAND_CONFIG: BrandConfig = {
  name: 'Nilam Creations',
  tagline: 'The Digital Hub',
  // Replace this path anytime with your own logo file inside /public
  logoPath: '/assets/aistudio/image_e51d730a.png',
  heroHeadline: 'Nilam Creations: The Digital Hub',
  heroSubheadline:
    'Simple, useful browser apps built with care — click any app below to launch directly with zero installs.',
  founderName: 'Parth Prajapati',
  founderUrl: 'https://parth-prajapati4539.netlify.app/',
};

/* ============================================================================
   2. PRODUCT LIST — Add, edit, or reorder apps here in one place.
      Optional `logoUrl`: point to a file in /public (e.g. '/logos/nilvid.png')
      to override the built-in squircle app icon.
   ============================================================================ */
const PRODUCTS: ProductItem[] = [
  {
    id: 'nilvid',
    name: 'Nilvid',
    category: 'Video',
    description:
      'Turns photos into animated videos with themes, transitions, and music directly in your browser.',
    status: 'Live',
    url: 'https://nilvid.netlify.app/#studio',
    icon: 'video',
  },
  {
    id: 'filemaker-tool',
    name: 'FileMaker Tool',
    category: 'Files',
    description:
      'Create, organize, and export clean project files and templates in seconds with zero server uploads.',
    status: 'Live',
    url: 'https://filemaker-tool.netlify.app/',
    icon: 'files',
  },
  {
    id: 'founder-developer',
    name: 'Founder & Developer',
    category: 'Portfolio',
    description:
      'Explore Parth Prajapati’s engineering portfolio, featured builds, and web experiments behind Nilam Creations.',
    status: 'Live',
    url: 'https://parth-prajapati4539.netlify.app/',
    icon: 'user',
  },
  {
    id: 'more-coming-soon',
    name: 'More Coming Soon',
    category: 'Upcoming',
    description:
      'New focused browser apps for creators, students, and builders are taking shape in our workshop.',
    status: 'Coming Soon',
    url: '#contact',
    icon: 'sparkles',
  },
];

/* ============================================================================
   3. WHY NILAM CREATIONS — 4 core value pillars
   ============================================================================ */
const WHY_NILAM_FEATURES: FeatureItem[] = [
  {
    number: '01.',
    title: 'Free to Use',
    description:
      'Accessible tools designed so anyone can start creating right away without paywalls blocking core features.',
    icon: 'gift',
  },
  {
    number: '02.',
    title: 'Fast in the Browser',
    description:
      'Lightweight web interfaces engineered to open instantly and run smoothly with zero software installation.',
    icon: 'zap',
  },
  {
    number: '03.',
    title: 'Privacy-Friendly',
    description:
      'Your photos, files, and creative work stay on your own device wherever possible—no unnecessary tracking.',
    icon: 'shield',
  },
  {
    number: '04.',
    title: 'Made in India',
    description:
      'Thoughtfully crafted and maintained in India with clean engineering and global usability in mind.',
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
  // Default theme is Dark Navy ('dark'); user preference persists in localStorage
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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 dark:bg-[#050C1B] dark:text-slate-100 transition-colors duration-200">
      <Navbar brand={BRAND_CONFIG} theme={theme} onToggleTheme={handleToggleTheme} />

      <main className="flex-1">
        {/* Product Library is placed first at the top for instant app launching */}
        <ProductsSection brand={BRAND_CONFIG} products={PRODUCTS} />
        <WhySection features={WHY_NILAM_FEATURES} />
        <AboutSection brand={BRAND_CONFIG} />
        <ContactSection contact={CONTACT_CONFIG} />
      </main>

      <Footer brand={BRAND_CONFIG} />
    </div>
  );
}
