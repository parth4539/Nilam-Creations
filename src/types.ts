export type ProductCategory = 'Video' | 'Files' | 'Utilities' | 'Portfolio';

export type ProductStatus = 'Live' | 'Coming Soon';

export type ProductIconKey =
  | 'video'
  | 'files'
  | 'user'
  | 'image'
  | 'pdf'
  | 'qr'
  | 'palette'
  | 'notes'
  | 'screen';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  status: ProductStatus;
  url: string;
  /** Optional path to a custom logo image inside /public (e.g. '/logos/nilvid.png') */
  logoUrl?: string;
  icon: ProductIconKey;
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
  icon: 'gift' | 'zap' | 'shield' | 'globe';
}

export interface BrandConfig {
  name: string;
  tagline: string;
  logoPath: string;
  heroHeadline: string;
  heroSubheadline: string;
  founderName: string;
  founderUrl: string;
}

export interface ContactConfig {
  email: string;
  socials: {
    name: 'Instagram' | 'YouTube' | 'LinkedIn';
    url: string;
    handle: string;
  }[];
}
