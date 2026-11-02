import type { ButtonVariant } from './button';

export type HeroCtaLink = {
  labelPt: string;
  labelEn: string;
  href: string;
  variant: ButtonVariant;
  download?: boolean;
};
