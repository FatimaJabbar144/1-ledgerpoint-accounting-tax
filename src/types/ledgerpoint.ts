export interface ImageData { src: string; alt: string }
export interface NavigationItem { label: string; href: string }
export interface TrustPoint { number: string; title: string; description: string }
export interface ServiceItem { icon: string; title: string; description: string; featured?: boolean }
export interface DetailItem { icon: string; label: string; value: string }
export interface LedgerPointData {
  brand: { name: string; descriptor: string; tagline: string; homeLabel: string; mobileMenuLabel: string }; navigation: NavigationItem[]; navigationAriaLabel: string;
  hero: { eyebrow: string; title: string; accentTitle: string; description: string; primaryCta: string; secondaryCta: string; image: ImageData; trustNote: string; trustYears: string; avatars: string[] };
  about: { eyebrow: string; title: string; accentTitle: string; paragraphs: string[]; image: ImageData; imageLabel: string };
  trustPoints: TrustPoint[];
  services: { eyebrow: string; title: string; accentTitle: string; description: string; learnMoreLabel: string; items: ServiceItem[] };
  whyUs: { eyebrow: string; title: string; accentTitle: string; description: string; benefits: string[]; linkLabel: string; image: ImageData; stat: { value: string; label: string } };
  process: { eyebrow: string; title: string; accentTitle: string; steps: TrustPoint[] };
  cta: { eyebrow: string; title: string; accentTitle: string; description: string; buttonLabel: string };
  contact: { eyebrow: string; title: string; accentTitle: string; description: string; details: DetailItem[]; form: { name: string; email: string; phone: string; service: string; message: string; namePlaceholder: string; emailPlaceholder: string; phonePlaceholder: string; servicePlaceholder: string; messagePlaceholder: string; services: string[]; buttonLabel: string; successMessage: string } };
  footer: { copyright: string; closing: string; backToTop: string };
}
